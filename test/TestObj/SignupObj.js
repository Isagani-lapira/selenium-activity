
class SignUpObj{


    get signupBtn(){return $('//button[@id="signup"]')}
    get signupAccBtn(){return $('//button[@type="submit"]')}
    get signupFirstNameEdit(){return $('//input[@id="firstName"]')}
    get signupLastNameEdit(){return $('//input[@id="lastName"]')}
    get signupEmailEdit(){return $('//input[@id="email"]')}
    get signupPasswordEdit(){return $('//input[@id="password"]')}
    async navigate(){
        await browser.url('https://thinking-tester-contact-list.herokuapp.com/')
    }

}

export default new SignUpObj()