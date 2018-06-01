import { FormularioCargaDto } from '../dto/FormularioCargaDto';
import { Component, OnInit } from '@angular/core';
import { CargaService } from '../servicios/carga.service';
import { Data } from '../dto/data';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  formularioCargoDto: FormularioCargaDto = new FormularioCargaDto();
  restResponse: any ;
  constructor(
    private cargaService: CargaService,
  ) {}
  msgError: string;

  ngOnInit() {
  }



  procesar() {
    this.cargaService.search(this.formularioCargoDto.nombre)
      .subscribe(
        rt => (this.restResponse = rt),
        error => (this.msgError = <any>error),
        () => console.log('Terminado')
      );
  }


  limpiarForm() {
    this.formularioCargoDto = new FormularioCargaDto();

  }
}
