package com.algamoney_api.algamoney.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.algamoney_api.algamoney.model.Lancamento;
import com.algamoney_api.algamoney.model.Pessoa;
import com.algamoney_api.algamoney.repository.LancamentoRepository;
import com.algamoney_api.algamoney.service.exception.PessoaInexistenteOuInativaException;

@Service
public class LancamentoService {
    @Autowired
    private PessoaService pessoaService;

    @Autowired
    private LancamentoRepository lancamentoRepository;

public Lancamento salvar(Lancamento lancamento) {
    Pessoa pessoa = pessoaService.buscarPessoaPeloCodigo(lancamento.getPessoa().getCodigo());
    
    if (pessoa == null || !pessoa.isAtivo()) {
        throw new PessoaInexistenteOuInativaException();
    }
    
    return lancamentoRepository.save(lancamento);
}
}