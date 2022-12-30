const nextId = (investiments) => {
    const maiorId = investiments.reduce((acc, investiment) => {
        if(investiment.id > acc) {
            acc = investiment.id;
        }
        return acc;
    }, 0);
    return maiorId+1;
}


module.exports = {
    nextId
}

