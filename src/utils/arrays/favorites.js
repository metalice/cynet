export const addFavorites = (favoriteCities, result) => {
  const afterDrag = [...favoriteCities];
  const [removed] = afterDrag.splice(result.source.index, 1);
  afterDrag.splice(result.destination.index, 0, removed);
  return afterDrag;
};
