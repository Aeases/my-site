<button on:click={sendRequest}>Send Request</button>
<h2>bruh</h2>
<script>
  async function sendRequest() {
    try {
      // The URL you want to send the request to
      const url = 'https://pz.zanefitzgerald.com/start-pz';

      // The fetch() call. 'await' pauses the function until the promise is resolved.
      const response = await fetch(url, {
        method: 'POST', // Specify the request method (GET, POST, etc.)
        headers: {
          'Authorization': `Bearer YOUR_ACCESS_TOKEN`, // Replace with your actual access token
          'Content-Type': 'application/json', // Set the content type to JSON
        },
      });

      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the JSON response
      const data = await response.json();

      // Do something with the data (e.g., log it)
      console.log('Success:', data);
    } catch (error) {
      // Handle any errors that occurred during the fetch
      console.error('Error:', error);
    }
  }
</script>
