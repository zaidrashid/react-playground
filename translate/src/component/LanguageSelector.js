import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    const { onLanguageChange } = this.context;
    return (
      <div className="ui container">
        <div>
          Select a language: &nbsp;
          <i className="flag us" onClick={() => onLanguageChange('english')}/>
          <i className="flag nl" onClick={() => onLanguageChange('dutch')}/>
        </div>
      </div>
    )
  }
}

export default LanguageSelector;

