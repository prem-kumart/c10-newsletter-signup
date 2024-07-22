

const successPage = document.querySelector('.success-content');
const validationWarning = document.querySelector('#warning-message');
const emailBox = document.querySelector('.email');


if(validationWarning){
    validationWarning.style.display ='none';
}




emailBox.addEventListener('click',(event)=>{
    if(event.target.value = 'email@company.com'){
        console.log('inside the texbox')
        event.target.value ='';
    }

    if(validationWarning.style.display == 'inline'){
        event.target.style.color = 'grey'
        validationWarning.style.display = 'none';
        event.target.style.border = '1px solid grey';
    }
}
)





/* Handling form content */
const form = document.getElementById("form");

function validateEmail(email){

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat)&& email != 'email@company.com')
    {  
        return true;
     }
    else
    {
        return false;
    }
}


function formHandlerFunction(event) {


    event.preventDefault(event);
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
 

   if( validateEmail(data["email"])){
         window.location.href= './success.html'
   }
   else {
      validationWarning.style.display = 'inline';
      emailBox.style.color = 'red';
      emailBox.style.border ='1px solid red';
   }
}


form.addEventListener('submit',formHandlerFunction);
