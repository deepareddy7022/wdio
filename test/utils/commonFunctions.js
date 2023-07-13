class commands {

    constructor() {
    }

    async selectOptions(options) {

        let selectedText = []
        for (let i of options) {
            if (options.isSelected())
                selectedText.push(await options.getText())

        }
        return selectedText
    }

    async selectedValue(options) {

        let selectedOptions = []
        for (let i of options) {
            if (options.isSelected())
                selectedOptions.push(await options.getValue())

        }
        return selectedOptions

    }






}

export default new commands()