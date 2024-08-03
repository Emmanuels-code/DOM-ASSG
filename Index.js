import "./styles.css";
//...Select and cache the <main> element in a variable named mainEl.

const mainEl = document.querySelector("main");

//..Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
//..Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.

mainEl.style.backgroundColor = "var(--main-bg)";

//..Set the content of mainEl to <h1>DOM Manipulation</h1>.//

const heading = document.createElement("h1");
heading.textContent = "DOM Manipulation";
mainEl.appendChild(heading);

//.. Add a class of flex-ctr to mainEl.

mainEl.classList.add("flex-ctr");

//---Part 2: Create a BAR Menu Page
//..Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

const topMenuEl = document.querySelector('#top-menu');

// Alternatively i feel i can still use ...

//..const topMenuEl = document.getElementById('top-menu');

//..Set the height of the topMenuEl element to be 100%.

topMenuEl.style.height = '100%';

//..Set the background color of topMenuEl to the value stored in 
//...the --top-menu-bg CSS custom property.

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//...Add a class of flex-around to topMenuEl.

topMenuEl.classList.add('flex-around');

//...Part 3: Adding Menu Buttons
// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];

//..Iterate over the entire menuLinks array and for each "link" object:
//..Create an <a> element.
//..On the new element, add an href 
//.. its value set to the href property of the "link" object.

//..Set the new element's content to the value of the text property of the "link" object.
//..Append the new element to the topMenuEl element.
menuLinks.forEach((link) => {
  const anchor = document.createElement('a');
  anchor.textContent = link.text;
  anchor.href = link.href;
  topMenuEl.appendChild(anchor);
});


