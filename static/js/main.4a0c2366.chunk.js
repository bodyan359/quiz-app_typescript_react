(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{29:function(n,e,t){"use strict";t.r(e);var r,a,c,s=t(0),i=t.n(s),o=t(15),u=t.n(o),l=t(3),d=t(4),p=t.n(d),b=t(9),f=t(2),x=t(5),j=t(6),g=j.b.div(r||(r=Object(x.a)(["\n  max-width: 1100px;\n  background: #ebfeff;\n  border-radius: 10px;\n  border: 2px solid #0085a3;\n  padding: 20px;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n  text-align: center;\n  p {\n    font-size: 1rem;\n  }\n"]))),h=j.b.div(a||(a=Object(x.a)(["\n  transition: all 0.3s ease;\n  :hover {\n    opacity: 0.8;\n  }\n  button {\n    cursor: pointer;\n    user-select: none;\n    font-size: 0.8rem;\n    width: 100%;\n    height: 40px;\n    margin: 5px 0;\n    background: ",";\n    border: 3px solid #ffffff;\n    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    color: #fff;\n    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n  }\n"])),(function(n){var e=n.correct,t=n.userClicked;return e?"linear-gradient(90deg, #56FFA4, #59BC86)":!e&&t?"linear-gradient(90deg, #FF5656, #C16868)":"linear-gradient(90deg, #56ccff, #6eafb4)"})),m=t(1),O=function(n){var e=n.question,t=n.answers,r=n.callback,a=n.userAnswer,c=n.questionNr,s=n.totalQuestions;return Object(m.jsxs)(g,{children:[Object(m.jsxs)("p",{className:"number",children:["Question: ",c," / ",s]}),Object(m.jsx)("p",{dangerouslySetInnerHTML:{__html:e}}),Object(m.jsx)("div",{children:t.map((function(n,e){return Object(m.jsx)(h,{correct:(null===a||void 0===a?void 0:a.correctAnswer)===n,userClicked:(null===a||void 0===a?void 0:a.answer)===n,children:Object(m.jsx)("button",{disabled:!!a,value:n,onClick:r,children:Object(m.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})})},e)}))})]})},v=t(13);!function(n){n.EASY="easy",n.MEDIUM="medium",n.HARD="hard"}(c||(c={}));var w,k,y=function(){var n=Object(b.a)(p.a.mark((function n(e,t){var r,a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(e,"&$difficulty=").concat(t,"&type=multiple"),n.next=3,fetch(r);case 3:return n.next=5,n.sent.json();case 5:return a=n.sent,n.abrupt("return",a.results.map((function(n){return Object(v.a)(Object(v.a)({},n),{},{answers:(e=[].concat(Object(l.a)(n.incorrect_answers),[n.correct_answer]),Object(l.a)(e).sort((function(){return Math.random()-.5})))});var e})));case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),S=t.p+"static/media/background.21b2712f.png",z=Object(j.a)(w||(w=Object(x.a)(["\n  html {\n    height: 100%;\n  }\n  body {\n    background-image: url(",");\n    background-size: cover;\n    margin: 0;\n    padding: 0 20px;\n    display: flex;\n    justify-content: center;\n  }\n  * {\n    font-family: 'Catamaran', sans-serif;\n    box-sizing: border-box;\n  }\n"])),S),q=j.b.div(k||(k=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  > p {\n    color: #fff;\n  }\n  .score {\n    color: #fff;\n    font-size: 2rem;\n    margin: 0;\n  }\n  h1 {\n    font-family: Fascinate Inline;\n    background-image: linear-gradient(180deg, #fff, #87f1ff);\n    font-weight: 400;\n    background-size: 100%;\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    -moz-text-fill-color: transparent;\n    filter: drop-shadow(2px 2px #0085a3);\n    font-size: 70px;\n    text-align: center;\n    margin: 20px;\n  }\n  .start,\n  .next {\n    cursor: pointer;\n    background: linear-gradient(180deg, #ffffff, #ffcc91);\n    border: 2px solid #d38558;\n    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n    border-radius: 10px;\n    height: 40px;\n    margin: 20px 0;\n    padding: 0 40px;\n  }\n  .start {\n    max-width: 200px;\n  }\n"])));var A=function(){var n=i.a.useState(!1),e=Object(f.a)(n,2),t=e[0],r=e[1],a=i.a.useState([]),s=Object(f.a)(a,2),o=s[0],u=s[1],d=i.a.useState(0),x=Object(f.a)(d,2),j=x[0],g=x[1],h=i.a.useState([]),v=Object(f.a)(h,2),w=v[0],k=v[1],S=i.a.useState(0),A=Object(f.a)(S,2),C=A[0],N=A[1],_=i.a.useState(!0),F=Object(f.a)(_,2),M=F[0],I=F[1],E=function(){var n=Object(b.a)(p.a.mark((function n(){var e;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(!0),I(!1),n.prev=2,n.next=5,y(10,c.EASY);case 5:e=n.sent,u(e),N(0),k([]),g(0),r(!1),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(2),console.log(n.t0),console.log("error");case 17:case"end":return n.stop()}}),n,null,[[2,13]])})));return function(){return n.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(z,{}),Object(m.jsx)(q,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"TypeScript React Quiz"}),M||10===w.length?Object(m.jsx)("button",{className:"start",onClick:E,children:"Start"}):null,!M&&Object(m.jsxs)("p",{className:"score",children:["Score: ",C]}),t&&Object(m.jsx)("p",{children:"Loading..."}),t||M?null:Object(m.jsx)(O,{questionNr:j+1,totalQuestions:10,question:o[j].question,answers:o[j].answers,userAnswer:w?w[j]:void 0,callback:function(n){if(!M){var e=n.currentTarget.value,t=o[j].correct_answer===e;t&&N((function(n){return n+1}));var r={question:o[j].question,answer:e,correct:t,correctAnswer:o[j].correct_answer};k((function(n){return[].concat(Object(l.a)(n),[r])}))}}}),M||t||w.length!==j+1||9===j?null:Object(m.jsx)("button",{className:"next",onClick:function(){var n=j+1;10===n?I(!0):g(n)},children:"Next"})]})})]})};u.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(A,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.4a0c2366.chunk.js.map