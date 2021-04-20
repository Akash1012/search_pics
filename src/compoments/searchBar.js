import React, { useState } from 'react'

const SearchBar = (props) => {

    const [term, setTerm] = useState('')


    const { onSubmit } = props

    const onInputChange = (event) => {
        setTerm(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);


    }

    return (
        <div className='ui segment'>
            <form onSubmit={onFormSubmit} className='ui form'>
                <div className='field'>
                    <label>Image Search {term}</label>
                    <input type='text' value={term} onChange={onInputChange} />
                </div>
            </form>
        </div>
    )
}

export default SearchBar