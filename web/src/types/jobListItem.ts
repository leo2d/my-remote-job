export default interface jobListItem {
    _id: string;
    title: string;
    link: string;
    company?: string;
    location?: string;
    date?: string;
    employmentType?: string;

    foundAt: string;
    source: { key: string; value: string };
    job_avatar: string;
}
