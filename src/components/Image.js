import React from 'react'

class Image extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div style={{border:'2px solid black', height:'400px', width: '50%', marginLeft:'auto', marginRight:'auto'}}>{this.props.name}</div>
        )
    }
}

export default Image