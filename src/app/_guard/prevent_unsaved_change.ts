import { Injectable } from "@angular/core";
import { CanDeactivate } from '@angular/router';
import { EditprofileComponent } from '../Components/Memebers/editprofile/editprofile.component';

@Injectable()
export class PreventUnSavedChanges implements CanDeactivate<EditprofileComponent>{
    canDeactivate(component: EditprofileComponent){
      if(component.editForm.dirty){
          return confirm('Are you sure you want to continue? Any unsaved changes will be lost');
      }  
      return true;
    }
}