import { Client, Databases, Account  } from 'appwrite';

export const PROJECT_ID = '659b0d42a88201483b7b'
export const DATABASE_ID = '659b1b96cfc2876796b5'
export const COLLECTION_ID_MESSAGES = '659b1d1c16c0891d144b'
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('659b0d42a88201483b7b');

export const databases = new Databases(client);
export const account = new Account(client); 

export default client;