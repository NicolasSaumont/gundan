export const useCard = () => {
  const formatLegionName = (legionName: string) => {
    return legionName.toLowerCase().replace(/\s+/g, '-') // Remplace les majuscules en minuscules et espaces en tirets
  }

  return { formatLegionName }
}
