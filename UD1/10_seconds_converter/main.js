const assert = require('assert').strict;

function toHoursMinutesSeconds(value) {
    let horas = Math.round(value / 3600).toString().length == 1 ? ("0" + Math.round(value / 3600).toString()) : Math.round(value / 3600).toString()
    let minutos = Math.round((value / 60) - (60 * horas)).toString().length = 1 ? ("0" + Math.round((value / 60) - (60 * horas)).toString()) : Math.round((value / 60) - (60 * horas)).toString()
    let segundos = (value - (3600 * horas) - (60 * minutos)).toString().length == 1 ? ("0" + (value - (3600 * horas) - (60 * minutos)).toString()) : (value - (3600 * horas) - (60 * minutos)).toString()

    return `${horas}:${minutos}:${segundos}`
}

assert.deepStrictEqual(toHoursMinutesSeconds(3600), "01:00:00")
assert.deepStrictEqual(toHoursMinutesSeconds(3720), "01:02:00")
assert.deepStrictEqual(toHoursMinutesSeconds(3725), "01:02:05")