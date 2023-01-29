// adding path to geojson
const source = './data/cc_Salary.geojson';


// Create a map object
// Zoom to 2.5 for global map view

const map = L.map('map', {
  center: [40.5912574, -40.8506107],
  zoom: 2.5,
});

// Add a tile layer.
const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var geojson;

// Read in the CSV file
d3.json(source).then(function(data) {


	//processData(data);
  console.log("data_here", data)


	// Create a new choropleth layer.
	geojson = L.choropleth(data, {
  

		// // Define which property in the features to use (is this tag correct?  check this)
		valueProperty: "Avg Salary",
		scale: ['#ffffb2', '#b10026'], // chroma.js scale - include as many as you like
		steps: 4, // number of breaks or steps in range
		mode: 'q', // q for quantile, e for equidistant, k for k-means
		style: {
		color: '#fff', // border color
		weight: 2,
		fillOpacity: 0.8
	},
	onEachFeature: function(feature, layer) {
		layer.bindPopup(feature.properties.value)
	}
}).addTo(map);})




