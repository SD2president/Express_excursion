import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function Destinations() {

    const [destinations, setDestinations] = useState([])
    const { name} = useParams()

    //GET THE DESTINATIONS FROM THE DB WHERE ALL ARE FORM THE SAME CONTINENT
    const getDestinations = async () => {
        try {
            const findDestinations = await fetch(`http://localhost:4000/continents/${name}`)
            const jsonData = await findDestinations.json()
            setDestinations(jsonData)
        } catch (Error) {
            console.log(Error)
        }
        
    }

    useEffect(() => {
        getDestinations()
    }, [])


//TAKES THE DESTINATIONS FROM DB ABOVE AND MAKES A LIST OF LINKS 
    const getDestinationList = destinations.map((destination, i) => {
        return (
            <div key={i}>
                <li>
                    <Link to = {`/destination/${destination.name}` }>
                        {destination.name}
                    </Link>
                </li>
            </div>)
    })



    return (

        <div >
            <ul>
                {getDestinationList}
            </ul>
        </div>
    )
}


export default Destinations