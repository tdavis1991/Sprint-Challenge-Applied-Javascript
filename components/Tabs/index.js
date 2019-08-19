// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(resolve => {
        let tab = document.querySelector('.topics')
        let topic = resolve.data.topics;
        topic.forEach(listItem => {
            let item = document.createElement('div')
            item.classList.add('tab');
            item.textContent = listItem;
            tab.appendChild(item);
        })
        
        return tab
    })
        .catch(error => {
        console.error(error)
    });
    