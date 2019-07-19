import React, { Component } from 'react';
import { IoIosAdd } from 'react-icons/io'
import './AddTask.css';

class AddTask extends Component {
    minDate = new Date().toISOString().slice(0, 10);
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            priority: 'normal',
            checked: false,
            date: this.minDate,
            formClass: 'form',
            isFormVisible: false,
            buttonClass: 'add-btn'
        }

    }


    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    handleSelect = (e) => {
        this.setState({
            priority: e.target.value
        })
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleClick = () => {
        const { text, priority, date } = this.state;
        if (text.length > 2 && text.length < 16) {
            const add = this.props.add(text, priority, date);
            if (add) {
                this.setState({
                    text: '',
                    priority: 'normal',
                    date: this.minDate,
                    formClass: 'form',
                    isFormVisible: false,
                    buttonClass: 'add-btn'
                })
            }
        } else {
            alert('Dodaj krótkie nazwy zadań! Pomiędzy 3 a 15 znaków')
        }
    }

    toggleAddTask = () => {
        if (!this.state.isFormVisible) {
            this.setState({
                formClass: 'form active',
                isFormVisible: true,
                buttonClass: 'add-btn open'
            })

        } else {
            this.setState({
                formClass: 'form',
                isFormVisible: false,
                buttonClass: 'add-btn'
            })
        }
    }


    render() {

        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        maxDate = maxDate + '-12-31';
        return (
            <>
                <div className={this.state.formClass} style={{ display: this.state.displayForm }}>
                    <h2>Dodaj zadanie</h2>
                    <div className="single-input">
                        <label htmlFor="addTask">Nazwa</label>
                        <input className="task-input" id="addTask" type="text" placeholder="dodaj zadanie" value={this.state.text} onChange={this.handleText} />
                    </div>
                    <div className="single-input">
                        <label htmlFor="priority">Ważność zadania</label>
                        <select name="priority" id="priority" onChange={this.handleSelect} value={this.state.priority}>
                            <option value="normal">Normalne</option>
                            <option value="important">Ważne</option>
                            <option value="very important">Bardzo ważne!</option>
                        </select>
                    </div>
                    <div className="single-input">
                        <label htmlFor="date">Do kiedy zrobić</label>
                        <input className="date-input" type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate} />
                    </div>
                    <button onClick={this.handleClick}>Dodaj</button>
                </div>
                <div className={this.state.buttonClass} onClick={this.toggleAddTask} style={{ width: 50, height: 50, color: '#fff', borderRadius: '30px', position: 'absolute', left: 'calc(50% - 20px)', marginTop: '-25px', cursor: 'pointer', fontSize: 36, paddingTop: 6, paddingLeft: 7, backgroundColor: '#f76f71', zIndex: 2 }} ><IoIosAdd /></div>
            </>
        );
    }
}

export default AddTask;