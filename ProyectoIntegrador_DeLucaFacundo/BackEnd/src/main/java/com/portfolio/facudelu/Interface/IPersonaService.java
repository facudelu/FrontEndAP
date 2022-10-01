package com.portfolio.facudelu.Interface;

import com.portfolio.facudelu.Entity.Persona;


public interface IPersonaService {
    public List<Persona> getPersona();
    
    public void savePersona(Persona persona);
    
    public void deletePersona(Long id);
    
    public Persona findPersona (Long id);
}
