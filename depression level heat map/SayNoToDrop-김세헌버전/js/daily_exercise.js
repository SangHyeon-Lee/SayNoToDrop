function daily_exercise() {
  var distance = 7.5;
  var calories = 1300;

  var yesterday = new Date(2021, 10, 9);

  if (showing_date.getTime() == yesterday.getTime()) {
    distance = 9.8;
    calories = 2500;
  }

  var distance_goal = 10;
  var calories_goal = 3000;

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
    width: 247,
    height: 180,
    margin: {
      l: 10,
      r: 10,
      b: 10,
      t: 30,
    },
    annotations: [
      {
        font: {
          size: 12,
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
    sort: false,
    textposition: "inside",
    marker: {
      colors: ["rgba(255, 0, 0, 0.6)", "rgba(0, 0, 0, 0.1)", "white"],
    },
    labels: ["", "", ""],
    hoverinfo: "label",
  };

  var layout_calories = {
    title: "Calories\n",
    xaxis: { visible: false, range: [-1, 1] },
    yaxis: { visible: false, range: [-1, 1] },
    
    width: 247,
    height: 180,
    margin: {
      l: 10,
      r: 10,
      b: 10,
      t: 30,
    },
    annotations: [
      {
        font: {
          size: 12,
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
    sort: false,
    textposition: "inside",
    marker: {
      colors: ["rgba(0, 0, 255, 0.6)", "rgba(0, 0, 0, 0.1)", "white"],
    },
    labels: ["", "", ""],
    hoverinfo: "label",
  };

  var data_distance = [trace_distance];
  var data_calories = [trace_calories];
  var plotDiv_distance = document.getElementById("daliy-distance-plot");
  var plotDiv_calories = document.getElementById("daliy-calories-plot");

  Plotly.newPlot(plotDiv_distance, data_distance, layout_distance, {
    staticPlot: true,
  });
  Plotly.newPlot(plotDiv_calories, data_calories, layout_calories, {
    staticPlot: true,
  });
}

daily_exercise()