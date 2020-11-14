import { ApiType } from '../services/jokeApi';

export const singularJoke: ApiType = {
  value:
    'Chuck Norris invented the internet so people could talk about how great Chuck Norris is.',
  categories: [],
  created_at: new Date(),
  id: '1212',
  updated_at: new Date(),
};

export const emptySingularStory: ApiType = {
  value: '',
  categories: [],
  created_at: new Date(),
  id: '1212',
  updated_at: new Date(),
};
