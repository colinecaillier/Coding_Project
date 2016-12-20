


function setup(){

  /// LAYERS
  var urlFond ='https://api.mapbox.com/styles/v1/colinecaillier/ciwxrg02w00092prvpgjx9a6c/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY29saW5lY2FpbGxpZXIiLCJhIjoiY2l3Y242eGdwMDA0YjJ0bnhraDF1NDlxMyJ9.FQLJag67Cka7KRcY-ZiKsA',
      fondAttrib = 'Background',
      urlBench='https://api.mapbox.com/styles/v1/colinecaillier/ciwlxt0ap00072qqyrdaqhl3s/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY29saW5lY2FpbGxpZXIiLCJhIjoiY2l3Y242eGdwMDA0YjJ0bnhraDF1NDlxMyJ9.FQLJag67Cka7KRcY-ZiKsA',
   benchAttrib =  'Bench',
   urlStreet = 'https://api.mapbox.com/styles/v1/colinecaillier/ciwcn7t0f00ax2qpm7n00tcvh/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY29saW5lY2FpbGxpZXIiLCJhIjoiY2l3Y242eGdwMDA0YjJ0bnhraDF1NDlxMyJ9.FQLJag67Cka7KRcY-ZiKsA',
   Streetattrib = 'map of Geneva';


  var Fond = L.tileLayer(urlFond,{
    attribution:fondAttrib,
    id: 'colinecaillier.ciwcossds06h62olkl109i7bz-60liw',
    accessToken: 'pk.eyJ1IjoiY29saW5lY2FpbGxpZXIiLCJhIjoiY2l3Y242eGdwMDA0YjJ0bnhraDF1NDlxMyJ9.FQLJag67Cka7KRcY-ZiKsA'
  });

  var Bench = L.tileLayer(urlBench,{
    attribution:benchAttrib ,
        id: 'colinecaillier.ciwcossds06h62olkl109i7bz-60liw',
        accessToken: 'pk.eyJ1IjoiY29saW5lY2FpbGxpZXIiLCJhIjoiY2l3Y242eGdwMDA0YjJ0bnhraDF1NDlxMyJ9.FQLJag67Cka7KRcY-ZiKsA'
  });

  var Street = L.tileLayer(urlStreet,{
    attribution: Streetattrib ,
        id: 'colinecaillier.ciwcossds06h62olkl109i7bz-60liw',
        accessToken: 'pk.eyJ1IjoiY29saW5lY2FpbGxpZXIiLCJhIjoiY2l3Y242eGdwMDA0YjJ0bnhraDF1NDlxMyJ9.FQLJag67Cka7KRcY-ZiKsA'
  });



// Parametres globaux cartes

var mapid = L.map('mapid',{
  layers : [Fond],
  drawControl : true
}).setView([46.2148, 6.1506],11);

L.control.locate().addTo(mapid);
//L.control.locate(OPTIONS).addTo(mapid);


// draw


// Draw



/// controlLayers

var baseLayer ={
    "Background" : Fond
};

var overlays ={
  "Geneva Map" : Street,
  "Bench": Bench


};


//print('yo im working')


var controlLayers = L.control.layers(baseLayer,overlays).addTo(mapid);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(" " + e.latlng.toString())
        .openOn(mapid);
}


mapid.on('click', onMapClick);


///

}







// location
