"use strict";(self.webpackChunkflashCart=self.webpackChunkflashCart||[]).push([[746],{5746:(W,d,o)=>{o.r(d),o.d(d,{ProductsComponent:()=>E});var l=o(6814),p=o(1120),g=o(756),_=o(6472),t=o(4769),h=o(1132),m=o(6286),u=o(2425),f=o(8806);function P(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"i",21),t.NdJ("click",function(){t.CHM(e);const r=t.oxw().$implicit,n=t.oxw(2);return t.KtG(n.addToWishList(r._id))}),t.qZA()}if(2&s){const e=t.oxw().$implicit;t.Q6J("id",e._id)}}function v(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"i",22),t.NdJ("click",function(){t.CHM(e);const r=t.oxw().$implicit,n=t.oxw(2);return t.KtG(n.addToWishList(r._id))}),t.qZA()}if(2&s){const e=t.oxw().$implicit;t.Q6J("id",e._id)}}function C(s,a){if(1&s&&t._UZ(0,"i",23),2&s){const e=a.$implicit,i=t.oxw().$implicit;t.ekj("rating-color",i.ratingsAverage>=e)}}const x=function(s){return["/details",s]},L=function(){return[1,2,3,4,5]};function A(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"div",6)(1,"div",7),t.YNc(2,P,1,1,"i",8),t.YNc(3,v,1,1,"i",9),t.TgZ(4,"div",10),t._UZ(5,"img",11)(6,"hr"),t.qZA(),t.TgZ(7,"div",12)(8,"div",13)(9,"h6",14),t._uU(10),t.qZA(),t.TgZ(11,"button",15),t.NdJ("click",function(){const n=t.CHM(e).$implicit,c=t.oxw(2);return t.KtG(c.addProduct(n._id))}),t._UZ(12,"i",16),t.qZA()(),t.TgZ(13,"div",17)(14,"p",18),t._uU(15),t.qZA(),t.TgZ(16,"p",19),t.YNc(17,C,1,2,"i",20),t._uU(18),t.qZA()()()()()}if(2&s){const e=a.$implicit,i=t.oxw(2);t.xp6(2),t.Q6J("ngIf",!(null!=i.responseAllWishListData&&i.responseAllWishListData.includes(e._id))),t.xp6(1),t.Q6J("ngIf",null==i.responseAllWishListData?null:i.responseAllWishListData.includes(e._id)),t.xp6(1),t.Q6J("routerLink",t.VKq(10,x,e._id)),t.xp6(1),t.Q6J("src",e.imageCover,t.LSH)("alt",e.title),t.xp6(5),t.Oqu(e.category.name),t.xp6(1),t.Q6J("disabled",i.clickFlag),t.xp6(4),t.hij("price:",e.price,""),t.xp6(2),t.Q6J("ngForOf",t.DdM(12,L)),t.xp6(1),t.hij(" ",e.ratingsAverage," ")}}const T=function(s,a,e){return{id:"foo",itemsPerPage:s,currentPage:a,totalItems:e}};function D(s,a){if(1&s&&(t.TgZ(0,"section",3)(1,"div",4),t.YNc(2,A,19,13,"div",5),t.ALo(3,"paginate"),t.qZA()()),2&s){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.xi3(3,1,e.responseAllProduct,t.kEZ(4,T,e.itemsPerPage,e.currentPage,e.totalResult)))}}let E=(()=>{class s{constructor(e,i,r,n,c){this._ProductsService=e,this._CartService=i,this.toast=r,this._WishListService=n,this.tost=c,this.responseAllWishListData=[],this.clickFlag=!1}ngOnInit(){this.pageData()}pageData(e=1){this._ProductsService.getProductByPage(e).subscribe({next:i=>{console.log(i),this.responseAllProduct=i.data,this.metaData=i.metadata,this.itemsPerPage=this.metaData?.limit,this.currentPage=this.metaData?.currentPage,this.totalResult=i.results},error:i=>{console.log("when get all product found problem")}})}pageChanged(e){this.pageData(e)}addProduct(e){this.clickFlag=!0,this._CartService.addProductToCart(e).subscribe({next:i=>{this.clickFlag=!1,this.toast.success(i.message),this._CartService.cartNumber.next(i.numOfCartItems),localStorage.setItem("cartNumber",i.numOfCartItems)},error:i=>{this.clickFlag=!1,this.toast.error(i.error.message)}})}addToWishList(e){this._WishListService.addToWish(e).subscribe({next:i=>{console.log(i),this._WishListService.countNumber.next(i.data.length),this.responseAllWishlist=i,this.responseAllWishListData=this.responseAllWishlist?.data,this.tost.success(i.message)},error:i=>{this.tost.success("error when add to wish list")}})}removeProduct(e){this._WishListService.remove(e).subscribe({next:i=>{this.responseAllWishListData=this.responseAllWishlist?.data,this._WishListService.countNumber.next(i.data.length)}})}static#t=this.\u0275fac=function(i){return new(i||s)(t.Y36(h.s),t.Y36(m.N),t.Y36(u._W),t.Y36(f.i),t.Y36(u._W))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-products"]],standalone:!0,features:[t.jDz],decls:3,vars:5,consts:[["class","allProducts my-4  ",4,"ngIf"],[1,"paginationPages","d-flex","justify-content-center","mt-4"],["id","foo","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"maxSize","directionLinks","autoHide","responsive","pageChange","pageBoundsCorrection"],[1,"allProducts","my-4"],[1,"row","g-2","justify-content-center"],["class"," col-md-2 ",4,"ngFor","ngForOf"],[1,"col-md-2"],[1,"product"],["class","fa-regular fa-heart  heart ",3,"id","click",4,"ngIf"],["class","fa-solid fa-heart  heart ",3,"id","click",4,"ngIf"],["role","button",1,"image",3,"routerLink"],[1,"w-100",3,"src","alt"],[1,"content","px-1"],[1,"cart","d-flex","justify-content-between","mb-2"],[1,"fw-bold"],[1,"btnCart","p-0","m-0","border-0","bg-white",3,"disabled","click"],[1,"fa-solid","fa-cart-plus","fs-3","fw-bold","text-main"],[1,"d-flex","justify-content-between","small"],[1,"m-0","p-0","text-main"],[1,"m-0","p-0"],["class","fa-solid fa-star",3,"rating-color",4,"ngFor","ngForOf"],[1,"fa-regular","fa-heart","heart",3,"id","click"],[1,"fa-solid","fa-heart","heart",3,"id","click"],[1,"fa-solid","fa-star"]],template:function(i,r){1&i&&(t.YNc(0,D,4,8,"section",0),t.TgZ(1,"div",1)(2,"pagination-controls",2),t.NdJ("pageChange",function(c){return r.pageChanged(c)})("pageBoundsCorrection",function(c){return r.pageChanged(c)}),t.qZA()()),2&i&&(t.Q6J("ngIf",null==r.responseAllProduct?null:r.responseAllProduct.length),t.xp6(2),t.Q6J("maxSize",9)("directionLinks",!0)("autoHide",!0)("responsive",!0))},dependencies:[l.ez,l.sg,l.O5,g.bB,p.rH,_.JX,_._s,_.LS]})}return s})()}}]);