let task = document.getElementById("task");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");

document.addEventListener("DOMContentLoaded", function () {
  btn.disabled = true;
  task.onkeyup = function () {
    if (task.value.length == 0 || task.value.length >= 76) {
      btn.disabled = true;
    } else {
      btn.disabled = false;
    }
  };
  btn.onclick = function () {
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let p = document.createElement("p");
    let inp = document.createElement("input");
    let i = document.createElement("i");
    inp.type = "checkbox";
    p.innerHTML = task.value;
    div2.appendChild(inp);
    div2.appendChild(p);
    div.appendChild(div2);
    div.appendChild(i);
    div.classList.add("style");
    div2.classList.add("style2");
    inp.classList.add("styleCon");
    p.classList.add("styleConP");
    i.classList.add("styleConi","fa-solid","fa-trash");
    document.querySelector("#tasks").appendChild(div);
    task.value = "";
    btn.disabled = true;
    inp.onclick = function () {
      p.classList.toggle("styleConP");
      p.classList.toggle("styleConFinsh");
    };
    i.onclick = function(){
      div.classList.toggle("style");
      div.classList.toggle("clear");
    }
  };
 });

