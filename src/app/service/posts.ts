import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME || 'Posts';

export const getPosts = async () => {
  const params = {
    TableName: TABLE_NAME,
  };

  const result = await dynamoDb.scan(params).promise();
  return result.Items;
};

export const getPostById = async (postId: string) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      postId,
    },
  };

  const result = await dynamoDb.get(params).promise();
  return result.Item;
};

export const createPost = async (title: string, content: string, author: string, imageUrl: string) => {
  const postId = uuidv4();
  const createdAt = new Date().toISOString();

  const newPost = { 
    postId,
    title,
    content,
    author,
    imageUrl,
    createdAt,
  };

  const params = {
    TableName: TABLE_NAME,
    Item: newPost,
  };

  await dynamoDb.put(params).promise();
  return newPost;
};
