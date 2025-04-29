/*
    Write a function scheduleMeeting(startTime, durationMinutes) that takes in a string startTime in "HH:MM" format and a number durationMinutes. Return true if the meeting starts and ends within the working hours of 07:30 to 17:45, otherwise return false
*/

const convertToMinutes = (time) => {
  const [hours, minutes] = time.split(":");
  const totalMinutes = Number(hours) * 60 + Number(minutes);
  return totalMinutes;
};

const scheduleMeeting = (startTime, duration) => {
  const dayStart = convertToMinutes("07:30");
  const dayEnd = convertToMinutes("17:45");

  const meetingStart = convertToMinutes(startTime);
  const meetingEnd = meetingStart + duration;

  return meetingStart >= dayStart && meetingEnd <= dayEnd;
};

console.log(scheduleMeeting("07:00", 15)); // false
console.log(scheduleMeeting("07:15", 30)); // false
console.log(scheduleMeeting("07:30", 30)); // true
console.log(scheduleMeeting("11:30", 60)); // true
console.log(scheduleMeeting("17:00", 45)); // true
console.log(scheduleMeeting("17:30", 30)); // false
console.log(scheduleMeeting("18:00", 15)); // false
