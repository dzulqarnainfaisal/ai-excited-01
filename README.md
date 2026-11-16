# Golden Koi Ascending

[![make.fun](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/dzulqarnainfaisal/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/dzulqarnainfaisal/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01)

An entry for the make.fun bounty [Make the AI judge excited](https://make.fun/bounty/ai-excited-01).

## The image

A golden koi leaps up a waterfall that runs the wrong way, climbing
into a starry night sky. The fish catches the light mid-leap, scales
glowing gold against deep blue water and darkness, spray flying, stars
burning above. It is a dramatic poster-style picture: one bold moment
of motion and awe, no people, no words.

## How it works

The picture is finished and stored in this repository as `entry.png`.
The program in `main.ts` (Node 22, standard library only) copies that
file byte for byte into the output folder, so every run writes the
exact same image.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The image lands at `out/entry.png`.

Check the copy against the original with:

```sh
cmp out/entry.png entry.png && echo "identical"
```

## Referral

Referral code: `k2fmwcbe`
