import { NgStyle } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-contact',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatExpansionModule,
    ReactiveFormsModule,
    NgStyle
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  contactForm: FormGroup;

  contactInfo = [
    {
      title: 'Office Location',
      description: 'Visit us at our headquarters',
      icon: 'location_on',
      color: '#4caf50',
      details: [
        '123 Tech Street, Suite 100',
        'San Francisco, CA 94105',
        'United States'
      ]
    },
    {
      title: 'Contact Information',
      description: 'Get in touch with our team',
      icon: 'phone',
      color: '#2196f3',
      details: [
        'Phone: +1 (555) 123-4567',
        'Email: info@company.com',
        'Support: support@company.com'
      ]
    },
    {
      title: 'Business Hours',
      description: 'When we are available',
      icon: 'schedule',
      color: '#ff9800',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  faqs = [
    {
      question: 'How long does it take to get a response?',
      answer: 'We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our direct line.'
    },
    {
      question: 'What services do you offer?',
      answer: 'We specialize in web development, mobile applications, UI/UX design, and digital consulting services using modern technologies like Angular, React, and Node.js.'
    },
    {
      question: 'Do you offer support after project completion?',
      answer: 'Yes, we provide ongoing support and maintenance packages to ensure your application continues to perform optimally after launch.'
    },
    {
      question: 'Can you work with existing codebases?',
      answer: 'Absolutely! We have experience working with legacy systems and can help modernize, optimize, or extend existing applications.'
    },
    {
      question: 'What is your development process?',
      answer: 'We follow an agile development methodology with regular client communication, iterative development, and continuous testing to ensure high-quality deliverables.'
    }
  ];

  socialLinks = [
    { name: 'LinkedIn', icon: 'business', color: '#0077b5' },
    { name: 'Twitter', icon: 'alternate_email', color: '#1da1f2' },
    { name: 'GitHub', icon: 'code', color: '#333333' },
    { name: 'Instagram', icon: 'camera_alt', color: '#e4405f' }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['general', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges:', changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Form submitted:', formData);

      // Simulate form submission
      alert(`Thank you, ${formData.name}! Your message has been sent. We'll get back to you soon.`);

      // Reset form after successful submission
      this.contactForm.reset({
        subject: 'general'
      });
    } else {
      console.log('Form is invalid');
      this.markFormGroupTouched();
    }
  }

  resetForm(): void {
    this.contactForm.reset({
      subject: 'general'
    });
  }

  private markFormGroupTouched(): void {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }
}
