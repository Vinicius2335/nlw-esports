package com.viniciusvieira.server.api.mapper;

import com.viniciusvieira.server.api.representation.model.projections.DiscordInfoProjection;
import com.viniciusvieira.server.api.representation.model.response.DiscordInfoResponse;
import org.springframework.stereotype.Component;

@Component
public class DiscordMapper {
    public DiscordInfoResponse toDiscordInfoResponse(DiscordInfoProjection discordInfoProjection){
        return DiscordInfoResponse.builder()
                .discord(discordInfoProjection.getDiscord())
                .build();
    }
}
