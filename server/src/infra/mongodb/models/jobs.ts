import mongoose, { Schema, Document } from 'mongoose';
import ScrapedJob from '../../../shared/types/scrapedJob';

export interface JobModel extends ScrapedJob, Document {
    foundAt: Date;
    isActive: boolean;
}

const jobSchema: Schema = new Schema({
    foundAt: { type: Date, required: true, default: Date.now() },
    isActive: { type: Boolean, required: true, default: true },
    source: {
        key: { type: String, required: true },
        value: { type: String, required: true },
    },

    title: { type: String, required: true },
    link: { type: String, required: true },
    company: { type: String, required: false },
    location: { type: String, required: true },
    date: { type: String, required: false },
    employmentType: { type: String, required: false },
    description: { type: String, required: true },
    companyDetails: { type: String, required: false },
    salaryRange: { type: String, required: false },
    skills: [String],
});

const collectionName = 'jobs';

const Jobs = mongoose.model<JobModel>(collectionName, jobSchema);

export default Jobs;
