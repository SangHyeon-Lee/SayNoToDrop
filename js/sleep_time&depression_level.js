var trace1 = {
    x: ["10/12", "10/13", "10/14", "10/15", "10/16", "10/17"],
    y: [4, 12, 9, 11, 3, 7],
    name: 'Sleep Time',
    type: 'scatter'
};
  
var trace2 = {
    x: ["10/12", "10/13", "10/14", "10/15", "10/16", "10/17"],
    y: [20, 10, 40, 35, 23, 12],
    name: 'Depression Level',
    yaxis: 'y2',
    type: 'scatter'
};
  
var trace3 = {
    x: ["10/12", "10/13", "10/14", "10/15", "10/16", "10/17"],
    y: [1, 3, 0, 2, 2, 0],
    name: 'Excess/Lack of Sleep Time',
    type: 'bar'
};

var updatemenus=[
    {
        buttons: [
            {
                args: [{'visible': [true, false, true]}],
                label: 'Sleep Time',
                method: 'update'
            },
            {
                args: [{'visible': [false, true, true]}],
                label:'Depression Level',
                method:'update'
            },
            {
                args: [{'visible': [true, true, true]}],
                label:'All',
                method:'update'
            }
        ],
        direction: 'left',
        pad: {'r': 10, 't': 10},
        showactive: true,
        type: 'buttons',
        x: 0,
        xanchor: 'left',
        y: 1.1,
        yanchor: 'top'
    }
]

var layout = {
    title: 'Sleep Time & Depression Level',
    yaxis: {title: 'Sleep Time'},
    yaxis2: {
      title: 'Depression Level',
      titlefont: {color: 'rgb(148, 103, 189)'},
      tickfont: {color: 'rgb(148, 103, 189)'},
      overlaying: 'y',
      side: 'right'
    },
    width: 680,
    height: 500,
    showlegend: true,
    updatemenus: updatemenus,
    legend: {
        x: 1,
        xanchor: 'right',
        y: 1.15
    },
    shapes: [
        {
            type: 'line',
            xref: 'paper',
            x0: 0,
            y0: 5.0,
            x1: 1,
            y1: 5.0,
            line:{
                color: 'rgb(255, 0, 0)',
                width: 4,
                dash:'dot'
            }
        },
        {
            type: 'line',
            xref: 'paper',
            x0: 0,
            y0: 9.0,
            x1: 1,
            y1: 9.0,
            line:{
                color: 'rgb(255, 0, 0)',
                width: 4,
                dash:'dot'
            }
        },
    ]
};

var data = [trace1, trace2, trace3];

Plotly.newPlot('sleep-time-depression-level-plot', data, layout);