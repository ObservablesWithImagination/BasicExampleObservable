let observable = (observer) => {
    for (let i=0; i< 3; i++){
        if (i<2){
            observer.next(i);
        } else {
            observer.error(i);
        }
    }

    observer.complete();
};

observable({
    next: (value) => { console.log('Value: ', value);},
    error: (error) => {console.log('I don\'t like the ', error);},
    complete: () => {console.log ('This is the end');}
});