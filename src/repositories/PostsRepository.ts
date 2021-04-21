import { Repository } from './Repository';
import { handlers } from '../tools'
import axios from 'axios';
//import { replaceKeys } from '../tools';

export class PostsRepository extends Repository {

    constructor(){
        super();
        this.log = 'Posts Repository';
    };
    public async bringPosts(req){
        const result = await handlers({ axios }).get('https://jsonplaceholder.typicode.com/posts');
        return result;
    }
}