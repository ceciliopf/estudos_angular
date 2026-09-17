import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  
    // Injetamos o serviço de mensagens do PrimeNG
    constructor(private messageService: MessageService) { }

    handle(errorResponse: any) {
        let msg: string;

        if(typeof errorResponse ==='string'){
            msg = errorResponse;
        }else {
            msg= 'Erro ao processar serviço remoto. Tente novamente.'
            console.log('Ocorreu um erro', errorResponse);
        }


        // ... código do professor para descobrir qual foi o erro ...
        
        // No final, quando o professor fizer: this.toasty.error(msg);
        // Você vai fazer:
         this.messageService.add({ severity: 'error', detail: msg });
    }
}
