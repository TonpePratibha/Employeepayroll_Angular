import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../Services/Employee/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  profileImages = [
    '/images/avatar2.jpg',
    '/images/avatar1.jpg',
    '/images/avatar3.jpg',
    '/images/avatar4.jpg',
    
  ];

  departments = ['HR', 'Sales', 'Finance', 'Engineer', 'Others'];
  salaryOptions = ['₹30,000', '₹40,000', '₹50,000', '₹60,000'];
  days = Array.from({ length: 31 }, (_, i) => i + 1);
  months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  years = Array.from({ length: 30 }, (_, i) => 2000 + i);



  selectedDate = { day: '', month: '', year: '' };
  RegisterForm!:FormGroup;
  constructor(private employee:EmployeeService,private formbuilder:FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.RegisterForm=this.formbuilder.group({
     Name:[''],
     Image:[''],
     Gender:[''],
     Department:[[]],
     Salary:[''],
     StartDate:[''],
     Note:['']

    })
  }
 



  onDepartmentChange(event: any, dept: string) {
    if (event.checked) {
      this.RegisterForm.get('Department')?.setValue(dept);
    } else {
      const current = this.RegisterForm.get('Department')?.value;
      if (current === dept) {
        this.RegisterForm.get('Department')?.setValue('');
      }
    }
  }
  

  updateStartDate(value: string | number, type: 'day' | 'month' | 'year') {
    this.selectedDate[type] = value.toString();

    const { day, month, year } = this.selectedDate;
    if (day && month && year) {
      this.RegisterForm.patchValue({ StartDate: `${day}-${month}-${year}` });
    }
  }

  Register() {
    const reqData = this.RegisterForm.value;
    this.employee.Register(reqData).subscribe({
      next: (res) => {
        console.log("Registration Successful:", res);
        alert("User Registered Successfully!");
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        if (err.error?.errors) {
          console.log('Validation Errors:');
          for (let field in err.error.errors) {
            console.log(`${field}: ${err.error.errors[field]}`);
          }
        } else {
          console.error('Other Error:', err);
        }
      }
      
      }
    );
  }
}






 





