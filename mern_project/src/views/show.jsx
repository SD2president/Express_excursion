import { Link } from "react-router-dom";

function Show({ id, title, image, date, author, description }) {
    const posts = [
        { id: 1, title: "Texas, USA", image: "https://dummyimage.com/400x250/000/fff.jpg", date: "1/1/2024", author: "Jane Doe", description: "Best Trip Ever!" }
    ]
return (
    <div>
        <div className="flex justify-center" id="show">
            <div className="posts grid grid-cols-3 gap-5 mb-5">
                {posts.map(post => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.image} alt="dummy data" className="object-cover rounded-[1.2rem]" />
                        </div>
                        <div>
                            <Link to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                                <p>{post.description}</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )};

export default Show;