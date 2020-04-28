import React, { Component } from 'react'
import CustomDatePicker from './customedatepicker'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/show_actions'
import {Spinner} from 'react-bootstrap'

class Loading extends Component {
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
            <div style={{ textAlign: "center" }}>
                <div className="loading">
                    
                    <CustomDatePicker onChange={this.eventhandler}/>
                    {
                        this.props.loading?
                        <Spinner animation="border" variant="primary" />
                        :
                        <button onClick={this.handleClick}>Draw</button>
                    }
                </div>
                <img src={`data:image/png;base64,${this.props.img_load_data}`}  style={{width:"95%",height:"450px"}}/>
            </div>
       
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onShow: (show_item, date) => dispatch(actions.show_load_heatmap(show_item, date))
    }
}
const mapStateToProps = (state) => {
    return {
        show_item: state.show_item,
        maxDate:state.maxDate,
        img_load_data:state.img_load_data,
        loading:state.loading,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Loading);
