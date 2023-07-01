import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Destination() {

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

    useEffect(() => {
        getDestination()
    }, [])


    return (
        <div >
            <p>{destination.name} </p>
            <p>{destination.description} </p>    
        </div>
    )
}


export default Destination