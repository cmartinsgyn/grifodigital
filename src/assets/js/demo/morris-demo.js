
$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{ Ano: '2010', aeronave01: 2666, aeronave02: null, aeronave03: 2647 },
            { Ano: '2011', aeronave01: 2778, aeronave02: 2294, aeronave03: 2441 },
            { Ano: '2012', aeronave01: 4912, aeronave02: 1969, aeronave03: 2501 },
            { Ano: '2013', aeronave01: 3767, aeronave02: 3597, aeronave03: 5689 },
            { Ano: '2014', aeronave01: 6810, aeronave02: 1914, aeronave03: 2293 },
            { Ano: '2015', aeronave01: 5670, aeronave02: 4293, aeronave03: 1881 },
            { Ano: '2016', aeronave01: 4820, aeronave02: 3795, aeronave03: 1588 },
            { Ano: '2017', aeronave01: 7000, aeronave02: 5967, aeronave03: 5175 },
            { Ano: '2018', aeronave01: 7200, aeronave02: 4460, aeronave03: 2028 },
            { Ano: '2019', aeronave01: 8432, aeronave02: 5713, aeronave03: 1791 } ],
        xkey: 'Ano',
        ykeys: ['aeronave01', 'aeronave02', 'aeronave03'],
        labels: ['Aeronave01', 'Aeronave02', 'Aeronave03'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true,
        lineColors: ['#87d6c6', '#54cdb4','#1ab394'],
        lineWidth:2,
        pointSize:1,
    });

   

});
