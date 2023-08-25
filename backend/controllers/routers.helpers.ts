import userModel from '../models/db/db.models'

interface acc {
    name: string,
    password: string
}

export class Crud {


    public async read(user: acc){
       return await userModel.findOne(user)
    }
    public async post(user: acc){
       return await userModel.create(user)
    }
    public async put(user: acc, newUser: acc){
       const foundUser = await this.read(user)


       foundUser?.save()
       return foundUser
    }
    public delete(req: any,res: any){
        userModel.findOne(req.query)
    }
}