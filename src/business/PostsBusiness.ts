import { PostsRepository } from '../repositories';

export class PostsBusiness {

    async bringPosts(req) {
        const results = await PostsRepository.getInstance().bringPosts(req);
        return results;
    }
    async bringPostsFilterByUserId(req) {
        const { userId } = req.query;
        const results = await PostsRepository.getInstance().bringPosts(req);
        return results.filter(x => x.userId === parseInt(userId));
    }
};