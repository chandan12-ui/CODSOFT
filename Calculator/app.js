let string = "";
let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerHTML;

    if (value === "=") {
      try {
        string = eval(string).toString();
        input.value = string;
      } catch (error) {
        input.value = "Error";
        string = "";
      }
    } 
    else if (value === "AC") {
      string = "";
      input.value = "";
    } 
    else if (value === "DEL") {
      string = string.slice(0, -1);
      input.value = string;
    } 
    else if (value === "%") {
      string = (eval(string) / 100).toString();
      input.value = string;
    } 
    else {
      string += value;
      input.value = string;
    }
  });
});

