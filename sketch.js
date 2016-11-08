function setup() {
  createCanvas(windowWidth,windowHeight);
    var url ='https://overpass-api.de/api/interpreter?data=%2F*%0AThis%20example%20shows%20how%20the%20data%20can%20be%20styled.%0AHere%2C%20some%20common%20amenities%20are%20displayed%20in%20%0Adifferent%20colors.%0A%0ARead%20more%3A%20http%3A%2F%2Fwiki.openstreetmap.org%2Fwiki%2FOverpass_turbo%2FMapCSS%0A*%2F%0A%5Bout%3Ajson%5D%3B%2F*fixed%20by%20auto%20repair*%2F%0A%0A%28%0A%20%20%20%20%20node%5Bamenity%3Dbench%5D%2846.1918931567155%2C6.124534606933594%2C46.212684783929%2C6.1722564697265625%29%3B%0A%20%20%0A%20%20%0A%29%3B%0Aout%20meta%3B%2F*fixed%20by%20auto%20repair*%2F%0A>%3B%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A';
    loadJSON(url,drawData);

    print("///Setting Up///");


}

function draw() {


}

function drawData(data) {

  print(data);
  print("chargé");
print(data[104].lat)
}
