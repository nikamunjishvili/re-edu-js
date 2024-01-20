const firstName = document.getElementById("firstName");
const container = document.getElementById("container");
const second_container = document.getElementById("second_container");
const error = document.getElementById("error");

export function addContainer() {
    let input_value = firstName.value;
    if (input_value === "") {
      error.style.color = "red";
      error.style.display = "block";
      error.innerHTML = "write something...";
    } else {
      container.style.display = "none";
      second_container.style.display = "block";
      console.log(input_value);
      const p = document.createElement("p");
      p.innerHTML = input_value;
      second_container.appendChild(p);
    }
  }