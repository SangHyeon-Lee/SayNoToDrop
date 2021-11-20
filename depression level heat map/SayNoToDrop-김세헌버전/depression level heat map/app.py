import dash
from dash.development.base_component import Component
from dash.html.Img import Img
from dash.html.Output import Output
from dash.html.Thead import Thead
import dash_core_components as dcc
import dash_html_components as html
import pandas as pd
from dash.dependencies import Input, Output
from pandas.core.algorithms import quantile
import plotly.graph_objs as go

external_stylesheets = ['https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css','https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap']

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)
app.layout = html.Div(className = 'container',children=[
    html.Div(className='calendar',children=[
        html.Div(className='bar-space',children=[
            html.Div(className='dep',children=[
                html.P('Depression level:')
            ]),
            html.Div(className='bar',children=[
                html.P('0',className='zero'),
                html.P('100',className='hund')
                ])
            ]),
        html.Div(className='month',children=[
            html.I(className='fas fa-angle-left prev'),
            html.Div(className='date',children = [
                html.H1(className = "h1"),
                html.P(className = "p")
            ]),
            html.I(className='fas fa-angle-right next')
            ]),
        html.Div(className='weekdays',children=[
            html.Div('Sun'),
            html.Div('Mon'),
            html.Div('Tue'),
            html.Div('Wed'),
            html.Div('Thu'),
            html.Div('Fri'),
            html.Div('Sat')
            ]),
        html.Div(className = 'days')
        ])
    ])
if __name__ == '__main__':
    app.run_server(debug=True)