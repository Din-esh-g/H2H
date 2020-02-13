import { Injectable } from '@angular/core';
import *as alertyify from 'alertifyjs';
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(message:string, okCallback: () => any){
    alertyify.confirm(message, (e:any) => {
      if(e){
        okCallback();
      }
      else{

      }
    });
  }

  sucess(message:string){
    alertyify.sucess(message);
  }
  error(message: string) {
    alertyify.error(message);
  }
  warning(message: string) {
    alertyify.warning(message);
  }
  message(message: string) {
    alertyify.message(message);
  }

}
