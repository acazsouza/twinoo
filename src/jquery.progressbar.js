(function ($) {

    var settings = {
        'timeBar': 5,
        'done': null
    };

    var $progressBar, $bar;

    var decreaseBar = function () {
        insertCSSTransitions();
        $bar.width(0);
    }

    var insertCSSTransitions = function () {
        $bar.attr('style', 'transition:width ' + settings.timeBar + 's linear; -moz-transition:width ' + settings.timeBar + 's linear; -webkit-transition:width ' + settings.timeBar + 's linear; -o-transition:width ' + settings.timeBar + 's linear');
    }

    var removeCSSTransitions = function () {
        $bar.removeAttr('style');
    }

    var methods = {
        init: function (options) {
            settings = $.extend(settings, options);

            $progressBar = $(this);
            $bar = $progressBar.find('.bar');

            if ($.isFunction(settings.done))
                $bar.bind('transitionEnd', settings.done);

            $bar.bind('webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd', function () {
                $bar.trigger('transitionEnd');
            });

            return $progressBar;
        },
        start: function () {
            return this.each(function () {
                decreaseBar();
            });
        },
        reset: function (percentage) {
            if (arguments.length > 0 && typeof arguments[0] == 'number') {
                settings.timeBar = (settings.timeBar - ((settings.timeBar / 100) * percentage));
            }

            removeCSSTransitions();
        },
        getSettings: function () {
            return settings;
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