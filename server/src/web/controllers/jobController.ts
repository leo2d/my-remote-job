import { Response, Request, NextFunction } from 'express';

import { getByOrigin } from '../../services/jobService';

const getByOriginName = async (req: Request, res: Response) => {
    try {
        const sourceId = req.params[0];
        const result = await getByOrigin(sourceId);

        res.json(result);
    } catch (error) {
        console.log(error);
    }
};

export { getByOriginName };
