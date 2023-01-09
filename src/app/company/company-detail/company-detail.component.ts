import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company.model';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company!: Company
  constructor(private companyService: CompanyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCompany(+this.route.snapshot.paramMap.get('id')!);
  }

  getCompany(id: number){
    this.companyService.getById(id).subscribe((data: any) => { 
      this.company = data;
    });
  }

}
