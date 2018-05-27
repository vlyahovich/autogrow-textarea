interface AutogrowTextareaOptions {
    maxRows?: number;
}

export class AutogrowTextarea {
    private el: HTMLTextAreaElement;
    private textRows: number;
    private lineHeight: number;
    private minRows: number;
    private maxRows: number;
    private baseScrollHeight: number;

    constructor(el: HTMLTextAreaElement, options: AutogrowTextareaOptions = {}) {
        this.el = el;

        let attrs = this.parseAttrs();

        this.minRows = el.rows;
        this.maxRows = options.maxRows || attrs.maxRows || Infinity;

        this.handleFocus = this.handleFocus.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.bindEvents();
    }

    private parseAttrs() {
        let maxRows = Number(this.el.getAttribute('data-autogrow')),
            convert = (prop: any) => isNaN(prop) ? 0 : prop;

        return {
            maxRows: convert(maxRows)
        };
    }

    private bindEvents() {
        this.el.addEventListener('focus', this.handleFocus, false);
        this.el.addEventListener('input', this.handleChange, false);
    }

    private handleFocus() {
        if (!this.baseScrollHeight) {
            let {value, rows} = this.el;

            this.el.value = '';

            this.baseScrollHeight = this.el.scrollHeight;

            this.el.rows = this.el.rows + 1;

            this.lineHeight = this.el.scrollHeight - this.baseScrollHeight;

            this.el.rows = rows;
            this.el.value = value;
        }
    }

    private handleChange() {
        this.el.rows = this.minRows;

        let textRows = Math.ceil((this.el.scrollHeight - this.baseScrollHeight) / this.lineHeight);

        this.el.rows = Math.min(this.minRows + textRows, this.maxRows);
    }

    public destroy() {
        this.el.removeEventListener('focus', this.handleFocus);
        this.el.removeEventListener('input', this.handleChange);

        this.el.rows = null;
    }
};

document.addEventListener('DOMContentLoaded', function () {
    let inputs = document.querySelectorAll('textarea[data-autogrow]');

    [].forEach.call(inputs, (input: HTMLTextAreaElement) => new AutogrowTextarea(input));
});