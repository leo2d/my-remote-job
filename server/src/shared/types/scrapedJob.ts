export default interface ScrapedJob {
    title: string;
    link: string;
    company?: string;
    location?: string;
    date?: string;
    employmentType?: string;

    description: string;
    companyDetails?: string;
    salaryRange?: string;
    skills?: string[];
    sourceId: string;
}
