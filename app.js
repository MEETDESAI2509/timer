function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    }

const fk_id = getQueryParam('id');
const url = 'https://historical-outgoing-floor.glitch.me/check-timer/'+fk_id; // Replace with your API endpoint
console.log(url)
function updateStatusAndTimer() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      //const statusElement = document.getElementById('status');
      const timerElement = document.getElementById('timer');
      console.log(data)
      // Assuming the API returns an object with 'status' and 'remainingTime' properties
      if (data.status.remainingTime < 1) {timerElement.textContent = `Bid Completed`;}
      else{
      //statusElement.textContent = `Status: ${data.status.status}`;
      timerElement.textContent = `Timer: ${data.status.remainingTime} seconds`;}
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      //document.getElementById('status').textContent = 'Status: Error';
      document.getElementById('timer').textContent = '--';
    });
}

// Fetch data every second
setInterval(updateStatusAndTimer, 1000);

// Initial fetch to populate data immediately
updateStatusAndTimer();
