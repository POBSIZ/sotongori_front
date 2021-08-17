const BarChartGen = async (urlname, organ_name) => {
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
        // console.log(new Date(item.temp[0][0]).toString())
    })

    // console.log(organData)

    await Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    await Highcharts.chart('bar', {
        chart: {
            type: 'column'
        },
        title: {
            text: `${organ_name} Bar`,
            style: {
                fontSize: '30px'
            }
        },
        xAxis: {
            type: 'datetime',
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Temp'
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Person',
            data: organData
        }]
    });

}
export default BarChartGen;