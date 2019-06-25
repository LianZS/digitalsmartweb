define('terminalList',function(require,module,exports){return "{{each list as value i}} {{if i==0}}<li class=\"trans clearfix orange\">{{else if i==1}}</li><li class=\"trans clearfix yellow\">{{else if i==2}}</li><li class=\"trans clearfix green\">{{else}}</li><li class=\"trans clearfix\">{{/if}} <a><b>{{i+1}}</b> <em class=\"ellipsis\" title=\"{{value.k}}\">{{value.k}}</em><label><i style='width:{{value.r/list[0].r*100}}%'></i></label><span>{{value.r}}%</span></a></li>{{/each}}"})
define('networkListPic',function(require,module,exports){return "<div class=\"network-top1\" style=\"width:325px; height:325px\"><span>{{list[0].k}}</span> <b>{{list[0].r}}%</b></div><div class=\"network-top2\" style=\"width:200px; height:200px\"><span>{{list[1].k}}</span> <b>{{list[1].r}}%</b></div><div class=\"network-top3\" style=\"width:100px; height:100px\"><span>{{list[2].k}}</span> <b>{{list[2].r}}%</b></div><div class=\"network-top4\" style=\"width:80px; height:80px\"><span>{{list[3].k}}</span> <b>{{list[3].r}}%</b></div>"})
define('operatorListPic',function(require,module,exports){return "<div class=\"operator-top2\" style=\"height:270px; width:200px\"><i class=\"{{list[1].icon}}\"></i> <span>{{list[1].k}}</span> <b>{{list[1].r}}%</b></div><div class=\"operator-top1\" style=\"height:440px; width:330px\"><i class=\"{{list[0].icon}}\"></i> <span>{{list[0].k}}</span> <b>{{list[0].r}}%</b></div><div class=\"operator-top3\" style=\"height:150px; width:110px\"><i class=\"{{list[2].icon}}\"></i> <span>{{list[2].k}}</span> <b>{{list[2].r}}%</b></div>"})
define('operateSystemListPic',function(require,module,exports){return "<div class=\"resolution-top1\"><div class=\"histogram\"><b>{{list[0].k}}<br>{{list[0].r}}%</b> <span ng-style=\"data.top1pixs\" style=\"height:{{list[0].r/100*275}}px\">柱图，动态控制高度即可</span></div></div><div class=\"resolution-top2\"><div class=\"histogram\"><b>{{list[1].k}}<br>{{list[1].r}}%</b> <span ng-style=\"data.top1pixs\" style=\"height:{{list[1].r/100*275}}px\">柱图，动态控制高度即可</span></div></div><div class=\"resolution-top3\"><div class=\"histogram\"><b>{{list[2].k}}<br>{{list[2].r}}%</b> <span ng-style=\"data.top1pixs\" style=\"height:{{list[2].r/100*275}}px\">柱图，动态控制高度即可</span></div></div><div class=\"resolution-top4\"><div class=\"histogram\"><b>{{list[3].k}}<br>{{list[3].r}}%</b> <span ng-style=\"data.top1pixs\" style=\"height:{{list[3].r/100*275}}px\">柱图，动态控制高度即可</span></div></div>"})
define('resolutionListPic',function(require,module,exports){return "<div class=\"resolution-top1\"><div class=\"pic-device\"><i class=\"icon-iPad\"></i> <i class=\"icon-iPad-border\"></i> <strong>{{list[0].k}}</strong></div><div class=\"histogram\"><b>{{list[0].r}}%</b> <span ng-style=\"data.top1pixs\" style=\"height:{{list[0].r/100*220}}px\">柱图，动态控制高度即可</span></div></div><div class=\"resolution-top2\"><div class=\"pic-device\"><i class=\"icon-iPad\"></i> <i class=\"icon-iPad-border\"></i> <strong class=\"ng-binding\">{{list[1].k}}</strong></div><div class=\"histogram\"><b>{{list[1].r}}%</b> <span style=\"height:{{list[1].r/100*220}}px\">柱图</span></div></div><div class=\"resolution-top3\"><div class=\"pic-device\"><i class=\"icon-iphone\"></i> <i class=\"icon-iphone-border\"></i> <strong class=\"ng-binding\">{{list[2].k}}</strong></div><div class=\"histogram\"><b>{{list[2].r}}%</b> <span style=\"height:{{list[2].r/100*220}}px\">柱图</span></div></div><div class=\"resolution-top4\"><div class=\"pic-device\"><i class=\"icon-iphone\"></i> <i class=\"icon-iphone-border\"></i> <strong class=\"ng-binding\">{{list[3].k}}</strong></div><div class=\"histogram\"><b>{{list[3].r}}%</b> <span style=\"height:{{list[3].r/100*220}}px\">柱图</span></div></div>"})
define('phoneTypeListPic',function(require,module,exports){return "<div class=\"equipment-top1\"><div class=\"equipment-type\"><i class=\"icon-phone-type\"></i><label>{{list[0].k}}</label></div><div class=\"content-top1\" style=\"width:350px; height:290px\"><!--请保持这个宽高的差值，底下同理--> <em>{{list[0].r}}%</em></div></div><div class=\"equipment-top2\"><div class=\"equipment-type\"><i class=\"icon-phone-type\"></i><label>{{list[1].k}}</label></div><div class=\"content-top2\" style=\"width:280px; height:230px\"><em>{{list[1].r}}%</em></div></div><div class=\"equipment-top3\"><div class=\"equipment-type\"><i class=\"icon-pad\"></i><label>{{list[2].k}}</label></div><div class=\"content-top3\" style=\"width:210px; height:190px\"><em>{{list[2].r}}%</em></div></div><div class=\"equipment-top4\"><div class=\"equipment-type\"><i class=\"icon-pad\"></i><label>{{list[3].k}}</label></div><div class=\"content-top4\" style=\"width:130px; height:120px\"><em>{{list[3].r}}%</em></div></div>"})
define('brandListPic',function(require,module,exports){return "<div class=\"top brand-top4\"><div class=\"content-brand4\" style=\"width:120px; height:70px\"><i class=\"{{list[3].icon}}\"></i></div><div class=\"ranking-No4\"><h4>{{list[3].k}}</h4><span>{{list[3].r}}%</span></div></div><div class=\"top brand-top3\"><div class=\"content-brand3\" style=\"width:180px; height:90px; line-height:90px\"><i class=\"{{list[2].icon}}\"></i></div><div class=\"ranking-No3\"><h4>{{list[2].k}}</h4><span>{{list[2].r}}%</span></div></div><div class=\"top brand-top2\"><div class=\"content-brand2\" style=\"width:260px; height:130px; line-height:130px\"><i class=\"{{list[1].icon}}\"></i></div><div class=\"ranking-No2\"><h4>{{list[1].k}}</h4><span>{{list[1].r}}%</span></div></div><div class=\"top brand-top1\"><div class=\"content-brand1\" style=\"width:350px; height:160px; line-height:160px\"><i class=\"{{list[0].icon}}\"></i></div><div class=\"ranking-No1\"><h4>{{list[0].k}}</h4><span>{{list[0].r}}%</span></div></div>"})
define('timeline',function(require, module, exports) {
    /**
     * 时间选择器控件
     * @type {Object}
     */
    var timeline = {
        dateLimit: {},
        slider: 2,
        currPosition: 0,
        maxPosition: 0,
        minPosition: 0,
        prePosition: 0,
        min: 1,
        max: 0,
        dateType: '',
        currentDate: '',
        maxDate: '',
        minDate: '',
        sliderWidth: 82,
        languages: {
            ch: {
                day: '日',
                week: '周',
                month: '月',
                quarter: '季度'
            },
            en: {
                day: 'day',
                week: 'Week',
                month: 'M',
                quarter: 'Q'
            }
        },
        initTimeLine: function(config) {
            var _self = this;
            _self.dateType = config.dateType;
            _self.dateLimit = config.dateLimit;
            _self.language = _self.languages[config.language || 'ch'];
            _self.status = config.status || window.status;
            if (_self.dateType == 'w') {
                _self.maxDate = moment(_self.dateLimit.maxWeek, 'YYYY-MM-DD').startOf('week').format('YYYY-MM-DD');
                _self.minDate = moment(_self.dateLimit.minWeek, 'YYYY-MM-DD').startOf('week').format('YYYY-MM-DD');
                _self.slider = 2;
                _self.currentDate = config.currentDate || _self.maxDate;
                $('.time-type .weekBtn').addClass('on-choose');
            } else if (_self.dateType == 'd') {
                _self.maxDate = _self.dateLimit.maxDay;
                _self.minDate = _self.dateLimit.minDay;
                _self.slider = 1;
                _self.currentDate = config.currentDate || _self.maxDate;
                $('.time-type .monthBtn').addClass('on-choose');
            } else if (_self.dateType == 'm') {
                _self.maxDate = moment(_self.dateLimit.maxMonth, 'YYYY-MM-DD').startOf('month').format('YYYY-MM-DD');
                _self.minDate = moment(_self.dateLimit.minMonth, 'YYYY-MM-DD').startOf('month').format('YYYY-MM-DD');
                _self.slider = 1;
                _self.currentDate = config.currentDate || _self.maxDate;
                $('.time-type .monthBtn').addClass('on-choose');
            } else if (_self.dateType == 'q') {
                _self.slider = 3;
                _self.maxDate = moment(_self.dateLimit.maxQ, 'YYYY-MM-DD').startOf('quarter').format('YYYY-MM-DD');
                _self.minDate = moment(_self.dateLimit.minQ, 'YYYY-MM-DD').startOf('quarter').format('YYYY-MM-DD');
                _self.currentDate = config.currentDate || _self.maxDate;
                $('.time-type .quarterBtn').addClass('on-choose');
            }
            _self.initTimeLineStyle();
            _self.setTimeLineTemp(_self.currentDate, 0);
            _self.setTimeDesc();
            _self.eventFactory();
        },
        /**
         * 时间控件滑动条按钮事件绑定
         * @return {[type]} [description]
         */
        eventFactory: function() {
            var _self = this,
                previousX,
                mousecaptured = false,
                direction,
                clickX,
                $contentsTimeline = $('.contents-timeline'),
                $timelineBox = $('.timeline-box'),
                $moveLeft = $("#moveLeft"),
                $moveRight = $("#moveRight"),
                $weekBtn = $('.time-type .weekBtn'),
                $dayBtn = $('.time-type .dayBtn'),
                $monthBtn = $('.time-type .monthBtn'),
                $quarterBtn = $('.time-type .quarterBtn'),
                $btns = $('.time-type span'),
                $foldBtn = $('#timeexpl em'),
                $timeexpl = $('#timeexpl');
            /*
                滑动条按下判定
             */
            $contentsTimeline.mousedown(function(e) {
                mousecaptured = true;
                previousX = e.pageX;
                clickX = e.pageX;
                if (e.pageX >= $('#sliderParent').position().left && e.pageX <= $('#sliderParent').position().left + _self.sliderWidth * 12) {
                    if (e.pageX <= ($('#sliderParent').position().left + $('#slider').position().left) || e.pageX >= ($('#sliderParent').position().left + $('#slider').position().left + _self.sliderWidth * _self.slider)) {
                        var target = $(e.target).attr("id");
                        if (target === 'sliderParent' || target === 'timetext') {
                            var down = e.pageX - $('#sliderParent').position().left;
                            var pre = $('#slider').position().left;
                            var offset = down - pre;
                            _self.currPosition = _self.currPosition + offset;
                            if (_self.currPosition > _self.maxPosition) {
                                _self.currPosition = _self.maxPosition;
                            }
                        }
                    }
                }
            });
            /*
             * 滑动条鼠标离开时，滑动条当前位置的计算
             */
            $contentsTimeline.mouseup(function(e) {
                mousecaptured = false;
                var offset = _self.currPosition - _self.prePosition;
                var move = offset % (_self.slider * _self.sliderWidth);

                var isClick = false;
                if (clickX === e.pageX) {
                    isClick = true;
                }
                if (offset !== 0 || move !== 0) {
                    if (_self.currPosition < _self.minPosition) {
                        _self.currPosition = _self.minPosition;
                    } else if (_self.currPosition > _self.maxPosition) {
                        _self.currPosition = _self.maxPosition;
                    } else {
                        if (offset < 0) {
                            if (isClick) {
                                _self.currPosition = _self.currPosition - (_self.slider * _self.sliderWidth + move);
                            } else {
                                if (move !== 0 && Math.abs(move) < (_self.slider * _self.sliderWidth / 2)) {
                                    //靠近前一个坐标
                                    _self.currPosition = _self.currPosition + Math.abs(move);
                                } else if (move !== 0 && Math.abs(move) >= (_self.slider * _self.sliderWidth / 2)) {
                                    //靠近后一个坐标
                                    _self.currPosition = _self.currPosition - (_self.slider * _self.sliderWidth + move);
                                }
                            }
                            direction = '-';
                        } else if (offset > 0) {
                            if (isClick) {
                                _self.currPosition = _self.currPosition - move;
                            } else {
                                if (move !== 0 && Math.abs(move) < (_self.slider * _self.sliderWidth / 2)) {
                                    //靠近前一个坐标
                                    _self.currPosition = _self.currPosition - Math.abs(move);
                                } else if (move !== 0 && Math.abs(move) >= (_self.slider * _self.sliderWidth / 2)) {
                                    //靠近后一个坐标
                                    _self.currPosition = _self.currPosition + (_self.slider * _self.sliderWidth - move);
                                }
                            }
                            direction = '+';
                        }
                    }
                    $('#slider').css('left', _self.currPosition + 'px');
                    _self.prePosition = _self.currPosition;
                    _self.setTimeDesc();
                    _self.setStatus('currentDate');
                }
            });
            /*
             * 滑动条滑动时，位置计算
             */
            $contentsTimeline.mousemove(function(e) {
                if (mousecaptured) {
                    var currX = e.pageX;
                    var offset = currX - previousX;
                    previousX = currX;
                    if (_self.currPosition < _self.minPosition) {
                        _self.currPosition = _self.minPosition;
                    } else if (_self.currPosition > _self.maxPosition) {
                        _self.currPosition = _self.maxPosition;
                    } else {
                        _self.currPosition = _self.currPosition + offset;
                    }
                    $('#slider').css('left', _self.currPosition + 'px');
                    e.stopPropagation();
                    e.preventDefault();
                    e.stopImmediatePropagation();
                }
            });
            $moveLeft.click(function() {
                var currentDate = moment(_self.currentDate, 'YYYY-MM-DD'),
                    minDate = moment(_self.minDate, 'YYYY-MM-DD');
                if (currentDate > minDate) {
                    _self.moveDirection("+");
                }
            });
            $moveRight.click(function() {
                var currentDate = moment(_self.currentDate, 'YYYY-MM-DD'),
                    maxDate = moment(_self.maxDate, 'YYYY-MM-DD');
                if (currentDate < maxDate) {
                    _self.moveDirection("-");
                }
            });
            if ($dayBtn) {
                $dayBtn.click(function() {
                    if (_self.dateType != 'd') {
                        _self.dateType = 'd';
                        _self.slider = 1;
                        _self.maxDate = _self.dateLimit.maxDay;
                        _self.minDate = _self.dateLimit.minDay;
                        _self.currentDate = _self.maxDate;
                        _self.initTimeLineStyle();
                        _self.setTimeLineTemp(_self.currentDate, 0);
                        $btns.removeClass('on-choose');
                        _self.setTimeDesc();
                        $(this).addClass('on-choose');
                        _self.setStatus('currentDate');
                    }
                    return;
                });
            }
            if ($weekBtn) {
                $weekBtn.click(function() {
                    if (_self.dateType != 'w') {
                        _self.dateType = 'w';
                        _self.slider = 2;
                        _self.maxDate = _self.dateLimit.maxWeek;
                        _self.minDate = _self.dateLimit.minWeek;
                        _self.currentDate = _self.maxDate;
                        _self.initTimeLineStyle();
                        _self.setTimeLineTemp(_self.currentDate, 0);
                        $btns.removeClass('on-choose');
                        _self.setTimeDesc();
                        $(this).addClass('on-choose');
                        _self.setStatus('currentDate');
                    }
                    return;
                });
            }
            if ($monthBtn) {
                $monthBtn.click(function() {
                    if (_self.dateType != 'm') {
                        _self.dateType = 'm';
                        _self.slider = 1;
                        _self.maxDate = _self.dateLimit.maxMonth;
                        _self.minDate = _self.dateLimit.minMonth;
                        _self.currentDate = _self.maxDate;
                        _self.initTimeLineStyle();
                        _self.setTimeLineTemp(_self.currentDate, 0);
                        $btns.removeClass('on-choose');
                        _self.setTimeDesc();
                        $(this).addClass('on-choose');
                        _self.setStatus('currentDate');
                    }
                    return;
                });
            }
            if ($quarterBtn) {
                $quarterBtn.click(function() {
                    if (_self.dateType != 'q') {
                        _self.dateType = 'q';
                        _self.slider = 3;
                        _self.maxDate = moment(_self.dateLimit.maxQ, 'YYYY-MM-DD').startOf('quarter').format('YYYY-MM-DD');
                        _self.minDate = moment(_self.dateLimit.minQ, 'YYYY-MM-DD').startOf('quarter').format('YYYY-MM-DD');
                        _self.currentDate = _self.maxDate;
                        _self.initTimeLineStyle();
                        _self.setTimeLineTemp(_self.currentDate, 0);
                        _self.setTimeDesc();
                        $btns.removeClass('on-choose');
                        $(this).addClass('on-choose');
                        _self.setStatus('currentDate');
                    }
                    return;
                });
            }
            $timeexpl.click(function() {
                $(".timeline-box .content").slideToggle("slow", function() {
                    if ($foldBtn.hasClass('up')) {
                        $foldBtn.removeClass('up').addClass('down');
                    } else {
                        $foldBtn.removeClass('down').addClass('up');
                    }
                });
            });
        },
        /**
         * 初始化时间控件样式
         * @return {[type]} [description]
         */
        initTimeLineStyle: function() {
            var slider = this.slider,
                width = slider * this.sliderWidth,
                margin;
            if (this.dateType == 'w') {
                margin = slider * this.sliderWidth * 5;
                this.max = 6;
            } else if (this.dateType == 'd') {
                this.max = 12;
                margin = 11 * slider * this.sliderWidth;
            } else if (this.dateType == 'm') {
                this.max = 12;
                margin = 11 * slider * this.sliderWidth;
            } else if (this.dateType == 'q') {
                this.max = 4;
                margin = 3 * slider * this.sliderWidth;
            }
            this.currPosition = margin;
            this.maxPosition = margin;
            this.prePosition = margin;
            $('#slider').css('width', width + 'px');
            $('#slider').css('left', margin + 'px');
        },
        /**
         * 移动时间区间
         * @param  {String} direction 方向开关
         * @return {[type]}           [description]
         */
        moveDirection: function(direction) {
            var date;
            if (direction === '+') {
                if (this.currPosition <= 0) {
                    this.currPosition = 0;
                    date = $(".contents-timeline ul li").last().attr('data-date');
                    this.setTimeLineTemp(date, 1);
                } else {
                    this.currPosition = this.currPosition - this.slider * this.sliderWidth;
                    $('#slider').css('left', this.currPosition + 'px');
                }
            } else if (direction === '-') {
                if (this.currPosition >= this.maxPosition) {
                    this.currPosition = this.maxPosition;
                    date = $(".contents-timeline ul li").last().attr('data-date');
                    this.setTimeLineTemp(date, -1);
                } else {
                    this.currPosition = this.currPosition + this.slider * this.sliderWidth;
                    $('#slider').css('left', this.currPosition + 'px');
                }
            }
            this.setTimeDesc();
            this.setStatus('currentDate');
        },
        /**
         * 设置时间轴显示以及时间属性
         * @param {String} date   左右切换时间基准时间
         * @param {Int} direction 切换方向  1:左;2:右
         */
        setTimeLineTemp: function(date, direction) {
            var i, len, str = '',
                dateObj, minPosition = 0,
                language = this.language;
            if (this.dateType == 'w') {
                date = moment(date, 'YYYY-MM-DD').subtract('week', direction).startOf('week').format('YYYY-MM-DD');
                for (i = 0, len = this.max; i < len; i++) {
                    dateObj = moment(date, 'YYYY-MM-DD');
                    if (dateObj.format('YYYY-MM-DD') == this.minDate) {
                        minPosition = (5 - i) * this.slider * this.sliderWidth;
                    }
                    str = '<li class="timeline-box-li-2slider" data-date="' + dateObj.startOf('week').format('YYYY-MM-DD') + '">' +
                        '<font>' + dateObj.startOf('week').format('MM.DD') + '-' + dateObj.endOf('week').format('MM.DD') + '</font>' +
                        '</li>' + str;
                    date = dateObj.subtract('week', 1).format('YYYY-MM-DD');
                }
            } else if (this.dateType == 'd') {
                date = moment(date, 'YYYY-MM-DD').subtract('day', direction).format('YYYY-MM-DD');
                for (i = 0, len = this.max; i < len; i++) {
                    dateObj = moment(date, 'YYYY-MM-DD');
                    if (dateObj.format('YYYY-MM-DD') == this.minDate) {
                        minPosition = (11 - i) * this.slider * this.sliderWidth;
                    }
                    str = '<li class="timeline-box-li" data-date="' + dateObj.format('YYYY-MM-DD') + '">' +
                        '<font>' + dateObj.format('YYYY-MM-DD') + '</font>' +
                        '</li>' + str;
                    date = moment(date, 'YYYY-MM-DD').subtract('day', 1).format('YYYY-MM-DD');
                }
            } else if (this.dateType == 'm') {
                date = moment(date, 'YYYY-MM-DD').subtract('month', direction).startOf('month').format('YYYY-MM-DD');
                for (i = 0, len = this.max; i < len; i++) {
                    dateObj = moment(date, 'YYYY-MM-DD');
                    if (dateObj.format('YYYY-MM-DD') == this.minDate) {
                        minPosition = (11 - i) * this.slider * this.sliderWidth;
                    }
                    str = '<li class="timeline-box-li" data-date="' + dateObj.startOf('month').format('YYYY-MM-DD') + '">' +
                        '<font>' + (dateObj.format('MM') === '01' || dateObj.format('MM') === '12' ? dateObj.format('YYYY-MM') : dateObj.format('MM')) + language.month + '</font>' +
                        '</li>' + str;
                    date = moment(date, 'YYYY-MM-DD').subtract('month', 1).format('YYYY-MM-DD');
                }
            } else if (this.dateType == 'q') {
                date = moment(date, 'YYYY-MM-DD').subtract('quarter', direction).startOf('quarter').format('YYYY-MM-DD');
                for (i = 0, len = this.max; i < len; i++) {
                    dateObj = moment(date, 'YYYY-MM-DD');
                    if (dateObj.format('YYYY-MM-DD') == this.minDate) {
                        minPosition = (3 - i) * this.sliderWidth;
                    }
                    str = '<li class="timeline-box-li-3slider" data-date="' + dateObj.startOf('month').format('YYYY-MM-DD') + '">' +
                        '<font>' + dateObj.format('YYYY-') + "Q" + dateObj.format('Q') + '</font>' +
                        '</li>' + str;
                    date = moment(date, 'YYYY-MM-DD').subtract('quarter', 1).format('YYYY-MM-DD');
                }
            }
            this.minPosition = minPosition;
            var timelineUl = $(".contents-timeline ul"),
                _self = this;
            timelineUl.html(str);
            var timelineli = timelineUl.find('li');
            timelineli.click(function() {
                var date = $(this).attr('data-date'),
                    eventIndex = $(this).index(),
                    curr = timelineUl.find('li[data-date="' + _self.currentDate + '"]').index();
                if (date < _self.minDate) {
                    eventIndex = timelineUl.find('li[data-date="' + _self.minDate + '"]').index();
                } else if (date > _self.maxDate) {
                    eventIndex = timelineUl.find('li[data-date="' + _self.maxDate + '"]').index();
                }
                _self.currPosition = _self.currPosition + _self.slider * _self.sliderWidth * (eventIndex - curr);
                $('#slider').css('left', _self.currPosition + 'px');
                _self.setTimeDesc();
                _self.setStatus('currentDate');
            });
        },
        /**
         * 获取当前slider的位置
         * @return {[type]} [description]
         */
        getCurrValue: function() {
            return this.currPosition / (this.slider * this.sliderWidth) + 1;
        },
        /**
         * 设置时间区间描述，同时设置当前slibar时间
         */
        setTimeDesc: function() {
            var curr = this.getCurrValue(),
                date,
                dateStr,
                str = '',
                language = this.language,
                _content = $('.main-box .time-span font');
            if (this.dateType == 'w') {
                dateStr = $('.contents-timeline ul li:nth-child(' + curr + ')').last().attr('data-date');
                date = moment(dateStr, 'YYYY-MM-DD');
                str += date.startOf('week').format('YYYY-w') + ' ' + language.week + ' ' + date.startOf('week').format('YYYY-MM-DD') + '---' + date.endOf('week').format('YYYY-MM-DD');
                this.currentDate = date.startOf('week').format('YYYY-MM-DD');
                _content.html(str);
            } else if (this.dateType == 'd') {
                dateStr = $('.contents-timeline ul li:nth-child(' + curr + ')').last().attr('data-date');
                date = moment(dateStr, 'YYYY-MM-DD');
                str += date.format('YYYY-MM-DD') + ' ' + language.day;
                this.currentDate = date.format('YYYY-MM-DD');
                _content.html(str);
            } else if (this.dateType == 'm') {
                dateStr = $('.contents-timeline ul li:nth-child(' + curr + ')').last().attr('data-date');
                date = moment(dateStr, 'YYYY-MM-DD');
                str += date.startOf('month').format('YYYY-MM') + ' ' + language.month + ' ' + date.startOf('month').format('YYYY-MM-DD') + '---' + date.endOf('month').format('YYYY-MM-DD');
                this.currentDate = date.startOf('month').format('YYYY-MM-DD');
                _content.html(str);
            } else if (this.dateType == 'q') {
                dateStr = $('.contents-timeline ul li:nth-child(' + curr + ')').attr('data-date');
                date = moment(dateStr, 'YYYY-MM-DD');
                str += date.startOf('quarter').format('YYYY-Q') + ' ' + language.quarter + ' ' + date.startOf('quarter').format('YYYY-MM-DD') + '---' + date.endOf('quarter').format('YYYY-MM-DD');
                this.currentDate = date.startOf('quarter').format('YYYY-MM-DD');
                _content.html(str);
            }
        },
        setStatus: function(name) {
            this.status[name] = this[name];
        }
    };
    return timeline;
});
define('loading',function(require,module,exports){
    var loading = {
        loading : function(){
            return '<div class="loading">'+
                        '<div class="loading_main">'+
                            '<span class="loading_a">T</span>'+
                            '<span class="loading_b">a</span>'+
                            '<span class="loading_c">l</span>'+
                            '<span class="loading_d">k</span>'+
                            '<span class="loading_e">i</span>'+
                            '<span class="loading_f">n</span>'+
                            '<span class="loading_g">g</span>'+
                            '<span class="loading_h">D</span>'+
                            '<span class="loading_i">a</span>'+
                            '<span class="loading_j">t</span>'+
                            '<span class="loading_k">a</span>'+
                        '</div>'+
                    '</div>';
        },
        trendLoading : function(){
            return '<div class="loading">'+
                        '<div class="loading_main loading_trend">'+
                            '<span class="loading_a">T</span>'+
                            '<span class="loading_b">a</span>'+
                            '<span class="loading_c">l</span>'+
                            '<span class="loading_d">k</span>'+
                            '<span class="loading_e">i</span>'+
                            '<span class="loading_f">n</span>'+
                            '<span class="loading_g">g</span>'+
                            '<span class="loading_h">D</span>'+
                            '<span class="loading_i">a</span>'+
                            '<span class="loading_j">t</span>'+
                            '<span class="loading_k">a</span>'+
                        '</div>'+
                    '</div>';
        }
    };
    return loading;
});

