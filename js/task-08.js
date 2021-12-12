const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    // const formData = new FormData(event.currentTarget);

    const { email, password } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
        return;
    } 
    
    const formData = {
        email: email.value,
        password: password.value,       
    }

    console.log(formData);
    event.currentTarget.reset();
}


