参考官方文档 <https://github.com/sbwxffnhc/mint-ui>

# Mint UI

> Mobile UI elements for **Vue 2.0**

- [Homepage](http://mint-ui.github.io/)
- [Documentation](http://mint-ui.github.io/docs)

## Installation

```
npm i mint-ui -S

# for Vue 1.x
npm i mint-ui@1 -S
```

## Usage

Import all components.

```
import Vue from 'vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(Mint);
```

Or import specified component. (Use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component))

```
import { Cell, Checklist } from 'mint-ui';

Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);
```

Equals to

```
import Vue from 'vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(Mint);

// import specified component

import MtRadio from 'mint-ui/lib/radio';
import 'mint-ui/lib/radio/style.css';

Vue.component(MtRadio.name, MtRadio);
```

## babel-plugin-component

- Auto import css file
- Modular import component

Installation

```
npm i babel-plugin-component -D
```

Usage

.babelrc

```
{
  "plugins": ["other-plugin", ["component", [
    { "libraryName": "mint-ui", "style": true }
  ]]]
}
```