import pandas as pd
import datetime as dt
import time

df_device_event_entity = []
df_entity_off_lst = []
df_entity_on_lst = []
df_light_dark_lst = []
df_distance_notidle_lst = []

df_device_event_entity.append((pd.read_csv('../data/P0701/DeviceEventEntity-5572736000.csv'), pd.read_csv('../data/P0701/AmbientLight-5572736000.csv'), pd.read_csv('../data/P0701/Distance-5572736000.csv')))
df_device_event_entity.append((pd.read_csv('../data/P0701/DeviceEventEntity-5573600000.csv'), pd.read_csv('../data/P0701/AmbientLight-5573600000.csv'), pd.read_csv('../data/P0701/Distance-5573600000.csv')))
df_device_event_entity.append((pd.read_csv('../data/P0701/DeviceEventEntity-5574464000.csv'), pd.read_csv('../data/P0701/AmbientLight-5574464000.csv'), pd.read_csv('../data/P0701/Distance-5574464000.csv')))
df_device_event_entity.append((pd.read_csv('../data/P0701/DeviceEventEntity-5575328000.csv'), pd.read_csv('../data/P0701/AmbientLight-5575328000.csv'), pd.read_csv('../data/P0701/Distance-5575328000.csv')))
df_device_event_entity.append((pd.read_csv('../data/P0701/DeviceEventEntity-5576192000.csv'), pd.read_csv('../data/P0701/AmbientLight-5576192000.csv'), pd.read_csv('../data/P0701/Distance-5576192000.csv')))
df_device_event_entity.append((pd.read_csv('../data/P0701/DeviceEventEntity-5577056000.csv'), pd.read_csv('../data/P0701/AmbientLight-5577056000.csv'), pd.read_csv('../data/P0701/Distance-5577056000.csv')))
df_device_event_entity.append((pd.read_csv('../data/P0701/DeviceEventEntity-5577920000.csv'), pd.read_csv('../data/P0701/AmbientLight-5577920000.csv'), pd.read_csv('../data/P0701/Distance-5577920000.csv')))
daily_depression = pd.read_csv('../data/daily_depression.csv')
daily_depression_701 = daily_depression.loc[daily_depression['PID'] == 701][1:]
daily_depression_701 = daily_depression_701.reset_index()
df_sleeptime_lst = []

for i in range(len(df_device_event_entity)):
    date = '2019-05-%s 04:00:00.000' % (i + 8)
    wake_date = '2019-05-%s 06:00:00.000' % (i + 8)
    # Device entity screen on and off
    df_entity = df_device_event_entity[i][0]
    df_entity['timestamp'] = pd.to_datetime(df_entity['timestamp'], unit='ms')
    df_entity_on = df_entity.loc[(df_entity['type'] == 'SCREEN_ON') & (df_entity['timestamp'] > wake_date)]
    df_entity_off = df_entity.loc[(df_entity['type'] == 'SCREEN_OFF') & (df_entity['timestamp'] < date)]
    df_entity_on_lst.append(df_entity_on)
    df_entity_off_lst.append(df_entity_off)

    # Device amabient light below 100
    df_light = df_device_event_entity[i][1]
    df_light['timestamp'] = pd.to_datetime(df_light['timestamp'], unit='ms')
    df_light = df_light.loc[(df_light['Brightness'] <= 100) & (df_entity['timestamp'] < date)]
    df_light_dark_lst.append(df_light)

    # Motion type which is not idle
    df_distance = df_device_event_entity[i][2]
    df_distance['timestamp'] = pd.to_datetime(df_distance['timestamp'], unit='ms')
    df_distance = df_distance.loc[(df_distance['MotionType'] != 'IDLE') & (df_distance['timestamp'] > wake_date)]
    df_distance_notidle_lst.append(df_distance)
    
    # Finding the sleep time
    off_time = df_entity_off.iloc[0]['timestamp']
    light_time = df_light.iloc[0]['timestamp']
    on_time = df_entity_on.iloc[0]['timestamp']
    nonidle_time = df_distance.iloc[0]['timestamp']

    sleep_start_time = ''
    sleep_end_time = ''
    if off_time < light_time:
        sleep_start_time = off_time
    else:
        sleep_start_time = light_time

    if on_time < nonidle_time:
        sleep_end_time = on_time
    else:
        sleep_end_time = nonidle_time

    date_time = sleep_start_time.strftime('%Y-%m-%d')
    sleeptime = (sleep_end_time - sleep_start_time)
    seconds = sleeptime.seconds
    hours = seconds//3600
    minutes = (seconds//60)%60/60
    sleeptime = hours + minutes
    # Calculate excess/lack of sleeptime
    if sleeptime < 5:
        nonavg_sleeptime = 5 - sleeptime
    elif sleeptime > 9:
        nonavg_sleeptime = sleeptime - 9
    else:
        nonavg_sleeptime = 0
    
    depression_level = daily_depression_701.loc[i]['dep']
    df_sleeptime_lst.append([date_time, sleeptime, nonavg_sleeptime, depression_level])

df_sleeptime = pd.DataFrame(df_sleeptime_lst, columns = ['Date', 'SleepTime', 'Lack_Excess_Sleeptime', 'DepressionLevel'])
df_sleeptime.to_csv("../data/daily_sleeptime.csv")


