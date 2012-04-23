(function ($) {

    var settings = {
        'velocity': 1,
        'done': null
    };

    var decreaseBar = function (barElement) {
        $(barElement).stop();

        var barElementWidth = $(barElement).width();
        $(barElement).animate({ width: 0 }, settings.velocity, function () {
            if (0 >= $(barElement).width() && $.isFunction(settings.done)) {
                settings.done();
            }
        });
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
                $(this).width($(this).parent().width());
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