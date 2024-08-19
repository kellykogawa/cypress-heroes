import userData from "../fixtures/userData.json";
import LoginPage from "../pages/loginPage";
import CreatePage from "../pages/createPage";

const loginPage = new LoginPage()
const createPage = new CreatePage()

describe('Tentar criar novo herói', () => {
  it('Deve ser possível criar um novo herói', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.email, userData.userSuccess.password)
    createPage.accessCreatePage()
    createPage.createAnyHero()
  });
});