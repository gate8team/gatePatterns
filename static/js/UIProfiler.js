var UIProfiler = (function(){
    var instance,
        notSupportedMessage = 'User Timing API is not available...';

    var createTimer = function () {

        var getTimeFromNavigationStart = function() {
            return window.performance.now();
        };

        var startMeasure = function(markName) {
            window.performance.mark(markName + ' started');
        };

        var endMeasure = function(markName) {
            window.performance.mark(markName + ' ended');
        };

        var getMeasurements = function(markName) {
            window.performance.measure(markName + ' measured', markName + ' started', markName + ' ended');
            return window.performance.getEntriesByName(markName + ' measured')[0];
        };

        return {
            getTimeFromNavigationStart: function(){
                return getTimeFromNavigationStart();
            },
            startMeasure: function(markName) {
                startMeasure(markName);
            },
            endMeasure: function(markName) {
                endMeasure(markName);
            },
            getMeasurements: function(markName) {
                var time = getMeasurements(markName);
                return time.duration;
            }
        };
    };

    return {
        getInstance: function() {
            if (window.performance == null) {
                throw new Error(notSupportedMessage);
            }

            if (!instance) {
                instance = createTimer();
            }

            return instance;
        }
    }
})();
