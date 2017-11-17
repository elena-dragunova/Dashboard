$(document).ready(function () {

    //Удаление индикатора загрузки

    $('.loading').remove();

    //Активация всплывающих подсказок

    $('[data-toggle = "tooltip"]').tooltip();

    //Активация плагина для диаграмм EasyPieChart

    $('.round-chart').easyPieChart({
        'scaleColor': false,
        'lineWidth': 20,
        'lineCap': "butt",
        'barColor': '#6d5cae',
        'trackColor': '#e5e9ec',
        'size': 190
    });

    //Настройка графиков Highcharts

     var spiderChart = Highcharts.chart ('spider-chart', {


        chart: {
            polar: true,
            type: 'area'
        },

        title: {
            text: ''
        },

        xAxis: {
            categories: ['Taming', 'Acessory', 'Development', 'Grooming', 'Awareness', 'Ration'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style = "color:{series.color}">{series.name}: <b>${point.y:,.0f}</b></span><br/>'
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },

        series: [
            {
                name: 'Allocated resources',
                data: [45000, 39000, 58000, 63000, 38000, 93000],
                pointPlacement: 'on',
                color: '#676f84'
            },
            {
                name: 'Spent resources',
                data: [83000, 49000, 60000, 35000, 77000, 90000],
                pointPlacement: 'on',
                color: '#f35958'
            }
        ]
    });

    var stackedArea = Highcharts.chart ('stacked-area', {


        chart: {
            type: 'areaspline'
        },

        title: {
            text: ''
        },

        xAxis: {
            categories: [100, 110, 120, 125, 127, 129, 135, 150, 160],
            lineWidth: 0
        },

        yAxis: {
            title: {
                text: 'Ration stock'
            },
            lineWidth: 0,
            min: 0
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style = "color:{series.color}">{series.name}: <b>${point.y:,.0f}</b></span><br/>'
        },

        series: [
            {
                name: 'First ration stock',
                data: [0, 0, 3000, 10000, 30000, 27000, 28000, 26000, 10000],
                pointPlacement: 'on',
                color: '#1bc98e'
            },
            {
                name: 'Second ration stock',
                data: [0, 0, 0, 5000, 10000, 30000, 48000, 30000, 20000 ],
                pointPlacement: 'on',
                color: '#676f84'
            }
        ]
    });

    var areaChart = Highcharts.chart('area-chart', {

        title: {
            text: ''
        },

        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },

        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    style: {
                        fontWeight: '300'
                    }
                }
            }
        },

        series: [{
            type: 'pie',
            name: 'Time share',
            data: [
                ['Front yard', 10.38],
                ['Closet', 26.33],
                ['Swim pool', 51.03],
                ['Main building', 4.77],
                ['Kitchen', 3.93]
            ]
        }]
    });

     //Активация плагина Switchery

    var elems, switcheryOpts;

    elems = Array.prototype.slice.call(document.querySelectorAll('.switchery'));

    switcheryOpts = {
        color: '#1bc98e'
    };

    elems.forEach(function (el) {
        var switchery = new Switchery(el, switcheryOpts);
    });

    //Анимация прогресс-баров

    changeMultiplier = 0.2;
    window.setInterval(function () {
        var freeSpacePercentage;

        freeSpacePercentage = $('#free-space').text();
        freeSpacePercentage = parseFloat(freeSpacePercentage);

        delta = changeMultiplier * (Math.random() < 0.5 ? -1.0 : 1.0);

        freeSpacePercentage = freeSpacePercentage + freeSpacePercentage * delta;
        freeSpacePercentage = parseInt(freeSpacePercentage);

        $('#free-space').text(freeSpacePercentage + '%');
    }, 2000);

    //Отображение и скрытие формы поиска

    $('#search-icon').on('click', function (e) {
        e.preventDefault();
        $('form#search').slideDown('fast');
        $('form#search input:first').focus();
    });

    $('form#search input').on('blur', function (e) {
        if($('#search-icon').is(':visible')) {
            $('form#search').slideUp('fast');
        }
    });

});