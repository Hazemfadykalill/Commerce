"use strict";(self.webpackChunkflashCart=self.webpackChunkflashCart||[]).push([[734],{2734:(Y,u,n)=>{n.r(u),n.d(u,{HomeComponent:()=>D});var a=n(6814),l=n(95),p=n(1120),m=n(756),t=n(4769);let g=(()=>{class i{transform(e,s){return e.filter(o=>o.title.toLowerCase().includes(s.toLowerCase()))}static#t=this.\u0275fac=function(s){return new(s||i)};static#e=this.\u0275pipe=t.Yjl({name:"search",type:i,pure:!0,standalone:!0})}return i})();var h=n(1132),_=n(4627),f=n(2559),x=n(6286),v=n(2425),C=n(8806);function T(i,r){1&i&&t._UZ(0,"img",13)}function Z(i,r){1&i&&t._UZ(0,"img",14)}function A(i,r){1&i&&t._UZ(0,"img",15)}function w(i,r){1&i&&t._UZ(0,"img",16)}function L(i,r){if(1&i&&(t.TgZ(0,"div",17)(1,"div",18),t._UZ(2,"img",19),t.qZA(),t.TgZ(3,"h6",20),t._uU(4),t.qZA()()),2&i){const e=t.oxw().$implicit;t.xp6(2),t.Q6J("src",e.image,t.LSH)("alt",e.name),t.xp6(2),t.Oqu(e.name)}}function b(i,r){1&i&&(t.ynx(0),t.YNc(1,L,5,3,"ng-template",5),t.BQk())}function S(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"i",41),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.addToWishList(o._id))}),t.qZA()}if(2&i){const e=t.oxw().$implicit;t.Q6J("id",e._id)}}function y(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"i",42),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.addToWishList(o._id))}),t.qZA()}if(2&i){const e=t.oxw().$implicit;t.Q6J("id",e._id)}}function H(i,r){if(1&i&&t._UZ(0,"i",43),2&i){const e=r.$implicit,s=t.oxw().$implicit;t.ekj("rating-color",s.ratingsAverage>e)}}const F=function(i){return["/details",i]},W=function(){return[1,2,3,4,5]};function J(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"div",26)(1,"div",27),t.YNc(2,S,1,1,"i",28),t.YNc(3,y,1,1,"i",29),t.TgZ(4,"div",30),t._UZ(5,"img",31)(6,"hr"),t.qZA(),t.TgZ(7,"div",32)(8,"div",33)(9,"h6",34),t._uU(10),t.qZA(),t.TgZ(11,"button",35),t.NdJ("click",function(){const c=t.CHM(e).$implicit,d=t.oxw(2);return t.KtG(d.addProduct(c._id))}),t._UZ(12,"i",36),t.qZA()(),t.TgZ(13,"div",37)(14,"p",38),t._uU(15),t.qZA(),t.TgZ(16,"p",39),t.YNc(17,H,1,2,"i",40),t._uU(18),t.qZA()()()()()}if(2&i){const e=r.$implicit,s=t.oxw(2);t.xp6(2),t.Q6J("ngIf",!(null!=s.responseAllWishListData&&s.responseAllWishListData.includes(e._id))),t.xp6(1),t.Q6J("ngIf",null==s.responseAllWishListData?null:s.responseAllWishListData.includes(e._id)),t.xp6(1),t.Q6J("routerLink",t.VKq(10,F,e._id)),t.xp6(1),t.Q6J("src",e.imageCover,t.LSH)("alt",e.title),t.xp6(5),t.Oqu(e.category.name),t.xp6(1),t.Q6J("disabled",s.clickFlag),t.xp6(4),t.hij("price:",e.price,""),t.xp6(2),t.Q6J("ngForOf",t.DdM(12,W)),t.xp6(1),t.hij(" ",e.ratingsAverage," ")}}function N(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"section",21)(1,"div",22)(2,"input",23),t.NdJ("ngModelChange",function(o){t.CHM(e);const c=t.oxw();return t.KtG(c.searchText=o)}),t.qZA()(),t.TgZ(3,"div",24),t.YNc(4,J,19,13,"div",25),t.ALo(5,"slice"),t.ALo(6,"search"),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(2),t.Q6J("ngModel",e.searchText),t.xp6(2),t.Q6J("ngForOf",t.Dn7(5,2,t.xi3(6,6,e.responseAllProduct,e.searchText),0,18))}}let D=(()=>{class i{constructor(e,s,o,c,d,O){this._ProductsService=e,this._CatgoriesService=s,this._DetailsService=o,this._CartService=c,this.tost=d,this._WishListService=O,this.clickFlag=!1,this.searchText="",this.flagEmpty=!0,this.flagFull=!1,this.customOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!1,navSpeed:700,autoplay:!0,autoplayTimeout:5e3,autoplaySpeed:4e3,responsive:{0:{items:1},400:{items:2},740:{items:3},940:{items:8}}},this.staticOption={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!1,navSpeed:100,autoplay:!0,autoplayTimeout:5e3,autoplaySpeed:4e3,items:1,nav:!1}}ngOnInit(){this._ProductsService.getAllProduct().subscribe({next:e=>{this.responseAllProduct=e.data},error:e=>{console.log("when get all product found problem")}}),this._CatgoriesService.getAllCategories().subscribe({next:e=>{this.responseAllCategory=e.data},error:e=>{console.log("when get all categories found problem")}}),this._WishListService.getAllWishList().subscribe({next:e=>{console.log(e),this.responseAllWishListData=e.data.map(s=>s.id),this._WishListService.countNumber.next(e.count)}})}addProduct(e){this.clickFlag=!0,this._CartService.addProductToCart(e).subscribe({next:s=>{this.clickFlag=!1,this.tost.success(s.message),this._CartService.cartNumber.next(s.numOfCartItems),localStorage.setItem("cartNumber",s.numOfCartItems)},error:s=>{this.clickFlag=!1,this.tost.error(s.error.message)}})}addToWishList(e){this._WishListService.addToWish(e).subscribe({next:s=>{console.log(s),this._WishListService.countNumber.next(s.data.length),this.responseAllWishList=s,this.responseAllWishListData=this.responseAllWishList?.data,this.tost.success(s.message)},error:s=>{this.tost.success("error when add to wish list")}})}removeProduct(e){this._WishListService.remove(e).subscribe({next:s=>{this.responseAllWishListData=this.responseAllWishList?.data,this._WishListService.countNumber.next(s.data.length)}})}static#t=this.\u0275fac=function(s){return new(s||i)(t.Y36(h.s),t.Y36(_.q),t.Y36(f.n),t.Y36(x.N),t.Y36(v._W),t.Y36(C.i))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-home"]],standalone:!0,features:[t.jDz],decls:17,vars:4,consts:[[1,"sliderStatic","rounded-2"],[1,"row","g-0"],[1,"col-md-9"],[1,"left"],[3,"options"],["carouselSlide",""],[1,"col-md-3"],[1,"right"],["height","200","src","../../../assets/images/blog-img-1.jpeg","alt","",1,"w-100"],["height","200","src","../../../assets/images/blog-img-2.jpeg","alt","",1,"w-100"],[1,"sliderDynamic","mb-2"],[4,"ngFor","ngForOf"],["class","allProducts my-4  ",4,"ngIf"],["height","400","src","./assets/images/main-slider-1.jpeg","alt",""],["height","400","src","./assets/images/main-slider-2.jpeg","alt",""],["height","400","src","./assets/images/main-slider-3.jpeg","alt",""],["height","400","src","./assets/images/grocery-banner.png","alt",""],[1,"text-center","mt-2","mx-2","rounded-2","overflow-hidden","slider","rounded-3"],[1,"d","overflow-hidden"],["height","200",1,"w-100",3,"src","alt"],[1,"mt-2","fw-bold"],[1,"allProducts","my-4"],[1,"inputSearch","w-50","mx-auto","my-3","py-3"],["type","search","placeholder","search..",1,"form-control",3,"ngModel","ngModelChange"],[1,"row","g-2"],["class"," col-md-2 ",4,"ngFor","ngForOf"],[1,"col-md-2"],[1,"product"],["class","fa-regular fa-heart  heart ",3,"id","click",4,"ngIf"],["class","fa-solid fa-heart  heart ",3,"id","click",4,"ngIf"],["role","button",1,"image",3,"routerLink"],[1,"w-100",3,"src","alt"],[1,"content","px-1"],[1,"cart","d-flex","justify-content-between","mb-2"],[1,"fw-bold"],[1,"btnCart","p-0","m-0","border-0","bg-white",3,"disabled","click"],[1,"fa-solid","fa-cart-plus","fs-3","fw-bold","text-main"],[1,"d-flex","justify-content-between","small"],[1,"m-0","p-0","text-main"],[1,"m-0","p-0"],["class","fa-solid fa-star",3,"rating-color",4,"ngFor","ngForOf"],[1,"fa-regular","fa-heart","heart",3,"id","click"],[1,"fa-solid","fa-heart","heart",3,"id","click"],[1,"fa-solid","fa-star"]],template:function(s,o){1&s&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"owl-carousel-o",4),t.YNc(5,T,1,0,"ng-template",5),t.YNc(6,Z,1,0,"ng-template",5),t.YNc(7,A,1,0,"ng-template",5),t.YNc(8,w,1,0,"ng-template",5),t.qZA()()(),t.TgZ(9,"div",6)(10,"div",7),t._UZ(11,"img",8)(12,"img",9),t.qZA()()()(),t.TgZ(13,"section",10)(14,"owl-carousel-o",4),t.YNc(15,b,2,0,"ng-container",11),t.qZA()(),t.YNc(16,N,7,9,"section",12)),2&s&&(t.xp6(4),t.Q6J("options",o.staticOption),t.xp6(10),t.Q6J("options",o.customOptions),t.xp6(1),t.Q6J("ngForOf",o.responseAllCategory),t.xp6(1),t.Q6J("ngIf",null==o.responseAllProduct?null:o.responseAllProduct.length))},dependencies:[a.ez,a.sg,a.O5,a.OU,m.bB,m.Fy,m.Mp,p.rH,g,l.u5,l.Fj,l.JJ,l.On]})}return i})()}}]);