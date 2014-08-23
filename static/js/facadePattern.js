/*
 * This is example of Module patter on native js: realization of process behavior
 * */

'use strict';

var counter = (function () {
    var _facadeObject = {
        value: 0,
        getCurrentValue: function () {
            console.log('Current value = {val}'.replace('{val}', this.value));
            return this.value;
        },
        setCurrentValue: function (value) {
            console.log('Current value = {val}'.replace('{val}', this.value));
            this.value = value;
            return this;
        },
        countToZero: function () {
            while (--this.value) {
                console.log(this.value + '...');
            }

            console.log('Start!');
            return this;
        }
    };

    return {
        facade: function (args) {
            _facadeObject.setCurrentValue(args.val);
            _facadeObject.getCurrentValue();
            if (args.countToZero) {
                _facadeObject.countToZero();
            }
        }
    }
}());