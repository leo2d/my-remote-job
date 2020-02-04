import mongoose from '../data/database/mongoose';
import ScrapedJob from '../shared/types/scrapedJob';
import { Document, Model, model, Types, Schema, Query } from 'mongoose';

interface IJob extends ScrapedJob, Document {
    foundAt: Date;
    isActive: boolean;
}

const jobSchema: Schema = new Schema({
    foundAt: { type: Date, required: true, default: Date.now() },
    isActive: { type: Boolean, required: true, default: true },
    sourceId: { type: String, required: true },

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

const Job = mongoose.model<IJob>(collectionName, jobSchema);

export default Job;
