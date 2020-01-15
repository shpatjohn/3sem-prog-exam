/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dto;

import entities.Director;

/**
 *
 * @author Obaydah Mohamad
 */
class DirectorDTO {
    private String name, about;

    public DirectorDTO(Director d) {
        this.name = d.getName();
        this.about = d.getAbout();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }
    
    
}