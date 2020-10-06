//functional component
function App() {
    return (
       <h1>Am a small functional component called APP</h1>
    )
}
export default App


// class component
class App extends Component {
    constructor(argument) {
        // code...
        super()
    }
    render(){
        return <h1>Am a small class component called APP</h1>
    }
}
export default App