import {NavLink} from "react-router-dom";


const Memes = (props) => {
    return (
        <div>
            <button>
                <NavLink to='/home'>Back to home</NavLink>
            </button>

            Memes content
        </div>
    )
}

export default Memes