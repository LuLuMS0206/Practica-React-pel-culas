
import './navbarComponent.css';

export const NavbarComponent = () => {
    return (
        <div className="navbarComponent">
            <img className="navbarComponent__img" src="src/assets/img/logo (1).svg" alt=""/>
            <div className="navbarComponent__iconMenu">
                <p className='navbarComponent__menu'>Menú</p>
            </div>
            <input className='navbarComponent__input' type="text" />  
            <img className="navbarComponent__imgLogopro" src="src/assets/img/logopro (1).png" alt=""/>

            <div className="navbarComponent__item" >
                <ul className='navbarComponent__itemContent'>
                    <li className="navbarComponent__itemContentsList"> Lista de seguimiento </li>
                    <li className="navbarComponent__itemContentsList"> Iniciar sesión</li>
                </ul>
            </div>
            
        </div>
    );
}
