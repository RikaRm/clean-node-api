class LoginRouter {
  route (httpRequest) {
    if (!httpRequest.body.email) {
      return {
        statusCode: 400
      }
    }
  }
}
describe('Login Router', () => {
  test('Should return 400 if no emails is provider', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        password: 'my_password'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
