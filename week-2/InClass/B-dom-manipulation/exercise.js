/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

// Task 1.1
var pTags = document.querySelectorAll("p");
console.log(pTags);

// Task 1.2
var div1 = document.querySelector("div:first-of-type");
console.log(div1);

// Task 1.3
var jumBotronText = document.querySelector("#jumbotron-text");
console.log(jumBotronText);

// Task 1.4
var pTagsInside = document.querySelectorAll(".primary-content p");
console.log(pTagsInside);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

// Task 2
var alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", () => {
    alert("Thanks for visiting Bikes for Refugees!")
});

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

// Task 3
var bgrChangeBtn = document.querySelector("#bgrChangeBtn");
bgrChangeBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "orange"
});

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

// Task 4
document.querySelector("#addTextBtn").addEventListener("click", () => {
    var mainArticles = document.querySelector("#mainArticles");
    var paragraph = document.createElement("p");
    paragraph.innerText = "A new paragraph inside the “LEARN MORE” section";
    mainArticles.appendChild(paragraph);
});


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

// Task 5
document.querySelector("#largerLinksBtn").addEventListener("click", () => {
    document.querySelectorAll("a").forEach(a => a.style.fontSize = "125%")
});


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

// Task 6
document.querySelector("#addArticleBtn").addEventListener("click", () => {
    var input = document.querySelector("input.form-control.addArticle");
    var p = document.createElement("p");
    p.innerText = input.value;
    document.querySelector("#mainArticles").appendChild(p);
});

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

// Task 7
let colors = ["orange", "green", "red", "blue", "pink"];
i = 0;
var bgrChangeBtn = document.querySelector("#bgrChangeBtn");
bgrChangeBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = colors[i];
    i >= colors.length - 1 ? i = 0 : i++;
});

