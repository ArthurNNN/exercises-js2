// Write your code here
const links = ["https:\/\/images.dog.ceo\/breeds\/kelpie\/n02105412_5282.jpg", "https:\/\/images.dog.ceo\/breeds\/keeshond\/n02112350_6693.jpg",
    "https:\/\/images.dog.ceo\/breeds\/wolfhound-irish\/n02090721_2170.jpg", "https:\/\/images.dog.ceo\/breeds\/hound-walker\/n02089867_4001.jpg",
    "https:\/\/images.dog.ceo\/breeds\/schnauzer-giant\/n02097130_6056.jpg", "https:\/\/images.dog.ceo\/breeds\/wolfhound-irish\/n02090721_4032.jpg",
    "https:\/\/images.dog.ceo\/breeds\/germanshepherd\/n02106662_20711.jpg", "https:\/\/images.dog.ceo\/breeds\/bulldog-boston\/n02096585_6940.jpg",
    "https:\/\/images.dog.ceo\/breeds\/eskimo\/n02109961_5597.jpg", "https:\/\/images.dog.ceo\/breeds\/dingo\/n02115641_1380.jpg"];

let i = 0;
postImage(i);

function nextLoopId(){
    i >= links.length - 1 ? i = 0 : i++;
}

function prevLoopId(){
    i <= 0 ? i = links.length - 1 : i--;
}

function postImage(i) {
    let img = document.querySelector("#image");
    img.src = links[i];
    let divId = document.querySelector("#divid");
    divId.textContent = 'id = ' + i;
}

document.querySelector("#forward").addEventListener("click", () => {
    nextLoopId();
    postImage(i);
});

document.querySelector("#back").addEventListener("click", () => {
    prevLoopId();
    postImage(i);
});

document.querySelector("#forward-auto").addEventListener("click", () => {
    const forward = setInterval(() => {
        nextLoopId();
        postImage(i);
        document.querySelector("#stop").addEventListener("click", () => {
            clearInterval(forward);
        });
    }, 5000)
});

document.querySelector("#back-auto").addEventListener("click", () => {
    const backward = setInterval(() => {
        prevLoopId();
        postImage(i);
        document.querySelector("#stop").addEventListener("click", () => {
            clearInterval(backward);
        });
    }, 5000)
});

