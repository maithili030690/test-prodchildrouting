import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/component/home/home.component";
import { UsersDashboardComponent } from "./shared/component/users-dashboard/users-dashboard.component";
import { ProductsDashboardComponent } from "./shared/component/products-dashboard/products-dashboard.component";
import { FairsComponent } from "./shared/component/fairs/fairs.component";
import { UsersComponent } from "./shared/component/users-dashboard/users/users.component";
import { UsersformComponent } from "./shared/component/users-dashboard/usersform/usersform.component";
import { PageNotFoundComponent } from "./shared/component/page-not-found/page-not-found.component";
import { ProductFormComponent } from "./shared/component/products-dashboard/product-form/product-form.component";
import { ProductComponent } from "./shared/component/products-dashboard/product/product.component";

 
//http:localhost:4200/   >> home component
//http:localhost:4200/home   >> home component
//http:localhost:4200/users   >> users-dashboard component
//http:localhost:4200/products   >> products-dashboard component
//http:localhost:4200/fairs   >> fairs component


const appRoutes : Routes =[
    {
        path:'',
        // component:HomeComponent
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'users',
        component:UsersDashboardComponent,
        children:[
            {
                path:'addusers',
                component:UsersformComponent
            },
            {
                path:':userId',
                component:UsersComponent
            },
            {
                path:':userId/edit',
                component:UsersformComponent
            },
        ]
    },
    // {
    //     path:'users/addusers',
    //     component:UsersformComponent
    // },
    // {
    //     path:'users/:userId',
    //     component:UsersComponent
    // },
    // {
    //     path:'users/:userId/edit',
    //     component:UsersformComponent
    // },
    {
        path:'products',
        component:ProductsDashboardComponent,
        children:[
            {
                path:'addProduct',
                component:ProductFormComponent
            },
            {
                path:':productId',
                component:ProductComponent
            },
            {
                path:':productId/edit',
                component:ProductFormComponent
            },
        ]
    },
    // {
    //     path:'products/addProduct',
    //     component:ProductFormComponent
    // },
    // {
    //     path:'products/:productId',
    //     component:ProductComponent
    // },
    // {
    //     path:'products/:productId/edit',
    //     component:ProductFormComponent
    // },
    {
        path:'fairs',
        component:FairsComponent
    },
    {
        path:'Page-Not-Found',
        component:PageNotFoundComponent
    },
    {
        path:'**',
        // component:PageNotFoundComponent
        redirectTo:'Page-Not-Found'
    },
]


@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
 export class AppRoutingModule{

 }