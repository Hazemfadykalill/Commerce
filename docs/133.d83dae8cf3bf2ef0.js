"use strict";(self.webpackChunkflashCart=self.webpackChunkflashCart||[]).push([[133],{8133:(g,i,s)=>{s.r(i),s.d(i,{AllOrderCartComponent:()=>d});var a=s(6814),t=s(4769),o=s(662),n=s(1120);function c(l,u){if(1&l&&(t.TgZ(0,"div",3)(1,"div",4),t._UZ(2,"img",5),t.TgZ(3,"div",6)(4,"h6",7),t._uU(5),t.qZA(),t.TgZ(6,"div",8)(7,"p",9),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"i",10),t._uU(11),t.qZA()()()()()),2&l){const e=u.$implicit;t.xp6(2),t.Q6J("src",e.product.imageCover,t.LSH)("alt",e.product.title),t.xp6(3),t.Oqu(e.product.title.split(" ").slice(0,2).join(" ")),t.xp6(3),t.hij("price :",t.lcZ(9,5,e.price),""),t.xp6(3),t.Oqu(e.product.ratingsAverage)}}let d=(()=>{class l{constructor(e,r){this._AllOrdersService=e,this.ActivatedRoute=r,this.index=0}ngOnInit(){this._AllOrdersService.allOrders().subscribe({next:e=>{this.ActivatedRoute.paramMap.subscribe({next:r=>{console.log(r),this.index=r.get("index")}}),this.allOrders=e,this.allOrdersList=this.allOrders?.data,this.allOrdersMetaData=this.allOrders?.metadata,this.resultOrders=this.allOrders?.results,this.allCartItemList=this.allOrders?.data[this.index].cartItems,console.log(this.allCartItemList)},error:e=>{console.log("Error occurred during request all orders ")}})}static#t=this.\u0275fac=function(r){return new(r||l)(t.Y36(o.B),t.Y36(n.gz))};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["app-all-order-cart"]],standalone:!0,features:[t.jDz],decls:3,vars:1,consts:[[1,"my-5"],[1,"row","g-4","justify-content-center"],["class","col-md-3 col-sm-6 col-lg-2",4,"ngFor","ngForOf"],[1,"col-md-3","col-sm-6","col-lg-2"],[1,"image","shadow","rounded-2","bg-main-light","overflow-hidden"],["height","270",1,"w-100",3,"src","alt"],[1,"content","px-2","my-4"],[1,"fw-bold","text-capitalize"],[1,"price","d-flex","justify-content-between","align-items-center","small"],[1,"m-0","p-0","text-main"],[1,"fa-solid","fa-star","me-2","rating-color"]],template:function(r,m){1&r&&(t.TgZ(0,"section",0)(1,"div",1),t.YNc(2,c,12,7,"div",2),t.qZA()()),2&r&&(t.xp6(2),t.Q6J("ngForOf",m.allCartItemList))},dependencies:[a.ez,a.sg,a.H9]})}return l})()}}]);