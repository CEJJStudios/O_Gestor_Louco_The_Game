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
var contactFormDB = firebase.database().ref("contact_form_submit");

document.getElementById("contact_form_submit").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email= getElementVal("email");
  var message = getElementVal("message");

  saveMessages(name, email, message);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contact_form_submit").reset();
}

const saveMessages = (name, email, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    message: message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
