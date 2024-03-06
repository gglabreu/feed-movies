export const mapCategoryToValue = (category: string) => {
  switch (category) {
    case "Populares":
      return "popular";
    case "Bem Avaliados":
      return "top_rated";
    case "Novidades":
      return "upcoming";
    default:
      return "";
  }
};
