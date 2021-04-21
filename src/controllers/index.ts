
import { Controller } from '../models/Service.index';
import { Posts } from './Posts'

export const Controllers: Array<Controller> = [
  new Posts().controller
];