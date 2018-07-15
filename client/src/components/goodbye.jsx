import React, { Component } from 'react';
import { render } from 'react-dom';
import * as blogsService from '../services/blogs';

class GoodbyeWorld extends Component {
    
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        blogsService.all()
        .then(console.log);
    }

    render() {
        return <h1>Goodbye World!</h1>;
    }
}

export default GoodbyeWorld;