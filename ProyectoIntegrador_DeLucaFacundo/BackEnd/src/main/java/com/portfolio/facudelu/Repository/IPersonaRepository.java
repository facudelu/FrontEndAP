package com.portfolio.facudelu.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.portfolio.facudelu.Entity.Persona;

@Repository
public interface IPersonaRepository extends JpaRepository<Persona,Long> {
    
}
