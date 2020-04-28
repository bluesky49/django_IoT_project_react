import React, { Component } from 'react'

import { connect } from 'react-redux'


class CustomDatePicker extends Component {
    state = {
        currentTime: '',
        maxDate: '',
        disable: false,
    }
    componentDidMount() {
        this.setState({
            maxDate: this.props.maxDate,
            currentTime: this.props.maxDate
        })
    }
    componentDidUpdate() {
        if (this.props.onChange) {
            this.props.onChange(this.state);
        }
    }
    decreaseTime = (originTime) => {
        var timeStamp = new Date(originTime).getTime() - 3600000 * 24
        var a = new Date(timeStamp)
        var year = a.getFullYear()
        var month = a.getMonth() + 1;
        var day = a.getDate();
        if (month < 10) month = '0' + month
        if (day<10) day = '0' + day
        var time = year + '-' + month + '-' + day;
        this.setState({
            currentTime: time
        })
    }
    increaseTime = (originTime) => {
        if (new Date(originTime) >= new Date(this.state.maxDate)) {
            alert("Not available Date");
            this.setState({
                currentTime: this.props.maxDate,
                disable: true
            })
        }
        else {
            var timeStamp = new Date(originTime).getTime() + 3600000 * 24
            var a = new Date(timeStamp)
            var year = a.getFullYear()
            var month = a.getMonth() + 1;
            var day = a.getDate();

            if (month < 10) month = '0' + month
            if (day<10) day = '0' + day
            var time = year + '-' + month + '-' + day;

            this.setState({
                currentTime: time
            })
        }

    }
    onClickHandleLeft = (e) => {
        this.decreaseTime(this.state.currentTime)
    }
    onClickHandleRight = (e) => {
        this.increaseTime(this.state.currentTime)
    }
    handleChange = (e) =>{
        this.setState({
            currentTime:e.target.value
        })
    }
    render() {
        return (
            <div className="DatePicker">

                <i class="fas fa-caret-left" style={{ fontSize: "2vw" }} onClick={this.onClickHandleLeft}></i>
                <input type="text" name="time" className="date-input" value={this.state.currentTime} onChange={this.handleChange}></input>
                <i class="fas fa-caret-right" disabled={this.state.disable} style={{ fontSize: "2vw" }} onClick={this.onClickHandleRight}></i>
            </div>
        )
    }
}
const mapStateToProps = (state) => {

    return {
        maxDate: state.maxDate
    }
}
export default connect(mapStateToProps, null)(CustomDatePicker);