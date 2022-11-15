const API = 'https://deezerdevs-deezer.p.rapidapi.com/artist/4902904'

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6df7fad887msh9ed48cbd7bac35bp17c3bejsn413413481c78',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

async function fetchData(uriApi){
    const response = await fetch(uriApi, options);
    const status = await response.status
	const data = await response.json();
	if(status === 200){
		return data;
	}else{
		return status;
	}
    
}

 (async () => {
	try {
		const artist = await fetchData(API)
		let view = `

			<div class="group relative">
				<div
					class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
					<img src="${artist.picture_medium}" alt="" class="w-full">
				</div>
				<div class="mt-4 flex justify-between">
					<h3 class="text-sm text-gray-700">
						<span aria-hidden="true" class="absolute inset-0"></span>
						${artist.name}
					</h3>
				</div>
			</div>

		`;
	content.innerHTML =view;

	} catch (error) {
		console.log(error);
	}
 })();


//  (async () => {
// 	try {
// 		const artists = await fetchData(API)
// 		let view = `
// 		${artists.items.map(artist => `
// 			<div class="group relative">
// 				<div
// 					class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
// 					<img src="${artist.picture_medium}" alt="" class="w-full">
// 				</div>
// 				<div class="mt-4 flex justify-between">
// 					<h3 class="text-sm text-gray-700">
// 						<span aria-hidden="true" class="absolute inset-0"></span>
// 						${artist.name}
// 					</h3>
// 				</div>
// 			</div>
// 		`).slice(0,4).join()}

// 		`;
// 	content.innerHTML =view;

// 	} catch (error) {
// 		console.log(error);
// 	}
//  })();