---
title: ImagesUpload
sidebar_label: ImagesUpload
---

## ImagesUpload

> Add image upload using FilePond plugin.
> Can upload a simple image, multiple images or both

### Props

| Prop name     | Description                                                        | Type    | Values | Default          |
| ------------- | ------------------------------------------------------------------ | ------- | ------ | ---------------- |
| hide-preview  | Hide upload simple image                                           | boolean | -      |                  |
| hide-images   | Hide upload multiple images                                        | boolean | -      |                  |
| hide-label    | Hide Labels                                                        | boolean | -      |                  |
| preview-label | Simple image label, final label is used with i18n (`this.$t()`)    | string  | -      | "preview.image"  |
| preview-value | Property name for simple image                                     | string  | -      | "preview_image"  |
| images-label  | Multiple images label, final label is used with i18n (`this.$t()`) | string  | -      | "gallery.images" |
| images-value  | Property name for multiple images                                  | string  | -      | "images"         |
| cols          | Property to define cols length                                     | union   | -      | "12"             |
| lg            | Property to define lg cols length                                  | union   | -      | "6"              |

---

## FileUpload

> Add image upload using FilePond plugin.
> Can upload a simple image, multiple images or both

### Props

| Prop name      | Description                                 | Type    | Values | Default         |
| -------------- | ------------------------------------------- | ------- | ------ | --------------- |
| name           | Property name for simple image              | string  | -      | "preview_image" |
| multiple       | Allow multiple uploads on the same instance | boolean | -      |                 |
| hide-buttons   | Hide FilePond buttons                       | boolean | -      |                 |
| hide-file-info | Hide File info on upload                    | boolean | -      |                 |

### Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| input      |            |

---
