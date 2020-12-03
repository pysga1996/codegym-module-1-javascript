let no = document.getElementById("no");
let yes = document.getElementById("yes");
function random_move() {
    no.innerHTML = 'No: "Catch me if you can;"';
    no.style.color = "red";
    no.style.width = "12rem";
    no.style.top = Number(Math.random() * (window.innerHeight - 16 * 2) / 16) + "rem";
    no.style.left = Number(Math.random() * (window.innerWidth - 16 * 12) / 16) + "rem";
}
no.onmouseover = function() {
    random_move();
};
yes.onclick = function() {
  alert ("<3");
};
