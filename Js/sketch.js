
var mapid = L.map('mapid');

function setup(){
  var urlFond ='https://api.mapbox.com/styles/v1/colinecaillier/ciwcn7t0f00ax2qpm7n00tcvh/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY29saW5lY2FpbGxpZXIiLCJhIjoiY2l3Y242eGdwMDA0YjJ0bnhraDF1NDlxMyJ9.FQLJag67Cka7KRcY-ZiKsA';
  var urlBench ='https://api.mapbox.com/styles/v1/colinecaillier/ciwlxt0ap00072qqyrdaqhl3s/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY29saW5lY2FpbGxpZXIiLCJhIjoiY2l3Y242eGdwMDA0YjJ0bnhraDF1NDlxMyJ9.FQLJag67Cka7KRcY-ZiKsA';


mapid.setView([46.2148, 6.1506], 11);

// calque fond
L.tileLayer(urlFond,{
  attribution:'fond',
  maxZoom: 22,
  id: 'colinecaillier.ciwcossds06h62olkl109i7bz-60liw',
  accessToken: 'pk.eyJ1IjoiY29saW5lY2FpbGxpZXIiLCJhIjoiY2l3Y242eGdwMDA0YjJ0bnhraDF1NDlxMyJ9.FQLJag67Cka7KRcY-ZiKsA'

}).addTo(mapid);

// calque bench
L.tileLayer(urlBench,{
  attribution:'bench',
  maxZoom: 22,
  id: 'colinecaillier.ciwcossds06h62olkl109i7bz-60liw',
  accessToken: 'pk.eyJ1IjoiY29saW5lY2FpbGxpZXIiLCJhIjoiY2l3Y242eGdwMDA0YjJ0bnhraDF1NDlxMyJ9.FQLJag67Cka7KRcY-ZiKsA'
}).addTo(mapid);

$('.pure-button').on('click', function(){
  mapid.locate({setView: true, maxZoom: 15});
});
}
mapid.on('locationfound', onLocationFound);
function onLocationFound(e) {
    console.log(e);
    // e.heading will contain the user's heading (in degrees) if it's available, and if not it will be NaN. This would allow you to point a marker in the same direction the user is pointed.
    L.marker(e.latlng).addTo(mapid);
}
