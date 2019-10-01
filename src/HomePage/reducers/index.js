import { combineReducers } from 'redux'
import {
    NAV_EXPAND,
    CONTENT_REQUEST,
    CONTENT_FOCUS,
    CONTENT_PUSH_FORM_VALUE,
    FORM_CONTENT
} from '../actions'

export const header = (state = {}, action) => {
    switch (action.type) {
        default:
            return {
                ...state
            }
    }
}

export const content = (state = {}, action) => {
    switch (action.type) {
        case NAV_EXPAND:
            return {
                ...state,
                collapse: !state.collapse
            }
        case CONTENT_REQUEST:
            return {
                ...state,
                content: action.content,
                contentLoaded: action.contentLoaded
            }

        case CONTENT_FOCUS:
            return {
                ...state,
                focus: action.focus,
                collapse: false
            }

        case CONTENT_PUSH_FORM_VALUE:
            return {
                ...state,
                content: {
                    ...state.content,
                    [action.section]: {
                        ...state.content[action.section],
                        [action.key]: action.value
                    }
                }
            }

        case FORM_CONTENT:
            if (action.focus !== state.formFocus) {
                return {
                    ...state,
                    formGroupContent: action.content,
                    formFocus: action.focus
                }
            }
            else return {
                ...state
            }

        default:
            return {
                ...state,
            }
    }
}

export const footer = (state = {}, action) => {
    switch (action.type) {
        default:
            return {
                ...state,
            }
    }
}

const reducer = combineReducers({
    header,
    content,
    footer
})

export default reducer
