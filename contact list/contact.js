const contactForm = document.getElementById('contact-form');
const contactList = document.getElementById('contact-list');

let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  let name = document.getElementById('name').value;
  let phone = document.getElementById('phone').value;

  let contact = { name, phone };
  contacts.push(contact);
  localStorage.setItem('contacts', JSON.stringify(contacts));

  displayContacts();
  contactForm.reset();
});

function displayContacts() {
  contactList.innerHTML = '';
  contacts.forEach(function(contact, index) {
    let li = document.createElement('li');
    li.textContent = `${contact.name}: ${contact.phone}`;
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
      contacts.splice(index, 1);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      displayContacts();
    });
    li.appendChild(deleteBtn);
    contactList.appendChild(li);
  });
}

displayContacts();
