function findGrade(score: number) {
  score = score > 80 ? 80 : score;
  score = score > 49 ? score - 42 : 0;

  if (score < 1) return 0;
  let grade: number = (4 * score) / 40;
  return 0.5 * Math.round(grade / 0.5);
}

export default findGrade;
