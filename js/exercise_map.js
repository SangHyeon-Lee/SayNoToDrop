var map;

function initMap() {
  var yesterday = new Date(2021, 10, 9);

  var color = ["#FF0000", "#FF8000", "#FFFF00"];

  if (showing_date.getTime() == yesterday.getTime()) {
    color = ["#FF8000", "#FFFF00", "#FF0000"];
  }

  var kaist = { lat: 36.370495, lng: 127.36074 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: kaist,
    disableDefaultUI: true,
  });
  new google.maps.Marker({
    position: { lat: 36.366148, lng: 127.363482 },
    map: map,
    label: "START",
  });
  const coord1 = [
    { lat: 36.366148, lng: 127.363482 },
    { lat: 36.369837, lng: 127.360827 },
    { lat: 36.370766, lng: 127.359719 },
    { lat: 36.37178, lng: 127.35711 },
  ];
  const path1 = new google.maps.Polyline({
    path: coord1,
    geodesic: true,
    strokeColor: color[0],
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  path1.setMap(map);

  const coord2 = [
    { lat: 36.37178, lng: 127.35711 },
    { lat: 36.373421, lng: 127.358912 },
    { lat: 36.374457, lng: 127.359881 },
    { lat: 36.374413, lng: 127.363995 },
  ];
  const path2 = new google.maps.Polyline({
    path: coord2,
    geodesic: true,
    strokeColor: color[1],
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  path2.setMap(map);

  const coord3 = [
    { lat: 36.374413, lng: 127.363995 },
    { lat: 36.373428, lng: 127.3654 },
    { lat: 36.372599, lng: 127.364381 },
    { lat: 36.372426, lng: 127.36275 },
  ];
  const path3 = new google.maps.Polyline({
    path: coord3,
    geodesic: true,
    strokeColor: color[2],
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  path3.setMap(map);

  const coord4 = [
    { lat: 36.372426, lng: 127.36275 },
    { lat: 36.371571, lng: 127.361302 },
    { lat: 36.370698, lng: 127.362944 },
    { lat: 36.371139, lng: 127.365111 },
  ];
  const path4 = new google.maps.Polyline({
    path: coord4,
    geodesic: true,
    strokeColor: color[1],
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  path4.setMap(map);

  const coord5 = [
    { lat: 36.371139, lng: 127.365111 },
    { lat: 36.368763, lng: 127.367171 },
  ];
  const path5 = new google.maps.Polyline({
    path: coord5,
    geodesic: true,
    strokeColor: color[0],
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  path5.setMap(map);
  new google.maps.Marker({
    position: { lat: 36.368763, lng: 127.367171 },
    map: map,
    label: "END",
  });
}
