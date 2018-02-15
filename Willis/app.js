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
        name: 'Alumni Map',
        description: 'Alumni Cluster Map',
        url: '//urspatial.redlands.edu/apps/alumni/clusters',
        id: 2
    }, {
        name: 'Campus Trees',
        description: 'Trees around campus',
        url: '//urspatial.redlands.edu/apps/campustrees',
        id: 3
    }, {
        name: 'Tetiaroa Atoll',
        description: 'A travel journal with maps',
        url: '//univredlands.maps.arcgis.com/apps/MapJournal/index.html?appid=3934c41bc1614c02b099b945bfeee2ad',
        id: 4
    }, {
        name: 'Redlands Slideshow',
        description: 'Slideshow',
        url: '//myredlandsapps.redlands.edu/DigitalSignsManagement/Display/WillisCenter01',
        id: 5
    }
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


$(function() {
    $(".iframeContainer[data-id=0]").show();
    var j;
    $(document).mousemove(function() {
        clearTimeout(j);
        $('html').css({ cursor: 'default' });
        j = setTimeout(function() {
            $('html').css({ cursor: 'none' });
        }, 3000);
    });
});