package com.viniciusvieira.server.domain.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.io.Serial;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class AdNotFoundException extends RuntimeException{
    @Serial
    private static final long serialVersionUID = -8654720111100935810L;

    public AdNotFoundException(String message) {
        super(message);
    }

    public AdNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
