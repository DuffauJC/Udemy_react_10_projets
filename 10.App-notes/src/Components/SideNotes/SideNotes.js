import React, { useState, useEffect } from 'react'
import './SideNotes.css'
import { useSelector } from 'react-redux'

import Note from './Note/Note'

export default function SideNotes() {

    const { notes } = useSelector(state => state.notesReducer)

    const [notesList, setNotesList] = useState(notes)

    useEffect(() => {
        setNotesList(notes)
    }, [notes])

    const preventForm = e => e.preventdefault()

    const handleFilter = e => {
        const stateCopy = [...notes]

        const filterdArr = stateCopy.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
        
        setNotesList(filterdArr)
    }

    return (
        <div className='notes-display'>
            <h2>Mes Notes</h2>
            <form onSubmit={preventForm}>
                <input
                    onChange={handleFilter}
                    type="text"
                    id="search-notes"
                    placeholder="Rechercher" />
            </form>

            <ul className="notes-list">
                {notesList.map((item => (
                    <Note key={item.id}
                        id={item.id}
                        title={item.title}
                        subtitle={item.subtitle}
                        body={item.body}

                    />
                )))}
            </ul>
        </div>
    )
}
