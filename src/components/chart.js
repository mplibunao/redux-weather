import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Chart = ({temp, color}) => {
  return (
    <div>
      <Sparklines height={20} width={100} data={temp}>
        <SparklinesLine color={color} />
      </Sparklines>
    </div>
  );
}

export default Chart;