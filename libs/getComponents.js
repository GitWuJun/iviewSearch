function getComponents(keyWord,dataSource){
    let resultArr = [];
    if (keyWord) {
        let reg =  new RegExp(keyWord,'i');
        dataSource.forEach(element => {
            if (element.list) {
                element.list.forEach(item => {
                    if(reg.test(item.title)){
                        let resultItem = {
                            title:item.title,
                            subtitle:item.title,
                            icon:item.icon,
                            arg:item.title
                        }
                        resultArr.push(resultItem);
                    }
                });
            }
        });
    }
    return resultArr;
}

module.exports = getComponents;