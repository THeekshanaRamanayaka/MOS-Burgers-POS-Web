function login() {
    window.location.href = "login.html";
}
function regLogin() {
    window.location.href = "login.html";
}
function signUp() {
    window.location.href = "register.html";
}
// Public object array to store user data
// Initialize users array from localStorage or create an empty array if it doesn't exist
let users = JSON.parse(localStorage.getItem('users')) || [];

// Function to add a new user
function addUser(name, contactNumber, email, address, password) {
    // Input validation
    if (!name || !contactNumber || !email || !address || !password) {
        console.error("All fields are required");
        alert("All fields are required");
        return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return false;
    }

    // Check if user already exists
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert("User with this email already exists");
        return false;
    }

    users.push({
        name: name,
        contactNumber: contactNumber,
        email: email,
        address: address,
        password: password
    });

    // Save updated users array to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    return true;
}

// Add initial users only if the users array is empty
if (users.length === 0) {
    addUser("John Doe", "+94771234567", "john@example.com", "123 Main St, Colombo", "password123");
    addUser("Jane Smith", "+94779876543", "jane@example.com", "456 Elm St, Kandy", "securepass456");
}

// Log the users array to the console
console.log("Current users:", users);

function regLetsGo() {
    let userDetails = {
        name: document.getElementById("regName").value.trim(),
        contactNumber: document.getElementById("regContactNumber").value.trim(),
        email: document.getElementById("regEmail").value.trim(),
        address: document.getElementById("regAddress").value.trim(),
        password: document.getElementById("regPassword").value
    };
    
    if (addUser(userDetails.name, userDetails.contactNumber, userDetails.email, userDetails.address, userDetails.password)) {
        // Clear the form
        document.getElementById("regName").value = "";
        document.getElementById("regContactNumber").value = "";
        document.getElementById("regEmail").value = "";
        document.getElementById("regAddress").value = "";
        document.getElementById("regPassword").value = "";

        alert("User registered successfully!");
        window.location.href = "placeOrder.html";
    } else {
        // Display error message to the user (you might want to add an error message element in your HTML)
        alert("Registration failed. Please check your inputs and try again.");
    }
}
function regClear() {
    document.getElementById("regName").value = "";
    document.getElementById("regContactNumber").value = "";
    document.getElementById("regEmail").value = "";
    document.getElementById("regAddress").value = "";
    document.getElementById("regPassword").value = "";
}
function loginLetsGo() {
    let name = document.getElementById("logName").value.trim();
    let password = document.getElementById("logPassword").value;
    let user = users.find(user => user.name === name && user.password === password);
    if (user) {
        window.location.href = "placeOrder.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}
function placeOrder() {
    window.location.href = "placeOrder.html";
}
function Stores() {
    window.location.href = "stores.html";
}
function Customer() {
    window.location.href = "customer.html";
}
function Orders() {
    window.location.href = "orders.html";
}
function logout() {
    window.location.href = "index.html";
}

//------------------------------------------------------------
function adminLogin() {
    window.location.href = "loginAdmin.html";
}