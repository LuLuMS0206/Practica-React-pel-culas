/* eslint-disable no-const-assign */
/* eslint-disable react/prop-types */
// import './cardsComponent.css';

// export const CardsComponent = () => {
//     return (
//         <div>
//             <div className='cards'>
//                 <div className='cards__content'>
//                     <div>
//                     <img className='cards__content__img' src="src/assets/img/3848004.webp" alt=""/>
//                     </div>

//                     <div className='cards__content__text'>
//                         <h3>El especialista (2024)</h3>
//                         <p>Acción, Comedia, Drama</p>
//                         <p>Ryan Gosling, Emily Blunt, Aaron Taylor-Johnson, Hannah Waddingham</p>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import { CardComponent } from '../cardComponent/cardComponent';
import './cardsComponent.css';

const movieData = [
    {
        id: 1,
        title: "El especialista",
        year: 2024,
        genres: ["Acción", "Comedia", "Drama"],
        actors: ["Ryan Gosling", "Emily Blunt", "Aaron Taylor-Johnson", "Hannah Waddingham"],
        image: "src/assets/img/3848004.webp"
    },
    {
        id:2,
        title: "Gru 4. Mi villano favorito",
        year: 2024,
        genres: ["Animación", "Aventura", "Comedia", "Infantil"],
        actors: ["Steve Carell", "Kristen Wiig", "Joey King", "Will Ferrell"],
        image: "src/assets/img/2552361.webp"
    },
    {
        id:3,
        title: "Del revés 2",
        year: 2024,
        genres: ["Animación", "Aventura", "Comedia", "Infantil"],
        actors: ["Amy Poehler", "Phyllis Smith", "Lewis Black", "Tony Hale"],
        image: "src/assets/img/3086368.jpg"
    },
    {
        id:4,
        title: "Robot salvaje",
        year: 2024,
        genres: ["Animación", "Aventura", "Drama"],
        actors: ["Lupita Nyong'o", "Pedro Pascal", "Catherine O'Hara", "Bill Nighy"],
        image: "src/assets/img/images.jpg"
    },
    {
        id:5,
        title: "Vaiana 2",
        year: 2024,
        genres: ["Animación", "Aventura", "Comedia", "Infantil"],
        actors: ["Auli'i Cravalho", "Dwayne Johnson", "Alan Tudyk"],
        image: "src/assets/img/vaiana.jpg"
    },
    {
        id:6,
        title: "10 Lives",
        year: 2024,
        genres: ["Animación", "Comedia", "Familiar", "Infantil"],
        actors: ["Mo Gilligan", "Simone Ashley", "Sophie Okonedo"],
        image: "src/assets/img/10lives.jpg"
    },
    {
        id:7,
        title: "Mala persona",
        year: 2024,
        genres: ["Comedia"],
        actors: ["Jordi Aguilar", "Malena Alterio", "Daniel Arias", "Sofia Baessa"],
        image: "src/assets/img/malapersona.jpg"
    },
    {
        id:8,
        title: "Invasión",
        year: 2024,
        genres: ["Drama", "Ciencia ficción"],
        actors: ["María Adánez", "Marga Arnau", "Nourdin Batan", "Fran Berenguer"],
        image: "src/assets/img/ivasion.jpg"
    },
    {
        id:9,
        title: "Capitán Avispa",
        year: 2024,
        genres: ["Animación", "Acción", "Aventura", "Infantil"],
        actors: ["Luis Fonsi", "Joy Huerta", "Juanes"],
        image: "src/assets/img/Capitan avispa.jpg"
    },
    {
        id:10,
        title: "Aquellos maravillosos días",
        year: 2024,
        genres: ["Acción", "Comedia", "Drama"],
        actors: ["Catherine Deneuve", "Andrea Riseborough", "Morgan Saylor"],
        image: "src/assets/img/maravillososdias.jpg"
    },
    
];


export const CardsComponent = (props) => {
    let newData = [];

    if(props.genre !== '' ){
        newData = movieData.filter(movie => movie.genres.includes(props.genre));
    } else{
        newData = movieData
    }
    

    return (
        <div>
            <div className='cards'>
                {newData.map((movie, index) => (
                    <CardComponent title={movie.title} year={movie.year} genres={movie.genres} actors={movie.actors} image={movie.image} key={index}/>
                ))}
            </div>
        </div>
    );
}
