package com.example.computeStats;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@RestController
public class RestWebService {

    @Autowired
    public RestWebService() {
        super();
    }

    @CrossOrigin
    @GetMapping("/stats")
    public String getStats(){
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8080/film";
        ResponseEntity<Film[]> response
                = restTemplate.getForEntity(url, Film[].class);
        Film[] f = response.getBody();
        List<Film> films = Arrays.asList(f);
        System.out.println(films);

        return Integer.valueOf(films.size()).toString();
    }
}
