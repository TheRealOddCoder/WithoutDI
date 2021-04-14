import {model} from '../model/model'
import {Request} from 'express'

export class Repo{

    async getMovie(){
        return await model.find()
    }

    async createMovie(req: Request){
        const {title, director} = req.body
        const movie = new model({title,director})
        return await movie.save()
    }
}