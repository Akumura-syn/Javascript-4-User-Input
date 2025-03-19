let username;
document.getElementById("mySubmit").onclick = function() {
    username = docurment.getElementById("myText").value;
    console.log(username);
};
document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById ("myText").value;

document.getElementById("welcome").textContent = `Hello, ${username}!`; }