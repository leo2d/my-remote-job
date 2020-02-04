import { Response, Request, NextFunction } from 'express';
import {
    scrapHipsters,
    scrapStackoverflow,
    scrapGeekhunterData,
    scrapProgramathor,
    storeHisptersData,
    storeStackOverflowData,
    storeGeekHunterData,
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

const storeTheHisptersData = async (req: Request, res: Response) => {
    try {
        const result = await storeHisptersData();

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
    storeTheGeekHunterData,
    storeTheStackOverflowData,
    storeTheHisptersData,
    getHipstersData,
    getStackoverflowData,
    getGeekhunterData,
    getProgramathorData,
};
