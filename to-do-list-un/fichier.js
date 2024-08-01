class Todos extends React.Component{
    constructor(props){
        super(props)
        this.state={
            inputTodo:"",
            Todos:[]
        }
    }
    render(){
        return(
            <div className="container mt-4">
                <h1>To do List</h1>
                <p>{this.state.inputTodo}</p>
                <div className="input-group mb-3">
                    <input 
                    type="text"
                    value={this.state.inputTodo}
                    onChange={(e)=>{
                        this.setState({inputTodo: e.target.value})
                    }}
                    className="form-control"
                    placeholder="Ajouter une tache"
                    />
                    <button className="btn btn-primary" onClick={()=>{
                        this.setState({Todos:[...this.state.Todos, this.state.inputTodo]})
                    }}> Ajouter</button>
                </div>
                <ul className="list-group">
                    {
                        this.state.Todos.map((Todo)=>{
                            return <li>{Todo}</li>
                        })
                    }

                </ul>
            </div>
        )
    }
}
ReactDOM.render(<Todos/>,document.getElementById('root'))