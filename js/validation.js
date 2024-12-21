
const name = document.querySelector("#name")

const email = document.querySelector("#email")
const msg = document.querySelector("#msg")
const btn = document.querySelector("button")
const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
btn.addEventListener("click",()=>{
    if (email.value && name.value && msg.value){
        if (pattern.test(email.value)){
        alert("send succfuly");
        }else {
            alert("unvalid email");
        }
    }else {
        alert("feild send");
    }
})
