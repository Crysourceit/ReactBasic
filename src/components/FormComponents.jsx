import React from 'react'
import './FormComponents.css'

const FormComponents = () => {
    return (
        <div>
            <form>
                <div>
                    <label>Menu</label>
                    <input type="text" placeholder='Name Menu' />
                </div>
                <div>
                    <label>Money</label>
                    <input type="number" placeholder='(+ incom, - outcome)' />
                </div>
                <div>
                    <button type='submit' className='btn'>Add Data</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponents