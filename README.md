
# SayNoToDrop
### KAIST 2021 Fall CS492 Data Viz Design Studio

- **index.html / style.css**
	- main html file
	- var showing_date : variable representing the date shown on the screen
- **js folder**
	- date_control.js
		- js file for control and show the date
	- exercise_map.js
		- js file for showing map with exercise information
		- get data from data/2019-05-XX_exercise_map.csv file for corresponding showing_date.
		- mark speed of user to the map 
	- daily_exercise.js
		- js file for showing donut plot on middle right.
		- get data from data/daily_exercise.csv file and show DistanceToday, Calories data of showing_date.
	- calendar_heatmap.js
		- js file for showing calendar_heatmap
		- get each day's depression level from the daily_depression.csv
	- sleep_time&depression_level.js
		- js file for showing depression level and sleep time plot on the down left
		- show the plot by reading daily_sleeptime.csv
		- functions for the checkboxes which can turn the traces on/off
- **python folder**
	- process_exercise_map.py
		- use LocationEntity and PhysicalActivityEventEntity data
		- From LocationEntity, remove rows that ‘speed’ is 0 or bigger than 4
		- From LocationEntity, remove rows that if types of rows from PhysicalActivityEventEntity data around that timestamp are one of  UNKNOWN, IN_VEHICLE, or ON_BICYCLE
		- save with YYYY-MM-DD form
	- process_daily_exercise.py
		- use Distance and Calories data
		- get only max values of DistanceToday and CaloriesToday
save with YYYY-MM-DD form
	- depression level calaculation.py
		- use esm_data to calculate emotion level and depression level
	- process_sleeptime.py
		- use Distance, AmbientLight, and DeviceEventEntity data
		- process these data to calculate the sleep time 
		- use the daily_emotion.csv file to get the depression levels
		- save the result as daily_sleeptime.py
