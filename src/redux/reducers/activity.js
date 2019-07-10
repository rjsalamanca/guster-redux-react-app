import { ACTION_SET_NAME, ACTION_SET_ACTIVITY } from '../actions/actionTypes';

const initialState = {
    name: 'RJ',
    activity: 'Coding'
}

const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SET_NAME: {
            const { name } = action.payload;
            return {
                ...state,
                name
            }
        }
        case ACTION_SET_ACTIVITY: {
            const { activity } = action.payload;
            return {
                ...state,
                activity
            }
        }
        default: {
            return state;
        }
    }
};

export default activityReducer;