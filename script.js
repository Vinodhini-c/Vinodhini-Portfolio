// script.js
let menuList = document.getElementById("menuList");

// Reset menu state on page load
menuList.style.maxHeight = "0px";
document.querySelector('.menu-icon').classList.remove('active');

function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "300px";
        document.querySelector('.menu-icon').classList.add('active');
    }
    else{
        menuList.style.maxHeight = "0px";
        document.querySelector('.menu-icon').classList.remove('active');
    }
}

// Close menu when a link is clicked in mobile view
document.querySelectorAll('#menuList li a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) { 
            toggleMenu();
        }
    });
});

// Typing effect
var typed = new Typed(".input", {
  strings: ["Junior Frontend Developer", "&  Junior Data Analyst"],
  typeSpeed: 70,
  backSpeed: 55,
  loop: true
});

document.getElementById('contact-forms').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const subject = document.querySelector('input[name="subject"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  const mailto = `mailto:cvinodhini2@gmail.com?subject=${encodeURIComponent(subject)}&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;

  window.location.href = mailto;

  alert("Email sent successfully!");

  // Clear form fields
  document.querySelector('input[name="name"]').value = '';
  document.querySelector('input[name="email"]').value = '';
  document.querySelector('input[name="subject"]').value = '';
  document.querySelector('textarea[name="message"]').value = '';
});

// Scroll to Top Functionality
const scrollTopButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
});

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});