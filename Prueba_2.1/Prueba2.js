const nameInfo = document.getElementById("name");
const emailInfo = document.getElementById("email");
const subjectInfo = document.getElementById("subject");
const buttonAction = document.getElementById("button");
const resultInfo = document.querySelector(".result");

buttonAction.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = valueCamps();
    if (error[0]) {
        resultInfo.innerHTML = error[1];
        resultInfo.classList.add("red");
    } else {
        resultInfo.innerHTML = "Request sent successfully";
        resultInfo.classList.add("green");
        resultInfo.classList.remove("red");
    }
})


const valueCamps = ()=>{
    let error = [];
    if (nameInfo.value.length < 5 || nameInfo.value.length > 40) {
        error[0] = true;
        error[1] = "Your Name is Invalid.";
        return error
    } else if (emailInfo.value.length < 5 || emailInfo.value.length > 40 || emailInfo.value.indexOf("@") == -1 || emailInfo.value.indexOf(".") == -1) {
        error[0] = true;
        error[1] = "Your Email is Invalid.";
        return error
    } else if (subjectInfo.value.length < 4 || subjectInfo.value.length > 40) {
        error[0] = true;
        error[1] = "This Subject doesn't Exists.";
        return error;
    }


    error[0] = false;
    return error;
}