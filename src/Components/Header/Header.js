import Nav from "../Nav";
import s from './Header.module.css'

const Header = (props) => {
    return (
        <div className={s.body}>
            <Nav/>
        </div>
    )
}

export default Header