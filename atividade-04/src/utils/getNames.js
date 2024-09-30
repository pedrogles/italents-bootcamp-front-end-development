export const getNames = (list) => {
    return list.reduce((accumulator, user) => {
        accumulator.push(user.name);
        return accumulator;
    }, []);
};