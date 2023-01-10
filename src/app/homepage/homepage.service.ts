import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Contract } from '../contract/contract'

@Injectable({
    providedIn: 'root'
})
export class HomepageService {
    private readonly headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(private httpClient: HttpClient) {}

    getAllContracts(): Observable<Contract[]> {
        return this.httpClient
        .get(`http://localhost:3000/data-api/contract/user`, {
            headers: this.headers,
        })
        .pipe(
            map((data: any) => data),
            map((contracts: Contract[]) => {
                return contracts;
            })
        )
    }

    getContractById(contractId: number): Observable<any> {
        return this.httpClient
        .get(`http://localhost:3000/data-api/contract/` + contractId, {
            headers: this.headers,
        })
        .pipe(
            map((data: any) => data),
            map((contract: Contract) => {
                return contract
            })
        )
    }

    deleteContract(contractId: number): Observable<any> {
        return this.httpClient
        .delete(`http://localhost:3000/data-api/contract/` + contractId, {
            headers: this.headers,
        })
    }
}