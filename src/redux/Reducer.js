let initialState = {
  is_loggedin: false,
};

export default function reducer(currentState = initialState, action) {
  console.log("Reducer", action.type, action.payload);
  switch (action.type) {
    case "ISLOGGED_IN":
      return Object.assign({}, currentState, {
        is_loggedin: action.payload,
      });
    default:
      return currentState;
  }
}
// return {
//   ...state,
//   data: {
//     ...state.data,
//     Endereco: action.payload.logradouro,
//     Bairro: action.payload.bairro,
//     UF: action.payload.uf,
//     Cidade: action.payload.cidade
//   }
// }
