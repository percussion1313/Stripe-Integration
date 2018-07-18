import React, { Component } from 'react';
import { sendContactEmail } from '../services/contact'

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message:''
        }
    };

    handleName(name) {
        this.setState({name});
    }

    handleEmail(email) {
        this.setState({email});
    }

    handleMessage(message) {
        this.setState({message});
    }

    handleSubmit(e) {
        e.preventDefault();
        sendContactEmail(this.state.name, this.state.email, this.state.message)
        .then(() => {

        }).catch((err) => {
            console.log('Oh No!')
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={ (e) => this.handleSubmit(e)}>
                    <div className="form-group">
                        <input placeholder="Name" onChange={(e) => this.handleName(e.target.value)} id="name" type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input placeholder="Email"  onChange={(e) => this.handleEmail(e.target.value)} id="email" type="text" className="form-control" required/>
                    </div>
                   <div className="form-group">
                        <textarea rows="6" className="form-control"></textarea>
                   </div>
                   <input onChange={(e) => this.handleMessage(e.target.value)} type="submit" className="btn btn-primary"/>
                </form>
            </div>
        )
    }
}

export default Contact;