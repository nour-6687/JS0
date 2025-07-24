let day = "   any      ";
// day = day.trim();
// day = day.charAt(0).toUpperCase() + day.slice(1)
// same as what i did
switch (
  day.trim().charAt(0).toUpperCase() +
  day
    .trim()
    .toLocaleLowerCase()
    .substring(1, day.length - 1)
) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM to 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM to 7:00 PM");
    break;
  default:
    console.log("Its Not A Valid Day");
    break;
}
