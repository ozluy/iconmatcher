(function () {
    'use strict';

    angular
        .module('baseApp.click-icon-module')
        .controller('ClickIconCtrl', ClickIconCtrl)

   

    function ClickIconCtrl() {

        var vm = this;
        {
            vm.ExampleText = "Example Text",
            vm.SetClick = SetClick
        }

    }

    var clickCount = 0;
    var specialCount = 0;
    var preIndex = 0;
    var preIcon = "";
    var totalMatch = 0;
    function SetClick(currentIcon, currentIndex) {
        var element = angular.element('.container > .row > .col-md-12 > .game-shell > .icon-item-group > li');
        var successBtn = angular.element('.container > .row > .col-md-12 > .game-shell > .btn-success');
        console.log("Click Count:" + clickCount);
        if (clickCount == 69) {
            closeAllIcons();
            preIcon = currentIcon;
            preIndex = currentIndex;
            openIcon(currentIndex);
            specialCount = 1;
        }
        clickCount++;
        if (clickCount == 1) {
            preIcon = currentIcon;
            preIndex = currentIndex;
            openIcon(currentIndex);
        }
        if (clickCount == 2) {
            if (currentIndex != preIndex) {
                if (currentIcon != preIcon) {
                    openIcon(currentIndex);
                    clickCount = 69;
                }
                else {
                    clickCount = 0;
                    matched(currentIndex, preIndex);                   
                    angular.element(element[currentIndex]).addClass('disable-event');
                    angular.element(element[preIndex]).addClass('disable-event');
                    totalMatch++;
                    console.log("Total Match:" + totalMatch);
                    if (totalMatch == 8) {
                        angular.element(successBtn).addClass('animated flash infinite show');
                    }
                    
                }
            }
            else {
                clickCount--;
            }
        }
        if (specialCount > 0) {
            clickCount = specialCount;
            specialCount = 0;
        }
        
    };

    function openIcon(index) {
        var element = angular.element('.container > .row > .col-md-12 > .game-shell > .icon-item-group > li');

        angular.element(element).each(function () {

            
                angular.element(element[index]).addClass('icon-item-opened animated flipInX');
        })
    };

 
    function closeAllIcons() {
        var element = angular.element('.container > .row > .col-md-12 > .game-shell > .icon-item-group > li');
        angular.element(element).removeClass('icon-item-opened animated flipInX');
    };
   
    function matched(index, preIndex) {
        var element = angular.element('.container > .row > .col-md-12 > .game-shell > .icon-item-group > li');

        angular.element(element).each(function () {
            angular.element(element[index]).removeClass('icon-item-opened animated flipInX');
            angular.element(element[index]).addClass('icon-item-matched animated flash');
            angular.element(element[preIndex]).removeClass('icon-item-opened animated flipInX');
            angular.element(element[preIndex]).addClass('icon-item-matched animated flash');

        })
    }

})();