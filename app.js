 let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 100,    
    progressEndValue = 0,    
    speed = 100;
    
let progress = setInterval( async () => {

	function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    }

    const fk_id = getQueryParam('id');
	const response = await fetch('https://historical-outgoing-floor.glitch.me/check-timer/'+fk_id);
    const data = await response.json();
    console.log(data)

    const { status, remainingTime } = data.status;
    if (status === 'completed' || remainingTime <= 0 || data.status === 'No bids' ) {
    	progressStartValue = 0;
    	circularProgress.style.background = `conic-gradient(#7d2ae8 ${0 * 3.6}deg, #ededed 0deg)`
    	progressValue.textContent = 'Round Over'
    	clearInterval(progress);

    }
    else{
    	progressStartValue = Math.ceil(data.status.remainingTime * 5);
    	progressValue.textContent = `${data.status.remainingTime}s`
	    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

	    if(progressStartValue == progressEndValue){
	        clearInterval(progress);
	    }

    }

        
}, speed);
