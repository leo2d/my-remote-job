import { Response, Request, NextFunction } from 'express';

import { getByOrigin } from '../../services/jobService';
import Origin from '../../shared/origin';

const getByOriginName = async (req: Request, res: Response) => {
    try {
        const result = await getByOrigin(Origin.hipsters.id);

        res.json(result);
    } catch (error) {
        console.log(error);
    }
};

export { getByOriginName };
