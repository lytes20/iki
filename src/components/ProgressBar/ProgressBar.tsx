import React from 'react';

interface Props {
  /** Percent of progress completed */
  percent: number;

  /** Bar width */
  width: number;

  /** Bar height */
  height: number;
}

const defaultProps: Props = {
  percent: 10,
  width: 10,
  height: 5,
};

function ProgressBar(props: Props) {
  function getColor(percent: number) {
    if (props.percent === 100) return 'green';
    return props.percent > 50 ? 'lightgreen' : 'red';
  }

  function getWidthAsPercentOfTotalWidth() {
    return (props.width * (props.percent / 100));
  }

  const { percent, width, height } = props;
  return (
    <div style={{ border: 'solid 1px lightgray', width: width }}>
      <div
        style={{
          width: getWidthAsPercentOfTotalWidth(),
          height,
          backgroundColor: getColor(percent),
        }}
      />
    </div>
  );
}

ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
