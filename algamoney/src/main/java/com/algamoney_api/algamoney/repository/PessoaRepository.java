package com.algamoney_api.algamoney.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.algamoney_api.algamoney.model.Pessoa;

@Repository
public interface PessoaRepository extends JpaRepository <Pessoa, Long> {

    
}
