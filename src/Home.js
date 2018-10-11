import React from 'react'
import './Home.css'
import img from './me.jpg'

class Home extends React.Component {
    render() {
        return (
            <body class='page'>
                <div>
                    <img class="me" src={img} height="300em" alt='Ryley'></img>
                </div>
                <div class="about">
                    <p >Hi, I'm Ryley Liston. I'm a nerd and a metal head and enjoy most things related to computers and games. I currently live in utah county with my wife, Karin, and my dog, Ellie.</p>
                </div>
                </body>
        )
    }

} export default Home