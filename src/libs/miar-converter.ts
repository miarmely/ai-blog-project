export class CaseConverter {
    /**
     * Convert text from "kebab case" to "pascal case" format.
     * Example, hello-world => HelloWorld.
     * @param text in "kebab case" format.
     * @returns text in "pascal case" format.
     */
    static KebabCaseToPascalCase(text: string) {
        const newText = text
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join("");

        return newText;
    }

    /**
     * Convert text from "kebab case" to "camel case" format.
     * Example, hello-world => helloWorld.
     * @param text in "kebab case" format.
     * @returns text in "camel case" format.
     */
    static KebabCaseToCamelCase(text: string) {
        const newText = text
            .split("-")
            .map((word, index) => {
                return index == 0 ?
                    word
                    : word.charAt(0).toUpperCase() + word.slice(1)
            })
            .join("");

        return newText;
    }
}