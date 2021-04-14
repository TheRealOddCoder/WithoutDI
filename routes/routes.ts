
import {Controller} from '../controller/controller'
import {Application, NextFunction, Request, Response} from 'express'


export class Routes{

        public controller: Controller
        constructor(){
            this.controller = new Controller()
        }
    
        public async routes(app: Application): Promise<void> {
            app.get('/get',(req: Request , res: Response, next: NextFunction ) => { this.controller.getEntry(req,res,next)})
            app.post('/create',(req: Request, res: Response)=> {this.controller.createEntry(req,res)})
            
        }

    
}