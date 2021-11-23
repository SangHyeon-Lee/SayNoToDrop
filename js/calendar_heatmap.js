let date = new Date();
let start = 0;
date.setFullYear(2019);
date.setMonth(4);
var dates = [];
var emotion = [];
var mapping  = new Map();
var len = 0
var month = new Set();
function func(data, pid){
    if(data.PID == pid){
        var date = data.date;
        var day = date.slice(8,10);
        month.add(date.slice(6,7));
        var dep = parseInt(data.dep)
        if(dep == 0)
          mapping.set(parseInt(day),0)
        else
          mapping.set(parseInt(day),Math.ceil(dep/10000))
        
    }
}
const renderCalendar = () => {
  date.setDate(1);
  const monthDays = document.querySelector(".days");
  console.log(mapping)
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  let selected = new Date();
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
    
  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;
  const today = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const colors = ["#ffbab8","#ff8985","#ff554f","#ff2921","#ff0b03"];

  
  document.querySelector(".date h1").innerHTML = months[date.getMonth()] + " " + date.getFullYear();

  document.querySelector(".date p").innerHTML = "Selected date : "+today.toDateString();
  function reset() {
    for(let w=1;w<=lastDay;w++)
      {
        let x = ".a"+String(w);
        document.querySelector(x).style.borderRadius = "0%";
        if(date.getMonth()==today.getMonth())
          document.querySelector(".a"+String(today.getDate())).style.borderRadius = "50%";
      }
  };
  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }
  for (let i = 1; i <= lastDay; i++) {
      days += `<div class="a${i}">${i}</div>`;
  }
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    
  }
  monthDays.innerHTML = days;

 if (date.getMonth()<today.getMonth()&&date.getFullYear()<=today.getFullYear()||date.getFullYear()<today.getFullYear()){
  for (let k = 1; k<=lastDay;k++){
    let imsi = String(k);
    let jmsi = "."+"a"+imsi;
    //console.log(jmsi);
    if(k<=25&&mapping.has(k)&&date.getMonth()+1==5)
      document.querySelector(jmsi).style.backgroundColor = colors[mapping.get(k)];
    else if((k>25&&mapping.has(k)&&date.getMonth()+1==4))
      document.querySelector(jmsi).style.backgroundColor = colors[mapping.get(k)];
    }
    
  }
  
  else if(date.getMonth()==today.getMonth() && date.getFullYear() == today.getFullYear())
  {
    for (let k = 1; k<today.getDate();k++){
      let imsi = String(k);
      let jmsi = ".a"+imsi;
      //console.log(jmsi);
      document.querySelector(jmsi).style.backgroundColor = colors[fake2[k]];
    }

    document.querySelector(".a"+String(today.getDate())).style.backgroundColor = "#687fff";
    document.querySelector(".a"+String(today.getDate())).style.borderRadius = "50%";
  }

  for(let w=1;w<=lastDay;w++)
      {
        let x = ".a"+String(w);
        document.querySelector(x).addEventListener("click", () => {
          date.setDate(w);
          reset();
          showing_date.setTime(date.getTime());
          y = date.getFullYear();
          m = date.getMonth() + 1;
          d = date.getDate();
          document.getElementById("date").innerHTML = y + " / " + m + " / " + d;
          daily_exercise();
          make_emotionplot();
          exercise_map();
          document.querySelector(".date p").innerHTML = "Selected date : "+date.toDateString();
          document.querySelector(x).style.borderRadius = "50%";
        });
      }
  
};
document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

d3.csv("./data/daily_depression.csv",function(data){
  func(data,701);
  
}).then(function(){
  renderCalendar();
});



