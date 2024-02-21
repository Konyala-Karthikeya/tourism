package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Tour;

@Service
public class TourDao {
	 @Autowired
	    private TourRepository tourRepository;

	    public List<Tour> getAllTours() {
	        return tourRepository.findAll();
	    }
	    
	    public Tour getTourById(Long id) {
	        return tourRepository.findById(id).orElse(null);
	    }

	    public Tour saveTour(Tour tour) {
	        return tourRepository.save(tour);
	    }

	    public Tour updateTour(Long id, Tour updatedTour) {
	        Tour existingTour = tourRepository.findById(id).orElse(null);
	        if (existingTour != null) {
	            existingTour.setName(updatedTour.getName());
	            existingTour.setPrice(updatedTour.getPrice());
	            existingTour.setDuration(updatedTour.getDuration());
	            existingTour.setIncludes(updatedTour.getIncludes());
	            return tourRepository.save(existingTour);
	        }
	        return null;
	    }

	    
	    public void deleteTour(Long id) {
	        tourRepository.deleteById(id);
	    }
	
	

}
