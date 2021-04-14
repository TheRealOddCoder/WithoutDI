import {Repo} from '../repo/repo'
import {NextFunction, Request, Response} from 'express'

export class Controller {
    public repo: Repo
    constructor(){
        this.repo = new Repo()
    }

    async getEntry(req : Request , res : Response, next: NextFunction){   
        try{
            const movies = await this.repo.getMovie()
            res.status(200).json({
                movies: movies
            })
       }
       catch(error){
           res.status(500).json({error: error})
       }
    }
    

    async createEntry(req : Request, res: Response){
        try{
            const newMovie = await this.repo.createMovie(req)
            res.status(200).json({
                created: newMovie
            })
        }
        catch(error){
            res.status(500).json({error: error})
        }

    }
}
