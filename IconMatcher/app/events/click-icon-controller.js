(function () {
    'use strict';

    angular
        .module('baseApp.click-icon-module')
        .controller('ClickIconCtrl', ClickIconCtrl)

    var clickCount = 0;
    var preIndex = 0;
    var preClick = "";

    function ClickIconCtrl() {

        var vm = this;
        {
            vm.ExampleText = "Example Text",
            vm.SetClick = SetClick
        }

    }

    function SetClick(dataIcon, dataClass, index) {
        clickCount++;
        openIcon(index);

        if (clickCount == 1) {
            preClick = dataIcon;
            preIndex = index;
        }

        if (clickCount == 2) {
            if (preClick == dataIcon) {
                winner(index, preIndex);
            } else {
                allCloseIcon();
            }

            clickCount = 0;
        }
    };

    function openIcon(index) {
        var element = angular.element('.container > .row > .col-md-12 > .game-shell > .icon-item-group > li');

        angular.element(element).each(function (i, v) {

            if (i == index)
                angular.element(element[i]).addClass('icon-item-opened');

        })
    };

    function closeIcon(index) {
        var element = angular.element('.container > .row > .col-md-12 > .game-shell > .icon-item-group > li');

        angular.element(element).each(function (i, v) {

            if (i == index)
                angular.element(element[i]).removeClass('icon-item-opened');

        })
    };

    function allCloseIcon() {
        var element = angular.element('.container > .row > .col-md-12 > .game-shell > .icon-item-group > li');
        angular.element(element).removeClass('icon-item-opened');
    };

    function winner(index, preIndex) {
        var element = angular.element('.container > .row > .col-md-12 > .game-shell > .icon-item-group > li');

        angular.element(element).each(function (i, v) {

            if (i == index) {
                angular.element(element[i]).css('background-color', '#f2f2f2');
                angular.element(element[preIndex]).css('background-color', '#f2f2f2');
            }
        })
    }

})();