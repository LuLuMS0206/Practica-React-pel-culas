import './cardsComponent.css';

export const CardsComponent = () => {
    return (
        <div>
            <div className='cards'>
                <div className='cards__content'>
                    <div>
                    <img className='cards__content__img' src="src/assets/img/3848004.webp" alt=""/>
                    </div>
                
                    <div className='cards__content__text'>
                        <h3>El especialista (2024)</h3>
                        <p>Acción, Comedia, Drama</p>
                        <p>Ryan Gosling, Emily Blunt, Aaron Taylor-Johnson, Hannah Waddingham</p>

                    </div>
                </div>
            </div>
        </div>
    );
}
