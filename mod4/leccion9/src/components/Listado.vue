<template>
  <div class="listado">
    <h2>Listado Estudiantes JS</h2>
    <div class="table">
      <div class="table__row">
        <div class="col table__header">Nombre</div>
        <div class="col table__header">Apellidos</div>
      </div>
      <div v-for="student in students" :key="student.id" class="table__row">
        <div class="col">{{ student.name }}</div>
        <div class="col">{{ student.lastname }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Listado",
  computed: {
    ...mapState(["students"])
  }
};
</script>

<style lang="scss" scoped>
.listado {
  width: 50%;
}
h2 {
  text-align: left;
}
.table__row {
  display: flex;
}
.table__header {
  font-weight: bold;
  margin-bottom: 1em;
}
.col {
  width: 50%;
  margin-bottom: 0.25em;
  text-align: left;
}
</style>
