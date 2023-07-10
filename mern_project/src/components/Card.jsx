import React from "react";

const Card = ({ title, image, date }) => {
    return (
        <div>
            <div className="">
                <img src={image} className="object-cover rounded-[1.2rem]" />
                <div className="">
                    <h1>{title}</h1>
                    <h1>{date}</h1>
                </div>
            </div>
        </div>
    );
};

export default Card;