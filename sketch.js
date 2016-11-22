function setup() {
  createCanvas(windowWidth,windowHeight);
    var url ='https://overpass-api.de/api/interpreter?data=%2F*%0AThis%20example%20shows%20how%20the%20data%20can%20be%20styled.%0AHere%2C%20some%20common%20amenities%20are%20displayed%20in%20%0Adifferent%20colors.%0A%0ARead%20more%3A%20http%3A%2F%2Fwiki.openstreetmap.org%2Fwiki%2FOverpass_turbo%2FMapCSS%0A*%2F%0A%5Bout%3Ajson%5D%3B%2F*fixed%20by%20auto%20repair*%2F%0A%0A%28%0A%20%20%20%20%20node%5Bamenity%3Dbench%5D%2846.1918931567155%2C6.124534606933594%2C46.212684783929%2C6.1722564697265625%29%3B%0A%20%20%0A%20%20%0A%29%3B%0Aout%20meta%3B%2F*fixed%20by%20auto%20repair*%2F%0A>%3B%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A';
    loadJSON(url,drawData);

    print("///Setting Up///");
    background(255);

    var url1= '';

    var table;

  table = new p5.Table();

  table.addColumn('Object');
  table.addColumn('latitude');
  table.addColumn('Logitude');



}

function draw() {



}

function drawData(data) {
var object = data.elements;
var mappedX;
var mappedY;

  print(data);
  print("chargé");
  print(object);
  print(latitude);
  print(longitude);

  for (i = 0 ; i < object.length; i++){

    var latitude = object[i].lat;
    var longitude = object[i].lon;

    var texte = object[i].tags.amenity;
    print(i);
    print(latitude,longitude);
    print(texte);

    mappedX = map(latitude-46,0.15,0.29,0,windowWidth);
    mappedY = map(longitude-6,0.12,0.21,0,windowHeight);


    text(latitude,mappedX,mappedY);
    text(longitude,mappedX-10,mappedY-10);


    ellipse(mappedX,mappedY,5,5);
    stroke(0);


  }

  var rd = random(object[i]);
  text(rd.lat, 100, windowHeight-100);


}
