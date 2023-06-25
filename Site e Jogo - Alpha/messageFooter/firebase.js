const firebaseConfig = {
  
    apiKey: "AIzaSyCDvec2d1ZyStFrho4EPkFmFeeqkQaBSWY",
    authDomain: "ogestorlouco.firebaseapp.com",
    databaseURL: "https://ogestorlouco-default-rtdb.firebaseio.com",
    projectId: "ogestorlouco",
    storageBucket: "ogestorlouco.appspot.com",
    messagingSenderId: "714483640795",
    appId: "1:714483640795:web:699227f4d767fa93d29ffe"

};
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("message-text");

document.getElementById("message-text").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var message = getElementVal("message");

  saveMessages(message);

  // enable alert
  document.querySelector(".alert").style.display = "block";

  // remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // reset the form
  document.getElementById("message-text").reset();
}

const saveMessages = (message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    message: message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};