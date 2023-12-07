export function devisTotal(devisList, Remise) {
  let totalHT = 0;
  let totalTVA = 0;
  let totalTTC = 0;
  (devisList || []).forEach(element => {
    totalHT = (Number(totalHT) + Number(element.PT)).toFixed(3)
  });
  let totalHTRemise = (totalHT - (totalHT * (Remise / 100))).toFixed(3);// 3%, 5%, 7%
  totalTVA = (Number(totalHTRemise) * 0.2).toFixed(3)
  totalTTC = (Number(totalHTRemise) + Number(totalTVA)).toFixed(3)
  return { totalHT, totalTVA, totalTTC, totalHTRemise, remise: Remise }
}
