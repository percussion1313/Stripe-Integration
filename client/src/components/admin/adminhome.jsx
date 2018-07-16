import React, { Component } from 'react';
import AdminBlog from './adminblogtemplate'
import { Link } from 'react-router-dom'
import Addpost from './addpost'

let blogDatabase = '/api/blogs'

class AdminBlogList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: []

        };
    }

    async componentDidMount() {
        try {
            let res = await fetch(`${blogDatabase}`);
            let data = await res.json();
            this.setState({ blogs: data })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        let blogPosts = this.state.blogs.map((blog) => {
            return <AdminBlog key={blog.id} blogData={blog} />
        }
        )
        return (
            <React.Fragment>
                 <Addpost />
                {blogPosts}
            </React.Fragment>
        )
    }
}

export default AdminBlogList;


