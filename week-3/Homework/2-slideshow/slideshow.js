// Write your code here
const links = ["https:\/\/images.dog.ceo\/breeds\/kelpie\/n02105412_5282.jpg", "https:\/\/images.dog.ceo\/breeds\/keeshond\/n02112350_6693.jpg",
    "https:\/\/images.dog.ceo\/breeds\/wolfhound-irish\/n02090721_2170.jpg", "https:\/\/images.dog.ceo\/breeds\/hound-walker\/n02089867_4001.jpg",
    "https:\/\/images.dog.ceo\/breeds\/schnauzer-giant\/n02097130_6056.jpg", "https:\/\/images.dog.ceo\/breeds\/wolfhound-irish\/n02090721_4032.jpg",
    "https:\/\/images.dog.ceo\/breeds\/germanshepherd\/n02106662_20711.jpg", "https:\/\/images.dog.ceo\/breeds\/bulldog-boston\/n02096585_6940.jpg",
    "https:\/\/images.dog.ceo\/breeds\/eskimo\/n02109961_5597.jpg", "https:\/\/images.dog.ceo\/breeds\/dingo\/n02115641_1380.jpg"];
let i = 0;

postImage(i);

function postImage(i) {
    i = i % links.length;
    let img = document.querySelector("#image");
    img.src = links[i % links.length];
    let divId = document.querySelector("#divid");
    divId.textContent = i % links.length;
}

document.querySelector("#forward").addEventListener("click", () => {
    i++;
    postImage(i);
    console.log(i);
});

document.querySelector("#back").addEventListener("click", () => {
    i--;
    postImage(i);
});

document.querySelector("#forward-auto").addEventListener("click", () => {
    setInterval(() => {
        i++;
        postImage(i);
    }, 5000)
});

document.querySelector("#back-auto").addEventListener("click", () => {
    setInterval(() => {
        i--;
        postImage(i);
    }, 5000)
});