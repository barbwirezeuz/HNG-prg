const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = new Date();
const dayOfWeek = currentDay.getDay();
const dayName = dayNames[dayOfWeek];
const currentTime = new Date();
const utcTime = currentTime.getTime();

document.getElementById("day").textContent = `Today is ${dayName}`;
document.getElementById("time").textContent = `UTC time in milliseconds ${utcTime}`;




