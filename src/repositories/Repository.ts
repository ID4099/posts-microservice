export class Repository {

    protected log;
    private static instance

    static getInstance(){
        if(!this.instance){
            this.instance = new this();
        }
        return this.instance;
    };
}