
export const onInputChange = (e, formData, setFormData) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
