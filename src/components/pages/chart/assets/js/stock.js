import urlAdr from "../../../../../url";

const StockChartGen = async (urlname, organ_name) => {
    const url = `${urlAdr}/api/sotong/info?search=${urlname}`
    const getName = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            // Authorization: `jwt ${localStorage.getItem('token')}`
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
            buttons: [

                {
                    type: 'all',
                    text: 'All',
                    dataGrouping: {
                        forced: true,
                        units: [
                            ['sec', [1]]
                        ]
                    }
                },

            ],
            buttonTheme: {
                width: 60
            },
            selected: 3
        },

    });

}
export default StockChartGen;