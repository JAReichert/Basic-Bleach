console.log("working");

const currentHours = document.querySelector(".currentHours");

const dayOfWeekDigit = new Date().getDay();

const dayOfWeekName = new Date().toLocaleString("default", { weekday: "long" });

if (dayOfWeekName === "Monday") {
  currentHours.append("We are open today from 9:00AM until 4:00PM");
}
if (dayOfWeekName === "Tuesday") {
  currentHours.append("We are open today from 10:00AM until 7:00PM");
}
if (dayOfWeekName === "Wednesday") {
  currentHours.append("We are open today from 9:00AM until 6:00PM");
}
if (dayOfWeekName === "Thursday") {
  currentHours.append("We are open today from 10:00AM until 7:00PM");
}
if (dayOfWeekName === "Friday") {
  currentHours.append("We are open from 9:00AM until 7:00PM");
}
if (dayOfWeekName === "Saturday") {
  currentHours.append("We are open from 9:00AM until 6:00PM");
}
if (dayOfWeekName === "Sunday") {
  currentHours.append("We are open from 11:00AM until 4:00PM");
}
//EVENTUALLY WILL PUT IN TIME FOR REAL SITE
// let today = new Date();
// let date =
//   today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

// let time = today.getHours();
// //+ ":" + today.getMinutes() + today.getMinutes();
// console.log(time);
// if(if time < )
//EVENTUALLY WILL PUT IN TIME FOR REAL SITE

const form = document.querySelector("form");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");

const checkNames = (firstName, lastName) => {
  if (firstName.value.length < 2) {
    window.alert("Your first name needs to be greater than 1 character.");
    return false;
  }
  if (lastName.value.length < 2) {
    window.alert(`Your ${lastName.name} needs to be greater than 1 character.`);
    return false;
  }
  return true;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkNames(firstName, lastName)) {
    //send stuff to database
    const userData = {
      firstName: firstName.value,
      lastName: lastName.value,
    };
    console.log(userData);
  }
  window.alert("your form needs to be fixed");
});
