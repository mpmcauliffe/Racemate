import React from 'react'
import './styles.css'


// see https://loading.io/css/
export const Loader = () => {
    return (
        <div 
            style={{ width: '20vw', 
                minHeight: '50vh', 
                margin: '40vh auto',
                paddingBottom: '15vh' }}>

            <div className='lds-facebook'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        
    )
}


// position: 'absolute',
//                 margin: 'auto',
//                 top: 0,
//                 right: 0,
//                 bottom: 0,
//                 left: 0,
//                 width: '200px',
//                 height: '200px',
