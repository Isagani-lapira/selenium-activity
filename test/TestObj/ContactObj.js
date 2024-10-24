import ObjUtils from "../utils/ObjUtils"

class ContactObj{

    get addContactBtn(){return $('//button[@id="add-contact"]')}
    get firstNameEdit(){return $('//input[@id="firstName"]')}
    get lastNameEdit(){return $('//input[@id="lastName"]')}
    get birthdateEdit(){return $('//input[@id="birthdate"]')}
    get emailEdit(){return $('//input[@id="email"]')}
    get phoneEdit(){return $('//input[@id="phone"]')}
    get street1Edit(){return $('//input[@id="street1"]')}
    get street2Edit(){return $('//input[@id="street2"]')}
    get cityEdit(){return $('//input[@id="city"]')}
    get stateProvinceEdit(){return $('//input[@id="stateProvince"]')}
    get postalCodeEdit(){return $('//input[@id="postalCode"]')}
    get countryEdit(){return $('//input[@id="country"]')}
    get signupBtn(){return $('//button[@id="submit"]')}
    get tableData(){return $('')}
    get tableRow(){return $('//tr[@class="contactTableBodyRow"]')} //duplicate
    get firstRowElement(){return $('//tr[@class="contactTableBodyRow"][1]')}
    get editContactBtn(){return $('//button[@id="edit-contact"]')}
    get returnBtn(){return $('//button[@id="return"]')}
    get deleteBtn(){return $('//button[@id="delete"]')}
    get lastTr(){return $('//tr[last()][@class="contactTableBodyRow"]')}
    get contactDetailName() {return $('//span[@id="firstName"')}



    get sampleContactInfo(){return [
        {
            name: 'Isagani',
            lastname: 'Lapira',
            birthdate: '1994-10-21',
            email: 'Isagani1233@gmail.com',
            phone: '09104905440',
            street1: 'Street rar',
            street2: 'Street2 rar',
            city: 'Malolos',
            state: 'Bulacan',
            postal: '3000',
            country: 'South Korea',
        },
        {
            name: 'Darwin',
            lastname: 'Ramos',
            birthdate: '1994-10-23',
            email: 'Darwin1233@gmail.com',
            phone: '09104905440',
            street1: 'Street dar',
            street2: 'Street2 dar',
            city: 'Zamboanga',
            state: 'Marilao',
            postal: '7000',
            country: 'Philippines',
        },
        {
            name: 'Wilhelm',
            lastname: 'Miranda',
            birthdate: '1994-10-22',
            email: 'Wilhelm1233@gmail.com',
            phone: '09104905441',
            street1: 'Street Wil',
            street2: 'Street2 Wil',
            city: 'Sampaloc',
            state: 'Pampanga',
            postal: '4000',
            country: 'New Zealand',
        }
    ]}
}

export default new ContactObj()