package com.viniciusvieira.server.util;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import java.util.UUID;

class UuidCreatorTest {
    @Test
    void createUuid(){
        for(int i = 0; i <=6; i++){
            System.out.println(UUID.randomUUID());
        }
        Assertions.assertTrue(true);
    }
}
