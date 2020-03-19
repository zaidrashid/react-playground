import React from 'react';
import LanguageContext from '../contexts/LanguageContext';


class Field extends React.Component {
  // contextType is a special variable name in React
  // add properties to the class
  static contextType = LanguageContext;
  render() {
    const text = this.context.language === 'english' ? 'Name' : 'Naam';
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    )
  }
}

export default Field;

