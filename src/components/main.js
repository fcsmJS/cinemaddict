import AbstractComponent from "./abstract-component";

export default class Main extends AbstractComponent {
  getTemplate() {
    return (
      `<main class="main"></main>`
    );
  }
}
