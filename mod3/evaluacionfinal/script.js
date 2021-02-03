$(document).ready(function () {
  // Clase Webpage
  class Webpage {
    addData(el) {
      el.data("newP", { newP: "Hola, soy un nuevo párrafo" });
      el.append(`<p class="newP">${el.data("newP").newP}</p>`);
    }
    getData() {
      let textAlert = "";
      if ($(".newP").length == 0) {
        textAlert = "No hay datos adjuntos al párrafo";
      } else {
        for (const p of $(".newP")) {
          textAlert += p.textContent + "\n\n";
        }
      }
      alert(textAlert);
    }
    addClassColorRed(el) {
      el.addClass("color-red");
    }
    slideToggleButton(el) {
      el.slideToggle();
    }
    appendText(el) {
      el.append("<p>Párrafo agregado con .append()</p>");
    }
    getVal(el) {
      if (el.val() === "") {
        alert("Debes escribir algo en el input antes de presionar el botón");
      } else {
        alert(el.val());
      }
    }
    fadeInImg(el) {
      el.fadeIn();
    }
    fadeOutImg(el) {
      el.fadeOut();
    }
    focusInput(el) {
      el.focus();
    }
    hideP(el) {
      el.hide();
    }
    showP(el) {
      el.show();
    }
    slideUpP(el) {
      el.slideUp();
    }
    slideDownP(el) {
      el.slideDown();
    }
    effect(btn, func, el) {
      if (arguments.length < 3) {
        btn.on("click", function ($e) {
          $e.preventDefault();
          func();
        });
      } else {
        btn.on("click", function ($e) {
          $e.preventDefault();
          func(el);
        });
      }
    }
  }

  // Nueva instancia de la clase Webpage
  const homework = new Webpage();

  // Asignacion de eventos a los botones mediante el metodo effect
  homework.effect($("#dataButton"), homework.addData, $("#dataBody"));
  homework.effect($("#dataButtonGet"), homework.getData);
  homework.effect(
    $("#addClassButton"),
    homework.addClassColorRed,
    $("#addClassBody p")
  );
  homework.effect(
    $("#slideToggleButton"),
    homework.slideToggleButton,
    $("#slideToggleImg")
  );
  homework.effect($("#appendButton"), homework.appendText, $("#appendBody"));
  homework.effect($("#valButton"), homework.getVal, $("#valInput"));
  homework.effect(
    $("#fadeInButton"),
    homework.fadeInImg,
    $("#fadeInFadeOutImg")
  );
  homework.effect(
    $("#fadeOutButton"),
    homework.fadeOutImg,
    $("#fadeInFadeOutImg")
  );
  homework.effect($("#focusButton"), homework.focusInput, $("#focusInput"));
  homework.effect($("#hideButton"), homework.hideP, $("#hideShowBody p"));
  homework.effect($("#showButton"), homework.showP, $("#hideShowBody p"));
  homework.effect(
    $("#slideUpButton"),
    homework.slideUpP,
    $("#slideUpSlideDownBody p")
  );
  homework.effect(
    $("#slideDownButton"),
    homework.slideDownP,
    $("#slideUpSlideDownBody p")
  );

  // Implementacion anterior de asignacion de eventos a botones

  // $("#dataButton").on("click", function ($e) {
  //   $e.preventDefault();
  //   homework.addData($("#dataBody"));
  // });
  // $("#dataButtonGet").on("click", function ($e) {
  //   $e.preventDefault();
  //   homework.getData();
  // });
  // $("#addClassButton").on("click", function ($e) {
  //   $e.preventDefault();
  //   homework.addClassColorRed($("#addClassBody p"));
  // });
  // $("#slideToggleButton").on("click", function ($e) {
  //   $e.preventDefault();
  //   homework.slideToggleButton($("#slideToggleImg"));
  // });
  // $("#appendButton").on("click", function ($e) {
  //   $e.preventDefault();
  //   homework.appendText($("#appendBody"));
  // });
  // $("#valButton").on("click", function ($e) {
  //   $e.preventDefault();
  //   homework.getVal($("#valInput"));
  // });
  // $("#fadeInButton").on("click", function ($e) {
  //   $e.preventDefault();
  //   homework.fadeInImg($("#fadeInFadeOutImg"));
  // });
  // $("#fadeOutButton").on("click", function ($e) {
  //   $e.preventDefault();
  //   homework.fadeOutImg($("#fadeInFadeOutImg"));
  // });
  // $("#focusButton").on("click", function ($e) {
  //   $e.preventDefault();
  //   homework.focusInput($("#focusInput"));
  // });
  // $("#hideButton").on("click", function ($e) {
  //   $e.preventDefault();
  //   homework.hideP($("#hideShowBody p"));
  // });
  // $("#showButton").on("click", function ($e) {
  //   $e.preventDefault();
  //   homework.showP($("#hideShowBody p"));
  // });
  // $("#slideUpButton").on("click", function ($e) {
  //   $e.preventDefault();
  //   homework.slideUpP($("#slideUpSlideDownBody p"));
  // });
  // $("#slideDownButton").on("click", function ($e) {
  //   $e.preventDefault();
  //   homework.slideDownP($("#slideUpSlideDownBody p"));
  // });
});
