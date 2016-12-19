

function setup(){

  /// LAYERS
  var urlFond ='https://api.mapbox.com/styles/v1/colinecaillier/ciwcn7t0f00ax2qpm7n00tcvh/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY29saW5lY2FpbGxpZXIiLCJhIjoiY2l3Y242eGdwMDA0YjJ0bnhraDF1NDlxMyJ9.FQLJag67Cka7KRcY-ZiKsA',
      fondAttrib = 'Mapbox fond',
      urlBench='https://api.mapbox.com/styles/v1/colinecaillier/ciwlxt0ap00072qqyrdaqhl3s/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY29saW5lY2FpbGxpZXIiLCJhIjoiY2l3Y242eGdwMDA0YjJ0bnhraDF1NDlxMyJ9.FQLJag67Cka7KRcY-ZiKsA',
   benchAttrib = 'Mapbox Bench';

  var Fond = L.tileLayer(urlFond,{
    attribution:fondAttrib,
    id: 'colinecaillier.ciwcossds06h62olkl109i7bz-60liw',
    accessToken: 'pk.eyJ1IjoiY29saW5lY2FpbGxpZXIiLCJhIjoiY2l3Y242eGdwMDA0YjJ0bnhraDF1NDlxMyJ9.FQLJag67Cka7KRcY-ZiKsA'
  });

  var Bench = L.geoJson(Bench,{
    attribution:benchAttrib ,
        id: 'colinecaillier.ciwcossds06h62olkl109i7bz-60liw',
        accessToken: 'pk.eyJ1IjoiY29saW5lY2FpbGxpZXIiLCJhIjoiY2l3Y242eGdwMDA0YjJ0bnhraDF1NDlxMyJ9.FQLJag67Cka7KRcY-ZiKsA'
  });



// Parametres globaux cartes

var mapid = L.map('mapid',{
  layers : [Fond]
}).setView([46.2148, 6.1506],11);

mapid.locate({setView: true, maxZoom: 22});
  print(setView);


/// controlLayers

var baseLayer ={
    "Background" : Fond
};

var overlays ={
  "Bench": Bench
}


//print('yo im working')


var controlLayers = L.control.layers(baseLayer,overlays).addTo(mapid);

// GRAPHIQUE

var LocateIcon = L.icon({
    iconUrl: './images/marker-icon.png',

    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


L.marker([myloc], {icon: greenIcon}).addTo(map);

var lc = L.control.locate({
    position: 'topright',
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);


}







// location


function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.circle(e.latlng, radius).addTo(mapid);
    mapid.on('locationfound', onLocationFound);

}

function onLocationError(e) {
    alert(e.message);
    mapid.on('locationerror', onLocationError);

}
