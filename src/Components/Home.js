import s from './Home.module.css'
import {NavLink} from "react-router-dom";

const Home = (props) => {
    return (
        <div className={s.wrapper}>
            <header className={s.header}>
                <h1>
                    генератор українського гумору
                </h1>
            </header>

            <div className={s.content}>
                <div>
                    <p>
                        Стоїмо на варті гумористичного фронту
                    </p>
                </div>

                <div className={s.buttons}>
                    <div>
                        <button>
                            <NavLink to='/memes'>Створити мем</NavLink>
                        </button>
                    </div>

                    <div>
                        <button>
                            <NavLink to='/cats'>отримати рандомного кота для підняття настрою</NavLink>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home