import { createApp } from "../../dist/tiny-vue3.esm.js";
import { App } from "./App.js";

const rootContainer = document.querySelector("#app");

createApp(App).mount(rootContainer);
