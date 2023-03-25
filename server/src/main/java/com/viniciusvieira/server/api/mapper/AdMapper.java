package com.viniciusvieira.server.api.mapper;

import com.viniciusvieira.server.api.representation.model.request.AdRequest;
import com.viniciusvieira.server.api.representation.model.response.AdResponse;
import com.viniciusvieira.server.core.utils.ConverterHourStringToMinutes;
import com.viniciusvieira.server.domain.model.Ad;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

import static com.viniciusvieira.server.core.utils.ConverterHourStringToMinutes.*;

@RequiredArgsConstructor
@Component
public class AdMapper {
    private final ModelMapper modelMapper;

    public AdResponse toAdResponse(Ad ad){
        return modelMapper.map(ad, AdResponse.class);
    }

    public Ad toAdDomain(AdRequest adRequest){
        return Ad.builder()
                .name(adRequest.getName())
                .yearsPlaying(adRequest.getYearsPlaying())
                .hourStart(converterHourStringToMinutes(adRequest.getHourStart()))
                .hourEnd(converterHourStringToMinutes(adRequest.getHourEnd()))
                .voiceChannel(adRequest.isVoiceChannel())
                .discord(adRequest.getDiscord())
                .weekDays(new ArrayList<>())
                .build();
    }

    public List<AdResponse> toAdResponseList(List<Ad> ads){
        return ads.stream()
                .map(this::toAdResponse)
                .toList();
    }

}
