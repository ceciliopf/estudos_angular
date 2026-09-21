import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  
    // Injetamos o serviço de mensagens do PrimeNG
    constructor(
        private messageService: MessageService,
        private router: Router
    ) { }

    handle(errorResponse: any) {
        let msg: string;

        if (typeof errorResponse === 'string') {
            msg = errorResponse;
        } else if (errorResponse instanceof HttpErrorResponse 
                   && errorResponse.status >= 400 && errorResponse.status <= 499) {
            let errors = errorResponse.error;
            msg = 'Ocorreu um erro ao processar a sua solicitação';

            if (errorResponse.status === 403) {
                msg = 'Você não tem permissão para executar esta ação';
            } else if (errorResponse.status === 404) {
                this.router.navigate(['/pagina-nao-encontrada']);
                return;
            }

            try {
                if (errors && errors[0] && errors[0].mensagemUsuario) {
                    msg = errors[0].mensagemUsuario;
                }
            } catch (e) { }

            console.error('Ocorreu um erro', errorResponse);
        } else {
            msg = 'Erro ao processar serviço remoto. Tente novamente.';
            console.error('Ocorreu um erro', errorResponse);
        }
        // ... código do professor para descobrir qual foi o erro ...
        
        // No final, quando o professor fizer: this.toasty.error(msg);
        // Você vai fazer:
         this.messageService.add({ severity: 'error', detail: msg });
    }
}
