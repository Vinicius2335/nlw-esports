package com.viniciusvieira.server.domain.repository;

import com.viniciusvieira.server.api.representation.model.projections.DiscordInfoProjection;
import com.viniciusvieira.server.domain.model.Ad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface AdRepository extends JpaRepository<Ad, UUID> {
    @Query("""
            select A from Ad A
            inner join A.game game
            where game.id = ?1
            order by A.createdAt
            """)
    List<Ad> findAdsByIdGame(UUID idGame);

    @Query("select a from Ad a where a.id = ?1")
    DiscordInfoProjection findDiscordByIdAd(UUID id);
}