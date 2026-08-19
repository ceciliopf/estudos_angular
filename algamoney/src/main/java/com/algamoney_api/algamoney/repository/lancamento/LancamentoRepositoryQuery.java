package com.algamoney_api.algamoney.repository.lancamento;

import java.util.List;

import com.algamoney_api.algamoney.model.Lancamento;
import com.algamoney_api.algamoney.repository.filter.LancamentoFilter;

public interface LancamentoRepositoryQuery {
     
    public List<Lancamento> filtrar(LancamentoFilter ancamentoFIlter);

}
