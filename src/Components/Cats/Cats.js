import {NavLink} from "react-router-dom";


const Cats = (props) => {
    return (
        <div>
            <button>
                <NavLink to='/home'>Back to home</NavLink>
            </button>

            Cats content
        </div>
    )
}

export default Cats