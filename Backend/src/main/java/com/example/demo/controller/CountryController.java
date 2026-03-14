package com.example.demo.controller;

import com.example.demo.service.CountryService;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class CountryController {
    private final CountryService countryService;
    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }
    @GetMapping("/countries")
    public Object getCountries(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String code,
            @RequestParam(required = false) String continent,
            @RequestParam(required = false) String capital
    ) {
        return countryService.getCountries(name, code, continent, capital);
    }
}
