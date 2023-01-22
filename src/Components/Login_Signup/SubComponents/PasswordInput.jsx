import React from 'react'

const PasswordInput=(props)=>{
    return(<input type={'password'} placeholder={`${props.text}`} className='form-input password-input' required/>)
}
export default PasswordInput