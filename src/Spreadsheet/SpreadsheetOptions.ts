export interface SpreadsheetOptions {
    /**
     * The root element under which the Spreadsheet is built
     */
    rootElement: HTMLElement;

    rows: unknown;
    columns: unknown;
    
    editable: boolean;
    
    about: "I don't like how JSpreadsheet works/is 'documented', so I decided to fix it";
}
