import React from 'react';
import '../App.css';
import Services from './Services';
// import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

function Home() {
    const location = useLocation()

    return (
        <div id='homeContainer'>

            <div className='notice'>
                <p> Hello, <span>{location.state.id} </span></p>
                <h1> Notices</h1>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem natus consequuntur soluta sint dolore dolorum accusamus quae unde minima vero?</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem natus consequuntur soluta sint dolore dolorum accusamus quae unde minima vero?</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem natus consequuntur soluta sint dolore dolorum accusamus quae unde minima vero?</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem natus consequuntur soluta sint dolore dolorum accusamus quae unde minima vero?</li>
                </ul>
            </div>

            <Services />

        </div>
    )
}

export default Home