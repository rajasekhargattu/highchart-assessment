import { chartData } from './StackedAreaChartData';
export const options = {
  chart: {},
  title: {
    text: chartData.title
  },

  xAxis: {
    allowDecimals: false,
    type: 'category',
    categories: chartData.years,
    labels: {
      formatter: function() {
        return this.value;
      }
    }
  },
  yAxis: {
    title: {
      text: chartData.yAxisTitle
    },
    labels: {
      formatter: function() {
        return this.value;
      }
    }
  },
  tooltip: {
    split: true
  },
  plotOptions: {
    series: {
      pointStart: 2012,
      fillColor: '#004d40'
    },

    area: {
      //   stacking: 'normal',
      enableMouseTracking: false,
      marker: {
        symbol: 'circle',
        radius: 3,
        states: {
          hover: {
            enabled: false
          }
        }
      }
    }
  },
  series: [
    {
      name: 'BaseLine',
      type: 'area',
      data: chartData.baseLine,
      color: '#004d40',
      zoneAxis: 'x',
      zones: [
        {
          value: 2020,
          fillColor: 'rgba(255,255,255,0.1)'
        },
        {
          value: 2023,
          fillColor: '#e91e63'
        },
        {
          color: 'rgba(255,255,255,0.1)'
        }
      ]
    },

    {
      name: 'Scen 1',
      data: chartData.scen1,
      type: 'area',
      color: '#e91e63',
      zoneAxis: 'x',
      zones: [
        {
          fillColor: '#e91e63'
        }
      ]
    },
    {
      name: 'Scen 2',
      type: 'area',
      data: chartData.scen2,
      color: '#4a148c',
      zoneAxis: 'x',
      zones: [
        {
          value: 2028,
          fillColor: 'rgba(255,255,255,1)'
        }
      ]
    }
  ]
};
