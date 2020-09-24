// Action types
import {SET_MODELS} from '../Types';

import axios from 'axios';

const host = 'http://localhost:8081';

export const getModels = () => dispatch => {
    axios
        .get(`${host}/api/models`)
        .then(res => {
            dispatch({
                type: SET_MODELS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: SET_MODELS,
                payload: []
            })
        }) 
}