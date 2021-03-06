import React from 'react'
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = (props) => {
    //const id = props.match.params.id;
    const {project} = props;
    if(project){
        return(
            <div className="container section project-details">
             <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{project.title}</span>
                    <p>
                       {project.content}
                    </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>{project.authorFirstName} {project.authorLastName}</div>
                    <div>posted date here..</div>
                </div>
            </div>
        </div>
        )
    }
    else
    return (
     <div className="container center">
         <p className="loading">Loading projects...</p>
     </div>   
    )
}

const mapStateToProps = (state,ownProps) =>{
    console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects
    const project = projects? projects[id]:null
return {
        project
    }  
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
    )(ProjectDetails)
