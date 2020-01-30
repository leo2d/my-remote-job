import { Response, Request, NextFunction } from 'express';
import {
    scrapHipsters,
    scrapStackoverflow,
    scrapGeekhunterData,
    scrapProgramathor,
} from '../../services/scraperService';

const getHipstersData = async (req: Request, res: Response) => {
    try {
        const result = await scrapHipsters();

        res.json(result);
    } catch (error) {
        console.log(error);
    }
};

const getStackoverflowData = async (req: Request, res: Response) => {
    try {
        const result = await scrapStackoverflow();

        res.json(result);
    } catch (error) {
        console.log(error);
    }
};

const getGeekhunterData = async (req: Request, res: Response) => {
    try {
        const result = await scrapGeekhunterData();

        res.json(result);
    } catch (error) {
        console.log(error);
    }
};

const getProgramathorData = async (req: Request, res: Response) => {
    try {
        const result = await scrapProgramathor();

        res.json(result);
    } catch (error) {
        console.log(error);
    }
};

export {
    getHipstersData,
    getStackoverflowData,
    getGeekhunterData,
    getProgramathorData,
};
