package com.ecommerce.controller;

import com.ecommerce.exception.ProductException;
import com.ecommerce.exception.UserException;
import com.ecommerce.model.Rating;
import com.ecommerce.model.User;
import com.ecommerce.request.RatingRequest;
import com.ecommerce.service.RatingService;
import com.ecommerce.service.UserService;
import jdk.jshell.spi.ExecutionControl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ratings")
public class RatingController {

    @Autowired
    private UserService userService;

    @Autowired
    private RatingService ratingService;

    @PostMapping("/create")
    public ResponseEntity<Rating> createRating(@RequestBody RatingRequest req,
                                               @RequestHeader("Authorization") String jwt) throws UserException, ProductException{

        User user = null;
        try {
            user = userService.findUserProfileByJwt(jwt);
        } catch (ExecutionControl.UserException e) {
            throw new RuntimeException(e);
        }

        Rating rating = ratingService.createRating(req,user);

        return new ResponseEntity<Rating>(rating, HttpStatus.CREATED);

    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<Rating>> getProductsRating(@PathVariable Long productId,
                                                          @RequestHeader("Authorization") String jwt) throws UserException,ProductException{
        try {
            User user = userService.findUserProfileByJwt(jwt);
        } catch (ExecutionControl.UserException e) {
            throw new RuntimeException(e);
        }

        List<Rating> ratings = ratingService.getProductsRating(productId);

        return new ResponseEntity<>(ratings,HttpStatus.CREATED);
    }

//    @GetMapping("/product/{productId}")
//    public ResponseEntity<List<Rating>> getProductRating(@PathVariable Long productId,
//                                                         @RequestHeader("Authorization") String jwt)throws UserException,ProductException{
//
//        User user = userService.findUserProfileByJwt(jwt);
//
//        List<Rating> ratings = ratingService.getProductsRating(productId);
//
//        return new ResponseEntity<>(ratings,HttpStatus.CREATED);
//    }
}