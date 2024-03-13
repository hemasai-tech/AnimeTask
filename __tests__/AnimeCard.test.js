// __tests__/AnimeCard.test.js
import '@testing-library/jest-native/extend-expect';
import {it} from '@jest/globals';
import {generateToken, getContent} from '../src/services/api';

describe('generateToken function', () => {
  it('returns a defined token on successful API call', async () => {
    const response = await generateToken({email:'hema.saik@yahoo.com'});
    expect(response).toBeDefined(); // Check if the token is defined
    expect(typeof(response.data.token)).toBe('string');
  });
  it('returns content Object on successful API call', async () => {
    const tokenResponse = await generateToken({email:'hema.saik@yahoo.com'});
    const response = await getContent(tokenResponse.data.token);
    expect(response).toBeDefined(); // Check if the token is defined
    expect(typeof(response.data)).toBeDefined();
    expect(response).toHaveProperty('content');
  });
});