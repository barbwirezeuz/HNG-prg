const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = new Date();
let dayOfWeek = currentDay.getDay();
let dayName = dayNames[dayOfWeek];
let currentTime = new Date();
let utcTime = currentTime.getTime();

document.getElementById("day").textContent = `Today is ${dayName}`;
document.getElementById("time").textContent = `UTC time in milliseconds ${utcTime}`;




