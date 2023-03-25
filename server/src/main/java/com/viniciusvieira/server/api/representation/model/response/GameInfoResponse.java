package com.viniciusvieira.server.api.representation.model.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class GameInfoResponse {
    private UUID id;
    private String title;
    private String bannerUrl;
    private int ads;
}
