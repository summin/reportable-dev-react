import { store } from '../_helpers/store'
import { contentConstants } from '../_constants'
import { alertConstants } from '../_constants'
import { alertActions } from '../_actions'

//////////
// HEAD //
//////////

export const expandNav = () => {
    return {
        type: contentConstants.NAV_EXPAND
    }
}

export const getAssets = (json) => {
    return {
        type: contentConstants.HEADER_ASSETS_REQUEST,
        assets: Object.keys(json)
    }
}

const fetchAssetsAPI = () => dispatch => {
    return fetch(API_URL_ASSETS)
        .then((response) => response.json())
        .then((json) => dispatch(getAssets(json)));
}

export const fetchAssets = () => dispatch => {
    return dispatch(fetchAssetsAPI())
}

//////////
// CONT //
//////////

export const getContentFocus = (focus) => {
    alertActions.clear()
    return {
        type: contentConstants.CONTENT_FOCUS,
        focus: focus.currentTarget.value
            ? focus.currentTarget.value
            : focus.target.attributes.value.value,
    }
}

export const getContent = (json, asset) => {
    return {
        type: contentConstants.CONTENT_REQUEST,
        content: json,
        contentLoaded: asset
    }
}

const fetchContentAPI = (asset) => dispatch => {
    return fetch(contentConstants.API_URL_CONTENT + "?asset=" + asset)
        .then((response) => response.json())
        .then((json) => dispatch(getContent(json, asset)));
}

export const fetchContent = (e) => dispatch => {
    return dispatch(fetchContentAPI(e.target.attributes.value.value))
}

////////////////////
// CONT_DATA_FORM //
////////////////////

export const setFormContent = (entries, focus) => {
    return {
        type: contentConstants.FORM_CONTENT,
        content: entries,
        focus: focus
    }
}

export const pushFormValue = (key, value, section) => {
    return {
        type: contentConstants.CONTENT_PUSH_FORM_VALUE,
        key: key,
        value: value.target.value,
        section: section
    }
}

const saveContentSuccess = () => {
    return {
        type: contentConstants.CONTENT_SAVED_SUCCESS,
        contentSaveSuccess: true
    }
}

const saveContentAPI = () => dispatch => {
    return fetch(contentConstants.API_URL_SAVE + "?" + JSON.stringify(store.getState().content.content), {
    })
        .then((response) => response.text())
        .then((response) => {  });
}


export const saveContent = () => dispatch => {
    return dispatch(saveContentAPI())
}


//////////
// FOOT //
//////////
