class Webtable {


    async getAllRows() {

        return await $$('#table01 tbody tr')
    }

    async getRowCount() {
        return await $$('#table01 tbody tr').length
    }

    async getColumnsCount() {

        return await $$('#table01 tbody tr:nth-child(1) td').length
    }

    async getCellValue(row, column) {
        //console.log("log", tr[`${row}`])
        let ele = await $("#table01 tbody tr:nth-child(`${row}`) td:nth-child(`${column}`)")
        console.log(ele.getText())
        return await ele.getText()
    }

    async getCellValues() {
        let arr = [];
        let values = await $$("#table01 tbody tr td")
        await values.forEach(async element => {
            await arr.push(element.getText())


        });
        return arr
    }



}

export default new Webtable()
