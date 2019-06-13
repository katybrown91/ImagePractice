import React from 'react'
import Image from './Image'
import MediaContainer from '../containers/MediaContainer'

class MyButton extends React.Component{
    constructor(props){
        super(props)

        const img0 = require ('./images/classroom.jpg');
        const img1 = require ('./images/outside.jpg');
        const img2 = require ('./images/wall.jpg');

        this.state = {
            index: 0,
            imgList: [img0, img1, img2]
        }
    }

    render(){
        return(
            <div>
             <img src = {this.state.imgList[this.state.index]} width="300px" />
        <button onClick={this.leftButtonClickHandler }>Back</button>
        <button onClick={this.rightButtonClickHandler }>Forward</button>
        </div>
         )
       
       
                
}
}

export default MyButton