define('search',function(require,module,exports){
    var search = {
        search : function(input,button){
            $(input).bind('keypress',function(event){
                if(event.keyCode == "13"){
                    var keyword = $(this).val();
                    window.location.href = projesctHost+'search.html?keyword='+keyword;
                }
            });
            $(button).click(function(){
                $('.header').addClass('show-search');
            });
            $(input).next().click(function(){
                $(input).val('');
                $('.header').removeClass('show-search');
            });
        }
    };
    return search;
});

define('util',function (require, module, exports) {
    var util = {
        /**
         * 获取接口访问ajax请求的promise对象
         * @param  {String} url    访问接口地址
         * @param  {String} method 接口请求类型
         * @param  {String} async  该方法是否是同步请求
         * @return {Object}        promise对象
         */
        getPromise: function (url, data, method, async) {
            async = typeof (async) == 'boolean' ? async : true;
            var promise = $.ajax({
                url: url,
                type: method || 'GET',
                //返回数据格式为json
                async: async,
                data: data,
                contentType: "application/json",
                dataType: "json"
            });
            return promise;
        },
        mpTimeOut: function (dom, url, time) {
            return setInterval(function () {
                if (time === 0) {
                    window.location.href = url;
                    return;
                }
                dom.html(time--);
                $('.to-yizan').show();
            }, 1000);
        },
        mpClearTimeOut: function (t) {
            clearTimeout(t);
        },
        appNewIndexNotice:function(){
            var btn = $('#appNewIndexNotice'),
                layer = $('.notice_layer'),
                close = layer.find('.icon-close');
            btn.click(function(){
                layer.css('display','flex');
            });
            close.click(function(){
                layer.hide();
            });
        },
        nav: function (curr) {
            var navs = $('.top-menu ul>li');
            var navs_dom = $('.top-menu ul>li>a');
            var nav_menu = $(navs[1]).find('.describe-content .describe-list');
            if (curr == 'app') {
                $(navs_dom[1]).addClass('active');
                $(nav_menu[0]).addClass("active");
            } else if (curr == "wxpub") {
                $(navs_dom[1]).addClass('active');
                $(nav_menu[1]).addClass("active");
            } else if (curr == "appstore") {
                $(navs_dom[1]).addClass('active');
                $(nav_menu[2]).addClass("active");
            } else if (curr == "weibo") {
                $(navs_dom[1]).addClass('active');
                $(nav_menu[3]).addClass("active");
            } else if (curr == 'terminals') {
                $(navs_dom[1]).addClass('active');
                $(nav_menu[4]).addClass("active");
            } else if (curr == 'marketprofile') {
                $(navs_dom[1]).addClass('active');
                $(nav_menu[5]).addClass("active");
            }else if (curr == 'report') {
                $(navs_dom[2]).addClass('active');
            } else if (curr == 'news') {
                $(navs_dom[3]).addClass('active');
            }
        },
        shareWeChat: function () {
            $('.icon-wechat').click(function (event) {
                $('.picShare').show();
                event.stopPropagation();
            });
            $(document).click(function () {
                $('.picShare').hide();
            });
        },
        shareBind: function (url, title, summary) {
            var e = encodeURIComponent;
            $(".share").click(function(){
                $(".share").toggleClass("show");
            });
            $('.picShare div').qrcode({
                width: 185,
                height: 185,
                text: url
            });
            $('.icon-sina').click(function () {
                window.open('http://v.t.sina.com.cn/share/share.php?url=' + url + '&title=' + title + '--'  + summary);
                // window.open('http://www.jiathis.com/send/?webid=tsina&?url=' + url + '&title=' + title + '&summary=' + summary);
            });
            $('.icon-qqzone').click(function () {
                window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + url + '&title=' + title + '--'  + summary);
                // window.open('http://www.jiathis.com/send/?webid=qzone&url=' + url + '&title=' + title + '&summary=' + summary);
            });
            this.collect();
        },
        shareReportBind: function (url, title, summary) {
            var e = encodeURIComponent;
            $(".share").click(function(){
                $(".share").toggleClass("show");
            });
            $('.jiathis_weixin_modal .jiathis_modal_body>div').qrcode({
                width: 120,
                height: 120,
                text: url
            });
            $('.ckepop .icon-weixin').parent().hover(function () {
                $('.jiathis_weixin_modal').show()
            }, function () {
                $('.jiathis_weixin_modal').hide()
            });
            $('.ckepop .icon-weibo').parent().parent().click(function () {
                window.open('http://v.t.sina.com.cn/share/share.php?url=' + url + '&title=' + title + '--'  + summary);
            });
            $('.ckepop .icon-qqzone').parent().parent().click(function () {
                window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + url + '&title=' + title + '--'  + summary);
            });
        },
        shareRecommendBind: function (url, title, summary) {
            var e = encodeURIComponent;
            $(".journal .share").click(function(){
                $(".journal .share").toggleClass("show");
            });
            $(".journal .share .icon-wechat").hover(function(){
                $(".journal .show-QR-code").css('display','flex');
            },function(){
                $(".journal .show-QR-code").hide();
            });
            $('.show-QR-code p:first-child').html('');
            $('.show-QR-code p:first-child').qrcode( {
                width: 88,
                height: 88,
                text: url
            } );
            $('.icon-sina').click(function () {
                window.open('http://v.t.sina.com.cn/share/share.php?url=' + url + '&title=' + title + '--'  + summary);
            });
            $('.icon-qqzone').click(function () {
                window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + url + '&title=' + title + '--'  + summary);
            });
        },
        shareRecomLayerBind: function (url, title, summary,dom) {
            var e = encodeURIComponent;
            $(dom).find('.icon-wechat .show-QR-cod p:first-child').qrcode( url );
            $(dom).find('.icon-sina').click(function () {
                window.open('http://v.t.sina.com.cn/share/share.php?url=' + url + '&title=' + title + '--'  + summary);
            });
            $(dom).find('.icon-qqzone').click(function () {
                window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + url + '&title=' + title + '--'  + summary);
            });
        },
        collect: function () {
            var collectUrl = window.location.url,
                title = document.title,
                browser = navigator.userAgent.toLowerCase(),
                collectArea = $('.collect'),
                collectBtn = collectArea.find('.icon-star'),
                collectTip = collectArea.find('.help span');
                collectTip.html('CTRL+D (Mac请使用Command+D)收藏移动观象台');
            _hmt.push(['_trackEvent', 'click_collection', 'click', 'click_collection']);
        },
        returnTop: function () {
            var _topHtml = '<a href="javascript:void(0)" class="toTop" id="toTop"></a>';
            window.TD.ui.ReturnTop('body', {
                html: _topHtml,
            });
        },
        setCookie: function (c_name, value, expiredays) {
            var exdate = new Date()
            exdate.setDate(exdate.getDate() + expiredays)
            document.cookie = c_name + "=" + escape(value) +
                ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString()) + ";path=/"
        },
        getCookie: function (c_name) {
            if (document.cookie.length > 0) {
                c_start = document.cookie.indexOf(c_name + "=")
                if (c_start != -1) {
                    c_start = c_start + c_name.length + 1
                    c_end = document.cookie.indexOf(";", c_start)
                    if (c_end == -1) c_end = document.cookie.length
                    return unescape(document.cookie.substring(c_start, c_end))
                }
            }
            return ""
        },
        setLang: function () {
            var language = this.getLang('Language') || 'zh_CN';
            if (language == 'en_US') {
                $('a.language').html('CH');
                this.setCookie('Language', 'zh_CN', 7);
            } else {
                $('a.language').html('EN');
                this.setCookie('Language', 'en_US', 7);
            }
            window.location.reload();
        },
        getLang: function () {
            return this.getCookie('Language') || 'zh_CN';
        },
        getLocalLanguage: function () {
            var localLanguage = this.getLang();
            if (localLanguage == 'zh_CN') {
                return 'ch';
            } else {
                return 'en';
            }
        }
    };
    return util;
});
/**
 * 全局配置文件
 * @param  {[type]} function(require,module,exports [description]
 * @return {[type]}                                 [description]
 */
