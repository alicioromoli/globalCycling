import React from 'react'
import ReactPlayer from 'react-player'
import Cards from './Cards'
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Main() {
    return (
        <>
        <div className="main-header">
            <div className="main__header__search-input">
                <div className="searchIcon">
                    <FontAwesomeIcon icon={faSearch}/>
                </div>
                <div className="search-input">
                    <input type="text" placeholder='search for videos'/>
                </div>
            </div>  
        </div>
        <div className="main__hero">
            <ReactPlayer  width='100%' height='210px' url='https://www.youtube.com/watch?v=xmlqZ_foSEo'/>
        </div>
        <div className="main-content">
            <Cards />
        </div>
        </>
    )
}

export default Main
