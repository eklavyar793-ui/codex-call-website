function loginUser(email, password) {
    if (!email || !password) {
        alert("Please enter both email and password!");
        return;
    }
    console.log("Attempting login for:", email);
    alert("Button is working perfectly!\nEmail: " + email + "\nPassword: " + password);
}