define('config',['util'],function(require,module,exports){
    var util = require('util');
    var config = {
        /**
         * 页面全局引入后调用getApiHost方法，生成页面全局apiHost
         * @type {String}
         */
        apiHost:'',
        /**
         * 加载页面时根据相应域名提供不同的接口host
         * @return {[type]} [description]
         */
        getApiHost:function(){
            var localhost = window.location.href;
            if(localhost.indexOf('debug') !== -1){
                this.apiHost = '//debug.talkingdata.com/mi/observatory/';
                window.resourceHost = 'https://debug.talkingdata.com/observatory/mi/';
                window.projesctHost = 'https://debug.talkingdata.com/mi/observatory/';
            }else if(localhost.indexOf('mi') !== -1){
                this.apiHost = 'http://mi.talkingdata.com/';
                window.resourceHost = 'http://jic2.talkingdata.com/observatory/mi/';
                window.projesctHost = 'http://mi.talkingdata.com/';
            }else{
                this.apiHost = 'https://debug.talkingdata.com/mi/observatory/';
                window.resourceHost = 'https://debug.talkingdata.com/observatory/mi/';
                window.projesctHost = 'https://debug.talkingdata.com/mi/observatory/';
            }
        },
        /**
         * 初始化全局配置
         * @return {[type]} [description]
         */
        initConfig : function(){
            this.getApiHost();
            $('.language').click(function(){
                util.setLang();
            });
        },
        language : {
            zh:{
                application : '应用'
            },
            en:{
                application : 'Application'
            }
        }
    };
    return config;
});

