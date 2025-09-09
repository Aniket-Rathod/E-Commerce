package com.ecommerce.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
@Entity
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.EAGER)
    //@Column(name = "cart_items")
    private Set<CartItem> cartitems = new HashSet<>();

    @Column(name = "total_price")
    private double totalPrice;

    @Column(name = "total_item")
    private int totalItem;

    private int totalDiscountedPrice;

    private int discount;


    public void addItem(CartItem item) {
        cartitems.add(item);
        item.setCart(this);
    }

    // 🔹 Helper method to remove an item safely
    public void removeItem(CartItem item) {
        cartitems.remove(item);
        item.setCart(null);
    }

}