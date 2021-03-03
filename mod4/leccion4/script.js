const vm = new Vue({
  el: "#app",
  data: {
    histAlex: ["¡Choqué mi auto hoy!", "Alguien se comió mi chocolate..."],
    histJuan: [
      "¡Ayer alguien robó mi bolso!",
      "Me comí el chocolate de alguien",
    ],
    inputContent: "",
  },
  computed: {
    busqueda() {
      return [...this.histAlex, ...this.histJuan].filter((historia) =>
        historia.toLowerCase().includes(this.inputContent.toLowerCase())
      );
    },
  },
});
