import React from 'react'
import Image from '../components/Image'
import MyButton from '../components/MyButton'

class MediaContainer extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            imageName: 1
        }
    }

    leftButtonClickHandler(){
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
               
                <MyButton name={'Left'} handler={this.leftButtonClickHandler.bind(this)}/>
                <MyButton name={'Right'} handler={this.rightButtonClickHandler}/>
            </div>
        )
    }
}


export default MediaContainer