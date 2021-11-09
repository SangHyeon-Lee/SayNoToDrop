y = showing_date.getFullYear();
m = showing_date.getMonth() + 1;
d = showing_date.getDate();
document.getElementById("date").innerHTML = y + " / " + m + " / " + d;

function prev_date() {
  showing_date.setDate(showing_date.getDate() - 1);
  y = showing_date.getFullYear();
  m = showing_date.getMonth() + 1;
  d = showing_date.getDate();
  document.getElementById("date").innerHTML = y + " / " + m + " / " + d;
  daily_exercise();
  make_emotionplot();
}

function next_date() {
  showing_date.setDate(showing_date.getDate() + 1);
  y = showing_date.getFullYear();
  m = showing_date.getMonth() + 1;
  d = showing_date.getDate();
  document.getElementById("date").innerHTML = y + " / " + m + " / " + d;
  daily_exercise();
  make_emotionplot();
}
