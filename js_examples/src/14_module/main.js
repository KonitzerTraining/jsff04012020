import {render} from './lib/render.js';
import * as r from './lib/render.js';
import info from './lib/render.js';

console.log(r);
console.log(info);

let html = render(5,`
<p>ID: {{id}}</p>
`);

console.log(html);