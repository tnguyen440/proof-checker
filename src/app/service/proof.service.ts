import { Injectable } from '@angular/core';
import { fakeData } from '../mock-data';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProofService {
  constructor(private http: Http) {

  }

  getData(): Promise<Object> {
    // this.messageService.add('ProofService: fetched data');
    return Promise.resolve(fakeData);
  }

  getFakeDataApi() {
    // this.messageService.add('ProofService: fetched data');
    return this.http.get('https://jsonplaceholder.typicode.com/posts/')
      .toPromise()
      .then(res => res.json())
      .catch(error => Promise.reject(error.message));
  }

  checkHash(hash: string) {
    // call getProofDetails to get response 
    return true;
  }

  getProofDetails(hash: string): Promise<Object> {
    // return hash, array of party names, array of signed hashes, date and time Proof was posted
    return Promise.resolve(fakeData);
  }

  matchingInput(inputJson: JSON) {
    //uses node-crypt to create a hash of input JSON
    //return success if created and supplied hashes match
    return true;
  }
}


