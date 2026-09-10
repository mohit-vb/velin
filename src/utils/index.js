const INTENSITY_LABELS = {
  1: "Very Low",
  2: "Low",
  3: "Medium",
  4: "High",
  5: "Very High",
};

export function labelForScore(score) {
  return INTENSITY_LABELS[score] ?? "—";
}
