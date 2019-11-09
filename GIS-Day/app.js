var autoReload = true;
var timeoutMinutes = 60;
var idleTimer;
var mySites = [

    {
        name: 'Bulldogs Today',
        description: "Map of current bulldogs around the world",
        url: '//urspatial.redlands.edu/apps/Students',
        id: 0
    },
    {
        name: 'Alumni Map',
        description: 'Alumni Cluster Map',
        url: '//urspatial.redlands.edu/apps/alumni/clusters',
        id: 1
    },
    // {
    //     name: 'Campus Map',
    //     description: 'UofR Campus Map',
    //     url: '//campusmap.redlands.edu/',
    //     id: 1
    // },
    {
        name: 'Bulldogs Abroad!',
        description: 'Travel abroad opportunities',
        url: '//urspatial.redlands.edu/apps/bulldogsabroad',
        id: 2
    },
    {
        name: 'First-Year Journeys',
        description: 'First-Year Journey opportunities',
        url: '//urspatial.redlands.edu/apps/fyj',
        id: 4
    }, {
        name: 'Campus Trees',
        description: 'Trees around campus',
        url: '//urspatial.redlands.edu/apps/campustrees',
        id: 3
    },
    // {
    //     name: 'EarthWindMap',
    //     description: "Globe",
    //     url: '//earth.nullschool.net/#current/wind/surface/level/orthographic=-102.14,33.27,422',
    //     id: 5
    // },
    // {
    //     name: 'Geo-Bucket List',
    //     description: 'Bucket list app',
    //     url: 'https://univredlands.maps.arcgis.com/apps/opsdashboard/index.html#/33d9a834da2c4c40907eaf93293df144',
    //     id: 5
    // },
    {
        name: 'Ruff-Ruff Reviews',
        description: "Redlands reviews for students by students",
        url: '//urspatial.redlands.edu/apps/ruffreviews',
        id: 5
    }

    // , {
    //     name: 'Mayterm - Panama',
    //     description: 'Panamapping',
    //     url: '//univredlands.maps.arcgis.com/apps/Cascade/index.html?appid=ea1b2b8ca8ed486f9fdda34b8b6c5999',
    //     id: 6
    // }
];

var wstsApp = angular.module('wstsApp', []);
wstsApp.controller('SitesController', function SitesController($scope) {
    $scope.sites = mySites;
    $scope.currentSelected = 0;


    $scope.siteSelected = function(s) {
        $scope.currentSelected = s;
        $(".iframeContainer").hide();
        $(".iframeContainer[data-id=" + s + "]").show();
    };
});

$(document).ready(function() {

    $("iframe").each(function(index) {
        //$(this).contents().find("body").on('click', function(event) { alert('test'); });
        //$($("iframe")[index]).on('click', function(e) { alert('test'); });
        //$(this).click(function(event) { alert('test'); });
        //console.log( index + ": " + $( this ).text() );
    });

    // $('iframe').load(function() {
    //     $(this).contents().find("body").on('click', function(event) { alert('test'); });
    // });
})
$(function() {
    layoutPage();
    $(".iframeContainer[data-id=0]").show();

    //this is not working because we're not getting all the events in the iframe. Look this up later.
    //setIdleTimer();
    $(this).mousedown(function() {
        console.log("clearing iframe timer");
        clearTimeout(idleTimer);
        //setIdleTimer();
    });
    $(document).resize(function() {
        layoutPage();
    });
    // $('iframe').load(function() {
    //     $(this).contents().find("body").on('click', function(event) { alert('test'); });
    // });
});

function layoutPage() {
    $(".brand").height($(".lower_nav").height() - 10)
}

function setIdleTimer() {
    idleTimer = setTimeout(function() {
        window.location.reload(true);
        console.log("iframe is idle");
    }, timeoutMinutes * 60000);
}