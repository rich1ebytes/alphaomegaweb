document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // You can replace this with an actual email sending functionality
  alert(`Thank you ${name}, we have received your message!`);

  // Reset the form
  event.target.reset();
});
