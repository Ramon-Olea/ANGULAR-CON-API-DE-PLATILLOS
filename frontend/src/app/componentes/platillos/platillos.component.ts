import { Component } from '@angular/core';
import { PlatillosService } from '../../services/platillo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.css']
})
export class PlatillosComponent {
  listTarjeta: any[] = [

  ];
  accion = "agregar";
  form: FormGroup;
  id: number | undefined;

  constructor(private fb: FormBuilder, private toastr: ToastrService,
    private _ingredienteservice: PlatillosService,private _route: ActivatedRoute,public dialog: MatDialog
  ) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ['', [Validators.required]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],


    })

  }

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    console.log(id);

    this.obtenerTarjetas(id);
  }

  obtenerTarjetas(id: any) {

    this._ingredienteservice.getListTarjetas(id).subscribe(data => {
      this.listTarjeta = data.meals;
      console.log(data.meals);
    }, error => {
      console.log(error);

    })
  }




  editarTarjeta(tarjeta: any) {
    this.accion = 'EDITAR';
    this.id = tarjeta.id;
    this.form.patchValue({
      titulo: tarjeta.titulo,
      numeroTarjeta: tarjeta.numeroTarjeta,
      fechaExpiracion: tarjeta.fechaExpiracion,
      cvv: tarjeta.cvv
    })



  }
}
