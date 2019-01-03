var click = false;
var oldInput = null;

function clickInput(_input) {
    if (_input != oldInput) {
        if (oldInput != null) {
            setAttributeDefault(oldInput, false);
        }
        oldInput = _input;
        click = false;
    }

    if (!click) {
        setAttributeDefault(_input, true);
        click = true;
    } else {
        setAttributeDefault(_input, false);
        click = false;
    }

}

function setAttributeDefault(_input, typeAttribute) {
    if (typeAttribute) {
        _input.setAttribute("style", "border-style: solid;");
        _input.setAttribute("style", "border-width: 2px;");
    } else {
        _input.setAttribute("style", "border-style: none;");
        _input.setAttribute("style", "border-width: 0px;");
        _input.setAttribute("style", "padding: 0px;");
    }
}