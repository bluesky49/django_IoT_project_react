import React, { Component, useState } from 'react'
import loc_icon from '../assets/location_icon.ico'
import siren_icon from '../assets/emergency.ico'
import gear_icon from '../assets/gear.ico'
import { Navbar, Nav, NavDropdown,  Modal,  Button, Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'
import * as actions from './../store/actions/show_actions'


class Head extends Component {

    state = {
        file: null,
        show: false,
        username: '',
        buildingName: 'Select Building',
        loading:false
    }
   
    handleClose = () => {
        this.setState({
            show:false
        })
    }
    handleShow = () => {
        this.setState({
            show:true
        })
    }

    onChangeHandler = (e) => {
        this.setState({
            username:e.target.value
        })
        
    }
    onDropdownChange = (e) => {
        this.setState({
            buildingName:e.target.text
        })
       
    }
    onFileChoose = (e) => {
        let file;
        file = e.target.files[0]
        this.setState({
            file:file
        })
        
    }

    fileUpload = (e) => {

        let formData = new FormData()
        formData.append('file', this.state.file)
        this.props.onFileUpload(formData)

    }
    
    render() {
        
        return (
            <div className="Header">
                <Navbar expand="lg" bg="white" variant="white" style={{ display: "block  !important" }}>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#">
                                <div className="row">
                                    <img src={loc_icon} style={{ width: "30px" }} />
                                    <NavDropdown title={this.state.buildingName} >
                                        <NavDropdown.Item onClick={this.onDropdownChange}>Quebec Warehouse</NavDropdown.Item>
                                        <NavDropdown.Item onClick={this.onDropdownChange}>Levis Distribution Center</NavDropdown.Item>
                                        <NavDropdown.Item onClick={this.onDropdownChange}>Beauce Factory</NavDropdown.Item>
                                    </NavDropdown>
                                </div>
                            </Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Link href="#">
                                User: {this.state.username}
                            </Nav.Link>
                            <Nav.Link href="#">
                                <img src={gear_icon} style={{ width: "30px" }} onClick={this.handleShow} />
                            </Nav.Link>
                            <Nav.Link href="#">
                                <img src={siren_icon} style={{ width: "30px" }} />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Modal show={this.state.show} onHide={this.handleClose} dialogClassName={"UploadModal"}>
                    <Modal.Header closeButton>
                        <Modal.Title>Settings</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Name: <input type="text" onChange={this.onChangeHandler} value={this.state.username} ></input></Modal.Body>
                    <Modal.Footer>
                        <div>
                            <input id="fileButton" type="file" onChange={this.onFileChoose} />
                            {
                                this.props.loading?
                                    <Spinner animation="grow" />
                                    :
                                    <Button variant="secondary" onClick={this.fileUpload}>
                                        <i class="fa fa-upload" aria-hidden="true"></i>
                                    </Button>
                            }


                        </div>

                    </Modal.Footer>
                </Modal>
            </div >

        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFileUpload: (formData) => dispatch(actions.file_upload(formData))
    }
}
const mapStateToProps = (state) => {
   
    return {
        loading: state.loading
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Head)