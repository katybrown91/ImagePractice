import React from 'react'
import Image from './Image'
import MediaContainer from '../containers/MediaContainer'

class MyButton extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
             <img src = {this.state.imgList[this.state.index]} />
        <button onClick={this.leftButtonClickHandler }>Back</button>
        <button onClick={this.rightButtonClickHandler }>Forward</button>
        </div>
         )
       
       
                
}
}

export default MyButton