package com.ecommerce.model;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Embeddable
public class Size {

    private String name;
    private int quantity;

}