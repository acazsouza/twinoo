(function ($) {

    var settings = {
        'velocity': 1,
        'done': null
    };

    var methods = {
        init: function (options) {
            settings = $.extend(settings, options);

            return this.each(function(){
                alert($.isFunction(settings.done));
                if ($.isFunction(settings.done))
                    settings.done();
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