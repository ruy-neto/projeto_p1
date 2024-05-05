export class MenuModel {
    constructor(public title: string, public sections: SectionModel[],pageInfo:any){}
    static makeAdmin(selectedIndex: number, pageInfo:any): MenuModel {
        const lista = [
            ["Inicio","/home"],
            ["Gerenciar Usuários","/users"]
        ];

        const sections = lista.map((element, index)=>{return new SectionModel(element[0], index == selectedIndex,element[1])});

        return new MenuModel(lista[selectedIndex][0],sections,pageInfo);
    }
}

class SectionModel {
    constructor(
        public titleLink: string,
        public selected: boolean,
        public link: string
        ){}
}