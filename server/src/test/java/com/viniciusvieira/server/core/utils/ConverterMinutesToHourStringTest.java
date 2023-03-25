package com.viniciusvieira.server.core.utils;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ConverterMinutesToHourStringTest {

    @Test
    void converterMinutesToHourString() {
        // 1100 -> 18:20
        // 720 -> 12:00
        String hourString = ConverterMinutesToHourString.converterMinutesToHourString(720);
        assertEquals("12:00", hourString);
    }
}