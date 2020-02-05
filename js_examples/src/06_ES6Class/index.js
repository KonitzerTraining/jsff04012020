class Topic {
    constructor() {
        this.date = Date.now();

    }
}

class Project extends Topic {
    constructor() {
        super(); // Topic.call(this,...);

        let id = Math.random();
        Reflect.defineProperty(this, 'id', {
            get () {
                return id;
            }
        });

        this.status = 'stopped';
    }

    start () {
        this.status = 'running';
    }
    get something () {
        return 'anything';
    }

    static isProject (p) {
        return p.constructor === Project;
    }
}

console.log(typeof Project);
console.dir(Project);

let p1 = new Project();
console.log(p1.id);

console.log(p1);

console.log(Project.isProject(p1));