export const FETCH_GAMES = "FETCH_GAMES";
export const ADD_TO_CART = "ADD_TO_CART";


export const fetchGamesAction = (games) => {
    return {
        action: FETCH_GAMES,
        games: games
    }
}

export const ADD_TO_CART = (game) => {
    return {
        action: ADD_TO_CART,
        game: game
    }
}