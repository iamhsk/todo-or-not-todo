import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {tdlist: []};
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    let than = this;
    axios.get('http://localhost:3000/todos/').then(function(response){
      let tdlist = response.data
      than.setState({tdlist});
      console.log(response.data);
    }); 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TodoForm />
        <TodoList todolist={this.state.tdlist}/>
      </div>
    );
  }
}

class Todo extends Component {
  render() {
    return (
        <p> {this.props.name} {this.props.dueDate} </p>
    )
  }
}

class TodoList extends Component {
  render() {
    const tdl = this.props.todolist
    let rows = [];
    tdl.map(element => { rows.push(<Todo name={element.name} dueDate={element.dueDate}/>) });
    return (
      <div>
        {rows}
      </div>
    )
  }
}

class TodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {value: 'iphone'};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}> 
        <label>What to do</label>
        <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
  handleSubmit(event){
  }
  handleChange(event){
    this.setState({value: event.target.value})
  }
}
export default App;
