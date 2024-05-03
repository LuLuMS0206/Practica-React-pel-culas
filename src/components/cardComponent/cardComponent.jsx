/* eslint-disable react/prop-types */



export const CardComponent = (props) => {
    return (

        <div key={props.key} className='cards__content'>
            <div>
                <img className='cards__content__img' src={props.image} alt="" />
            </div>
            <div className='cards__content__text'>
                <h3>{props.title} ({props.year})</h3>
                <p>{props.genres.join(", ")}</p>
                <p>{props.actors.join(", ")}</p>
            </div>
        </div>
    )
}


