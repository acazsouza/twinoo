(function ($) {

    var settings = {
        'timeBar': 5,
        'done': null
    };

    var decreaseBar = function (barElement) {
        insertCSSTransitions(barElement);
        $(barElement).find('.bar').width(0);
    }

    var insertCSSTransitions = function (barElement) {
        var timeBar = settings.timeBar;
        $(barElement).find('.bar').attr('style', 'transition:width ' + timeBar + 's; -moz-transition:width ' + timeBar + 's; -webkit-transition:width ' + timeBar + 's; -o-transition:width ' + timeBar + 's');
    }

    var removeCSSTransitions = function (barElement) {
        $(barElement).find('.bar').removeAttr('style');
    }

    var methods = {
        init: function (options) {
            settings = $.extend(settings, options);

            return this.each(function () {

            });
        },
        start: function () {
            return this.each(function () {
                decreaseBar(this);
            });
        },
        reset: function () {
            return this.each(function () {
                removeCSSTransitions(this);
            });
        }
    };

    $.fn.progressBar = function (method) {

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.progressBar');
        }

    };

})(jQuery)