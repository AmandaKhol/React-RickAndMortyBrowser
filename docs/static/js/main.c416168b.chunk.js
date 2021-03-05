(this["webpackJsonpproject-6"]=this["webpackJsonpproject-6"]||[]).push([[0],{17:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(19),n=a.n(s),r=a(21),i=a(12),l=a(2),j=(a(17),a(26),function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,species:e.species,status:e.status,photo:e.image,origin:e.origin.name,episodes:e.episode.length}}))}))}),o=a.p+"static/media/rym.de13d484.png",d=(a(27),a(8)),h=a(0),u=Object(h.jsx)("i",{className:"fas fa-user"}),m=Object(h.jsx)("i",{className:"fas fa-meteor"}),p=function(e){return"human"===e.toLowerCase()?u:m},b=Object(h.jsx)("i",{className:"fas fa-heartbeat"}),O=Object(h.jsx)("i",{className:"fas fa-dizzy"}),f=Object(h.jsx)("i",{className:"fas fa-question-circle"}),x=function(e){return"alive"===e.toLowerCase()?b:"dead"===e.toLowerCase()?O:f},_=function(e){var t=e.character,a=t.name,c=t.species,s=t.status,n=t.photo,r=t.origin,i=t.episodes;return Object(h.jsxs)("section",{className:"detail",children:[Object(h.jsxs)(d.b,{className:"detail__return",to:"/",children:[Object(h.jsx)("i",{className:"detail__return--icon fas fa-angle-left"})," Volver"]}),Object(h.jsxs)("div",{className:"detail__card",children:[Object(h.jsxs)("div",{className:"detail__card--info",children:[Object(h.jsx)("h3",{children:a}),Object(h.jsxs)("h4",{children:["Status:",Object(h.jsxs)("span",{className:"detail__card--span",children:[s," - ",x(s)]})]}),Object(h.jsxs)("h4",{children:["Species:",Object(h.jsxs)("span",{className:"detail__card--span",children:[c," - ",p(c)]})]}),Object(h.jsxs)("h4",{children:["Origin:",Object(h.jsxs)("span",{className:"detail__card--span",children:[" ",r]})]}),Object(h.jsxs)("h4",{children:["Episodes:",Object(h.jsx)("span",{className:"detail__card--span",children:i})]})]}),Object(h.jsx)("img",{className:"detail__card--photo",src:n,alt:a+" photo",title:a+" photo"})]})]})},N=(a(34),a(35),a(36),function(e){return Object(h.jsx)("button",{className:"reset-btn",type:"button",onClick:function(){e.handleReset()},children:"Reset"})}),g=function(e){var t=function(t){return e.handleSelect(t.target.id,t.target.value)};return Object(h.jsxs)("section",{className:"form-section",children:[Object(h.jsxs)("form",{className:"form",action:"",onSubmit:function(e){e.preventDefault()},children:[Object(h.jsxs)("fieldset",{className:"form__fieldset",children:[Object(h.jsx)("label",{htmlFor:"character",children:"Search a character:"}),Object(h.jsx)("input",{className:"form__input",id:"character",type:"text",value:e.inputValue,onChange:t,placeholder:"Name..."})]}),Object(h.jsxs)("fieldset",{className:"form__fieldset",children:[Object(h.jsx)("label",{htmlFor:"species",children:"Select the species:"}),Object(h.jsxs)("select",{className:"form__select",name:"species",id:"species",onChange:t,value:e.speciesSelect,children:[Object(h.jsx)("option",{value:"all",children:"-"}),e.species.map((function(e,t){return Object(h.jsx)("option",{value:e,children:e},t)}))]})]})]}),Object(h.jsx)(N,{handleReset:e.handleReset})]})},v=a(7),w=a.n(v),S=(a(37),function(e){var t=e.character,a=t.id,c=t.name,s=t.photo,n=t.species,r=t.status;return Object(h.jsxs)(d.b,{to:"/detail/".concat(a),className:"character__item",children:[Object(h.jsxs)("div",{className:"character__item--header",children:[Object(h.jsx)("h3",{className:"character__item--title",children:c}),Object(h.jsx)("h4",{className:"character__item--species",children:n}),Object(h.jsxs)("div",{className:"character__item--icons",children:[Object(h.jsx)("span",{children:x(r)}),Object(h.jsx)("span",{children:p(n)})]})]}),Object(h.jsx)("img",{className:"character__item--image",src:s,alt:c+" photo",title:c+" photo"})]})}),C=(a(38),function(e){return Object(h.jsx)("section",{className:"characters",children:Object(h.jsx)("ul",{className:"characters__list characters__list--".concat(e.characters.length),children:e.characters.map((function(t){return Object(h.jsx)("li",{className:"character__item",children:Object(h.jsx)(S,{character:t,handleDetailCharacter:e.handleDetailCharacter})},t.id)}))})})}),y=C;C.propsTypes={characters:w.a.array};var V=function(e){return Object(h.jsx)("div",{className:"content__warning",children:204===e.warningCode?Object(h.jsxs)("p",{className:"content__warning--message",children:["No hay ning\xfan personaje que coincida con la palabra:",Object(h.jsxs)("span",{className:"content__warning--span",children:[" ",e.inputValue]})]}):400===e.warningCode?Object(h.jsx)("p",{className:"content__warning--message",children:"El personaje que buscas no existe"}):Object(h.jsx)("p",{className:"content__warning--message",children:"P\xe1gina no encontrada"})})},R=V;V.propTyes={warningCode:w.a.number,inputValue:w.a.string};var L=function(e){return Object(h.jsxs)("section",{className:"browser",children:[Object(h.jsx)(g,{handleSelect:e.handleSelect,handleReset:e.handleReset,inputValue:e.inputValue,species:e.species,speciesSelect:e.speciesSelect}),0!==e.characters.length?Object(h.jsx)(y,{characters:e.characters}):Object(h.jsx)(R,{warningCode:204,inputValue:e.inputValue})]})},k=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),d=Object(i.a)(n,2),u=d[0],m=d[1],p=Object(c.useState)("all"),b=Object(i.a)(p,2),O=b[0],f=b[1];Object(c.useEffect)((function(){j().then((function(e){var t=e.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return s(t)}))}),[]);var x=a.map((function(e){return e.species})),N=Object(r.a)(new Set(x)),g=a.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())})).filter((function(e){return"all"===O||e.species===O}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("header",{className:"page__header",children:Object(h.jsx)("img",{className:"page__header--image",src:o,alt:"logo",title:"logo"})}),Object(h.jsx)("main",{className:"main",children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{exact:!0,path:"/",children:Object(h.jsx)(L,{inputValue:u,handleSelect:function(e,t){"species"===e?f(t):m(t)},handleReset:function(){m(""),f("all")},characters:g,species:N,speciesSelect:O})}),Object(h.jsx)(l.a,{path:"/detail/:id",render:function(e){var t=e.match.params.id,c=parseInt(t),s=c+"",n=a.find((function(e){return e.id===c}));return!n||s!==t||isNaN(c)?Object(h.jsx)(R,{warningCode:400}):Object(h.jsx)(_,{character:n})}}),Object(h.jsx)(l.a,{children:Object(h.jsx)(R,{warningCode:404})})]})}),Object(h.jsx)("footer",{className:"page__footer",children:Object(h.jsx)("small",{children:"Adalab and Amanda Khol \xa9 2021"})})]})};n.a.render(Object(h.jsx)(d.a,{children:Object(h.jsx)(k,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.c416168b.chunk.js.map