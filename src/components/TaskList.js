import React from 'react';
import Task from './Task'
const TaskList = (props) => {
    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);
    // console.log(active, done)
    if (done.length >= 2) {
        done.sort((a, b) => {
            return b.finishDate - a.finishDate
        })
    }

    if (active.length >= 2) {
        active.sort((a, b) => {
            a = a.text.toLowerCase()
            b = b.text.toLowerCase()
            if (a < b) return -1
            if (a > b) return 1
            return 0
        })
    }


    //Wytłumaczenie metody sort()
    // done.sort((a,b) => {
    //     if(a.finishDate > b.finishDate) {
    //         return 1
    //     }
    //     if(a.finishDate < b.finishDate) {
    //         return -1
    //     }
    //     return 0
    // })

    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    return (
        <>
            <div className="active" style={{ paddingBottom: 15 }}>
                <h2 style={{ marginBottom: 15 }}>Zadania do zrobienia</h2>
                {activeTasks.length > 0 ? activeTasks : <p>Brak zadań</p>}
            </div>
            <div className="done" style={{ position: 'relative', paddingBottom: 30, }}>
                <h2>Zadania zrobione <em>({done.length})</em></h2>
                {done.length > 5 && <span style={{ top: '20px', fontSize: 12, color: 'grey', position: 'absolute', }} >Pięć ostatnio wykonanych zadań</span>}
                {doneTasks.slice(0, 5)}
            </div>
            <p style={{ marginTop: 30, marginBottom: 30, paddingLeft: 15, paddingRight: 15 }}>Copyright by Biszczak</p>
        </>

    );
}

export default TaskList;