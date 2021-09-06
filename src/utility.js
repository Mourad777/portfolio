export const getWindowSizeInteger = windowWidth => {
    let widthInteger;
    if (windowWidth > 0 && windowWidth < 576) widthInteger = 1; //mobile
    if (windowWidth >= 576 && windowWidth < 1200) widthInteger = 2; //tablet
    if (windowWidth >= 1200 && windowWidth < 2560) widthInteger = 3; //desktop 1080
    if (windowWidth >= 2560 && windowWidth < 3840) widthInteger = 4; //2k
    if (windowWidth >= 3840) widthInteger = 5; //4k
    return widthInteger;
};
