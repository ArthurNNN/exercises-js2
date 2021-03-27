// Part 1
document.querySelector("#blueBtn").addEventListener("click", () => {
    document.querySelector(".jumbotron").style.backgroundColor = '#588fbd'
    document.querySelector("a.btn.btn-primary.btn-lrg").style.backgroundColor = `#ffa500`
    document.querySelector(".buttons > .btn-secondary").style.backgroundColor = 'black'
    document.querySelector(".buttons > .btn-secondary").style.color = 'white'
});

document.querySelector("#orangeBtn").addEventListener("click", () => {
    document.querySelector(".jumbotron").style.backgroundColor = '#f0ad4e'
    document.querySelector(".buttons > .btn-primary").style.backgroundColor = `#5751fd`
    document.querySelector(".buttons > .btn-secondary").style.backgroundColor = '#31b0d5'
    document.querySelector(".buttons > .btn-secondary").style.color = 'white'
});

document.querySelector("#greenBtn").addEventListener("click", () => {
    document.querySelector(".jumbotron").style.backgroundColor = '#87ca8a'
    document.querySelector(".buttons > .btn-primary").style.backgroundColor = `black`
    document.querySelector(".buttons > .btn-secondary").style.backgroundColor = '#8c9c08'
});

// Part 2
let email = document.querySelector("#exampleInputEmail1");
let yourName = document.querySelector("#example-text-input");
let text = document.querySelector("#exampleTextarea");
document.querySelector("form .btn.btn-primary").addEventListener("click", () => {
    err = 0;
    if (email.value.length < 1 || !email.value.includes('@')) {
        email.style.backgroundColor = "red";
        err = 1
    } else { email.style.backgroundColor = "white"; }
    if (yourName.value.length < 1) {
        yourName.style.backgroundColor = "red";
        err = 1
    } else { yourName.style.backgroundColor = "white"; }
    if (text.value.length < 1) {
        text.style.backgroundColor = "red";
        err = 1
    } else { text.style.backgroundColor = "white"; }
    if (err === 0) {
        alert("Thank you for filling out the form!")
        email.value = "";
        yourName.value = "";
        text.value = "";
        event.preventDefault();
    }
});
