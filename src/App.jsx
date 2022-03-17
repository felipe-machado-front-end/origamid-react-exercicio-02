import { Produto } from "./data/Produto";
import { useState } from "react";
import ProdutoItem from "./components/ProdutoItem";

function App() {
  const [produto, setProduto] = useState([]);
  const [carregando, setCarregando] = useState(false);

  const handleProduto = async (e) => {
    setCarregando(true);
    const produtos = await Produto.getProduto(e.target.innerText);
    setProduto(produtos);
    setCarregando(false);
  };
  return (
    <div>
      <div className="border-8 flex justify-center p-12">
        <button
          className="px-8 py-4 bg-blue-600 mt-6 ml-4 rounded"
          onClick={handleProduto}
        >
          notebook
        </button>
        <button
          className="px-8 py-4 bg-blue-600 mt-6 ml-4 rounded"
          onClick={handleProduto}
        >
          smartphone
        </button>
        <button
          className="px-8 py-4 bg-blue-600 mt-6 ml-4 rounded"
          onClick={handleProduto}
        >
          tablet
        </button>
      </div>
      {carregando && <p>CARREGANDO...</p>}
      {!carregando && produto && <ProdutoItem data={produto} />}
    </div>
  );
}

export default App;
