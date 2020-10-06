////////////////////////////////////////////
//       PARENT COMPONENT
///////////////////////////////////////////

class App extends Component {
    constructor() {
        super()
        this.state = {
            displayChild: false
        }
    } 


    displayChild = () => {
        this.setState({
            // The ! allows us to toggle
            displayChild: !this.state.displayChild
        });
    };


    render(){
        const {displayChild} = this.state
        return (
         <div>
             {displayChild  ? <ChildComponent /> : <p>No child</p> }
             <hr />
             <button onClick={this.displayChild}>
             {displayChild ? <span>hide</span> : <span>Display</span> } Child Component
             </button>
         </div>
        )
    }
    

}


export default App


//////////////////////////////////////
//       CHILD COMPONENT
//////////////////////////////////////

class ChildComponent extends Component {   
    constructor() {
       super()
       this.state = {
          counter:0 
       }
    }
    
    // This is called anytime the ChildComponent leaves the DOM.
    componentWillUnmount() { 
     console.log("Component has unmounted successfully")
    }

    render () {
        return (
            <div>
                <strong>I am a baby component, play with me!</strong>
            </div>
       
        ) 
    }
}



export default ChildComponent;