package com.algamoney_api.algamoney.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.algamoney_api.algamoney.model.Pessoa;
import com.algamoney_api.algamoney.repository.PessoaRepository;

@Service
public class PessoaService {

    @Autowired
    PessoaRepository pessoaRepository;


    public Pessoa atualizar(Long codigo, Pessoa pessoa){
         Pessoa pessoaSalva = pessoaRepository.findById(codigo)
        .orElseThrow(()-> new EmptyResultDataAccessException(1));

        BeanUtils.copyProperties(pessoa, pessoaSalva, "codigo");
        return this.pessoaRepository.save(pessoaSalva);
    }
}
