export function render (data, template) {
    return template.replace('{{id}}', data);
}

let info = 123;
export default info;