import pandas as pd
import datetime as dt
import time


dfs = []

dfs.append((pd.read_csv('../data/P0701/Distance-5572736000.csv'), pd.read_csv('../data/P0701/Calories-5572736000.csv')))
dfs.append((pd.read_csv('../data/P0701/Distance-5573600000.csv'), pd.read_csv('../data/P0701/Calories-5573600000.csv')))
dfs.append((pd.read_csv('../data/P0701/Distance-5574464000.csv'), pd.read_csv('../data/P0701/Calories-5574464000.csv')))
dfs.append((pd.read_csv('../data/P0701/Distance-5575328000.csv'), pd.read_csv('../data/P0701/Calories-5575328000.csv')))
dfs.append((pd.read_csv('../data/P0701/Distance-5576192000.csv'), pd.read_csv('../data/P0701/Calories-5576192000.csv')))
dfs.append((pd.read_csv('../data/P0701/Distance-5577056000.csv'), pd.read_csv('../data/P0701/Calories-5577056000.csv')))
dfs.append((pd.read_csv('../data/P0701/Distance-5577920000.csv'), pd.read_csv('../data/P0701/Calories-5577920000.csv')))

new_df_list = []

for (df_distance, df_calories) in dfs:
    row_distance = df_distance.iloc[df_distance['DistanceToday'].idxmax()]
    row_calories = df_calories.iloc[df_calories['CaloriesToday'].idxmax()]
    date = dt.datetime.utcfromtimestamp(int(row_distance['timestamp'])/1000).strftime('%Y-%m-%d')
    
    new_df_list.append([date, row_distance['DistanceToday'], row_calories['CaloriesToday']])

new_df = pd.DataFrame(new_df_list, columns = ['Date', 'DistanceToday', 'CaloriesToday'])
new_df.to_csv("../data/daily_exercise.csv")
