import React from 'react';
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import './Task.css';

const Task = (props) => {

    let backgroundPriority = '#50c878';

    const { text, date, id, active, priority, finishDate } = props.task;

    if (priority === 'normal') {
        backgroundPriority = '#50c878'
    }
    if (priority === 'important') {
        backgroundPriority = '#fffa5a'
    }
    if (priority === 'very important') {
        backgroundPriority = '#BD2031'
    }

    if (active) {

        return (
            <div className="task-container">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: backgroundPriority, marginRight: 20 }}>

                    </div>
                    <div>
                        <p>{text}</p>
                        <span style={{ fontSize: 12, color: 'grey' }}>termin: {date}</span>
                    </div>
                </div>
                <div>
                    <button className="confirm" onClick={() => props.change(id)}>
                        <IoMdCheckmark />
                    </button>
                    <button className="delete" onClick={() => props.delete(id)}>
                        <IoMdClose />
                    </button>
                </div>
            </div>

        );
    } else {
        const finish = new Date(finishDate).toLocaleString();
        return (
            <div className="task-container">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: backgroundPriority, marginRight: 20 }}>
                    </div>
                    <div>
                        <p style={{ textDecoration: 'line-through' }}>{text}</p>
                        <span style={{ fontSize: '12px', color: 'grey' }}>wykonano:  {finish}</span>
                    </div>
                </div>
                <button className="delete" onClick={() => props.delete(id)}>
                    <IoMdClose />
                </button>
            </div>

        )
    }
}

export default Task;