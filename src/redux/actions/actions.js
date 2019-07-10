import { ACTION_SET_NAME, ACTION_SET_ACTIVITY } from './actionTypes';

export const set_name = (name) => {
    return {
        type: ACTION_SET_NAME,
        payload: {
            name
        }
    }
}

export const set_activity = (activity) => {
    return {
        type: ACTION_SET_ACTIVITY,
        payload: {
            activity
        }
    }
}