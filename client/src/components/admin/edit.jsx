import React, { Component } from 'react';
import { render } from 'react-dom';
import * as blogService from '../../services/blogs';



//Part of admin page 
class EditPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            content: ""
        }
    }

    updatePost() {
        let blogPost = {
            title: this.state.title,
            content: this.state.content
        };
        console.log(blogPost)
        //Using back end functions provided in service/blogs.js
        blogService.update(blogPost)
          .catch(error => console.log(error))
    }


    handleTitleChange(event) {
        this.setState({
            title: event.target.value
        });
    }
    handleContentChange(event) {
        this.setState({
            content: event.target.value
        });
    }

    render() {

        return (
            <React.Fragment>
                <form>
                    <div className="col-md-6 form-text rounded-0">
                        <input placeholder="Update Title"
                            type="text" id="title" name="title"
                            onChange={this.handleTitleChange.bind(this)} />
                    </div>
                    <textarea className="form-control col-md-6 pagination-centered m-3 position-relative shadow mx-auto"
                        id="content" name="content" type="text"
                        onChange={this.handleContentChange.bind(this)} ></textarea>
                    <div>
                        <button
                            className="btn btn-primary m-3 d-flex mx-auto shadow"
                            name="cardSubmitButton"
                            onClick={this.updatePost.bind(this)}
                        >Post!</button>
                    </div>
                </form>
            </React.Fragment>


        );
    }
}

export default EditPost;









