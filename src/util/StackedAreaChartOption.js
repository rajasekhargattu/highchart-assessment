import { chartData } from './StackedAreaChartData';
export const options = {
  chart: {
    type: 'area'
  },
  title: {
    text: chartData.title
  },

  xAxis: {
    categories: chartData.years,
    tickmarkPlacement: 'on',
    title: {
      enabled: false
    }
  },
  yAxis: {
    title: {
      text: chartData.yAxisTitle
    },
    labels: {
      formatter: function() {
        return this.value / 10000000;
      }
    }
  },
  tooltip: {
    split: true
  },
  plotOptions: {
    pointStart: 2012,
    area: {
      stacking: 'normal',
      lineColor: '#666666',
      lineWidth: 1
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  series: [
    {
      name: 'BaseLine',
      data: chartData.baseLine,
      fillOpacity: 0
    },
    {
      name: 'Scen 1',
      data: chartData.scen1
    },
    {
      name: 'Scen 2',
      data: chartData.scen2
    }
  ],
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }
    ]
  }
};
