import userModel from '../models/db/db.models'

interface acc {
    name: string,
    password: string
}
interface updateAccount extends acc {
    oldName: string,
    oldPassword: string,
}

type promiseDocument = Promise<Document | null>
export default class Crud {

    public async read(name: string): promiseDocument{
       return userModel.findOne({name: name})
    }

    public async put(user: updateAccount): promiseDocument{  
       return  userModel.findOneAndUpdate(
        {name: user.oldName, password: user.oldPassword},
        {name: user.name, password: user.password},
        {returnDocument: 'after'})
    }
    
    public async delete(user: acc): promiseDocument {
        return  userModel.findOneAndDelete(user)
    }
    public async deleteAll() {
     return await userModel.find()
    }
    public async post(user: acc): promiseDocument {
        return userModel.create(user) as unknown as promiseDocument;
    }
}