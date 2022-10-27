import {NavLink} from "react-router-dom";

const Home = (props) => {
    return (
        <div>
            Home text

            <button>
                <NavLink to='/memes'>Створити мем</NavLink>
            </button>

            <button>
                <NavLink to='/cats'>Котики</NavLink>
            </button>

        </div>
    )
}

export default Home