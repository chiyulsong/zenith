// app.js

// Hardcoded user credentials
const validUsers = {
  admin: "1234",
  guest1: "guest123",
  guest2: "guest123",
  guest3: "guest123"
};

function handleLogin() {
  const id = document.getElementById("loginId").value.trim();
  const pw = document.getElementById("loginPw").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  // Check ID and password
  if (validUsers[id] && validUsers[id] === pw) {
    // Save login ID in sessionStorage for later use
    sessionStorage.setItem("userId", id);

    // Redirect to main.html
    window.location.href = "main.html";
  } else {
    errorMsg.textContent = "Invalid ID or password.";
  }
}
