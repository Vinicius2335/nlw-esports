package com.viniciusvieira.server.domain.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
public class Ad {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @JdbcTypeCode(SqlTypes.VARCHAR)
    @Column(name = "id", columnDefinition = "VARCHAR(36)")
    @EqualsAndHashCode.Include
    private UUID id;

    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private int yearsPlaying;
    @Column(nullable = false)
    private String discord;
    @Column(nullable = false)
    private int hourStart;
    @Column(nullable = false)
    private int hourEnd;
    @Column(nullable = false, columnDefinition = "boolean")
    private boolean voiceChannel;
    @CreationTimestamp
    @Column(nullable = false, columnDefinition = "datetime")
    private OffsetDateTime createdAt;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "ad")
    @ToString.Exclude
    private List<WeekDays> weekDays = new ArrayList<>();

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "game_id")
    private Game game;

    public void adicionarWeekDay(List<Integer> weekDays){
        for (Integer weekDay : weekDays){
            WeekDays weekDayToSave = WeekDays.builder()
                    .weekDay(weekDay)
                    .ad(this)
                    .build();

            this.getWeekDays().add(weekDayToSave);
        }
    }
}
