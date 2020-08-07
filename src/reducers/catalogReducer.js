import { FETCH_GAMES } from "../actions";

const catalogReducer = (state=[],action) => {
    switch(action.type)
    {
        case FETCH_GAMES:
            return state;
        default:
            return state;
    }
}

export default catalogReducer;