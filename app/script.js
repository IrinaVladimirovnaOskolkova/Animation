let btn = document.getElementById('btnAnimation');
let block = document.querySelectorAll('#block');
let progress = document.querySelector('.progressTetx');

btn.onclick = () => {	
	btn.disabled = true;
	btn.innerHTML = 'in progress';
	let numbStart = 0;
	let numbEnd = 0;

   	progress.innerHTML += '--- PROGRESS START ---<br>';

   	function start(){
   		setTimeout(end, 1000);

   		progress.innerHTML +='Cell: ' + (numbStart + 1) + ' Animation start!<br>';

   		block[numbStart].classList.add('transform');
   		++numbStart;

   		if(numbStart >= 16)
   			clearInterval(startCell);
   		
   	}
	let startCell = setInterval(start, 250); 

    function end(){
    	progress.innerHTML += 'Cell: ' + (numbEnd + 1) + ' Animation end!<br>';
    	++numbEnd;

    	if(numbEnd >= 16)
    		endAnimation();
    }
	
   	function endAnimation(){
		alert('success');
	   	progress.innerHTML += '--- PROGRESS END ---<br>';
	   	btn.disabled = false;
		btn.innerHTML = 'start';

		for(let bk of block)
			bk.classList.remove('transform');
	}
 	
};


