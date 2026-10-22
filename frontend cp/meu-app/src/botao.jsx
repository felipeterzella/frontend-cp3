import React from 'react';
import Botao from './Botao.jsx';

function Cartao({ imagem }) {
    return (
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 transition-transform duration-300 hover:scale-[1.02]">
            <img
                className="w-full h-48 object-cover"
                src={imagem}
                alt="Foto Torre Eiffel"
            />
            
            <div className="p-6">
                <h2 className="font-bold text-xl mb-2 text-gray-800">
                    {"Paris, o que fazer"}
                </h2>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {"Veja o que fazer em Paris durante sua estadia."}
                </p>

                <Botao />
            </div>
        </div>
    );
}

export default Cartao;
