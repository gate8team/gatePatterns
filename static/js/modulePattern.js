/*
 * This is example of Module patter on native js: realization of user cart
 * */

'use strict';

var userCart = (function () {
    var cartItems = [];

    return {
        addItem: function (item) {
            cartItems.push(item);
            return this;
        },
        getItemsCount: function () {
            return cartItems.length;
        },
        getTotalPrice: function () {
            var count = this.getItemsCount(),
                price = 0;

            while (count--) {
                price += cartItems[count].price;
            }

            return price;
        }
    };
}());