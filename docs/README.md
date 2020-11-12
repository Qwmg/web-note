---
sidebar: auto
next: /components/
---

# Guide

## Intro

> Common businisse components for midea official website team

<!-- <test></test> -->
## Getting Started from scratch

In this guide, you will learn how to use these common components

### Installation

These components are developed based on the ant-design-vue component library, so additional installation of ant-design-vue is required

```bash
npm i --save ant-design-vue@^1.6.5
npm i --save @midea/official-website/common-components@latest
```

### Using @midea/official-website/common-components

Complete introduction

```js
import Vue from 'vue';
import Antd from 'ant-design-vue';
import MideaCommonComponents from '@midea/official-website/common-components';
import App from './App';
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);
Vue.use(MideaCommonComponents);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
```

Partial introduction

```js
import Vue from 'vue';
import Antd from 'ant-design-vue';
import { MideaEditForm } from '@midea/official-website/common-components';
import App from './App';
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);
Vue.component(MideaEditForm.name, MideaEditForm);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
```

### compatibility

>Since the component is developed based on ant-design-vue component library, the compatibility needs to refer to ant-design-vue document

[https://antdv.com/docs/vue/getting-started/#Compatibility](https://antdv.com/docs/vue/getting-started/#Compatibility)

### Import on Demand

we can import individual components on demand

```js
import EditForm from '@midea/official-website/common-components/lib/editForm';
```

We strongly recommend using babel-plugin-import, which can convert the following code to the '@midea/official-website/common-components/lib/xxx' way

```js
import { EditForm } from '@midea/official-website/common-components';
```