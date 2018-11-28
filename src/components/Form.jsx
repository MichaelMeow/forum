import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Form(props){

  let _message = null;

  function submitPost(event) {
    event.preventDefault();
    const { dispatch } = props;
    const action = {
      type: 'ADD_POST',
      message: _message.value
    };
    dispatch(action);
    _message.value = '';
  }
  return (
    <div>
      <form onSubmit={submitPost}>
        <input type="text" ref={(input) => {_message = input;}}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default connect()(Form);
