package com.viniciusvieira.server.domain.service;

import com.viniciusvieira.server.api.mapper.DiscordMapper;
import com.viniciusvieira.server.api.representation.model.projections.DiscordInfoProjection;
import com.viniciusvieira.server.api.representation.model.response.DiscordInfoResponse;
import com.viniciusvieira.server.domain.exception.AdNotFoundException;
import com.viniciusvieira.server.domain.model.Ad;
import com.viniciusvieira.server.domain.repository.AdRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class BuscarDiscordService {
    private final AdRepository adRepository;
    private final DiscordMapper discordMapper;

    public DiscordInfoResponse findDiscordByIdAd(UUID idAd){
        Ad adEncontrado = adRepository.findById(idAd)
                .orElseThrow(() -> new AdNotFoundException("Ad não foi encontrado"));

        DiscordInfoProjection discord = adRepository.findDiscordByIdAd(adEncontrado.getId());
        return discordMapper.toDiscordInfoResponse(discord);
    }
}
