import userModel from '../models/db/db.models'

interface acc {
    name: string,
    password: string
}
interface updateAccount extends acc {
    oldName: string,
    oldPassword: string,
}

type PromiseReturned = Promise<Document | null>

export default class Crud {
    public async read(name: string): PromiseReturned{
       return userModel.findOne({name: name})
    }
    public async post(user: acc) {
        return userModel.create(user);
    }
    public async put(user: updateAccount): PromiseReturned{  
       return  userModel.findOneAndUpdate(
        {name: user.oldName, password: user.oldPassword},
        {name: user.name, password: user.password},
        {returnDocument: 'after'})
    }
    
    public async delete(user: acc): PromiseReturned{
        return  userModel.findOneAndDelete(user)
    }
}