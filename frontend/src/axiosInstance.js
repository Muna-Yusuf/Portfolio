const sendEmail = async (formData) => {
  try {
    const response = await axios.post(
      'http://127.0.0.1:8000/contact/send_contact_email/',
      formData,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
