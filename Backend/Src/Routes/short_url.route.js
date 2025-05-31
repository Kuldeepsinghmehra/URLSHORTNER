import express from 'express';
import { createShortUrl } from '../Controllers/short_url.controller';
const router =express.router();
router.post('/',createShortUrl)
export default router