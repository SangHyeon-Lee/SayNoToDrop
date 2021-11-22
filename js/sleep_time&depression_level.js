var i = 0;
var x_inputs = new Array();
var sleeptime = new Array();
var lackorexcess_sleeptime = new Array();
var depression_level = new Array();

function process_sleeptime_data(data, x_arr, sleeptime, lackorexcess_sleeptime, depression_level) {
    x_arr.push(data.Date);
    sleeptime.push(data.SleepTime);
    lackorexcess_sleeptime.push(data.Lack_Excess_Sleeptime)
    depression_level.push(data.DepressionLevel)
    show_sleeptime_depression_level(data, x_inputs, sleeptime, lackorexcess_sleeptime, depression_level);
}

function show_sleeptime_depression_level(data, x, sleeptime, lackorexcess_sleeptime, depression_level) {

    var trace1 = {
        x: x,
        y: sleeptime,
        name: 'Sleep Time',
        type: 'scatter'
    };
    
    var trace2 = {
        x: x,
        y: depression_level,
        name: 'Depression Level',
        yaxis: 'y2',
        type: 'scatter',
        marker: {
            color: 'rgb(0,230,0)',
        }
    };
    
    var trace3 = {
        x: x,
        y: lackorexcess_sleeptime,
        name: 'Excess/Lack of Sleep Time',
        type: 'bar',
        marker: {
            color: 'rgb(230,0,0)',
            opacity: 0.5,
        }
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
            y: 1.3,
            yanchor: 'top'
        }
    ]

    var layout = {
        xaxis: {title: 'Date'},
        yaxis: {title: 'Sleep Time'},
        yaxis2: {
        title: 'Depression Level',
        titlefont: {color: 'rgb(148, 103, 189)'},
        tickfont: {color: 'rgb(148, 103, 189)'},
        overlaying: 'y',
        side: 'right'
        },
        updatemenus: updatemenus,
        width: 680,
        height: 500,
        showlegend: true,
        legend: {
            x: 1,
            xanchor: 'right',
            y: 1.3
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
}


function makeplot() {
    d3.csv("./data/daily_sleeptime.csv", function(data){ 
        process_sleeptime_data(data, x_inputs, sleeptime, lackorexcess_sleeptime, depression_level)
        i++;
    });
  
  };

  makeplot()
