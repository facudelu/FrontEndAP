
package com.portfolio.facudelu.Service;

import com.portfolio.facudelu.Interface.IPersonaService;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class ImpPersonaService implements IPersonaService{
    @AutoWired IPersonaRepository ipersonaRepository;
    
    @Override
    public List<Persona> getPersona() {
        List<Persona> persona = ipersonaRepository.findAll();
        return persona;
    }
    
    @Override
    public void savePersona(Persona persona) {
        ipersonaRepository.save(persona);
    }
    
    @Override
    public void deletePersona(Long id) {
        ipersonaRepository.deleteById(id);
    }
    
    @Override
    public Persona findPersona(Long id) {
        Persona persona = ipersonaRepository.findById(id).orElse(null);
        return persona;
    }
}
