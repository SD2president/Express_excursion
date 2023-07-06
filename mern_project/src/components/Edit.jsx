import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
    const navigate = useNavigate()
    const { name} = useParams()
    const [continent_name, setContinent_name] = useState()
    const [country_name, setCountry_name] = useState('')
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')
    const [date, setDate] = useState('')
    const [picture, setPicture] = useState('')
    
    //EDIT DESTINATION IN THE DB DESTINATION FUNCTION 
    const editDestination = async (e) => {
        e.preventDefault()
        try {
            const edited={name, continent_name, country_name, description, author, date, picture} 
             const response = await fetch(`http://localhost:4000/destinations/${name}`,
            { method: "PUT",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(edited)
        })
        .then ((response)=>response.json())
        console.log(response)
        navigate('/continents')
        } catch (Error) {
            console.log(Error)
        }
    }

    return (

            <main>
                <h1>Edit {name}</h1>
                <form method='POST' onSubmit={editDestination} >
                    <div className="dropdown">
                        <label htmlFor='continent_name'>Continent</label>  
                        <select name='continent_name' id="continent_name" value={continent_name}  onChange={(e)=> setContinent_name(e.target.value)} >  
                            <option value="Africa">Africa</option>
                            <option value="Asia">Asia</option>
                            <option value="Australia">Australia</option>
                            <option value="Europe">Europe</option>
                            <option value="North America">North America</option>
                            <option value="South America">South America</option>
                        </select>                   
                    </div>
                    <div className="form-group">
                        <label htmlFor='country_name'>Country</label>  
                        <input id="country" name="country_name" value={country_name} onChange={(e)=> setCountry_name(e.target.value)}  />                      
                    </div>
                    <div className="form-group">
                        <label htmlFor='description'>Description</label>  
                        <textarea  name='description' value={description} onChange={(e)=> setDescription(e.target.value)}  />                      
                    </div>
                    <div className="form-group">
                        <label htmlFor='author' >Author</label>  
                        <input id="author" name="author" value={author} onChange={(e)=> setAuthor(e.target.value)} />                      
                    </div>
                    <div className="form-group">
                        <label htmlFor='picture'>Photo</label>  
                        <input id="picture" name="picture" value={picture} onChange={(e)=> setPicture(e.target.value)} />                      
                    </div>
                    <div className="form-group">
                        <label htmlFor='date'>Date Visited</label>  
                        <input type="date" id='date' name="date" step="1" value={date} onChange={(e)=> setDate(e.target.value)} ></input>                    
                    </div>
                    <button type='submit'>Submit</button>   
                </form>
            </main>

    )
}


export default Edit