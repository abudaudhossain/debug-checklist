const valid = document.getElementById('valid');
const unValid = document.getElementById("unValid");


const messageDisplay = (id, isdisplay) =>{
    if(isdisplay){
        id.classList.add("d-none");
  
    }else{
        id.classList.remove("d-none");
    }
}

document.getElementById('submit-btn').addEventListener("click", ()=>{
    const emailFeild = document.getElementById('email-field');
    console.log(emailFeild);
    if(emailFeild.value > 5){
        messageDisplay(valid, false);
        messageDisplay(unValid, true);
    }else{
        messageDisplay(unValid, false);
        messageDisplay(valid, true);
    }
    
})


// messageDisplay(valid, isdisplay);