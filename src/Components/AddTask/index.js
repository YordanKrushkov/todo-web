import styles from './index.module.css';
import { useState } from 'react'
import { MdSend } from "react-icons/md";
import { createTodo } from '../../Services/REST';

const Add = ({ setLoad }) => {

    const [show, setShow] = useState(false);
    const submitHandler = (e) => {
        e.preventDefault();
        let addedTask = e.target.text.value
        if (!addedTask) {
            setShow(false)
            return
        }
        createTodo(addedTask).then(res => setLoad(load => !load))
        setShow(false)
    };

    const clickHandler = () => {
        setShow(true)
    };

    return (
        <div>
            { show
                ? <form className={ styles.form } onSubmit={ submitHandler }>
                    <input className={ styles.input } name="text" type="text" autoFocus />
                    <label>
                        <input type="submit" style={ { display: "none" } } />
                        <MdSend className={ styles.icon } />
                    </label>
                </form>
                : <button className={ styles.button } onClick={ clickHandler }>Add</button>
            }
        </div >
    );
}

export default Add;