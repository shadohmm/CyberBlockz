import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  courses = [
    {
      title: "Ethical Hacking Foundations",
      difficulty: "Beginner",
      duration: "50 hours",
      price: "₹2000",
      description: "Comprehensive introduction to ethical hacking principles and fundamental cybersecurity tools.",
      icon: "shield",
      image: "../../../assets/images/ethical-Hacking.jpeg",
    },
    {
      title: "Advanced Bug Bounty Techniques",
      difficulty: "Intermediate",
      duration: "60 hours",
      price: "₹2500",
      description: "Master advanced vulnerability discovery and responsible disclosure strategies.",
      icon: "shield-alert",
      image: "../../../assets/images/bb.jpg",
    },
    {
      title: "Capture The Flag Masterclass",
      difficulty: "Advanced",
      duration: "40 hours",
      price: "₹1500",
      description: "Intensive practical challenges to sharpen your cybersecurity skills and problem-solving.",
      icon: "flag",
      image: "../../../assets/images/ctf.jpeg",
    },
    {
      title: "Complete Cybersecurity Program",
      difficulty: "Expert",
      duration: "100+ hours",
      price: "₹5000",
      description: "A complete journey from beginner to expert, covering foundational concepts to advanced defensive and offensive techniques.",
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

  // Wait for the DOM to be fully loaded
  ngOnInit(): void {
    // Ensure the code runs only on the client-side (browser)
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // Wait for the DOM to be fully loaded
      document.addEventListener('DOMContentLoaded', () => {
        const viewCoursesButton = document.getElementById('viewCoursesButton') as HTMLButtonElement | null;

        if (viewCoursesButton) {
          viewCoursesButton.addEventListener('click', () => {
            const coursesSection = document.getElementById('courses') as HTMLElement | null;

            if (coursesSection) {
              coursesSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          });
        }
      });
    }
  }  
}
