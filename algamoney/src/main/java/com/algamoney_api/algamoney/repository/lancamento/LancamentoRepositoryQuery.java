package com.algamoney_api.algamoney.repository.lancamento;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.algamoney_api.algamoney.model.Lancamento;
import com.algamoney_api.algamoney.repository.filter.LancamentoFilter;

public interface LancamentoRepositoryQuery {
     
    public Page<Lancamento> filtrar(LancamentoFilter lancamentoFIlter, Pageable page);

}
