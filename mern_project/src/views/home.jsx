import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const posts = [
        { id: 1, title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe", description: "Best Trip Ever!" },
        { id: 2, title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe", description: "Best Trip Ever!" },
        { id: 3, title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe", description: "Best Trip Ever!" },
        { id: 4, title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe", description: "Best Trip Ever!" },
        { id: 5, title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe", description: "Best Trip Ever!" },
        { id: 6, title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe", description: "Best Trip Ever!" },
        { id: 7, title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe", description: "Best Trip Ever!" },
        { id: 8, title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe", description: "Best Trip Ever!" },
        { id: 9, title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe", description: "Best Trip Ever!" },
        { id: 10, title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe", description: "Best Trip Ever!" },
        { id: 11, title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe", description: "Best Trip Ever!" },
        { id: 12, title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe", description: "Best Trip Ever!" },
        { id: 13, title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe", description: "Best Trip Ever!" },
        { id: 14, title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe", description: "Best Trip Ever!" },
        { id: 15, title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe", description: "Best Trip Ever!" },
        { id: 16, title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe", description: "Best Trip Ever!" },
        { id: 17, title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe", description: "Best Trip Ever!" },
        { id: 18, title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe", description: "Best Trip Ever!" }
    ]
    return (
        <div className="homediv">
            <div>
                <h1 className="HomeTitle">
                    Our Most Popular Discussions
                </h1>
            </div>
            <div className="flex justify-center mt-5" id="home">
                <div className="posts grid grid-cols-3 gap-5 mt-5 mb-5">
                    {posts.map(post => (
                        <div className="post" key={post.id}>
                            <div className="img">
                                <img src={post.image} alt="dummy data" className="object-cover rounded-[1.2rem]" />
                            </div>
                            <div className="content">
                                <Link to={`/post/${post.id}`}>
                                    <h1>{post.author}</h1>
                                    <h1>{post.title}</h1>
                                    <button className="readButton">Read More</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;