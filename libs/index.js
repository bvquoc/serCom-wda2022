
export const onInputChange = (e, formData, setFormData) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

export const toDot = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}