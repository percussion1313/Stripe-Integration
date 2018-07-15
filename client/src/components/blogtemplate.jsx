import React from 'react';
import { Link } from 'react-router-dom'


let Blog = ({ blogData }) => {
    return (

        <React.Fragment>
            <div className="card d-flex mx-auto col-md-8 mt-3 p-2 rounded-0">
                <h5 className="card-header rounded-0">{blogData.title}</h5>
                <div className="card-body">
                    <p className="card-text col-md-6">{blogData.content}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Blog

