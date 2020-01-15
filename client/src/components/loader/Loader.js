import React from 'react'
import './styles.css'


// see https://loading.io/css/
export const Loader = () => {
    return (
        <div className='lds-facebook'>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
