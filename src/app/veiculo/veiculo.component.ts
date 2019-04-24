import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {VeiculoService} from './veiculo.service';
import {Veiculo} from './veiculo';

@Component({
    selector: 'app-veiculo',
    templateUrl: './veiculo.component.html',
    styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit{

    veiculos: Veiculo[];
    statusMessage: string;
    veiculo = new Veiculo();
    
    constructor(private _veiculoService: VeiculoService,
                private _router: Router){}

    ngOnInit(): void {
        this.getVeiculos();
    }

    getVeiculos(): void{
        this._veiculoService.getAllVeiculos()
            .subscribe((veiculoData) => this.veiculos = veiculoData,
            (error) =>{
                console.log(error);
                this.statusMessage = "Problema com o serviço. Favor tentar novamente!";
            }
        );
        
    }

    addVeiculo(): void{
        this._veiculoService.addVeiculo(this.veiculo)
            .subscribe((response) => {console.log(response); this.getVeiculos();this.reset();},
            (error) =>{
                console.log(error);
                this.statusMessage = "Problema com o serviço. Favor tentar novamente!";
            }
        );   
    }

    private reset(){
        this.veiculo.id = null;
        this.veiculo.ano = null;
        this.veiculo.placa = null;
        this.veiculo.chassi = null;
        this.veiculo.modelo = null;
        this.veiculo.marca = null;
        this.veiculo.renavam = null;
    }

    deleteVeiculo(veiculoId: string){
        this._veiculoService.deleteVeiculo(veiculoId)
            .subscribe((response) => {console.log(response); this.getVeiculos();},
            (error) =>{
                console.log(error);
                this.statusMessage = "Problema com o serviço. Favor tentar novamente!";
            });
            this.reset();
       }

    getVeiculo(veiculoId: string){
        this._veiculoService.getVeiculoById(veiculoId)
            .subscribe((veiculoData) => {this.veiculo = veiculoData; this.getVeiculos(); }),
            (error) => {
                console.log(error);
                this.statusMessage = "Problema com o serviço. Favor tentar novamente!";
            }
        this.reset();    
    }
}