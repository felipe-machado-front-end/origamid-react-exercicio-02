import React from "react";

function ProdutoItem({ data }) {
  return (
    <div>
      {data.fotos && (
        <div>
          <h3 className="text-6xl m-3">{data.nome}</h3>
          <p className="text-3xl m-6">{data.preco} R$</p>
          <div className="grid grid-cols-2">
            {data.fotos.map((foto, index) => (
              <div key={index} className="m-4">
                <img src={foto.src} alt={foto.titulo} />
              </div>
            ))}
          </div>
        </div>
      )}

      {!data.fotos && ""}
    </div>
  );
}

export default ProdutoItem;
