import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage()

describe('Tentar fazer login com credenciais válidas', () => {
    it('Deve fazer login com credenciais válidas', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userData.userSuccess.email, userData.userSuccess.password)
    });
  });


describe('Tentar fazer login com email inválido', () => {
    it('Deve aparecer alerta que o email é inválido', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userData.userFail.email, userData.userFail.password)
      loginPage.checkInvalidEmail()
    });
  });


describe('Tentar fazer login com credenciais inválidas', () => {
    it.only('Deve aparecer alerta que as credenciais são inválidas', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userData.userSuccess.email, userData.userFail.password)
      loginPage.checkInvalidCredentials()
    });
  });