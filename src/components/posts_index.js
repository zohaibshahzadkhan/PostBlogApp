import React,{Component} from 'react';
import {connect} from 'react-redux';
import {FetchPosts} from '../actions';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom'
import _ from 'lodash';

class PostIndex extends Component
{
    componentDidMount(){
        this.props.FetchPosts();
    }
    renderPost(){
        return _.map(this.props.Posts,post=>{
            return (
                <Link to={`/posts/${post.id}`}>
                <li className="list-group-item" key={post.id}>{post.title}</li>
                </Link>
            );
        })
    }
    render(){
        return(
            <div className="container">
                <div className="text-xs-right pull-right"><br />
                    <Link className="btn btn-primary" to="posts/new">
                        Add a Post
                    </Link>
                </div><br/>
                <div>
                    <h3> Blog Posts</h3>
                    <ul className='list-group'>
                        {this.renderPost()}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
return {Posts:state.posts}
}
function mapDispatchTOProps(dispatch){
return bindActionCreators({FetchPosts},dispatch);
}
export default connect (mapStateToProps,mapDispatchTOProps)(PostIndex);   
// export default connect (null,{FetchPosts})(PostIndex);   Shorcurt for dispatching actions
