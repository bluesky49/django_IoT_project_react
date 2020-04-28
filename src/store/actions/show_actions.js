import * as actionTypes from './actionTypes'
import axios from 'axios'

export const show_capacity = (dispatch) => {
    var action = {
        type: actionTypes.SHOW_CAPACITY
    }
    dispatch(action)
}
export const show_loading = (dispatch) => {
    var action = {
        type: actionTypes.SHOW_LOADING
    }
    dispatch(action)
}
export const show_chronology = (dispatch) => {
    var action = {
        type: actionTypes.SHOW_CHRONOLOGY
    }
    dispatch(action)
}
export const show_start = () => {
    return {
        type: actionTypes.SHOW_START,
        loading: true
    }
}
export const show_success = (img_data) => {
    return {
        type: actionTypes.SHOW_SUCCESS,
      
        img_data:img_data,
        loading:false
    }
}
export const show_load_success = (img_data) => {
    
    return {
        type: actionTypes.SHOW_LOAD_SUCCESS,
        img_load_data:img_data,
        loading:false,
        show_item:2,
    }
}
export const show_chronology_success = (data) =>{
    return {
        type:actionTypes.SHOW_CHRONOLOGY_SUCCESS,
        data:data,
        loading:false,
        show_item:3
    }
}


export const upload_start = () =>{
    
    return {
        type:actionTypes.UPLOAD_START
    }
}
export const upload_success = (data) =>{
   
    return {
        type:actionTypes.UPLOAD_SUCCESS,
        max_date:data[0],
        max_load:data[1]
    }
}
export const show_fail = error => {
    return {
        type: actionTypes.SHOW_FAIL,
        error: error,
        loading: false
    }
}
export const file_upload = (formData) => {
    
    return dispatch => {
      
        dispatch(upload_start())
        axios.post('http://127.0.0.1:8000/api/upload/', formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        .then(res => {
            
            
            dispatch(upload_success(res.data))
        })
        .catch(err => {
          
            dispatch(show_fail(err))
            
        })
    }

}
/// Capacity heatmap
export const show_heatmap = (show_item, date) => {
    
    return dispatch => {
        dispatch(show_start());
        axios.post('http://127.0.0.1:8000/api/capacity-heatmap/', {
            show_item: show_item,
            date: date
        })
        .then(res => {
            dispatch(show_success(res.data))
        })
        .catch(err => {
            dispatch(show_fail(err))
        })
    }
}
///Show load Heatmap
export const show_load_heatmap = (show_item, date) => {
    
    return dispatch => {
        dispatch(show_start());
        axios.post('http://127.0.0.1:8000/api/load-heatmap/', {
            show_item: show_item,
            date: date
        })
        .then(res => {
            dispatch(show_load_success(res.data))
        })
        .catch(err => {
            dispatch(show_fail(err))
        })
    }
}
///Show chronology
export const show_chronology_graph = (last_week,sensors) => {
    console.log(sensors,last_week)
    return dispatch => {
        dispatch(show_start());
        axios.post('http://127.0.0.1:8000/api/chronology/', {
            sensors: sensors,
            last_week: last_week
        })
        .then(res => {
            var data = res.data.reverse()
            dispatch(show_chronology_success(data))
            
        })
        .catch(err => {
            dispatch(show_fail(err))
        })
    }
    
}