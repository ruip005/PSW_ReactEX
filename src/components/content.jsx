import { HeroInfo } from './heroinfo';
import './style.css'
import data from '../shared/heroes'
import React from 'react';
import { useEffect } from 'react';
import { Dashboard } from './dashboard';
import { Routes, Route, redirect } from 'react-router-dom';
import { Form } from './forms'

const Content = () => {
    const [listOfHeroes, setListOfHeroes] = React.useState(data);
    const [favoriteHeroes, setFavoriteHeroes] = React.useState([]);
    const [loading, setLoading] = React.useState(true); // Adicionando a variável de estado "loading" com o valor inicial true

    const getRandomNumbers = () => {
        const randomNumbers = [];
        const maxLength = data.length;

        while (randomNumbers.length < 3) {
            const randomNumber = Math.floor(Math.random() * maxLength) + 1;
            if (!randomNumbers.includes(randomNumber)) {
                randomNumbers.push(randomNumber);
            }
        }

        return randomNumbers;
    };

    const submitForm = (formData) => {
        setListOfHeroes((currentHeroes) => {
          const newHeroesList = [
            ...currentHeroes,
            {
              id: currentHeroes.length > 0 ? currentHeroes[currentHeroes.length - 1].id + 1 : 1,
              image: formData.image,
              name: formData.name,
              super_power: formData.super_power,
            },
          ];
          //submitFormapi(newHeroesList);
      
          console.log('Updated List of Heroes:', newHeroesList);
      
          return newHeroesList;
        });
      };

    // Este hook useEffect é usado para definir os heróis favoritos iniciais quando o componente é montado.
    // Ele roda apenas uma vez, graças ao array vazio de dependências [] como segundo argumento.
    useEffect(() => {
        setFavoriteHeroes(getRandomNumbers());
        setTimeout(() => setLoading(false), 3000); // Quando o componente é montado, o estado "loading" é setado para false
    }, []);

    const enviar = () => {
        return favoriteHeroes.map((heroId) => {
            const hero = listOfHeroes.find((h) => h.id === heroId);
            return <HeroInfo key={hero.id} imagem={hero.image} nome={hero.name} />;
        });
    };

    const mudarFavoritos = () => {
        setFavoriteHeroes(getRandomNumbers());
    };

    return (
        <div>
            <Routes>
                <Route path="/" element={loading ? <Loader /> : (
                    <>
                        <h2>Top Heróis</h2>
                        <div className="container">
                            {enviar()}
                        </div>
                        <button onClick={mudarFavoritos}>Mudar Favoritos</button>
                    </>
                )} />
                <Route path="/dashboard" element={<Dashboard></Dashboard>} />
                <Route path="/dashboard/add" element={<Form submit={submitForm}></Form>} />
                <Route path="/dashboard/edit/:id" element={<Form list_of_heroes={listOfHeroes} submit={submitForm}></Form>} />
            </Routes>
        </div>
    );
};

const Loader = () => {
    return (
        <div className="loader">
            <img src={'loader.gif'} alt="loader spinner"></img>
        </div>
    );
}

export default Content;