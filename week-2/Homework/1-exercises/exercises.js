/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach(item => {
    let h1 = document.createElement("h1");
    h1.textContent = item.name;
    content.appendChild(h1);

    let h2 = document.createElement("h2");
    h2.textContent = item.job;
    content.appendChild(h2);
  });
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  //Write your code in here
  let content = document.querySelector("#content");
  shopping.forEach(item => {
    let ul = document.createElement("ul");
    ul.textContent = item;
    content.appendChild(ul);
  });

}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  //Write your code in here

  books[0].img = "https://pbs.twimg.com/media/EZhSgmkXgAE6kVK.png";
  books[1].img = "https://cdn1.ozone.ru/multimedia/1012749475.jpg";
  books[2].img = "https://cdn11.bigcommerce.com/s-muuiixt7p8/images/stencil/500x659/products/145920/328302/41BKx1AxQWL__84695.1565156161.jpg?c=2";

  let content = document.querySelector("#content");
  let h1 = document.createElement("h1");
  h1.textContent = "Book list";
  content.appendChild(h1);

  let ul = document.createElement("ul");
  ul.style.display = "flex";
  ul.style.justifyContent = "space-around";
  ul.style.listStyle = "none";
  ul.style.textAlign = "center";

  content.appendChild(ul);

  books.forEach(item => {

    let p = document.createElement("p");
    p.textContent = item.title + " - " + item.author;
    p.style.padding = "20px";

    let img = document.createElement("img");
    img.src = item.img;
    img.style.maxHeight = "200px";
    img.style.margin = "0 0 10px 0";

    let li = document.createElement("li");
    li.appendChild(p);
    li.appendChild(img);

    if (item.alreadyRead === true) {
      li.style.backgroundColor = "#8FBC8F";
    } else {li.style.backgroundColor = "#E9967A";}

    ul.appendChild(li);
  });
}


//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
