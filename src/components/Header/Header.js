import React from 'react'
import NavBar from '../NavBar/NavBar';
import styles from './Header.module.css'

import imagen from '../../Ilustraciones/Recurso6Moneda.png.png'


function Header() {
    return (
        <div>
            <NavBar/>
            <div className='container'>
                <div className="row">
                    <div className='col-lg-6' >
                            <h1 className={styles.title}>MARY TOKEN 🚀🌕</h1>
                            <p className={styles.text}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Odit vero ut voluptatibus ipsa necessitatibus dolor dolores fugiat ipsum a,
                                inventore beatae tempora aliquid molestias sint molestiae id neque corporis eum?
                            </p>
                    </div>
                    <div className="col-lg-6">
                      <img src={imagen} alt="logo" className={styles.imagen}/>                      
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
