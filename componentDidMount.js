import React, { Component } from 'react';


class smallComponent extends Component {   
    constructor() {
       super()
       this.state = {
          level:0 
       }
    }

    //This method is called after the render(), making sure the DOM is ready!
    //If there is any updation, it runs twice.
    componentDidMount() {
        this.setState({
            level:1
        })
        // any API logic can go here
        // ...
    }

    render () {
        return (
            <div>
                Hello
            </div>
       
        ) 
    }
}



export default smallComponent;