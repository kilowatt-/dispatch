!function e(t,a,n){function r(i,s){if(!a[i]){if(!t[i]){var l="function"==typeof require&&require;if(!s&&l)return l(i,!0);if(c)return c(i,!0);var o=new Error("Cannot find module '"+i+"'");throw o.code="MODULE_NOT_FOUND",o}var d=a[i]={exports:{}};t[i][0].call(d.exports,function(e){var a=t[i][1][e];return r(a?a:e)},d,d.exports,e,t,a,n)}return a[i].exports}for(var c="function"==typeof require&&require,i=0;i<n.length;i++)r(n[i]);return r}({1:[function(e,t,a){var n=React.createClass({displayName:"Section",getInitialState:function(){return{articles:[],loading:!1}},componentDidMount:function(){this.loaded=0,this.scrollListener()},scrollListener:function(){var e=function(){var e=$(window).height(),t=$(document).height(),a=$(document).scrollTop(),n=a+e;n==t&&this.loadMore()}.bind(this);$(window).scroll(e)},renderSpinner:function(){return React.createElement("div",{className:"spinner"},React.createElement("div",{className:"rect1"}),React.createElement("div",{className:"rect2"}),React.createElement("div",{className:"rect3"}),React.createElement("div",{className:"rect4"}),React.createElement("div",{className:"rect5"}))},loadMore:function(){this.state.loading||this.loaded>=5||(this.setState({loading:!0}),dispatch.search("article",{section:this.props.id,offset:7+6*this.loaded,limit:6},function(e){this.loaded++,this.setState({articles:this.state.articles.concat(e.results),loading:!1})}.bind(this)))},renderImage:function(e){var t={backgroundImage:"url('"+e.featured_image.url+"')"};return React.createElement("a",{href:e.url,className:"image image-aspect-4-3"},React.createElement("div",{style:t}))},render:function(){var e=this.state.articles.map(function(e,t){var a={__html:e.long_headline};return React.createElement("article",{key:t},e.featured_image?this.renderImage(e):null,React.createElement("a",{href:e.url},React.createElement("h2",{className:"headline",dangerouslySetInnerHTML:a})),React.createElement("span",{className:"byline"},React.createElement("span",{className:"author"},"By ",e.authors_string),"  ·  ",React.createElement("span",{className:"published"},e.published_at)),React.createElement("p",{className:"snippet"},e.snippet))}.bind(this));return React.createElement("div",null,React.createElement("div",{className:"blocks"},e),this.state.loading?this.renderSpinner():null)}});t.exports=n},{}],2:[function(e,t,a){var n=e("./components/Section.jsx"),r=$("main.section").data("id");React.render(React.createElement(n,{id:r}),document.getElementById("article-loader"))},{"./components/Section.jsx":1}]},{},[2]);