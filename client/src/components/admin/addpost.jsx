import React, { Component } from 'react';
import { render } from 'react-dom';
import { setAuthToken } from '../../services/base';

//Part of admin page 
class AddPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            content: ''
        }
    }

    addPost() {
        let data = {
            title: this.state.title,
            content: this.state.content,
        };
        fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({ 
                'Content-Type': 'application/json',
                'Authorization': setAuthToken()
            })
        }).then(res => res.json())
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
                <form onSubmit={this.insertAuth}>
                    <div className="col-md-6 form-text rounded-0">
                        <input placeholder="Blog Title Goes Here"
                            onChange={this.handleTitleChange.bind(this)} />
                    </div>
                    <textarea className="form-control col-md-6 pagination-centered m-3 position-relative shadow mx-auto"
                        onChange={this.handleContentChange.bind(this)} ></textarea>
                    <div>
                        <button
                            className="btn btn-primary m-3 d-flex mx-auto shadow"
                            name="cardSubmitButton"
                            onClick={this.addPost.bind(this)}
                        >Post!</button>
                    </div>
                </form>
            </React.Fragment>


        );
    }
}

export default AddPost;









