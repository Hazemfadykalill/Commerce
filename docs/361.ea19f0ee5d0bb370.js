"use strict";(self.webpackChunkflashCart=self.webpackChunkflashCart||[]).push([[361],{7361:(L,_,o)=>{o.r(_),o.d(_,{WishListComponent:()=>x});var c=o(6814),d=o(1120),t=o(4769),u=o(8806),h=o(6286),m=o(2425);function g(e,n){if(1&e&&t._UZ(0,"i",19),2&e){const i=n.$implicit,s=t.oxw().$implicit;t.ekj("rating-color",s.ratingsAverage>i)}}const p=function(e){return["/details",e]},f=function(){return[1,2,3,4,5]};function v(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"div",4)(1,"div",5)(2,"div",6),t.NdJ("click",function(){const a=t.CHM(i).$implicit,l=t.oxw(2);return t.KtG(l.removeProduct(a._id))}),t._UZ(3,"i",7),t.qZA(),t.TgZ(4,"div",8),t._UZ(5,"img",9)(6,"hr"),t.qZA(),t.TgZ(7,"div",10)(8,"div",11)(9,"h6",12),t._uU(10),t.qZA(),t.TgZ(11,"button",13),t.NdJ("click",function(){const a=t.CHM(i).$implicit,l=t.oxw(2);return t.KtG(l.addProduct(a._id))}),t._UZ(12,"i",14),t.qZA()(),t.TgZ(13,"div",15)(14,"p",16),t._uU(15),t.qZA(),t.TgZ(16,"p",17),t.YNc(17,g,1,2,"i",18),t._uU(18),t.qZA()()()()()}if(2&e){const i=n.$implicit,s=t.oxw(2);t.xp6(4),t.Q6J("routerLink",t.VKq(8,p,i._id)),t.xp6(1),t.Q6J("src",i.imageCover,t.LSH)("alt",i.title),t.xp6(5),t.Oqu(i.category.name),t.xp6(1),t.Q6J("disabled",s.clickFlag),t.xp6(4),t.hij("price:",i.price,""),t.xp6(2),t.Q6J("ngForOf",t.DdM(10,f)),t.xp6(1),t.hij(" ",i.ratingsAverage," ")}}function C(e,n){if(1&e&&(t.TgZ(0,"section",1)(1,"div",2),t.YNc(2,v,19,11,"div",3),t.qZA()()),2&e){const i=t.oxw();t.xp6(2),t.Q6J("ngForOf",i.allWishList)}}let x=(()=>{class e{constructor(i,s,r){this._WishListService=i,this._CartService=s,this.tost=r,this.clickFlag=!1}ngOnInit(){this._WishListService.getAllWishList().subscribe({next:i=>{this.allWishListData=i,this.allWishList=this.allWishListData?.data,this.count=this.allWishListData?.count},error:i=>{console.log("Error occurred during request all wishlist from api")}})}addProduct(i){this.clickFlag=!0,this._CartService.addProductToCart(i).subscribe({next:s=>{this.clickFlag=!1,this.tost.success(s.message),this._CartService.cartNumber.next(s.numOfCartItems),localStorage.setItem("cartNumber",s.numOfCartItems)},error:s=>{this.clickFlag=!1,this.tost.error(s.error.message)}})}removeProduct(i){this._WishListService.remove(i).subscribe({next:s=>{console.log(s),this.allWishListData=s,this.allWishList=s.data,this._WishListService.countNumber.next(s.data.length)}})}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(u.i),t.Y36(h.N),t.Y36(m._W))};static#i=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-wish-list"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","allProducts my-4  ",4,"ngIf"],[1,"allProducts","my-4"],[1,"row","g-2"],["class"," col-md-2 ",4,"ngFor","ngForOf"],[1,"col-md-2"],[1,"product","removeProduct"],[1,"icon",3,"click"],[1,"fa-solid","fa-trash","text-danger"],["role","button",1,"image",3,"routerLink"],[1,"w-100",3,"src","alt"],[1,"content","px-1"],[1,"cart","d-flex","justify-content-between","mb-2"],[1,"fw-bold"],[1,"btnCart","p-0","m-0","border-0","bg-white",3,"disabled","click"],[1,"fa-solid","fa-cart-plus","fs-3","fw-bold","text-main"],[1,"d-flex","justify-content-between","small"],[1,"m-0","p-0","text-main"],[1,"m-0","p-0"],["class","fa-solid fa-star",3,"rating-color",4,"ngFor","ngForOf"],[1,"fa-solid","fa-star"]],template:function(s,r){1&s&&t.YNc(0,C,3,1,"section",0),2&s&&t.Q6J("ngIf",null==r.allWishList?null:r.allWishList.length)},dependencies:[c.ez,c.sg,c.O5,d.rH],styles:[".removeProduct[_ngcontent-%COMP%]{position:relative}.removeProduct[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{position:absolute;top:10px;right:-40px;font-size:25px;transition:all .5s;cursor:pointer}.removeProduct[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%]{right:10px}"]})}return e})()}}]);