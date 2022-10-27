import {NavLink} from "react-router-dom";
import s from './Cats.module.css'

const Cats = (props) => {
    return (
        <div className={s.wrapper}>
            <div>
                <button>
                    <NavLink to='/home'>на головну</NavLink>
                </button>
            </div>

            <div>
                Cats content
            </div>
        </div>
    )
}

export default Cats