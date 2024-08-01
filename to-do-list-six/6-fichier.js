class Six extends React.Component{
    constructor(props){
        super(props)
        this.state={
            inputTodo:"",
            Todos:[]
        }
    }
    render(){
        return (
            <div className="container mt-4">
                <h1>My Sixieme to do list</h1>
                <p>{this.state.inputTodo}</p>
                <div className="input-group mb-3">
                    <input
                    type="texte"
                    value={this.state.inputTodo} 
                    onChange={(e)=>{
                        this.setState({inputTodo:e.target.value}) 
                    }}
                    className="form-control"
                    placeholder="veuilllez ajouter "
                    />
                    <button className="btn btn-primary"
                    onClick={()=>{
                        this.setState({Todos:[...this.state.Todos, this.state.inputTodo]})
                    }}
                    >Ajouter</button>
                </div>
                <ul className="list-group">
                    {
                        this.state.Todos.map((todo)=>{
                            return <li>{todo}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
ReactDOM.render(<Six/>,document.getElementById('six'))