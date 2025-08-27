// Elements
const loginTab = document.querySelector(".login");
const signupTab = document.querySelector(".signup");
const loginBox = document.getElementById("login");
const signupBox = document.getElementById("signup");
const btn = document.getElementById("btn");

//input field
const username = document.getElementById("username");
const email = document.getElementById("signup_e-mail"); // signup form email
const login_email = document.getElementById("login_e-mail"); // login form email
const login_password = document.getElementById("login_password");
const signup_password = document.getElementById("signup_password");
const confirm_password = document.getElementById("confirm_password")

// Initialize: show login by default
function showLogin() {
  loginBox.classList.add("active-form");
  signupBox.classList.remove("active-form");
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
  btn.style.left = "0";
}
function showSignup() {
  signupBox.classList.add("active-form");
  loginBox.classList.remove("active-form");
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
  btn.style.left = "50%";
}

// Attach event listeners
loginTab.addEventListener("click", function (e) {
  e.preventDefault();
  showLogin();
});
signupTab.addEventListener("click", function (e) {
  e.preventDefault();
  showSignup();
});

// Validation for login
function checkLogin() {
  if (login_email.value.trim() === "" || login_password.value.trim() === "") {
    alert("Please enter email and password.");
    return false; // prevents form submission
  }
  return true; // allows submit
}

// Validation for signup
function checkSignup() {
  if (
    username.value.trim() === "" ||
    email.value.trim() === "" ||
    signup_password.value.trim() === "" ||
    confirm_password.value.trim() === ""
  ) {
    alert("Please fill in all signup fields.");
    return false;
  }

  if (signup_password.value !== confirm_password.value) {
    alert("Passwords do not match!");
    return false;
  }

  return true;
}
// Optional: Set default state on page load
window.addEventListener("DOMContentLoaded", showLogin);
