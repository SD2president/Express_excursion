import React from "react";
import Card from "../components/Card";

function Feed() {
  const cards = [
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024" }
  ]
  return (
    <div>
      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-3 gap-y-5 gap-x-5" id="homeGrid">
          {cards.map((card) => (
            <Card title={card.title} image={card.image} date={card.date} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feed