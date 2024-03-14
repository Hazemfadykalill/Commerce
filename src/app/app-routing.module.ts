import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';


const routes: Routes = [
  // blankLayout home , brands , products ,categories
  
  {
    path: "", canActivate:[authGuard],  loadComponent: () => import("./Layout/blank-layout/blank-layout.component").then((m) => m.BlankLayoutComponent),
    children: [
      {
        path: "", redirectTo: "home", pathMatch: "full"
      },
      { path: "home", loadComponent: () => import("./Components/home/home.component").then((m) => m.HomeComponent), title: "Home" },

      { path: "details/:id", loadComponent: () => import("./Components/product-details/product-details.component").then((m) => m.ProductDetailsComponent), title: "Details" },
      { path: "payment/:id", loadComponent: () => import("./Components/payment/payment.component").then((m) => m.PaymentComponent), title: "payment" },
      { path: "cart", loadComponent: () => import("./Components/cart/cart.component").then((m) => m.CartComponent), title: "Cart" },
      { path: "wishList", loadComponent: () => import("./Components/wish-list/wish-list.component").then((m) => m.WishListComponent), title: "WishList" },
      { path: "allorders", loadComponent: () => import("./Components/orders/orders.component").then((m) => m.OrdersComponent), title: "ALLOrders" },
      { path: "product", loadComponent: () => import("./Components/products/products.component").then((m) => m.ProductsComponent), title: "Products" },
      { path: "categories", loadComponent: () => import("./Components/categories/categories.component").then((m) => m.CategoriesComponent), title: "Categories" },
      { path: "brands", loadComponent: () => import("./Components/brands/brands.component").then((m) => m.BrandsComponent), title: "Brands" },
      { path: "categoryDetails/:id", loadComponent: () => import("./Components/category-details/category-details.component").then((m) => m.CategoryDetailsComponent), title: "Brands" },

      { path: "ALLOrderCart/:index", loadComponent: () => import("./Components/all-order-cart/all-order-cart.component").then((m) => m.AllOrderCartComponent), title: "ALLOrderCart" },
      { path: "UpdatePassword", loadComponent: () => import("./Components/update-password/update-password.component").then((m) => m.UpdatePasswordComponent), title: "UpdatePassword" },



    ],
  },
  // authLayout register , Login 

  {
    path: "", loadComponent: () => import("./Layout/auth-layout/auth-layout.component").then((m) => m.AuthLayoutComponent), children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      { path: "login", loadComponent: () => import("./Components/login/login.component").then((m) => m.LoginComponent), title: "Login" },
      { path: "register", loadComponent: () => import("./Components/register/register.component").then((m) => m.RegisterComponent), title: "Register" },
      { path: "forgetPassword", loadComponent: () => import("./Components/forget-password/forget-password.component").then((m) => m.ForgetPasswordComponent), title: "forgetPassword" },
      
      


    ]

  },
  // if not any thing above
  // NotFound
  {
    path: "**", loadComponent: () => import("./Components/not-found/not-found.component").then((m) => m.NotFoundComponent), title: "Not Found"
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
