document.getElementById('toggleBtn')?.addEventListener('click', function() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
});

document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let errorMsg = document.getElementById('errorMsg');
    if (name.length < 3 || !email.includes('@')) {
        errorMsg.textContent = "Invalid input!";
    } else {
        errorMsg.textContent = "Form submitted successfully!";
    }
});
