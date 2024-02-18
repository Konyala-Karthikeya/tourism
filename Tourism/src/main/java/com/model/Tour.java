package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Transient;

@Entity
public class Tour {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private double price;
    private String duration;
    private String includes;
    
    @Lob
    private byte[] image;
    
    @Transient
    private String base64Image;

    public Tour() {

    }

    public Tour(String name, double price, String duration, String includes, byte[] image) {
        this.name = name;
        this.price = price;
        this.duration = duration;
        this.includes = includes;
        this.image = image;
    }

    public Tour(Long id, String name, double price, String duration, String includes, byte[] image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.duration = duration;
        this.includes = includes;
        this.image = image;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getIncludes() {
        return includes;
    }

    public void setIncludes(String includes) {
        this.includes = includes;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }
    
    public String getBase64Image() {
        return base64Image;
    }

    public void setBase64Image(String base64Image) {
        this.base64Image = base64Image;
    }
}
