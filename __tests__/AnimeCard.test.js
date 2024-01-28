// __tests__/AnimeCard.test.js
import React from 'react';
import {render, waitFor, fireEvent, act} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import AnimeCard from '../src/components/cards/AnimeCard';
import {jest, it} from '@jest/globals';
import {generateToken, getContent} from '../src/services/api';
import axios from 'axios';

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