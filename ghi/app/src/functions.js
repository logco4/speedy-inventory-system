export function dateConvert(date) {
    const splitDate = date.split("-");
    return `${splitDate[1]}-${splitDate[2]}-${splitDate[0]}`;
}

export function timeConvert(time) {
    const splitTime = time.split(":");
    let newTime = ""
    if (splitTime[0][0] === "0") {
        splitTime[0] = splitTime[0][1]
        newTime = `${splitTime[0]}:${splitTime[1]}`;
    }
    if (splitTime[1] === "00") {
        if (Number(splitTime[0]) <= 12) {
            newTime = `${splitTime[0]}am`
        } else {
            newTime = `${Number(splitTime[0]) - 12}pm`
        }

    } else {
        if (Number(splitTime[0]) <= 12) {
            newTime = `${splitTime[0]}:${splitTime[1]}am`
        } else {
            newTime = `${Number(splitTime[0]) - 12}:${splitTime[1]}pm`
        }
    }

    return newTime;
}
