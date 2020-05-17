import React from 'react';

interface Props {
  /** Message to display */
  message: string;
}

const defaultProps: Props = {
  message: 'Iki Hello World',
};
/** My first reusable component */
function HelloWorld({ message }: Props) {
  return <div>Hello {message}</div>;
}

HelloWorld.defaultProps = defaultProps;

export default HelloWorld;
