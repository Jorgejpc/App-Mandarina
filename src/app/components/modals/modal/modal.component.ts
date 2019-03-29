import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public service:CrudService) { }
  @ViewChild('btnClose') btnClose: ElementRef;

  ngOnInit() {
  }
  onSaveProduct(productForm : NgForm): void{
    //nuevo
    if(productForm.value.id == null){
    this.service.insertProduct(productForm.value);
    }else{
      this.service.updateProduct(productForm.value)
    }
  
    this.btnClose.nativeElement.click();

  }
}
