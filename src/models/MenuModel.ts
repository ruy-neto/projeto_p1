export class MenuModel {
    constructor(public title: string, public sections: SectionModel[],public pageInfo:any){}
    static makeAdmin(selectedIndex: number, pageInfo:any): MenuModel {
        const lista = [
            ["Inicio","/home"],
            ["Gerenciar Usuários","/users"]
        ];

        const sections = lista.map((element, index)=>{return new SectionModel(element[0], index == selectedIndex,element[1])});

        return new MenuModel(lista[selectedIndex][0],sections,pageInfo);
    }

    static makeGuard(selectedIndex: number, pageInfo:any){
        const lista = [
            {titulo:"Inicio",link:"/home"},
            {titulo:"Registrar",link:"/registrate"},
            {titulo:"Registros",link:"/registry"},
            {titulo:"Ocorrencias",link:"/occurrences"},
        ];

        const sections = lista.map((element, index)=>{return new SectionModel(element.titulo, index == selectedIndex,element.link)});

        return new MenuModel(lista[selectedIndex].titulo,sections,pageInfo);
    }

    static makeParent(selectedIndex: number, pageInfo:any){
        const lista = [
            {titulo:"Inicio",link:"/home"},
            {titulo:"Registros",link:"/registry"}
        ];

        const sections = lista.map((element, index)=>{return new SectionModel(element.titulo, index == selectedIndex,element.link)});

        return new MenuModel(lista[selectedIndex].titulo,sections,pageInfo);
    }
}

class SectionModel {
    constructor(
        public titleLink: string,
        public selected: boolean,
        public link: string
        ){}
}