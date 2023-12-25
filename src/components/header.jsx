import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className='cabecas'>
            <img className='logo' src='logo.ico'></img>
            <h1>{props.project_name}</h1>
            <h4>Desenvolvido por {props.my_name}</h4>
            <nav>
                <ul style={{ listStyleType: 'none' }}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/add">Adicionar Super-Herói</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;