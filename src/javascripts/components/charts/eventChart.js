import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

// Create chart instance
const makeChart = (values) => {
  const chart = am4core.create('chartdiv', am4charts.XYChart);

  // Add data
  chart.data = [{
    category: 'Food',
    cost: values[0]
  }, {
    category: 'Shows',
    cost: values[1]
  }, {
    category: 'Souvenirs',
    cost: values[2]
  }, {
    category: 'Staff',
    cost: values[3]
  }];

  // Create axes

  const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = 'category';
  categoryAxis.title.text = 'Category';

  const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text = 'Cost';
  valueAxis.min = 0;

  // Create series
  const series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueY = 'cost';
  series.dataFields.categoryX = 'category';
  series.name = 'Visits';

  const columnTemplate = series.columns.template;
  columnTemplate.strokeWidth = 2;
  columnTemplate.strokeOpacity = 1;
};

export default { makeChart };
