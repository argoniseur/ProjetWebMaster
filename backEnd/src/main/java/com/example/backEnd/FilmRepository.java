package com.example.backEnd;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface FilmRepository extends CrudRepository<Film, Long> {

    Film findById(long id);

    List<Film> findByName(String name);

    List<Film> findByAnnee(String annee);

    List<Film> findByRealisateur(String realisateur);

    List<Film> findByGenre(String genre);

    List<Film> findByEmplacement(String emplacement);

}
