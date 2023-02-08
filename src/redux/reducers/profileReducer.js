import { PERSONAL_FORM_SUBMIT, PROFESSIONAL_FORM_SUBMIT,
  INSERT_DOG } from '../actions/actionTypes';

const initialState = {
  personal: {
    name: '',
    email: '',
    cpf: '',
    cep: '',
    address: '',
    city: '',
    uf: '',
  },
  professional: {
    resume: '',
    role: '',
    description: '',
  },
  dog: {
    url: '',
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
  case PERSONAL_FORM_SUBMIT:
    return { ...state, personal: { ...action.payload } };

  case PROFESSIONAL_FORM_SUBMIT:
    return { ...state, professional: { ...action.payload } };

  case INSERT_DOG:
    console.log(action);
    return { ...state, dog: { url: action.payload } };

  default:
    return state;
  }
};

export default profileReducer;
