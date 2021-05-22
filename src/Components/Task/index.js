import styles from './index.module.css';
import { MdDone } from "react-icons/md";
import { useState } from 'react';
import { archiveTodo } from '../../Services/REST';


const Task = ({ x, setLoad, index }) => {
    const [show, setShow] = useState(false);
    console.log(index);
    const clickHandler = (e) => {
        archiveTodo(x._id)
            .then(res => setLoad(load => !load))
            .catch(err => console.log(err))
    }

    return (
        <div className={ styles.task } onMouseOver={ () => setShow(true) } onMouseLeave={ () => setShow(false) }>
            {show ? <MdDone className={ styles.icon } onClick={ clickHandler } /> : <p className={ styles.number }>{ index + 1 }</p> }
            <p >{ x.todo }.</p>
        </div>
    );
}

export default Task;