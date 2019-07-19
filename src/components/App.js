import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList'
import Header from './Header';

class App extends Component {
  counter = 9;

  state = {
    tasks: [
      {
        id: 0,
        text: 'Posprzątać',
        date: '2019-02-15',
        priority: 'normal',
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'Nauka',
        date: '2019-02-09',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'Umyć samochód',
        date: '2019-03-03',
        important: false,
        active: true,
        finishDate: null
      },

    ]
  }

  deleteTask = (id) => {
    console.log('delete ' + id)
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({
    //   tasks
    // })

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    console.log('change ' + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })

    this.setState({
      tasks
    })
  }

  addTask = (text, priority, date) => {
    console.log('dodanoobiekt')
    const task = {
      id: this.counter,
      text: text,
      priority: priority,
      date: date,
      active: true,
      finishDate: null
    }
    this.counter++

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true
  }

  render() {
    return (
      <div className="app">
        <Header tasks={this.state.tasks} />
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
