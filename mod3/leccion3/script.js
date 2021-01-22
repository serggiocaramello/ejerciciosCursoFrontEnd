const inputName = $("#inputName");
const inputAge = $("#inputAge");
const btnSubmit = $("#btnSubmit");

const onlyLetters = /^[a-zA-z]*$/;

btnSubmit.on("click", (e) => {
  e.preventDefault();
  if (
    onlyLetters.test(inputName.val()) &&
    typeof parseInt(inputAge.val()) === "number" &&
    !isNaN(parseInt(inputAge.val()))
  ) {
    alert(
      `Muchas gracias ${inputName.val()}, tus datos han sido guardados correctamente`
    );
  } else if (!onlyLetters.test(inputName.val())) {
    alert(`Por favor verifica que el nombre este ingresado correctamente`);
  } else {
    alert(`Por favor verifica que la edad este ingresada correctamente`);
  }
});
