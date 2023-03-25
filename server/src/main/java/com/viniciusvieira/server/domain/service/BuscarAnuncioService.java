package com.viniciusvieira.server.domain.service;

import com.viniciusvieira.server.api.mapper.AdMapper;
import com.viniciusvieira.server.api.representation.model.response.AdResponse;
import com.viniciusvieira.server.domain.exception.GameNotFoundException;
import com.viniciusvieira.server.domain.model.Ad;
import com.viniciusvieira.server.domain.model.Game;
import com.viniciusvieira.server.domain.repository.AdRepository;
import com.viniciusvieira.server.domain.repository.GameRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class BuscarAnuncioService {
    private final AdRepository adRepository;
    private final GameRepository gameRepository;
    private final AdMapper adMapper;

    public List<AdResponse> getAdByIdGame(UUID idGame){
        Game gameEncontrado = gameRepository.findById(idGame)
                .orElseThrow(() -> new GameNotFoundException("Game não foi encontrado"));
        List<Ad> ads = adRepository.findAdsByIdGame(gameEncontrado.getId());
        return adMapper.toAdResponseList(ads);
    }
}
