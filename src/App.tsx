import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

export interface IAppState {
  counter: number;
}

export interface ComponentProps {
  test: number;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  increment = () => {
    const { counter: existingCounter } = this.state;
    this.setState({
      counter: existingCounter + 1,
    });
  }
  helloWorld(userName: string): void {
    alert(`Testing ${userName}`);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={() => this.helloWorld('Shobhit')} />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.increment}>INC</button>
        <p className="App-intro">
          {this.state.counter}
        </p>
      </div>
    );
  }
}

export default App;
