(this["webpackJsonpfamily-stuff"]=this["webpackJsonpfamily-stuff"]||[]).push([[0],{21:function(e,t,i){},22:function(e,t,i){},29:function(e,t,i){"use strict";i.r(t);var s=i(1),a=i.n(s),r=i(14),n=i.n(r),c=(i(21),i(10)),u=i(2),o=i(7),l=(i(22),i(0)),d=function(e){var t=e.data.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"sport",children:e.muscleGroup}),Object(l.jsx)("td",{className:"sport",children:e.exercise}),Object(l.jsx)("td",{className:"sport",children:e.series.map((function(e){return Object(l.jsx)("div",{children:e})}))})]})}));return Object(l.jsxs)("table",{className:"tableSport",children:[Object(l.jsxs)("thead",{children:[Object(l.jsx)("th",{className:"sportHeader",children:"Raumen\u0173 grup\u0117"}),Object(l.jsx)("th",{className:"sportHeader",children:"Pratimas"}),Object(l.jsx)("th",{className:"sportHeader",children:"Serijos / Kartojimai"})]}),Object(l.jsx)("tbody",{children:t})]})},j={marginRight:"1rem",padding:"0.5rem",userSelect:"none"},m={marginLeft:"1rem",padding:"0.5rem",userSelect:"none"},x={marginLeft:"4rem",marginRight:"4rem",userSelect:"none"},p=function(e){var t=e.trainingData,i=Object(s.useState)(0),a=Object(o.a)(i,2),r=a[0],n=a[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{style:j,onClick:function(){return n((function(e){return 0===e?t.length-1:e-1}))},children:"<"}),Object(l.jsxs)("span",{style:x,children:[r+1," diena"]}),Object(l.jsx)("button",{style:m,onClick:function(){return n((function(e){return e===t.length-1?0:e+1}))},children:">"}),Object(l.jsx)(d,{data:t[r]})]})},b=[[{muscleGroup:"Ap\u0161ilimas",exercise:"\u0116jimas",series:["5 min"]},{muscleGroup:"Presas",exercise:"Susirietimas su kamuolio u\u017ed\u0117jimo ant koj\u0173",series:["4x10"]},{muscleGroup:"Krutin\u0117",exercise:"Spausti laisva \u0161tanga nuo lygaus",series:["10 x 10 Kg","8 x 15 Kg","6 x 20 Kg","5 x 25 Kg"]},{muscleGroup:"Kr\u016btin\u0117",exercise:"Spausti \u012ftvirtinta \u0161tanga kampu + suvedimai stakl\u0117se",series:["4x10 30 Kg","4x12 20 KG"]},{muscleGroup:"Nugara",exercise:"Vir\u0161utinio torso trauka u\u017e galvos",series:["4x12 20 Kg"]},{muscleGroup:"Nugara",exercise:"Trauka s\u0117dint treniruoklyje pla\u010diai",series:["4x12 20 Kg"]},{muscleGroup:"Bicepsas",exercise:"Lenkimas treniruoklyje+lenkimas su \u0161tanga",series:["4x12 15Kg","4x10 15 Kg"]}],[{muscleGroup:"Ap\u0161ilimas",exercise:"Dviratis",series:["5 min"]},{muscleGroup:"Presas",exercise:"Susirietimai \u012fstri\u017einiams",series:["4x12"]},{muscleGroup:"Kojos",exercise:"Lenkimas s\u0117dint",series:["4x15 25 Kg"]},{muscleGroup:"Kojos",exercise:"Lenkimas gulint",series:["3x12 10 Kg"]},{muscleGroup:"Kojos",exercise:"Tiesimas s\u0117dint paskui pama\u017einant svor\u012f",series:["4x12+12 2x10 Kg"]},{muscleGroup:"Kojos",exercise:"Koj\u0173 platforma gulint",series:["4x15 50 Kg"]},{muscleGroup:"Kojos",exercise:"Suvedimai",series:["4x15 40 Kg"]},{muscleGroup:"Blauzdos",exercise:"Su koju platforma didinant kas plytele",series:["18x40 Kg","15x50 Kg","12x60 Kg","10x70 Kg","8x80 Kg"]}],[{muscleGroup:"Ap\u0161ilimas",exercise:"\u0116jimas",series:["5 min"]},{muscleGroup:"Presas",exercise:"Susirietimai 1 koja i\u0161tiesta, kita sulenkta",series:["4x12"]},{muscleGroup:"Nugara",exercise:"Vir\u0161utinio troso trauka link smakro + Apatinio troso trauka s\u0117dint (plati ranken\u0117l\u0117)",series:["4x12 25 Kg","4x12 16 Kg"]},{muscleGroup:"Pe\u010diai",exercise:"Mostai su hanteliais per \u0161alis + mostai treniruoklyje",series:["4x15 5 Kg","4x15 15 Kg"]},{muscleGroup:"Pe\u010diai",exercise:"Spausti \u012ftv \u0161tanga i\u0161 priekio, vienodu tempu, \u017eemai nuleisti ir siauras pa\u0117mimas",series:["4x12 20 Kg"]},{muscleGroup:"Tricepsas",exercise:"Tiesimas su vir\u0161utiniu trosu virve + su raityta \u0161tanga gulint nuo kaktos",series:["1x12 25 Kg","3x12 20 Kg","4x12 2x2.5 Kg"]}]],k=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{onClick:function(){setTimeout((function(){"Notification"in window?"granted"===Notification.permission?new Notification("Hi there!"):"denied"!==Notification.permission&&Notification.requestPermission().then((function(e){"granted"===e&&new Notification("Hi there!")})):alert("This browser does not support desktop notification")}),3e3)},children:"Notify me"}),Object(l.jsx)(p,{trainingData:b})]})};var g=i(5),f={borderCollapse:"collapse"},O={border:"1px solid black",paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",userSelect:"none"},v=Object(g.a)(Object(g.a)({},O),{},{fontSize:12}),h={borderTop:"1px solid black",borderLeft:"1px solid black",borderRight:"1px solid black",padding:"0.25rem",textAlign:"center",fontSize:20,fontWeight:"bold",background:"#ABEBC6",userSelect:"none"};function y(e,t,i){return t&&e.activeLessonIndex===i?"Active"===e.status?"lightgreen":"#FFF380":"white"}var K=[{startHour:8,startMinute:0,endHour:8,endMinute:45},{startHour:8,startMinute:55,endHour:9,endMinute:40},{startHour:9,startMinute:50,endHour:10,endMinute:35},{startHour:11,startMinute:5,endHour:11,endMinute:50},{startHour:12,startMinute:10,endHour:12,endMinute:55},{startHour:13,startMinute:5,endHour:13,endMinute:55}];function L(e){return e>9?"".concat(e):"0".concat(e)}function G(e,t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),e.startHour,e.startMinute).getTime()}function M(e,t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),e.endHour,e.endMinute).getTime()}function S(e,t){var i=Math.ceil((t-e)/1e3),s=Math.floor(i/3600),a=Math.floor((i-3600*s)/60),r=i-s/3600-60*a,n=D(s),c=D(a),u=D(r);return"".concat(n,":").concat(c,":").concat(u)}function D(e){return e>9?"".concat(e):"0".concat(e)}function w(e){for(var t=0;t<K.length;t++){var i=K[t],s=G(i,e),a=M(i,e),r=e.getTime();if(r>=s&&r<=a)return{activeLessonIndex:t,status:"Active",timeLeft:"(liko ".concat(S(r,a),")"),dow:e.getDay()};if(r<s)return{activeLessonIndex:t,status:"Inactive",timeLeft:"(prasid\u0117s po ".concat(S(r,s),")"),dow:e.getDay()};if(t<K.length-1){var n=G(K[t+1],e);if(r<n)return{activeLessonIndex:t+1,status:"Inactive",timeLeft:"(prasid\u0117s po ".concat(S(r,n),")"),dow:e.getDay()}}}return{activeLessonIndex:-1,status:"Inactive",dow:e.getDay()}}var W=function(e){var t=e.index,i=e.activeLessonStatus,s=e.activeDayOfWeek,a=e.lecture,r=K[t],n=function(e,t,i){var s=y(e,t,i);return Object(g.a)(Object(g.a)({},v),{},{background:s})}(i,s,t),c=function(e,t,i){var s=y(e,t,i);return Object(g.a)(Object(g.a)({},O),{},{background:s})}(i,s,t),u=function(e){var t=e.startHour,i=e.endHour,s=e.startMinute,a=e.endMinute;return"".concat(t,":").concat(L(s)," - ").concat(i,":").concat(L(a))}(r),o=i.activeLessonIndex===t&&s&&i.timeLeft?Object(l.jsx)("span",{style:{color:"red"},children:" ".concat(i.timeLeft)}):void 0;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{style:n,children:u}),Object(l.jsxs)("td",{style:c,children:[a,o]})]},t)},T=function(e){var t=e.lessons,i=e.activeLessonStatus,s=e.activeDayOfWeek,a=t.lessons.map((function(e,a){return Object(l.jsx)(W,{activeDayOfWeek:s,activeLessonStatus:i,index:a,lecture:e},"".concat(t.dayOfWeek,"_").concat(a))})),r=function(e){switch(e){case 1:return"Pirmadienis";case 2:return"Antradienis";case 3:return"Tre\u010diadienis";case 4:return"Ketvirtadienis";case 5:return"Penktadienis";default:return""}}(t.dayOfWeek),n=function(e){var t=e?"#ABEBC6":"lightgray";return Object(g.a)(Object(g.a)({},h),{},{background:t})}(s);return Object(l.jsxs)("div",{style:{width:"fit-content"},children:[Object(l.jsx)("div",{style:n,children:r}),Object(l.jsx)("table",{style:f,children:Object(l.jsx)("tbody",{children:a})})]})},H=function(e){var t=e.monday,i=e.tuesday,a=e.wednesday,r=e.thursday,n=e.friday,c=Object(s.useState)(w(new Date)),u=Object(o.a)(c,2),d=u[0],j=u[1];return Object(s.useEffect)((function(){setInterval((function(){var e=w(new Date);j(e)}),1e3)}),[]),Object(l.jsxs)("div",{style:{marginLeft:"0.5rem",marginTop:"0.5rem",display:"flex",flexWrap:"wrap",gridRowGap:"10px",gridColumnGap:"10px"},children:[Object(l.jsx)(T,{lessons:t,activeLessonStatus:d,activeDayOfWeek:d.dow===t.dayOfWeek}),Object(l.jsx)(T,{lessons:i,activeLessonStatus:d,activeDayOfWeek:d.dow===i.dayOfWeek}),Object(l.jsx)(T,{lessons:a,activeLessonStatus:d,activeDayOfWeek:d.dow===a.dayOfWeek}),Object(l.jsx)(T,{lessons:r,activeLessonStatus:d,activeDayOfWeek:d.dow===r.dayOfWeek}),Object(l.jsx)(T,{lessons:n,activeLessonStatus:d,activeDayOfWeek:d.dow===n.dayOfWeek})]})},N={dayOfWeek:1,lessons:["Lietuvi\u0173 kalba","Muzika","Lietuvi\u0173 kalba","Matematika","Pasaulio pa\u017einimas"]},P={dayOfWeek:2,lessons:["Lietuvi\u0173 kalba","K\u016bno kult\u016bra","Lietuvi\u0173 kalba","Matematika","Dail\u0117 ir technologijos"]},A={dayOfWeek:3,lessons:["Lietuvi\u0173 kalba","K\u016bno kult\u016bra","Lietuvi\u0173 kalba","Matematika","Etika/Tikyba"]},F={dayOfWeek:4,lessons:["Lietuvi\u0173 kalba","Teatras","Matematika","Pasaulio pa\u017einimas"]},I={dayOfWeek:5,lessons:["Lietuvi\u0173 kalba","K\u016bno kult\u016bra","Dail\u0117 ir technologijos","Muzika"]},B=function(){return Object(l.jsx)(H,{monday:N,tuesday:P,wednesday:A,thursday:F,friday:I})},C={dayOfWeek:1,lessons:["Fizinis ugdymas","Angl\u0173 kalba","Matematika","Lietuvi\u0173 kalba","Pasaulio pa\u017einimas"]},z={dayOfWeek:2,lessons:["Lietuvi\u0173 kalba","Matematika","Lietuvi\u0173 kalba","Muzika","Dail\u0117 ir technologijos"]},R={dayOfWeek:3,lessons:["Etika/Tikyba","Angl\u0173 kalba","Matematika","Lietuvi\u0173 kalba","Lietuvi\u0173 kalba"]},E={dayOfWeek:4,lessons:["Lietuvi\u0173 kalba","Matematika","Lietuvi\u0173 kalba","Pasaulio pa\u017einimas","Dail\u0117 ir technologijos"]},J={dayOfWeek:5,lessons:["Lietuvi\u0173 kalba","Matematika","Lietuvi\u0173 kalba","Muzika","Fizinis ugdymas"]},V=function(){return Object(l.jsx)(H,{monday:C,tuesday:z,wednesday:R,thursday:E,friday:J})},Y=[[{muscleGroup:"Ap\u0161ilimas",exercise:"Takelis+pramank\u0161tos pratimai",series:["10 min"]},{muscleGroup:"Presas",exercise:"Susirietimai su svoriu 1 koja sulenkta",series:["4x12"]},{muscleGroup:"Bicepsas",exercise:"Lenkimas treniruoklyje",series:["3x12 2.5Kg"]},{muscleGroup:"Bicepsas",exercise:"Lenkimas su apatiniu trosu tiesia ranken\u0117le",series:["3x12 2 plytos"]},{muscleGroup:"Tricepsas",exercise:"Tiesimas su vir\u0161utiniu trosu virv\u0117",series:["3x12 3 plytel\u0117s"]},{muscleGroup:"Tricepsas",exercise:"Tiesimas su hanteliais gulint",series:["3x12 2 Kg"]},{muscleGroup:"Kojos",exercise:"6) Tiesimas s\u0117dint 12 i\u0161kart pama\u017eini svori pusiau ir dar 12 + izometrija pritupus",series:["3x12/12+3x20s 10 Kg"]},{muscleGroup:"Kojos",exercise:"\u012etupstai, galin\u0117 koja ant pakylos (b\u016bt pasvirus \u012f priek\u012f)",series:["3x12"]},{muscleGroup:"Kojos",exercise:"Koju platforma s\u0117dint pla\u010diai+Koju platforma s\u0117dint siaurai",series:["3x12 20 Kg"]}]],q=function(){return Object(l.jsx)(p,{trainingData:Y})},_={marginLeft:"0.5rem",padding:"1rem",border:"1px solid black",background:"lightgreen",borderRadius:"5px",userSelect:"none"},Q=["Darius","Gabija","Audrius","Jolita"],U=function(){var e=Object(u.f)();return Object(l.jsx)("div",{style:{marginTop:"1.5rem"},children:Q.map((function(t){return Object(l.jsx)("span",{style:_,onClick:function(){return e.push("/".concat(t))},children:t})}))})};function X(){return Object(l.jsx)("div",{children:"Page not found"})}function Z(){return Object(l.jsx)(c.a,{basename:"/",children:Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{exact:!0,path:"/",children:Object(l.jsx)(U,{})}),Object(l.jsx)(u.a,{path:"/Darius",children:Object(l.jsx)(B,{})}),Object(l.jsx)(u.a,{path:"/Gabija",children:Object(l.jsx)(V,{})}),Object(l.jsx)(u.a,{path:"/Audrius",children:Object(l.jsx)(k,{})}),Object(l.jsx)(u.a,{path:"/Jolita",children:Object(l.jsx)(q,{})}),Object(l.jsx)(u.a,{path:"*",children:Object(l.jsx)(X,{})})]})})}var $=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,30)).then((function(t){var i=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;i(e),s(e),a(e),r(e),n(e)}))};n.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(Z,{})}),document.getElementById("root")),$()}},[[29,1,2]]]);
//# sourceMappingURL=main.59d6318d.chunk.js.map