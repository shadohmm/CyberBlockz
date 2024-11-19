import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  courses = [
    {
      title: "Ethical Hacking Foundations",
      difficulty: "Beginner",
      duration: "1 month",
      price: "₹2000",
      description: "Comprehensive introduction to ethical hacking principles and fundamental cybersecurity tools.",
      icon: "shield",
      image: "../../../assets/images/ethical-Hacking.jpeg",
    },
    {
      title: "Advanced Bug Bounty Techniques",
      difficulty: "Intermediate",
      duration: "1.5 months",
      price: "₹2500",
      description: "Master advanced vulnerability discovery and responsible disclosure strategies.",
      icon: "shield-alert",
      image: "../../../assets/images/bb.jpg",
    },
    {
      title: "Capture The Flag Masterclass",
      difficulty: "Advanced",
      duration: "15-20 days",
      price: "₹1500",
      description: "Intensive practical challenges to sharpen your cybersecurity skills and problem-solving.",
      icon: "flag",
      image: "../../../assets/images/ctf.jpeg",
    },
    {
      title: "Complete Cybersecurity Program",
      difficulty: "Expert",
      duration: "3 months",
      price: "₹5000",
      description: "Comprehensive journey from foundational concepts to advanced defensive and offensive techniques.",
      icon: "shield",
      image: "../../../assets/images/cyberSecurity.jpeg",
    },
  ];

  stats = [
    {
      number: '5000+',
      label: 'Students Trained',
    },
    {
      number: '95%',
      label: 'Success Rate',
    },
    {
      number: '100+',
      label: 'Industry Partners',
    },
    {
      number: '24/7',
      label: 'Support Available',
    },
  ];
  features = [
    {
      icon: "../../../assets/icons/people.png",  // Use the correct icon name from lucide-angular
      title: 'Expert Instructors',
      description: 'Learn from industry professionals',
    },
    {
      icon: "../../../assets/icons/trophy.png",
      title: 'Practical Projects',
      description: 'Real-world applications and scenarios',
    },
    {
      icon: "../../../assets/icons/clock.png",
      title: 'Flexible Learning',
      description: 'Study at your own pace',
    },
    {
      icon: '../../../assets/icons/book.png',
      title: 'Updated Content',
      description: 'Latest cybersecurity trends',
    },
  ];
  getBadgeStyles(difficulty: string): string {
    const badgeStyles: { [key: string]: string } = {
      Beginner: 'bg-green-500/20 text-green-400',
      Intermediate: 'bg-yellow-500/20 text-yellow-400',
      Advanced: 'bg-orange-500/20 text-orange-400',
      Expert: 'bg-red-500/20 text-red-400',
    };
    return badgeStyles[difficulty] || '';
  }

}