define('index_main',['config','util','search','loading','timeline','brandListPic','phoneTypeListPic','resolutionListPic','operateSystemListPic','operatorListPic','networkListPic','terminalList'],function(require){
    var config = require('config'),
        util = require('util'),
        language=util.getLocalLanguage(),
        search = require('search'),
        loading = require('loading').trendLoading(),
	    timeline = require('timeline'),
        brandListPicTemp=require('brandListPic'),
        phoneTypeListPicTemp=require('phoneTypeListPic'),
        resolutionListPicTemp=require('resolutionListPic'),
        operateSystemListPicTemp=require('operateSystemListPic'),
        operatorListPicTemp=require('operatorListPic'),
        networkListPicTemp=require('networkListPic'),
        terminalListTemp=require('terminalList'),
        topContainer=$('.top-container'),
        rightList=$('.right-list ul'),
        dateLimit = window.dateLimit;
        util.nav(curpage);
        util.shareWeChat();
        config.initConfig();
        search.search('.search input','.search .icon-search');
    /**
     * 声明全局状态集
     * @type {DepSubscribe}
     */
    var subscribe = new DepSubscribe();
    var status = ObserverObject({
        currentDate: '',  //初始化时间固定，监听平台的变化请求数据
        platform:'',
        terminalType:1  //每个页面的终端类型不同，分别写在每个页面，不用监听
    }, subscribe);
    init();
    timeline.initTimeLine({
        dateType:'m',
        dateLimit:dateLimit,
        language:language,
        currentDate:util.getCookie('terminalDate'),
        status : status
    });
    subscribe.on("*", function (name, orgValue, value) {
        util.setCookie('terminalDate',status.currentDate);
        util.setCookie('terminalDateType',timeline.dateType);
        var data={};
        //时间类型，时间，平台，终端类型
        data.dateType=timeline.dateType;
        data.date=util.getCookie('terminalDate');
        data.platform=status.platform;
        data.terminalType=terminalType;
        loadingData();
        getAppList(data,renderList);
    });
    // init();//先出发init，此时监听到currentDate有变化，再执行subscribe.on
    function init(){
        $('#list-content').perfectScrollbar();
        initPlatformType();
        status.currentDate = util.getCookie('terminalDate')||dateLimit.maxWeek;
    }
    function initPlatformType() {
        //除品牌之外的终端类型切换安卓和苹果
        if(terminalType!=1){
            status.platform='2';
            $('.choose-platform span').click(function () {
                $('.choose-platform span').removeClass('active');
                $(this).addClass('active');
                status.platform=$(this).attr('td-data');
            })
        }else{
            //终端类型为品牌时不切换安卓和苹果
            status.platform='3';
        }
    }
    initShare();
    function initShare(){
        var data={};
        //时间类型，时间，平台，终端类型
        data.dateType=timeline.dateType;
        data.date=util.getCookie('terminalDate')||status.currentDate;
        data.platform=status.platform;
        data.terminalType=terminalType;
        getAppList(data,renderList,true);
        util.shareWeChat();
    }
    function getAppList(data,callback,initStauts) {
        var promise = util.getPromise(config.apiHost+'terminal.json',data);
        promise.done(function(data){
            if(data&&data.length !== 0){
                //机型时Android去掉加号 iOS加上‘iOS’
                if(terminalType==4){
                    switch (status.platform){
                        case '2':
                            for(var i=0;i<data.length;i++){
                                data[i].k=data[i].k.replace('+','');
                            }
                            break;
                        case '1':
                            for(var i=0;i<data.length;i++){
                                data[i].k='IOS'+data[i].k;
                            }
                            break;
                    }
                }
                if(initStauts){
                    util.shareBind(window.location.href,'TalkingData移动观象台','来自TalkingData移动观象台最新数据显示，'+timeline.currentDate+'日-'+moment(timeline.currentDate,'YYYY-MM-DD').endOf('week').format('YYYY-MM-DD')+'日 ，'+$('.list-title .name').html()+data[0].k+'排名第一，覆盖率为'+parseFloat(data[0].r).toFixed(2)+'%，获取更多应用详细排名及行业动态请点击 :');
                }
                callback(data);
            }
        });
    }
    function renderList(data) {
        var app = {};
        app.list = data;
        app.resourceHost = resourceHost;
        //渲染右侧列表
        rightList.html(template(terminalListTemp,app));
        //分别渲染中间的前几名
        if(terminalType==1){
            //品牌
            var map={
                '三星':'icon-samsung',
                '苹果':'icon-ios',
                '华为':'icon-huawei',
                '小米':'icon-mi',
                'OPPO':'icon-oppo',
                'vivo':'icon-vivo',
                '魅族':'icon-meizu',
                'Samsung':'icon-samsung',
                'Apple':'icon-ios',
                'HUAWEI':'icon-huawei',
                'Xiaomi':'icon-mi',
                'MEIZU':'icon-meizu'
            };
            //前四名加icon字段
            for(var i=0;i<4;i++){
                $.each(map,function (index,item) {
                    if(data[i].k==index){
                        data[i].icon=item;
                    }
                });
            }
            topContainer.html(template(brandListPicTemp,app));
        }else if(terminalType==2){
            //机型
            topContainer.html(template(phoneTypeListPicTemp,app));
        }else if(terminalType==3){
            //分辨率
            topContainer.html(template(resolutionListPicTemp,app));
        }else if(terminalType==4){
            //操作系统
            topContainer.html(template(operateSystemListPicTemp,app));
        }else if(terminalType==5){
            //运营商
            var operatorMap={
                '中国移动':'icon-mobile',
                '中国联通':'icon-unicom',
                '中国电信':'icon-telecom',
                'China Mobile':'icon-mobile',
                'China Unicom':'icon-unicom',
                'China Telecom':'icon-telecom'
            };
            //前四名加icon字段
            for(var i=0;i<3;i++){
                $.each(operatorMap,function (index,item) {
                    if(data[i].k==index){
                        data[i].icon=item;
                    }
                });
            }
            topContainer.html(template(operatorListPicTemp,app));
        }else if(terminalType==6){
            //网络
            topContainer.html(template(networkListPicTemp,app));
        }
    }
    /**
     * 过场loading渲染
     * @return {[type]} [description]
     */
    function loadingData(){
        rightList.html('');
        topContainer.html(loading);
    }
});


seajs.use(['index_main']);

