import React from 'react';
import './Header.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Header = (props) => {
    const allTasks = [...props.tasks];
    const activeTasks = allTasks.filter(task => task.active && task);
    const doneTasks = allTasks.filter(task => !task.active && task);


    const percentage = Math.floor(doneTasks.length / allTasks.length * 100);
    const today = new Date().toDateString();
    let day = today.substring(0, 3);
    let month = today.substring(4, 7);
    const restDate = today.substring(8);
    const engMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const engDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const polMonths = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'];
    const polDays = ['Pon', 'Wto', 'Śro', 'Czw', 'Pią', 'Sob', 'Nie'];

    month = polMonths[engMonths.indexOf(month)];
    day = polDays[engDays.indexOf(day)];

    const polDate = `${day} ${month} ${restDate}`;
    return (
        <header>
            <div className="app-title">
                <h1>Just<br />do it!</h1>
                <p>{polDate}</p>
            </div>
            <div className="statistics">
                <div className="tasks">
                    <div className="active">
                        <span>{activeTasks.length}</span>
                        <p>Aktywne</p>
                    </div>
                    <div className="done">
                        <span>{doneTasks.length}</span>
                        <p>Zrobiono</p>
                    </div>
                </div>
                <div className="progress">
                    <CircularProgressbar className="progressbar" styles={buildStyles({ textSize: '26px', textColor: '#f88', trailColor: '#d6d6d6', pathColor: `#f76f71`, })} value={percentage} text={`${percentage}%`} />
                    <p>wykonano</p>
                </div>
            </div>
        </header>
    );
}

export default Header;