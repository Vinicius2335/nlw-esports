package com.viniciusvieira.server.api.representation.model.projections;

import java.util.UUID;

public interface IGameInfoProjection {
    UUID getId();
    String getTitle();
    String getBannerUrl();
    int getAds();

}
