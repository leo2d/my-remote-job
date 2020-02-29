export default interface jobListItem {
    _id: string;
    title: string;
    company?: string;
    location?: string;
    date?: string;
    employmentType?: string;

    foundAt: string;
    source: string;
    job_avatar: string;
}
