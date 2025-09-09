package com.ecommerce.service;

import com.ecommerce.exception.ProductException;
import com.ecommerce.model.Cart;
import com.ecommerce.model.CartItem;
import com.ecommerce.model.Product;
import com.ecommerce.model.User;
import com.ecommerce.repository.CartRepository;
import com.ecommerce.request.AddItemRequest;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImplementation implements CartService {
    private final CartRepository cartRepository;
    private final CartItemService cartItemService;
    private final ProductService productService;

    public CartServiceImplementation(CartRepository cartRepository,
                                     CartItemService cartItemService,
                                     ProductService productService) {
        this.cartRepository = cartRepository;
        this.cartItemService = cartItemService;
        this.productService = productService;
    }

    @Override
    public Cart createCart(User user) {
        Cart cart = new Cart();
        cart.setUser(user);
        return cartRepository.save(cart);
    }

    @Override
    public String addCartItem(Long userId, AddItemRequest req) throws ProductException {
        Cart cart = cartRepository.findByUserId(userId);
        Product product = productService.findByProductId(req.getProductId());

        // Check if item already exists in cart
        CartItem isPresent = cartItemService.isCartItemExist(cart, product, req.getSize(), userId);

        if (isPresent == null) {
            CartItem cartItem = new CartItem();
            cartItem.setProduct(product);
            cartItem.setQuantity(req.getQuantity());
            cartItem.setUserId(userId);

            int price = (int) (req.getQuantity() * product.getDiscountedPrice());
            cartItem.setPrice(price);
            cartItem.setSize(req.getSize());

            //CartItem createdCartItem=cartItemService.createCartItem(cartItem);
            //cart.getCartItems().add(createdCartItem);

            //Not aware of this - start

            // ✅ Use helper method to maintain both sides of the relation
            cart.addItem(cartItem);

            // Persist cartItem
            cartItemService.createCartItem(cartItem);
        } else {
            // ✅ If already present, update quantity instead of duplicating
            isPresent.setQuantity(isPresent.getQuantity() + req.getQuantity());
            int price = (int) (isPresent.getQuantity() * product.getDiscountedPrice());
            isPresent.setPrice(price);
            cartItemService.createCartItem(isPresent); // update existing item
        }

        //Not aware of this - End

        return "Item added to cart";
    }

    @Transactional
    @Override
    public Cart findUserCart(Long userId) {
        Cart cart = cartRepository.findByUserIdWithItems(userId);

        int totalPrice = 0;
        int totalDiscountedPrice = 0;
        int totalItem = 0;

        // At this point, cart.getCartitems() should be initialized
        for (CartItem cartItem : cart.getCartitems()) {
            totalPrice += cartItem.getPrice();
            totalDiscountedPrice += cartItem.getDiscountedPrice();
            totalItem += cartItem.getQuantity();
        }

        cart.setTotalDiscountedPrice(totalDiscountedPrice);
        cart.setTotalItem(totalItem);
        cart.setTotalPrice(totalPrice);
        cart.setDiscount(totalPrice - totalDiscountedPrice);

        return cart;
        // return cartRepository.save(cart);
    }


}