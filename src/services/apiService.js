const BASE_URL = 'https://brasilapi.com.br/api';

/*
  Fetch e requisições de API são assíncronas pois não temos controle do servidor que
  estamos solicitando informação, os atrasos podem ocorrer por várias questões como
  internet, distância geográfica do servidor.
  Por isso possuímos duas opções, sendo a utilização de async/await em funções ou
  Promises para realizar as devidas tratativas.
  Você pode saber mais lendo sobre aqui:
  https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/095ebb0d-1932-4d37-933b-9e1d721646fb/section/8ac6fde1-3393-44aa-908d-7cee814f89db/day/a6dcb682-7c48-4b1e-acd4-28d50b8a3101/lesson/08a39e0b-6a31-4b65-a689-7b95b4242d02
*/
const getStates = async () => {
  // O try catch neste caso serve para garantir que tenhamos tratamento dos erros
  try {
    const request = await fetch(`${BASE_URL}/ibge/uf/v1`);
    // Com o request.ok nós podemos conferir se a requisição foi concluída com sucesso.
    if (!request.ok) {
      throw new Error(`[${request.statusText}] Ocorreu um erro durante a requisição`);
    }
    const response = await request.json();
    return response;
  } catch (e) {
    console.warn(e.message);
  }
};

const getCities = async (uf) => {
  try {
    const request = await fetch(`${BASE_URL}/ibge/municipios/v1/${uf}`);
    if (!request.ok) {
      throw new Error(`[${request.statusText}] Ocorreu um erro durante a requisição`);
    }
    const response = await request.json();
    return response;
  } catch (e) {
    console.warn(e.message);
  }
};

const getAddress = async (cep) => {
  try {
    const request = await fetch(`${BASE_URL}/cep/v2/${cep}`);
    if (!request.ok) {
      throw new Error(`[${request.statusText}] Ocorreu um erro durante a requisição`);
    }
    const response = await request.json();
    return response;
  } catch (e) {
    console.warn(e.message);
  }
};

export { getStates, getCities, getAddress };
