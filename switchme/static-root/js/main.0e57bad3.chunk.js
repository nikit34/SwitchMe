(this["webpackJsonpswitchme-web"]=this["webpackJsonpswitchme-web"]||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),l=n.n(r),o=(n(16),n(8)),s=n.n(o),i=(n(17),n(2)),u=n(1);function m(e,t,n,a){var c;a&&(c=JSON.stringify(a));var r=new XMLHttpRequest,l="http://nikit34test.pythonanywhere.com/api".concat(t);r.responseType="json";var o=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var c=n[a].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t}("csrftoken");r.open(e,l),r.setRequestHeader("Content-Type","application/json"),o&&(r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("X-CSRFToken",o)),r.onload=function(){403===r.status&&("Authentication credentials were not provided."===r.response.detail&&-1===window.location.href.indexOf("login")&&(window.location.href="/login?showLoginRequired=true"));n(r.response,r.status)},r.onerror=function(e){console.log(e),n({message:"The request was an error"},400)},r.send(c)}function d(e,t,n){var a="/tweets/";e&&(a="/tweets/?username=".concat(e)),null!==n&&void 0!==n&&(a=n.replace("http://nikit34test.pythonanywhere.com/api","")),m("GET",a,t)}function f(e,t){var n="/tweets/feed/";null!==t&&void 0!==t&&(n=t.replace("http://nikit34test.pythonanywhere.com/api","")),m("GET",n,e)}var w=n(10),p=n(3);function b(e){var t=e.tweet,n=e.action,a=e.didPerformAction,r=t.likes?t.likes:0,l=e.className?e.className:"btn btn-primary btn-sm",o=n.display?n.display:"Action",s=function(e,t){200!==t&&201!==t||!a||a(e,t)},i="like"===n.type?"".concat(r," ").concat(o):o;return c.a.createElement("button",{className:l,onClick:function(e){e.preventDefault(),function(e,t,n){m("POST","/tweets/action/",n,{id:e,action:t})}(t.id,n.type,s)}},i)}function E(e){var t=e.username;return c.a.createElement("span",{className:"pointer",onClick:function(e){window.location.href="/profiles/".concat(t)}},e.children)}function v(e){var t=e.user,n=e.includeFullName,a=e.hideLink,r=!0===n?"".concat(t.first_name," ").concat(t.last_name):null;return c.a.createElement(c.a.Fragment,null,r,!0===a?" @".concat(t.username):c.a.createElement(E,{username:t.username},c.a.createElement("span",{className:"text-muted font-weight-bold"},"@",t.username)))}function h(e){var t=e.user,n=e.hideLink,a=c.a.createElement("span",{className:"mx-1 px-3 py-2 rounded-circle bg-dark text-white"},t.username[0]);return!0===n?a:c.a.createElement(E,{username:t.username},a)}var g=n(9),O=n.n(g);function j(e){return c.a.createElement("span",{className:e.className},O()(e.children).format("0a"))}function N(e){var t=e.user,n=e.didFollowToggle,a=e.profileLoading,r=t&&t.is_following?"Unfollow":"Follow";r=a?"Loading...":r;return t?c.a.createElement("div",null,c.a.createElement(h,{user:t,hideLink:!0}),c.a.createElement("p",null,c.a.createElement(v,{user:t,includeFullName:!0,hideLink:!0})),c.a.createElement("p",null,c.a.createElement(j,null,t.follower_count)," ",1===t.follower_count?"follower":"followers"),c.a.createElement("p",null,c.a.createElement(j,null,t.following_count)," following"),c.a.createElement("p",null,t.location),c.a.createElement("p",null,t.bio),c.a.createElement("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),n&&!a&&n(r)}},r)):null}function y(e){var t=e.username,n=Object(a.useState)(!1),r=Object(p.a)(n,2),l=r[0],o=r[1],s=Object(a.useState)(null),i=Object(p.a)(s,2),u=i[0],d=i[1],f=Object(a.useState)(!1),w=Object(p.a)(f,2),b=w[0],E=w[1],v=function(e,t){200===t&&d(e)};Object(a.useEffect)((function(){!1===l&&(!function(e,t){m("GET","/profiles/".concat(e,"/"),t)}(t,v),o(!0))}),[t,l,o]);return!1===l?"Loading...":u?c.a.createElement(N,{user:u,didFollowToggle:function(e){!function(e,t,n){var a={action:"".concat(t&&t).toLowerCase()};m("POST","/profiles/".concat(e,"/follow"),n,a)}(t,e,(function(e,t){200===t&&d(e),E(!1)})),E(!0)},profileLeading:b}):null}function k(e){var t=e.tweet;return t.parent?c.a.createElement(T,{isRetweet:!0,retweeter:e.retweeter,hideActions:!0,className:" ",tweet:t.parent}):null}function T(e){var t=e.tweet,n=e.didRetweet,r=e.hideActions,l=e.isRetweet,o=e.retweeter,s=Object(a.useState)(e.tweet?e.tweet:null),i=Object(p.a)(s,2),u=i[0],m=i[1],d=e.className?e.className:"col-10 mx-auto col-md-6";d=!0===l?"".concat(d," p-2 border rounded"):d;var f=window.location.pathname.match(Object(w.a)(/([0-9]+)/,{tweetid:1})),E=f?f.groups.tweetid:-1,g="".concat(t.id)==="".concat(E),O=function(e,t){200===t?m(e):201===t&&n&&n(e)};return c.a.createElement("div",{className:d},!0===l&&c.a.createElement("div",{className:"mb-2"},c.a.createElement("span",{className:"small text-muted"},"Retweet via "),c.a.createElement("span",{className:"small"},c.a.createElement(v,{user:o}))),c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",{className:" "},c.a.createElement(h,{user:t.user})),c.a.createElement("div",{className:"col-11"},c.a.createElement("div",null,c.a.createElement("p",null,c.a.createElement(v,{includeFullName:!0,user:t.user})),c.a.createElement("p",null,t.content),c.a.createElement(k,{tweet:t,retweeter:t.user})),c.a.createElement("div",{className:"btn btn-group px-0"},u&&!0!==r&&c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{tweet:u,didPerformAction:O,action:{type:"like",display:"Likes"}}),c.a.createElement(b,{tweet:u,didPerformAction:O,action:{type:"unlike",display:"Unlikes"}}),c.a.createElement(b,{tweet:u,didPerformAction:O,action:{type:"retweet",display:"Retweet"}})),!0===g?null:c.a.createElement("button",{className:"btn btn-outline-primary",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)}},"View")))))}function S(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],l=n[1],o=Object(a.useState)([]),s=Object(u.a)(o,2),m=s[0],f=s[1],w=Object(a.useState)(null),p=Object(u.a)(w,2),b=p[0],E=p[1],v=Object(a.useState)(!1),h=Object(u.a)(v,2),g=h[0],O=h[1];Object(a.useEffect)((function(){var t=Object(i.a)(e.newTweets).concat(r);t.length!==m.length&&f(t)}),[e.newTweets,m,r]),Object(a.useEffect)((function(){if(!1===g){d(e.username,(function(e,t){200===t?(E(e.next),l(e.results),O(!0)):alert("Set Tweets has not been")}))}}),[r,g,O,e.username]);var j=function(e){var t=Object(i.a)(r);t.unshift(e),l(t);var n=Object(i.a)(m);n.unshift(m),f(n)};return c.a.createElement(c.a.Fragment,null,m.map((function(e,t){return c.a.createElement(T,{tweet:e,didRetweet:j,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})})),null!==b&&c.a.createElement("button",{onClick:function(t){if(t.preventDefault(),null!==b){d(e.username,(function(e,t){if(200===t){E(e.next);var n=Object(i.a)(m).concat(e.results);l(n),f(n)}else alert("Set Tweets has not been")}),b)}},className:"btn btn-outline-primary"},"Load Next"))}function x(e){var t=c.a.createRef(),n=e.didTweet,a=function(e,t){201===t?n(e):(console.log(e),alert("An error occurred please try again"))};return c.a.createElement("div",{className:e.className},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=t.current.value;m("POST","/tweets/create/",a,{content:n}),t.current.value=""}},c.a.createElement("textarea",{ref:t,required:!0,className:"form-control",name:"tweet"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary my-3"},"Tweet")))}function R(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],l=n[1],o=Object(a.useState)([]),s=Object(u.a)(o,2),m=s[0],d=s[1],w=Object(a.useState)(null),p=Object(u.a)(w,2),b=p[0],E=p[1],v=Object(a.useState)(!1),h=Object(u.a)(v,2),g=h[0],O=h[1];Object(a.useEffect)((function(){var t=Object(i.a)(e.newTweets).concat(r);t.length!==m.length&&d(t)}),[e.newTweets,m,r]),Object(a.useEffect)((function(){if(!1===g){f((function(e,t){200===t&&(E(e.next),l(e.results),O(!0))}))}}),[r,g,O,e.username]);var j=function(e){var t=Object(i.a)(r);t.unshift(e),l(t);var n=Object(i.a)(m);n.unshift(m),d(n)};return c.a.createElement(c.a.Fragment,null,m.map((function(e,t){return c.a.createElement(T,{tweet:e,didRetweet:j,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})})),null!==b&&c.a.createElement("button",{onClick:function(e){if(e.preventDefault(),null!==b){f((function(e,t){if(200===t){E(e.next);var n=Object(i.a)(m).concat(e.results);l(n),d(n)}}),b)}},className:"btn btn-outline-primary"},"Load Next"))}function A(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],l=n[1],o="false"!==e.canTweet;return c.a.createElement("div",{className:e.className},!0===o&&c.a.createElement(x,{didTweet:function(e){var t=Object(i.a)(r);t.unshift(e),l(t)},className:"col-12 mb-3"}),c.a.createElement(S,Object.assign({newTweets:r},e)))}function L(e){var t=e.tweetId,n=Object(a.useState)(!1),r=Object(u.a)(n,2),l=r[0],o=r[1],s=Object(a.useState)(null),i=Object(u.a)(s,2),d=i[0],f=i[1],w=function(e,t){200===t?f(e):alert("Error finding your tweet")};return Object(a.useEffect)((function(){!1===l&&(!function(e,t){m("GET","/tweets/".concat(e,"/"),t)}(t,w),o(!0))}),[t,l,o]),null===d?null:c.a.createElement(T,{tweet:d,className:e.className})}var q=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),c.a.createElement("p",null,"Edit ",c.a.createElement("code",null,"src/App.js")," and save to reload."),c.a.createElement("div",null,c.a.createElement(A,null)),c.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=document.getElementById("root");F&&l.a.render(c.a.createElement(q,null),F);var C=c.a.createElement,P=document.getElementById("switchme-2");P&&l.a.render(C(A,P.dataset),P);var _=document.getElementById("switchme-2-feed");_&&l.a.render(C((function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],l=n[1],o="false"!==e.canTweet;return c.a.createElement("div",{className:e.className},!0===o&&c.a.createElement(x,{didTweet:function(e){var t=Object(i.a)(r);t.unshift(e),l(t)},className:"col-12 mb-3"}),c.a.createElement(R,Object.assign({newTweets:r},e)))}),_.dataset),_),document.querySelectorAll(".switchme-2-detail").forEach((function(e){l.a.render(C(L,e.dataset),e)})),document.querySelectorAll(".switchme-2-profile-badge").forEach((function(e){l.a.render(C(y,e.dataset),e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.0e57bad3.chunk.js.map