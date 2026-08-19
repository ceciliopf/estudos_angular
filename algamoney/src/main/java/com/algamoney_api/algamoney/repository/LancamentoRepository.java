package com.algamoney_api.algamoney.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.algamoney_api.algamoney.model.Lancamento;
import com.algamoney_api.algamoney.repository.lancamento.LancamentoRepositoryQuery;

@Repository
public interface LancamentoRepository extends JpaRepository <Lancamento, Long>, LancamentoRepositoryQuery{

}
