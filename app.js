function initMap() {
	
	const map = new google.maps.Map(document.getElementById("map"), { 

	Phoenix = {lat: 33.448376, lng: -112.010390},
	zoom: 11,
	});

	const marker = new google.maps.Marker({
		position:{lat: 33.466213, lng: -112.098239},
		map: map,
		title: "AZ State Fair",
	});
	const marker1 = new google.maps.Marker({
		position:{lat: 33.449181, lng: -111.945045},
		map: map,
		title: "Phoenix Zoo",
	});
	const marker2 = new google.maps.Marker({
		position:{lat: 33.472495, lng: -112.072037},
		map: map,
		title: "Heard Museum",
	});
	const marker3 = new google.maps.Marker({
		position:{lat: 33.474112, lng: -112.088245},
		map: map,
		title: "Enchanted Island Amusement Park",
	});
	const marker4 = new google.maps.Marker({
		position:{lat: 33.452209, lng: -111.949365},
		map: map,
		title: "Papago Park",
	});
	const marker5 = new google.maps.Marker({
		position:{lat: 33.445451, lng: -112.068011},
		map: map,
		title: "Pueblo Grande Museum",
	});
	const marker6 = new google.maps.Marker({
		position:{lat: 33.446134, lng: -111.985064},
		map: map,
		title: "Chase Field",
	});
	const marker7 = new google.maps.Marker({
		position:{lat: 33.667497, lng: -111.979233},
		map: map,
		title: "Musical Instrument Museum",
	});
	const marker8 = new google.maps.Marker({
		position:{lat: 33.469118, lng: -112.054409},
		map: map,
		title: "Yoshino Castle",
	});
}
