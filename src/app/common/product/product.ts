import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProductFormComponent } from './product-form/product-form.component';
@Component({
  selector: 'app-product',
  imports: [MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatIconModule, MatInputModule, MatTooltipModule, CommonModule, MatDialogModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'status', 'action'];
  dataSource = new MatTableDataSource<Product>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  products: Product[] = [];

  constructor(private productService: ProductService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (res: Product[]) => {
        this.products = res;
        this.dataSource.data = this.products;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, error: (err) => {
        alert('Failed to fetch products' + err);
      }
    });
  }

  createProduct() {
    this.openPopUp();
  }

  openPopUp() {
    const dialogRef = this.dialog.open(ProductFormComponent,
      {
        width: '50%',
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '500ms',
        data: { title: 'Create Product', id: 0, row: null }
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      this.getAllProducts();
    });
  }

  editProduct(row: Product) {
    this.dialog.open(ProductFormComponent,
      {
        width: '50%',
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '500ms',
        data: { title: 'Edit Product', id: row.id, row: row }
      }
    ).afterClosed().subscribe(val => {
      this.getAllProducts();
    });
  }

  deleteProduct(id: number) {
    if (confirm("Are you sure to delete this product?")) {
      this.productService.deleteProduct(id).subscribe({
        next: (res) => {
          alert('Product deleted successfully');
          this.getAllProducts();
        }, error: (err) => {
          alert('Failed to delete product' + err);
        }
      });
    }
  }

}
