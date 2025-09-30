// Registration Form Submission Handler
document.querySelector('#registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('registerMessage').classList.remove('hidden');
  document.getElementById('registerMessage').innerText = "Thank you for registering! We'll contact you soon.";
  this.reset();
  setTimeout(() => { document.getElementById('registerMessage').classList.add('hidden'); }, 5000);
});

// Contact Form Submission Handler
document.querySelector('#contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('contactMessage').classList.remove('hidden');
  document.getElementById('contactMessage').innerText = "Submitted. We will get back to you!";
  this.reset();
  setTimeout(() => { document.getElementById('contactMessage').classList.add('hidden'); }, 5000);
});
