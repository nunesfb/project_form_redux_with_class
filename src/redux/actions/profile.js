import { PERSONAL_FORM_SUBMIT, PROFESSIONAL_FORM_SUBMIT,
  INSERT_DOG } from './actionTypes';

const submitPersonalForm = (personalProfile) => ({
  type: PERSONAL_FORM_SUBMIT,
  payload: personalProfile,
});

const submitProfessionalForm = (professionalProfile) => ({
  type: PROFESSIONAL_FORM_SUBMIT,
  payload: professionalProfile,
});

const insertDog = (dog) => ({
  type: INSERT_DOG,
  payload: dog,
});

export function fetchMovies(state) {
  return (dispatch) => {
    dispatch(submitProfessionalForm(state)); // dispatch da action 'REQUEST_MOVIES_STARTED'
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((dog) => dispatch(insertDog(dog.message))); // dispatch da action 'RECEIVE_MOVIES'
  };
}

export { submitPersonalForm, submitProfessionalForm, insertDog };
