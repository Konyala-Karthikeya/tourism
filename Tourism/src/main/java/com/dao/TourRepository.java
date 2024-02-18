package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.model.Tour;

@Repository
public interface TourRepository extends JpaRepository<Tour, Long>{

}
