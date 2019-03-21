import { PipeTransform, Pipe } from '@angular/core';
import { Product } from './../../Product';

@Pipe({
    name: 'priceFilter'
})
export class ProductPriceFilterPipe implements PipeTransform {
    transform(products: Product[], lowPrice: number, highPrice: number) {
        if (!products ||  !highPrice) {
            return products;
        }
        return products.filter(product => (product.price >= lowPrice) && (product.price <= highPrice));
    }
}
