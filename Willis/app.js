var autoReload = true;
var timeoutMinutes = 60;
var idleTimer;
var mySites = [{
        name: 'Welcome Visitors!',
        description: "Map of today's visitors",
        url: '//urspatial.redlands.edu/apps/CampusVisitors',
        id: 0
    },
    {
        name: 'Campus Map',
        description: 'UofR Campus Map',
        url: '//campusmap.redlands.edu/',
        id: 1
    },
    {
        name: 'Current Students',
        description: 'Current UofR Students',
        url: '//urspatial.redlands.edu/apps/students',
        id: 2
    },
    {
        name: 'Alumni Map',
        description: 'Alumni Cluster Map',
        url: '//urspatial.redlands.edu/apps/alumni/clusters',
        id: 3
    }, {
        name: 'Bulldogs Abroad!',
        description: 'Travel abroad opportunities',
        url: '//urspatial.redlands.edu/apps/bulldogsabroad',
        id: 4
    },
    {
        name: 'First-Year Journeys',
        description: 'First-Year Journey opportunities',
        url: '//urspatial.redlands.edu/apps/fyj',
        id: 5
    }, {
        name: 'Campus Trees',
        description: 'Trees around campus',
        url: '//urspatial.redlands.edu/apps/campustrees',
        id: 6
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
    $(".iframeContainer[data-id=0]").show();

    //this is not working because we're not getting all the events in the iframe. Look this up later.
    //setIdleTimer();
    $(this).mousedown(function() {
        console.log("clearing iframe timer");
        clearTimeout(idleTimer);
        //setIdleTimer();
    });
    // $('iframe').load(function() {
    //     $(this).contents().find("body").on('click', function(event) { alert('test'); });
    // });
});

function setIdleTimer() {
    idleTimer = setTimeout(function() {
        window.location.reload(true);
        console.log("iframe is idle");
    }, timeoutMinutes * 60000);
}