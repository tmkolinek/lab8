function initMap() {
	L.mapquest.key = 'QADSjSIH8KqDZxudybBlfW8Zl9DWdTZ1'

	var map = L.mapquest.map('map', {
  center: [32.917, -117.230],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12,
  zoomControl: false

  });


	L.marker([32.917, -177.230]).addTo(map);

}