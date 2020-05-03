import UserTitle from "./components/user-title";
import Menu from "./components/menu";
import Sort from "./components/sort";
import Stats from "./components/stats";
import Films from "./components/films/films";
import {generateFilms} from "./mocks/films";
import {render} from "./util/dom-util";
import {QUANTITY_FILMS} from "./util/consts";
import FilmsController from "./controllers/films";

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);

const films = generateFilms(QUANTITY_FILMS.TOTAL);

render(siteHeaderElement, new UserTitle());
render(siteMainElement, new Menu(films));

const sortComponent = new Sort();
render(siteMainElement, sortComponent);

const filmsComponent = new Films();
render(siteMainElement, filmsComponent);
const filmsController = new FilmsController(filmsComponent, sortComponent);
filmsController.render(films);

render(siteFooterElement, new Stats(films));
