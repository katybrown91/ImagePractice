import React from 'react'

class MyButton extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(<button onClick={this.props.handler}>{this.props.name}</button>)
    }
}

export default MyButton