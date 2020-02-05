export class HTMLRenderer {
    constructor() {

    }

    renderOne(dataObj, template) {
        Object.keys(dataObj).forEach((key) => {
            template = template.replace(`{{${key}}}`, dataObj[key]);
        });

        return template;
    }

    renderMany(dataArr, template) {

        let html = '';
        dataArr.forEach((dataObj) => {
            html += this.renderOne(dataObj, template)
        });
        return html;
    }
}