import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './filter/filter.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListCardComponent } from './product-list-card/product-list-card.component';
import { CartComponent } from './cart/cart.component';
import { FilterItemComponent } from './filter-item/filter-item.component';
import { CartListCardComponent } from './cart-list-card/cart-list-card.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    FilterComponent,
    ProductListComponent,
    ProductListCardComponent,
    CartComponent,
    FilterItemComponent,
    CartListCardComponent,
    BuyPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
