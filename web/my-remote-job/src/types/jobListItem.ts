export default interface jobListItem {
    id: string;
    title: string;
    company?: string;
    location?: string;
    date?: string;
    employmentType?: string;

    foundAt: string;
    source: string;
}
