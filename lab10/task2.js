let btn = document.createElement("button");
btn.innerText = "Log In";
btn.style.backgroundColor = "Green";
btn.style.color = "white";
document.documentElement.insertBefore(btn, document.body);
console.log("Login button added outside the body!");
