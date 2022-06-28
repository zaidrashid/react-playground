class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return(
      <button 
        onClick={() => {
          const count = this.state.counter += 1;
          this.setState({counter: count});
          }}
      >Counter: {this.state.counter}</button>
    )
    }
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);