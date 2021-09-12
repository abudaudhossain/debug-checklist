const valid = document.getElementById('valid');
const unValid = document.getElementById("unValid");
const emailFeild = document.getElementById('email-field');

const messageDisplay = (id, isdisplay) =>{
    if(isdisplay){
        id.classList.add("d-none");
  
    }else{
        id.classList.remove("d-none");
    }
}
const pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


document.getElementById('submit-btn').addEventListener("click", ()=>{
    // const emailFeild = document.getElementById('email-field');
    console.log(emailFeild);
    if(pattern.test(emailFeild.value)){
        messageDisplay(valid, false);
        messageDisplay(unValid, true);
    }else{
        messageDisplay(unValid, false);
        messageDisplay(valid, true);
    }
    
})


// messageDisplay(valid, isdisplay);