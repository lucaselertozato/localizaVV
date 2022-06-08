function localizar(){
  navigator.geolocation.getCurrentPosition(mostraPosicao)
}

function mostraPosicao(pos){
  var lt = pos.coords.latitude
  var lg = pos.coords.longitude

  document.getElementById("geo").innerHTML =
    "Latitude: " + lt + ", Logitude: " + lg

  var map = L.map('map').setView([lt, lg], 15);
  var marker = L.marker([lt, lg]).addTo(map);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoicm1jczg3IiwiYSI6ImNrcDQyZXdmeTA1czcydW9kN2NzM2Z0bnoifQ.chS8NOz9VPnvOwT1f4Oo5Q'
  }).addTo(map);
  
}