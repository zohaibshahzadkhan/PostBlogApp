import React,{Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {CreatePost} from '../actions';
import _ from 'lodash';

// const FIELDS={
// title:{
//     type:'input',
//     label:'Title for Post'
// },
// categories:{
//     type:'input',
//     label:'Enter some categories for this Post'   
// },
// content:{
//     type:'textarea',
//     label:'Post content'
    
// }
// }

class PostNew extends Component
{
    renderField(field){
        const {meta :{touched,error}}=field;
        return(
            <div className="form-group container">
                <label>{field.label}</label>
                <input 
                className="form-control"
                type="text"
                {...field.input}
                />
                <div className="text-danger">
                {touched ? error: ''}
                </div>
            </div>
        );
    }
    
   onSubmit(values){
    this.props.CreatePost(values,()=>{
        this.props.history.push('/');
    });
   }
    render(){
        const {handleSubmit}=this.props;

        return(
            <div>
                <h2 className="container">Add New Post</h2>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                 label='Title'
                 name='title'
                 component={this.renderField}
                 />
                 <Field
                 label="Categories"
                 name='categories'
                 component={this.renderField}
                 />
                 <Field
                 label="Post Content"
                 name='content'
                 component={this.renderField}
                 /><br />
                 <div className=" container ">
                 <button type="submit" className="btn btn-primary col-md-1 col-md-push-1">Save</button>
                 <Link to="/" className="btn btn-danger col-md-1 col-md-push-2">Cancel</Link>
                 </div>
            </form>
            </div>
            
        );
    }
}

function validate(values){

    const errors={};
    if(!values.title ||values.title.length<3)
    {
        errors.title="Enter a title that is atleast 3 charecters long!  ";
    }
    if(!values.categories){
        errors.categories="Enter some categories";
    }
    if(!values.content)
    {
        errors.content="Enter some content please";
     }
    // _.each(FIELDS,(type,field)=>{
    //     if(!values[field]){
    //         errors[field]=`Enter a ${field}`;
    //     }
    // });

    return errors;
}

export default reduxForm({
    // validate:validate,
    validate,
    form:'PostsNewForm',
    // fields:_.keys(FIELDS)
}) (
    connect(null,{CreatePost}) (PostNew)
);
