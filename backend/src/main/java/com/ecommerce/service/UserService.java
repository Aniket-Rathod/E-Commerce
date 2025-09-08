package com.ecommerce.service;

import com.ecommerce.model.User;
import jdk.jshell.spi.ExecutionControl;

public interface UserService {

    public User findUserById(Long userId) throws ExecutionControl.UserException;

    public User findUserProfileByJwt(String jwt) throws ExecutionControl.UserException;
}
