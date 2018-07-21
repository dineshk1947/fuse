
(function ()
{
    'use strict';

    angular
        .module('app.sample', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.sample', {
                url    : '/sample',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/sample/sample.html',
                        controller : 'SampleController as vm'
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

        msNavigationServiceProvider.saveItem('sample', {
           title : 'Master Data Managment',
           group : true,
           weight: 1
       });
       // Apps.Dashboards
       msNavigationServiceProvider.saveItem('sample.md', {
           title : 'Master Data Managment',
           icon  : 'icon-tile-four',
           class : 'navigation-dashboards',
           weight: 1
       });
       // msNavigationServiceProvider.saveItem('sample.md.tou', {
       //     title      : 'Sample',
       //     state      : 'app.sample',
       //     translate  : 'Reuse',
       //     class      : 'navigation-dashboards project-dashboard',
       //     weight     : 2
       // });
       msNavigationServiceProvider.saveItem('sample.md.seasons', {
           title      : 'Seasons',
           state      : 'app.seasons',
           translate  : 'Seasons',
           class      : 'navigation-dashboards project-dashboard',
           weight     : 2
       });
       msNavigationServiceProvider.saveItem('sample.md.reuse', {
           title      : 'Reuse',
           state      : 'app.reuse',
           translate  : 'Resuse',
           class      : 'navigation-dashboards project-dashboard',
           weight     : 3
       });


    }
})();
