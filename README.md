# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

### How to start this codebase

- yarn install

#### How to test

- Responsive: no. Only applied for 1280 screen.
- Functionality: as following

  - At my page: due to using fake data, id is not unique
    - filter functionality: test filter functionality ahead.
    - get more data: after filter data, can click button to get more data.
    - Notes: if mixing 2 above functionality, filter can be wrong, due duplicated id, react tells error so that code will be stopped immediately or has unexpected results
  - At my records:
    - chart: only change color of buttons when clicked. Due to complex data structure, there is enough time to make this.
    - my exercise: check normal
    - my diary: click button to get more data. Due to id no unique, it can make some unexpected behavior
  - At column:
    - clicking on button to get more data. Due to id no unique, it can make some unexpected behavior
  - 2 page: challenge and notification. There's no requirement, so only show error page.
