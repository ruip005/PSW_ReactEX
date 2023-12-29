import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Form = ({submit}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: null,
        image: "",
        name: "",
        super_power: ""
      });
      
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
      
    
      const submitForm = (e) => {
        e.preventDefault();
        submit(formData);
    
    
        navigate("/dashboard");
      };

    return (
        <div>
            <h1>Criar/Editar registos</h1>
            <form onSubmit={submitForm}>
                <label>
                    Nome:
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder='Homem Aranha' />
                </label>
                <br />
                <label>
                    Imagem:
                    <input type="text" name="imagem" value={formData.imagem} onChange={handleChange} placeholder="Introduza o URL da imagem" />
                </label>
                <br />
                <label>
                    Super Poder:
                    <input type="text" name="super_poder" value={formData.super_poder} onChange={handleChange} placeholder='Lança teias' />
                </label>
                <br />
                <button type="submit">Guardar</button>
                <Link to={`/dashboard`}><button >Voltar</button></Link>
            </form>
        </div>
    );
}