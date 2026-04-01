window.addEventListener('scroll', () => {
  const nav = document.getElementById('main-nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Intersection Observer for reveal animations
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  section.classList.add('reveal');
  observer.observe(section);
});

// Modal Logic
const modal = document.getElementById("booking-modal");
const closeBtn = document.querySelector(".close-modal");

// Function to open modal
function openBooking() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
}

// Function to close modal
function closeBooking() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; 
}

// Event Listeners
closeBtn.onclick = closeBooking;

window.onclick = function(event) {
  if (event.target == modal) {
    closeBooking();
  }
}

// Attach to all buttons with href="#schedule" or specific classes
document.querySelectorAll('a[href="#schedule"], .nav-cta').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Stop page jump
    openBooking();
  });
});