


const form = document.getElementById("form");



const textInput = document.getElementById("textInput");
const dateInput = document.getElementById("dateInput");
const textarea = document.getElementById("textarea");
const tasks = document.getElementById("tasks");
const submit = document.getElementById("add");

// const titleWarning = document.getElementById("titleWarning");
// const dateWarning = document.getElementById("dateWarning");
const Warning = document.getElementById("Warning");

let data = {};

// titleWarning.style.color = "red";
// dateWarning.style.color = "red";
Warning.style.color = "red";

form.addEventListener("submit", (preventDefault)=>{
preventDefault.preventDefault();
// titleValidation();
// dateValidation();
textValidation();
acceptData();
resetFunc();
})



// const titleValidation = ()=>{
//     if(textInput.value === ""){
//         console.log("Faild to insert title");
//         titleWarning.innerText = "Task title's field shoudn't be empty"
        
//     }else{
//         console.log("Success");
//         titleWarning.innerText = ""
        
//     }
// };


// const dateValidation = ()=>{
//     if(dateInput.value === ""){
//         console.log("Faild to insert date");
//         dateWarning.innerText = "Date field shoudn't be empty"
        
//     }else{
//         console.log("Success");
//         dateWarning.innerText = ""
        
//     }
// };


const textValidation = ()=>{
    if(textarea.value === "" && dateInput.value === "" && textInput.value === ""){
        console.log("Faild to insert descriptions");
        Warning.innerText = "Text field shoudn't be empty"
        
    }else{
        console.log("Success");
       Warning.innerText = ""
        submit.setAttribute("data-bs-dismiss","modal")
    }
};


const acceptData = ()=>{
    data["text"] = textInput.value;
    data["date"] = dateInput.value;
    data["description"] = textarea.value;
    console.log(data);
    creatTasks();
    resetFunc();
    
    
}

const creatTasks = ()=>{
    tasks.innerHTML += `<div>
                <span class="fw-bold">
                    ${data.text}
                </span>
                <span class="text-secondary small">
                    ${data.date}
                </span>
                <p>${data.description}</p>
                
                <span class="options">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                    
                </span>
        </div>`;
}

const resetFunc = ()=> {
    textInput.value = "";
    dateInput.value = "";
    textarea.value = "";
}