(function(t){function e(e){for(var n,o,s=e[0],u=e[1],l=e[2],c=0,h=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);p&&p(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},i=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1e39f5f8"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r=a[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=n);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=o(t);var l=new Error;i=function(e){u.onerror=u.onload=null,clearTimeout(c);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,r[1](l)}a[t]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/movies_deploy/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var p=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},1260:function(t,e,r){"use strict";var n=r("67b7"),a=r.n(n);a.a},"67b7":function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{id:"app"}},[r("SearchForm"),r("router-view")],1)},i=[],o=r("9ab4"),s=r("60a3"),u=r("5f5b"),l=r("b1e0"),c=(r("f9e3"),r("2dd8"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",{staticClass:"justify-content-lg-center"},[r("b-col",{attrs:{lg:"6"}},[r("b-form",{staticClass:"was-walidated mt-3 mb-3",attrs:{validated:t.validated,novalidate:""},on:{submit:function(e){return e.preventDefault(),t.formValidation(e)}}},[r("b-input-group",[r("b-form-input",{attrs:{type:"text",placeholder:"Search movies",minlength:"3",state:t.inputValidation,required:""},model:{value:t.inputFormValue,callback:function(e){t.inputFormValue=e},expression:"inputFormValue"}}),r("b-input-group-append",[r("b-button",{attrs:{type:"submit"}},[t._v("Search")])],1),r("div",{staticClass:"invalid-feedback"},[t._v(" Type at least 3 characters ")])],1)],1)],1)],1)}),p=[],h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.inputFormValue="",e.validated=!1,e.inputValidation=null,e}return Object(o["c"])(e,t),Object.defineProperty(e.prototype,"searchValue",{get:function(){return this.$store.state.searchValue},enumerable:!1,configurable:!0}),e.prototype.setSearchValue=function(){this.$store.commit("updateSearchValue",this.inputFormValue)},e.prototype.formValidation=function(){this.validated=!0,this.inputValidation=!0,"/"!==this.$router.currentRoute.path&&this.$router.push("/"),this.inputFormValue.length>=3&&this.setSearchValue()},e=Object(o["b"])([s["a"]],e),e}(n["default"]),f=h,d=f,b=r("2877"),m=Object(b["a"])(d,c,p,!1,null,null,null),v=m.exports;n["default"].use(u["a"]),n["default"].use(l["a"]);var g=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(o["c"])(e,t),e=Object(o["b"])([Object(s["a"])({components:{SearchForm:v}})],e),e}(n["default"]),y=g,j=y,O=Object(b["a"])(j,a,i,!1,null,null,null),P=O.exports,_=r("8c4f"),w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[0==t.movieExists?r("div",[r("b-row",[r("b-col",[r("p",[t._v(t._s(t.resultsInfo))])])],1)],1):r("div",[r("b-row",[r("b-col",[r("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1),r("b-row",[r("b-col",{attrs:{lg:"3"}},[r("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1),r("ul",{staticClass:"row movie-list"},t._l(t.currentItems,(function(e){return r("li",{key:e.id,staticClass:"movie-list-item col-lg-6 mt-3",attrs:{currentItems:t.currentItems}},[r("b-card",[r("b-card-img",{staticClass:"movie-list-item-img mb-3",attrs:{"img-top":"",src:e.posterPath}}),r("b-card-title",[r("router-link",{attrs:{to:{name:"MovieDetails",params:{id:e.id}},id:e.id}},[t._v(t._s(e.title))])],1),r("b-card-text",[e.title!==e.originalTitle?r("p",[t._v(t._s(e.originalTitle))]):t._e(),r("p",[r("b-icon-star"),t._v(" "+t._s(e.popularity))],1),r("p",[t._v(t._s(e.voteCount)+" votes")])])],1)],1)})),0)],1)])},V=[],x=function(){function t(t){null==t.poster_path?this.posterPath=r("cf05"):this.posterPath="https://image.tmdb.org/t/p/w500/"+t.poster_path,this.id=t.id,this.title=t.title,this.originalTitle=t.original_title,this.popularity=t.popularity,this.voteCount=t.vote_count}return t}(),S=x,C=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.movieExists=!1,e.page=1,e.allPages=1,e.items=[],e.currentItems=[],e.perPage=10,e.currentPage=1,e.selected=null,e.resultsInfo="",e.options=[{value:null,text:"Sort",disabled:!0},{value:"az",text:"A-Z"},{value:"za",text:"Z-A"},{value:"mostPopular",text:"most popular"},{value:"leastPopular",text:"least popular"}],e}return Object(o["c"])(e,t),Object.defineProperty(e.prototype,"rows",{get:function(){return this.items.length},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"searchValue",{get:function(){return this.$store.state.searchValue},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"apiData",{get:function(){return this.$store.state.apiData},enumerable:!1,configurable:!0}),e.prototype.mounted=function(){""!==this.$store.state.searchValue&&this.getList()},e.prototype.sortList=function(){"az"===this.selected&&this.items.sort((function(t,e){return t.title.localeCompare(e.title)})),"za"===this.selected&&this.items.sort((function(t,e){return e.title.localeCompare(t.title)})),"mostPopular"===this.selected&&this.items.sort((function(t,e){return e.popularity-t.popularity})),"leastPopular"===this.selected&&this.items.sort((function(t,e){return t.popularity-e.popularity})),this.updateCurrentList()},e.prototype.updateCurrentList=function(){this.currentItems=[];for(var t=this.currentPage*this.perPage-this.perPage;t<this.currentPage*this.perPage&&t<this.items.length;t+=1)this.currentItems.push(this.items[t])},e.prototype.getList=function(){return Object(o["a"])(this,void 0,void 0,(function(){return Object(o["d"])(this,(function(t){switch(t.label){case 0:return this.items=[],this.page=1,[4,this.getMovies()];case 1:if(t.sent(),!(this.items.length>0))return[3,3];for(this.page=2;this.page<=this.allPages;this.page+=1)this.getMovies();return[4,this.updateCurrentList()];case 2:return t.sent(),this.movieExists=!0,this.resultsInfo="",[3,4];case 3:this.movieExists=!1,this.resultsInfo="No results for "+this.$store.state.searchValue,t.label=4;case 4:return[2]}}))}))},e.prototype.getMovies=function(){return Object(o["a"])(this,void 0,void 0,(function(){var t,e,r,n=this;return Object(o["d"])(this,(function(a){switch(a.label){case 0:return[4,fetch(this.apiData.api+"search/movie"+(this.apiData.key+this.apiData.language)+"&page="+this.page+"&query="+this.searchValue)];case 1:return t=a.sent(),[4,t.json()];case 2:return e=a.sent(),r=this,[4,e.total_pages];case 3:return r.allPages=a.sent(),[4,e.results.forEach((function(t){n.items.push(new S(t))}))];case 4:return a.sent(),[2]}}))}))},Object(o["b"])([Object(s["b"])("selected")],e.prototype,"sortList",null),Object(o["b"])([Object(s["b"])("currentPage")],e.prototype,"updateCurrentList",null),Object(o["b"])([Object(s["b"])("searchValue")],e.prototype,"getList",null),e=Object(o["b"])([s["a"]],e),e}(n["default"]),k=C,L=k,$=(r("1260"),Object(b["a"])(L,w,V,!1,null,"4278e144",null)),E=$.exports;n["default"].use(_["a"]);var I=[{path:"/",name:"SearchList",component:E},{path:"/movie/:id",name:"MovieDetails",component:function(){return r.e("about").then(r.bind(null,"81d4"))}}],D=new _["a"]({mode:"history",routes:I}),M=D,T=r("2f62");n["default"].use(T["a"]);var F=new T["a"].Store({state:{searchValue:"",apiData:{api:"https://api.themoviedb.org/3/",key:"?api_key=fd1fd143d38191829dba155225a2c1f1",language:"&language=en-US"}},mutations:{updateSearchValue:function(t,e){t.searchValue=e}},actions:{},modules:{}});n["default"].config.productionTip=!1,new n["default"]({router:M,store:F,render:function(t){return t(P)}}).$mount("#app")},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.9ea7ae47.js.map