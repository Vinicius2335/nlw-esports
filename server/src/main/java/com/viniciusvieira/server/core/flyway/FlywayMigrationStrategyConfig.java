package com.viniciusvieira.server.core.flyway;

import org.springframework.boot.autoconfigure.flyway.FlywayMigrationStrategy;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FlywayMigrationStrategyConfig {
    @Bean
    public FlywayMigrationStrategy cleanMigrationStrategy(){
        return flyway -> {
            flyway.repair();
            flyway.migrate();
        };
    }
}
