# Autogrow textarea plugin

Vanilla js plugin for autogrow textarea.
Already hooks up existing textareas on page with `data-autogrow` attibute.

# Autogrow options

`data-autogrow` can accept number e.g. `data-autogrow="5"`, this number represents maximum amount of lines allowed

# Manual hook up

To manually apply the plugin just create a class with element and options passed as arguments:

```javascript
import {AutogrowTextarea} from 'autogrow-textarea';

let textArea = new AutogrowTextarea(document.querySelector('.my-text-area'), {maxRows: 5});
```

to destroy textArea call `textArea.destroy()`