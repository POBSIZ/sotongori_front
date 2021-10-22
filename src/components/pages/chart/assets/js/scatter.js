import urlAdr from "../../../../../url";

const ScatterChartGen = async (urlname) => {

    const url = `${urlAdr}/api/sotong/info?search=${urlname}`
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

    await Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    await Highcharts.chart('scatter', {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: '시간대 별 방문자 체온 분포도',
            style: {
                fontSize: '30px'
            }
        },
        xAxis: {
            type: 'datetime',
            title: {
                enabled: true,
                text: 'Time'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Temp'
            }
        },
        legend: {
            // layout: 'vertical',
            // align: 'left',
            // verticalAlign: 'top',
            // x: 100,
            // y: 70,
            // floating: true,
            // backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
            // borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    // pointFormat: '{point.x}, {point.y}℃',
                    pointFormat: '{point.y} ℃',
                }
            }
        },
        series: [{
            name: 'Person',
            color: 'rgba(119, 152, 191, .5)',
            data: organData
        }],
    });
}

export default ScatterChartGen;