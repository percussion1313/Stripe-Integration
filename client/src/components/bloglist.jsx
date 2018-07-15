import React, { Component } from 'react';
import Blog from './blogtemplate'

let blogDatabase = '/api/blogs'

class BlogList extends Component {
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
            return <Blog key={blog.id} blogData={blog} />
        }
        )
        return (
            <React.Fragment>
                {blogPosts}
            </React.Fragment>
        )
    }
}

export default BlogList;


