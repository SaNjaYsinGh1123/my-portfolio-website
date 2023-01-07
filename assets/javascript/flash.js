
function flashSuccess(message){ new Noty({
    theme: 'relax',
    text: message,
    type:'success',
    layout: 'topRight',
    timeout:1500
     }).show();
}

function flashError(message){ new Noty({
    theme: 'relax',
    text: message,
    type:'error',
    layout: 'topRight',
    timeout:1500
     }).show();
}