import React from "react";
import Card from "../components/Card";

const Home = () => {
    const cards = [
        { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024"},
        { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024"},
        { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024"},
        { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024"},
        { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024"},
        { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024"},
        { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024"},
        { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024"},
        { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024"}
    ]
    return(
    <div className="pt-3">
        <div className="grid grid-cols-1 gap-4">
            {cards.map((card) => (
            <Card title={card.title} image={card.image} date={card.date}/>
            ))}
        </div>
    </div>
    )
}
export default Home