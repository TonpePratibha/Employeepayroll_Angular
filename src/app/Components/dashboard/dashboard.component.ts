import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  encapsulation: ViewEncapsulation.None,  //to chnge the background color of table header row
})
export class DashboardComponent {

  columns: string[] = ['name', 'gender', 'department', 'salary', 'startDate', 'actions'];

  // Sample data for table (this would typically come from an API or service)
  data = [
    { 
      name: 'John Doe', 
      avatar: 'https://via.placeholder.com/40', 
      gender: 'Male', 
      department: ['sales','hr','finance'], 
      salary: 50000, 
      startDate: '2020-01-01' 
    },
    { 
      name: 'Jane Smith', 
      avatar: 'https://via.placeholder.com/40', 
      gender: 'Female', 
      department: ['sales','hr','finance'], 
      salary: 60000, 
      startDate: '2019-08-15' 
    }
    ,
    { 
      name: 'John Doe', 
      avatar: 'https://via.placeholder.com/40', 
      gender: 'Male', 
      department: ['sales','hr','finance'], 
      salary: 50000, 
      startDate: '2020-01-01' 
    },
    { 
      name: 'Jane Smith', 
      avatar: 'https://via.placeholder.com/40', 
      gender: 'Female', 
      department: ['sales','hr','finance'], 
      salary: 60000, 
      startDate: '2019-08-15' 
    },
    { 
      name: 'Jane Smith', 
      avatar: 'https://via.placeholder.com/40', 
      gender: 'Female', 
      department: ['sales','hr','finance'], 
      salary: 60000, 
      startDate: '2019-08-15' 
    },
   
    { 
      name: 'John Doe', 
      avatar: 'https://via.placeholder.com/40', 
      gender: 'Male', 
      department: ['sales','hr','finance'], 
      salary: 50000, 
      startDate: '2020-01-01' 
    },
    { 
      name: 'Jane Smith', 
      avatar: 'https://via.placeholder.com/40', 
      gender: 'Female', 
      department: ['sales','hr','finance'], 
      salary: 60000, 
      startDate: '2019-08-15' 
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // You could fetch the data from a service here if needed
  }
}
