import ObjUtils from '../utils/ObjUtils.js'
import SignupObj from '../TestObj/SignupObj.js'
import moment from "moment"
import SigninObj from '../TestObj/SigninObj.js'
import ContactObj from '../TestObj/ContactObj.js'
import File from '../utils/file.js'

describe('Activity', ()=>{
    const strDateTime = moment(new Date()).format('YYYYMMDDHHmm')
    const emailAddress = `test_${strDateTime}_3@gmail.com`
    const accPassword = 'testing'
    //testcase 1
    it('Heroku App Export Contacts on File_TC006',async()=>{
        await browser.pause(5000)
        await SignupObj.navigate()
        await ObjUtils.ClickObject(SignupObj.signupBtn)
        await ObjUtils.setObjectValue(SignupObj.signupFirstNameEdit,'Isagani')
        await ObjUtils.setObjectValue(SignupObj.signupLastNameEdit,'Lapira Jr')
        await ObjUtils.setObjectValue(SignupObj.signupEmailEdit,emailAddress)
        await ObjUtils.setObjectValue(SignupObj.signupPasswordEdit,accPassword)
        await ObjUtils.ClickObject(SignupObj.signupAccBtn)
        
        ObjUtils.ExpectBasedOnUrl('https://thinking-tester-contact-list.herokuapp.com/contactList')
    })

    //test case 2
    it('Heroku App Login User_TC002', async()=>{
        await browser.pause(5000)
        await SigninObj.navigate()
        await ObjUtils.setObjectValue(SigninObj.signupEmailEdit,emailAddress) 
        await ObjUtils.setObjectValue(SigninObj.signupPasswordEdit,accPassword) 
        await ObjUtils.ClickObject(SigninObj.signinBtn)

        await ObjUtils.ExpectBasedOnUrl('https://thinking-tester-contact-list.herokuapp.com/contactList')
    })

    //test case 3
    it('Heroku App Add Contact TC003', async()=>{
        await browser.pause(5000)
        //navigate to user login
        await SigninObj.navigate()
        await ObjUtils.setObjectValue(SigninObj.signupEmailEdit,emailAddress) 
        await ObjUtils.setObjectValue(SigninObj.signupPasswordEdit,accPassword) 
        await ObjUtils.ClickObject(SigninObj.signinBtn)

        ObjUtils.ExpectBasedOnUrl('https://thinking-tester-contact-list.herokuapp.com/contactList')
        for(const contact of ContactObj.sampleContactInfo){

            ContactObj.addContactBtn.waitForExist({timout:5000})
            await ObjUtils.ClickObject(ContactObj.addContactBtn)
            ObjUtils.ExpectBasedOnUrl('https://thinking-tester-contact-list.herokuapp.com/addContact')
            await ObjUtils.setObjectValue(ContactObj.firstNameEdit,contact.name)
            await ObjUtils.setObjectValue(ContactObj.lastNameEdit,contact.lastname)
            await ObjUtils.setObjectValue(ContactObj.birthdateEdit,contact.birthdate)
            await ObjUtils.setObjectValue(ContactObj.emailEdit,contact.email)
            await ObjUtils.setObjectValue(ContactObj.phoneEdit,contact.phone)
            await ObjUtils.setObjectValue(ContactObj.street1Edit,contact.street1)
            await ObjUtils.setObjectValue(ContactObj.street2Edit,contact.street2)
            await ObjUtils.setObjectValue(ContactObj.cityEdit,contact.city)
            await ObjUtils.setObjectValue(ContactObj.stateProvinceEdit,contact.state)
            await ObjUtils.setObjectValue(ContactObj.postalCodeEdit,contact.postal)
            await ObjUtils.setObjectValue(ContactObj.countryEdit,contact.country)
            await ObjUtils.ClickObject(ContactObj.signupBtn)


            // verify display
            await expect($(`//tr[@class="contactTableBodyRow"]//td[text()="${contact.name} ${contact.lastname}"]`)).toExist()
            await expect($(`//tr[@class="contactTableBodyRow"]//td[text()="${contact.birthdate}"]`)).toExist()
            await expect($(`//tr[@class="contactTableBodyRow"]//td[text()="${contact.email.toLowerCase()}"]`)).toExist()
            await expect($(`//tr[@class="contactTableBodyRow"]//td[text()="${contact.phone}"]`)).toExist()
            await expect($(`//tr[@class="contactTableBodyRow"]//td[text()="${contact.street1} ${contact.street2}"]`)).toExist()
            await expect($(`//tr[@class="contactTableBodyRow"]//td[text()="${contact.city} ${contact.state} ${contact.postal}"]`)).toExist()
            await expect($(`//tr[@class="contactTableBodyRow"]//td[text()="${contact.country}"]`)).toExist()

        }
    })

    //testcase 4
    it('Heroku App Edit Contact TC004',async()=>{
        await browser.pause(5000)
        //navigate to user login
        await SigninObj.navigate()
        await ObjUtils.setObjectValue(SigninObj.signupEmailEdit,emailAddress) 
        await ObjUtils.setObjectValue(SigninObj.signupPasswordEdit,accPassword) 
        await ObjUtils.ClickObject(SigninObj.signinBtn)


        await ObjUtils.ClickObject(ContactObj.firstRowElement)//click first contact
        await ObjUtils.ClickObject(ContactObj.editContactBtn) //click edit contact
        await ObjUtils.ClearObjValue(ContactObj.emailEdit)
        await ContactObj.emailEdit.clearValue()
        await ObjUtils.setObjectValue(ContactObj.emailEdit,'new@gmail.com')
        await ObjUtils.ClickObject(ContactObj.signupBtn)
        await ObjUtils.ClickObject(ContactObj.returnBtn)
        await expect($(`//tr[@class="contactTableBodyRow"]//td[text()="new@gmail.com"]`)).toExist()
    })


    //test case 5
    it('Heroku App Delete Contact TC005',async()=>{
        await browser.pause(5000)
        //navigate to user login
        await SigninObj.navigate()
        await ObjUtils.setObjectValue(SigninObj.signupEmailEdit,emailAddress) 
        await ObjUtils.setObjectValue(SigninObj.signupPasswordEdit,accPassword) 
        await ObjUtils.ClickObject(SigninObj.signinBtn)


        await ObjUtils.ClickObject(ContactObj.lastTr)
        await ObjUtils.ClickObject(ContactObj.deleteBtn)
        await browser.acceptAlert();

        const name = ObjUtils.getObjTxt(ContactObj.contactDetailName)
        await expect($(`//tr[@class="contactTableBodyRow"]//td[text()="${name}"]`)).not.toExist()
        // await expect($(`//tr[@class="contactTableBodyRow"]//td[text()="${name}"]`)).toExist()

    })


    //testcase 6
    it('Heroku App Export Contacts on File_TC006',async()=>{
        await browser.pause(5000)
        //navigate to user login
        await SigninObj.navigate()
        await ObjUtils.setObjectValue(SigninObj.signupEmailEdit,emailAddress) 
        await ObjUtils.setObjectValue(SigninObj.signupPasswordEdit,accPassword) 
        await ObjUtils.ClickObject(SigninObj.signinBtn)

        //create text files
        await ContactObj.tableRow.waitForExist({timeout: 6000})
        const elements = await $$('//tr[@class="contactTableBodyRow"]').getElements()
        let count = 1;
        for (const data of elements){
            const name = await $(`//tr[@class="contactTableBodyRow"][${count}]//td[2]`).getText() //name
            const birthdate = await $(`//tr[@class="contactTableBodyRow"][${count}]//td[3]`).getText() //birthdate
            const email = await $(`//tr[@class="contactTableBodyRow"][${count}]//td[4]`).getText() //email
            const contact = await $(`//tr[@class="contactTableBodyRow"][${count}]//td[5]`).getText() //contact
            const address = await $(`//tr[@class="contactTableBodyRow"][${count}]//td[6]`).getText() //address
            const city = await $(`//tr[@class="contactTableBodyRow"][${count}]//td[7]`).getText() //city
            const country = await $(`//tr[@class="contactTableBodyRow"][${count}]//td[8]`).getText() //country
            await File.appendTxtFile(global.strPath,`${name}, ${birthdate}, ${email}, ${contact}, ${address}, ${city}, ${country}`)
            count++
        }
    })
})