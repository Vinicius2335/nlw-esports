package com.viniciusvieira.server.domain.service;

import com.viniciusvieira.server.api.mapper.AdMapper;
import com.viniciusvieira.server.api.representation.model.request.AdRequest;
import com.viniciusvieira.server.api.representation.model.response.AdResponse;
import com.viniciusvieira.server.domain.exception.GameNotFoundException;
import com.viniciusvieira.server.domain.model.Ad;
import com.viniciusvieira.server.domain.model.Game;
import com.viniciusvieira.server.domain.repository.AdRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@RequiredArgsConstructor
@Service
public class CriarNovoAnuncioService {
    private final AdRepository adRepository;
    private final AdMapper adMapper;

    private final BuscarGamesService buscarGamesService;

    public AdResponse criarNovoAnuncio(UUID idGame, AdRequest adRequest){
        Game gameFounded = buscarGamesService.findById(idGame)
                .orElseThrow(() -> new GameNotFoundException("Não foi possivel encontrar o game"));

        Ad adToSave = adMapper.toAdDomain(adRequest);
        adToSave.setGame(gameFounded);
        adToSave.adicionarWeekDay(adRequest.getWeekDays());

        Ad adSaved = adRepository.save(adToSave);
        return adMapper.toAdResponse(adSaved);
    }
}
