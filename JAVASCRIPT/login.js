// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfSTE2bhf2sfhjZ4VKzdcj3j1GCUMm_nY",
  authDomain: "vue-to-do-app-4d82b.firebaseapp.com",
  projectId: "vue-to-do-app-4d82b",
  storageBucket: "vue-to-do-app-4d82b.appspot.com",
  messagingSenderId: "371674597856",
  appId: "1:371674597856:web:cfe0ea12e8268571344385"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

var email = document.getElementById("email");
var password = document.getElementById("password");
window.login= function(e) {
  e.preventDefault();
  var obj = {
    email: email.value,
    password: password.value,
  };

  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      alert("logined Successfully")
      var aaaa =  (success.user.uid);
      localStorage.setItem("uid",aaaa)
      console.log(aaaa)
      
      
      
      window.location.replace('UserPage.html')
     // localStorage.setItem(success,user,uid)
      
    })
    .catch(function (err) {
      alert("login error"+err);
    });

  console.log(obj);
}