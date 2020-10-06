// #########################################
//  PARENT COMPONENT [App.js]
// #########################################

import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super()
        console.log("constructor()")
        //initializing  state
        this.state = {
            parent_level: 1 // parent level starting from 1
        }
    } 

 
    updateLevel = () => {
        this.setState({
            // MUST be same as the specific state property in the constructor 
            parent_level: this.state.parent_level + 1
        });
    };


    render(){
        console.log("render()")
        const {parent_level} = this.state
        return (
         <div>
             <ChildComponent level={parent_level} />
             <hr />
             <div>Parent level: {parent_level}</div>
             <br />
             <br />
             <button onClick={this.updateLevel}>Update Level</button>
         </div>
        )
    }
    

}


export default App






// #########################################
//  CHILD COMPONENT [ChildComponent.js]
// #########################################

import React, { Component } from 'react';


class ChildComponent extends Component {   
    constructor() {
       super()
       this.state = {
          child_level:0 // child level starting from 0
       }
    }

    // Here, we intend to get the ChildComponent state from the prop passed in from the ParentComponent
    static getDerivedStateFromProps(props, state) {
        // This method runs even before it renders.
        // That is why the child_level equals 1 even before render because the parent_level is 1
        console.log("getDerivedStateFromProps")
        console.log(props)
        return {
            // This will update the initial state (child_level) with the props value (from the parent component)
            child_level:props
        }

    }
    

    render () {
        const {child_level} = this.state
        console.log(Object.getOwnPropertyNames(child_level)); //["level"]
        return (
            <div>
                <div>The child level is {child_level.level}</div>
                <br />
                <br />
                <strong>=> Notice how the ChildComponent's child_level state changes with the changing state 
                of the ParentComponent's state even BEFORE it is rendered. </strong>
            </div>
       
        ) 
    }
}



export default ChildComponent;