package com.algamoney_api.algamoney.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.algamoney_api.algamoney.model.Categoria;

@Repository
public interface CategoriaRepository extends JpaRepository <Categoria, Long> {

}
