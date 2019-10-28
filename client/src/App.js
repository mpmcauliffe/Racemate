import React from 'react'
import './App.css'


const App = () => {
    return (
        <div className="App">
            <div className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>

                <div className="navigation__background">&nbsp;</div>

                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item">
                            <a href="#" className="navigation__link">Routine</a>
                        </li>
                        <li className="navigation__item">
                            <a href="#" className="navigation__link">Workouts</a>
                        </li>
                        <li className="navigation__item">
                            <a href="#" className="navigation__link">Exercises</a>
                        </li>
                        <li className="navigation__item">
                            <a href="#" className="navigation__link">Logout</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}


export default App
