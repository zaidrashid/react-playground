import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Don't change PcDisplay
const PcDisplay = (props) => {
  return (<div>
  <h1>{props.title}</h1>
  <p id="price">£{props.price}</p>
  <ul>
    <li><label>CPU</label> <span>{props.cpu}</span></li>
    <li><label>RAM</label> <span>{props.ram}</span></li>
    <li><label>SSD</label> <span>{props.ssd}</span></li>
  </ul>
  </div>);
};

// Implement HOC -> returns a functions that wraps the passed in `PcDisplay` component
let withPriceModel = (WrappedComponent, incomingProps) => {
   class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        price: incomingProps || 50,
      }
    }
     
    render() {
      return <WrappedComponent price={this.state.price} {...this.props} />
    }
  }
  return HOC; 
}

// Build basic and pro model components using `withPriceModel`
let BasicModel = withPriceModel(PcDisplay);
let ProModel = withPriceModel(PcDisplay, 110);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BasicModel name="Basic" cpu="128hz" ram="24gb" ssd="500gb" />,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
