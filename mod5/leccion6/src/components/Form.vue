<template>
  <div>
    <ul is="transition-group">
      <li v-for="user in users" class="user" :key="user['.key']">
        <span>{{ user.name }} - {{ user.email }}</span>
        <button v-on:click="removeUser(user)">X</button>
      </li>
    </ul>
    <form id="form" v-on:submit.prevent="addUser">
      <input v-model="newUser.name" placeholder="Agregar nombre" />
      <input v-model="newUser.email" placeholder="Agregar email" />
      <input type="submit" value="Agregar usuario" />
    </form>
    <ul class="errors">
      <li v-show="!validation.name">El campo no puede estar vacío.</li>
      <li v-show="!validation.email">Por favor ingrese un email válido.</li>
    </ul>
  </div>
</template>

<script>
import { db } from "@/db";

export default {
  name: "Form",
  data() {
    return {
      users: [],
      newUser: { name: null, email: null },
      validation: {
        name: true,
        email: true,
      },
    };
  },
  computed: {
    verifyName() {
      return this.newUser.name.length > 0;
    },
    verifyEmail() {
      const emailRegExp = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
      return emailRegExp.test(this.newUser.email);
    },
  },
  methods: {
    async addUser() {
      // Validacion de nombre y email
      this.validation.name = this.verifyName;
      this.validation.email = this.verifyEmail;
      // Si son validos, se prosigue con la ejecucion de la funcion
      if (this.validation.email && this.validation.name) {
        // Agregamos el nuevo usuario a firebase.
        await db.ref("usuarios").push({
          name: this.newUser.name,
          email: this.newUser.email,
        });
        // Reiniciamos la variable local.
        this.newUser = { name: null, email: null };
      }
    },
    removeUser(el) {
      // Buscamos el elemento a eliminar con .child() y lo eliminamos.
      db.ref("usuarios").child(el[".key"]).remove();
    },
  },
  firebase: {
    users: db.ref("usuarios"),
  },
};
</script>

<style lang="scss" scoped>
body {
  font-family: Helvetica, Arial, sans-serif;
}
ul {
  padding: 0;
}
.user {
  height: 30px;
  line-height: 30px;
  padding: 10px;
  border-top: 1px solid #eee;
  overflow: hidden;
  transition: all 0.25s ease;
}
.user:last-child {
  border-bottom: 1px solid #eee;
}
.v-enter,
.v-leave-to {
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
  border-top-width: 0;
  border-bottom-width: 0;
}
.errors {
  color: #f00;
}
</style>
