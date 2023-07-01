import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function Destinations() {

    const [destinations, setDestinations] = useState([])
    const { name} = useParams()

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



    const getDestinationList = destinations.map((destination, i) => {
        return (
            <div key={i}>
                <li>
                    <Link to = {`/continent/${destination.name}` }>
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