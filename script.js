let validFields = document.querySelectorAll("input");
let errorMessage = document.querySelectorAll("small");
let submit = document.getElementById("submitButton");
const emailExp = new RegExp("^[A-Za-z0-9_\.\-]+[@]{1}[A-Za-z0-9]+[\.]{1}[A-Za-z0-9]{2,}$");

function fieldCheck(event){
    event.preventDefault();
    errorMessage[2].innerHTML = "Email cannot be empty";
    for(i = 0; i < validFields.length; i++){
        if(validFields[i].value == ""){
            validFields[i].style.background = "url(images/icon-error.svg) no-repeat 99% center"
            errorMessage[i].style.visibility = "visible";
        }
        else {
            errorMessage[i].style.visibility = "hidden";
            validFields[i].style.background = "";
        }
    }
    if(emailExp.test(validFields[2].value) == false && validFields[2].value != ""){
        errorMessage[2].innerHTML = "Looks like this is not an email";
        errorMessage[2].style.visibility = "visible";
    }
}

submit.addEventListener("click", fieldCheck);