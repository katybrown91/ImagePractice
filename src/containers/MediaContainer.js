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
        this.setState({
            imageName: this.state.imageName - 1
        })
    }

    rightButtonClickHandler = () => {
        this.setState({
            imageName: this.state.imageName + 1
        })
    }

    render(){
        return(
            <div>
                <Image name = {this.state.imageName}/>
                <MyButton name={'Left'} handler={this.leftButtonClickHandler.bind(this)}/>
                <MyButton name={'Right'} handler={this.rightButtonClickHandler}/>
            </div>
        )
    }
}

export default MediaContainer