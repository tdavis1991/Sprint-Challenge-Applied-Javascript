// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component


function Header(date, head, temp) {
    const container = document.querySelector('.header-container')
    let div = document.createElement('div');
    div.classList.add('header');

    const span = document.createElement('span');
    span.classList.add('date');
    span.textContent = date;

    const h1 = document.createElement('h1');
    h1.textContent = head;

    const span2 = document.createElement('span');
    span2.classList.add('temp');
    span2.textContent = temp;

    div.appendChild(span);
    div.appendChild(h1);
    div.appendChild(span2);
    container.prepend(div);

    return container

}

Header('SMARCH 28, 2019', 'Lambda Times', '98°');
