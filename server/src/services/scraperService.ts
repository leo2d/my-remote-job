import { scrapHipsters } from '../scrapers/hipsters';
import { scrapStackoverflow } from '../scrapers/stackOverflow';
import { scrapGeekhunterData } from '../scrapers/geekhunter';
import { scrapProgramathor } from '../scrapers/programathor';
import Job from '../models/job';

const storeHisptersData = async () => {
    const jobs = await scrapHipsters();

    try {
        await Job.insertMany(jobs, (error, docs) => {
            if (error) console.log(error);
            else console.log(docs);
        });
    } catch (error) {
        console.log(error);
    }
};

export {
    storeHisptersData,
    scrapGeekhunterData,
    scrapHipsters,
    scrapProgramathor,
    scrapStackoverflow,
};
