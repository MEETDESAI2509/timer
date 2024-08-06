const url = 'https://historical-outgoing-floor.glitch.me/check-timer/67'; // Replace with your API endpoint

function updateStatusAndTimer() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const statusElement = document.getElementById('status');
      const timerElement = document.getElementById('timer');

      // Assuming the API returns an object with 'status' and 'remainingTime' properties
      statusElement.textContent = `Status: ${data.status.status}`;
      timerElement.textContent = `Timer: ${data.status.remainingTime} seconds`;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      document.getElementById('status').textContent = 'Status: Error';
      document.getElementById('timer').textContent = 'Timer: --';
    });
}

// Fetch data every second
setInterval(updateStatusAndTimer, 1000);

// Initial fetch to populate data immediately
updateStatusAndTimer();
