"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuModel = void 0;
class MenuModel {
    constructor(title, sections, pageInfo) {
        this.title = title;
        this.sections = sections;
        this.pageInfo = pageInfo;
    }
    static makeAdmin(selectedIndex, pageInfo) {
        const lista = [
            ["Inicio", "/home"],
            ["Gerenciar Usuários", "/users"]
        ];
        const sections = lista.map((element, index) => { return new SectionModel(element[0], index == selectedIndex, element[1]); });
        return new MenuModel(lista[selectedIndex][0], sections, pageInfo);
    }
    static makeGuard(selectedIndex, pageInfo) {
        const lista = [
            { titulo: "Inicio", link: "/home" },
            { titulo: "Registrar", link: "/registrate" },
            { titulo: "Registros", link: "/registry" }
        ];
        const sections = lista.map((element, index) => { return new SectionModel(element.titulo, index == selectedIndex, element.link); });
        return new MenuModel(lista[selectedIndex].titulo, sections, pageInfo);
    }
}
exports.MenuModel = MenuModel;
class SectionModel {
    constructor(titleLink, selected, link) {
        this.titleLink = titleLink;
        this.selected = selected;
        this.link = link;
    }
}
//# sourceMappingURL=MenuModel.js.map