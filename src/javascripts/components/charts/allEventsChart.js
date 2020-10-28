import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import eventData from '../../helpers/data/eventData';

const getEventName = () => new Promise((resolve, reject) => {
  eventData.getAllEvents().then((response) => {
    const arrayOfDataObjects = [];
    response.forEach((item) => {
      eventData.getAllEventObjectsPrices(item.firebaseKey).then((price) => {
        const dataObject = {
          eventName: item.name,
          eventPrice: price
        };
        arrayOfDataObjects.push(dataObject);
      });
    });
    console.warn('arrayOfDataObjects', arrayOfDataObjects);
    // resolve(arrayOfDataObjects);
  }).catch((error) => reject(error));
});

const makeChart = () => {
  getEventName();
  const chart = am4core.create('chartdiv', am4charts.XYChart);

  chart.data = [];

  const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = 'eventName';
  categoryAxis.title.text = 'Events';

  const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text = 'Cost For Event';

  const series = chart.series.push(new am4charts.ColumnSeries());
  series.name = 'Cost';
  series.dataFields.valueY = 'eventPrice';
  series.dataFields.categoryX = 'eventName';
  series.columns.template.tooltipText = 'Series: {name}\nCategory: {categoryX}\nValue: {valueY}';
  series.columns.template.fill = am4core.color('#48725E'); // fill bar color

  chart.legend = new am4charts.Legend();

  chart.cursor = new am4charts.XYCursor();

  chart.scrollbarX = new am4core.Scrollbar();
  chart.scrollbarY = new am4core.Scrollbar();
};

export default { makeChart };
