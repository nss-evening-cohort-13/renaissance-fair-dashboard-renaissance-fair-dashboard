import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import eventData from '../../helpers/data/eventData';

const getDataArray = () => new Promise((resolve, reject) => {
  const dataArray = [];
  eventData.getAllEvents().then((eventObjects) => {
    eventObjects.forEach((eventObject) => {
      const eventName = eventObject.name;
      const price = eventData.getAllEventObjectsPrices(eventObject.firebaseKey);
      Promise.all([eventName, price]).then((values) => {
        const dataObject = {
          eventName: values[0],
          eventPrice: values[1]
        };
        dataArray.push(dataObject);
      });
    });
    resolve(dataArray);
  }).catch((error) => reject(error));
});

const makeChart = () => {
  const chart = am4core.create('allEventsChartDiv', am4charts.XYChart);

  const allTheStuff = getDataArray();
  Promise.all([allTheStuff]).then((values) => {
    const theData = values[0];
    setTimeout(() => {
      chart.data = theData;
    }, 3000);
  });

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

  chart.cursor = new am4charts.XYCursor();

  chart.scrollbarX = new am4core.Scrollbar();
  chart.scrollbarY = new am4core.Scrollbar();
};

export default { makeChart };
