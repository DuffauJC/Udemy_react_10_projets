import React, { useRef, useEffect } from 'react'
import './SubForm.css'

export default function Allergies(props) {

    const allCheckboxes = useRef([])

    const preventFunc = (e) => {
        e.preventDefault()

        const styleData = {
            allergies: []
        }

        allCheckboxes.current.forEach(checkbox => {
            if (checkbox.checked) {
                styleData.allergies.push(checkbox.value)
            }
        })

        props.modifyIndex(5, styleData)
    }

    const addCheck = el => {
        if (el && !allCheckboxes.current.includes(el)) {
            allCheckboxes.current.push(el)
        }
    }
    console.log(allCheckboxes)

    const handleReturn = () => {
        props.modfyIndex(3)
    }


    return (
        <form className="checkbox-form" onSubmit={preventFunc}>

            <p>As-tu des allergies ?</p>
            <span>Choix multiples.</span>

            <label htmlFor="milk">Lait</label>
            <input ref={addCheck} type="checkbox" id="milk" value="milk" />

            <label htmlFor="japanese">Pollen</label>
            <input ref={addCheck} type="checkbox" id="pollen" value="pollen" />

            <label htmlFor="nuts">Noix</label>
            <input ref={addCheck} type="checkbox" id="nuts" value="nuts" />

            <label htmlFor="eggs">Oeufs</label>
            <input ref={addCheck} type="checkbox" id="eggs" value="eggs" />

            <label htmlFor="shellfish">Fruits de mer</label>
            <input ref={addCheck} type="checkbox" id="shellfish" value="shellfish" />


            <div className="container-nav-btns">
                <button onClick={handleReturn} type="button">Précédent</button>
                <button>Valider</button>
            </div>


        </form>
    )
}
