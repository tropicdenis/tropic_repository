(this["webpackJsonptropic-s-n"]=this["webpackJsonptropic-s-n"]||[]).push([[4],{288:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__3rH8m",dialogsItems:"Dialogs_dialogsItems__1JS-6",active:"Dialogs_active__5tbuV",messages:"Dialogs_messages__1yn6q",message:"Dialogs_message__kDM1F",dialogItemImage:"Dialogs_dialogItemImage__3DEu2",messageItem:"Dialogs_messageItem__2Z3Ho"}},289:function(e,s,a){"use strict";a.d(s,"a",(function(){return d}));var t=a(5),i=a(29),n=a(10),c=(a(0),a(11)),o=a(1),r=function(e){return{isAuth:e.auth.isAuth}};function d(e){return Object(c.b)(r)((function(s){var a=s.isAuth,c=Object(i.a)(s,["isAuth"]);return console.log(a),a?Object(o.jsx)(e,Object(t.a)({},c)):Object(o.jsx)(n.a,{to:"/login"})}))}},294:function(e,s,a){"use strict";a.r(s);var t=a(102),i=(a(0),a(12)),n=a(288),c=a.n(n),o=a(1),r=function(e){var s="/dialogs/"+e.id;return Object(o.jsxs)("div",{className:c.a.dialog+" "+c.a.active,children:[Object(o.jsx)(i.b,{to:s,children:e.name}),Object(o.jsx)("img",{className:c.a.dialogItemImage,src:"https://m.buro247.ru/images/senina/SpongeBob_stock_art.jpg",alt:"Spounge Bob"})]})},d=function(e){return Object(o.jsx)("div",{className:c.a.messageItem,children:e.message})},g=a(83),l=a(86),m=a(124),u=a(31),j=Object(g.a)(100),b=Object(m.a)({form:"dialogAddMessageForm"})((function(e){return Object(o.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(o.jsx)("div",{children:Object(o.jsx)(l.a,{component:u.b,name:"newMessageBody",validate:[g.b,j],placeholder:"Enter your message"})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{children:"Send Message"})})]})})),O=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(o.jsx)(r,{name:e.name,id:e.id},e.id)})),t=s.messages.map((function(e){return Object(o.jsx)(d,{message:e.message,id:e.id},e.id)}));return Object(o.jsxs)("div",{className:c.a.dialogs,children:[Object(o.jsx)("div",{className:c.a.dialogsItems,children:a}),Object(o.jsx)("div",{className:c.a.messages,children:Object(o.jsx)("div",{children:t})}),Object(o.jsx)(b,{onSubmit:function(s){e.sendMessageActionCreator(s.newMessageBody)}})]})},_=a(11),h=a(8),x=a(289);s.default=Object(h.d)(Object(_.b)((function(e){return{dialogsPage:e.dialogsPage}}),{sendMessageActionCreator:t.b}),x.a)(O)}}]);
//# sourceMappingURL=4.df5bbeb7.chunk.js.map