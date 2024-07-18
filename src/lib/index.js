const base_standard_combats = [
  "Twos",
  "Threes",
  "First triangle",
  "Fours",
  "Fives",
]

const level2_standard_combats = [
  ...base_standard_combats,
  "Second triangle",
]

const level3_standard_combats = [
  ...level2_standard_combats,
]

const level4_standard_combats = [
  ...level3_standard_combats,
]

export const all_standard_combats = [
  base_standard_combats,
  level2_standard_combats,
  level3_standard_combats,
  level4_standard_combats,
]

export const transitions = [
  "Beat",
  "Guard beat",
  "Bind",
  "Evasion",
  "Unarmed"
]

export const unarmed_standards = [
  "Cross punch",
  "Straight punch",
  "Stomach punch",
  "Blocked punch",
  "Backfist",
  "Push kick",
  "Avoidance",
  "Push"
]