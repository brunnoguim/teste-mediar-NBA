import React from 'react'
import '../styles/searchbar.css'
import Selector from './Selector'

function Searchbar() {

    //Return do componente
    return (
        <div className='searchbar-container'>
            <img src={process.env.PUBLIC_URL + '/images/mediar-logo.png'} alt="Logo Mediar"></img>
            <Selector />
        </div>
    )
}

export default Searchbar
