import React from 'react'
import { Link } from 'react-router-dom'

function Continents() {
    let continentList = [
        { id: 1, name: 'Africa' },
        { id: 2, name: 'Asia' },
        { id: 3, name: 'Australia' },
        { id: 4, name: 'Europe' },
        { id: 5, name: 'North America' },
        { id: 6, name: 'South America' }
    ]




    return (

        <div >
            <ul>
                {continentList.map(continent => (
                    <li key={continent.id}>
                        <Link to={`/continents/${continent.name}`}>
                            <p>{continent.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <a href={`/newdestination`}>
                <button>Add New Destination</button>  
            </a>
        </div>
    )
}


export default Continents