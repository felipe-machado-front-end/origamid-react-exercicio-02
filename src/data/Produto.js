export const Produto = {
  getProduto: async (produto) => {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${produto}`
    );
    const json = await response.json();
    return json;
  },
};
