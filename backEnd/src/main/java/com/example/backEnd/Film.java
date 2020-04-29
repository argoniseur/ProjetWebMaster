package com.example.backEnd;

import javax.persistence.*;

@Entity
@Table(name="FILM")
public class Film {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="name")
    private String name;

    @Column(name="annee")
    private String annee;

    @Column(name="realisateur")
    private String realisateur;

    @Column(name="genre")
    private String genre;

    @Column(name="emplacement")
    private String emplacement;

    public Film(){
        super();
    }
    public Film(String name, String annee, String realisateur, FilmGenre genre, String emplacement) {
        super();
        this.name = name;
        this.annee = annee;
        this.realisateur = realisateur;
        this.genre = genre.toString();
        this.emplacement = emplacement;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAnnee() { return annee; }

    public void setAnnee(String annee) {
        this.annee = annee;
    }

    public String getRealisateur() {
        return realisateur;
    }

    public void setRealisateur(String realisateur) {
        this.realisateur = realisateur;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(FilmGenre genre) {
        this.genre = genre.toString();
    }

    public String getEmplacement() {
        return emplacement;
    }

    public void setEmplacement(String emplacement) {
        this.emplacement = emplacement;
    }

    @Override
    public String toString() {
        return "Film [titre=" + name + ", annee=" + annee + ", realisateur=" + realisateur + ", emplacement=" + emplacement + "]";
    }

}
