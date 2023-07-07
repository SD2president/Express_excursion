import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'



//GETS A SINGLE DESTINATION FROM THE DB
function Destination() {
    const navigate = useNavigate()
    const [destination, setDestination] = useState([])
    const { name } = useParams()
    const getDestination = async () => {
        try {
            const findDestination = await fetch(`http://localhost:4000/destinations/${name}`)
            const jsonData = await findDestination.json()
            setDestination(jsonData)
        } catch (Error) {
            console.log(Error)
        }
    }

    //DELETE DESTINATION FUNCTION
    const deleteDestination = async () => {
        try {
            const deleteDestination = await fetch(`http://localhost:4000/destinations/${name}`,
                { method: "DELETE" })
            navigate('/continents') //redirects back to parent destination list
        } catch (Error) {
            console.log(Error)
        }
    }


    useEffect(() => {
        getDestination()
    }, [])


    return (
        <div >
            <p>{destination.name} </p>
            <p>{destination.description} </p>
            <p>{destination.continent_name} </p>
            <p>{destination.country_name} </p>
            <p>{destination.picture} </p>
            <p>{destination.author} </p>
            <p>{destination.date_visited} </p>
            <div>
                <Button variant="danger" onClick={deleteDestination}>
                <i className="fa-regular fa-trash-can"></i>  DELETE</Button>
            </div>
            <div>
                <Link to={`/edit/${destination.name}`}>
                    <Button variant="success"><i className="fa-solid fa-pen-to-square"></i>  Edit</Button>
                </Link>
            </div>
        </div>
    )
}


export default Destination