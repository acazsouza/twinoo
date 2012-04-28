(function ($) {

    var settings = {
        'timeBar': 5,
        'done': null
    };

    var decreaseBar = function (progressBar) {
        insertCSSTransitions(progressBar);
        $(progressBar).find('.bar').width(0);

        if ($.isFunction(settings.done)) {
            $(progressBar).find('.bar').bind('transitionEnd', settings.done);
        }
    }

    var insertCSSTransitions = function (progressBar) {
        var timeBar = settings.timeBar;
        $(progressBar).find('.bar').attr('style', 'transition:width ' + timeBar + 's; -moz-transition:width ' + timeBar + 's; -webkit-transition:width ' + timeBar + 's; -o-transition:width ' + timeBar + 's');
    }

    var removeCSSTransitions = function (progressBar) {
        $(progressBar).find('.bar').removeAttr('style');
    }

    var methods = {
        init: function (options) {
            settings = $.extend(settings, options);

            return this.each(function () {
                $(this).find('.bar').live('webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd', function () {
                    $(this).trigger('transitionEnd');
                });
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