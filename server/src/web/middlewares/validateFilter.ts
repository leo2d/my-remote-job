import { Request, Response, NextFunction } from 'express';

const validateFilter = (req: Request, res: Response, next: NextFunction) => {
    if (
        Object.keys(req.query).length !== 0 &&
        req.query.constructor === Object
    ) {
        const errors: string[] = [];

        if (req.query.title && typeof req.query.title !== 'string')
            errors.push(`Invalid filter: field 'title' must be a string`);

        if (req.query.company && typeof req.query.company !== 'string')
            errors.push(`Invalid filter: field 'company' must be a string`);

        if (errors.length) return res.status(400).json({ errors });
    }

    next();
};

export default validateFilter;
