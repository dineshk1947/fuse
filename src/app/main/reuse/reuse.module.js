(function ()
{
    'use strict';

    angular
        .module('app.reuse', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.reuse', {
                url    : '/reuse',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/reuse/reuse.html',
                        controller : 'ReuseController'
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
