(this["webpackJsonpfamily-stuff"]=this["webpackJsonpfamily-stuff"]||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a.n(i),r=a(14),n=a.n(r),u=(a(21),a(7)),c=a(2),o=a(8),l=(a(22),a(0)),d=function(e){var t=e.data.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"sport",children:e.muscleGroup}),Object(l.jsx)("td",{className:"sport",children:e.exercise}),Object(l.jsx)("td",{className:"sport",children:e.series.map((function(e){return Object(l.jsx)("div",{children:e})}))})]})}));return Object(l.jsxs)("table",{className:"tableSport",children:[Object(l.jsxs)("thead",{children:[Object(l.jsx)("th",{className:"sportHeader",children:"Raumen\u0173 grup\u0117"}),Object(l.jsx)("th",{className:"sportHeader",children:"Pratimas"}),Object(l.jsx)("th",{className:"sportHeader",children:"Serijos / Kartojimai"})]}),Object(l.jsx)("tbody",{children:t})]})},j=[[{muscleGroup:"Ap\u0161ilimas",exercise:"\u0116jimas",series:["5 min"]},{muscleGroup:"Presas",exercise:"Susirietimas su kamuolio u\u017ed\u0117jimo ant koj\u0173",series:["4x10"]},{muscleGroup:"Krutin\u0117",exercise:"Spausti laisva \u0161tanga nuo lygaus",series:["10 x 10 Kg","8 x 15 Kg","6 x 20 Kg","5 x 25 Kg"]},{muscleGroup:"Kr\u016btin\u0117",exercise:"Spausti \u012ftvirtinta \u0161tanga kampu + suvedimai stakl\u0117se",series:["4x10 30 Kg","4x12 20 KG"]},{muscleGroup:"Nugara",exercise:"Vir\u0161utinio torso trauka u\u017e galvos",series:["4x12 20 Kg"]},{muscleGroup:"Nugara",exercise:"Trauka s\u0117dint treniruoklyje pla\u010diai",series:["4x12 20 Kg"]},{muscleGroup:"Bicepsas",exercise:"Lenkimas treniruoklyje+lenkimas su \u0161tanga",series:["4x12 15Kg","4x10 15 Kg"]}],[{muscleGroup:"Ap\u0161ilimas",exercise:"Dviratis",series:["5 min"]},{muscleGroup:"Presas",exercise:"Susirietimai \u012fstri\u017einiams",series:["4x12"]},{muscleGroup:"Kojos",exercise:"Lenkimas s\u0117dint",series:["4x15 25 Kg"]},{muscleGroup:"Kojos",exercise:"Lenkimas gulint",series:["3x12 10 Kg"]},{muscleGroup:"Kojos",exercise:"Tiesimas s\u0117dint paskui pama\u017einant svor\u012f",series:["4x12+12 2x10 Kg"]},{muscleGroup:"Kojos",exercise:"Koj\u0173 platforma gulint",series:["4x15 50 Kg"]},{muscleGroup:"Kojos",exercise:"Suvedimai",series:["4x15 35 Kg"]},{muscleGroup:"Blauzdos",exercise:"Su koju platforma didinant kas plytele",series:["18x 40 Kg","15x50 Kg","12x60 Kg","10x70 Kg","08x80 Kg"]}],[{muscleGroup:"Ap\u0161ilimas",exercise:"\u0116jimas",series:["5 min"]},{muscleGroup:"Presas",exercise:"Susirietimai 1 koja i\u0161tiesta, kita sulenkta",series:["4x12"]},{muscleGroup:"Nugara",exercise:"Vir\u0161utinio troso trauka link smakro + Apatinio troso trauka s\u0117dint (plati ranken\u0117l\u0117)",series:["4x12 25 Kg","4x12 16 Kg"]},{muscleGroup:"Pe\u010diai",exercise:"Mostai su hanteliais per \u0161alis + mostai treniruoklyje",series:["4x15 5 Kg","4x15 15 Kg"]},{muscleGroup:"Pe\u010diai",exercise:"Spausti \u012ftv \u0161tanga i\u0161 priekio, vienodu tempu, \u017eemai nuleisti ir siauras pa\u0117mimas",series:["4x12 20 Kg"]},{muscleGroup:"Tricepsas",exercise:"Tiesimas su vir\u0161utiniu trosu virve + su raityta \u0161tanga gulint nuo kaktos",series:["1x12 25 Kg","3x12 20 Kg","4x12 2x2.5 Kg"]}]],x=function(){var e=Object(i.useState)(0),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{style:{marginRight:"1rem",padding:"0.5rem"},onClick:function(){return s((function(e){return 0===e?j.length-1:e-1}))},children:"<"}),Object(l.jsxs)("span",{style:{marginLeft:"4rem",marginRight:"4rem"},children:[a+1," diena"]}),Object(l.jsx)("button",{style:{marginLeft:"1rem",padding:"0.5rem"},onClick:function(){return s((function(e){return e===j.length-1?0:e+1}))},children:">"}),Object(l.jsx)(d,{data:j[a]})]})},m=a(5),b={borderCollapse:"collapse"},k={border:"1px solid black",paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",userSelect:"none"},g=Object(m.a)(Object(m.a)({},k),{},{fontSize:12}),p={borderTop:"1px solid black",borderLeft:"1px solid black",borderRight:"1px solid black",padding:"0.25rem",textAlign:"center",fontSize:20,fontWeight:"bold",background:"#ABEBC6",userSelect:"none"};function O(e,t){return t&&e?"lightgreen":"white"}var f=[{startHour:8,startMinute:0,endHour:8,endMinute:45},{startHour:8,startMinute:55,endHour:9,endMinute:40},{startHour:9,startMinute:50,endHour:10,endMinute:35},{startHour:11,startMinute:5,endHour:11,endMinute:50},{startHour:12,startMinute:10,endHour:12,endMinute:55},{startHour:13,startMinute:5,endHour:13,endMinute:55}];function h(e){return e>9?"".concat(e):"0".concat(e)}function v(e){for(var t=0;t<f.length;t++){if(y(e,f[t]))return t}return-1}function y(e,t){var a=new Date(e.getFullYear(),e.getMonth(),e.getDate(),t.startHour,t.startMinute).getTime(),i=new Date(e.getFullYear(),e.getMonth(),e.getDate(),t.endHour,t.endMinute).getTime(),s=e.getTime();return s>=a&&s<=i}var K=function(e){var t=e.index,a=e.activeLessonIndex,i=e.activeDayOfWeek,s=e.lecture,r=f[t],n=a===t,u=function(e,t){var a=O(e,t);return Object(m.a)(Object(m.a)({},g),{},{background:a})}(n,i),c=function(e,t){var a=O(e,t);return Object(m.a)(Object(m.a)({},k),{},{background:a})}(n,i),o=function(e){var t=e.startHour,a=e.endHour,i=e.startMinute,s=e.endMinute;return"".concat(t,":").concat(h(i)," - ").concat(a,":").concat(h(s))}(r);return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{style:u,children:o}),Object(l.jsx)("td",{style:c,children:s})]},t)},L=function(e){var t=e.lessons,a=e.activeLessonIndex,i=e.activeDayOfWeek,s=t.lessons.map((function(e,t){return Object(l.jsx)(K,{activeDayOfWeek:i,activeLessonIndex:a,index:t,lecture:e})})),r=function(e){switch(e){case 1:return"Pirmadienis";case 2:return"Antradienis";case 3:return"Tre\u010diadienis";case 4:return"Ketvirtadienis";case 5:return"Penktadienis";default:return""}}(t.dayOfWeek),n=function(e){var t=e?"#ABEBC6":"lightgray";return Object(m.a)(Object(m.a)({},p),{},{background:t})}(i);return Object(l.jsxs)("div",{style:{width:"fit-content"},children:[Object(l.jsx)("div",{style:n,children:r}),Object(l.jsx)("table",{style:b,children:Object(l.jsx)("tbody",{children:s})})]})},M=function(e){var t=e.monday,a=e.tuesday,s=e.wednesday,r=e.thursday,n=e.friday,u=new Date,c=u.getDay(),d=Object(i.useState)(v(u)),j=Object(o.a)(d,2),x=j[0],m=j[1];return setInterval((function(){var e=v(new Date);m(e)}),3e4),Object(l.jsxs)("div",{style:{marginLeft:"0.5rem",marginTop:"0.5rem",display:"flex",flexWrap:"wrap",gridRowGap:"10px",gridColumnGap:"10px"},children:[Object(l.jsx)(L,{lessons:t,activeLessonIndex:x,activeDayOfWeek:c===t.dayOfWeek}),Object(l.jsx)(L,{lessons:a,activeLessonIndex:x,activeDayOfWeek:c===a.dayOfWeek}),Object(l.jsx)(L,{lessons:s,activeLessonIndex:x,activeDayOfWeek:c===s.dayOfWeek}),Object(l.jsx)(L,{lessons:r,activeLessonIndex:x,activeDayOfWeek:c===r.dayOfWeek}),Object(l.jsx)(L,{lessons:n,activeLessonIndex:x,activeDayOfWeek:c===n.dayOfWeek})]})},G={dayOfWeek:1,lessons:["Lietuvi\u0173 kalba","Muzika","Lietuvi\u0173 kalba","Matematika","Pasaulio pa\u017einimas"]},W={dayOfWeek:2,lessons:["Lietuvi\u0173 kalba","K\u016bno kult\u016bra","Lietuvi\u0173 kalba","Matematika","Dail\u0117 ir technologijos"]},D={dayOfWeek:3,lessons:["Lietuvi\u0173 kalba","K\u016bno kult\u016bra","Lietuvi\u0173 kalba","Matematika","Etika/Tikyba"]},H={dayOfWeek:4,lessons:["Lietuvi\u0173 kalba","Teatras","Matematika","Pasaulio pa\u017einimas"]},S={dayOfWeek:5,lessons:["Lietuvi\u0173 kalba","K\u016bno kult\u016bra","Dail\u0117 ir technologijos","Muzika"]},T=function(){return Object(l.jsx)(M,{monday:G,tuesday:W,wednesday:D,thursday:H,friday:S})},w={dayOfWeek:1,lessons:["Fizinis ugdymas","Angl\u0173 kalba","Matematika","Lietuvi\u0173 kalba","Pasaulio pa\u017einimas"]},P={dayOfWeek:2,lessons:["Lietuvi\u0173 kalba","Matematika","Lietuvi\u0173 kalba","Muzika","Dail\u0117 ir technologijos"]},A={dayOfWeek:3,lessons:["Etika/Tikyba","Angl\u0173 kalba","Matematika","Lietuvi\u0173 kalba","Lietuvi\u0173 kalba"]},I={dayOfWeek:4,lessons:["Lietuvi\u0173 kalba","Matematika","Lietuvi\u0173 kalba","Pasaulio pa\u017einimas","Dail\u0117 ir technologijos"]},C={dayOfWeek:5,lessons:["Lietuvi\u0173 kalba","Matematika","Lietuvi\u0173 kalba","Muzika","Fizinis ugdymas"]},N=function(){return Object(l.jsx)(M,{monday:w,tuesday:P,wednesday:A,thursday:I,friday:C})};function z(){return Object(l.jsxs)("div",{style:{marginLeft:"0.5rem",display:"flex",gridRowGap:"1rem",gridColumnGap:"1rem"},children:[Object(l.jsx)(u.b,{to:"/Darius",children:"Darius"}),Object(l.jsx)(u.b,{to:"/Gabija",children:"Gabija"}),Object(l.jsx)(u.b,{to:"/Audrius",children:"Audrius"})]})}function B(){return Object(l.jsx)("div",{children:"Page not found"})}var F=function(){return Object(l.jsx)(u.a,{basename:"/",children:Object(l.jsxs)(c.c,{children:[Object(l.jsx)(c.a,{exact:!0,path:"/",children:Object(l.jsx)(z,{})}),Object(l.jsx)(c.a,{path:"/Darius",children:Object(l.jsx)(T,{})}),Object(l.jsx)(c.a,{path:"/Gabija",children:Object(l.jsx)(N,{})}),Object(l.jsx)(c.a,{path:"/Audrius",children:Object(l.jsx)(x,{})}),Object(l.jsx)(c.a,{path:"*",children:Object(l.jsx)(B,{})})]})})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,30)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),i(e),s(e),r(e),n(e)}))};n.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(F,{})}),document.getElementById("root")),R()}},[[29,1,2]]]);
//# sourceMappingURL=main.c4706a7e.chunk.js.map