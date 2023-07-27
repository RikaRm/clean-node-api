const LoginRouter = require('./login-router')
const MissingParamError = require('../helpers/missing-param-error')

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
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })
})

describe('Login Router', () => {
  test('Should return 400 if no password is provider', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        email: 'my_user@email.com.br'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })
})

describe('Login Router', () => {
  test('Should return 500 if no httpRequest is provider', () => {
    const sut = new LoginRouter()
    const httpResponse = sut.route()
    expect(httpResponse.statusCode).toBe(500)
  })
})

describe('Login Router', () => {
  test('Should return 500 if no body is provider', () => {
    const sut = new LoginRouter()
    const httpRequest = {}
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
  })
})
