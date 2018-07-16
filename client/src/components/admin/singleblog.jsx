import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import * as blogService from '../../services/blogs';

let blogAPI = '/api/blogs/'
class SingleBlog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        }
    }

    
    componentDidMount() {
        let url = blogAPI + this.props.match.params.id;
        fetch(url, {
        method: 'GET'
        })
            .then(res => res.json())
            .then((data) => this.setState({ blogs: data }))
            .catch((e) => {
                console.log(e)
            })
    }

    render() {
        return (
            <div>
                <h5 className=" display-4 card-title col-12 mt-4 ">{this.state.blogs.title}</h5><hr></hr>
                <div className="card-body">{this.state.blogs.content}</div>
            </div>
        )
    }
}


export default SingleBlog