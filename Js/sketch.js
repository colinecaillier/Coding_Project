

function setup(){
  var urlFond ='https://api.mapbox.com/styles/v1/colinecaillier/ciwcn7t0f00ax2qpm7n00tcvh/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY29saW5lY2FpbGxpZXIiLCJhIjoiY2l3Y242eGdwMDA0YjJ0bnhraDF1NDlxMyJ9.FQLJag67Cka7KRcY-ZiKsA',
      fondAttrib = 'Mapbox fond',
      urlBench='https://api.mapbox.com/styles/v1/colinecaillier/ciwlxt0ap00072qqyrdaqhl3s/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY29saW5lY2FpbGxpZXIiLCJhIjoiY2l3Y242eGdwMDA0YjJ0bnhraDF1NDlxMyJ9.FQLJag67Cka7KRcY-ZiKsA',
      benchAttrib = 'Mapbox Bench';

  var Fond = L.tileLayer(urlFond,{
    attribution:fondAttrib,
    id: 'colinecaillier.ciwcossds06h62olkl109i7bz-60liw',
    accessToken: 'pk.eyJ1IjoiY29saW5lY2FpbGxpZXIiLCJhIjoiY2l3Y242eGdwMDA0YjJ0bnhraDF1NDlxMyJ9.FQLJag67Cka7KRcY-ZiKsA'
  });
  var Bench = L.tileLayer(Bench,{
    attribution:benchAttrib ,
      id: 'colinecaillier.ciwcossds06h62olkl109i7bz-60liw',
      accessToken: 'pk.eyJ1IjoiY29saW5lY2FpbGxpZXIiLCJhIjoiY2l3Y242eGdwMDA0YjJ0bnhraDF1NDlxMyJ9.FQLJag67Cka7KRcY-ZiKsA'
  });

var mapid = L.map('mapid',{
  layers : [Fond]
}).setView([46.2148, 6.1506],11);

var baseLayer ={
    "Background" : Fond,
    "Bench" : Bench
};
  //var mapid = L.map('mapid').fitWorld();
//  map.locate({setView: true, maxZoom: 16});

/*
var mapid = L.map('mapid', {
    center: [46.2148, 6.1506],
    maxZoom:22,

    layers: [Fond]
});*/

print('yo im working')

var maps = {
    "Fond": Fond,
  //  "Bench": Bench
};
var controlLayers = L.control.layers(maps).addTo(mapid);

}
