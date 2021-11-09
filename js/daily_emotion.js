function timetofloat(timestamp) {
  const splited = timestamp.split(":");
  const hr = parseInt(splited[0]);
  const min = parseInt(splited[1]);
  const sec = parseInt(splited[2]);

  return hr + min / 60 + sec / 3600;
}



function make_emotionplot() {

  var x_array = [],
  y_array = [];

  var yesterday = new Date(2021, 10, 9);
  var data_file = "./data/fake_2021_11_10_emotion.csv";
  if (showing_date.getTime() == yesterday.getTime()) {
    data_file = "./data/fake_2021_11_09_emotion.csv";
  }
  d3.csv(data_file, function (data) {
    processData(data, x_array, y_array);
  });
}

function processData(allRows, x_array, y_array) {
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
    xaxis: {
      range: [6, 24],
      title: "Time"
    },
    yaxis: {
      range: [-9, 9], tickvals:[-9, -3, 0, 9],
      title: "Emotion Level"
    },
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
make_emotionplot();
