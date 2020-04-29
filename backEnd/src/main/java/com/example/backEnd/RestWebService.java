package com.example.backEnd;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@RestController
public class RestWebService {

    FilmRepository filmRepository;

    @Autowired
    public RestWebService(FilmRepository filmRepository) {
        super();
        this.filmRepository = filmRepository;
    }

    @GetMapping("/populate")
    public String populate(){
        Film film = new Film("Avengers", "2019", "jspuki", FilmGenre.fantaisie, "P1E28");
        filmRepository.save(film);
        film = new Film("Narnia", "2005", "Adamson", FilmGenre.fantaisie, "P1E29");
        filmRepository.save(film);
        return "Done";
    }
    @GetMapping("/findbyname")
    public List<Film> findByName(@RequestParam("name") String name){
        return filmRepository.findByName(name);
    }

    @GetMapping("/approxsearch")
    public List<Film> approxsearch(@RequestParam("name") String name){
        List<Film> ret = new ArrayList<>();
        for(Film f : filmRepository.findAll()){
            if(f.getName().contains(name)){
                ret.add(f);
            }
        }
        return ret;
    }

    @GetMapping("/findbyannee")
    public List<Film> findByAnnee(@RequestParam("annee") String annee){
        return filmRepository.findByAnnee(annee);
    }

    @GetMapping("/findbyrealisateur")
    public List<Film> findByRealisateur(@RequestParam("realisateur") String realisateur){
        return filmRepository.findByRealisateur(realisateur);
    }

    @GetMapping("/findbygenre")
    public List<Film> findByGenre(@RequestParam("genre") String genre){
        return filmRepository.findByGenre(genre);
    }

    @GetMapping("/findbyemplacement")
    public List<Film> findByEmplacement(@RequestParam("emplacement") String emplacement){
        return filmRepository.findByEmplacement(emplacement);
    }


    @GetMapping("/film")
    public Iterable<Film> getFilms(){
        return filmRepository.findAll();
    }

    @PostMapping("/film")
    @Transactional(propagation = Propagation.REQUIRES_NEW, rollbackFor = Exception.class)
    public void addFilm(@RequestBody Film film){
        Film toSave = new Film(film.getName(), film.getAnnee(), film.getRealisateur(), FilmGenre.valueOf(film.getGenre()), film.getEmplacement());
        filmRepository.save(toSave);
    }

    @PostMapping("/deletefilm")
    public void deleteFilm(@RequestBody Film film){
        film.toString();
        filmRepository.delete(film);
    }

    @GetMapping("/deletebyid")
    public String deleteFilm(@RequestParam("id") long id){
        Film tmp = filmRepository.findById(id);
        filmRepository.delete(tmp);
        return "Done";
    }

    @GetMapping("/random")
    public Film randomFilm(){
        List<Film> result = new ArrayList<>();
        Iterable<Film> tmp = this.getFilms();
        tmp.forEach(result::add);
        Random rand = new Random();
        return result.get(rand.nextInt(result.size()));
    }
}
