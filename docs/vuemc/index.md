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
yarn add @planetadeleste/vue-mc
```

### Configuration

On your vue project, add this lines

```ts
import Vue from "vue";
import { Base } from "@planetadeleste/vue-mc";

// Set API Model
const laroute = require("./laroute.js");
Base.$resolve = laroute.route;
Base.$http = Vue.axios;
```

You can use `vuex` modules for loading, messaging and auth

```ts
import Vue from "vue";
import { Base } from "@planetadeleste/vue-mc";
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
