var lon = [];
var lat = [];
var speed = [];

const average = list => list.reduce((prev, curr) => Number(prev) + Number(curr)) / list.length;

function show_map() {
  scl = [
    [0, "rgb(255,255,0)"],
    [0.5, "rgb(255, 224, 200)"],
    [1, "rgb(255, 192, 255)"],
    [1.5, "rgb(255, 160, 255)"],
    [2, "rgb(255, 128, 150)"],
    [2.5, "rgb(255, 96, 0)"],
    [3, "rgb(255, 64, 0)"],
    [3.5, "rgb(255, 32, 0)"],
    [4, "rgb(255, 0, 0)"],
  ];

  var data = [
    {
      type: "scattermapbox",
      mode: "markers",
      text: speed,
      lon: lon,
      lat: lat,
      marker: {
        color: speed,
        colorscale: scl,
        cmin: 0,
        cmax: 4,
        reversescale: false,
        opacity: 1,
        size: 5,
        colorbar: {
          thickness: 10,
          titleside: "right",
          outlinecolor: "rgba(68,68,68,0)",
          ticks: "outside",
          ticklen: 3,
          // shoticksuffix: "last",
          ticksuffix: "m/sec",
          dtick: 0.5,
        },
      },
      name: "Exercise map",
    },
  ];

  layout = {
    dragmode: "zoom",
    mapbox: {
      center: {
        lat: average(lat),
        lon: average(lon),
      },
      domain: {
        x: [0, 1],
        y: [0, 1],
      },
      style: "light",
      zoom: 12,
    },
    margin: {
      r: 0,
      t: 0,
      b: 0,
      l: 0,
      pad: 0,
    },
    showlegend: false,
  };

  Plotly.setPlotConfig({
    mapboxAccessToken:
      "pk.eyJ1Ijoic2FuZ2h5ZW9uIiwiYSI6ImNrdzI0MDFtdzA3a2UydW1wcXRwN3pzaDYifQ.z1gzq_vzgfcSJOxIBPzY7g",
  });

  Plotly.newPlot("map", data, layout);
}
function exercise_map() {
  lon = [];
  lat = [];
  speed = [];

  var timezone_offset = new Date().getTimezoneOffset() * 60000;
  var fixed_date = new Date(showing_date - timezone_offset);

  var date_string = fixed_date.toISOString().substring(0, 10);

  var file = "./data/" + date_string + "_exercise_map.csv";

  d3.csv(file, function (data) {
    lon.push(data.longitude);
    lat.push(data.latitude);
    speed.push(data.speed);
  }).then(function () {
    show_map();
  });
}

exercise_map();
