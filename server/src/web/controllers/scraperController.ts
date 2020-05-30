import { Response, Request } from 'express';
import scraperService from '../../services/scraperService';

const createJobs = async (req: Request, res: Response) => {
    try {
        await scraperService.createData(req.params.sourceId);

        res.json({ ok: 'true' });
    } catch (error) {
        console.error(error);
    }
};

const updateJobs = async (req: Request, res: Response) => {
    try {
        await scraperService.updateData(req.params.sourceId);

        res.json({ ok: 'true' });
    } catch (error) {
        console.error(error);
    }
};

const scrapJobs = async (req: Request, res: Response) => {
    try {
        const jobs = await scraperService.scrapData(req.params.sourceId);

        res.json(jobs);
    } catch (error) {
        console.error(error);
    }
};

export default { createJobs, updateJobs, scrapJobs };
