package com.viniciusvieira.server.api.controller;

import com.viniciusvieira.server.api.representation.model.request.AdRequest;
import com.viniciusvieira.server.api.representation.model.response.AdResponse;
import com.viniciusvieira.server.api.representation.model.response.DiscordInfoResponse;
import com.viniciusvieira.server.api.representation.model.response.GameInfoResponse;
import com.viniciusvieira.server.domain.service.BuscarAnuncioService;
import com.viniciusvieira.server.domain.service.BuscarDiscordService;
import com.viniciusvieira.server.domain.service.BuscarGamesService;
import com.viniciusvieira.server.domain.service.CriarNovoAnuncioService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RequiredArgsConstructor
@RestController
@Log4j2
public class NlwEsportsController {
    private final BuscarGamesService buscarGamesService;
    private final BuscarAnuncioService buscarAnuncioService;
    private final BuscarDiscordService buscarDiscordService;
    private final CriarNovoAnuncioService criarNovoAnuncioService;

    @GetMapping("/games")
    public ResponseEntity<List<GameInfoResponse>> getGames(){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(buscarGamesService.findAll());
    }

    @PostMapping("/games/{idGame}/ads")
    public ResponseEntity<AdResponse> createAd(@PathVariable UUID idGame, @RequestBody @Valid AdRequest adRequest){
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(criarNovoAnuncioService.criarNovoAnuncio(idGame, adRequest));
    }

    @GetMapping("/games/{idGame}/ads")
    public ResponseEntity<List<AdResponse>> getAdsByGame(@PathVariable UUID idGame){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(buscarAnuncioService.getAdByIdGame(idGame));
    }

    @GetMapping("/ads/{idAd}/discord")
    public ResponseEntity<DiscordInfoResponse> getDiscordById(@PathVariable UUID idAd){
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(buscarDiscordService.findDiscordByIdAd(idAd));
    }
}
