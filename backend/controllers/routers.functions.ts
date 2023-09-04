import Crud from '../controllers/routers.helpers'
const apiCrud = new Crud()

interface RequestBody {
    email: string;
    password: string;
  }

interface RequestBodyforUpdate extends RequestBody {
    oldEmail: string,
    oldPassword: string
  }

  type userType =  Document | null | undefined


class crudHandler {
    private jsonResponse(res: any, user: userType, message: string, httpOK: number, httpError: number) {
      res.status(user ? httpOK : httpError).json({message: user ?? message}) 
    }

    public getHandler = async (req: any,res: any)=> {
      const {email}: RequestBody = req.params
      const user = await apiCrud.read(email)
      this.jsonResponse(res, user, `user not found \n value: ${user}`, 200, 404)
    }


    public deleteHandler = async (req: any,res: any)=> {
      const {email, password}: RequestBody = req.body
      const user = await apiCrud.delete({email, password})
      this.jsonResponse(res, user, `user not found \n value: ${user}`, 200, 404)
    }

    public postHandler = async (req: any,res: any)=> {
      const {email, password}: RequestBody = req.body 
      const user = await apiCrud.post({ email, password })
      this.jsonResponse(res, user, `user wasnt accepted \n value: ${user}.`, 200, 406)
    }

    public putHandler = async (req: any,res: any)=> {
      const {oldEmail, oldPassword, email, password}: RequestBodyforUpdate = req.body
      const user = await apiCrud.put({oldEmail, oldPassword, email, password});
      this.jsonResponse(res,user, `user doesn't exists ${user}`, 200, 404)
    }
}



export default crudHandler