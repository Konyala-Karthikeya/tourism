package com.ts;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.dao.TourDao;
import com.model.Tour;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TourController {

	@Autowired
    private TourDao tourDao;

    @PostMapping("/add")
    public ResponseEntity<Tour> addTour(@RequestParam("file") MultipartFile file,
                                              @RequestParam("name") String name,
                                              @RequestParam("price") double price,
                                              @RequestParam("duration") String duration,
                                              @RequestParam("includes") String includes) {
        try {
        	Tour tour = new Tour();
        	tour.setName(name);
        	tour.setPrice(price);
        	tour.setDuration(duration);
        	tour.setIncludes(includes);
        	tour.setImage(file.getBytes());

            Tour savedTour = tourDao.saveTour(tour);
            return new ResponseEntity<>(savedTour, HttpStatus.CREATED);
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    
    @GetMapping("/getAllTours")
    public ResponseEntity<List<Tour>> getAllTours() {
        List<Tour> tours = tourDao.getAllTours();
        
        // Convert byte array to base64 string
        for (Tour tour : tours) {
            if (tour.getImage() != null) {
                String base64Image = Base64.getEncoder().encodeToString(tour.getImage());
                tour.setBase64Image(base64Image);
            }
        }

        return new ResponseEntity<>(tours, HttpStatus.OK);
    }
}