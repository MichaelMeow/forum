import React from 'react';
import Form from './Form';
import ForumPosts from './ForumPosts';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'moment';

class ContainerComponent extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(props) {
    return (
      <div>
        {this.props.idArray.map(formId => {
          let form = this.props.masterPostsList[formId];
          return <ForumPosts
            message={form.message}
            upvotes={form.upvotes}
            downvotes={form.downvotes}
            time={(form.time).fromNow(true)}
            id={formId}
            key={formId}
          />;
        })}
        <Form/>
      </div>
    );
  }
}

ContainerComponent.propTypes = {
  numberOfClicks: PropTypes.number
};

const mapStateToProps = state => {
  let idArray = Object.keys(state);

  idArray = idArray.sort(function(id1, id2) {
    return  state[id2].upvotes - state[id1].upvotes
  });

  return {
    masterPostsList: state,
    idArray: idArray
  };
};

export default connect(mapStateToProps)(ContainerComponent);
