import {NavLink} from "react-router-dom";
import s from './Memes.module.css'


const Memes = (props) => {
    return (
        <div className={s.wrapper}>
            <button>
                <NavLink to='/home'>Back to home</NavLink>
            </button>

            Memes content
        </div>
    )
}

export default Memes