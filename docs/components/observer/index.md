---
title: FormObserver
sidebar_label: FormObserver
---

## FormObserver

### Props

| Prop name           | Description                                                                                           | Type    | Values | Default                     |
| ------------------- | ----------------------------------------------------------------------------------------------------- | ------- | ------ | --------------------------- |
| hide-top-actions    | Hide top actions buttons                                                                              | boolean | -      |                             |
| hide-bottom-actions | Hide bottom actions buttons                                                                           | boolean | -      |                             |
| hide-cancel-action  | Hide cancel button on actions panels                                                                  | boolean | -      |                             |
| hide-save-action    | Hide save button on actions panels                                                                    | boolean | -      |                             |
| reset               | Reset form                                                                                            | boolean | -      |                             |
| loading             | Display loading style                                                                                 | boolean | -      |                             |
| title               | Form title                                                                                            | string  | -      |                             |
| button-options      | Global button options for all buttons on action panels<br/>`@see` https://vuetifyjs.com/en/api/v-btn/ | object  | -      | () => ({ text: true })      |
| css-action-top      | Css classes for top action buttons                                                                    | string  | -      |                             |
| css-action-bottom   | Css classes for bottom action buttons                                                                 | string  | -      |                             |
| css-title           | Css classes for bottom action buttons                                                                 | string  | -      | "text-h5 font-weight-light" |

### Events

| Event name   | Properties | Description |
| ------------ | ---------- | ----------- |
| update:reset |            |
| save         |            |
| cancel       |            |

### Slots

| Name                | Description                   | Bindings |
| ------------------- | ----------------------------- | -------- |
| top-actions-left    | Top action left side          |          |
| top-actions         | Top action before buttons     |          |
| default             | Default slot                  |          |
| bottom-actions-left | Bottom actions left side      |          |
| bottom-actions      | Bottom actions before buttons |          |

---

```html
<template>
  <v-form class="fill-height" @submit.prevent v-if="obModel">
    <form-observer @save="save" @cancel="cancel" :loading="isLoading">
      <settings v-model="obModel" />
    </form-observer>
  </v-form>
</template>

<script lang="ts">
  import { Mixins, Component, PropSync } from "vue-property-decorator";
  import CategoryMixin from "@/modules/categories/mixins/Category";
  import FormObserver from "@bit/planetadeleste.gui.form.form-observer/Observer.vue";
  import Settings from "@/modules/categories/components/Settings.vue";

  @Component({
    components: {
      FormObserver,
      Settings,
    },
  })
  export default class CategoriesForm extends Mixins(CategoryMixin) {}
</script>
```
