import { PERSONAL_FORM_SUBMIT, PROFESSIONAL_FORM_SUBMIT } from '../actions/actionTypes';

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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
  case PERSONAL_FORM_SUBMIT:
    return { ...state, personal: { ...action.payload } };

  case PROFESSIONAL_FORM_SUBMIT:
    return { ...state, professional: { ...action.payload } };

  default:
    return state;
  }
};

export default profileReducer;
