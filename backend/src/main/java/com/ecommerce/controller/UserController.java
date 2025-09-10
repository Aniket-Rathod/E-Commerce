package com.ecommerce.controller;

import com.ecommerce.exception.UserException;
import com.ecommerce.model.User;
import com.ecommerce.service.UserService;
import jdk.jshell.spi.ExecutionControl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/profile")
    public ResponseEntity<User> getUserProfileHandler(@RequestHeader("Authorization") String jwt)throws UserException{
        User user = null;
        try {
            user = userService.findUserProfileByJwt(jwt);
        } catch (ExecutionControl.UserException e) {
            throw new RuntimeException(e);
        }

        return new ResponseEntity<User>(user, HttpStatus.ACCEPTED);
    }
}