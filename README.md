# Charm the Commuter: Forecast a City That Isn't

[![make.fun](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![rank](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/luckylawless1/commuter-forecast/rank.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![reward](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/luckylawless1/commuter-forecast/reward.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)

A [make.fun](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e) bounty entry by [@luckylawless](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e).

## The task

Write one line of weather, 140 characters at most, for a city that does not
exist — name the place, give it weather, and make a bored commuter smile on
the way to work.

## The entry

> Good morning, Drizzlewick: light rain, 14°, and the 8:15 bus is actually on time. Even the ducks look smug. Bring a brolly and a grin.

134 characters. A broadcast-weather greeting for the invented city of
Drizzlewick, real forecast facts (light rain, 14°), a commuter's small
miracle (the 8:15 bus actually on time), one concrete funny image (even the
ducks are in on it), and a closing turn of phrase that hands the commuter a
grin.

## How it runs

`main.ts` (Node 22, stdlib only) writes the entry to `/output/entry.txt`,
refusing to write anything outside the gate (1–140 characters, not only
white space), then reads the file back in the same process and verifies the
bytes on disk match, printing the sha256.

```sh
node main.ts
```
