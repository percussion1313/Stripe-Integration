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


    //  async deletePost() {
    //     try {
    //     let id = `${this.id}`;
    //       await blogService.destroy(id)
    //       console.log('Delete Success!');
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };
  

    render() {
        return (
            <div>
                <h5 className=" display-4 card-title col-12 mt-4 ">{this.state.blogs.title}</h5><hr></hr>
                <div className="card-body">{this.state.blogs.content}</div>
                <Link to='/admin' ><button className="btn btn-primary float-right">Delete Post</button></Link>
                <Link to='/editpost' ><button className="btn btn-primary float-left">Edit Post</button></Link>
            </div>
        )
    }
}


export default SingleBlog
