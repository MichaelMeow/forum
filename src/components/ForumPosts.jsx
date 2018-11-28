import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function ForumPosts(props){

  function addUpVote() {
    const {dispatch} = props;
    const action = {
      type: 'ADD_UP',
      id: props.id
    }
    dispatch(action);
  }

  function addDownVote() {
    const {dispatch} = props;
    const action = {
      type: 'ADD_DOWN',
      id: props.id
    }
    dispatch(action);
  }

  return (
    <div className="form-container">
      <style>{`
        .form-container {
          border: 1px solid black;
          margin-bottom: 20px;
          padding-left: 20px;
        }
        .vote-hover:hover {
          cursor: pointer;
        }
        .flex {
          display: flex;
        }
        .thumbs-up {
          margin-right: 30px;
        }
      `}</style>
      <h3>{props.message}</h3>
      <div className="flex">
        <h3 className="thumbs-up" onClick={addUpVote}><span className="vote-hover">👍</span> {props.upvotes}</h3>
        <h3 onClick={addDownVote}><span className="vote-hover">👎</span> {props.downvotes}</h3>
      </div>
      <h3>Time Posted: {props.time}</h3>
    </div>
  );
}

export default connect()(ForumPosts);
