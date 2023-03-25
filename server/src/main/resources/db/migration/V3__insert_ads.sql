-- ad

INSERT
INTO
  ad
  (id, name, years_playing, discord, hour_start, hour_end, voice_channel, created_at, game_id)
VALUES
  ('6ebf1887-3e57-4e00-96a9-525f66200e79', 'ikki252', 2, 'ikki#252', 1080, 1320, 1, now(), 'f16e249e-cb25-40cf-b501-e2f595e061fd');

INSERT
INTO
  ad
  (id, name, years_playing, discord, hour_start, hour_end, voice_channel, created_at, game_id)
VALUES
  ('36aa04c8-1f0c-4171-a486-e720969c6533', 'seiya333', 5, 'seiya#333', 1080, 1320, 0, now(), 'f16e249e-cb25-40cf-b501-e2f595e061fd');

-- week day

INSERT
INTO
  week_days
  (id, week_day, ad_id)
VALUES
  ('80077a81-de16-4591-a114-60145f0f16ad', 1, '6ebf1887-3e57-4e00-96a9-525f66200e79');

INSERT
INTO
  week_days
  (id, week_day, ad_id)
VALUES
  ('bafcc5be-0d36-429c-b821-ae169703bef8', 0, '36aa04c8-1f0c-4171-a486-e720969c6533');

INSERT
INTO
  week_days
  (id, week_day, ad_id)
VALUES
  ('f21e90d3-fcbd-463e-afdd-b571e7742fb4', 2, '36aa04c8-1f0c-4171-a486-e720969c6533');

