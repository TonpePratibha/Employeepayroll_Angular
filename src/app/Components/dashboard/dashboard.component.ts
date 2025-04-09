import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from '../../Services/Employee/employee.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
  allEmployees: any[] = []; 
  searchText: string = ''; 
  constructor(private employeeService: EmployeeService,private router:Router) {}

  applyFilter() {
    const term = this.searchText.trim().toLowerCase();
    if (!term) {
      this.data = this.allEmployees;
      return;
    }

    this.data = this.allEmployees.filter(employee =>
      employee.name.toLowerCase().includes(term) ||
      employee.gender.toLowerCase().includes(term) ||
      employee.department.toLowerCase().includes(term) ||
      employee.salary.toLowerCase().includes(term) ||
      employee.startDate.toLowerCase().includes(term)
    );
  }

  //to open search icon
  showSearch: boolean = false;

  toggleSearch() {
    this.showSearch = !this.showSearch;
    if (!this.showSearch) {
      this.searchText = '';
      this.data = this.allEmployees;
    }
  }
  getAllEmployees() {
    this.employeeService.getEmployees().subscribe({
      next: (res: any) => {
        this.data = res;
        this.allEmployees = res;
      },
      error: (err) => {
        console.error("Failed to load employee data", err);
      }
    });
  }
  

  // getAllEmployees() {
  //   this.employeeService.getEmployees().subscribe({
  //     next: (res: any) => {
  //       this.allEmployees = res;
  //       this.data = res; // Initially show all
  //       console.log("Employee data loaded", this.data);
  //     },
  //     error: (err) => {
  //       console.error("Failed to load employee data", err);
  //     }
  //   });
  // }
  ngOnInit(): void {
    this.getAllEmployees();
  }
  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  
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


