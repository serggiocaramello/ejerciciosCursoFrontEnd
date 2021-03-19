<template>
  <b-container>
    <h2 class="mt-5">Products:</h2>
    <div>
      <b-row class="mb-3 d-flex align-items-end">
        <b-col>
          <div class="div">
            <label>Filter by category:</label>
            <b-form-select v-model="selected" :options="options">
            </b-form-select>
          </div>
        </b-col>
        <b-col>
          <b-pagination
            class="m-0"
            v-model="currentPage"
            :per-page="perPage"
            :total-rows="rows"
          ></b-pagination>
        </b-col>
      </b-row>

      <b-table
        :current-page="currentPage"
        striped
        hover
        :per-page="perPage"
        :items="filteredItems"
        :fields="fields"
      >
        <template #cell(index)="data">
          {{ data.id }}
        </template>

        <template #cell(edit)="data">
          <b-button v-on:click="editProduct(data.item)" variant="success"
            >Edit</b-button
          >
        </template>
        <template #cell(delete)="data">
          <b-button v-on:click="deleteProduct(data.item)" variant="danger"
            >Delete</b-button
          >
        </template>
      </b-table>
    </div>
  </b-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Tabla",
  data() {
    return {
      selected: "All categories",
      currentPage: 1,
      perPage: 10,
      fields: ["id", "name", "amount", "price", "category", "edit", "delete"]
    };
  },
  computed: {
    ...mapState(["items"]),
    rows() {
      return this.filteredItems.length;
    },
    options() {
      // Genera un array con las categorias.
      let categoriesWithRep = this.items.map(item => item.category);
      // Eliminamos las categorias repetidas.
      return [
        "All categories",
        ...categoriesWithRep.filter((item, idx) => {
          return categoriesWithRep.indexOf(item) === idx;
        })
      ];
    },
    filteredItems() {
      // Cuando seleccionamos una categoria, solo se renderizan los productos de esa categoria.
      return this.selected === "All categories"
        ? this.items
        : this.items.filter(item => item.category === this.selected);
    }
  },
  methods: {
    ...mapMutations(["EDIT_ITEM", "DELETE_ITEM"]),
    editProduct(el) {
      this.EDIT_ITEM(el);
    },
    deleteProduct(el) {
      this.DELETE_ITEM(el);
    }
  }
};
</script>

<style lang="scss" scoped></style>
