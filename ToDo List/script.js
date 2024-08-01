
const addBarInput = document.querySelector(".addBar input");
const addBarButton = document.querySelector(".addBar button");
const tasks = document.querySelector(".task");

let taskList = [];

function addTask(input) {
    console.log(input);
    taskList.push(input);

    let childTask = document.createElement("li");
    
    let childTextGroup = document.createElement("span");
    let innerChildRadio = document.createElement("img");
    innerChildRadio.setAttribute("src", "images/unchecked.png");
    let innerChildText = document.createElement("p");
    innerChildText.innerText = input;

    childTextGroup.appendChild(innerChildRadio);
    childTextGroup.appendChild(innerChildText);

    let childButton = document.createElement("button");
    childButton.innerText = "\u00d7";

    childTask.appendChild(childTextGroup);
    childTask.appendChild(childButton);

    tasks.appendChild(childTask);
}

addBarInput.addEventListener("keypress", function(key){
    if (key.key === "Enter" && addBarInput.value){
        addTask(addBarInput.value);
        addBarInput.value = null;
    }
})

addBarButton.addEventListener("click", () => {
    if (addBarInput.value){
        addTask(addBarInput.value);
        addBarInput.value = null;
    }
})

tasks.addEventListener("click", (e) => {
    console.log("here");
    console.log(e.target);
    if (e.target.tagName === "SPAN"){
        let imgSource = e.target.firstElementChild.getAttribute("src");
        console.log(imgSource);

        if (imgSource === "images/checked.png"){
            e.target.firstElementChild.setAttribute("src", "images/unchecked.png");
            e.target.lastElementChild.style.textDecoration = "none";
        }
        else if (imgSource === "images/unchecked.png"){
            e.target.firstElementChild.setAttribute("src", "images/checked.png");
            e.target.lastElementChild.style.textDecoration = "line-through";
        }
    } 
    else if (e.target.tagName === "P"){
        let imgSource = e.target.parentElement.firstElementChild.getAttribute("src");
        console.log(imgSource);

        if (imgSource === "images/checked.png"){
            e.target.parentElement.firstElementChild.setAttribute("src", "images/unchecked.png");
            e.target.style.textDecoration = "none";
        }
        else if (imgSource === "images/unchecked.png"){
            e.target.parentElement.firstElementChild.setAttribute("src", "images/checked.png");
            e.target.style.textDecoration = "line-through";
        }
    }
    else if (e.target.tagName === "IMG"){
        let imgSource = e.target.getAttribute("src");
        console.log(imgSource);

        if (imgSource === "images/checked.png"){
            e.target.setAttribute("src", "images/unchecked.png");
            e.target.parentElement.lastElementChild.style.textDecoration = "none";
        }
        else if (imgSource === "images/unchecked.png"){
            e.target.setAttribute("src", "images/checked.png");
            e.target.parentElement.lastElementChild.style.textDecoration = "line-through";
        }
    }
    else if (e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
    }
})