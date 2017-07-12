import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '../src/store';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import PostIndex from './components/posts_index';
import PostNew from './components/post_new';
import PostShow from './components/post_show';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
            <Switch>
                <Route path='/posts/new' component={PostNew} />
                <Route path='/posts/:id' component={PostShow} />  
                <Route path='/' component={PostIndex} />
            </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
    );
