from solana.rpc.api import Client
from datetime import datetime, timedelta
import base58

# Connect to Solana RPC
rpc_client = Client("https://api.mainnet-beta.solana.com")

# Replace with the Solana wallet address you want to track
WALLET_ADDRESS = "ARa88DrLTkryikeA5MTHxn1KwCpsJNnYFAYQQKYLyXfD"

def fetch_recent_transactions(wallet_address, minutes=20):
    now = datetime.utcnow()
    cutoff_time = now - timedelta(minutes=minutes)

    # Fetch the wallet's transaction signatures
    response = rpc_client.get_signatures_for_address(wallet_address, limit=50)
    if not response.get("result"):
        print("Failed to fetch signatures:", response)
        return []

    recent_transactions = []
    for tx in response["result"]:
        block_time = datetime.utcfromtimestamp(tx["blockTime"])
        if block_time >= cutoff_time:
            recent_transactions.append(tx)

    return recent_transactions

if __name__ == "__main__":
    transactions = fetch_recent_transactions(WALLET_ADDRESS, minutes=20)
    if transactions:
        print(f"Recent transactions in the last 20 minutes ({len(transactions)} found):")
        for tx in transactions:
            print(f"  Signature: {tx['signature']}, Block Time: {datetime.utcfromtimestamp(tx['blockTime'])}")
    else:
        print("No transactions found in the last 20 minutes.")
