import { fetchTransactions, fetchTokenMetadata } from "./sol-request.js";

const walletAddress = "2QbzSJRY9WQxxgYbpTXdEajQt8uWWbKZ8NnC5WBYvZvp"; // Replace with your wallet address

let lastBlockTime = 0; // Store the timestamp of the latest transaction

// Function to scroll to the last transaction and ensure visibility
function scrollToBottom(element) {
  setTimeout(() => {
    element.scrollTop = element.scrollHeight;
  }, 100); // Slight delay ensures the DOM is updated
}

// Function to format the current time as a readable string
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}

// Function to display "Last login" message (add it only once)
function displayLastLogin() {
  const transactionDataDiv = document.getElementById("transaction-data");

  // Prevent adding multiple "Last login" messages
  if (!document.querySelector(".last-login")) {
    const lastLoginMessage = document.createElement("p");
    lastLoginMessage.textContent = `Last login: ${getCurrentTime()}`;
    lastLoginMessage.classList.add("last-login");
    lastLoginMessage.style.color = "#00ff00"; // Green terminal-like text
    transactionDataDiv.appendChild(lastLoginMessage);
  }
}

// Function to update the txncard
async function updateTxnCard() {
  const transactionDataDiv = document.getElementById("transaction-data");

  try {
    const transactions = await fetchTransactions(walletAddress);

    if (transactions && transactions.length > 0) {
      // Filter transactions newer than the last known block time
      const newTransactions = transactions.filter((tx) => tx.block_time > lastBlockTime);

      // Update the lastBlockTime if there are new transactions
      if (newTransactions.length > 0) {
        lastBlockTime = Math.max(...newTransactions.map((tx) => tx.block_time));
      }

      // Reverse the newTransactions array to append oldest first
      const reversedTransactions = newTransactions.reverse();

      // Append new transactions to the card
      for (const tx of reversedTransactions) {
        const tokenAddress = tx.token_address;

        // Handle missing token address
        if (!tokenAddress) {
          console.warn("Transaction missing token address:", tx);
          continue;
        }

        // Fetch token ticker
        const ticker = await fetchTokenMetadata(tokenAddress);

        // Filter out "Unknown Token"
        if (ticker === "Unknown Token") {
          console.warn(`Skipping transaction with Unknown Token:`, tx);
          continue;
        }

        const transferType = tx.change_type === "inc" ? "buys" : "sells"; // Type
        const amount = (tx.amount / Math.pow(10, tx.token_decimals)).toFixed(2); // Adjust decimals

        // Format the display text
        const displayText = `Frog ${transferType} $${ticker} (${amount})`;

        // Add the transaction to the card
        const transactionEntry = document.createElement("p");
        transactionEntry.textContent = displayText;
        transactionEntry.classList.add("transaction-entry");
        transactionDataDiv.appendChild(transactionEntry);
      }

      // Ensure the last transaction is fully visible
      scrollToBottom(transactionDataDiv);
    }
  } catch (err) {
    console.error("Error updating transactions:", err);
  }
}

// Display "Last login" on initial load
displayLastLogin();

// Call updateTxnCard every 2 seconds
setInterval(updateTxnCard, 2000);

// Initial call to populate the txncard
updateTxnCard();
