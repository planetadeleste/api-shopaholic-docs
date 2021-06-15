---
title: Models and Collections
sidebar_label: Introduction
---

## Models and collections are based on [vue-mc](https://vuemc.io/) project

### Dependencies

Add the `vue-mc` package

```bash
npm install --save vue-mc
# Or
yarn add vue-mc
```

Models and Collections extends vue-mc package, first see [their docs](https://vuemc.io/).

### Install

```bash
# Add main packages
yarn add @bit/planetadeleste.shopaholic-mc.base
yarn add @bit/planetadeleste.shopaholic-mc.shopaholic

# Add types
yarn add -D @bit/planetadeleste.shopaholic-mc.types.vue-mc
yarn add -D @bit/planetadeleste.shopaholic-mc.types.vue-mc-module
```

### Configuration

On your vue project, add this lines

```javascript
import Vue from "vue";
import { Base } from "@bit/planetadeleste.shopaholic-mc.base";

// Set API Model
const laroute = require("./laroute.js");
Base.$resolve = laroute.route;
Base.$http = Vue.axios;
```

You can use `vuex` modules for loading, messaging and auth

```javascript
import Vue from "vue";
import { Base } from "@bit/planetadeleste.shopaholic-mc.base";
import { AuthModule } from "@/store/auth";
import { LoadingModule } from "@/store/loading";
import { FlashModule } from "@/store/flash";

// Set API Model
const laroute = require("./laroute.js");
Base.$resolve = laroute.route;
Base.$authModule = AuthModule;
Base.$flashModule = FlashModule;
Base.$loadingModule = LoadingModule;
Base.$http = Vue.axios;
```
