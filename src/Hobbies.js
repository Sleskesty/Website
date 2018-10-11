import React from 'react'
import './Home.css'
import img from './minis.jpg'


class Hobbies extends React.Component {
    render () {
        return (
            <body class="hobbies">
                <div class='about'>
                    <img class="me" src={img} height="300em" alt="minis"></img>
                    <p>Hobbies I enjoy are board game, movies, and painting miniatures. </p>
                </div>
            </body>
        )
    }
}export default Hobbies