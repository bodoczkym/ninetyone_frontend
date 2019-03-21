import { PipeTransform, Pipe } from '@angular/core';
import { Product } from './../../Product';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(products: Product[], searchTerm: string) {
        if (!products || !searchTerm) {
            return products;
        }
        return products.filter(product => product.name.toLowerCase().
        indexOf(searchTerm.toLocaleLowerCase()) !== -1);
    }
}
