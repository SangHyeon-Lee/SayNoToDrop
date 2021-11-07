var distance_goal = 10;
var distance = 7.5;
var calories_goal = 3000;
var calories = 1300;

var dist_portion = distance * 32;
var calories_portion = (calories * 320) / calories_goal;

var degrees = 115,
  radius = 0.6;
var radians = (degrees * Math.PI) / 180;
var x = -1 * radius * Math.cos(radians);
var y = radius * Math.sin(radians);

var layout_distance = {
  title: "Distance\n",
  xaxis: { visible: false, range: [-1, 1] },
  yaxis: { visible: false, range: [-1, 1] },
  width: 240,
  height: 250,
  annotations: [
    {
      font: {
        size: 15,
      },
      showarrow: false,
      text: distance + "km / " + distance_goal + "km",
    },
  ],
};

var trace_distance = {
  type: "pie",
  showlegend: false,
  hole: 0.8,
  rotation: -160,
  values: [dist_portion, 320 - dist_portion, 40],
  text: ["", "", ""],
  direction: "clockwise",
  textinfo: "text",
  sort:false,
  textposition: "inside",
  marker: {
    colors: ["rgba(255, 0, 0, 0.6)", "rgba(0, 0, 0, 0.1)", "white"],
  },
  labels: ["0-10", "10-50", "50-200", "200-500", "500-2000", ""],
  hoverinfo: "label",
};

var layout_calories = {
  title: "Calories\n",
  xaxis: { visible: false, range: [-1, 1] },
  yaxis: { visible: false, range: [-1, 1] },
  width: 240,
  height: 250,
  annotations: [
    {
      font: {
        size: 15,
      },
      showarrow: false,
      text: calories + "cal / " + calories_goal + "cal",
    },
  ],
};

var trace_calories = {
  type: "pie",
  showlegend: false,
  hole: 0.8,
  rotation: -160,
  values: [calories_portion, 320 - calories_portion, 40],
  text: ["", "", ""],
  direction: "clockwise",
  textinfo: "text",
  sort:false,
  textposition: "inside",
  marker: {
    colors: ["rgba(0, 0, 255, 0.6)", "rgba(0, 0, 0, 0.1)", "white"],
  },
  labels: ["0-10", "10-50", "50-200", "200-500", "500-2000", ""],
  hoverinfo: "label",
};

var data_distance = [trace_distance];
var data_calories = [trace_calories];
var plotDiv_distance = document.getElementById("daliy-distance-plot");
var plotDiv_calories = document.getElementById("daliy-calories-plot");

Plotly.plot(plotDiv_distance, data_distance, layout_distance, {
  staticPlot: true,
});
Plotly.plot(plotDiv_calories, data_calories, layout_calories, {
  staticPlot: true,
});
