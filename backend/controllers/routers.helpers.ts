import userModel from '../models/db/db.models'

interface acc {
    email: string,
    password: string
}
interface updateAccount extends acc {
    oldEmail: string,
    oldPassword: string,
}

type promiseDocument = Promise<Document | null>
export default class Crud {

    public async read(email: string): promiseDocument{
       return userModel.findOne({email: email})
    }

    public async put(user: updateAccount): promiseDocument{  
       return  userModel.findOneAndUpdate(
        {email: user.oldEmail, password: user.oldPassword},
        {email: user.email, password: user.password},
        {returnDocument: 'after'})
    }
    
    public async delete(user: acc): promiseDocument {
        return  userModel.findOneAndDelete(user)
    }
    public async post(user: acc): promiseDocument {
        return userModel.create(user) as unknown as promiseDocument;
    }
}