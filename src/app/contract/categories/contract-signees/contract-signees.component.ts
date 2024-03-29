//#2
// Verwerkingsmedewerker 
  // Naam medewerker – string 
  // Functietitel medewerker – string 
  // Bedrijf medewerker – company 

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormProvider } from '../../FormProvider';

@Component({
  selector: 'app-contract-signees',
  templateUrl: './contract-signees.component.html',
  styleUrls: ['./contract-signees.component.css']
})
export class ContractSigneesComponent implements OnInit {

  form: FormGroup;
  routeId: number = 0;

  constructor(private route: ActivatedRoute, private formProvider: FormProvider, private router: Router) {
    this.form = formProvider.getForm().get('contractSignees') as FormGroup;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.routeId = params['id'];
      }
    })
  }

  onSubmit(){
    if (this.routeId != 0){
      this.router.navigate(['contract/edit/' + this.routeId + '/processingpurposes']);
    } else {
      console.log(+this.route.snapshot.paramMap.get('id')!);
      this.router.navigate(['contract/processingpurposes']);
    }
  }

}
