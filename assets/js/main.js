// Select the button
const btn = document.getElementById('theme-switcher');

// Listen for a click on the button
btn.addEventListener('click', function () {
    // Then toggle (add/remove) the .dark-theme class to the body
    document.body.classList.toggle('dark-theme');

    let mainSection = document.getElementById("main-section");
    mainSection.classList.toggle("dark-theme");
    
    let contactSection = document.getElementById("contact-section");
    contactSection.classList.toggle("dark-theme-contact");
})