import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap'
import ReactSpeedometer from "react-d3-speedometer"
import net_icon from '../assets/Picture1.png'
import tensio from '../assets/tensio.jpg'
import snowman from '../assets/snowman.png'
import {connect} from 'react-redux';

import * as actions from '../store/actions/show_actions'

class SideBar extends Component {
        state = {
            show:false
        }
        onCapacity = (event) =>{
           console.log("load")
           this.props.Capacity()
        }
        onLoading = (event) =>{
            this.props.Load()
        }
        onChronology = (event) =>{
           this.props.Chronology()
        }
        handleShow = (e) =>{
            this.setState({
                show:true
            })
        }
        handleClose = () => {
            this.setState({
                show:false
            })
        }
       
    render() {
       
        return (
            <div className="Sidebar">
                <div>
                    <Button variant="outline-secondary" onClick = {this.onCapacity}><span style={{ fontSize: "1vw" }}>Capacity</span></Button>
                </div>
                <div>
                    <Button variant="outline-secondary" onClick = {this.onLoading}><span style={{ fontSize: "1vw" }}>Loading</span></Button>
                </div>
                <div>
                    <Button variant="outline-secondary" onClick = {this.onChronology}><span style={{ fontSize: "1vw" }}>Chronology</span></Button>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn-weather">
                        <p style={{ fontSize: "0.8vw" }}>Sat</p>
                        <i className="fa fa-sun" style={{ fontSize: "2vw" }} ></i>
                        <p style={{ fontSize: "1vw" }}>-12C</p>
                    </button>
                    <button type="button" className="btn-weather">
                        <p style={{ fontSize: "0.8vw" }}>Sun</p>
                        <i className="fa fa-cloud-sun" style={{ fontSize: "2vw" }}></i>
                        <p style={{ fontSize: "1vw" }}>-15C</p>
                    </button>
                    <button type="button" className="btn-weather">
                        <p style={{ fontSize: "0.8vw" }}>Mon</p>
                        <i className="fa fa-cloud" style={{ fontSize: "2vw" }} ></i>
                        <p style={{ fontSize: "1vw" }}>-22C</p>
                    </button>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-6" style={{ marginTop: "10px" }}>
                        <i class="fas fa-phone-alt" style={{ fontSize: "2vw" }} onClick={this.handleShow}/>
                    </div>
                   
                    <div className="col-md-4 col-sm-4" style={{ marginTop: "5px" }}>
                        <img src={net_icon} style={{ width: "40px" }} />
                    </div>
                </div>
                <div style={{maxHeight:"100"}}>
                    <ReactSpeedometer
                            ringWidth={10}
                            width={150}
                            height={120}
                            minValue = {0}
                            maxValue = {30000}
                            needleHeightRatio={0.7}
                            segmentColors={['#ff6d6a', '#fec359', '#76c175', '#54a0fe']}
                            needleTransition="easeElastic"
                            textColor={'#000'}
                            maxSegmentLabels={0}
                            needleColor="#D8DEE9"
                            value={this.props.max_load}      
                        />                
                </div>
                <div className="row" style={{alignSelf:"center"}}>
                    <span>Powered by </span><img src={tensio} style={{ width: "30px" }} />
                </div>
                <Modal show={this.state.show} onHide={this.handleClose} dialogClassName={"CircleModal"} >
                    <Modal.Header closeButton >
                        
                    </Modal.Header>
                    <Modal.Body style={{textAlign:"center"}} >
                        <p>Calling the nearest snow remover</p>
                        <img src={snowman}  />
                    </Modal.Body>
                </Modal>
            </div>

        )
    }
}
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    Load: () => dispatch(actions.show_loading),
    Capacity: () => dispatch(actions.show_capacity),
    Chronology: () => dispatch(actions.show_chronology)
  }
}
const mapStateToProps = state => {
    return {
        max_load:state.maxLoad
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SideBar);
