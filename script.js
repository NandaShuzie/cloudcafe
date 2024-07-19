document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active");
            }
        });
    }, {
        threshold: 0.1 // Adjust this value to control when the section becomes active
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

function sendMessage() {
    const name = ddocument.getElementById("name");
    const email = ddocument.getElementById("email");
    const date = ddocument.getElementById("date");
    const pax = ddocument.getElementById("pax");

    const url = "https://api.whatsapp.com/send?phone=6287778288281&text=Halo%20Admin!%0ASaya%20*"+ name +"*%0AEmail%20saya%20*"+ email +"*%0AIngin%20reservasi%20untuk%20tanggal%20*"+ date +"*%0ASebanyak%20*"+ pax +"*";
    window.open(url);
  }

  const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});