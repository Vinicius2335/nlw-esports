package com.viniciusvieira.server.core.utils;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ConverterHourStringToMinutesTest {

    @Test
    void converterHourStringToMinutes() {
        // 12h = 720 minutos
        //12h 30 min = 750 minutos
        int horasEmMinutos = ConverterHourStringToMinutes.converterHourStringToMinutes("12:00");
        int horasEmMinutos2 = ConverterHourStringToMinutes.converterHourStringToMinutes("12:30");

        assertAll(
                () -> assertEquals(720, horasEmMinutos),
                () -> assertEquals(750, horasEmMinutos2)
        );
    }
}