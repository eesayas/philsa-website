class SignUpService {
  constructor(axios) {
    this.axios = axios;
  }

  async createSignUp(signup) {
    await this.axios.post(`/api/signups`, {
      data: {
        Name: signup.name,
        Email: signup.email,
        Message: signup.message,
        Context: signup.context,
      },
    });
  }
}

export default SignUpService;
