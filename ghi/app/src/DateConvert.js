function dateConvert(date) {
    const splitDate = date.split("-");
    return `${splitDate[1]}-${splitDate[2]}-${splitDate[0]}`;
}

export default dateConvert;
