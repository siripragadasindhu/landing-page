// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Contact Form Validation and Submission
  const contactForm = document.querySelector('.contact-form');
  
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = contactForm.querySelector('input[placeholder="Your Name"]');
    const email = contactForm.querySelector('input[placeholder="Your Email"]');
    const message = contactForm.querySelector('textarea[placeholder="Your Message"]');
  
    let hasError = false;
  
    // Validate Name
    if (name.value.trim() === '') {
      alert('Please enter your name.');
      hasError = true;
    }
  
    // Validate Email
    if (email.value.trim() === '') {
      alert('Please enter your email.');
      hasError = true;
    } else if (!validateEmail(email.value)) {
      alert('Please enter a valid email address.');
      hasError = true;
    }
  
    // Validate Message
    if (message.value.trim() === '') {
      alert('Please enter your message.');
      hasError = true;
    }
  
    if (!hasError) {
      // Simulate form submission
      alert('Thank you for contacting us! Your message has been sent.');
      contactForm.reset(); // Clear the form
    }
  });
  
  // Helper Function to Validate Email
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }