import {SET_LOADING, SET_SINGLE_TEAM, ADD_TEAM, SET_USER, LOGOUT_USER, UPDATE_TEAM, ADD_USER, UPLOAD_PHOTOS, ADD_ASSIGNMENT, YOUR_CREATIONS} from "./action.types"

export default (state, action) => {
    switch (action.type) {
        case ADD_TEAM:
            return action.payload == null ? {...state, teams: []} : {...state, teams: action.payload};
        case ADD_ASSIGNMENT:
            return action.payload == null ? {...state, assignments: []} : {...state, assignments: action.payload};
        case UPDATE_TEAM:
            return {...state,
                teamToUpdate: action.payload,
                teamToUpdateKey: action.key
            }
        case SET_SINGLE_TEAM:
            return {...state, teamId: action.payload};
        case SET_LOADING:
            return {...state, isLoading: action.payload}
        case ADD_USER:
            return action.payload == null ? {...state, users: []} : {...state, users: action.payload};
        case SET_USER:
            return {...state, user: action.payload, userUid: action.uid}
        case YOUR_CREATIONS:
            return {...state, teamId: null}
        case UPLOAD_PHOTOS:
            return action.payload == null ? {...state, photos: []} : {...state, photos: action.payload}
        case LOGOUT_USER:
            return {...state, userUid: action.payload, user: null}
        default: return state;
    }
};