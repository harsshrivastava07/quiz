const adminCredentials = { id: 'admin123', password: '123' };

const adminLoginButton = document.getElementById('adminSubmit');
const adminId = document.getElementById('adminId');
const adminPassword = document.getElementById('adminPassword');
const adminError = document.getElementById('adminError');
const questionForm = document.getElementById('questionForm');
const adminMessage = document.getElementById('adminMessage');
const adminQuestionForm = document.getElementById('adminQuestionForm');

// Handle admin login
adminLoginButton.addEventListener('click', function () {
    if (adminId.value === adminCredentials.id && adminPassword.value === adminCredentials.password) {
        adminError.classList.add('hidden');
        questionForm.classList.remove('hidden');
    } else {
        adminError.classList.remove('hidden');
    }
});

// Handle adding questions
adminQuestionForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const questionData = {
        question: document.getElementById('questionText').value,
        a: document.getElementById('optionA').value,
        b: document.getElementById('optionB').value,
        c: document.getElementById('optionC').value,
        d: document.getElementById('optionD').value,
        correct: document.getElementById('correctOption').value
    };

    try {
        const response = await fetch('/add-question', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(questionData)
        });

        const result = await response.json();
        if (response.ok) {
            adminMessage.textContent = result.message;
            adminMessage.classList.remove('hidden');
            adminQuestionForm.reset();
        } else {
            adminMessage.textContent = result.error;
            adminMessage.classList.remove('hidden');
        }
    } catch (error) {
        console.error('Error:', error);
        adminMessage.textContent = 'An error occurred. Please try again.';
        adminMessage.classList.remove('hidden');
    }
});
