import { Router } from 'https://deno.land/x/oak/mod.ts';
import { echoRequest } from './Controllers/echo.ts';

const router = new Router()

export default router
router.all('/:status', echoRequest);