
import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { companyUrl } from '../company-url';
import swal from 'sweetalert2';
import { GenericService } from 'src/app/services/generic.service';
@Component({
  selector: 'app-departmentgroup',
  templateUrl: './departmentgroup.component.html',
  styleUrls: ['./departmentgroup.component.scss']
})
export class DepartmentgroupComponent implements OnInit {
    
	displayedColumns: string[] = ['DepartmentGroupName','DepartmentGroupCode','DivisionID','StatusID'];
  data = [];
  Division = [];
    obj={ DepartmentGroupName : null,DepartmentGroupCode : null,DivisionID : null,StatusID : null };
    displayForm = false;
    operation = "Add";
	title="Department Group";
  parent="Company";
  Status = [];
	
  constructor(protected http: HttpService, protected generics: GenericService) {
		this.loadItem = this.loadItem.bind(this);
	}
  
    ngOnInit() {
      this.generics.getStatus()
        .subscribe(res => {
		  this.Status = res;
        }, err =>
        { console.log(err) });

      this.http.get(companyUrl.departmentgroup.list)
        .subscribe(res => {
		  this.data = res.data;
        }, err =>
        { console.log(err) });

        this.http.get(companyUrl.divisions.list)
      .subscribe(res => {
        this.Division = res.data;
      }, err => { console.log(err); });
		
    }
	
    showForm()
    {
      this.displayForm = true;
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  
    hideForm(){this.displayForm = false;}

    addItem() {
      this.resetForm();
      this.showForm();
    }
  
    processForm()
    {
      let url = companyUrl.departmentgroup.add;
      if(this.operation=="Update")
        url = companyUrl.departmentgroup.update;
      this.save(url);
    }
  
    save(url)
    {
      this.http.post(url,this.obj)
        .subscribe(res => {
          this.data= res.data;
          swal.fire("Process Complete", res.message,'success');
          this.resetForm();
        }, err =>
        {
          console.log(err);
          swal.fire("Process Unsuccessful", err.error.message,'error');
        });

    }
  
    loadItem(id)
    {
      this.obj = this.data.find(item => item.id === id.row.data.id);
      this.operation ="Update";
      this.showForm();
    }
  
    resetForm()
    {
      this.obj = { DepartmentGroupName : null,DepartmentGroupCode : null,DivisionID : null,StatusID : null };
      this.hideForm();
      this.operation="Add";
    }
  }
