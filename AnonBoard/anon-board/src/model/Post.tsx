export type Post = {
    id: string;
    userDisplayName: string;
    message: string;
    createdTimestamp: number;
    parentId: string;
    childIds: string[];
    nestingLevel: number;
    isExpanded: boolean;
};