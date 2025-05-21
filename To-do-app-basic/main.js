


const form = document.getElementById("form");
const input = document.getElementById("input")
const warnMsg = document.getElementById("warning-msg");
const posts = document.getElementById("posts");
const data = {}



form.addEventListener("submit", (e)=>{
    e.preventDefault()
    formValidation();
    // acceptData();
});

const formValidation = ()=> {

    if(input.value === ""){
        warnMsg.innerText = "text area should not be empty!";
        
    }
    else{
        console.log("Post complete");
        acceptData();
        warnMsg.innerHTML = "";
        creatPost();
        
    }
}

const acceptData = ()=> {
    data["text"] = input.value;
    console.log(data);
    
}

const creatPost = ()=>{
    posts.innerHTML += `  <div>
                    <p>${data.text}</p>
                    <span class="options">

                        <i onClick="editPost(this)" class="fa-solid fa-file-pen"></i>
                        <i onClick="deletPost(this)" class="fa-solid fa-trash"></i>
                        
                    </span>
                </div>`;
                input.value = ""
}

const deletPost = (e)=>{
    console.log("deleted successfully");
   e.parentElement.parentElement.remove()
    
}

const editPost = (b)=>{
    console.log("editted successfully");
   input.value = b.parentElement.previousElementSibling.innerText;
   b.parentElement.parentElement.remove()
    
}