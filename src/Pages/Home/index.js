import styles from './index.module.css';
import Add from '../../Components/AddTask'
import Task from '../../Components/Task';
import { useState, useEffect } from 'react';
import { MdDone } from "react-icons/md";
import { getTodo } from '../../Services/REST';

const Home = () => {
    const [task, setTask] = useState([]);
    const [color, setColor] = useState('orange');
    const [load, setLoad] = useState(true);
    useEffect(() => {
        getTodo().then(res => {
            setTask(res);
        });
    }, [load])

    useEffect(() => {
        if (task.length === 0) {
            setColor('orange')
        } else {
            setColor('green')
        }
    }, [task]);

    useEffect(() => {
        if (color === 'green') {
            setTimeout(() => {
                setColor('orange')
            }, 1000)
        }
    }, [color]);

    return (
        <div>
            <MdDone className={ styles.logo } style={ { color: color } } />
            <h1 className={ styles.h1 }>{ task ? "To do list" : "you don't have anything to do" }</h1>
            {task ? task.map((x, index) =>
                <Task key={ x._id } arr={ task.length } setLoad={ setLoad } index={ index } x={ x } />
            ) : null }
            <Add setLoad={ setLoad } />
        </div>
    );
}

export default Home;