//////////////////////////////////////
//       this.state
//////////////////////////////////////


class App extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    } 
    render(){
        // pass the state property in directly
        return (
         <div>
            {this.state.counter}
         </div>
        )
    }
    
}


export default App

 


// OR

 

class App extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    } 
    render(){
        // destructure the state
        const {counter} = this.state
        return (
         <div>
            {counter}
         </div>
        )
    }
    
}


export default App




//////////////////////////////////////
//       this.props
//////////////////////////////////////
