import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterLink } from "@angular/router";
import { Product } from '../../../models/product.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule, MatCardModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatRadioModule, MatSelectModule, MatSlideToggleModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  form!: FormGroup;
  isUpdate: boolean = false;
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private toastr: ToastrService,
    private dialog: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, id: number, row: Product | null }
  ) {
    if (data.id != 0) {
      this.isUpdate = true;
    }
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      id: this.fb.control({ value: this.isUpdate ? this.data?.id : 0, disabled: true }),
      name: this.fb.control(this.isUpdate ? this.data?.row?.name : '', Validators.required),
      description: this.fb.control(this.isUpdate ? this.data?.row?.description : ''),
      price: this.fb.control(this.isUpdate ? this.data?.row?.price : 0, [Validators.required, Validators.min(0)]),
      status: this.fb.control(this.isUpdate ? this.data?.row?.status : true)
    });
  }

  save() {
    if (this.form.valid) {
      if (this.isUpdate) {
        this.productService.updateProduct(this.data?.id!, this.form.value as Product).subscribe({
          next: (product) => {
            this.toastr.success('Product updated successfully! ' + product.id);
            this.form.reset();
            this.dialog.close();
          },
          error: (error) => {
            console.error('Error updating product:', error);
          }
        });
      } else {
        this.productService.createProduct(this.form.value as Product).subscribe({
          next: (product) => {
            this.toastr.success('Product created successfully! ' + product.id);
            this.form.reset();
            this.dialog.close();
          },
          error: (error) => {
            console.error('Error creating product:', error);
          }
        });
      }
    }
  }


  close() {
    this.dialog.close();
  }

}
