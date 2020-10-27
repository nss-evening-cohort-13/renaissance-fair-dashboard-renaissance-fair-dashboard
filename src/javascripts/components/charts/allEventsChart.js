import am4core from '@amcharts/amcharts4/core';
import am4charts from '@amcharts/amcharts4/charts';

const chart = am4core.create('chartdiv', am4charts.XYChart);

chart.data = [
  {
    eventName: 'Event1',
    eventPrice: 501,
  },
  {
    eventName: 'Event2',
    eventPrice: 301,
  },
  {
    eventName: 'Event3',
    eventPrice: 201,
  },
  {
    eventName: 'Event4',
    eventPrice: 165,
  },
  {
    eventName: 'Event5',
    eventPrice: 139,
  },
  {
    eventName: 'Event6',
    eventPrice: 128,
  },
  {
    eventName: 'Event7',
    eventPrice: 99,
  },
  {
    eventName: 'Event8',
    eventPrice: 60,
  },
  {
    eventName: 'Event9',
    eventPrice: 50,
  },
];

const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.eventName = 'eventName';
categoryAxis.title.text = 'Events';

const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = 'Cost For Event';

const series = chart.series.push(new am4charts.ColumnSeries());
series.name = 'Sales';
series.columns.template.tooltipText = 'Series: {name}\nCategory: {categoryX}\nValue: {valueY}';
series.columns.template.fill = am4core.color('#104547'); // fill
series.dataFields.valueY = 'eventPrice';
series.dataFields.categoryX = 'eventName';

chart.legend = new am4charts.Legend();
// chart.legend.align('bottom');

chart.cursor = new am4charts.XYCursor();

chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarY = new am4core.Scrollbar();
