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
    leftButtonClickHandler = () => {
        if(this.state.index - 1 === -1){
            this.setState({
                index: this.state.imgList.length - 1
            })
        }
            else {this.setState({
                index: this.state.index-1
            })}
        }
    

    rightButtonClickHandler = () => {
       if (this.state.index +1 ===this.state.imgList.length) {
           this.setState({
               index:0
           }) 
        }else{
               this.setState({
                   index: this.state.index +1
               })
               }
    }

    render(){
        return(
            <div>
             <img src = {this.state.imgList[this.state.index]} alt="pic" width="300px" />
             <br></br>
        <button onClick={this.leftButtonClickHandler }>Back</button>
        <button onClick={this.rightButtonClickHandler }>Forward</button>
        </div>
         )
       
       
                
}
}

export default MyButton