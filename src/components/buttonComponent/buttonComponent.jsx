/* eslint-disable react/prop-types */


import './buttonComponent.css';

export const ButtonComponent = (props) => {



    return (
        <div className="buttonComponent">
            <button className='buttonComponent__content' onClick={props.clickHandlerTodos}>Películas</button>
            <button className='buttonComponent__content' onClick={props.clickHandlerInfantil}>Películas Infantiles</button>
            <button className='buttonComponent__content' onClick={props.clickHandlerComedia}>Películas de Comedia</button>
        </div>
    );
}
