import * as jsSHA from "jssha";

const defaultHashType = "SHA3-256";

export class HashService {
  static hash(input: any, length = 32, type = defaultHashType) {
    if (input && typeof input === "object") {
      input = JSON.stringify(input);
    }

    const shaObj = new jsSHA(type, "TEXT");
    shaObj.update(input);
    return shaObj.getHash("HEX").substring(0, length);
  }
}
