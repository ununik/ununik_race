function var_dump(obj, element)
{
    var logMsg = objToString(obj, 0);
    if (element) // set innerHTML to logMsg
    {
        var pre = document.createElement('pre');
        pre.innerHTML = logMsg;
        element.innerHTML = '';
        element.appendChild(pre);
    }
    else // write logMsg to the console
    {
        console.log(logMsg);
    }
}

function objToString(obj, level)
{
    var out = '';
    for (var i in obj)
    {
        for (loop = level; loop > 0; loop--)
        {
            out += "    ";
        }
        if (obj[i] instanceof Object)
        {
            out += i + " (Object):\n";
            out += objToString(obj[i], level + 1);
        }
        else
        {
            out += i + ": " + obj[i] + "\n";
        }
    }
    return out;
}