import { Page } from '@playwtight/test'
import { LoginPage} from '../SauceLab/loginPage.ts'
 
class PageManager{
    loginPage : LoginPage
page: Page
constructor(page:Page) {
    this.page=page
    this.loginPage = new LoginPage(this.page)
}
}