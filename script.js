console.log("script.js loaded");
// 1. LOGIN FUNCTION
function loginUser(email, password) {
  alert("loginUser function called");
    if (!email || !password) {
        alert("Please enter both email and password!");
        return;
    }

    console.log("Attempting login for:", email);

    //// Firebase Auth logic for login

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        alert("Login successful!");
        window.location.href = "user-dashboard.html"; // Successful login goes to dashboard
    })
    .catch((error) => {
        alert("Login Error: " + error.message);
    });
}

// 2. SIGNUP FUNCTION
function registerUser(name, email, password) {
    if (!name || !email || !password) {
        alert("Please fill in all fields (Name, Email, and Password)!");
        return;
    }

    console.log("Attempting registration for:", name);

    // // Firebase Auth logic for signup

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        alert("Account created successfully!");
        window.location.href = "index.html"; // Account created, go back to login
    })
    .catch((error) => {
        alert("Signup Error: " + error.message);
    });
}
function logoutUser() {
    firebase.auth().signOut()
    .then(() => {
        window.location.href = "index.html";
    })
    .catch((error) => {
        alert(error.message);
    });
}
function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then((result) => {
        alert("Google Login Successful!");
        window.location.href = "user-dashboard.html";
    })
    .catch((error) => {
        alert("Google Login Error: " + error.message);
    });
}