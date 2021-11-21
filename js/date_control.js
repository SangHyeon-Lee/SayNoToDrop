y = showing_date.getFullYear();
m = showing_date.getMonth() + 1;
d = showing_date.getDate();
document.getElementById("date").innerHTML = y + " / " + m + " / " + d;

function prev_date() {
  showing_date.setDate(showing_date.getDate() - 1);
  console.log(showing_date.toISOString().substring(0,10))
  y = showing_date.getFullYear();
  m = showing_date.getMonth() + 1;
  d = showing_date.getDate();
  let x = ".a"+String(d);
  document.getElementById("date").innerHTML = y + " / " + m + " / " + d;
  renderCalendar();
  document.querySelector(".date p").innerHTML = "Selected date : "+showing_date.toDateString();
  document.querySelector(x).style.borderRadius = "50%";
  daily_exercise();
  make_emotionplot();
  exercise_map();
}

function next_date() {
  showing_date.setDate(showing_date.getDate() + 1);
  console.log(showing_date.toISOString().substring(0,10))
  y = showing_date.getFullYear();
  m = showing_date.getMonth() + 1;
  d = showing_date.getDate();
  let x = ".a"+String(d);
  document.getElementById("date").innerHTML = y + " / " + m + " / " + d;
  renderCalendar();
  document.querySelector(".date p").innerHTML = "Selected date : "+showing_date.toDateString();
  document.querySelector(x).style.borderRadius = "50%";
  daily_exercise();
  make_emotionplot();
  exercise_map();
}
