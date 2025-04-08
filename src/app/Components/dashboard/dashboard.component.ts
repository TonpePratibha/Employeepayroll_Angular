import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from '../../Services/Employee/employee.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  encapsulation: ViewEncapsulation.None,  //to chnge the background color of table header row
})
export class DashboardComponent implements OnInit{

  columns: string[] = ['name', 'gender', 'department', 'salary', 'startDate', 'actions'];

 
  data: any[] = [];

  constructor(private employeeService: EmployeeService) {}

 

  getAllEmployees() {
    this.employeeService.getEmployees().subscribe({
      next: (res: any) => {
        this.data = res;
        console.log("Employee data loaded", this.data);
      },
      error: (err) => {
        console.error("Failed to load employee data", err);
      }
    });
  }
  ngOnInit(): void {
    this.getAllEmployees();
  }

  
  // deleteEmployee(employeeId: number) {
  //   if (confirm("Are you sure you want to delete this employee?")) {
  //     this.employeeService.deleteEmployee(employeeId).subscribe({
  //       next: () => {
  //         alert("Employee deleted successfully!");
  //         this.getAllEmployees(); // Refresh the list
  //       },
  //       error: (err) => {
  //         console.error("Failed to delete employee", err);
  //       }
  //     });
  //   }
  // }

  deleteEmployee(id: number) {
    console.log('Trying to delete employee with ID:', id);
    this.employeeService.deleteEmployee(id).subscribe({
      next: (res) => {
        console.log("Deleted employee:", res);
        this.getAllEmployees();
      },
      error: (err) => {
        console.error("Failed to delete employee", err);
      }
    });
  }
  
}


