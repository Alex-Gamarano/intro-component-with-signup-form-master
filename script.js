let btn = document.getElementById("btn");
let intros = document.querySelectorAll(".intro");
let mail = document.getElementById("email");
let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;
let err = document.createElement("span");
err.classList.add("danger");
mail.insertAdjacentElement("afterend", err);
mail.addEventListener("input", () => {
  if (!regEx.test(mail.value)) {
    err.innerHTML = "invalid email";
    mail.classList.add("error");
  } else {
    err.innerHTML = "";
    mail.classList.remove("error");
  }
});

intros.forEach((intro) => {
  intro.addEventListener("input", () => {
    if (intro.classList.contains("scream")) {
      intro.classList.remove("scream");
      intro.classList.remove("error");
      intro.nextSibling.remove();
    }
  });
});

btn.addEventListener("click", () => {
  intros.forEach((intro) => {
    if (!intro.value && !intro.classList.contains("scream")) {
      let achtung = document.createElement("span");
      achtung.classList.add("danger");
      intro.classList.add("error");
      achtung.innerHTML = `${intro.placeholder} cannot be empty`;
      intro.classList.add("scream");
      intro.insertAdjacentElement("afterend", achtung);
    }
  });
});
