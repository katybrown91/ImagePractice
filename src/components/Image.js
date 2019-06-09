import React from 'react'
import MediaContainer from '../containers/MediaContainer'

class Image extends React.Component {
    constructor(props){
        super(props)
        
        this.rightButtonClickHandler = this.rightButtonClickHandler.bind(this)
        this.leftButtonClickHandler = this.leftButtonClickHandler.bind(this)
        
        const img0 = require ('./images/classroom.jpg');
        const img1 = require ('./images/outside.jpg');
        const img2 = require ('./images/wall.jpg');

        this.state = {
            index: 0,
            imgList: [img0, img1, img2]
        }
    }

    render(){
        return (
            <div style={{border:'2px solid black', height:'400px', width: '50%', marginLeft:'auto', marginRight:'auto'}}>{this.props.name}</div>
        )
    }
}

export default Image