import { Response, Request } from 'express';

import HealthCheck from '../../shared/types/healthCheck';

const check = async (req: Request, res: Response) => {
    const serverHealth: HealthCheck = {
        entry: 'server',
        status: 'healthy',
        errors: [],
        date: new Date(),
    };

    const result = [serverHealth];

    res.status(200).json(result);
};

export default { check };
