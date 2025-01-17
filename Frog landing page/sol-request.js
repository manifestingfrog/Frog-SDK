// API Token
const apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOjE3MzcwNjM2NzgyNTMsImVtYWlsIjoibWlyYWNsZWphbWVzODEyQGdtYWlsLmNvbSIsImFjdGlvbiI6InRva2VuLWFwaSIsImFwaVZlcnNpb24iOiJ2MiIsImlhdCI6MTczNzA2MzY3OH0.M09W_psz4rUsU8WGaedeLkP84bkqTFi-Uu6lX0F-Z9Q"; // Replace with your actual token

// Fetch transactions
async function fetchTransactions(walletAddress) {
  const requestOptions = {
    method: "GET",
    headers: {
      token: apiToken,
    },
  };

  const url = `https://pro-api.solscan.io/v2.0/account/balance_change?address=${walletAddress}&page_size=30&page=1&sort_by=block_time&sort_order=desc`;

  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error(`Failed to fetch transactions: ${response.status}`);
    }

    const data = await response.json();
    return data.data; // Return transaction data
  } catch (err) {
    console.error("Error fetching transactions:", err);
    return [];
  }
}

// Fetch token metadata
async function fetchTokenMetadata(tokenAddress) {
  const requestOptions = {
    method: "GET",
    headers: {
      token: apiToken,
    },
  };

  const url = `https://pro-api.solscan.io/v2.0/token/meta?address=${tokenAddress}`;

  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error(`Failed to fetch token metadata: ${response.status}`);
    }

    const data = await response.json();
    return data.data?.symbol || "Unknown Token"; // Return token symbol or fallback
  } catch (err) {
    console.error(`Error fetching metadata for ${tokenAddress}:`, err);
    return "Unknown Token"; // Fallback in case of failure
  }
}

// Export the functions
export { fetchTransactions, fetchTokenMetadata };
