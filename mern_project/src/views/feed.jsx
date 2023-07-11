import React from "react";
import Card from "../components/Card";

function Feed() {
  const cards = [
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe" },
    { title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe" }
  ]
  return (
    <div>
      <h1 className="FeedTitle">
        Country: USA
      </h1>
      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-3 gap-y-5 gap-x-5" id="homeGrid">
          {cards.map((card) => (
            <Card title={card.title} image={card.image} date={card.date} author={card.author} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feed