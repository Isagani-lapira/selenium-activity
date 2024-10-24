class SignInObj{
    get signupEmailEdit(){return $('//input[@id="email"]')}
    get signupPasswordEdit(){return $('//input[@id="password"]')}
    get signinBtn(){return $('//button[@id="submit"]')}

    async navigate(){
        await browser.url('https://thinking-tester-contact-list.herokuapp.com/')
    }
}

export default new SignInObj()