import React,{Component} from 'react';
import {connect} from 'react-redux';
import {FetchPost,deletePost} from '../actions';
import {Link} from 'react-router-dom';


class PostShow extends Component {
    componentDidMount(){
        const {id}=this.props.match.params;
        this.props.FetchPost(id);
    }
    onDeleteClick(){
        const {id}=this.props.match.params;
        this.props.deletePost(id,()=>{
            this.props.history.push('/');
        });
    }
    render(){
        const {post}=this.props;
        if(!post)
        {
            return <div>Loading ..</div>
        }
        return(
            <div className="container"><br />
                <Link to='/' className="btn btn-primary">Back To Index</Link>
                <button 
                className="btn btn-danger pull-right"
                onClick={this.onDeleteClick.bind(this)}
                >
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6><h4>Categories:</h4>{post.categories}</h6>
                <p><h4>Description:</h4>{post.content}</p>
            </div>

        );
    }
}

function mapStateToProps({posts},ownProps){
return {post:posts[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{FetchPost,deletePost})(PostShow) ;