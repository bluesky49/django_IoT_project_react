import * as actionTypes from '../actions/actionTypes'

export const updateObject = (oldObject, updatedProperties)=>{
    
    return {
        ...oldObject,
        ...updatedProperties

    }
}

const initialState = {
  show_item:0,
  loading:false,
  maxDate:"",
  sensors:[],
  maxLoad:0,
}
const show_capacity = (state,action) =>{
    
    return updateObject(state,
        {
            show_item:1,
            maxDate: state.maxDate
        }
        
     )
}
const show_loading = (state,action) =>{
    return updateObject (state,{
        show_item:2,
        maxDate: state.maxDate
    })
}
const show_chronology = (state,action) =>{
    return updateObject(state,{
        show_item:3,
        maxDate: state.maxDate
    })
}
const send_date = (state,action) => {
    
    return updateObject(state,{
        maxDate: action.maxDate
    })
}
const uploadstart = (state,action) =>{
    
    return updateObject(state,{
        loading:true
    })
}
const uploadsuccess = (state,action) => {
    return updateObject(state,{
        loading:false,
        maxDate:action.max_date,
        maxLoad:action.max_load,
    })
}
const show_success = (state,action) =>{
    return updateObject(state,{
        loading:false,
        img_data:action.img_data,
        maxDate: state.maxDate,
        show_item:1,    
    })
}
const show_load_success = (state,action) =>{
    debugger
    return updateObject(state,{
        loading:false,
        img_load_data:action.img_load_data,
        maxDate: state.maxDate,
        show_item:2,   
    })
}

const show_start = (state,action) =>{
    return updateObject(state,{
        loading:true
    })
}
const show_chronology_success = (state,action) =>{
    return updateObject(state,{
        chron_data:action.data,
        loading:action.loading,
        show_item:action.shoe_item,
    })
}
const show_fail = (state,action) => {
    return updateObject(state,{
        loading:action.loading,
        error:action.error
    })
}
const reducer = (state=initialState, action) =>{
    
    switch(action.type){
        case actionTypes.SHOW_CAPACITY: return show_capacity(state,action);
        case actionTypes.SHOW_LOADING: return show_loading(state,action);
        case actionTypes.SHOW_CHRONOLOGY: return show_chronology(state,action);   
     
        case actionTypes.SHOW_START: return show_start(state,action);
        case actionTypes.SHOW_SUCCESS: return show_success(state,action);
        case actionTypes.SHOW_LOAD_SUCCESS: return show_load_success(state,action);
        case actionTypes.UPLOAD_START:return uploadstart(state,action);
        case actionTypes.UPLOAD_SUCCESS:return uploadsuccess(state,action);
        case actionTypes.SHOW_CHRONOLOGY_SUCCESS:return show_chronology_success(state,action);
        case actionTypes.SHOW_FAIL:return show_fail(state,action);
        default:
            return state;     
    }
}
export default reducer;