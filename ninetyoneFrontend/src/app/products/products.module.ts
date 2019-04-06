import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';

// Material components
// Material components
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogConfig } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';


// Components
import { KitchenComponent } from './product-list/kitchen/kitchen.component';
import { LivingRoomComponent } from './product-list/living-room/living-room.component';
import { BedroomComponent } from './product-list/bedroom/bedroom.component';
import { BathroomComponent } from './product-list/bathroom/bathroom.component';
import { TechsComponent } from './product-list/techs/techs.component';
// Filter
import { ProductFilterPipe } from './product-list/product-filter.pipe';
import { ProductPriceFilterPipe } from './product-list/product-price-filter.pipe';
import { ProductFilterFilterPipe } from './product-list/product-filter-filter.pipe';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Ng5SliderModule } from 'ng5-slider';
import { SingleProductComponent } from './product-list/single-product/single-product.component';
import { EditProductComponent } from './product-list/edit-product/edit-product.component';
import { DeleteComponent } from './product-list/delete/delete.component';


@NgModule({
  declarations: [ProductFilterFilterPipe, ProductPriceFilterPipe, ProductFilterPipe, ProductListComponent,
     KitchenComponent, LivingRoomComponent, BedroomComponent, BathroomComponent, TechsComponent, SingleProductComponent,
     EditProductComponent,
     DeleteComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    Ng5SliderModule,
    MatTabsModule,
    MatExpansionModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DeleteComponent
  ]
})
export class ProductsModule { }
