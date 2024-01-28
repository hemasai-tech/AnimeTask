import axios from 'axios';

export const url = {
  generateToken:
    'https://swsut62sse.execute-api.ap-south-1.amazonaws.com/prod/generateToken',
  getContent:
    'https://tzab40im77.execute-api.ap-south-1.amazonaws.com/prod/getContent',
};

// Function to generate a token
export const generateToken = async params => {
  try {
    const response = await axios.post(url.generateToken, params, {
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
      },
    });
    return response; // Assuming the token is in the response data
  } catch (error) {
    // Handle errors
    console.log('Error generating token:', error);
    throw error;
  }
};

// Function to get content
export const getContent = async token => {
  try {
    // Use the token in the headers of the getContent API call
    const response = await axios.get(url.getContent, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    // Handle the response as needed
    return response.data;
  } catch (error) {
    // Handle errors
    return error
  }
};
