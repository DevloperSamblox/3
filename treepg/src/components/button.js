import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const MyApp = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const contadorCookie = Cookies.get('contador');
    if (contadorCookie) {
      setContador(parseInt(contadorCookie));
    }
  }, []);

  const handleIncremento = () => {
    const novoContador = contador + 1;
    setContador(novoContador);
    Cookies.set('contador', novoContador, { expires: 7 }); // O cookie expira em 7 dias
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={handleIncremento}>Incrementar</button>
    </div>
  );
};

export default MyApp;
