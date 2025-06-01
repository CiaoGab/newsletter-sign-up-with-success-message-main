const submitButton = document.getElementById('submit')
const dismissButton = document.getElementById('dismiss-message')
const input = document.getElementById('email-input')
const successMessage = document.getElementById('success-message-container')
const mainContent = document.getElementById('main-content')


function dismissMessage () {
    successMessage.style.display = 'none'
    mainContent.style.display = 'flex'
    location.reload();
}


function submitMessage() {
    mainContent.style.display = 'none'
    successMessage.style.display = 'flex'
}


function validateInput() {}