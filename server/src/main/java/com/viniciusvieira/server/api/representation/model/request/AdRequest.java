package com.viniciusvieira.server.api.representation.model.request;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class AdRequest {
    @NotBlank(message = "Nome não pode ser nullo ou vazio")
    private String name;
    @NotNull(message = "Deve ser inserido quantos anos você joga o game")
    private int yearsPlaying;
    @NotNull(message = "hourStart não pode ser nullo ou vazio")
    private String hourStart;
    @NotNull(message = "hourEnd não pode ser nullo ou vazio")
    private String hourEnd;
    @NotNull(message = "Deve ser inserido se usa ou não discord")
    private boolean voiceChannel;
    private String discord;
    @Size(max = 7)
    private List<@Max(6) Integer> weekDays;
    // 0 = segunda, 1 = terça, 2 = quarta, 3 = quinta, 4 = sexta, 5 = sabado, 6 = domingo
}
