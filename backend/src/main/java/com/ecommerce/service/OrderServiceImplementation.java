package com.ecommerce.service;


import com.ecommerce.repository.*;
import org.springframework.stereotype.Service;


@Service
public abstract class OrderServiceImplementation implements OrderService{

    private CartRepository cartRepository;
    private CartService cartService;
    private UserRepository userRepository;

    public OrderServiceImplementation(CartRepository cartRepository, CartService cartService, UserRepository userRepository)
    {
        this.cartRepository = cartRepository;
        this.cartService = cartService;
        this.userRepository = userRepository;

    }

}