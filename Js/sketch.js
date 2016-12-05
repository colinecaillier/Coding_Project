function setup() {

  var mymap = L.map('mapid').setView([46.2148, 6.1506], 11);

  L.tileLayer('https://api.mapbox.com/styles/v1/colinecaillier/ciwcn7t0f00ax2qpm7n00tcvh/tiles/256/{level}/{col}/{row}@2x?access_token=pk.eyJ1IjoiY29saW5lY2FpbGxpZXIiLCJhIjoiY2l3Y242eGdwMDA0YjJ0bnhraDF1NDlxMyJ9.FQLJag67Cka7KRcY-ZiKsA', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'your.mapbox.project.id',
    accessToken: 'your.mapbox.public.access.token'
}).addTo(mymap);


//    background(255);

  //  var url ='http://bl.ocks.org/d/fdb1c8127d80efe5a0356632c96c0c4e'
    //loadJSON(url2,drawData2);
//    print("///Setting Up 1 ///");


}

function draw() {




}
function onEachFeature(feature, layer) {
  layer.bindPopup(layer.feature.properties.name);


}
