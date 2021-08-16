const StockChartGen = async (urlname, organ_name) => {
    const url = `http://3.35.243.239/api/info?search=${urlname}`
    const getName = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    var organ = await getName.json();

    const organData = []

    await organ.map(item => {
        organData.push(item.temp[0])
    })

    // console.log(organData)


    await Highcharts.stockChart('stock', {

        rangeSelector: {
            selected: 1
        },

        title: {
            text: `${organ_name} Spline`,
            style: {
                fontSize: '30px'
            }
        },

        legend: {
            enabled: true
        },

        series: [{
            name: `온도`,
            data: organData,
            type: 'spline',
            tooltip: {
                valueDecimals: 2
            }
        }, ],

        rangeSelector: {
            allButtonsEnabled: true,
            buttons: [{
                type: 'day',
                count: 1,
                text: 'Day',
                dataGrouping: {
                    forced: true,
                    units: [
                        ['sec', [1]]
                    ]
                }
            }, {
                type: 'year',
                count: 1,
                text: 'Week',
                dataGrouping: {
                    forced: true,
                    units: [
                        ['week', [1]]
                    ]
                }
            }, {
                type: 'all',
                text: 'Month',
                dataGrouping: {
                    forced: true,
                    units: [
                        ['month', [1]]
                    ]
                }
            }],
            buttonTheme: {
                width: 60
            },
            selected: 3
        },

    });

}
export default StockChartGen;