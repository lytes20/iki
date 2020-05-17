import React from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

class CodeExample extends React.Component {
  componentDidMount() {
    console.log('Hljs', hljs);
    hljs.registerLanguage('javascript', javascript);
    hljs.highlightBlock(this.element);
  }

  render() {
    return (
      <pre
        ref={(ref) => {
          this.element = ref;
        }}
      >
        <code>{this.props.children}</code>
      </pre>
    );
  }
}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CodeExample;
