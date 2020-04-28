import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { connect } from 'react-redux'
import * as actions from '../../store/actions/show_actions'
import {Spinner} from 'react-bootstrap'



class Chronology extends Component {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/hbqxcu35/';
    sensors = [];
    state = {
        show: false,
        sensors: [],
        numOfdays:10
    }
    handleClick = (e) => {
        this.setState({
            show: !this.state.show
        })
    }
    handleClose = (e) => {
        this.setState({
            show: false
        })
        
        var last_week = this.get_last_days(this.props.maxDate,this.state.numOfdays)
        
        this.props.show_chronology_graph(last_week, this.sensors)
        this.sensors = []
    }
    get_last_days = (date,numberOfdays) => {
        var last_week = []
        for (var i = 1; i < numberOfdays; i++) {
            var timeStamp = new Date(date).getTime() - 3600000 * 24 * i
            var a = new Date(timeStamp)
            var year = a.getFullYear()
            var month = a.getMonth() + 1;
            var day = a.getDate();
            if (month < 10) month = '0' + month
            if (day < 10) day = '0' + day
            var time = year + '-' + month + '-' + day;
            last_week.push(time)
        }
        return last_week

    }

    handleCheck = (e) => {
        if (e.target.checked == true)
            this.sensors.push(e.target.name)
        else
            this.sensors.splice(this.sensors.indexOf(e.target.name), 1)
    }
    handleChange = (e) =>{
        this.setState({
            numOfdays:e.target.value
        })
        
    }
    render() {
        return (
            <div style={{ width: "95 %",  }} className="gradient-area">
                {
                    this.props.loading?
                    <div style={{textAlign:"center" ,width: "95 %", height: "500px" }}>
                     <Spinner animation="border" variant="primary" />
                    </div>
                    :
                    <ResponsiveContainer >
                    <LineChart
                        data={this.props.data}
                        margin={{
                            top: 10, right: 30, left: 0, bottom: 0,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        
                        <CartesianGrid strokeDasharray="10 0" />
                        <Line connectNulls type="monotone" dataKey="C01" stroke="#000000" fill="#000000" unit="lbs"/>
                        <Line connectNulls type="monotone" dataKey="C02" stroke="#000000" fill="#000000" unit="lbs"/>
                        <Line connectNulls type="monotone" dataKey="C03" stroke="#000000" fill="#000000" unit="lbs"/>
                        <Line connectNulls type="monotone" dataKey="C04" stroke="#000000"  fill="#000000"unit="lbs"/>
                        <Line connectNulls type="monotone" dataKey="C05" stroke="#000000" fill="#000000"  unit="lbs"/>
                        <Line connectNulls type="monotone" dataKey="C06" stroke="#000000"  fill="#000000" unit="lbs"/>
                        <Line connectNulls type="monotone" dataKey="C07" stroke="#000000" fill="#000000"  unit="lbs"/>
                        <Line connectNulls type="monotone" dataKey="C08" stroke="#000000"  fill="#000000"unit="lbs"/>
                        <Line connectNulls type="monotone" dataKey="C09" stroke="#000000" fill="#000000" />
                        <Line connectNulls type="monotone" dataKey="P01" stroke="#000000" fill="#000000" />
                        <Line connectNulls type="monotone" dataKey="P02" stroke="#000000"  fill="#000000"/>
                        <Line connectNulls type="monotone" dataKey="P03" stroke="#000000" fill="#000000" />
                        <Line connectNulls type="monotone" dataKey="P04" stroke="#000000" fill="#000000" />
                        <Line connectNulls type="monotone" dataKey="P05" stroke="#000000" fill="#000000" />
                        <Line connectNulls type="monotone" dataKey="P06" stroke="#000000"  fill="#000000"/>
                        <Line connectNulls type="monotone" dataKey="P07" stroke="#000000" fill="#000000" />
                        <Line connectNulls type="monotone" dataKey="P08" stroke="#000000"  fill="#000000"/>
                    </LineChart>
                </ResponsiveContainer>
                
                }
                <i class="fas fa-filter" style={{ position: "relative", top: "96%", left: "98%" }} onClick={this.handleClick}></i>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        
                        NumberOfDays:&nbsp;&nbsp; <input type="number" value={this.state.numOfdays} onChange = {this.handleChange}/>
                    </Modal.Header>
                    <Modal.Body>
                        <p style={{textAlign:"center"}}>Select sensors</p>
                        <div className="row">
                            <div className="col-sm-6">
                                <span><input name="C01" type="checkbox" onClick={this.handleCheck} />C01</span>
                            </div>
                            <div className="col-sm-6">
                                <span><input type="checkbox" name="P01" onClick={this.handleCheck} />P01</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <span><input type="checkbox" name="C02" onClick={this.handleCheck} />C02</span>
                            </div>
                            <div className="col-sm-6">
                                <span><input type="checkbox" name="P02" onClick={this.handleCheck} />P02</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <span><input type="checkbox" name="C03" onClick={this.handleCheck} />C03</span>
                            </div>
                            <div className="col-sm-6">
                                <span><input type="checkbox" name="P03" onClick={this.handleCheck} />P03</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <span><input type="checkbox" name="C04" onClick={this.handleCheck} />C04</span>
                            </div>
                            <div className="col-sm-6">
                                <span><input type="checkbox" name="P04" onClick={this.handleCheck} />P04</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <span><input type="checkbox" name="C05" onClick={this.handleCheck} />C05</span>
                            </div>
                            <div className="col-sm-6">
                                <span><input type="checkbox" name="P05" onClick={this.handleCheck} />P05</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <span><input type="checkbox" name="C06" onClick={this.handleCheck} />C06</span>
                            </div>
                            <div className="col-sm-6">
                                <span><input type="checkbox" name="P06" onClick={this.handleCheck} />P06</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <span><input type="checkbox" name="C07" onClick={this.handleCheck} />C07</span>
                            </div>
                            <div className="col-sm-6">
                                <span><input type="checkbox" name="P07" onClick={this.handleCheck} />P07</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <span><input type="checkbox" name="C08" onClick={this.handleCheck} />C08</span>
                            </div>
                            <div className="col-sm-6">
                                <span><input type="checkbox" name="P08" onClick={this.handleCheck} />P08</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <span><input type="checkbox" name="C09" onClick={this.handleCheck} />C09</span>
                            </div>

                        </div>
                    </Modal.Body>
                </Modal>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        show_chronology_graph: (last_week, sensors) => dispatch(actions.show_chronology_graph(last_week, sensors))
    }
}
const mapStateToProps = (state) =>{
    console.log(state.chron_data)
    return{
        loading:state.loading,
        data:state.chron_data,
        show_item:state.show_item,
        maxDate:state.maxDate
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chronology);