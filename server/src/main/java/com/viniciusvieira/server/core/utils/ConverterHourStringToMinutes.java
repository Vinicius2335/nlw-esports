package com.viniciusvieira.server.core.utils;

import java.util.Arrays;
import java.util.List;

public abstract class ConverterHourStringToMinutes {
    public static int converterHourStringToMinutes(String hour){
        List<Integer> integers = Arrays.stream(hour.split(":"))
                .map(Integer::parseInt)
                .toList();

        // posiçao 0 = Horas, posição 1 = Minutos
        return (integers.get(0)) * 60 + integers.get(1);
    }
}
