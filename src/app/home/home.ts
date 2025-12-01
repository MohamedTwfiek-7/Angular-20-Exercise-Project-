import { NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatButtonModule, MatIconModule, NgStyle, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly title = signal('Angular 20 Framework');

  features = [
    {
      id: 1,
      title: 'Modern Architecture',
      subtitle: 'Component-based',
      description: 'Built with standalone components and the latest Angular patterns for maximum performance and maintainability.',
      icon: 'architecture',
      color: '#2196f3'
    },
    {
      id: 2,
      title: 'TypeScript First',
      subtitle: 'Type Safety',
      description: 'Fully typed application ensuring robust code quality and excellent developer experience.',
      icon: 'code',
      color: '#4caf50'
    },
    {
      id: 3,
      title: 'Material Design',
      subtitle: 'Beautiful UI',
      description: 'Responsive design using Angular Material components for a consistent and modern user interface.',
      icon: 'palette',
      color: '#ff9800'
    },
    {
      id: 4,
      title: 'Reactive Forms',
      subtitle: 'User Input',
      description: 'Advanced form handling with validation, error management, and real-time user feedback.',
      icon: 'dynamic_form',
      color: '#9c27b0'
    }
  ];

  stats = [
    { label: 'Components', value: '15+' },
    { label: 'Services', value: '8' },
    { label: 'Routes', value: '12' },
    { label: 'Test Coverage', value: '85%' }
  ];

  recentUpdates = [
    {
      id: 1,
      title: 'Authentication System',
      description: 'Implemented JWT-based authentication with guards and interceptors',
      date: '2 days ago',
      type: 'feature'
    },
    {
      id: 2,
      title: 'Product Management',
      description: 'Added CRUD operations for product management with reactive forms',
      date: '1 week ago',
      type: 'feature'
    },
    {
      id: 3,
      title: 'Performance Optimization',
      description: 'Improved loading times by 40% with lazy loading and OnPush strategy',
      date: '2 weeks ago',
      type: 'improvement'
    },
    {
      id: 4,
      title: 'Bug Fixes',
      description: 'Resolved navigation issues and form validation edge cases',
      date: '3 weeks ago',
      type: 'fix'
    }
  ];
}
