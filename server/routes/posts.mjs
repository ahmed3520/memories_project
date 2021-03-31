import express from 'express'

import {getPost, getPosts,updatePost ,deletePost, likePost,createPost} from '../controller/posts'
const router = express.Router();


router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;