let date = new Date();
let start = 0;

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

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

  const colors = ["#ffbab8","#fc9895","#ff8985","#ff706b","#ff554f","#ff3f38","#ff2921","#ff0b03"];

  const fake1 = [0,1,2,2];
  const fake2 = [0,1,2,2,1,5,5,4,3,3,0,1,6,7,7,7,5,4,3,3,5,0,1,1,1,2,2,3,3,1,2,2];
  
  document.querySelector(".date h1").innerHTML = months[date.getMonth()] + " " + date.getFullYear();

  document.querySelector(".date p").innerHTML = "Selected date : "+today.toDateString();
  const reset = () => {
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
    document.querySelector(jmsi).style.backgroundColor = colors[fake2[k]];
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
          document.querySelector(".date p").innerHTML = "Selected date : "+date.toDateString();
          document.querySelector(x).style.borderRadius = "50%";
        });
      }
};

let interval = setInterval(function () {
  if (document.readyState === 'complete') {
    clearInterval(interval);
    document.querySelector(".prev").addEventListener("click", () => {
      date.setMonth(date.getMonth() - 1);
      renderCalendar();
    });
    
    document.querySelector(".next").addEventListener("click", () => {
      date.setMonth(date.getMonth() + 1);
      renderCalendar();
    });
    
    renderCalendar();
  }
}, 100);



