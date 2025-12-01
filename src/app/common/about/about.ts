import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatButtonModule, MatIconModule, NgStyle, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  routeId: string | null = null;
  routeSub: string | null = null;

  teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Lead Developer',
      bio: 'Full-stack developer with 8+ years of experience in Angular and TypeScript development.',
      icon: 'person'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'UI/UX Designer',
      bio: 'Creative designer focused on user experience and modern interface design principles.',
      icon: 'design_services'
    },
    {
      id: 3,
      name: 'Mike Rodriguez',
      role: 'DevOps Engineer',
      bio: 'Infrastructure specialist ensuring smooth deployment and system reliability.',
      icon: 'settings'
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'Product Manager',
      bio: 'Strategic thinker who bridges the gap between technical implementation and business goals.',
      icon: 'business_center'
    }
  ];

  companyValues = [
    {
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions to solve complex problems.',
      icon: 'lightbulb',
      color: '#ffeb3b'
    },
    {
      title: 'Quality',
      description: 'We maintain high standards in code quality, testing, and user experience.',
      icon: 'verified',
      color: '#4caf50'
    },
    {
      title: 'Collaboration',
      description: 'We believe in teamwork and open communication to achieve the best results.',
      icon: 'group',
      color: '#2196f3'
    },
    {
      title: 'Growth',
      description: 'We foster continuous learning and professional development for our team.',
      icon: 'trending_up',
      color: '#ff5722'
    }
  ];

  technologies = [
    {
      name: 'Angular',
      icon: 'web',
      level: 95,
      color: '#dd0031'
    },
    {
      name: 'TypeScript',
      icon: 'code',
      level: 90,
      color: '#3178c6'
    },
    {
      name: 'Material Design',
      icon: 'palette',
      level: 85,
      color: '#4285f4'
    },
    {
      name: 'RxJS',
      icon: 'stream',
      level: 80,
      color: '#b7178c'
    },
    {
      name: 'Node.js',
      icon: 'dns',
      level: 75,
      color: '#339933'
    },
    {
      name: 'Testing',
      icon: 'bug_report',
      level: 85,
      color: '#ff6d00'
    }
  ];

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.routeId = this.route.snapshot.paramMap.get('id');
    this.routeSub = this.route.snapshot.paramMap.get('sub');
    console.log(this.routeId);
    console.log(this.routeSub);
  }
}
