(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{375:function(t,e,r){"use strict";r.r(e);var n=r(4),o=(r(27),r(170),r(9),r(69),{props:{slug:{type:String}},computed:{user:function(){return this.$store.state.user}},data:function(){return{text:"",toastOptions:{duration:2e3,theme:"bubble"}}},methods:{postComment:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.user){e.next=3;break}return t.$toast.error("please sign in to post",t.toastOptions),e.abrupt("return");case 3:if(""!==t.text.trim()){e.next=6;break}return t.$toast.error("empty comments do not mean much",t.toastOptions),e.abrupt("return");case 6:if(!(t.text.trim().length>1e3)){e.next=9;break}return t.$toast.error("too long",t.toastOptions),e.abrupt("return");case 9:return e.prev=9,e.next=12,t.$store.dispatch("postComment",{text:t.text,slug:t.slug});case 12:r=e.sent,t.$toast.success(r,t.toastOptions),t.text="",e.next=20;break;case 17:e.prev=17,e.t0=e.catch(9),t.$toast.error(e.t0.toString(),t.toastOptions);case 20:case"end":return e.stop()}}),e,null,[[9,17]])})))()},reset:function(){this.text="",this.$refs.commentarea.focus()}}}),c=r(8),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"max-w-7xl"},[r("label",{staticClass:"block text-sm font-medium text-gray-600",attrs:{for:"comment"}}),t._v(" "),r("div",{staticClass:"mt-1"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],ref:"commentarea",staticClass:"block bg-gray-900 border-transparent text-gray-300 placeholder-gray-600 w-full rounded-md shadow-sm text-sm focus:ring-offset-transparent focus:ring-indigo-900",attrs:{id:"comment",name:"comment",rows:"4",placeholder:"did you like the post or have any questions? please share."},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),t._v(" "),r("p",{staticClass:"mt-3 text-sm text-blue-gray-500"})]),t._v(" "),r("div",{staticClass:"flex justify-end"},[r("button",{staticClass:"bg-gray-900 py-2 px-4 rounded-md shadow-sm text-xs font-medium text-blue-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-transparent focus:ring-indigo-900",attrs:{type:"button"},on:{click:t.reset}},[t._v("reset")]),t._v(" "),r("button",{staticClass:"ml-3 inline-flex justify-center py-2 px-4 shadow-sm text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-transparent focus:ring-gray-900",attrs:{type:"button"},on:{click:t.postComment}},[t._v("post")])])])}),[],!1,null,"1193a4e4",null);e.default=component.exports}}]);