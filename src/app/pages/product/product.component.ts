import { routes } from './../../app.routes';
import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
constructor(public api:ApiService,private routes:ActivatedRoute){}
item:any;
ngOnInit(){
  const id=this.routes.snapshot.paramMap.get('id');

  this.api.getDataById(id).subscribe((data) => {
    this.item=data;
    console.log(this.item);
 });

}
}
