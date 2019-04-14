import { Component, OnInit, Input, Output, EventEmitter, OnChanges  } from '@angular/core';
import { EditProductService } from './edit-product.service';
import { Product } from 'src/app/Product';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnChanges {

  product: Product;
  filters = [];
  str = '';

  modifyForm = this.fb.group({
    name: ['', [Validators.required]],
    stocknumber: ['', [Validators.required]],
    filt: ['', [Validators.required]],
    description: ['', [Validators.required]],
    type: ['', [Validators.required]],
    price: ['', [Validators.required]]
  });
  @Input() pr: Product;
  @Output() save = new EventEmitter<Product>();
  get name() { return this.modifyForm.get('name'); }
  get stocknumber() { return this.modifyForm.get('stocknumber'); }
  get filt() { return this.modifyForm.get('filt'); }
  get description() { return this.modifyForm.get('description'); }
  get type() { return this.modifyForm.get('type'); }
  get price() { return this.modifyForm.get('price'); }

  constructor(private editProductService: EditProductService,
              private fb: FormBuilder) { }

  async ngOnInit() {
    this.product = await this.editProductService.getProduct();
  }

  ngOnChanges() {
    this.modifyForm.patchValue(this.pr);
  }

  onSubmit() {
    const test = {
      id: this.product.id,
      name: this.modifyForm.value.name,
      stocknumber: this.modifyForm.value.stocknumber,
      filters: this.product.filters,
      description: this.modifyForm.value.description,
      rate: this.product.rate,
      type: this.modifyForm.value.type,
      img: this.product.img,
      price: this.modifyForm.value.price,
      createdAt: this.product.createdAt
    };
    console.log(test);
    this.editProductService.modify(Object.assign(new Product(), test));
  }

}
