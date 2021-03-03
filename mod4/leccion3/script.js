const vm = new Vue({
  el: "#app",
  data: {
    styleVBind: {
      color: "red",
    },
    meMuestro: true,
    partesPC: [
      "Procesador",
      "Grafica",
      "Unidad de almacenamiento",
      "Fuente de poder",
      "Memoria ram",
    ],
    numero: 5,
    textoInput: "",
    nombre: "John Doe",
    cafe: "mocaccino",
  },
  methods: {
    mandarAlerta() {
      alert("Hola, soy una alerta");
    },
  },
});
