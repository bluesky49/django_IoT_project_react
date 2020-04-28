import React, { Component } from 'react'
import DateTimePicker from 'react-datetime-picker';
import { connect } from 'react-redux'
import * as actions from '../../store/actions/show_actions'
import {Button,Spinner} from 'react-bootstrap'
import CustomDatePicker from './customedatepicker'

class Capacity extends Component {
    state = {
        date: '',
    }
   
    handleClick = () =>{
        this.props.onShow(this.props.show_item,this.state.date)
    }
    eventhandler = data => {
        this.setState({
            date:data.currentTime
        })
    }
    render() {
       
        return (
            <div className = "capacity" style={{ textAlign: "center" }}>
                <div>
                    
                    <CustomDatePicker onChange={this.eventhandler}/>
                    {
                        this.props.loading?
                        <Spinner animation="border" variant="primary" />
                        :
                        <button onClick={this.handleClick}>Draw</button>
                    }
                </div>
                <img src={`data:image/png;base64,${this.props.img_data}`}  style={{width:"95%",height:"450px"}}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onShow: (show_item, date) => dispatch(actions.show_heatmap(show_item, date))
    }
}
const mapStateToProps = (state) => {
    return {
        show_item: state.show_item,
        maxDate:state.maxDate,
        img_data:state.img_data,
        loading:state.loading,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Capacity);