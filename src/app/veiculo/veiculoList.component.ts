import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VeiculoService } from './veiculo.service';
import { Veiculo } from './veiculo';
import { Router } from '@angular/router';


@Component({
    selector: 'veiculo-list',
    templateUrl: './veiculoList.component.html',
    styleUrls: ['./veiculoList.component.css']
})
export class VeiculoListComponent implements OnInit{
    veiculo = new Veiculo();
    statusMessage: string;
    veiculos: Veiculo[];
    constructor(private _veiculoService: VeiculoService,
                private _router: Router){}
    
    ngOnInit(): void {
        console.log("calling ngOnInit()::::");
        this.getVeiculos();
    }

    getVeiculos(): void{
        console.log("Inside getVeiculos():::::")
        this._veiculoService.getAllVeiculos()
            .subscribe((veiculoData) => this.veiculos = veiculoData,
            (error) =>{
                console.log(error);
                this.statusMessage = "Problema com o serviço. Favor tentar novamente!";
            }
        );
    }
}