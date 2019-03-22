import { PipeTransform, Pipe } from '@angular/core';
import { Product } from './../../Product';

@Pipe({
    name: 'productFilterFilter'
})
export class ProductFilterFilterPipe implements PipeTransform {
    transform(products: Product[], filter: string) {
        if (!products) {
            return products;
        }
        return products.filter(product => (product.filters.includes(filter)));
    }
}
