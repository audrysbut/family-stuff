(this["webpackJsonpfamily-stuff"]=this["webpackJsonpfamily-stuff"]||[]).push([[0],{21:function(e,s,i){},22:function(e,s,i){},29:function(e,s,i){"use strict";i.r(s);var a=i(1),t=i.n(a),r=i(14),n=i.n(r),u=(i(21),i(10)),c=i(2),o=i(5),l=i(7),d=(i(22),i(0)),m=function(e){var s=e.data.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"sport",children:e.muscleGroup}),Object(d.jsx)("td",{className:"sport",children:e.exercise}),Object(d.jsx)("td",{className:"sport",children:e.series.map((function(e){return Object(d.jsx)("div",{children:e})}))})]})}));return Object(d.jsxs)("table",{className:"tableSport",children:[Object(d.jsxs)("thead",{children:[Object(d.jsx)("th",{className:"sportHeader",children:"Raumen\u0173 grup\u0117"}),Object(d.jsx)("th",{className:"sportHeader",children:"Pratimas"}),Object(d.jsx)("th",{className:"sportHeader",children:"Serijos / Kartojimai"})]}),Object(d.jsx)("tbody",{children:s})]})},x={paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"0.3rem",paddingBottom:"0.3rem",marginRight:"1rem"},j=function(e){var s=e.trainingData,i=Object(a.useState)(0),t=Object(l.a)(i,2),r=t[0],n=t[1],u=s.map((function(e,s){var i=r===s?"lightgreen":void 0;return Object(d.jsxs)("button",{style:Object(o.a)(Object(o.a)({},x),{},{background:i}),onClick:function(){n(s)},children:[s+1," Diena"]})}));return Object(d.jsxs)(d.Fragment,{children:[u,Object(d.jsx)(m,{data:s[r]})]})},p=[[{muscleGroup:"Ap\u0161ilimas",exercise:"\u0116jimas",series:["5 min"]},{muscleGroup:"Presas",exercise:"Susirietimas su kamuolio u\u017ed\u0117jimo ant koj\u0173",series:["4x10"]},{muscleGroup:"Krutin\u0117",exercise:"Spausti laisva \u0161tanga nuo lygaus",series:["10 x 10 Kg","8 x 15 Kg","6 x 20 Kg","5 x 25 Kg"]},{muscleGroup:"Kr\u016btin\u0117",exercise:"Spausti \u012ftvirtinta \u0161tanga kampu + suvedimai stakl\u0117se",series:["4x10 30 Kg","4x12 20 KG"]},{muscleGroup:"Nugara",exercise:"Vir\u0161utinio torso trauka u\u017e galvos",series:["4x12 20 Kg"]},{muscleGroup:"Nugara",exercise:"Trauka s\u0117dint treniruoklyje pla\u010diai",series:["4x12 20 Kg"]},{muscleGroup:"Bicepsas",exercise:"Lenkimas treniruoklyje+lenkimas su \u0161tanga",series:["4x12 15Kg","4x10 15 Kg"]}],[{muscleGroup:"Ap\u0161ilimas",exercise:"Dviratis",series:["5 min"]},{muscleGroup:"Presas",exercise:"Susirietimai \u012fstri\u017einiams",series:["4x12"]},{muscleGroup:"Kojos",exercise:"Lenkimas s\u0117dint",series:["4x15 25 Kg"]},{muscleGroup:"Kojos",exercise:"Lenkimas gulint",series:["3x12 10 Kg"]},{muscleGroup:"Kojos",exercise:"Tiesimas s\u0117dint paskui pama\u017einant svor\u012f",series:["4x12+12 2x10 Kg"]},{muscleGroup:"Kojos",exercise:"Koj\u0173 platforma gulint",series:["4x15 50 Kg"]},{muscleGroup:"Kojos",exercise:"Suvedimai",series:["4x15 40 Kg"]},{muscleGroup:"Blauzdos",exercise:"Su koju platforma didinant kas plytele",series:["18x40 Kg","15x50 Kg","12x60 Kg","10x70 Kg","8x80 Kg"]}],[{muscleGroup:"Ap\u0161ilimas",exercise:"\u0116jimas",series:["5 min"]},{muscleGroup:"Presas",exercise:"Susirietimai 1 koja i\u0161tiesta, kita sulenkta",series:["4x12"]},{muscleGroup:"Nugara",exercise:"Vir\u0161utinio troso trauka link smakro + Apatinio troso trauka s\u0117dint (plati ranken\u0117l\u0117)",series:["4x12 25 Kg","4x12 16 Kg"]},{muscleGroup:"Pe\u010diai",exercise:"Mostai su hanteliais per \u0161alis + mostai treniruoklyje",series:["4x15 5 Kg","4x15 15 Kg"]},{muscleGroup:"Pe\u010diai",exercise:"Spausti \u012ftv \u0161tanga i\u0161 priekio, vienodu tempu, \u017eemai nuleisti ir siauras pa\u0117mimas",series:["4x12 20 Kg"]},{muscleGroup:"Tricepsas",exercise:"Tiesimas su vir\u0161utiniu trosu virve + su raityta \u0161tanga gulint nuo kaktos",series:["1x12 25 Kg","3x12 20 Kg","4x12 2x2.5 Kg"]}]],k=function(){return Object(d.jsx)(j,{trainingData:p})},g={borderCollapse:"collapse"},b={border:"1px solid black",paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",userSelect:"none"},f=Object(o.a)(Object(o.a)({},b),{},{fontSize:12}),v={borderTop:"1px solid black",borderLeft:"1px solid black",borderRight:"1px solid black",padding:"0.25rem",textAlign:"center",fontSize:20,fontWeight:"bold",background:"#ABEBC6",userSelect:"none"};function O(e,s,i){return s&&e.activeLessonIndex===i?"Active"===e.status?"lightgreen":"#FFF380":"white"}var h=[{startHour:8,startMinute:0,endHour:8,endMinute:45},{startHour:8,startMinute:55,endHour:9,endMinute:40},{startHour:9,startMinute:50,endHour:10,endMinute:35},{startHour:11,startMinute:5,endHour:11,endMinute:50},{startHour:12,startMinute:10,endHour:12,endMinute:55},{startHour:13,startMinute:5,endHour:13,endMinute:55}];function y(e){return e>9?"".concat(e):"0".concat(e)}function K(e,s){return new Date(s.getFullYear(),s.getMonth(),s.getDate(),e.startHour,e.startMinute).getTime()}function L(e,s){return new Date(s.getFullYear(),s.getMonth(),s.getDate(),e.endHour,e.endMinute).getTime()}function G(e,s){var i=Math.ceil((s-e)/1e3),a=Math.floor(i/3600),t=Math.floor((i-3600*a)/60),r=i-a/3600-60*t,n=M(a),u=M(t),c=M(r);return"".concat(n,":").concat(u,":").concat(c)}function M(e){return e>9?"".concat(e):"0".concat(e)}function S(e){for(var s=0;s<h.length;s++){var i=h[s],a=K(i,e),t=L(i,e),r=e.getTime();if(r>=a&&r<=t)return{activeLessonIndex:s,status:"Active",timeLeft:"(liko ".concat(G(r,t),")"),dow:e.getDay()};if(r<a)return{activeLessonIndex:s,status:"Inactive",timeLeft:"(prasid\u0117s po ".concat(G(r,a),")"),dow:e.getDay()};if(s<h.length-1){var n=K(h[s+1],e);if(r<n)return{activeLessonIndex:s+1,status:"Inactive",timeLeft:"(prasid\u0117s po ".concat(G(r,n),")"),dow:e.getDay()}}}return{activeLessonIndex:-1,status:"Inactive",dow:e.getDay()}}var D=function(e){var s=e.index,i=e.activeLessonStatus,a=e.activeDayOfWeek,t=e.lecture,r=h[s],n=function(e,s,i){var a=O(e,s,i);return Object(o.a)(Object(o.a)({},f),{},{background:a})}(i,a,s),u=function(e,s,i){var a=O(e,s,i);return Object(o.a)(Object(o.a)({},b),{},{background:a})}(i,a,s),c=function(e){var s=e.startHour,i=e.endHour,a=e.startMinute,t=e.endMinute;return"".concat(s,":").concat(y(a)," - ").concat(i,":").concat(y(t))}(r),l=i.activeLessonIndex===s&&a&&i.timeLeft?Object(d.jsx)("span",{style:{color:"red"},children:" ".concat(i.timeLeft)}):void 0;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{style:n,children:c}),Object(d.jsxs)("td",{style:u,children:[t,l]})]},s)},W=function(e){var s=e.lessons,i=e.activeLessonStatus,a=e.activeDayOfWeek,t=s.lessons.map((function(e,t){return Object(d.jsx)(D,{activeDayOfWeek:a,activeLessonStatus:i,index:t,lecture:e},"".concat(s.dayOfWeek,"_").concat(t))})),r=function(e){switch(e){case 1:return"Pirmadienis";case 2:return"Antradienis";case 3:return"Tre\u010diadienis";case 4:return"Ketvirtadienis";case 5:return"Penktadienis";default:return""}}(s.dayOfWeek),n=function(e){var s=e?"#ABEBC6":"lightgray";return Object(o.a)(Object(o.a)({},v),{},{background:s})}(a);return Object(d.jsxs)("div",{style:{width:"fit-content"},children:[Object(d.jsx)("div",{style:n,children:r}),Object(d.jsx)("table",{style:g,children:Object(d.jsx)("tbody",{children:t})})]})},T=function(e){var s=e.monday,i=e.tuesday,t=e.wednesday,r=e.thursday,n=e.friday,u=Object(a.useState)(S(new Date)),c=Object(l.a)(u,2),o=c[0],m=c[1];return Object(a.useEffect)((function(){setInterval((function(){var e=S(new Date);m(e)}),1e3)}),[]),Object(d.jsxs)("div",{style:{marginLeft:"0.5rem",marginTop:"0.5rem",display:"flex",flexWrap:"wrap",gridRowGap:"10px",gridColumnGap:"10px"},children:[Object(d.jsx)(W,{lessons:s,activeLessonStatus:o,activeDayOfWeek:o.dow===s.dayOfWeek}),Object(d.jsx)(W,{lessons:i,activeLessonStatus:o,activeDayOfWeek:o.dow===i.dayOfWeek}),Object(d.jsx)(W,{lessons:t,activeLessonStatus:o,activeDayOfWeek:o.dow===t.dayOfWeek}),Object(d.jsx)(W,{lessons:r,activeLessonStatus:o,activeDayOfWeek:o.dow===r.dayOfWeek}),Object(d.jsx)(W,{lessons:n,activeLessonStatus:o,activeDayOfWeek:o.dow===n.dayOfWeek})]})},w={dayOfWeek:1,lessons:["Lietuvi\u0173 kalba","Muzika","Lietuvi\u0173 kalba","Matematika","Pasaulio pa\u017einimas","Anglu kalba (burelis)"]},H={dayOfWeek:2,lessons:["Lietuvi\u0173 kalba","K\u016bno kult\u016bra","Lietuvi\u0173 kalba","Matematika","Dail\u0117 ir technologijos"]},A={dayOfWeek:3,lessons:["Lietuvi\u0173 kalba","K\u016bno kult\u016bra","Lietuvi\u0173 kalba","Matematika","Etika/Tikyba","Kvadratas (burelis)"]},P={dayOfWeek:4,lessons:["Lietuvi\u0173 kalba","Teatras","Matematika","Pasaulio pa\u017einimas","-","Saugus eismas (burelis)"]},N={dayOfWeek:5,lessons:["Lietuvi\u0173 kalba","K\u016bno kult\u016bra","Dail\u0117 ir technologijos","Muzika"]},B=function(){return Object(d.jsx)(T,{monday:w,tuesday:H,wednesday:A,thursday:P,friday:N})},F={dayOfWeek:1,lessons:["Fizinis ugdymas","Angl\u0173 kalba","Matematika","Lietuvi\u0173 kalba","Pasaulio pa\u017einimas"]},I={dayOfWeek:2,lessons:["Lietuvi\u0173 kalba","Matematika","Lietuvi\u0173 kalba","Muzika","Dail\u0117 ir technologijos","Choras (burelis)"]},C={dayOfWeek:3,lessons:["Etika/Tikyba","Angl\u0173 kalba","Matematika","Lietuvi\u0173 kalba","Lietuvi\u0173 kalba","Saugus eismas (burelis)"]},z={dayOfWeek:4,lessons:["Lietuvi\u0173 kalba","Matematika","Lietuvi\u0173 kalba","Pasaulio pa\u017einimas","Dail\u0117 ir technologijos","Choras (burelis)"]},R={dayOfWeek:5,lessons:["Lietuvi\u0173 kalba","Matematika","Lietuvi\u0173 kalba","Muzika","Fizinis ugdymas"]},E=function(){return Object(d.jsx)(T,{monday:F,tuesday:I,wednesday:C,thursday:z,friday:R})},J=[[{muscleGroup:"Ap\u0161ilimas",exercise:"Takelis+pramank\u0161tos pratimai",series:["10 min"]},{muscleGroup:"Presas",exercise:"Susirietimai su svoriu 1 koja sulenkta",series:["4x12"]},{muscleGroup:"Bicepsas",exercise:"Lenkimas treniruoklyje",series:["3x12 2.5Kg"]},{muscleGroup:"Bicepsas",exercise:"Lenkimas su apatiniu trosu tiesia ranken\u0117le",series:["3x12 2 plytos"]},{muscleGroup:"Tricepsas",exercise:"Tiesimas su vir\u0161utiniu trosu virv\u0117",series:["3x12 3 plytel\u0117s"]},{muscleGroup:"Tricepsas",exercise:"Tiesimas su hanteliais gulint",series:["3x12 2 Kg"]},{muscleGroup:"Kojos",exercise:"6) Tiesimas s\u0117dint 12 i\u0161kart pama\u017eini svori pusiau ir dar 12 + izometrija pritupus",series:["3x12/12+3x20s 10 Kg"]},{muscleGroup:"Kojos",exercise:"\u012etupstai, galin\u0117 koja ant pakylos (b\u016bt pasvirus \u012f priek\u012f)",series:["3x12"]},{muscleGroup:"Kojos",exercise:"Koju platforma s\u0117dint pla\u010diai+Koju platforma s\u0117dint siaurai",series:["3x12 20 Kg"]}],[{muscleGroup:"Ap\u0161ilimas",exercise:"\u0116jimas+pramank\u0161tos pratimai",series:["10 min"]},{muscleGroup:"Presas",exercise:"Susirietimai + koj\u0173 k\u0117limai + kojos p\u0117d\u0173 siekimai",series:["3x12","3x12","3x12"]},{muscleGroup:"Nugara",exercise:"10) Vir\u0161utinio troso trauka u\u017e galvos",series:["4x12 9.5 Kg"]},{muscleGroup:"Nugara",exercise:"1) Apatinio troso trauka \u012f pilv\u0105 (siaura rankena)",series:["3x12 6 Kg"]},{muscleGroup:"Nugara",exercise:"Trauka su hanteliais gulint kampu",series:["3x15 3 Kg"]},{muscleGroup:"Kojos",exercise:"Spirimai su svareliais klupint+dubens k\u0117limai mai\u0161u",series:["3x15+3x15 10 Kg"]},{muscleGroup:"Kojos",exercise:"14) Lenkimas s\u0117dint",series:["3x15 15 Kg"]},{muscleGroup:"Kojos",exercise:"Suvedimai s\u0117dint+skietimai s\u0117dint (pasvirus \u012f priek\u012f)",series:["3x20+3x20"]}]],V=function(){return Object(d.jsx)(j,{trainingData:J})},Y={marginLeft:"0.5rem",padding:"1rem",border:"1px solid black",background:"lightgreen",borderRadius:"5px",userSelect:"none"},_=["Darius","Gabija","Audrius","Jolita"],q=function(){var e=Object(c.f)();return Object(d.jsx)("div",{style:{marginTop:"1.5rem"},children:_.map((function(s){return Object(d.jsx)("span",{style:Y,onClick:function(){return e.push("/".concat(s))},children:s})}))})};function Q(){return Object(d.jsx)("div",{children:"Page not found"})}function U(){return Object(d.jsx)(u.a,{basename:"/",children:Object(d.jsxs)(c.c,{children:[Object(d.jsx)(c.a,{exact:!0,path:"/",children:Object(d.jsx)(q,{})}),Object(d.jsx)(c.a,{path:"/Darius",children:Object(d.jsx)(B,{})}),Object(d.jsx)(c.a,{path:"/Gabija",children:Object(d.jsx)(E,{})}),Object(d.jsx)(c.a,{path:"/Audrius",children:Object(d.jsx)(k,{})}),Object(d.jsx)(c.a,{path:"/Jolita",children:Object(d.jsx)(V,{})}),Object(d.jsx)(c.a,{path:"*",children:Object(d.jsx)(Q,{})})]})})}var X=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,30)).then((function(s){var i=s.getCLS,a=s.getFID,t=s.getFCP,r=s.getLCP,n=s.getTTFB;i(e),a(e),t(e),r(e),n(e)}))};n.a.render(Object(d.jsx)(t.a.StrictMode,{children:Object(d.jsx)(U,{})}),document.getElementById("root")),X()}},[[29,1,2]]]);
//# sourceMappingURL=main.30522f90.chunk.js.map