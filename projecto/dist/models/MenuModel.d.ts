export declare class MenuModel {
    title: string;
    sections: SectionModel[];
    pageInfo: any;
    constructor(title: string, sections: SectionModel[], pageInfo: any);
    static makeAdmin(selectedIndex: number, pageInfo: any): MenuModel;
    static makeGuard(selectedIndex: number, pageInfo: any): MenuModel;
}
declare class SectionModel {
    titleLink: string;
    selected: boolean;
    link: string;
    constructor(titleLink: string, selected: boolean, link: string);
}
export {};
