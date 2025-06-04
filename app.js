const submitButton = document.getElementById('submit')
const dismissButton = document.getElementById('dismiss-message')
const input = document.getElementById('email-input')
const successMessage = document.getElementById('success-message-container')
const mainContent = document.getElementById('main-content')
const errorMessage = document.getElementById('error-message')
const userEmail = document.getElementById('input-email')


function dismissMessage () {
    successMessage.style.display = 'none'
    mainContent.style.display = 'flex'
    location.reload();
}
function submitMessage() {
    mainContent.style.display = 'none'
    successMessage.style.display = 'flex'
    userEmail.innerHTML = input.value
}
function validateEmail() {
    let format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if (input.value.match(format)) {
        submitMessage()
    } else toggleError();
}
function toggleError() {
        input.style.backgroundColor = 'hsla(0, 100%, 50%, 0.3)'
        input.style.color = 'red'
        input.style.border = '1px solid red'
        errorMessage.style.display = 'flex'
    }