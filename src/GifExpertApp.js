import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Samurai X']);

    // const handleAdd = () => {
    //     // SetCategories( [...categories, 'HunterxHunter'] );
    //     SetCategories( cats => [ ...cats, 'HunterxHunter' ])
    // }


    return (
        <>
           <h2>GifExpertApp</h2>
           <AddCategory setCategories={ setCategories } />
           <hr />  

           <ol>
               {
                   categories.map( category => (
                       <GifGrid
                       key={ category }
                       category={ category } 
                       />
                   ))
               }
           </ol>
        </>

    )
}
