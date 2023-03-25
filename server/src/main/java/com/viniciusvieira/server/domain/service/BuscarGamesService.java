package com.viniciusvieira.server.domain.service;

import com.viniciusvieira.server.api.mapper.GameMapper;
import com.viniciusvieira.server.api.representation.model.projections.IGameInfoProjection;
import com.viniciusvieira.server.api.representation.model.response.GameInfoResponse;
import com.viniciusvieira.server.domain.model.Game;
import com.viniciusvieira.server.domain.repository.GameRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class BuscarGamesService {
    private final GameRepository gameRepository;
    private final GameMapper gameMapper;

    public List<GameInfoResponse> findAll(){
        List<IGameInfoProjection> allGameInfos = gameRepository.customFindAll();
        return gameMapper.toGameInfoResponseList(allGameInfos);
    }

    public Optional<Game> findById(UUID idGame){
        return gameRepository.findById(idGame);
    }
}
