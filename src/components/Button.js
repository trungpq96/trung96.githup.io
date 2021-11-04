import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLE =['btn--primary','btn--outline']
const SIZES = ['btn--medium','btn--large']
export const Button = ({children,type,onclick,buttonStyle,buttonSize})=>{
    const checkButtonStyle = STYLE.includes(buttonStyle)
    ? buttonStyle
    : STYLE[0];

    const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize
    : STYLE[0];

    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onclick} type={type}>
                {children}
            </button>
            <Button>
                Get Start
            </Button>
        </Link> 
    )
}