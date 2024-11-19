import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  courses = [
    {
      title: 'Ethical Hacking Foundations',
      difficulty: 'Beginner',
      duration: '1 month',
      price: '₹2000',
      description:
        'Comprehensive introduction to ethical hacking principles and fundamental cybersecurity tools.',
      icon: 'shield',
      image: '/ethical-hacking.jpg',
    },
    {
      title: 'Advanced Bug Bounty Techniques',
      difficulty: 'Intermediate',
      duration: '1.5 months',
      price: '₹2500',
      description:
        'Master advanced vulnerability discovery and responsible disclosure strategies.',
      icon: 'shield-alert',
      image: '/bug-bounty.jpg',
    },
    {
      title: 'Capture The Flag Masterclass',
      difficulty: 'Advanced',
      duration: '15-20 days',
      price: '₹1500',
      description:
        'Intensive practical challenges to sharpen your cybersecurity skills and problem-solving.',
      icon: 'flag',
      image: '/ctf.jpg',
    },
    {
      title: 'Complete Cybersecurity Program',
      difficulty: 'Expert',
      duration: '3 months',
      price: '₹5000',
      description:
        'Comprehensive journey from foundational concepts to advanced defensive and offensive techniques.',
      icon: 'shield',
      image: '/cybersecurity.jpg',
    },
  ];

  features = [
    { icon: 'users', title: 'Expert Instructors', description: 'Learn from industry professionals' },
    { icon: 'trophy', title: 'Practical Projects', description: 'Real-world applications and scenarios' },
    { icon: 'clock', title: 'Flexible Learning', description: 'Study at your own pace' },
    { icon: 'book-open', title: 'Updated Content', description: 'Latest cybersecurity trends' },
  ];

  stats = [
    { number: '5000+', label: 'Students Trained' },
    { number: '95%', label: 'Success Rate' },
    { number: '100+', label: 'Industry Partners' },
    { number: '24/7', label: 'Support Available' },
  ];
}

