import React from "react";

const New = () => {
    return (
        <div className="newDiv">
            <h1 id="newID">
                Post
            </h1>
            <form className="newForm">
                Auhtor: <input type="text" className="newIn"></input>
                Destination: <input type="text" className="newIn"></input>
                Date: <input type="text" className="newIn"></input>
                Image{`(s)`}: <input type="file" className="newIn" id="fileID"></input>
                Comment: <textarea rows="10"></textarea>
            </form>
            <button>Submit</button>
        </div>
    )
}
export default New