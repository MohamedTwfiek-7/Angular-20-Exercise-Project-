import { NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer',
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RouterLink,
    FormsModule,
    NgStyle,
    NgClass,
    TitleCasePipe
  ],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {
  name: string = '';
  searchTerm: string = '';
  filterStatus: string = 'all';

  customerStats = [
    {
      label: 'Total Customers',
      value: '2,847',
      icon: 'people',
      color: '#2196f3',
      trend: 'up',
      change: '+12%'
    },
    {
      label: 'Active This Month',
      value: '1,234',
      icon: 'trending_up',
      color: '#4caf50',
      trend: 'up',
      change: '+8%'
    },
    {
      label: 'New Customers',
      value: '156',
      icon: 'person_add',
      color: '#ff9800',
      trend: 'up',
      change: '+23%'
    },
    {
      label: 'Avg. Order Value',
      value: '$89.50',
      icon: 'payments',
      color: '#9c27b0',
      trend: 'down',
      change: '-3%'
    }
  ];

  customers = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1 (555) 123-4567',
      location: 'New York, NY',
      joinDate: 'Jan 2024',
      status: 'active',
      totalSpent: '2,450',
      orders: 12,
      avatarColor: '#2196f3'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@company.com',
      phone: '+1 (555) 987-6543',
      location: 'Los Angeles, CA',
      joinDate: 'Feb 2024',
      status: 'active',
      totalSpent: '1,890',
      orders: 8,
      avatarColor: '#4caf50'
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'michael.brown@gmail.com',
      phone: '+1 (555) 456-7890',
      location: 'Chicago, IL',
      joinDate: 'Dec 2023',
      status: 'inactive',
      totalSpent: '3,200',
      orders: 15,
      avatarColor: '#ff9800'
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily.davis@outlook.com',
      phone: '+1 (555) 321-0987',
      location: 'Houston, TX',
      joinDate: 'Mar 2024',
      status: 'pending',
      totalSpent: '0',
      orders: 0,
      avatarColor: '#9c27b0'
    },
    {
      id: 5,
      name: 'David Wilson',
      email: 'david.wilson@yahoo.com',
      phone: '+1 (555) 654-3210',
      location: 'Phoenix, AZ',
      joinDate: 'Jan 2024',
      status: 'active',
      totalSpent: '1,567',
      orders: 9,
      avatarColor: '#f44336'
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      email: 'lisa.anderson@email.com',
      phone: '+1 (555) 789-0123',
      location: 'Philadelphia, PA',
      joinDate: 'Feb 2024',
      status: 'active',
      totalSpent: '2,890',
      orders: 14,
      avatarColor: '#00bcd4'
    },
    {
      id: 7,
      name: 'James Miller',
      email: 'james.miller@company.org',
      phone: '+1 (555) 012-3456',
      location: 'San Antonio, TX',
      joinDate: 'Nov 2023',
      status: 'inactive',
      totalSpent: '945',
      orders: 5,
      avatarColor: '#795548'
    },
    {
      id: 8,
      name: 'Jennifer Taylor',
      email: 'jennifer.t@domain.com',
      phone: '+1 (555) 345-6789',
      location: 'San Diego, CA',
      joinDate: 'Mar 2024',
      status: 'active',
      totalSpent: '1,234',
      orders: 7,
      avatarColor: '#607d8b'
    }
  ];

  get filteredCustomers() {
    let filtered = this.customers;

    // Filter by search term
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(customer =>
        customer.name.toLowerCase().includes(term) ||
        customer.email.toLowerCase().includes(term)
      );
    }

    // Filter by status
    if (this.filterStatus !== 'all') {
      filtered = filtered.filter(customer => customer.status === this.filterStatus);
    }

    return filtered;
  }

  canNavigate() {
    if (this.name !== '') {
      if (confirm('You have unsaved changes. Do you really want to leave?')) {
        return true;
      }
      return false;
    }
    return true;
  }

  deleteCustomer(customerId: number): void {
    const customer = this.customers.find(c => c.id === customerId);
    if (customer && confirm(`Are you sure you want to delete ${customer.name}?`)) {
      const index = this.customers.findIndex(c => c.id === customerId);
      if (index > -1) {
        this.customers.splice(index, 1);
        console.log(`Customer ${customer.name} deleted`);
      }
    }
  }
}
