import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Veiculo } from './veiculo';

const API_URL = environment.apiUrl;

@Injectable()
export class VeiculoService{
    
    constructor(private _httpService: Http){}

    getAllVeiculos(): Observable<Veiculo[]>{
        return this._httpService.get(API_URL + '/veiculos')
                .map((response: Response) => response.json())
                .catch(this.handleError);
    }

    getVeiculoById(veiculoId: string): Observable<Veiculo>{
        return this._httpService.get(API_URL + '/veiculos/' + veiculoId)
                .map((response: Response) => response.json())
                .catch(this.handleError);
    }

    addVeiculo(veiculo: Veiculo){
        let body = JSON.parse(JSON.stringify(veiculo));
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        if(veiculo.id){    
            return this._httpService.put(API_URL + '/veiculos', body, options);
        }else{
            return this._httpService.post(API_URL + '/veiculos', body, options);
        }
    }

    deleteVeiculo(veiculoId: string){
        return this._httpService.delete(API_URL + '/veiculos/' + veiculoId);
    }

    private handleError(error: Response){
        return Observable.throw(error);
    }
}