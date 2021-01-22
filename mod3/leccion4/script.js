$(document).ready(function () {
  // Variables
  var name = $("#nombre");
  var lastname = $("#apellido");
  var email = $("#email");
  var phone = $("#telefono");
  var button = $("#button");
  var modal = $("#modal");
  var modalText = $("#modalText");
  var closeModal = $("#closeModal");
  var printedName = $("#printedName");
  var printedLastName = $("#printedLastName");
  var printedEmail = $("#printedEmail");
  var printedPhone = $("#printedPhone");

  // Regex
  var regexName = /^[A-Z][a-z]*$/;
  var regexLastName = /^[A-Z][a-z]*$/;
  var regexEmail = /^[^@|\s]+@[^@|\s]+\.[a-zA-Z]+/;
  var regexNumber = /^9\d{8}/;

  // Función verificadora Regex
  var verifyRegex = function (el, regex) {
    return regex.test(el.val()) ? true : false;
  };

  // Función verificadora Campo no vacío
  var verifyNoEmpty = function (el) {
    return el.val() ? true : false;
  };

  // Función creadora de mensajes de error
  var message = function (text) {
    modalText.append($(`<p>${text}</p>`));
  };

  // Función verificadora y constructora de mensajes
  // Parametros:
  // elemento, mensaje campo vacio, mensaje campo mal llenado, regex
  var verifyAll = function (el, messageEmpty, messageRegex, regex) {
    if (!verifyNoEmpty(el)) {
      message(messageEmpty);
    } else if (!verifyRegex(el, regex)) {
      message(messageRegex);
    }
  };

  // Manejador de eventos en boton enviar
  button.on("click", function (event) {
    event.preventDefault();
    verifyAll(
      name,
      "Debe ingresar un nombre.",
      "El nombre ingresado no es válido, verifique que comience con mayúscula y no tenga espacios.",
      regexName
    );
    verifyAll(
      lastname,
      "Debe ingresar sus dos apellidos.",
      "El apellido ingresado no es válido, verifique que comience con mayúscula y no tenga espacios.",
      regexLastName
    );
    verifyAll(
      email,
      "Debe ingresar un correo.",
      "El correo ingresado no es válido, verifique que tenga un '@', luego un '.' y que no contenga espacios.",
      regexEmail
    );
    verifyAll(
      phone,
      "Debe ingresar un teléfono.",
      "El número ingresado no es válido, verifique que tenga 9 dígitos y que comience con un 9",
      regexNumber
    );

    console.log();

    // En caso de no existir ningun error, se envia el mensaje de éxito
    if ($("#modalText p").length < 1) {
      printedName.text(name.val());
      printedLastName.text(lastname.val());
      printedEmail.text(email.val());
      printedPhone.text(phone.val());
      alert("datos ingresados correctamente");
    } else {
      // Finalmente se hace visible el modal
      modal.removeClass("d-none");
    }
  });

  // Función cerrar modal y limpiar modal
  closeModal.on("click", function () {
    // cerrar modal
    modal.addClass("d-none");
    // limpiar modal
    if (modalText.children().length > 0) {
      modalText.children("p").remove();
    }
  });
});
