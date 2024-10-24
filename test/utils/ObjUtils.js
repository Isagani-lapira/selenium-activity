import moment from "moment"

moment

class ObjUtils{


    async setObjectValue(object,textMsg){
        await object.waitForExist({timeout:6000})
        await object.setValue(textMsg)
    }
    async ClickObject(obj){
        await obj.waitForExist({timeout:6000})
        await obj.click()
    }

    async ExpectBasedOnUrl(url){
        await expect(browser).toHaveUrl(url)
    }

    async ClearObjValue(obj){
        await obj.waitForExist({timeout:6000})
        await obj.clearValue()
    }

    async getObjTxt(obj){
        return obj.getText()
    }

}

export default new ObjUtils()