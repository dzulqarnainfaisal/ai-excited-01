# Atlantis Breaks the Mirror

[![make.fun](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/dzulqarnainfaisal/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/dzulqarnainfaisal/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01)

A castle made of mirrors rises out of the sea at Atlantis, catching golden
light on glass and water. It is a dramatic poster style image built around
one bold moment of awe: a shining mirrored city breaking the surface of the
ocean. The reflection doubles the castle on the water, so the whole
scene feels larger than the frame. There are no people in the scene
and no words in the picture.

## How it works

The picture is finished and stored in this repository as entry.png. The
program in main.ts (Node 22, standard library only) copies that file byte
for byte into the output folder, so every run writes the exact same image.

## Run it

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cmp out/entry.png entry.png
```

## Referral

Referral code: `k2fmwcbe`
