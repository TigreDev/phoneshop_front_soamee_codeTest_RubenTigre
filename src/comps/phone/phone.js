import React from 'react';
import './phone.css';


const Phone = ({phone, handleDisplay}) => { 

    let base = '../../phonepics/';

    return (
        <div className='phone_block' onClick={handleDisplay}>
            <img alt={`${phone.name}`} src={`${base}${phone.imageFileName}`}/>
            <div className='phone_text'>
                <div className='phone_text_left'>{phone.name}</div>
                <div className='phone_text_right'>{`${phone.price}€` }</div>
            </div>
            
        </div>
    )
}

export default Phone;