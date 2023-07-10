import React from "react";

const Card = ({ title, image, date, author }) => {
    return (
        <div>
            <div className="">
                <img src={image} className="object-cover rounded-[1.2rem]" alt="filler"/>
                <div className="">
                    <h1>{author}</h1>
                    <h1>{title}</h1>
                    <h1>{date}</h1>
                </div>
            </div>
        </div>
    );
};

export default Card;