import { singularJoke, emptySingularStory } from '../fixtures/Joke';
import { getARandomJoke } from '../services/jokeApi';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Chuck Norris Api', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getStory functionality', () => {
    it('requests and gets a joke from the chuckNorris Api', async () => {
      mockedAxios.get.mockImplementation(() =>
        Promise.resolve({ data: singularJoke })
      );

      const entity = await getARandomJoke();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(entity).toEqual(singularJoke);
    });

    it('does not retrieve a joke from the Api', async () => {
      mockedAxios.get.mockImplementation(() =>
        Promise.resolve({ data: emptySingularStory })
      );

      const entity = await getARandomJoke();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(entity).toEqual(emptySingularStory);
    });
  });
});
