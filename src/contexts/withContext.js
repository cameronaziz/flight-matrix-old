import React from 'react';

function withContext(Consumer, WrappedComponent, contextName) {
  return function ContextComponent(props) {
    return (
      <Consumer>
        {(context) => {
          const contextProp = {};
          contextProp[contextName || 'context'] = context;
          return <WrappedComponent {...props} {...contextProp} />;
        }}
      </Consumer>
    );
  };
}


export default withContext;
