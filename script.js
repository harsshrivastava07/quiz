// Admin credentials
const adminCredentials = { id: 'admin123', password: 'pass123' };

// Selecting elements
const adminLoginButton = document.getElementById('adminLogin');
const studentLoginButton = document.getElementById('studentLogin');
const adminForm = document.getElementById('adminForm');
const studentForm = document.getElementById('studentForm');
const adminSubmit = document.getElementById('adminSubmit');
const adminId = document.getElementById('adminId');
const adminPassword = document.getElementById('adminPassword');
const adminError = document.getElementById('adminError');
const studentPhone = document.getElementById('studentPhone');
const sendOtpButton = document.getElementById('sendOtp');
const otpInput = document.getElementById('otpInput');
const studentSubmit = document.getElementById('studentSubmit');
const otpError = document.getElementById('otpError');

let generatedOtp;

// Show admin form
adminLoginButton.addEventListener('click', () => {
    adminForm.classList.remove('hidden');
    studentForm.classList.add('hidden');
});

// Show student form
studentLoginButton.addEventListener('click', () => {
    studentForm.classList.remove('hidden');
    adminForm.classList.add('hidden');
});

// Admin login functionality
adminSubmit.addEventListener('click', () => {
    if (adminId.value === adminCredentials.id && adminPassword.value === adminCredentials.password) {
        window.open("admin.html", "_blank"); // Open Admin Page in a new tab
    } else {
        adminError.classList.remove('hidden');
    }
});

// Send OTP for student login
sendOtpButton.addEventListener('click', () => {
    if (studentPhone.value.length === 10) {
        generatedOtp = Math.floor(1000 + Math.random() * 9000); // Generate random OTP
        alert(`OTP sent: ${generatedOtp}`);  // Mock OTP for demo
        otpInput.classList.remove('hidden');
        studentSubmit.classList.remove('hidden');
        otpError.classList.add('hidden');
    } else {
        alert("Please enter a valid 10-digit mobile number.");
    }
});

// Verify OTP for student login
studentSubmit.addEventListener('click', () => {
    if (otpInput.value == generatedOtp) {
        window.open("quiz.html", "_blank"); // Open Quiz Page in a new tab
    } else {
        otpError.classList.remove('hidden');
    }
});
