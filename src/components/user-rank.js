import AbstractSmartComponent from "./abstract-smart-component";

const UserRating = {
  NOVICE: {
    rank: `Novice`,
    from: 1,
  },
  FUN: {
    rank: `Fan`,
    from: 11
  },
  MOVIE_BUFF: {
    rank: `Movie Buff`,
    from: 21
  }
};


const getUserRank = (movies) => {
  const rank = movies.reduce((total, movie) => {
    if (movie.isInHistory) {
      total++;
    }
    return total;
  }, 0);

  switch (true) {
    case (rank >= UserRating.NOVICE.from && rank <= UserRating.FUN.from - 1):
      return UserRating.NOVICE.rank;

    case (rank >= UserRating.FUN.from && rank <= UserRating.MOVIE_BUFF.from - 1):
      return UserRating.FUN.rank;

    case (rank >= UserRating.MOVIE_BUFF.from):
      return UserRating.MOVIE_BUFF.rank;

    default:
      return (``);
  }
};

export default class UserRank extends AbstractSmartComponent {
  constructor(moviesModel) {
    super();

    this._rank = getUserRank(moviesModel.movies);

    moviesModel.setDataChangeListener(() => this._onRankChange(moviesModel));
  }

  recoverListeners() {
  }

  getTemplate() {
    return (
      `<section class="header__profile profile">
        <p class="profile__rating">${this._rank}</p>
        <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
      </section>`
    );
  }

  _onRankChange(moviesModel) {
    this._rank = getUserRank(moviesModel.getAllMovies());
    super.rerender();
  }
}

export {getUserRank};
