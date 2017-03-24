import React from 'react';

function replacer(key, value) {
  if (typeof value === 'function') {
    return `function ${value.name}() {...}`;
  }
  return value;
}

const stringify = value => JSON.stringify(value, replacer, 2);

// II debug example
// We are using the Inheritance Inversion technique to display
// the current state and props of the WrappedComponent (the component you want to debug).
// This is based on the technique that Mickael Jackson and Ryan Florence recommend
global.debug = (WrappedComponent) => {
  return class II extends WrappedComponent {
    render() {
      return (
        <div>
          <h2>
            HOC Debugger Component
          </h2>
          <p>
            Props
          </p>
          <pre>{stringify(this.props)}</pre>
          <p>
            State
          </p>
          <pre>{stringify(this.state)}</pre>
          {super.render()}
        </div>
      );
    }
  };
};
