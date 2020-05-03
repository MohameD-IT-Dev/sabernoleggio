(function () {
    'use strict';

    angular.module('nf.config')
        .config(configure)
        .run(runBlock);

    configure.$inject = [
        '$urlRouterProvider',
        '$qProvider',
        '$httpProvider'
    ];

    function configure($urlRouterProvider, $qProvider, $httpProvider) {
        $urlRouterProvider.when('', '/home');
        $urlRouterProvider.otherwise('/home');

        $qProvider.errorOnUnhandledRejections(false);

        configureHttpProvider();

        function configureHttpProvider(){
            if (!$httpProvider.defaults.headers.get) {
                $httpProvider.defaults.headers.get = {};
            }
            // Answer edited to include suggestions from comments
            // because previous version of code introduced browser-related errors
            //disable IE ajax request caching
            $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
            // extra
            $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
            $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
        }

    }
    //run phase
    runBlock.$inject= [
        '$rootScope',
        '$log',
        '$urlRouter',
        '$state'
    ];

    function runBlock($rootScope, $log, $urlRouter, $state) {
        $log.debug("*** config.js runBlock ***");
        $rootScope.$on('$stateChangeStart', stateChangeStartHandler);

        function stateChangeStartHandler(event, toState, toParams, fromState, fromParams) {
            $log.info("*** config.js ***");
        }

	}

})();