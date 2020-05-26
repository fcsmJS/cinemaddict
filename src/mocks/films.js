import {getRandomItem, getRandomIntInclusive, getRandomBoolean, shuffle} from "../util/util";
// import {QUANTITY_FILMS} from "../util/consts";

// const SENTENCE_QUANTITY = {
//   MIN: 1,
//   MAX: 5
// };

// const COMMENTS_QUANTITY = {
//   MIN: 0,
//   MAX: 5
// };

// const GENRES_QUANTITY = {
//   MIN: 1,
//   MAX: 4
// };

// const FILM_RATING = {
//   MIN: 0,
//   MAX: 10
// };

// const RELEASE_DATE = {
//   FIRST: new Date(1895, 11, 28),
//   LAST: new Date()
// };

// const DURATION = {
//   MIN: 45,
//   MAX: 180
// };

// const WATCHING_DATE = {
//   FROM: new Date(2019, 0, 1),
//   TO: new Date()
// };

// const AGES = [`0+`, `6+`, `12+`, `16+`, `18+`];

// const TITLES = [
//   {
//     title: `Созданы друг для друга`,
//     original: `Made for Each Other`
//   },
//   {
//     title: `Папай-морячок встречается с Синдбадом-мореходом`,
//     original: `Popeye the sailor meets Sindbab the sailor`
//   },
//   {
//     title: `След в полыни`,
//     original: `Sagebrush trail`
//   },
//   {
//     title: `Санта Клаус завоёвывает марсиан`,
//     original: `Santa Claus conquers the Marthians`
//   },
//   {
//     title: `Танец жизни`,
//     original: `The dance of life`
//   },
//   {
//     title: `Великий Фламарион`,
//     original: `The great Flamarion`
//   },
//   {
//     title: `Человек с золотой рукой`,
//     original: `The man with the golden arm`
//   }
// ];

const FIRST_NAMES = [
  `James`,
  `John`,
  `Robert`,
  `Michael`,
  `William`,
  `Mary`,
  `Patricia`,
  `Jennifer`,
  `Linda`,
  `Elizabeth`
];

const LAST_NAMES = [
  `Smith`,
  `Johnson`,
  `Williams`,
  `Brown`,
  `Jones`,
  `Miller`,
  `Davis`,
  `Garcia`,
  `Rodriguez`,
  `Wilson`
];

// const COUNTRIES = [
//   `United States`,
//   `United Kingdom`,
//   `China`,
//   `France`,
//   `Japan`,
//   `Germany`,
//   `Republic of Korea`,
//   `Canada`,
//   `Australia`,
//   `India`,
//   `New Zealand`,
//   `Italy`,
//   `Spain`,
//   `Belgium`,
//   `Russian Federation`
// ];

// const GENRES = [
//   `Sci-fi`,
//   `Horror`,
//   `Action`,
//   `Drama`,
//   `Comedy`,
//   `Thriller`,
//   `Fantasy`,
//   `Adventure`,
//   `War`,
//   `Mystery`
// ];

// const POSTERS = [
//   `made-for-each-other.png`,
//   `popeye-meets-sinbad.png`,
//   `sagebrush-trail.jpg`,
//   `santa-claus-conquers-the-martians.jpg`,
//   `the-dance-of-life.jpg`,
//   `the-great-flamarion.jpg`,
//   `the-man-with-the-golden-arm.jpg`
// ];

// const WRITERS_QUANTITY = {
//   MIN: 1,
//   MAX: 5
// };

// const ACTORS_QUANTITY = {
//   MIN: 1,
//   MAX: 20
// };

// const DESCRIPTIONS = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

// const EMOJI = [`smile`, `sleeping`, `puke`, `angry`];

export const getRandomName = () => {
  return `${getRandomItem(FIRST_NAMES)} ${getRandomItem(LAST_NAMES)}`;
};

// const getRandomRating = (min, max) => {
//   return (Math.random() * (max - min) + min).toFixed(1);
// };

// const getRandomListOfNames = (quantity) => {
//   const names = [];
//   const max = getRandomIntInclusive(quantity.MIN, quantity.MAX);
//   for (let i = 1; i <= max; i++) {
//     names.push(getRandomName());
//   }
//   return names.join(`, `);
// };

// const getRandomListOfGenres = (quantity) => {
//   const genres = [];
//   const max = getRandomIntInclusive(quantity.MIN, quantity.MAX);
//   for (let i = 1; i <= max; i++) {
//     genres.push(getRandomItem(GENRES));
//   }
//   return genres;
// };

// const getRandomDescription = (text) => {
//   const numberOfSentence = getRandomIntInclusive(SENTENCE_QUANTITY.MIN, SENTENCE_QUANTITY.MAX);
//   return text.split(`. `, numberOfSentence).join(`. `);
// };

// const getRandomDate = (start, end) => {
//   return new Date(+start + Math.random() * (end - start));
// };

// const getCommentsId = (comments) => {
//   const commentsdId = [];
//   comments
//     .map((comment) => {
//       commentsdId.push(comment.id);
//     });
//   return commentsdId;
// };

// const generateFilm = (comments) => {
//   return {
//     id: String(new Date() + Math.random()),
//     comments: getCommentsId(shuffle(comments)).slice(0, getRandomIntInclusive(COMMENTS_QUANTITY.MIN, COMMENTS_QUANTITY.MAX)),
//     title: getRandomItem(TITLES).title,
//     original: getRandomItem(TITLES).original,
//     poster: getRandomItem(POSTERS),
//     age: getRandomItem(AGES),
//     rating: getRandomRating(FILM_RATING.MIN, FILM_RATING.MAX),
//     director: getRandomName(),
//     writers: getRandomListOfNames(WRITERS_QUANTITY),
//     actors: getRandomListOfNames(ACTORS_QUANTITY),
//     release: getRandomDate(RELEASE_DATE.FIRST, RELEASE_DATE.LAST),
//     runtime: getRandomIntInclusive(DURATION.MIN, DURATION.MAX),
//     country: getRandomItem(COUNTRIES),
//     genres: getRandomListOfGenres(GENRES_QUANTITY),
//     description: getRandomDescription(DESCRIPTIONS),
//     isInWatchlist: getRandomBoolean(),
//     isInHistory: getRandomBoolean(),
//     isInFavorites: getRandomBoolean(),
//     watchingDate: getRandomDate(WATCHING_DATE.FROM, WATCHING_DATE.TO)
//   };
// };

// export const generateFilms = (comments) => {
//   return new Array(QUANTITY_FILMS.TOTAL).fill(``).map(() => generateFilm(comments));
// };

// const generateOneComment = () => {
//   return {
//     id: String(new Date() + Math.random()),
//     author: getRandomName(),
//     comment: getRandomDescription(DESCRIPTIONS),
//     date: getRandomDate(WATCHING_DATE.FROM, WATCHING_DATE.TO),
//     emotion: getRandomItem(EMOJI),
//   };
// };

// export const generateComments = () => {
//   return new Array(QUANTITY_FILMS.TOTAL * COMMENTS_QUANTITY.MAX).fill(``).map(generateOneComment);
// };

// console.log(generateComments());
