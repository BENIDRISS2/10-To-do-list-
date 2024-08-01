class Dix extends React.Component{
    constructor(props){
        super(props)
        this.state={
            inputTodo:"",
            Todo:[]
        }
        }
        render(){
            return (
                <div className="container mt-4">
                    <h1>My 10eme to do list</h1>
            <p>{this.state.inputTodo}</p>
            <div className="input-group mb-3">
                <input
                type="texte"
                value={this.state.inputTodo} 
                onChange={(e)=>{
                    this.setState( {inputTodo: e.target.value})
                }}
                 className="form-control"
                placeholder="veuilllez ajou"
                />
                <button className="btn btn-primary"
                onClick ={()=>{
                    this.setState({Todo:[...this.state.Todo ,this.state.inputTodo]})
                }}> J'AJOUTE</button>
            </div>
            <ul className="list-group">
                {
                    this.state.Todo.map((todo)=>{
                        return <li>{todo}</li>
                    })
                }
            </ul>

                </div>
            )
        }
    }
    ReactDOM.render(<Dix/>,document.getElementById('my'))