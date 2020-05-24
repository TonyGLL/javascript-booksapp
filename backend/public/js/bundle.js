!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);var o=class{constructor(){this.URI="http://localhost:3000/api/books"}async getBooks(){const e=await fetch(this.URI);return await e.json()}async postBook(e){const t=await fetch(this.URI,{method:"POST",body:e}),n=await t.json();console.log(n)}async deleteBook(e){const t=await fetch(`${this.URI}/${e}`,{headers:{"Content-Type":"application/json"},method:"DELETE"}),n=await t.json();console.log(n)}},r=["second","minute","hour","day","week","month","year"],a=["秒","分钟","小时","天","周","个月","年"],s={},c=function(e,t){s[e]=t},d=function(e){return s[e]||s.en_US},i=[60,60,24,7,365/7/12,12];function l(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}function u(e,t){for(var n=e<0?1:0,o=e=Math.abs(e),r=0;e>=i[r]&&r<i.length;r++)e/=i[r];return(e=Math.floor(e))>(0===(r*=2)?9:1)&&(r+=1),t(e,r,o)[n].replace("%s",e.toString())}function m(e,t){return(+(t?l(t):new Date)-+l(e))/1e3}c("en_US",(function(e,t){if(0===t)return["just now","right now"];var n=r[Math.floor(t/2)];return e>1&&(n+="s"),[e+" "+n+" ago","in "+e+" "+n]})),c("zh_CN",(function(e,t){if(0===t)return["刚刚","片刻后"];var n=a[~~(t/2)];return[e+" "+n+"前",e+" "+n+"后"]}));const f=new o;var p=class{async renderBooks(){const e=await f.getBooks(),t=document.getElementById("books-cards");t.innerHTML="",e.forEach(e=>{const n=document.createElement("div");var o,r,a;n.className="",n.innerHTML=`\n            \n                <div class="card m-2">\n                    <div class="row">\n                        <div class="col-md-4">\n                            <img src="http://localhost:3000${e.imagePath}" alt="" class="img-fluid img-thumbnail p-2" width="200" height="200">\n                        </div>\n\n                        <div class="col-md-8">\n                            <div class="card-block p-2">\n                                <h4 class="card-title">Title: ${e.title}</h4>\n                                <p class="card-text">Author: ${e.author}</p>\n                                <a href="" class="btn btn-danger delete" _id="${e._id}">Delete</a>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class="card-footer">\n                        ${o=e.created_at,u(m(o,a&&a.relativeDate),d(r))}\n                    </div>\n                </div>\n            `,t.appendChild(n)})}async addNewBook(e){await f.postBook(e),this.clearBookForm(),this.renderBooks()}clearBookForm(){document.getElementById("book-form").reset()}renderMessage(e,t,n){const o=document.createElement("div");o.className=`alert alert-${t} message`,o.appendChild(document.createTextNode(e));const r=document.querySelector(".col-md-4"),a=document.querySelector("#book-form");r.insertBefore(o,a),setTimeout(()=>{document.querySelector(".message").remove()},n)}async deleteBook(e){await f.deleteBook(e),this.renderBooks()}};document.addEventListener("DOMContentLoaded",e=>{(new p).renderBooks()}),document.getElementById("book-form").addEventListener("submit",e=>{const t=document.getElementById("title").value,n=document.getElementById("author").value,o=document.getElementById("isbn").value,r=document.getElementById("image").files,a=new FormData;a.append("image",r[0]),a.append("title",t),a.append("author",n),a.append("isbn",o);const s=new p;s.addNewBook(a),s.renderMessage("New Book Added","success",3e3),e.preventDefault()}),document.getElementById("books-cards").addEventListener("click",e=>{if(e.target.classList.contains("delete")){const t=new p;t.deleteBook(e.target.getAttribute("_id")),t.renderMessage("Book Removed","danger",2e3)}e.preventDefault()})}]);
//# sourceMappingURL=bundle.js.map