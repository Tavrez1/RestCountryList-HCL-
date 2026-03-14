package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;
import java.util.stream.Collectors;

@Service
public class CountryService {

    private final RestTemplate restTemplate = new RestTemplate();

    private static final String API_URL = "https://api.first.org/data/v1/countries";

    public Object getCountries(String name, String code, String continent, String capital) {
        Map response = restTemplate.getForObject(API_URL, Map.class);
        Map<String, Map<String, String>> data = (Map<String, Map<String, String>>) response.get("data");
        return data.entrySet().stream()
                .filter(entry -> filter(entry.getValue(), name, code, continent, capital))
                .collect(Collectors.toMap(
                        Map.Entry::getKey,
                        Map.Entry::getValue
                ));
    }

    private boolean filter(Map<String, String> country,
                           String name,
                           String code,
                           String continent,
                           String capital) {
        if (name != null && !country.get("country").toLowerCase().contains(name.toLowerCase()))
            return false;
        if (code != null && !country.get("country").toLowerCase().contains(code.toLowerCase()))
            return false;
        if (continent != null && !country.get("region").equalsIgnoreCase(continent))
            return false;
// FIRST.org does not provide capital → ignored safely
        return true;
    }
}





