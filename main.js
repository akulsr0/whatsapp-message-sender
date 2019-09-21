function sendMessage() {
    const phone = document.getElementById('phoneNumber').value
    const message = document.getElementById('message').value
    const error = document.getElementById('errorMessage')

    if(phone==="") {
        error.innerHTML = "Please enter phone number."
    } else if(phone.length>10) {
        error.innerHTML = "Please enter valid phone number."
    } else {
        error.innerHTML = ""
        window.location = "https://wa.me/" + phone + "/?text=" + encodeURIComponent(message)
    }
}