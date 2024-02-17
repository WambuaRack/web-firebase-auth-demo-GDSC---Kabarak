  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import {
      getAuth,
      createUserWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
      apiKey: "AIzaSyB7KH7aSCDFf6TBeHD8piz5jYUcJ5ZhfQ4",
      authDomain: "fir-de8d0.firebaseapp.com",
      projectId: "fir-de8d0",
      storageBucket: "fir-de8d0.appspot.com",
      messagingSenderId: "413687840409",
      appId: "1:413687840409:web:0d9e8930d35b6ede0f8208",
      measurementId: "G-GPVPXPDPRE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth()


  var fullName = document.getElementById("fullname");
  var contact = document.getElementById("contact");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var copassword = document.getElementById("copassword")
  window.signup = function(e) {
      if (password)

          if (fullName.value == "" || contact.value == "" || email.value == "" || password.value == "") {
              alert("All Field Are Required")
          }
      if (password.value == copassword.value) {

      } else {
          alert("Password Confirmation is Wrong")
          return false
      }

      e.preventDefault();
      var obj = {
          firstName: fullName.value,
          contact: contact.value,
          email: email.value,
          password: password.value,
      };

      createUserWithEmailAndPassword(auth, obj.email, obj.password)
          .then(function(success) {
              window.location.replace('HTML/login.html')
                  // console.log(success.user.uid)
              alert("signup successfully")
          })
          .catch(function(err) {
              alert("Error in " + err)
          });
      console.log()
      console.log(obj);
  };