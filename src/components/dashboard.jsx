import React from 'react';
import superheroes from '../shared/heroes';

    export const Dashboard = () => {
        const handleDelete = (id) => {
            superheroes.splice(superheroes.findIndex((h) => h.id === id), 1);
            
            window.alert(`Hero with id ${id} deleted!`);
            window.location.reload();
        };

        const handleFavorite = (id) => {
            const hero = superheroes.find((h) => h.id === id);
            hero.isFavorite = !hero.isFavorite;
            window.alert(`Hero with id ${id} ${hero.isFavorite ? "added to" : "removed from"} favorites!`);
        };

        const handleEdit = (id) => {
            window.alert(`Editing hero with id ${id}!`);
        };

        return (
            <div className='dashtable'>
                <h1>League of Heroes</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Superpower</th>
                            <th>Actions</th> {/* New column for actions */}
                        </tr>
                    </thead>
                    <tbody>
                        {superheroes.map((hero) => (
                            <tr key={hero.id}>
                                <td>{hero.id}</td>
                                <td><img src={hero.image} alt={hero.name} width="50px" height="50px" /></td>
                                <td>{hero.name}</td>
                                <td>{hero.super_power === "" ? "N/D" : hero.super_power}</td>
                                <td> {/* New cell for actions */}
                                    <button onClick={() => handleDelete(hero.id)}>Delete</button>
                                    <button onClick={() => handleFavorite(hero.id)}>
                                        {hero.isFavorite ? "Remove Favorite" : "Add Favorite"}
                                    </button>
                                    <button onClick={() => handleEdit(hero.id)}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };