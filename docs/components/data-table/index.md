---
title: DataTable
sidebar_label: DataTable
slug: /components
---

## DataTable

### Props

| Prop name              | Description                                                                                                                                              | Type    | Values | Default      |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------ | ------------ |
| headers                | An array of objects that each describe a header column                                                                                                   | Array   | -      |              |
| items                  | The array of items to display                                                                                                                            | Array   | -      |              |
| total                  | Number total of elements on query                                                                                                                        | number  | -      | 0            |
| last-page              | Last page number                                                                                                                                         | number  | -      | 1            |
| loading                | Display loading state                                                                                                                                    | boolean | -      | false        |
| btn-action-path        | Action path                                                                                                                                              | string  | -      |              |
| to-view                | Route for view action<br />Denotes the target route of the link. You can find more information about<br />the to prop on the vue-router documentation.   | union   | -      |              |
| to-update              | Route for update action<br />Denotes the target route of the link. You can find more information about<br />the to prop on the vue-router documentation. | union   | -      |              |
| to-action-item-key-id  | Action item identification key. Used with to-update and to-view                                                                                          | string  | -      | "id"         |
| btn-action-item-key-id | Action item identification key                                                                                                                           | string  | -      | "id"         |
| route-name-separator   | Route name separator.<br />Used to generate update/view routes.                                                                                          | string  | -      | "."          |
| is-route-name          | Use path prop as route name<br />Used to generate update/view routes.                                                                                    | boolean | -      |              |
| hide-btn-action-view   | Hide button view action                                                                                                                                  | boolean | -      |              |
| hide-btn-action-update | Hide button edit/update action                                                                                                                           | boolean | -      |              |
| hide-btn-action-delete | Hide button delete action                                                                                                                                | boolean | -      |              |
| icon-action-view       | Action view icon                                                                                                                                         | string  | -      | "mdi-eye"    |
| icon-action-edit       | Action edit/update icon                                                                                                                                  | string  | -      | "mdi-pencil" |
| icon-action-delete     | Action delete icon                                                                                                                                       | string  | -      | "mdi-delete" |

### Events

| Event name | Properties           | Description           |
| ---------- | -------------------- | --------------------- |
| delete     | **sItemId** `number` | Item ID to be deleted |

### Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

```vue
<template>
  <data-table
    :headers="headers"
    :items="obCollection.getModelList()"
    :options.sync="pagination"
    :total="serverItemsLength"
    :last-page="serverLastPage"
    :loading="bLocalLoading"
    btn-action-path="products"
    btn-action-item-key-id="id"
    hide-btn-action-view
    @delete="deleteItem"
  >
    <template v-slot:[`item.name`]="{ item }">
      <name-with-avatar :name="item.name" :path="item.thumbnail" />
    </template>

    <template v-slot:[`item.active`]="{ item }">
      <active-icon :active="item.active" />
    </template>

    <template v-slot:[`item.price`]="{ item }">
      <v-chip label v-if="item.offers.length">
        <strong class="mr-2">{{ item.offers[0].currency }}</strong>
        <span>{{ item.offers[0].price }}</span>
      </v-chip>
      <v-chip label v-else>0</v-chip>
    </template>
  </data-table>
</template>

<script lang="ts">
import { Mixins, Component, Watch } from "vue-property-decorator";
import ProductMixin from "@/modules/products/mixins/Product";
import DataTable from "@bit/planetadeleste.gui.ui.data-table/index.vue";
import ActiveIcon from "@/components/common/ActiveIcon.vue";
import ProductsForm from "@/modules/products/components/Form.vue";
import NameWithAvatar from "@/components/common/NameWithAvatar.vue";
import { DataTableHeader } from "vuetify";

@Component({
  components: {
    DataTable,
    ActiveIcon,
    ProductsForm,
    NameWithAvatar,
  },
})
export default class ProductsList extends Mixins(ProductMixin) {
  headers: DataTableHeader[] = [
    { text: "name", value: "name" },
    { text: "active", value: "active", class: "mw-150", sortable: false },
    {
      text: "price",
      value: "price",
      sortable: false,
    },
    {
      text: "category",
      value: "category_name",
    },
    {
      text: "actions",
      value: "actions",
      align: "end",
      sortable: false,
    },
  ];

  mounted() {
    this.headers = this.$_.map(this.headers, (item) => {
      item.text = this.$_.toString(this.$t(item.text));
      return item;
    });
    this.index();
  }
}
</script>
```

---

## ActionButtonsTable

### Props

| Prop name            | Description | Type    | Values | Default      |
| -------------------- | ----------- | ------- | ------ | ------------ |
| item-id              |             | union   | -      |              |
| action-item-key-id   |             | string  | -      | "id"         |
| route-name-separator |             | string  | -      | "."          |
| hide-view            |             | boolean | -      | false        |
| hide-update          |             | boolean | -      | false        |
| hide-delete          |             | boolean | -      | false        |
| is-route-name        |             | boolean | -      |              |
| path                 |             | string  | -      |              |
| to-view              |             | union   | -      |              |
| to-update            |             | union   | -      |              |
| icon-view            |             | string  | -      | "mdi-eye"    |
| icon-edit            |             | string  | -      | "mdi-pencil" |
| icon-delete          |             | string  | -      | "mdi-delete" |

### Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| delete     |            |

### Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

## FooterTable

### Props

| Prop name | Description | Type   | Values | Default |
| --------- | ----------- | ------ | ------ | ------- |
| total     |             | number | -      |         |
| last-page |             | number | -      |         |
| value     |             | number | -      |         |

### Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| input      |            |
