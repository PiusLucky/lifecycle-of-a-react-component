//////////////////////////////////////
//       PARENT COMPONENT
//////////////////////////////////////
class App extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    } 

 

    updateCounter = () => {
        this.setState({
            // MUST be same as the specific state property in the constructor 
            counter: this.state.counter + 1
        });
    };

    render(){
        const {counter} = this.state
        return (
         <div>
             <ChildComponent counter_placeholder={counter} />
             <hr />
             <div>Current Value: {counter}</div>
             <br />
             <br />
             <button onClick={this.updateCounter}>Update Counter</button>
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
    
    componentDidUpdate(prevProps, prevState, snapshot) {
      console.log("componentDidUpdate") // Not called in the initial render
      console.log(prevProps)
      console.log("Previous Value ", prevState.counter)
      console.log("Current Value ", this.state.counter)
      // In using setState, add a conditional to prevent infinite loop
       if (this.state.counter  > 5) {
        this.setState({
            counter: 1 //here is the counter is greater than 5, it restarts from 1 (This way, we byepassed the infinite loop)
        });
      
      }

    }


    render () {
        const {counter_placeholder} = this.props
        return (
            <div>
                <div>The child counter is {counter_placeholder}</div>
                <br />
                <br />
                <strong>=> Notice how the ChildComponent's counter state changes with the changing state 
                of the ParentComponent's state even AFTER it is rendered. </strong>
            </div>
       
        ) 
    }
}



export default ChildComponent;