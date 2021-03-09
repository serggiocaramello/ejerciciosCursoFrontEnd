<template>
  <div class="container">
    <h2>Ingrese dos números y seleccione una operación</h2>
    <div class="input__container">
      <input type="number" v-model.number="theVariables.firstNum" required />
      <select v-model="theVariables.theOPeration" name="mathOperation">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" v-model.number="theVariables.secondNum" required />
    </div>
    <div>
      <button class="calc" @click.prevent="theResult">Calcular</button>
      <button class="reset" @click.prevent="theReset">C</button>
    </div>
    <div v-show="mostrar">
      El resultado es:
      {{
        theVariables.firstNum +
          " + " +
          theVariables.secondNum +
          " = " +
          theVariables.result
      }}
    </div>
    <div>
      <pre>
        {{ theVariables }}
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculadora",
  props: {},
  data() {
    return {
      mostrar: false,
      theVariables: {
        firstNum: null,
        secondNum: null,
        result: null,
        theOPeration: "+",
      },
    };
  },
  methods: {
    theResult() {
      // Ambos numeros deben ser distintos de null
      if (this.theVariables.firstNum && this.theVariables.secondNum) {
        switch (this.theVariables.theOPeration) {
          case "+":
            this.theVariables.result =
              this.theVariables.firstNum + this.theVariables.secondNum;
            break;
          case "-":
            this.theVariables.result =
              this.theVariables.firstNum - this.theVariables.secondNum;
            break;
          case "*":
            this.theVariables.result =
              this.theVariables.firstNum * this.theVariables.secondNum;
            break;
          case "/":
            this.theVariables.result =
              this.theVariables.firstNum / this.theVariables.secondNum;
            break;
          default:
            break;
        }
        this.mostrar = true;
      }
    },
    theReset() {
      this.theVariables.firstNum = null;
      this.theVariables.secondNum = null;
      this.theVariables.result = null;
      this.mostrar = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap");
.container {
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.input__container {
  display: flex;
}

input,
select {
  padding: 0.5em 1em;
  margin-right: 0.5em;
  margin-bottom: 1em;
  flex-grow: 1;
}

select {
  flex-grow: 0;
}

button {
  padding: 0.5em 1em;
  margin-right: 0.5em;
  margin-bottom: 1em;
  border: none;
  cursor: pointer;
  &.calc {
    background-color: teal;
    color: #fff;
    &:hover {
      background-color: darken(teal, 10%);
    }
  }
  &.reset {
    background-color: crimson;
    color: #fff;
    &:hover {
      background-color: darken(crimson, 10%);
    }
  }
}
pre {
  background-color: rgb(214, 214, 214);
  padding: 1em;
  font-family: "Roboto Mono", monospace;
  font-size: 0.875rem;
  line-height: 1.6em;
}
</style>
