// adding path to csv 
const source = './data/cc_Salary.geojson';





// // Get the data with d3.
// d3.json(geoData).then(function(data) {

// 	// Create a new choropleth layer.
// 	geojson = L.choropleth(data, {
  
// 	  // Define which property in the features to use.
// 	  valueProperty: "DP03_16E",
  
// 	  // Set the color scale...use this if can't get chroma library below to work
// 	  scale: ["#ffffb2", "#b10026"],
  
// 	  // The number of breaks in the step range
// 	  steps: 10,
  
// 	  // q for quartile, e for equidistant, k for k-means
// 	  mode: "q",
// 	  style: {
// 		// Border color
// 		color: "#fff",
// 		weight: 1,
// 		fillOpacity: 0.8
// 	  },




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

var geoJson;

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

// // Plugin to create breaks in numerical values and assigns varying colors

// L.choropleth(geojsonData, {
// 	valueSalary: 'countries', // which value in countries to use
// 	scale: ['white', 'red'], // chroma.js scale - include as many as you like
// 	steps: 4, // number of breaks or steps in range
// 	mode: 'q', // q for quantile, e for equidistant, k for k-means
// 	style: {
// 		color: '#fff', // border color
// 		weight: 2,
// 		fillOpacity: 0.8
// 	},
// 	onEachFeature: function(feature, layer) {
// 		layer.bindPopup(feature.properties.value)
// 	}
// }).addTo(map)


