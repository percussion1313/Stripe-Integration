import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './home';
import Donate from './donate'
import AdminBlogList from './admin/adminhome';
import SingleBlog from './admin/singleblog';
import BlogList from './bloglist';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';
import AddPost from './admin/addpost';
import EditPost from './admin/edit';



class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <AuthButton />
                    <Link to="/"><button className="btn btn-outline-dark col-md-3 shadow rounded-0 mt-2">HOME</button></Link>
                    <Link to="/blogs"><button className="btn btn-outline-dark col-md-3 shadow rounded-0 mt-2">Blog Posts</button></Link>
                    <Link to="/admin"><button className="btn btn-outline-dark col-md-3 shadow rounded-0 mt-2">Admin</button></Link>
                    <Link to="/donate"><button className="btn btn-success fixed-bottom">Where's the money Lebowski?!</button></Link>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <PrivateRoute path="/blogs/:id" component={SingleBlog} />
                        <Route path="/blogs" component={BlogList}/>
                        <Route path="/donate" component={Donate}/>
                        <PrivateRoute path="/admin" component={AdminBlogList} />
                        <PrivateRoute path="/addpost" component={AddPost} />
                        <PrivateRoute path="/editpost" component={EditPost} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;
