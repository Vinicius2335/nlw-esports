package com.viniciusvieira.server.api.mapper;

import com.viniciusvieira.server.api.representation.model.projections.IGameInfoProjection;
import com.viniciusvieira.server.api.representation.model.response.GameInfoResponse;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;

@RequiredArgsConstructor
@Component
public class GameMapper {
    private final ModelMapper modelMapper;
    public GameInfoResponse toGameInfoResponse(IGameInfoProjection iGameInfoProjection){
        return modelMapper.map(iGameInfoProjection, GameInfoResponse.class);
    }

    public List<GameInfoResponse> toGameInfoResponseList(List<IGameInfoProjection> iGameInfoProjections){
        return iGameInfoProjections.stream()
                .map(this::toGameInfoResponse)
                .toList();
    }
}
