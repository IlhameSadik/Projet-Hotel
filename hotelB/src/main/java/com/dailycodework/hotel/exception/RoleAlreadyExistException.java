package com.dailycodework.hotel.exception;

/**
 * @author Simpson Alfred
 */

public class RoleAlreadyExistException extends RuntimeException {
    public RoleAlreadyExistException(String message) {
        super(message);
    }
}
