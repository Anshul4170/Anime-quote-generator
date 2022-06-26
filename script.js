let Button = document.getElementById('btn')


function newquote() {

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b15add1e36msh214bb7b5a2959e3p1dd476jsnb006a4ba6323',
		'X-RapidAPI-Host': 'anime-quotes1.p.rapidapi.com'
	}
};



fetch('https://anime-quotes1.p.rapidapi.com/api/random', options)
	.then(response => response.json())
	.then(response => { 
		console.log(response);

		document.getElementById('quote').innerText = response.quote;
		document.getElementById('charactername').innerText = response.character;
		document.getElementById('animename').innerText = response.anime;
	})
}


Button.addEventListener('click', newquote);
