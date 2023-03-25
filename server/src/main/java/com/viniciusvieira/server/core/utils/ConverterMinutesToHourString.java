package com.viniciusvieira.server.core.utils;

import org.apache.commons.lang3.StringUtils;

public abstract class ConverterMinutesToHourString {
    public static String converterMinutesToHourString(int minutesAmount){
        String hour = String.valueOf((int) Math.floor(minutesAmount / 60));
        String minutes = String.valueOf(minutesAmount % 60);
        return StringUtils.rightPad(hour, 2, "0") + ":" + StringUtils.rightPad(minutes, 2, "0");
    }
}
