(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(n,t,e){n.exports=e(24)},24:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),a=e(4),i=e.n(a),c=e(3),u=e(1),l=e(2);function b(){var n=Object(u.a)(["\n      position: absolute;\n      right: 16px;\n      top: 16px;\n    "]);return b=function(){return n},n}function d(){var n=Object(u.a)(["\n  text-transform: uppercase;\n  border: dashed 2px var(--color-yellow);\n  border-radius: 25px;\n  background-color: transparent;\n  color: var(--color-yellow);\n  padding: 15px 40px;\n  font-size: var(--color-default);\n  font-weight: var(--color-bold);\n  outline: none;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.6;\n  }\n\n  ","\n"]);return d=function(){return n},n}function s(){var n=Object(u.a)(["\n  text-transform: uppercase;\n  color: var(--color-white);\n  font-size: var(--color-large);\n"]);return s=function(){return n},n}function f(){var n=Object(u.a)(["\n  top: calc(50% - 75px);\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  margin: 0 auto;\n  width: 300px;\n  height: 150px;\n  text-align: center;\n"]);return f=function(){return n},n}function p(){var n=Object(u.a)(["\n      visibility: 0;\n      opacity: 0;\n      z-index: -1;\n    "]);return p=function(){return n},n}function h(){var n=Object(u.a)(["\n  z-index: 10;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.7);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transition: all 400ms ease-in-out;\n\n  ","\n"]);return h=function(){return n},n}var g=l.c.div(h(),function(n){return n.disabled&&Object(l.b)(p())}),v=l.c.div(f()),m=l.c.h1(s()),x=l.c.button(d(),function(n){return n.pause&&Object(l.b)(b())});function O(){var n=Object(u.a)(["\n      background-color: var(--color-lightgrey);\n    "]);return O=function(){return n},n}function j(){var n=Object(u.a)(["\n  float: left;\n  background-color: var(--color-darkgrey);\n  width: 65px;\n  height: 70px;\n  margin: 0 3px;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 70px;\n  text-transform: uppercase;\n  font-size: var(--font-size-large);\n  color: var(--color-white);\n\n  ",";\n\n  &:first-child {\n    margin-left: 0;\n  }\n\n  &:last-child {\n    margin-right: 0;\n  }\n"]);return j=function(){return n},n}function w(){var n=Object(u.a)(["\n  z-index: 3;\n  position: absolute;\n  bottom: 40px;\n  width: calc(100% - 50px);\n  height: 70px;\n  margin: 0 auto;\n  text-align: center;\n  left: 0;\n  right: 0;\n"]);return w=function(){return n},n}var E=l.c.div(w()),y=l.c.div(j(),function(n){return n.disabled&&Object(l.b)(O())}),k=function(n){var t=n.spaces,e=n.correctLetters,r=n.wordFromAPI;return o.a.createElement(E,null,t.map(function(n,t){return o.a.createElement(y,{disabled:!0,key:"space-".concat(t)})}),r.map(function(n,t){return o.a.createElement(y,{key:t},e.find(function(t){return t===n})?n:"")}))};function F(){var n=Object(u.a)(["\n  text-align: center;\n  color: var(--color-blue);\n  float: left;\n  font-size: var(--font-size-large);\n  height: 70px;\n  margin: 10px;\n  text-transform: uppercase;\n\n  &:first-child {\n    margin-left: 0;\n  }\n\n  &:last-child {\n    margin-right: 0;\n  }\n"]);return F=function(){return n},n}function L(){var n=Object(u.a)(["\n  width: 100%;\n  height: 70px;\n"]);return L=function(){return n},n}function C(){var n=Object(u.a)(["\n  text-transform: uppercase;\n  color: var(--color-darkgrey);\n"]);return C=function(){return n},n}function z(){var n=Object(u.a)(["\n  position: absolute;\n  top: 40px;\n  right: 0;\n  width: 500px;\n"]);return z=function(){return n},n}var S=l.c.div(z()),D=l.c.h1(C()),P=l.c.div(L()),R=l.c.div(F()),A=function(n){var t=n.failedLetters;return o.a.createElement(S,null,o.a.createElement(D,null,"You missed:"),o.a.createElement(P,null,t.map(function(n){return o.a.createElement(R,{key:n},n)})))},B=function(n){var t=n.buttonAction,e=n.disabled,r=n.title,a=n.buttonLabel;return o.a.createElement(g,{disabled:e},o.a.createElement(v,null,o.a.createElement(m,null," ",r),o.a.createElement(x,{onClick:t},a)))},G=e(12);function U(){var n=Object(u.a)(["\n      left: 0;\n    "]);return U=function(){return n},n}function W(){var n=Object(u.a)(["\n  position: absolute;\n  bottom: -14px;\n  border-radius: 0 0 50% 50%;\n  left: -15px;\n  right: 0;\n  margin: 0 auto;\n  width: 40px;\n  height: 15px;\n  background-color: var(--color-humanbody);\n  ","\n"]);return W=function(){return n},n}function I(){var n=Object(u.a)(["\n      transform: rotate(-15deg);\n      margin-left: 15px;\n    "]);return I=function(){return n},n}function M(){var n=Object(u.a)(["\n  background-color: var(--color-bodybg);\n\n  height: 70px;\n  width: 25px;\n  margin-top: 10px;\n  margin-left: -10px;\n  transform: rotate(15deg);\n  ","\n"]);return M=function(){return n},n}function Y(){var n=Object(u.a)(["\n  position: absolute;\n  bottom: -14px;\n  border-radius: 0 0 50% 50%;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: 15px;\n  height: 15px;\n  background-color: var(--color-humanbody);\n"]);return Y=function(){return n},n}function H(){var n=Object(u.a)(["\n      transform: rotate(-45deg);\n      margin-left: 35px;\n      background-color: var(--color-shirtRight);\n    "]);return H=function(){return n},n}function J(){var n=Object(u.a)(["\n  position: relative;\n  transform: rotate(45deg);\n  margin-left: -27px;\n  margin-top: -5px;\n  width: 22px;\n  height: 80px;\n  background-color: var(--color-shirtLeft);\n  border-radius: 5px;\n  ","\n"]);return J=function(){return n},n}function K(){var n=Object(u.a)(["\n      background-color: var(--color-shirtRight);\n      border-radius: 0 5px 0 0;\n    "]);return K=function(){return n},n}function N(){var n=Object(u.a)(["\n  display: inline-block;\n  width: 30px;\n  height: 70px;\n  background-color: var(--color-shirtLeft);\n  border-radius: 5px 0 0 0;\n  ","\n"]);return N=function(){return n},n}function T(){var n=Object(u.a)(["\n  position: absolute;\n  margin: 0 auto;\n  top: 112.5px;\n  left: 0;\n  right: 0;\n  width: 60px;\n  height: 95px;\n  border-radius: 5px;\n  background-color: var(--color-bodybg);\n"]);return T=function(){return n},n}function q(){var n=Object(u.a)(["\n  position: absolute;\n  margin: 0 auto;\n  top: 100px;\n  left: 0;\n  right: 0;\n  width: 20px;\n  height: 40px;\n  background-color: var(--color-humanbody);\n"]);return q=function(){return n},n}function Q(){var n=Object(u.a)(["\n  position: absolute;\n  z-index: 2;\n  margin: 0 auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 80px;\n  height: 106px;\n  background-color: var(--color-humanbody);\n  border-radius: 30% 30% 50% 50%;\n"]);return Q=function(){return n},n}function V(){var n=Object(u.a)(["\n      border-radius: 50% 50% 0 0;\n      height: 20px;\n      border-width: 10px 0 0 0;\n    "]);return V=function(){return n},n}function X(){var n=Object(u.a)(["\n  width: 40px;\n  border: solid 5px var(--color-white);\n  left: 0;\n  right: 0;\n  position: absolute;\n  margin: 0 auto;\n  top: 75px;\n  border-radius: 0 0 50% 50%;\n\n  ",";\n"]);return X=function(){return n},n}function Z(){var n=Object(u.a)(["\n  top: 50px;\n  width: 15px;\n  height: 20px;\n  background-color: var(--color-nose);\n  left: 0;\n  right: 0;\n  position: absolute;\n  margin: 0 auto;\n  border-radius: 100% 100% 50% 50%;\n"]);return Z=function(){return n},n}function $(){var n=Object(u.a)(["\n      left: auto;\n      right: -15px;\n    "]);return $=function(){return n},n}function _(){var n=Object(u.a)(["\n  width: 15px;\n  height: 20px;\n  background-color: var(--color-ear);\n  top: 40px;\n  position: absolute;\n  border-radius: 40% 40%;\n  left: -15px;\n\n  ",";\n"]);return _=function(){return n},n}function nn(){var n=Object(u.a)(["\n      left: auto;\n      right: 15px;\n    "]);return nn=function(){return n},n}function tn(){var n=Object(u.a)(["\n  width: 15px;\n  height: 20px;\n  background-color: var(--color-eye);\n  border-radius: 50%;\n  margin-top: 35px;\n  position: absolute;\n  border: solid 5px var(--color-white);\n  left: 15px;\n\n  ",";\n"]);return tn=function(){return n},n}function en(){var n=Object(u.a)(["\n  width: 100%;\n  height: 15px;\n  position: absolute;\n  background-color: var(--color-hair);\n  border-radius: 50% 0% 100% 0%;\n"]);return en=function(){return n},n}function rn(){var n=Object(u.a)(["\n  position: relative;\n  margin: 70px 0 0 77.5px;\n  width: 100px;\n"]);return rn=function(){return n},n}var on=l.c.div(rn()),an=l.c.div(en()),cn=l.c.div(tn(),function(n){return n.right&&Object(l.b)(nn())}),un=l.c.div(_(),function(n){return n.right&&Object(l.b)($())}),ln=l.c.div(Z()),bn=l.c.div(X(),function(n){return n.sad&&Object(l.b)(V())}),dn=l.c.div(Q()),sn=l.c.div(q()),fn=l.c.div(T()),pn=l.c.div(N(),function(n){return n.right&&Object(l.b)(K())}),hn=l.c.div(J(),function(n){return n.right&&Object(l.b)(H())}),gn=l.c.div(Y()),vn=l.c.div(M(),function(n){return n.right&&Object(l.b)(I())}),mn=l.c.div(W(),function(n){return n.right&&Object(l.b)(U())}),xn=function(n){var t=n.visible,e=n.component,r=Object(G.a)(n,["visible","component"]);return t?o.a.createElement(e,r):null},On=function(n){var t=n.failedLetterCount;return o.a.createElement(on,null,o.a.createElement(xn,{visible:t>=1,component:dn},o.a.createElement(an,null),o.a.createElement(cn,null),o.a.createElement(cn,{right:!0}),o.a.createElement(un,null),o.a.createElement(un,{right:!0}),o.a.createElement(ln,null),o.a.createElement(bn,{sad:t>=11})),o.a.createElement(xn,{visible:t>=2,component:sn}),o.a.createElement(xn,{visible:t>=3,component:fn},o.a.createElement(xn,{visible:t>=3,component:pn},o.a.createElement(xn,{visible:t>=4,component:hn},o.a.createElement(xn,{visible:t>=6,component:gn})),o.a.createElement(xn,{visible:t>=8,component:vn},o.a.createElement(xn,{visible:t>=10,component:mn}))),o.a.createElement(xn,{visible:t>=3,component:pn,right:!0},o.a.createElement(xn,{visible:t>=5,component:hn,right:!0},o.a.createElement(xn,{visible:t>=7,component:gn})),o.a.createElement(xn,{visible:t>=9,component:vn,right:!0},o.a.createElement(xn,{visible:t>=11,component:mn,right:!0})))))};function jn(){var n=Object(u.a)(["\n  position: absolute;\n  opacity: 0;\n"]);return jn=function(){return n},n}function wn(){var n=Object(u.a)(["\n  position: absolute;\n  width: 0;\n  height: 0;\n  right: 0;\n  bottom: 0;\n  border-style: solid;\n  border-width: 0 0 250px 250px;\n  border-color: transparent transparent var(--color-blue) transparent;\n"]);return wn=function(){return n},n}function En(){var n=Object(u.a)(["\n  position: absolute;\n  left: 120px;\n  width: 15px;\n  height: 40px;\n  background-color: var(--color-darkgrey);\n  border-radius: 5px;\n"]);return En=function(){return n},n}function yn(){var n=Object(u.a)(["\n  position: relative;\n  width: 150px;\n  height: 15px;\n  background-color: var(--color-darkgrey);\n  top: 50px;\n  border-radius: 0 5px 5px 0;\n"]);return yn=function(){return n},n}function kn(){var n=Object(u.a)(["\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  margin: 0;\n"]);return kn=function(){return n},n}function Fn(){var n=Object(u.a)(["\n  position: relative;\n  overflow: hidden;\n  height: 500px;\n  width: 900px;\n  background-color: var(--color-appbg);\n  border-radius: 5px;\n"]);return Fn=function(){return n},n}var Ln=l.c.main(Fn()),Cn=l.c.p(kn()),zn=l.c.div(yn()),Sn=l.c.div(En()),Dn=l.c.div(wn()),Pn=l.c.input(jn());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Rn(){var n=Object(u.a)(['\n    :root {\n        --color-bodybg: #3C3F64;\n        --color-blue: #585DFE;\n        --color-darkgrey: #53555D;\n        --color-lightgrey: #E6E6E7;\n        --color-humanbody: #FFCD82;\n        --color-shirtLeft: #71CC54;\n        --color-shirtRight: #12A56B;\n        --color-appbg: #F5F5F5;\n        --color-white: #FFFFFF;\n        --color-yellow: #FFB800;\n        --color-eye: #010000;\n        --color-ear: #FFCD72;\n        --color-hair: #000;\n        --color-nose: #12A56B;\n        --font-size-default: 14px;\n        --font-size-large: 36px;\n    }\n\n    html{\n        height: 100%;\n        width: 100%;\n    }\n    \n    body {\n        font-weight: bold;\n        font-size: var(--font-size-default);\n        background-color: var(--color-bodybg);\n        margin: 0;\n        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        height: 100%;\n        width: 100%;\n    }\n\n    #root {\n       display: flex;\n       justify-content: center;\n       align-items: center;\n       height: 100%;\n       width: 100%;\n    }\n']);return Rn=function(){return n},n}var An=Object(l.a)(Rn());i.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(An,null)," ",o.a.createElement(function(){var n=Object(r.useState)(1),t=Object(c.a)(n,2),e=t[0],a=t[1],i=Object(r.useState)([]),u=Object(c.a)(i,2),l=u[0],b=u[1],d=Object(r.useState)(!1),s=Object(c.a)(d,2),f=s[0],p=s[1],h=Object(r.useState)(!1),g=Object(c.a)(h,2),v=g[0],m=g[1],O=Object(r.useState)({disabled:!1,title:"Hangman",buttonLabel:"Start Game"}),j=Object(c.a)(O,2),w=j[0],E=j[1],y=Object(r.useState)([]),F=Object(c.a)(y,2),L=F[0],C=F[1],z=Object(r.useState)([]),S=Object(c.a)(z,2),D=S[0],P=S[1],R=Object(r.useState)(""),G=Object(c.a)(R,2),U=G[0],W=G[1],I=Object(r.useRef)(null),M=function(n){var t=n.toUpperCase().split("");t.map(function(n){return"-"===n&&t.splice(t.indexOf("-"),1)," "===n&&t.splice(t.indexOf(" "),1),n}),b(t),W(n)},Y=function(){var n={hasDictionaryDef:!0,minCorpusCount:0,maxCorpusCount:-1,maxDictionaryCount:-1,minLength:3,maxLength:12,api_key:"a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"},t=new URL("http://api.wordnik.com/v4/words.json/randomWord");Object.keys(n).forEach(function(e){return t.searchParams.append(e,n[e])}),fetch(t,{method:"GET"}).then(function(n){var t=n.status;if(t>=400&&t<=500)throw Error("API error, creating random word localy!");return n.json()}).then(function(n){return M(n.word),n.status}).catch(function(n){console.log(n);var t=["Apple","Orange","Pear","Lemon","Kiwi","Watermelon","Strawberry","Banana"],e=t[Math.floor(Math.random()*t.length)];M(e)})},H=function(n){var t=J(l);n.length===t.length&&(a(e+1),E(e%5===0?{disabled:!1,title:"\u2605 You Won! Level Upgraded\u2605",buttonLabel:"Restart Game"}:{disabled:!1,title:"\u2605 You Won! \u2605",buttonLabel:"Restart Game"}),m(!0))},J=function(n){for(var t={},e=[],r=0,o=n.length;r<o;++r)t.hasOwnProperty(n[r])||(e.push(n[r]),t[n[r]]=1);return e};return o.a.createElement(Ln,null,o.a.createElement(Cn,null,"Press any keys (letters) to play."),o.a.createElement(zn,null,o.a.createElement(Sn,null),o.a.createElement(Pn,Object.assign({ref:I},!v&&!f&&{onKeyDown:function(n){var t=n.key;if(n.preventDefault(),l.length>0&&"qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM".indexOf(t)>-1&&(t=t.toUpperCase(),!L.find(function(n){return n===t})&&!D.find(function(n){return n===t}))){for(var e=0,r=0;r<l.length;r++)if(t===l[r]){e++;var o=D.concat([t]);return P(o),void H(o)}0===e&&(10===L.length&&(E({disabled:!1,title:"Game Over { word: ".concat(U," }"),buttonLabel:"Restart Game"}),m(!0)),C(L.concat([t])))}}},{onFocus:function(){return p(!1)},onBlur:function(){v||(p(!0),E({title:"Game is Paused",disabled:!1,buttonLabel:"continue"}))}}))),o.a.createElement(On,{failedLetterCount:L.length}),o.a.createElement(A,{failedLetters:L}),o.a.createElement(k,{wordFromAPI:l,correctLetters:D,spaces:function(){var n=[];if(l.length>0)for(var t=l.length,e=0;e<12-t;e++)n.push(" ");return n}()}),o.a.createElement(Dn,null),o.a.createElement(B,{title:w.title,disabled:w.disabled,buttonLabel:w.buttonLabel,buttonAction:f?function(){E({disabled:!0}),I.current.focus()}:function(){E({disabled:!0}),C([]),P([]),b([]),W(""),Y(),m(!1),I.current.focus()}}),!f&&o.a.createElement(x,{pause:!0}," Pause Game"))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.93258834.chunk.js.map