import React,{Component} from 'react'

import {connect} from 'react-redux'
import Capacity from './elements/capacity'
import Chronology from './elements/chronology'
import Load from './elements/load'

class Content extends Component{
    render(){
        console.log(this.props.show_item)
        return(
            <div className="Content" >
               {
                   this.props.show_item == 1?
                    <Capacity style={{width:"100%",height:"100%"}}/>
                   :
                   this.props.show_item == 2?
                   <Load style={{width:"100%",height:"100%"}}/>
                   :
                   <Chronology style={{width:"100%",height:"100%"}}/>
               }
            </div>
            
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        show_item: state.show_item
    }
}
export default connect(mapStateToProps,null)(Content);