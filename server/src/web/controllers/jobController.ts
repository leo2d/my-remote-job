import { Response, Request, NextFunction } from 'express';

import { getBySourceId } from '../../services/jobService';

const getBySource = async (req: Request, res: Response) => {
    try {
        const sourceId = req.params[0];
        const result = await getBySourceId(sourceId);

        res.json(result);
    } catch (error) {
        console.log(error);
    }
};

export { getBySource };
