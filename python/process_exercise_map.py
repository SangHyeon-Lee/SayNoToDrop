import pandas as pd
import datetime as dt
import time


dfs = []

dfs.append((pd.read_csv('../data/P0701/LocationEntity-5572736000.csv'),
           pd.read_csv('../data/P0701/PhysicalActivityEventEntity-5572736000.csv')))
dfs.append((pd.read_csv('../data/P0701/LocationEntity-5573600000.csv'),
           pd.read_csv('../data/P0701/PhysicalActivityEventEntity-5573600000.csv')))
dfs.append((pd.read_csv('../data/P0701/LocationEntity-5574464000.csv'),
           pd.read_csv('../data/P0701/PhysicalActivityEventEntity-5574464000.csv')))
dfs.append((pd.read_csv('../data/P0701/LocationEntity-5575328000.csv'),
           pd.read_csv('../data/P0701/PhysicalActivityEventEntity-5575328000.csv')))
dfs.append((pd.read_csv('../data/P0701/LocationEntity-5576192000.csv'),
           pd.read_csv('../data/P0701/PhysicalActivityEventEntity-5576192000.csv')))
dfs.append((pd.read_csv('../data/P0701/LocationEntity-5577056000.csv'),
           pd.read_csv('../data/P0701/PhysicalActivityEventEntity-5577056000.csv')))
dfs.append((pd.read_csv('../data/P0701/LocationEntity-5577920000.csv'),
           pd.read_csv('../data/P0701/PhysicalActivityEventEntity-5577920000.csv')))


for (df_location, df_activity) in dfs:
    new_df = df_location
    for index, row in df_location.iterrows():

        timestamp = row['timestamp']
        if (row['speed'] == 0) or (row['speed'] > 4):
            new_df = new_df[new_df.timestamp != timestamp]
            continue

        rows = df_activity.loc[abs(df_activity['timestamp'] - timestamp) < 5]
        if not rows.empty:
            if ('UNKNOWN' in rows.type.values):
                new_df = new_df[new_df.timestamp != timestamp]
            elif ('IN_VEHICLE' in rows.type.values):
                new_df = new_df[new_df.timestamp != timestamp]
            elif ('ON_BICYCLE' in rows.type.values):
                new_df = new_df[new_df.timestamp != timestamp]
    row = new_df.iloc[0]
    date = dt.datetime.utcfromtimestamp(
        int(row['timestamp'])/1000).strftime('%Y-%m-%d')

    path = "../data/" + date + "_exercise_map.csv"
    new_df.to_csv(path)
    # ind = df_activity.loc[df_activity['confidence']>0.5]
    # ind = ind.loc[ind['type']!='UNKNOWN']
    # ind = ind.loc[ind['type']!='IN_VEHICLE']
    # ind = ind.loc[ind['type']!='ON_BICYCLE']
