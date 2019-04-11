import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { DeleteService } from './delete.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  deleteProduct: Product;

  constructor(public dialogRef: MatDialogRef<DeleteComponent>,
              private deleteService: DeleteService) { }

  async ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

  async delete() {
    this.deleteService.deleteProductFromCart(this.deleteService.deletePurchaseId);
    this.deleteProduct = await this.getProducts(this.deleteService.deleteProductId, this.deleteService.deleteProductType);
    console.log('Modified product:' + this.deleteProduct);
    this.deleteProduct.inCart = (this.deleteProduct.inCart - 1);
    this.deleteProduct.quantity = (this.deleteProduct.quantity + 1);
    this.deleteService.updateProduct(this.deleteProduct);
    this.cancel();
  }

  async getProducts(id: number, type: string) {
    if (type === 'bedroom') {
      return await this.deleteService.getBedProduct(id);
    } else if (type === 'bathroom') {
      return await this.deleteService.getBathProduct(id);
    } else if (type === 'kitchen') {
      return await this.deleteService.getKitchenProduct(id);
    } else if (type === 'livingroom') {
      return await this.deleteService.getLivingPRoduct(id);
    } else if (type === 'techs') {
      return await this.deleteService.getTechsProduct(id);
    }
  }

}
