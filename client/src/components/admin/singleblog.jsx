import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as blogService from '../../services/blogs';


class SingleBlog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        }
    }


    componentDidMount() {
        let url = '/api/blogs/' + this.props.match.params.id;
        console.log(url)
        blogService.one(this.props.match.params.id)
            .then((res) => this.setState({
                blogs: res

            }))
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