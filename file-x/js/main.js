$(document).ready(function () {
    $(function () {
        $(window).scroll(function () {
            var top = $(document).scrollTop();
            if (top > 100) $("#hidden-header").addClass('show');
            if (top < 50) $("#hidden-header").removeClass('show');
        });
    });
    //
    //
    //
    //
    //    sound

    $('[class*="btn"]').hover(function () {
        document.getElementById("sound").play();
        document.getElementById("sound").volume = 1
    }, function () {
        document.getElementById("sound").pause();
        document.getElementById("sound").currentTime = 0
    });
    //
    //
    // 
    //    slider
    $(function () {
        var slider = $('.action__slider'),
            sliderNav = slider.find('.action__slider-icon'),
            slide = slider.find('.action__slider-slide'),
            timeout = 1500,
            transition = 100;
        sliderNav.each(function (e) {
            $(this).attr('data-id', e + 1)
        });
        setInterval(function () {
            var activeNav = sliderNav.filter('.active'),
                id = activeNav.data('id');
            activeNav.removeClass('active');
            var i = 0;
            if (sliderNav.length - id) {
                sliderNav.eq(id).addClass('active');
                slide.addClass('is-animated');
                setTimeout(function () {
                    while (sliderNav.length != i) {
                        i++;
                        slide.removeClass('slide--' + i);
                    }
                    slide.addClass('slide--' + (id + 1))

                }, transition);
                setTimeout(function () {
                    slide.removeClass('is-animated');
                }, transition * 2)

            } else {
                sliderNav.eq(0).addClass('active');
                slide.addClass('is-animated');
                setTimeout(function () {
                    while (sliderNav.length != i) {
                        i++;
                        slide.removeClass('slide--' + i);
                    }
                    slide.addClass('slide--1')

                }, transition);
                setTimeout(function () {
                    slide.removeClass('is-animated');
                }, transition * 2)
            }

        }, timeout)
    })
    //
    //
    //
    //
    //menu
    $('.nav a').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });
    //
    //
    //
    //
    //    map 
    ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init() {
        myMap = new ymaps.Map("map", {
            center: [55.744916, 37.623393],
            zoom: 15
        });
        myPlacemark = new ymaps.Placemark([55.740730, 37.635000], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'file-x/marker.png',
            iconImageSize: [55, 79],
            iconImageOffset: [-35, -90]
        });

        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom')
    };
    //
    //
    //
    //
    //    mask telefone
    $('.tel').mask("+7 (999) 999 99 99");
    //

    //
    //
    //
    //
    //  result
    $('.results .fade-slider  img').each(function (i) {
        $(this).attr('src', 'file-ford/img/results/' + (i + 1) + '.jpg');
    });
    $('.result').each(function () {
        $(this).find('img').each(function (i) {
            $(this).attr('data-id', i);
        });
    });
    //
    //
    // 
    //    results
    $('.js-slider').slick({
        dots: true
    })
    $('.js-slider-spec').slick({
        dots: true,
        centerMode: true,
        slidesToShow: 5,
        variableWidth: true,
        focusOnSelect: true
    });
    $(function () {
        var centerSlide = $('.js-slider-spec').find('.slick-center');
        centerSlide.prev('.slick-active').addClass('prev');
        centerSlide.next('.slick-active').addClass('next');
    })
    $(function () {
        var slider = $('.js-slider-spec');
        slider.on('afterChange', function (event, slick, currentSlide) {
            var centerSlide = slider.find('.slick-center');
            centerSlide.prev('.slick-active').addClass('prev');
            centerSlide.next('.slick-active').addClass('next');
        });
        slider.on('beforeChange', function (event, slick, currentSlide) {
            var centerSlide = slider.find('.slick-center');
            centerSlide.siblings('.slick-active').removeClass('prev next');

        });
    })

    //
    //
    // 
    //
    //fade_slide
    $('.fade-slider').each(function () {
        $(this).find('.main_foto').attr('data-slidenum', '0');
    });
    $('.main_foto').each(function () {
        var src = $(this).siblings('img').eq(0).attr('src').split('/');
        //            console.log(src)
        $(this).css({
            backgroundImage: 'url(file-ford/' + src[1] + '/results/medium/' + src[src.length - 1] + ')'
        });
        //        �������� ������ ���������
        var srcArrow = [] //������ ������ �� �������� �� ������ �����

        $(this).siblings('img').each(function (i) {
            var src_small = $(this).attr('src').split('/');
            var src = 'file-ford/' + src_small[1] + '/results/large/' + src_small[src_small.length - 1]
            srcArrow[i] = src
        });

        $(this).click(function () {
            var num = $(this).attr('data-slidenum');
            var srcArrowStart = srcArrow.slice(num),
                srcArrowFinish = srcArrow.slice(0, num)
            var srcArrowNew = srcArrowStart.concat(srcArrowFinish);
            //                        console.log(srcArrowNew);
            console.log(num)
            $.fancybox(srcArrowNew);
            return false
        })
        //        �������� ������ ���������
    });
    $('.fade-slider img').click(function () {
        var cont = $(this).siblings('.main_foto'),
            src = $(this).attr('src').split('/'),
            lastChildArr = src[src.length - 1],
            slideNum = $(this).data('id');
        $(cont).attr('data-slidenum', slideNum);
        $(cont).css({
            backgroundImage: 'url(file-ford/' + src[1] + '/results/medium/' + src[src.length - 1] + ')'
        })
    });


    //
    //
    //
    //
    //    block certificate
    $('#certificate ul li a').fancybox();
    //   
    //
    //
    //
    // waypoin_animation 
    if (screen.width > 960) {
        $('.facts li').each(function (i) {
            var el = $(this),
                cl = 'translateTop150';
            el.addClass(cl);
            $('.facts').waypoint(function (direction) {
                setTimeout(function () {
                    el.removeClass(cl)
                }, 100 * i);
            }, {
                offset: '60%'
            })
        });
        $('#tarif .top').each(function (i) {
            var el = $(this),
                cl = 'translateTop150';
            el.addClass(cl);
            el.waypoint(function (direction) {
                setTimeout(function () {
                    el.removeClass(cl)
                }, 200 * i);
            }, {
                offset: '60%'
            })
        });
        $('#tarif .bottom').each(function (i) {
            var el = $(this),
                cl = 'translateBottom150';
            el.addClass(cl);
            el.waypoint(function (direction) {
                setTimeout(function () {
                    el.removeClass(cl)
                }, 200 * i);
            }, {
                offset: '60%'
            })
        });
        $('#another .top').each(function (i) {
            var el = $(this),
                cl = 'translateTop150';
            el.addClass(cl);
            el.waypoint(function (direction) {
                setTimeout(function () {
                    el.removeClass(cl)
                }, 200 * i);
            }, {
                offset: '60%'
            })
        });
        $('#another .bottom').each(function (i) {
            var el = $(this),
                cl = 'translateBottom150';
            el.addClass(cl);
            el.waypoint(function (direction) {
                setTimeout(function () {
                    el.removeClass(cl)
                }, 200 * i);
            }, {
                offset: '60%'
            })
        });
        $('#spares .fadeLeft').addClass('translateLeft400');
        $('#spares ul').waypoint(function (direction) {
            $('#spares .fadeLeft').removeClass('translateLeft400')
        }, {
            offset: '60%'
        });
        $('#spares .fadeRight').addClass('translateRight400');
        $('#spares ul').waypoint(function (direction) {
            $('#spares .fadeRight').removeClass('translateRight400')
        }, {
            offset: '60%'
        })
    }
    //
    //
    //
    //
    // displaing none after animation 
    function addClassHiddenAfterAnimation(e) {
        var time = parseFloat(e.css('transitionDuration')) * 1000;
        setTimeout(function () {
            e.addClass('hidden');
        }, time + 1);
    };

    $('#tarif li').each(function () {
        $(this).find('.js-open').attr('data-info', $(this).find('h3').text())
    });
    $('#another li').each(function () {
        $(this).find('.js-open').attr('data-info', $(this).find('h3').text())
    });
    //
    //
    //
    //
    //    pop_ups
    $('.js-open').click(function (event) {
        var info = $(this).data('info');
        var header = $(this).data('header'),
            par = $(this).data('par'),
            btn = $(this).text(),
            tar = $(this).data('tar');
        event.preventDefault();
        $('#overlay').fadeIn(200,
            function () {
                var pop = $('.pop_form');
                pop.removeClass('hidden');
                setTimeout(function () {
                    pop.addClass('opened').find('input.info').val(info);
                    pop.find('input.tar').val(tar);
                    pop.find('h3').html(header);
                    pop.find('p').html(par);
                    pop.find('button').html(btn)
                }, 50)
            });
    });
    $('#overlay, .cls').click(function () {
        addClassHiddenAfterAnimation($('.opened'))
        $('.opened').removeClass('opened');
        $('#overlay').fadeOut();
    });
    //
    //
    //
    //
    //    add Unic ID to inputs
    $("form").each(function (e) {
        var form = $(this),
            idUnicNumber = e + 1,
            idForm = $(this).attr('id');
        form.attr('id', idForm + '_' + idUnicNumber);
        form.find('input').each(function () {
            var idInput = $(this).attr('id');
            $(this).attr('id', idInput + '_' + idUnicNumber)
        })
    });
    //
    //
    //
    //
    //send_letter
    $("form").submit(function () {
        var form = $(this);
        var id = +form.attr('id').substr(-1);
        var error = false;
        form.find('.required').each(function () {
            if ($(this).val() == '') {
                $(this).addClass('err').focus();
                error = true;
            }
        });
        if (!error) {
            var num = $('#info_' + id).val();
            var name = $('#name_' + id).val();
            var tel = $('#tel_' + id).val();
            var tar = $('#tar_' + id).val();
            $.ajax({
                type: "POST",
                url: "send.php",
                data: "&num=" + num + "&name=" + name + "&tel=" + tel,
                success: function () {
                    
                    console.log(tar);

                    if ($('.pop_form').hasClass('opened')) {
                        addClassHiddenAfterAnimation($('.opened'))
                        $('.opened').removeClass('opened');
                        var pop = $('#thank1');
                        if (tar == 'su_18' || tar == 'su_19' || tar == 'su_20' || tar == 'su_21' || tar == 'su_22' || tar == 'su_23') {
                            pop = $('#thank2');
                        }
                        pop.removeClass('hidden');
                        setTimeout(function () {
                            pop.addClass('opened');
                        }, 50);
                    } else {
                        $('#overlay').fadeIn(200,
                            function () {
                                var pop = $('#thank1');
                                pop.removeClass('hidden');
                                setTimeout(function () {
                                    pop.addClass('opened');
                                }, 50)
                            });
                    }
                },
                error: function () {}
            });
            $('#form_' + id + ' input').val('');
            form.find('.required').each(function () {
                $(this).removeClass('err');
            })
        };
    });
});
