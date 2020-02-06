// Super Class
class Topic {
    constructor() {
        this.date = Date.now();
    }
}

// Sub Class
class Project extends Topic {
    constructor() {
        // Constructor Stealing
        super(); // Topic.call(this,...);

        // private via Closure
        let id = Math.random();

        Reflect.defineProperty(this, 'id', {
            get () {
                return id; // id ist Closure-Variable
            }
        });

        // ES3-Property!!
        this.status = 'stopped';
    }

    // Method landet in Project.prototype.start
    start () {
        this.status = 'running';
    }

    // landet im prototype
    get something () {
        return 'anything';
    }

    // Eigenschaft  Project.isProject
    static isProject (p) {
        return p.constructor === Project;
    }
}

console.log(typeof Project); // function
console.dir(Project);

let p1 = new Project();
console.log(p1.id); // get id wird aufgerufen

console.log(p1);

console.log(Project.isProject(p1)); // true