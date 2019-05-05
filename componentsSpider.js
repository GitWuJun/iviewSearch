const baseUrlr = 'https://www.iviewui.com';
const mainUrl = `${baseUrlr}/docs/guide/install`;

const { By, Builder } = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');

let driver = new Builder().forBrowser('chrome').build();

const fs = require('fs')

let components = [];

const itemGroupName = 'ivu-menu-item-group';
const itemName = 'ivu-menu-item';
const itemGroupTitleName = 'ivu-menu-item-group-title';
const filePath = './libs/iview_components.json';

let until = webdriver.until;

driver.get(mainUrl);

driver
    .wait(until.elementLocated(By.className(itemGroupName)), 10 * 1000)
    .then(res => {
        driver
            .findElements(By.className(itemGroupName))
            .then(res => {
                parseItemGroup(res).then(result => {
                    writeFile(result)
                });
            })
            .catch(error => {
                console.log(error);
            });
    });

async function parseItemGroup(itemGroup) {
        for (let item of itemGroup) {
            let component = {
                type: null,
                list: []
            }
            let title = await getItemGroupTitle(item);
            component.type = title;
           await item.findElements(By.className(itemName)).then(async itemWrapper=>{
                let itemResult = await paraseItem(component,itemWrapper)
                components.push(itemResult);
            })
        }
    return components;
}

function getItemGroupTitle(item) {
    return item.findElement(By.className(itemGroupTitleName))
        .then(res => {
            return new Promise((resolve2, reject2) => {
                res.getText().then(titleText => {
                    resolve2(titleText);
                });
            });
        })
}

function getItemUrl(item) {
    return item.getAttribute('href')
}

function getItemTitle(item) {
    return item.getText()
}

async function paraseItem(component,itemWrapper){
        if(Array.isArray(itemWrapper)){
            for(let item2 of itemWrapper){
                let title = await getItemTitle(item2)
                let path = await getItemUrl(item2)
                component.list.push({
                    title:title,
                    path:path
                })
            }
        }
        return component;
}

function writeFile(data){
    fs.writeFileSync(filePath,JSON.stringify(data))
}