package com.viniciusvieira.server.domain.repository;

import com.viniciusvieira.server.api.representation.model.projections.IGameInfoProjection;
import com.viniciusvieira.server.domain.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface GameRepository extends JpaRepository<Game, UUID> {
    @Query(value = """
            SELECT G.id, G.title, G.banner_url as bannerUrl,
            (SELECT COUNT(*) FROM ad WHERE ad.game_id = G.id) as ads
            FROM game G;
            """, nativeQuery = true)
    List<IGameInfoProjection> customFindAll();

    @Override
    Optional<Game> findById(UUID uuid);
}