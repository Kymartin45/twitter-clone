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
    }).then(response => response.json().then(newPost => {
        console.log(newPost); // Log new post for now
    }));
});

// function loadTweets(reset = true) {
//     loading = true; 
//     if(reset) {
//         postElement.innerHTML = '';
//         skip = 0;
//         finished = false;
//     }
//     fetch(`${API_URL}?skip=${skip}&limit=${limit}`)
//     .then(response => response.json())
//     .then(result => {
//         result.tweedles.ForEach(tweedle => {
//             const div = document.createElement('div');

//             const header = document.createElement('h3');
//             header.textContent = tweedle.name;

//             const contents = document.createElement('p');
//             contents.textContent = tweedle.content;

//             const date = document.createElement('small');
//             contents.textContent = new Date(tweedle.created);

//             div.appendChild(header);
//             div.appendChild(contents);
//             div.appendChild(date);
//         });
//     })
// }