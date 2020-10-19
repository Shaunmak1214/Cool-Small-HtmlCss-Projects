const password = document.querySelector("input");
const showpassword = document.querySelector("span i");
showpassword.onclick = (() => {
    if (password.type === "password") {
        password.type = "text";
        showpassword.classList.add("hide-btn");
    } else {
        password.type = "password";
        showpassword.classList.remove("hide-btn");
    }
});
