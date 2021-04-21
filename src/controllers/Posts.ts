
import { Controller } from '../models/Service.index';
import { PostsBusiness } from '../business'

export class Posts{

  public controller: Controller = Controller();

  constructor(){
    this.controller.get('/posts', this.bringPosts.bind(this));//0
  }

  async bringPosts(req, res){
    try {
      const operationsMap = new Map([
        [
          undefined, {
            operation: () => (new PostsBusiness).bringPosts(req),
            message: 'Get posts all successful'
          }
        ],
        [
          'foruser', {
            operation: () => (new PostsBusiness).bringPostsFilterByUserId(req),
            message: 'Get posts by user id successful'
          }
        ]
      ]);
      const resultMap = operationsMap.get(req.query.filter);
      const { operation, message } = resultMap;

      const code = 200
      const response = {
        success: true,
        response: {
          code,
          message: message,
          results: await operation()
        }
      }
      res.status(code).send(response);

    } catch (err) {
      const code = 500;
      const error = {
        code: code,
        success: false,
        errors: err.errors || err.details,
      };
      res.status(code).send(error);
    }

  }

}