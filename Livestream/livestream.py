import openai
import requests
import vlc
import time
import threading
import queue
import uuid
import os

# --------------------- CONFIG ---------------------
openai.api_key = "" # Replace with your OpenAI key
elevenlabs_api_key = "" # Replace with your Eleven Labskey
VOICE_ID = "" # Replace with your Eleven Labs Voice ID

# Kick API configuration
KICK_API_URL = " "
KICK_API_HEADERS = {
    "x-rapidapi-host": "",
    "x-rapidapi-key": ""  # Replace with your RapidAPI key
}


# System role for ChatGPT
conversation = [
    {
        "role": "system",
        "content": (
           
           # Replace with your Preload prompt
        )
    }
]

# Queues for TTS and playback
text_queue = queue.Queue()
playback_queue = queue.Queue()

# --------------------- FUNCTIONS ---------------------

def chatgpt_reply(user_message: str) -> str:
    """Sends the user's message to ChatGPT, updates conversation, returns AI text."""
    conversation.append({"role": "user", "content": user_message})
    response = openai.chat.completions.create(
        model="gpt-4",
        messages=conversation
    )
    ai_text = response.choices[0].message.content
    conversation.append({"role": "assistant", "content": ai_text})
    return ai_text

def generate_elevenlabs_tts(text: str) -> str:
    """Send text to ElevenLabs and generate an audio file."""
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"
    headers = {
        "xi-api-key": elevenlabs_api_key,
        "Content-Type": "application/json"
    }
    data = {
        "text": text,
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.75
        }
    }
    r = requests.post(url, headers=headers, json=data)
    if r.status_code == 200:
        filename = f"tts_{uuid.uuid4().hex[:8]}.mp3"
        with open(filename, "wb") as f:
            f.write(r.content)
        return filename
    else:
        print("ElevenLabs TTS Error:", r.text)
        return None

def fetch_kick_messages():
    """Fetch messages from the Kick API using RapidAPI."""
    try:
        response = requests.get(KICK_API_URL, headers=KICK_API_HEADERS)
        if response.status_code == 200:
            data = response.json()
            if "data" in data and "messages" in data["data"]:
                return data["data"]["messages"]
            else:
                print("Unexpected response structure:", data)
                return []
        else:
            print(f"Kick API Error: {response.status_code} - {response.text}")
    except Exception as e:
        print(f"Error fetching Kick messages: {e}")
    return []

def process_kick_messages():
    """Fetch and process Kick chat messages in a loop."""
    seen_message_ids = set()  # To store unique message IDs

    while True:
        messages = fetch_kick_messages()
        for message in messages:
            message_id = message.get("id")  # Assuming each message has a unique 'id' field
            if not message_id or message_id in seen_message_ids:
                continue  # Skip if message ID is missing or already processed

            seen_message_ids.add(message_id)  # Mark the message as processed

            user_name = message.get("sender", {}).get("username", "Unknown User")
            chat_content = message.get("content", "").strip()

            if not chat_content:
                continue

            formatted_message = f"User {user_name} says: {chat_content}"
            print(f"Chat (Kick): {formatted_message}")
            ai_response = chatgpt_reply(formatted_message)
            print(f"Frogalicious: {ai_response}")

            # Add AI response to the TTS queue
            text_queue.put(ai_response)

        time.sleep(1)  # Fetch messages every 10 seconds


def tts_worker():
    """Generate TTS from ChatGPT responses."""
    while True:
        text = text_queue.get()
        if text is None:
            print("TTS worker stopping.")
            break

        mp3_file = generate_elevenlabs_tts(text)
        if mp3_file:
            playback_queue.put(mp3_file)

        text_queue.task_done()

def playback_worker():
    """Play audio files using VLC."""
    vlc_args = os.environ.get("VLC_ARGS", "").split()
    instance = vlc.Instance(*vlc_args)
    player = instance.media_player_new()

    while True:
        mp3_file = playback_queue.get()
        if mp3_file is None:
            print("Playback worker stopping.")
            break

        media = instance.media_new(mp3_file)
        player.set_media(media)
        player.play()
        while player.get_state() not in (vlc.State.Ended, vlc.State.Stopped):
            time.sleep(0.1)
        playback_queue.task_done()

def manual_input():
    """Process manual input via terminal."""
    while True:
        user_inp = input("Producer: ")
        if user_inp.lower() in ["quit", "exit"]:
            print("Stopping session...")
            text_queue.put(None)
            playback_queue.put(None)
            break

        if user_inp.strip():
            ai_text = chatgpt_reply(user_inp)
            print(f"Frogalicious: {ai_text}")
            text_queue.put(ai_text)

# --------------------- MAIN ---------------------

def main():
    # Start TTS and playback threads
    tts_thread = threading.Thread(target=tts_worker, daemon=True)
    playback_thread = threading.Thread(target=playback_worker, daemon=True)
    kick_thread = threading.Thread(target=process_kick_messages, daemon=True)

    tts_thread.start()
    playback_thread.start()
    kick_thread.start()

    print("Frogalicious the frog is live! Type your prompts.\nType 'quit' or 'exit' to end.\n")

    manual_input()

    print("All done!")

if __name__ == "__main__":
    main()
