

import './buttonComponent.css';

export const ButtonComponent = () => {
    return (
        <div className="buttonComponent">
            <button className='buttonComponent__content'>Pelicula</button>
            <button  className='buttonComponent__content'>Tv</button>
            <button  className='buttonComponent__content'>Episodio de Tv</button>
        </div>
    );
}