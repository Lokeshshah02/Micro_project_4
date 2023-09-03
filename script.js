let displayScreen = document.getElementById("input");

let buttons = Array.from(document.querySelectorAll(".button-grid button"));

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
        let txt = e.target.innerText;
        if (txt === "DEL") {
          displayScreen.value = displayScreen.value.slice(0, -1);
        }else if (txt === "RESET") {
          displayScreen.value = "";
        } else if (txt === "=") {
            try{
                let expression = displayScreen.value.replace(/x/g, '*'); 
                displayScreen.value = eval(expression);
            }catch{
                displayScreen.value =""
            }
        } else {
          displayScreen.value += txt;
        }
  });
});
