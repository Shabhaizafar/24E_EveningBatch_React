class MyClass{
    constructor(fname,lname){
        this.firstname = fname;
        this.lastname = lname;
    }
    display(){
        return(
            <h2>My Name is {this.firstname} {this.lastname}</h2>
        )
    }
};


export default MyClass;