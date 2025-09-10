package com.ecommerce.controller;

import com.ecommerce.exception.ProductException;
import com.ecommerce.exception.UserException;
import com.ecommerce.model.Review;
import com.ecommerce.model.User;
import com.ecommerce.request.ReviewRequest;
import com.ecommerce.service.ReviewService;
import com.ecommerce.service.UserService;
import jdk.jshell.spi.ExecutionControl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<Review> createReviewReview(@RequestBody ReviewRequest req,
                                                     @RequestHeader("Authorization") String jwt) throws UserException, ProductException{
        User user = null;
        try {
            user = userService.findUserProfileByJwt(jwt);
        } catch (ExecutionControl.UserException e) {
            throw new RuntimeException(e);
        }

        Review review = reviewService.createReview(req,user);

        return new ResponseEntity<>(review, HttpStatus.CREATED);
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<Review>> getProductsReview(@PathVariable Long productId) throws UserException,ProductException{

        List<Review> reviews = reviewService.getAllReview(productId);
        return new ResponseEntity<>(reviews,HttpStatus.ACCEPTED);
    }
}