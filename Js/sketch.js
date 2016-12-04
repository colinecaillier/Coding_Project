function setup() {

  var map = L.map('map', {
      center: [46.2148, 6.1506],
      zoom: 11
  });

    background(255);

  //  var url ='http://bl.ocks.org/d/fdb1c8127d80efe5a0356632c96c0c4e'
    //loadJSON(url2,drawData2);
    print("///Setting Up 1 ///");


}

function draw() {


}

function drawData(data) {
//  print(data);

//
// var object = data.elements;
// var mappedX;
// var mappedY;
//
//   print(data);
//   print("chargé");
//   print(object);
//   print(latitude);
//   print(longitude);
//
//   for (i = 0 ; i < object.length; i++){
//
//     var latitude = object[i].lat;
//     var longitude = object[i].lon;
//
//     var texte = object[i].tags.amenity;
//     print(i);
//     print(latitude,longitude);
//     print(texte);
//
//     mappedX = map(latitude-46,0.15,0.29,0,windowWidth);
//     mappedY = map(longitude-6,0.12,0.21,0,windowHeight);
//
//
//     text(latitude,mappedX,mappedY);
//     text(longitude,mappedX-10,mappedY-10);
//
//
//     ellipse(mappedX,mappedY,5,5);
//     stroke(0);
//  }

}

function drawData2(data) {
  print(data);
  print("chargé");




}
