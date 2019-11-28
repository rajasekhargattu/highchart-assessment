import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { options } from '../../util/StackedAreaChartOption';

const StackedAreaChart = props => (
  <HighchartsReact highcharts={Highcharts} options={options} />
);

export default StackedAreaChart;
