const showChart = async (e, company_name)=>{
    const url = `http://3.35.43.53/api/stockapi/data/${company_name}`;
    var postItm = [];
    const getList = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    postItm = await getList.json();

    var ser = [];

    var ser_close = { name: `종가`, data: postItm.close, type: 'spline', tooltip: {valueDecimals: 2} }
    var ser_high = { name: `고가`, data: postItm.high, type: 'spline', tooltip: {valueDecimals: 2} }
    var ser_low = { name: `저가`, data: postItm.low, type: 'spline', tooltip: {valueDecimals: 2} }
    var ser_open = { name: `시가`, data: postItm.open, type: 'spline', tooltip: {valueDecimals: 2} }
    var ser_vol = { name: `거래량`, data: postItm.vol, type: 'spline', tooltip: {valueDecimals: 2} }
    
    e.includes('close') ? ser.push(ser_close):e;
    e.includes('high') ? ser.push(ser_high):e;
    e.includes('low') ? ser.push(ser_low):e;
    e.includes('open') ? ser.push(ser_open):e;
    e.includes('vol') ? ser.push(ser_vol):e;

    Highcharts.stockChart('container', {
        
        rangeSelector: {
            selected: 1
        },

        title: {
            text: `${company_name} Stock Price`
        },

        legend: {
            enabled: true
        },

        series: ser, 

        rangeSelector: {
            allButtonsEnabled: true,
            buttons: [{
                type: 'month',
                count: 1,
                text: 'Day',
                dataGrouping: {
                    forced: true,
                    units: [['day', [1]]]
                }
            }, {
                type: 'year',
                count: 1,
                text: 'Week',
                dataGrouping: {
                    forced: true,
                    units: [['week', [1]]]
                }
            }, {
                type: 'all',
                text: 'Month',
                dataGrouping: {
                    forced: true,
                    units: [['month', [1]]]
                }
            }],
            buttonTheme: {
                width: 60
            },
            selected: 2
        },

    });

}
// export default chartFunc;
export default showChart;