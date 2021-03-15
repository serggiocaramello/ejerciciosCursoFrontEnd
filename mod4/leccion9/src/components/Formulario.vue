<template>
  <div class="formulario">
    <form action="#">
      <label
        >Nombre
        <input v-model="student.name" class="name" type="text" name="name" />
      </label>
      <label
        >Apellidos
        <input
          v-model="student.lastname"
          class="lastname"
          type="text"
          name="lastname"
        />
      </label>
      <button @click.prevent="addStudent">Agregar</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Formulario",
  data() {
    return {
      student: {
        name: null,
        lastname: null
      }
    };
  },
  computed: {},
  methods: {
    ...mapMutations(["SET_STUDENT"]),
    addStudent() {
      this.SET_STUDENT(this.student);
    }
  }
};
</script>

<style lang="scss" scoped>
.formulario {
  width: 50%;
}
form {
  display: flex;
  flex-wrap: wrap;
}

.name,
.lastname {
  padding: 0.25em 0.5em;
  margin-right: 1em;
  margin-bottom: 0.5em;
}

button {
  padding: 0.5em 2em;
  padding: 0.5em 1em;
  color: #fff;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  background-color: teal;
}
</style>
