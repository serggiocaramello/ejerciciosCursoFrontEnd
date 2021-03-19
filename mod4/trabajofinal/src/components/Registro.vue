<template>
  <div>
    <b-form @submit="onSubmit">
      <b-container>
        <h2>Register Product:</h2>
        <b-row>
          <b-col>
            <b-form-group id="input-group-1" label="Name:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="currentItem.name"
                type="text"
                placeholder="Enter the name of the product"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="input-group-2" label="Units:" label-for="input-2">
              <b-form-input
                id="input-2"
                type="number"
                v-model="currentItem.amount"
                placeholder="Enter the number of units"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group id="input-group-2" label="Price:" label-for="input-2">
              <b-form-input
                id="input-2"
                type="number"
                v-model="currentItem.price"
                placeholder="Enter the price"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              id="input-group-2"
              label="Category:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                type="text"
                v-model="currentItem.category"
                placeholder="Enter the category"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button type="submit" variant="primary">{{
              addOrEdit
            }}</b-button></b-col
          >
        </b-row>
      </b-container>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Registro",
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["SET_ITEM"]),
    onSubmit(e) {
      e.preventDefault();
      this.SET_ITEM(this.currentItem);
    },
    inputValue(el) {
      if (el) {
        return el;
      }
    }
  },
  computed: {
    ...mapState(["edit", "currentItem"]),
    resetForm() {
      return {
        name: null,
        amount: null,
        price: null,
        category: null
      };
    },
    addOrEdit() {
      return this.edit ? "Update product" : "Add product";
    }
  }
};
</script>

<style lang="scss" scoped></style>
