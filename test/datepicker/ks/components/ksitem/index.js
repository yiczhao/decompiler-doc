!function(o,i){if("object"==typeof exports&&"object"==typeof module)module.exports=i();else if("function"==typeof define&&define.amd)define([],i);else{var t=i();for(var e in t)("object"==typeof exports?exports:o)[e]=t[e]}}(this,function(){return function(o){function i(e){if(t[e])return t[e].exports;var l=t[e]={exports:{},id:e,loaded:!1};return o[e].call(l.exports,l,l.exports,i),l.loaded=!0,l.exports}var t={};return i.m=o,i.c=t,i.p="./dist/",i(0)}([function(o,i,t){o.exports=t(4)},function(o,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={props:{floor_value:{type:String,default:"B1"},limit_before:{type:String,default:""},limit_after:{type:String,default:""},isdisabled:{type:Boolean,default:!0}},data:function(){return{floorlist:[],floorlistafter:[],floor_show:!1,ischeck:-1}},methods:{clickinput:function(){var o=this;this.limit_before||this.floorlistafter.forEach(function(o){o.isdisabled=!1});this.limit_after&&(this.floorlist=this.floorlistafter.concat(),this.floorlist.forEach(function(i,t){if(i.name==o.limit_after)if(o.isdisabled)for(var e=t+1;e<o.floorlist.length;e++)o.floorlist[e].isdisabled=!0;else o.floorlist.splice(t+1,o.floorlist.length-1)})),this.floor_show=!this.floor_show,this.floor_value&&this.floorlist.forEach(function(i,t){i.name==o.floor_value&&(o.ischeck=t)})},choosefloor:function(o){o.isdisabled||(this.floor_value=o.name,this.limit_before&&(~this.floor_value.indexOf("B")?this.limit_before.indexOf("B")!=-1&&+this.floor_value.split("B")[1]<+this.limit_before.split("B")[1]&&(this.limit_before=""):~this.limit_before.indexOf("B")?this.limit_before="":+this.floor_value.split("F")[1]>+this.limit_before.split("F")[1]&&(this.limit_before="")))}},ready:function(){for(var o=this,i=20;i>=1;i--)this.floorlist.push({name:"F"+i,isdisabled:!1}),this.floorlistafter.push({name:"F"+i,isdisabled:!1});for(var t=1;t<=5;t++)this.floorlist.push({name:"B"+t,isdisabled:!1}),this.floorlistafter.push({name:"B"+t,isdisabled:!1});window.addEventListener("click",function(i){null!=o.$els.floor&&(o.$els.floor.contains(i.target)||(o.floor_show=!1))})}}},function(o,i){},function(o,i){o.exports=' <div class="ks-col KsItem" v-el:floor @click=clickinput()> <input type=text class="input full" readonly=readonly v-model=floor_value /> <i :class="floor_show ? \'icondown\' : \'iconup\'"></i> <ul v-show=floor_show> <li v-for="item in floorlist" :class="{\n                \'check\':ischeck == $index ,\n                \'disabled\': item.isdisabled ? true :false\n            }" @click=choosefloor(item)> <span>{{item.name }}</span> <i></i> </li> </ul> </div> '},function(o,i,t){var e,l;t(2),e=t(1),l=t(3),o.exports=e||{},o.exports.__esModule&&(o.exports=o.exports.default),l&&(("function"==typeof o.exports?o.exports.options||(o.exports.options={}):o.exports).template=l)}])});