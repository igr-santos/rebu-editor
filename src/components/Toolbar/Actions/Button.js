import React, { Component, PropTypes } from 'react';


class Button extends Component {

  render() {
    const { children, icon, onClick } = this.props;
    const iconClass = `fa fa-${icon}`;
    return (
      <button onClick={onClick}>
        {icon ? (
          <i className={iconClass}></i>
        ) : children}
      </button>
    );
  }
}

Button.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default Button;
