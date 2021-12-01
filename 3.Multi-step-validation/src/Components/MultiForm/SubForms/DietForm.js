import React, { useState } from 'react'
import './SubForm.css'

export default function DietForm(props) {

    const [formData, setFormData] = useState({
        dietForm: 'nodiet',

    })

    const preventFunc = (e) => {
        e.preventDefault()
    }

    const handleRadio = (e) => {
        setFormData({
            dietForm: e.target.value
        })
    }


    return (
        <form className="diet-form"
            onSubmit={preventFunc}>

            <p>Quelle est ton régime alimentaire ?</p>

            <label htmlFor="nodiet">Pas de régime en particulier</label>
            <input onChange={handleRadio} type="radio" name="diet" id="nodiet" value="nodiet" />

            <label htmlFor="homnivorus">Homnivore</label>
            <input onChange={handleRadio} type="radio" name="diet" id="homnivorus" value="homnivorus" />

            <label htmlFor="vegetarian">Végétarien</label>
            <input onChange={handleRadio} type="radio" name="diet" id="vegetarian" value="vegetarian" />

            <label htmlFor="vegan">Vegan</label>
            <input onChange={handleRadio} type="radio" name="diet" id="vegan" value="vegan" />

            <button onClick={() => props.modifyIndex(3,formData)}>Valider</button>

        </form>
    )
}
