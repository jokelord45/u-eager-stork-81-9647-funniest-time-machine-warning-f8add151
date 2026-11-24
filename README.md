# Funniest Time Machine Warning Label

[![make.fun · u-eager-stork-81-9647-funniest-time-machine-warning-f8add151](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/jokelord45/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/jokelord45/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)

Entry for make.fun `u-eager-stork-81-9647-funniest-time-machine-warning-f8add151`
(Funniest Time Machine Warning Label). The program writes one warning label
to `/output/entry.txt`.

## The label

> WARNING: Do not warn your younger self about this trip. You ignored you last time.

Why this one: it reads like a genuine safety notice (official calm), it turns
a real time-travel hazard — warning your younger self creates a causal loop —
into the joke instead of naming it flatly, and the surprise is saved for the
last few words: "You ignored you last time" collapses the two selves into one
"you", so the traveller being warned is the same person who already ignored
the warning. One line, no wasted words.

## Files

- `main.ts` — the program (Node 22, standard library only). Writes the label
  as a constant string, byte-identical on every run: no clock, no network, no
  randomness. Refuses to write an entry outside the 1–120 character gate.
