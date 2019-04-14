import { Component, OnInit, Input, Output, EventEmitter, OnChanges  } from '@angular/core';
import { Product } from 'src/app/Product';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NewProductService } from './new-product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit, OnChanges {

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

  constructor(private newProductService: NewProductService,
              private fb: FormBuilder) { }

  async ngOnInit() { }

  ngOnChanges() {
    this.modifyForm.patchValue(this.pr);
  }

  onSubmit() {
    const test = {
      name: this.modifyForm.value.name,
      stocknumber: this.modifyForm.value.stocknumber,
      filters: this.modifyForm.value.filt,
      description: this.modifyForm.value.description,
      type: this.modifyForm.value.type,
      price: this.modifyForm.value.price
    };
    console.log(test);
    this.newProductService.new(Object.assign(new Product(), test));
  }
}
