export const getNotAvailableText = (): string => {
  return "N/A";
};

/**
 *
 * @param value the value to be cloned
 * @note will not work for objects containing functions
 */
export const cloneDeep = (value: Object): Object => {
  if (value) {
    return JSON.parse(JSON.stringify(value));
  }
};

export const isEmpty = (value: Object): boolean => {
  if (value) {
    return Object.keys(value).length <= 0;
  }
};

export const mergeDeep = (...objects): Object => {
  const isObject = (obj) => obj && typeof obj === "object";

  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach((key) => {
      const pVal = prev[key];
      const oVal = obj[key];

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = pVal.concat(...oVal);
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = mergeDeep(pVal, oVal);
      } else {
        prev[key] = oVal;
      }
    });

    return prev;
  }, {});
};

export const isNil = (value) => {
  return value == null;
};
