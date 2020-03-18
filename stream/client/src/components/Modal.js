import React from 'react';
import { PropTypes } from 'prop-types';
import ReactDOM from 'react-dom';


class Modal extends React.Component {
  render() {
    const { title, content, actions, onDismiss } = this.props;
    return ReactDOM.createPortal(
      <div 
        onClick={onDismiss}
        className="ui dimmer modals visible active"
      >
        <div
          onClick={e => e.stopPropagation()}
          className="ui standard modal visible active"
        >
          <div className="header">{title}</div>
          <div className="content">
            <p>{content}</p>
          </div>
          <div className="actions">{actions}</div>
        </div>
      </div>,
      document.querySelector('#modal'),
    );
  }
}

export default Modal;

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  actions: PropTypes.element.isRequired,
  onDismiss: PropTypes.func.isRequired,
};
