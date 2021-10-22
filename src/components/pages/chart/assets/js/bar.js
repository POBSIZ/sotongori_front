import urlAdr from "../../../../../url";

const BarChartGen = async (urlname, organ_name) => {
    console.log(urlname)
    const url = `${urlAdr}/api/sotong/info/${urlname}`
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

    var prev_hr = 0;
    await organ.map(item => {
        var varArr = [];
        prev_hr = new Date(item.temp[0][0]).getHours()

        var du = Date.UTC(
            new Date(item.temp[0][0]).getFullYear(),
            new Date(item.temp[0][0]).getMonth(),
            new Date(item.temp[0][0]).getDay(),
            new Date(item.temp[0][0]).getHours(),
            new Date(item.temp[0][0]).getMinutes(),
            new Date(item.temp[0][0]).getSeconds(),
        )
        // console.log(du)
        console.log(new Date(item.temp[0][0]).toString().trim('hour'))

        new Date(item.temp[0][0]).getHours() == prev_hr  ? 
            varArr.push([ 
                Date.UTC(
                    new Date(item.temp[0][0]).getFullYear(),
                    new Date(item.temp[0][0]).getMonth(),
                    new Date(item.temp[0][0]).getDay(),
                    prev_hr
                ), 
                item.temp[0][1]
            ])
        :
            varArr.push([ 
                Date.UTC(
                    new Date(item.temp[0][0]).getFullYear(),
                    new Date(item.temp[0][0]).getMonth(),
                    new Date(item.temp[0][0]).getDay(),
                    new Date(item.temp[0][0]).getHours(),
                ), 
                item.temp[0][1]
            ])

        // organData.push(varArr[0])
        organData.push(item.temp[0])
        // console.log(new Date(item.temp[0][0]).toString())

        // console.log(new Date(item.temp[0][0]).getHours())
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