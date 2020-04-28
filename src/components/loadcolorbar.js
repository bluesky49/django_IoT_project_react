import React,{Component} from 'react';

class LoadColorBar extends Component {
    render(){
        return(
            <div className="ColorBar" style={{position:"relative"}}>
                <div className="gradient-area" >
                    <div>lbs</div>
                    <div style={{textAlign:"center"}}> <span style={{fontSize:"1vw"}}>100%</span></div>
                    <div style={{ position:"absolute",top:"30%",right:"20%"}}> <p style={{fontSize:"1vw"}}>70%</p></div>
                    <div style={{ position:"absolute",top:"70%",right:"20%"}}> <span style={{fontSize:"1vw"}}>30%</span></div>
                    <div style={{position:"absolute",top:"95%",right:"20%"}}><span style={{fontSize:"1vw"}}>0%</span></div>    
                </div>
            </div>
        )
    }
}
export default LoadColorBar;