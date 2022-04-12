

let sortData = (data, sortName, sortTo) => {

    return sortTo(sortName, data)


}

let modifyDateFormat = (date) => {
    let modifiedDate = date.split('/')
    let [a, b] = modifiedDate
    modifiedDate[0] = b
    modifiedDate[1] = a
    console.log(modifiedDate)

    return modifiedDate.join('/')

}

let sortToAsc = (sortName, data) => {
    if (sortName == "email") {
        return data.sort((a, b) => (a.email < b.email ? -1 : 1));
    } else if (sortName == "salary") {
        return data.sort((a, b) => parseInt(a.salary) - parseFloat(b.salary));
    } else if (sortName == "age") {
        return data.sort((a, b) => a.age - b.age);
    } else if (sortName == "dob") {
        return data.sort((a, b) => {
            let a1 = new Date(modifyDateFormat(a.dob)).getTime();
            let b1 = new Date(modifyDateFormat(b.dob)).getTime();
            return a1 - b1;
        });
    }
    return data.sort((a, b) => {
        let a1 = a.firstName + a.lastName;
        let b1 = b.firstName + b.lastName;

        return a1 < b1 ? -1 : 1;
    });
}


let sortToDsc = (sortName, data) => {
    if (sortName == "email") {
        return data.sort((a, b) => (a.email > b.email ? -1 : 1));
    } else if (sortName == "salary") {
        return data.sort((a, b) => parseInt(b.salary) - parseFloat(a.salary));
    } else if (sortName == "age") {
        return data.sort((a, b) => b.age - a.age);
    } else if (sortName == "dob") {
        return data.sort((a, b) => {
            let a1 = new Date(modifyDateFormat(a.dob)).getTime();
            let b1 = new Date(modifyDateFormat(b.dob)).getTime();
            return b1 - a1;
        });
    }
    return data.sort((a, b) => {
        let a1 = a.firstName + a.lastName;
        let b1 = b.firstName + b.lastName;

        return a1 > b1 ? -1 : 1;
    });
}

export { sortData, sortToDsc, sortToAsc, modifyDateFormat }