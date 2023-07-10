// Scroll smoothly to sections when a navigation link is clicked
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Open WhatsApp chat on button click
  document.getElementById('whatsappButton').addEventListener('click', function () {
    // Replace the "1234567890" with your actual phone number
    var phoneNumber = "1234567890";
  
    // Construct the WhatsApp link
    var whatsappLink = "https://wa.me/" + phoneNumber;
  
    // Open the WhatsApp link in a new tab/window
    window.open(whatsappLink, "_blank");
  });
  