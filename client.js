console.log('Almost Twitter lol');

const form = document.querySelector('.tweeter-form');
const loadElement = document.querySelector('.loadPost');
const errorElement = document.querySelector('.error');
const postElement = document.querySelector('.tweedle');
const API_URL = 'http://localhost:5000/tweedles';

loadElement.style.display = 'none'; // Hides loading element
errorElement.style.display = 'none'; // Hides error element at the page load 

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('user');
    const content = formData.get('post');

    // Put form data into an object
    const tweedle = {
        name,
        content
    };
    form.style.display = 'none';
    loadElement.style.display = '';

    fetch(API_URL, {
        method: 'POST', 
        body:   JSON.stringify(tweedle),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json().then(createdTweedle => {
        console.log(createdTweedle);
    }));
      form.style.display = '';
      form.reset();
      loadElement.style.display = 'none';
});