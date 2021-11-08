function timetofloat(timestamp) {
  const splited = timestamp.split(":");
  const hr = parseInt(splited[0]);
  const min = parseInt(splited[1]);
  const sec = parseInt(splited[2]);

  return hr + min / 60 + sec / 3600;
}

var x_array = [],
  y_array = [];

function makeplot() {
  d3.csv("./data/fake_2021_11_10_emotion.csv", function (data) {
    processData(data);
  });
}

function processData(allRows) {
  x_array.push(timetofloat(allRows.timestamp));
  y_array.push(allRows.emotion_level);

  //   console.log("X", x, "Y", y);
  makePlotly(x_array, y_array);
}

function makePlotly(x, y) {
  var plotDiv = document.getElementById("daliy-emotion-plot");
  var traces = [
    {
      x: x,
      y: y,
      
    },
  ];

  var layout = {
    xaxis: {range: [6, 24]},
    yaxis: {range: [-9, 9], tickvals:[-9, -3, 0, 9]},
    height: 350,
    shapes: [
        {
            type: 'line',
            xref: 'paper',
            x0: 0,
            y0: -3,
            x1: 1,
            y1: -3,
            line:{
                color: 'rgb(255, 0, 0)',
                width: 4,
                dash:'dot'
            }
        }
        ]
  };

  Plotly.newPlot(plotDiv, traces, layout);
}
makeplot();
