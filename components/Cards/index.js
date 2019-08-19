// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardCreator(obj) {
    const cardContainer = document.querySelector('.cards-container');
    const card = document.createElement('div');
    div.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = obj.headline;

    const author = document.createElement('div');
    author.classList.add('author');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const image = document.createElement('img');
    image.src = 'obj.authorPhoto'

    const name = document.createElement('span');
    name.textContent = obj.authorName;

    imgContainer.appendChild(image);
    author.appendChild(imgContainer);
    author.appendChild(name);
    card.appendChild(headline);
    card.appendChild(author);

    return card
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(resolve => {
        //People is an array of keys from the article object
        let people = Object.keys(resolve.data.articles)
        people.forEach(key => {
            resolve.data.articles[`'${key}'`].forEach(items => {
                cardCreator(items)
                cardContainer.appendChild(items)
            })
            
        })
        // return cardContainer
        console.log(resolve.data.articles)
    }).catch(error => {
        console.error(error)
    });