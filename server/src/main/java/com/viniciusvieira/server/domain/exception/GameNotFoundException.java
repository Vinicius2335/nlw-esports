package com.viniciusvieira.server.domain.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.io.Serial;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class GameNotFoundException extends RuntimeException {
    @Serial
    private static final long serialVersionUID = 3140109290457276106L;

    public GameNotFoundException(String message) {
        super(message);
    }
}
