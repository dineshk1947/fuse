(function ()
{
    'use strict';

    angular
        .module('app.seasons', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.seasons', {
                url    : '/seasons',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/seasons/seasons.html',
                        controller : 'SeasonsController'
                    }
                },
                resolve: {
                    SampleData: function (msApi)
                    {
                        return msApi.resolve('sample@get');
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/sample');

        // Api
        msApiProvider.register('sample', ['app/data/sample/sample.json']);


    }
})();
