import { Response, Request, NextFunction } from 'express';
import {
    scrapHipsters,
    scrapStackoverflow,
    scrapGeekhunter,
    scrapProgramathor,
    createHisptersData,
    createGeekHunterData,
    createStackOverflowData,
} from '../../services/scraperService';

const getHipestersScrapedData = async (req: Request, res: Response) => {
    try {
        const result = await scrapHipsters();

        res.json(result);
    } catch (error) {
        console.log(error);
    }
};
const getStackoverflowScrapedData = async (req: Request, res: Response) => {
    try {
        const result = await scrapStackoverflow();

        res.json(result);
    } catch (error) {
        console.log(error);
    }
};
const getGeekhunterScrapedData = async (req: Request, res: Response) => {
    try {
        const result = await scrapGeekhunter();

        res.json(result);
    } catch (error) {
        console.log(error);
    }
};
const getProgramathorScrapedData = async (req: Request, res: Response) => {
    try {
        const result = await scrapProgramathor();

        res.json(result);
    } catch (error) {
        console.log(error);
    }
};

const createHipsters = async (req: Request, res: Response) => {
    try {
        await createHisptersData();

        res.json({ ok: 'true' });
    } catch (error) {
        console.log(error);
    }
};
const createStackOverflow = async (req: Request, res: Response) => {
    try {
        await createStackOverflowData();

        res.json({ ok: 'true' });
    } catch (error) {
        console.log(error);
    }
};
const createGeekHunter = async (req: Request, res: Response) => {
    try {
        await createGeekHunterData();

        res.json({ ok: 'true' });
    } catch (error) {
        console.log(error);
    }
};

        res.json({ ok: 'true', result });
    } catch (error) {
        console.log(error);
    }
};
const storeTheStackOverflowData = async (req: Request, res: Response) => {
    try {
        const result = await storeStackOverflowData();

        res.json({ ok: 'true', result });
    } catch (error) {
        console.log(error);
    }
};
const storeTheGeekHunterData = async (req: Request, res: Response) => {
    try {
        const result = await storeGeekHunterData();

        res.json({ ok: 'true', result });
    } catch (error) {
        console.log(error);
    }
};

export {
    createGeekHunter,
    createStackOverflow,
    createHipsters,
    getHipestersScrapedData,
    getStackoverflowScrapedData,
    getGeekhunterScrapedData,
    getProgramathorScrapedData,
};
