(function () {
    (function ($) {

        var fun_methods, ThisPost;

        fun_methods = {
            Paragraph: function () {
                ClassLang = null;
                if (/^[a-zA-Z0-9- ]*$/.test(textAt) == true) {
                    ClassLang = 'ltr';
                } else {
                    ClassLang = 'rtl';
                }

            }
        };

        return $.extend({

            Negar: function (body, arguments_options) {

                var optionslist = {
                    'Colorlist': [ '#ff9500', '#8e8e93', '#ffcc00', '#4cd964', '#34aadc', '#007aff', '#ff3b30','#5856d6', '#ff2d55', '#c7c7cc'],
                    'Effect': true,
                    'ParagraphDirection': true
                };

                optionslist.body = body;
                options = $.extend(optionslist, arguments_options);

                iNum = 0;
                $(body + ' [data-avato-post]').each(function () {

                    ThisPost = $(this);

                    text = ThisPost.find('[data-avato-text]').text().trim();
                    textAt = text.charAt(0);

                    var Colorlist = optionslist.Colorlist;

                    countColor = Colorlist.length - 1;

                    if (countColor == iNum) {
                        iNum = 0;
                    } else {
                        iNum++;
                    }

                    if (optionslist.ParagraphDirection == true) {
                        fun_methods.Paragraph(ThisPost, Colorlist);
                        ThisPost.addClass(ClassLang)
                    } else {
                        ClassLang = null;
                    }

                    console.log(optionslist.Effect);

                    ThisPost.find('[data-avato-cover]').html('<span class="' + ClassLang + '">' + textAt.toUpperCase() + '</span>');
                    ThisPost.find('[data-avato-cover]').css('background', optionslist.Colorlist[iNum]);

                    if (optionslist.Effect == true) {
                        ThisPost.find('[data-avato-cover] span').animate({'right': '0px'}, 800);
                    } else {
                        ThisPost.find('[data-avato-cover] span').css({'right': '0px'});
                    }

                });
            }
        });
    })(jQuery);

}).call();
