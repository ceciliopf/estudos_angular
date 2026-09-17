package com.algamoney_api.algamoney.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.algamoney_api.algamoney.model.Pessoa;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Repository
public interface PessoaRepository extends JpaRepository <Pessoa, Long> {

    Page<Pessoa> findByNomeContaining(String nome, Pageable pageable);
}
