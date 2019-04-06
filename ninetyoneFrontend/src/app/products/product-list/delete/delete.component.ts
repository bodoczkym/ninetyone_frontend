import { Component, OnInit } from '@angular/core';
import { DeleteService } from './delete.service';
import { Product } from './../../../Product';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  product: Product;

  constructor(public dialogRef: MatDialogRef<DeleteComponent>,
              private deleteService: DeleteService) { }

  async ngOnInit() {
    this.product = await this.deleteService.getProduct();
  }

  cancel() {
    this.dialogRef.close();
  }

  delete() {
    this.deleteService.deleteProduct(this.product);
    this.cancel();
  }

}
