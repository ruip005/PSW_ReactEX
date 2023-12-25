import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export const Form = (props) => {

    const [superhero, setSuperhero] = useState({
        nome: '',
        imagem: '',
        super_poder: ''
    });

    const params = useParams();
    const elemento = props.list_of_heroes.find(item => item.id === parseInt(params.id));

    const [formData, setFormData] = useState(elemento ? elemento : {
        id: '',
        nome: '',
        imagem: '',
        super_poder: ''
    });

    const handleChange = (e) => {
        setSuperhero({
            ...superhero,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <h1>Criar/Editar registos</h1>
            <form onSubmit={(e) => props.submit(e, superhero)}>
                <label>
                    Nome:
                    <input type="text" name="nome" value={superhero.nome} onChange={handleChange} placeholder='Homem Aranha' />
                </label>
                <br />
                <label>
                    Imagem:
                    <input type="text" name="imagem" value={superhero.imagem} onChange={handleChange} placeholder="Introduza o URL da imagem" />
                </label>
                <br />
                <label>
                    Super Poder:
                    <input type="text" name="super_poder" value={superhero.super_poder} onChange={handleChange} placeholder='Lança teias' />
                </label>
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}