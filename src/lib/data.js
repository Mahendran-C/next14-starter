import { Post, User } from "./models";
import { connectToDb } from "./utils";
import {unstable_noStore as noStore} from 'next/cache'

// TEMPORARY DATA
// const users = [
//     {id:1, name: 'Mahi'},
//     {id:2, name: 'Jane'},
// ]

// const posts = [
//     {id:1, title: 'Post 1', body: 'This is post 1', userId: 1},
//     {id:2, title: 'Post 2', body: 'This is post 2', userId: 2},
//     {id:3, title: 'Post 3', body: 'This is post 3', userId: 1},
//     {id:4, title: 'Post 4', body: 'This is post 4', userId: 2},
//     {id:5, title: 'Post 5', body: 'This is post 5', userId: 1},
//     {id:6, title: 'Post 6', body: 'This is post 6', userId: 2},
// ]

export const getPosts = async () => {
  try {
    await connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    await connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    throw new Error("Failed to fetch post!");
  }
};

// export const getUsers = async () =>{
//     return users
// }

export const getUser = async (id) => {
  noStore()
  try {
    await connectToDb();
    console.log(id, 'db conneted successfully')
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    await connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error("Failed to fetch users!");
  }
};
