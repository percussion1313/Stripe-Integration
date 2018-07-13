import { Router } from 'express';
import Table from '../table';

let router = Router();

let blogList = new Table('blogs');

router.get('/', async(req, res) => {
    let blogs = await blogList.getAll();
    res.json(blogs);
 });

 router.get('/:id', async(req, res) => {
    let id = await req.params.id
    let blog = await blogList.getOne(id);
    res.json(blog);
 });

 router.post('/', async (req,res) => {
    let body = req.body
    let id = await blogList.insert(body);
    res.json(id);
})


export default router;
