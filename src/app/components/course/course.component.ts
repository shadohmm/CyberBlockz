import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
})
export class CourseComponent {
  @Input() course: any;
  pdfUrl= '';
  ctf = '../../../assets/pdf/cft.pdf';
  bb = '../../../assets/pdf/bug-bounty.pdf'
  ehf = '../../../assets/pdf';
  comple = '../../../assets/pdf/complete.pdf'
  downloadPdf(title:string) {
     // Path to your PDF in the assets folder
    if(title === 'Ethical Hacking Foundations'){
      this.pdfUrl = this.ehf
    }
    else if (title === 'Advanced Bug Bounty Techniques'){
      this.pdfUrl = this.bb
    }
    else if (title === 'Capture The Flag Masterclass'){
      this.pdfUrl = this.ctf
    }
    else if (title === 'Complete Cybersecurity Program'){
      this.pdfUrl = this.comple
    }
    const a = document.createElement('a'); // Create an anchor element
    a.href = this.pdfUrl; // Set the href to the PDF location
    a.download = 'course-details.pdf'; // Optional: Specify the name of the downloaded file
    a.click(); // Trigger the download by simulating a click on the anchor element
  }
}

