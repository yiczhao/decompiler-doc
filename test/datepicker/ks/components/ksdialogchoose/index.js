!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o=e();for(var i in o)("object"==typeof exports?exports:t)[i]=o[i]}}(this,function(){return function(t){function e(i){if(o[i])return o[i].exports;var s=o[i]={exports:{},id:i,loaded:!1};return t[i].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var o={};return e.m=t,e.c=o,e.p="./dist/",e(0)}(function(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))switch(typeof t[e]){case"function":break;case"object":t[e]=function(e){var o=e.slice(1),i=t[e[0]];return function(t,e,s){i.apply(this,[t,e,s].concat(o))}}(t[e]);break;default:t[e]=t[t[e]]}return t}([function(t,e,o){t.exports=o(25)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{btnStyle:function(){return"min-width: "+this.width+"px; height: "+this.height+"px; \n      font-size: "+this.fontSize+"px;"},loadingSize:function(){return Math.round(this.height/2.1)}},props:{width:{type:Number,require:!0},height:{type:Number,require:!0},disable:{type:Boolean,default:!1},loading:{type:Boolean,twoWay:!0},fontSize:{type:Number,require:!0},colorNormal:{type:String,require:!0},colorHover:{type:String,require:!0},colorActive:{type:String,require:!0},nativeType:{type:String,default:"button"}}}},function(t,e,o){var i,s;o(15),i=o(5),s=o(20),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var i,s;o(16),i=o(6),s=o(21),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(3),n=i(s),r=o(2),a=i(r);e.default={name:"KsButton",data:function(){return{sizeMapper:{normal:{width:90,height:36,fSize:13},middle:{width:120,height:42,fSize:16},large:{width:160,height:54,fSize:18}},colorMapper:{primary:{normal:"#2196F3",hover:"#42A5F5",active:"#1E88E5"},success:{normal:"#4CAF50",hover:"#66BB6A",active:"#43A047"},info:{normal:"#00BCD4",hover:"#26C6DA",active:"#00ACC1"},warn:{normal:"#FF5722",hover:"#FF7043",active:"#F4511E"},danger:{normal:"#F44336",hover:"#EF5350",active:"#E53935"},other:{normal:"#999999",hover:"#C8C8C8",active:"#777777"}}}},props:{loading:{type:Boolean,default:!1},disable:{type:Boolean,default:!1},size:{type:String,default:"normal"},type:{type:String,default:"primary"},ghost:{type:Boolean,default:!1},nativeType:{type:String,default:"button"}},components:{NrButton:n.default,GhostButton:a.default}}},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(1),n=i(s);e.default={name:"KsGhostButton",mixins:[n.default]}},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(1),n=i(s);e.default={name:"KsNrButton",mixins:[n.default]}},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(11),n=i(s),r=o(9),a=i(r),l=o(10),c=i(l);e.default={props:{list:{type:Array},sid:{type:Array}},components:{KsDialogProgram:c.default,KsButton:a.default},data:function(){return{is_show:!1,width:600,total:0,showtxt:"",onestorename:"",listparse:[],num:0,errorshow:!1}},methods:{close_dialog:function(){this.is_show=!1,this.list=[].concat(JSON.parse((0,n.default)(this.listparse)))},clickinput:function(){this.is_show=!0},choosestore:function(t){t.ischecked=!t.ischecked},save:function(){this.look(),0==this.num?this.errorshow=!0:(this.is_show=!1,this.listparse=[].concat(JSON.parse((0,n.default)(this.list))))},look:function(){var t=this;this.total=0,this.list.forEach(function(e){e.ischecked&&(t.total++,t.onestorename=e.name)}),this.num=this.total,1==this.total?this.total=this.onestorename:this.total="共有"+this.total+"家门店",this.showtxt=this.total},reset:function(){this.total=0,this.list.forEach(function(t){t.ischecked=!1})},checkall:function(){this.total=this.list.length,this.list.forEach(function(t){t.ischecked=!0})}},watch:{list:function(t){var e=this;t.forEach(function(t){e.sid.forEach(function(e){t.id==e&&(t.ischecked=!0)})}),this.look(),this.errorshow=!1,this.listparse=[].concat(JSON.parse((0,n.default)(t)))}},ready:function(){}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:{type:String},show:{type:Boolean,default:!1},width:{type:Number},is_storetype:{type:Boolean,default:!1},cbClose:{}},data:function(){return{align:{points:["cc","cc"]},monitor:!0}},methods:{_close:function(){this.cbClose&&this.cbClose("cancel"),this.show=!1}},created:function(){this.title=this.title||"标题"},ready:function(){}}},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(24),n=i(s),r=o(3),a=i(r),l=o(2),c=i(l);n.default.normal=a.default,n.default.ghost=c.default,e.default=n.default},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(26),n=i(s);e.default=n.default},function(t,e,o){t.exports={default:o(12),__esModule:!0}},function(t,e,o){var i=o(13),s=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}},function(t,e){var o=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=o)},function(t,e){},14,14,14,14,function(t,e){t.exports=' <div class=KSButton> <nr-button v-if=!ghost :native-type=nativeType :disable=disable :loading.sync=loading :height="sizeMapper[size] && sizeMapper[size].height" :width="sizeMapper[size] && sizeMapper[size].width" :font-size="sizeMapper[size] && sizeMapper[size].fSize" :color-normal="colorMapper[type] && colorMapper[type].normal" :color-hover="colorMapper[type] && colorMapper[type].hover" :color-active="colorMapper[type] && colorMapper[type].active"> <slot></slot> </nr-button> <ghost-button v-if=ghost :native-type=nativeType :disable=disable :loading.sync=loading :height="sizeMapper[size] && sizeMapper[size].height" :width="sizeMapper[size] && sizeMapper[size].width" :font-size="sizeMapper[size] && sizeMapper[size].fSize" :color-normal="colorMapper[type] && colorMapper[type].normal" :color-hover="colorMapper[type] && colorMapper[type].hover" :color-active="colorMapper[type] && colorMapper[type].active"> <slot></slot> </ghost-button> </div> '},function(t,e){t.exports=' <div :class="\'KSGhostButton KSGhostButton__UID--\' + _uid"> <style> /* 默认状态 */\n    .KSGhostButton__UID--{{ _uid }} .KSGhostButton__entity {\n      color: {{ colorNormal }};\n      border: 1px solid {{ colorNormal }};\n    }\n    /* hover 状态 */\n    .KSGhostButton__UID--{{ _uid }} .KSGhostButton__entity:hover {\n      color: {{ colorNormal }};\n      border: 1px solid {{ colorHover }};\n    }\n    .KSGhostButton__UID--{{ _uid }} .KSNRButton__entity[disabled]:hover {\n      border: 1px solid {{ colorNormal }};\n    }\n    /* active 状态 */\n    .KSGhostButton__UID--{{ _uid }} .KSGhostButton__entity:active {\n      color: {{ colorNormal }};\n      border: 1px solid {{ colorActive }};\n    }\n    .KSGhostButton__UID--{{ _uid }} .KSGhostButton__entity[disabled]:active {\n      border: 1px solid {{ colorNormal }};\n      background: #FFF;\n    }\n    /* loading 大小 */\n    .KSGhostButton__UID--{{ _uid }} .KSGhostButton__loading {\n      width: {{ loadingSize }}px;\n    } </style> <button class=KSGhostButton__entity :type=nativeType :disabled="(disable || loading) && \'disabled\'" :style=btnStyle> <svg class=KSGhostButton__loading v-if=loading :width=loadingSize :height=loadingSize viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" version=1.1 xmlns=http://www.w3.org/2000/svg> <g transform="scale(0.015625, 0.015625)"> <path d="M515.698303 969.127499c-97.187972 0-191.279691-31.134554-270.406182-90.479422-96.67193-72.245926-159.45708-178.206619-176.658492-297.928439s13.245087-238.9276 85.663027-335.59953C304.120947 45.239711 588.288258 4.644381 787.99664 154.124643c83.770872 62.78515 143.459768 153.092558 168.2298 254.580884 4.300353 17.373425-6.364522 34.918864-23.737947 39.047203-17.373425 4.128339-34.918864-6.364522-39.047203-23.737947-21.157736-86.867126-72.417941-164.44549-144.147825-218.285906C578.139425 77.750378 334.395431 112.669242 206.244919 283.823282c-62.097094 82.910801-88.243239 185.087183-73.450025 287.607593s68.461616 193.34386 151.372417 255.440954c171.326054 128.322526 414.898035 93.403662 543.220561-77.922392 33.542752-44.895683 56.592642-95.123803 68.289602-149.308248 3.78431-17.373425 21.157736-28.554342 38.359147-24.770032 17.373425 3.78431 28.554342 20.985721 24.770032 38.359147-13.761129 63.473207-40.59533 122.130018-79.814547 174.422308-72.417941 96.67193-178.378633 159.45708-298.100454 176.658492C559.217873 967.579372 537.372081 969.127499 515.698303 969.127499z"></path> </g> </svg> <span class=KSGhostButton__text> <slot></slot> </span> </button> </div> '},function(t,e){t.exports=' <div :class="\'KSNRButton KSNRButton__UID--\' + _uid"> <style> /* 默认状态 */\n    .KSNRButton__UID--{{ _uid }} .KSNRButton__entity {\n      background: {{ colorNormal }};\n    }\n    /* hover 状态 */\n    .KSNRButton__UID--{{ _uid }} .KSNRButton__entity[disabled]:hover {\n      background: {{ colorNormal }};\n    }\n    .KSNRButton__UID--{{ _uid }} .KSNRButton__entity:hover {\n      background: {{ colorHover }};\n    }\n    /* active 状态 */\n    .KSNRButton__UID--{{ _uid }} .KSNRButton__entity:active {\n      background: {{ colorActive }};\n    }\n    /* loading 大小 */\n    .KSNRButton__UID--{{ _uid }} .KSNRButton__loading {\n      width: {{ loadingSize }}px;\n    } </style> <button class=KSNRButton__entity :type=nativeType :disabled="(disable || loading) && \'disabled\'" :style=btnStyle> <svg class=KSNRButton__loading v-if=loading :width=loadingSize :height=loadingSize viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" version=1.1 xmlns=http://www.w3.org/2000/svg> <g transform="scale(0.015625, 0.015625)"> <path d="M515.698303 969.127499c-97.187972 0-191.279691-31.134554-270.406182-90.479422-96.67193-72.245926-159.45708-178.206619-176.658492-297.928439s13.245087-238.9276 85.663027-335.59953C304.120947 45.239711 588.288258 4.644381 787.99664 154.124643c83.770872 62.78515 143.459768 153.092558 168.2298 254.580884 4.300353 17.373425-6.364522 34.918864-23.737947 39.047203-17.373425 4.128339-34.918864-6.364522-39.047203-23.737947-21.157736-86.867126-72.417941-164.44549-144.147825-218.285906C578.139425 77.750378 334.395431 112.669242 206.244919 283.823282c-62.097094 82.910801-88.243239 185.087183-73.450025 287.607593s68.461616 193.34386 151.372417 255.440954c171.326054 128.322526 414.898035 93.403662 543.220561-77.922392 33.542752-44.895683 56.592642-95.123803 68.289602-149.308248 3.78431-17.373425 21.157736-28.554342 38.359147-24.770032 17.373425 3.78431 28.554342 20.985721 24.770032 38.359147-13.761129 63.473207-40.59533 122.130018-79.814547 174.422308-72.417941 96.67193-178.378633 159.45708-298.100454 176.658492C559.217873 967.579372 537.372081 969.127499 515.698303 969.127499z"></path> </g> </svg> <span class=KSNRButton__text> <slot></slot> </span> </button> </div> '},function(t,e){t.exports=' <div class=KsDialogChoose> <div class=radiofir> <input type=text class="input full" @click=clickinput() readonly=readonly v-model=showtxt /> </div> <ks-dialog-program :title="\'请选择交易门店\'" :show=is_show :cb-close=close_dialog :width=width> <div class=trade_store> <ul> <li v-for="i in list" :class="i.ischecked && \'check\'" @click=choosestore(i)> <span>{{i.name}}</span> <i></i> </li> </ul> <div class="txtr btngroup"> <span class=errortxt v-show=errorshow>*您尚未选择门店</span> <span class=reset @click=reset()>重选</span> <span class=checkall @click=checkall()>全选</span> <ks-button :ghost=true type=other style="margin-right: 10px" @click=close_dialog>取消</ks-button> <ks-button :type="\'primary\'" @click=save()>确认</ks-button> </div> </div> </ks-dialog-program> </div> '},function(t,e){t.exports=' <div v-show=show> <div class=dialog :style="{width:width+\'px\'}"> <div class="dialog-hd dialog-primary-title" v-show=!is_storetype> <h2 v-text=title></h2> <a href=javascript:; class=icon-clear @click=_close()><i class=icon>&#xe611;</i></a> </div> <div class=dialog-bd v-show=!is_storetype> <slot></slot> </div> <div v-show=is_storetype> <slot></slot> </div> </div> <div class=dialog-mask></div> </div> '},function(t,e,o){var i,s;o(14),i=o(4),s=o(19),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var i,s;o(17),i=o(7),s=o(22),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var i,s;o(18),i=o(8),s=o(23),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)}]))});