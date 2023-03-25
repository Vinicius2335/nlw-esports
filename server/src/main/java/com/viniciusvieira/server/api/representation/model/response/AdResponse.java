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
public class AdResponse {
    private UUID id;
    private String name;
    private int yearsPlaying;
    private int hourStart;
    private int hourEnd;
    private boolean voiceChannel;
}
