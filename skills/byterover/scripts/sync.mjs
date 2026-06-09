#!/usr/bin/env node
import{createRequire as __cr}from'module';const require=__cr(import.meta.url);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../packages/core/src/render/element-types.ts
var ELEMENT_NAMES;
var init_element_types = __esm({
  "../../packages/core/src/render/element-types.ts"() {
    ELEMENT_NAMES = [
      "bv-topic",
      "bv-reason",
      "bv-task",
      "bv-changes",
      "bv-files",
      "bv-flow",
      "bv-timestamp",
      "bv-author",
      "bv-pattern",
      "bv-structure",
      "bv-dependencies",
      "bv-highlights",
      "bv-rule",
      "bv-examples",
      "bv-diagram",
      "bv-fact",
      "bv-decision",
      "bv-bug",
      "bv-fix"
    ];
  }
});

// ../../packages/core/src/render/elements/make-validator.ts
function makeAttributeValidator(tagName, schema2) {
  return (node) => {
    if (node.tagName !== tagName) {
      const errors = [
        {
          field: "tagName",
          message: `expected tagName "${tagName}", got "${node.tagName}"`
        }
      ];
      return { errors, valid: false };
    }
    const parsed = schema2.safeParse(node.attributes);
    if (!parsed.success) {
      const errors = parsed.error.issues.map((issue) => ({
        field: issue.path.join(".") || "attributes",
        message: issue.message
      }));
      return { errors, valid: false };
    }
    return { valid: true };
  };
}
var init_make_validator = __esm({
  "../../packages/core/src/render/elements/make-validator.ts"() {
  }
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js
var util, objectUtil, ZodParsedType, getParsedType;
var init_util = __esm({
  "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js"() {
    (function(util2) {
      util2.assertEqual = (_) => {
      };
      function assertIs(_arg) {
      }
      util2.assertIs = assertIs;
      function assertNever(_x) {
        throw new Error();
      }
      util2.assertNever = assertNever;
      util2.arrayToEnum = (items) => {
        const obj = {};
        for (const item of items) {
          obj[item] = item;
        }
        return obj;
      };
      util2.getValidEnumValues = (obj) => {
        const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys) {
          filtered[k] = obj[k];
        }
        return util2.objectValues(filtered);
      };
      util2.objectValues = (obj) => {
        return util2.objectKeys(obj).map(function(e) {
          return obj[e];
        });
      };
      util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
        const keys = [];
        for (const key in object) {
          if (Object.prototype.hasOwnProperty.call(object, key)) {
            keys.push(key);
          }
        }
        return keys;
      };
      util2.find = (arr, checker) => {
        for (const item of arr) {
          if (checker(item))
            return item;
        }
        return void 0;
      };
      util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
      function joinValues(array, separator = " | ") {
        return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
      }
      util2.joinValues = joinValues;
      util2.jsonStringifyReplacer = (_, value2) => {
        if (typeof value2 === "bigint") {
          return value2.toString();
        }
        return value2;
      };
    })(util || (util = {}));
    (function(objectUtil2) {
      objectUtil2.mergeShapes = (first, second) => {
        return {
          ...first,
          ...second
          // second overwrites first
        };
      };
    })(objectUtil || (objectUtil = {}));
    ZodParsedType = util.arrayToEnum([
      "string",
      "nan",
      "number",
      "integer",
      "float",
      "boolean",
      "date",
      "bigint",
      "symbol",
      "function",
      "undefined",
      "null",
      "array",
      "object",
      "unknown",
      "promise",
      "void",
      "never",
      "map",
      "set"
    ]);
    getParsedType = (data) => {
      const t = typeof data;
      switch (t) {
        case "undefined":
          return ZodParsedType.undefined;
        case "string":
          return ZodParsedType.string;
        case "number":
          return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
          return ZodParsedType.boolean;
        case "function":
          return ZodParsedType.function;
        case "bigint":
          return ZodParsedType.bigint;
        case "symbol":
          return ZodParsedType.symbol;
        case "object":
          if (Array.isArray(data)) {
            return ZodParsedType.array;
          }
          if (data === null) {
            return ZodParsedType.null;
          }
          if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
            return ZodParsedType.promise;
          }
          if (typeof Map !== "undefined" && data instanceof Map) {
            return ZodParsedType.map;
          }
          if (typeof Set !== "undefined" && data instanceof Set) {
            return ZodParsedType.set;
          }
          if (typeof Date !== "undefined" && data instanceof Date) {
            return ZodParsedType.date;
          }
          return ZodParsedType.object;
        default:
          return ZodParsedType.unknown;
      }
    };
  }
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js
var ZodIssueCode, quotelessJson, ZodError;
var init_ZodError = __esm({
  "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js"() {
    init_util();
    ZodIssueCode = util.arrayToEnum([
      "invalid_type",
      "invalid_literal",
      "custom",
      "invalid_union",
      "invalid_union_discriminator",
      "invalid_enum_value",
      "unrecognized_keys",
      "invalid_arguments",
      "invalid_return_type",
      "invalid_date",
      "invalid_string",
      "too_small",
      "too_big",
      "invalid_intersection_types",
      "not_multiple_of",
      "not_finite"
    ]);
    quotelessJson = (obj) => {
      const json2 = JSON.stringify(obj, null, 2);
      return json2.replace(/"([^"]+)":/g, "$1:");
    };
    ZodError = class _ZodError extends Error {
      get errors() {
        return this.issues;
      }
      constructor(issues) {
        super();
        this.issues = [];
        this.addIssue = (sub) => {
          this.issues = [...this.issues, sub];
        };
        this.addIssues = (subs = []) => {
          this.issues = [...this.issues, ...subs];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(this, actualProto);
        } else {
          this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
      }
      format(_mapper) {
        const mapper = _mapper || function(issue) {
          return issue.message;
        };
        const fieldErrors = { _errors: [] };
        const processError = (error) => {
          for (const issue of error.issues) {
            if (issue.code === "invalid_union") {
              issue.unionErrors.map(processError);
            } else if (issue.code === "invalid_return_type") {
              processError(issue.returnTypeError);
            } else if (issue.code === "invalid_arguments") {
              processError(issue.argumentsError);
            } else if (issue.path.length === 0) {
              fieldErrors._errors.push(mapper(issue));
            } else {
              let curr = fieldErrors;
              let i = 0;
              while (i < issue.path.length) {
                const el = issue.path[i];
                const terminal = i === issue.path.length - 1;
                if (!terminal) {
                  curr[el] = curr[el] || { _errors: [] };
                } else {
                  curr[el] = curr[el] || { _errors: [] };
                  curr[el]._errors.push(mapper(issue));
                }
                curr = curr[el];
                i++;
              }
            }
          }
        };
        processError(this);
        return fieldErrors;
      }
      static assert(value2) {
        if (!(value2 instanceof _ZodError)) {
          throw new Error(`Not a ZodError: ${value2}`);
        }
      }
      toString() {
        return this.message;
      }
      get message() {
        return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
        return this.issues.length === 0;
      }
      flatten(mapper = (issue) => issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues) {
          if (sub.path.length > 0) {
            const firstEl = sub.path[0];
            fieldErrors[firstEl] = fieldErrors[firstEl] || [];
            fieldErrors[firstEl].push(mapper(sub));
          } else {
            formErrors.push(mapper(sub));
          }
        }
        return { formErrors, fieldErrors };
      }
      get formErrors() {
        return this.flatten();
      }
    };
    ZodError.create = (issues) => {
      const error = new ZodError(issues);
      return error;
    };
  }
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js
var errorMap, en_default;
var init_en = __esm({
  "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js"() {
    init_ZodError();
    init_util();
    errorMap = (issue, _ctx) => {
      let message;
      switch (issue.code) {
        case ZodIssueCode.invalid_type:
          if (issue.received === ZodParsedType.undefined) {
            message = "Required";
          } else {
            message = `Expected ${issue.expected}, received ${issue.received}`;
          }
          break;
        case ZodIssueCode.invalid_literal:
          message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
          break;
        case ZodIssueCode.unrecognized_keys:
          message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
          break;
        case ZodIssueCode.invalid_union:
          message = `Invalid input`;
          break;
        case ZodIssueCode.invalid_union_discriminator:
          message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
          break;
        case ZodIssueCode.invalid_enum_value:
          message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
          break;
        case ZodIssueCode.invalid_arguments:
          message = `Invalid function arguments`;
          break;
        case ZodIssueCode.invalid_return_type:
          message = `Invalid function return type`;
          break;
        case ZodIssueCode.invalid_date:
          message = `Invalid date`;
          break;
        case ZodIssueCode.invalid_string:
          if (typeof issue.validation === "object") {
            if ("includes" in issue.validation) {
              message = `Invalid input: must include "${issue.validation.includes}"`;
              if (typeof issue.validation.position === "number") {
                message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
              }
            } else if ("startsWith" in issue.validation) {
              message = `Invalid input: must start with "${issue.validation.startsWith}"`;
            } else if ("endsWith" in issue.validation) {
              message = `Invalid input: must end with "${issue.validation.endsWith}"`;
            } else {
              util.assertNever(issue.validation);
            }
          } else if (issue.validation !== "regex") {
            message = `Invalid ${issue.validation}`;
          } else {
            message = "Invalid";
          }
          break;
        case ZodIssueCode.too_small:
          if (issue.type === "array")
            message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
          else if (issue.type === "string")
            message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
          else if (issue.type === "number")
            message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
          else if (issue.type === "bigint")
            message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
          else if (issue.type === "date")
            message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
          else
            message = "Invalid input";
          break;
        case ZodIssueCode.too_big:
          if (issue.type === "array")
            message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
          else if (issue.type === "string")
            message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
          else if (issue.type === "number")
            message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "bigint")
            message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "date")
            message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
          else
            message = "Invalid input";
          break;
        case ZodIssueCode.custom:
          message = `Invalid input`;
          break;
        case ZodIssueCode.invalid_intersection_types:
          message = `Intersection results could not be merged`;
          break;
        case ZodIssueCode.not_multiple_of:
          message = `Number must be a multiple of ${issue.multipleOf}`;
          break;
        case ZodIssueCode.not_finite:
          message = "Number must be finite";
          break;
        default:
          message = _ctx.defaultError;
          util.assertNever(issue);
      }
      return { message };
    };
    en_default = errorMap;
  }
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/errors.js
function setErrorMap(map2) {
  overrideErrorMap = map2;
}
function getErrorMap() {
  return overrideErrorMap;
}
var overrideErrorMap;
var init_errors = __esm({
  "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/errors.js"() {
    init_en();
    overrideErrorMap = en_default;
  }
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/parseUtil.js
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var makeIssue, EMPTY_PATH, ParseStatus, INVALID, DIRTY, OK, isAborted, isDirty, isValid, isAsync;
var init_parseUtil = __esm({
  "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/parseUtil.js"() {
    init_errors();
    init_en();
    makeIssue = (params) => {
      const { data, path, errorMaps, issueData } = params;
      const fullPath = [...path, ...issueData.path || []];
      const fullIssue = {
        ...issueData,
        path: fullPath
      };
      if (issueData.message !== void 0) {
        return {
          ...issueData,
          path: fullPath,
          message: issueData.message
        };
      }
      let errorMessage = "";
      const maps = errorMaps.filter((m) => !!m).slice().reverse();
      for (const map2 of maps) {
        errorMessage = map2(fullIssue, { data, defaultError: errorMessage }).message;
      }
      return {
        ...issueData,
        path: fullPath,
        message: errorMessage
      };
    };
    EMPTY_PATH = [];
    ParseStatus = class _ParseStatus {
      constructor() {
        this.value = "valid";
      }
      dirty() {
        if (this.value === "valid")
          this.value = "dirty";
      }
      abort() {
        if (this.value !== "aborted")
          this.value = "aborted";
      }
      static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results) {
          if (s.status === "aborted")
            return INVALID;
          if (s.status === "dirty")
            status.dirty();
          arrayValue.push(s.value);
        }
        return { status: status.value, value: arrayValue };
      }
      static async mergeObjectAsync(status, pairs2) {
        const syncPairs = [];
        for (const pair of pairs2) {
          const key = await pair.key;
          const value2 = await pair.value;
          syncPairs.push({
            key,
            value: value2
          });
        }
        return _ParseStatus.mergeObjectSync(status, syncPairs);
      }
      static mergeObjectSync(status, pairs2) {
        const finalObject = {};
        for (const pair of pairs2) {
          const { key, value: value2 } = pair;
          if (key.status === "aborted")
            return INVALID;
          if (value2.status === "aborted")
            return INVALID;
          if (key.status === "dirty")
            status.dirty();
          if (value2.status === "dirty")
            status.dirty();
          if (key.value !== "__proto__" && (typeof value2.value !== "undefined" || pair.alwaysSet)) {
            finalObject[key.value] = value2.value;
          }
        }
        return { status: status.value, value: finalObject };
      }
    };
    INVALID = Object.freeze({
      status: "aborted"
    });
    DIRTY = (value2) => ({ status: "dirty", value: value2 });
    OK = (value2) => ({ status: "valid", value: value2 });
    isAborted = (x) => x.status === "aborted";
    isDirty = (x) => x.status === "dirty";
    isValid = (x) => x.status === "valid";
    isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
  }
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/typeAliases.js
var init_typeAliases = __esm({
  "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/typeAliases.js"() {
  }
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
var init_errorUtil = __esm({
  "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/errorUtil.js"() {
    (function(errorUtil2) {
      errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
      errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
    })(errorUtil || (errorUtil = {}));
  }
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
function deepPartialify(schema2) {
  if (schema2 instanceof ZodObject) {
    const newShape = {};
    for (const key in schema2.shape) {
      const fieldSchema = schema2.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema2._def,
      shape: () => newShape
    });
  } else if (schema2 instanceof ZodArray) {
    return new ZodArray({
      ...schema2._def,
      type: deepPartialify(schema2.element)
    });
  } else if (schema2 instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema2.unwrap()));
  } else if (schema2 instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema2.unwrap()));
  } else if (schema2 instanceof ZodTuple) {
    return ZodTuple.create(schema2.items.map((item) => deepPartialify(item)));
  } else {
    return schema2;
  }
}
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var ParseInputLazyPath, handleResult, ZodType, cuidRegex, cuid2Regex, ulidRegex, uuidRegex, nanoidRegex, jwtRegex, durationRegex, emailRegex, _emojiRegex, emojiRegex, ipv4Regex, ipv4CidrRegex, ipv6Regex, ipv6CidrRegex, base64Regex, base64urlRegex, dateRegexSource, dateRegex, ZodString, ZodNumber, ZodBigInt, ZodBoolean, ZodDate, ZodSymbol, ZodUndefined, ZodNull, ZodAny, ZodUnknown, ZodNever, ZodVoid, ZodArray, ZodObject, ZodUnion, getDiscriminator, ZodDiscriminatedUnion, ZodIntersection, ZodTuple, ZodRecord, ZodMap, ZodSet, ZodFunction, ZodLazy, ZodLiteral, ZodEnum, ZodNativeEnum, ZodPromise, ZodEffects, ZodOptional, ZodNullable, ZodDefault, ZodCatch, ZodNaN, BRAND, ZodBranded, ZodPipeline, ZodReadonly, late, ZodFirstPartyTypeKind, instanceOfType, stringType, numberType, nanType, bigIntType, booleanType, dateType, symbolType, undefinedType, nullType, anyType, unknownType, neverType, voidType, arrayType, objectType, strictObjectType, unionType, discriminatedUnionType, intersectionType, tupleType, recordType, mapType, setType, functionType, lazyType, literalType, enumType, nativeEnumType, promiseType, effectsType, optionalType, nullableType, preprocessType, pipelineType, ostring, onumber, oboolean, coerce, NEVER;
var init_types = __esm({
  "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js"() {
    init_ZodError();
    init_errors();
    init_errorUtil();
    init_parseUtil();
    init_util();
    ParseInputLazyPath = class {
      constructor(parent, value2, path, key) {
        this._cachedPath = [];
        this.parent = parent;
        this.data = value2;
        this._path = path;
        this._key = key;
      }
      get path() {
        if (!this._cachedPath.length) {
          if (Array.isArray(this._key)) {
            this._cachedPath.push(...this._path, ...this._key);
          } else {
            this._cachedPath.push(...this._path, this._key);
          }
        }
        return this._cachedPath;
      }
    };
    handleResult = (ctx, result) => {
      if (isValid(result)) {
        return { success: true, data: result.value };
      } else {
        if (!ctx.common.issues.length) {
          throw new Error("Validation failed but no issues detected.");
        }
        return {
          success: false,
          get error() {
            if (this._error)
              return this._error;
            const error = new ZodError(ctx.common.issues);
            this._error = error;
            return this._error;
          }
        };
      }
    };
    ZodType = class {
      get description() {
        return this._def.description;
      }
      _getType(input) {
        return getParsedType(input.data);
      }
      _getOrReturnCtx(input, ctx) {
        return ctx || {
          common: input.parent.common,
          data: input.data,
          parsedType: getParsedType(input.data),
          schemaErrorMap: this._def.errorMap,
          path: input.path,
          parent: input.parent
        };
      }
      _processInputParams(input) {
        return {
          status: new ParseStatus(),
          ctx: {
            common: input.parent.common,
            data: input.data,
            parsedType: getParsedType(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
          }
        };
      }
      _parseSync(input) {
        const result = this._parse(input);
        if (isAsync(result)) {
          throw new Error("Synchronous parse encountered promise.");
        }
        return result;
      }
      _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
      }
      parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      safeParse(data, params) {
        const ctx = {
          common: {
            issues: [],
            async: params?.async ?? false,
            contextualErrorMap: params?.errorMap
          },
          path: params?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType(data)
        };
        const result = this._parseSync({ data, path: ctx.path, parent: ctx });
        return handleResult(ctx, result);
      }
      "~validate"(data) {
        const ctx = {
          common: {
            issues: [],
            async: !!this["~standard"].async
          },
          path: [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType(data)
        };
        if (!this["~standard"].async) {
          try {
            const result = this._parseSync({ data, path: [], parent: ctx });
            return isValid(result) ? {
              value: result.value
            } : {
              issues: ctx.common.issues
            };
          } catch (err) {
            if (err?.message?.toLowerCase()?.includes("encountered")) {
              this["~standard"].async = true;
            }
            ctx.common = {
              issues: [],
              async: true
            };
          }
        }
        return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        });
      }
      async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      async safeParseAsync(data, params) {
        const ctx = {
          common: {
            issues: [],
            contextualErrorMap: params?.errorMap,
            async: true
          },
          path: params?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: getParsedType(data)
        };
        const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
        const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
      }
      refine(check, message) {
        const getIssueProperties = (val) => {
          if (typeof message === "string" || typeof message === "undefined") {
            return { message };
          } else if (typeof message === "function") {
            return message(val);
          } else {
            return message;
          }
        };
        return this._refinement((val, ctx) => {
          const result = check(val);
          const setError = () => ctx.addIssue({
            code: ZodIssueCode.custom,
            ...getIssueProperties(val)
          });
          if (typeof Promise !== "undefined" && result instanceof Promise) {
            return result.then((data) => {
              if (!data) {
                setError();
                return false;
              } else {
                return true;
              }
            });
          }
          if (!result) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      refinement(check, refinementData) {
        return this._refinement((val, ctx) => {
          if (!check(val)) {
            ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
            return false;
          } else {
            return true;
          }
        });
      }
      _refinement(refinement) {
        return new ZodEffects({
          schema: this,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect: { type: "refinement", refinement }
        });
      }
      superRefine(refinement) {
        return this._refinement(refinement);
      }
      constructor(def) {
        this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
        this["~standard"] = {
          version: 1,
          vendor: "zod",
          validate: (data) => this["~validate"](data)
        };
      }
      optional() {
        return ZodOptional.create(this, this._def);
      }
      nullable() {
        return ZodNullable.create(this, this._def);
      }
      nullish() {
        return this.nullable().optional();
      }
      array() {
        return ZodArray.create(this);
      }
      promise() {
        return ZodPromise.create(this, this._def);
      }
      or(option) {
        return ZodUnion.create([this, option], this._def);
      }
      and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
      }
      transform(transform) {
        return new ZodEffects({
          ...processCreateParams(this._def),
          schema: this,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect: { type: "transform", transform }
        });
      }
      default(def) {
        const defaultValueFunc = typeof def === "function" ? def : () => def;
        return new ZodDefault({
          ...processCreateParams(this._def),
          innerType: this,
          defaultValue: defaultValueFunc,
          typeName: ZodFirstPartyTypeKind.ZodDefault
        });
      }
      brand() {
        return new ZodBranded({
          typeName: ZodFirstPartyTypeKind.ZodBranded,
          type: this,
          ...processCreateParams(this._def)
        });
      }
      catch(def) {
        const catchValueFunc = typeof def === "function" ? def : () => def;
        return new ZodCatch({
          ...processCreateParams(this._def),
          innerType: this,
          catchValue: catchValueFunc,
          typeName: ZodFirstPartyTypeKind.ZodCatch
        });
      }
      describe(description) {
        const This = this.constructor;
        return new This({
          ...this._def,
          description
        });
      }
      pipe(target) {
        return ZodPipeline.create(this, target);
      }
      readonly() {
        return ZodReadonly.create(this);
      }
      isOptional() {
        return this.safeParse(void 0).success;
      }
      isNullable() {
        return this.safeParse(null).success;
      }
    };
    cuidRegex = /^c[^\s-]{8,}$/i;
    cuid2Regex = /^[0-9a-z]+$/;
    ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
    uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
    nanoidRegex = /^[a-z0-9_-]{21}$/i;
    jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
    durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
    emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
    ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
    ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
    ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
    ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
    base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
    dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
    dateRegex = new RegExp(`^${dateRegexSource}$`);
    ZodString = class _ZodString extends ZodType {
      _parse(input) {
        if (this._def.coerce) {
          input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.string) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.string,
            received: ctx2.parsedType
          });
          return INVALID;
        }
        const status = new ParseStatus();
        let ctx = void 0;
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            if (input.data.length < check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: check.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            if (input.data.length > check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: check.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "length") {
            const tooBig = input.data.length > check.value;
            const tooSmall = input.data.length < check.value;
            if (tooBig || tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              if (tooBig) {
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_big,
                  maximum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check.message
                });
              } else if (tooSmall) {
                addIssueToContext(ctx, {
                  code: ZodIssueCode.too_small,
                  minimum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check.message
                });
              }
              status.dirty();
            }
          } else if (check.kind === "email") {
            if (!emailRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "email",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "emoji") {
            if (!emojiRegex) {
              emojiRegex = new RegExp(_emojiRegex, "u");
            }
            if (!emojiRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "emoji",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "uuid") {
            if (!uuidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "uuid",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "nanoid") {
            if (!nanoidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "nanoid",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cuid") {
            if (!cuidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "cuid",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cuid2") {
            if (!cuid2Regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "cuid2",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "ulid") {
            if (!ulidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "ulid",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "url") {
            try {
              new URL(input.data);
            } catch {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "url",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "regex") {
            check.regex.lastIndex = 0;
            const testResult = check.regex.test(input.data);
            if (!testResult) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "regex",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "trim") {
            input.data = input.data.trim();
          } else if (check.kind === "includes") {
            if (!input.data.includes(check.value, check.position)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: { includes: check.value, position: check.position },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "toLowerCase") {
            input.data = input.data.toLowerCase();
          } else if (check.kind === "toUpperCase") {
            input.data = input.data.toUpperCase();
          } else if (check.kind === "startsWith") {
            if (!input.data.startsWith(check.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: { startsWith: check.value },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "endsWith") {
            if (!input.data.endsWith(check.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: { endsWith: check.value },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "datetime") {
            const regex = datetimeRegex(check);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: "datetime",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "date") {
            const regex = dateRegex;
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: "date",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "time") {
            const regex = timeRegex(check);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_string,
                validation: "time",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "duration") {
            if (!durationRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "duration",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "ip") {
            if (!isValidIP(input.data, check.version)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "ip",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "jwt") {
            if (!isValidJWT(input.data, check.alg)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "jwt",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cidr") {
            if (!isValidCidr(input.data, check.version)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "cidr",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "base64") {
            if (!base64Regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "base64",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "base64url") {
            if (!base64urlRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                validation: "base64url",
                code: ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      _regex(regex, validation, message) {
        return this.refinement((data) => regex.test(data), {
          validation,
          code: ZodIssueCode.invalid_string,
          ...errorUtil.errToObj(message)
        });
      }
      _addCheck(check) {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      email(message) {
        return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
      }
      url(message) {
        return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
      }
      emoji(message) {
        return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
      }
      uuid(message) {
        return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
      }
      nanoid(message) {
        return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
      }
      cuid(message) {
        return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
      }
      cuid2(message) {
        return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
      }
      ulid(message) {
        return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
      }
      base64(message) {
        return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
      }
      base64url(message) {
        return this._addCheck({
          kind: "base64url",
          ...errorUtil.errToObj(message)
        });
      }
      jwt(options) {
        return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
      }
      ip(options) {
        return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
      }
      cidr(options) {
        return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
      }
      datetime(options) {
        if (typeof options === "string") {
          return this._addCheck({
            kind: "datetime",
            precision: null,
            offset: false,
            local: false,
            message: options
          });
        }
        return this._addCheck({
          kind: "datetime",
          precision: typeof options?.precision === "undefined" ? null : options?.precision,
          offset: options?.offset ?? false,
          local: options?.local ?? false,
          ...errorUtil.errToObj(options?.message)
        });
      }
      date(message) {
        return this._addCheck({ kind: "date", message });
      }
      time(options) {
        if (typeof options === "string") {
          return this._addCheck({
            kind: "time",
            precision: null,
            message: options
          });
        }
        return this._addCheck({
          kind: "time",
          precision: typeof options?.precision === "undefined" ? null : options?.precision,
          ...errorUtil.errToObj(options?.message)
        });
      }
      duration(message) {
        return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
      }
      regex(regex, message) {
        return this._addCheck({
          kind: "regex",
          regex,
          ...errorUtil.errToObj(message)
        });
      }
      includes(value2, options) {
        return this._addCheck({
          kind: "includes",
          value: value2,
          position: options?.position,
          ...errorUtil.errToObj(options?.message)
        });
      }
      startsWith(value2, message) {
        return this._addCheck({
          kind: "startsWith",
          value: value2,
          ...errorUtil.errToObj(message)
        });
      }
      endsWith(value2, message) {
        return this._addCheck({
          kind: "endsWith",
          value: value2,
          ...errorUtil.errToObj(message)
        });
      }
      min(minLength, message) {
        return this._addCheck({
          kind: "min",
          value: minLength,
          ...errorUtil.errToObj(message)
        });
      }
      max(maxLength, message) {
        return this._addCheck({
          kind: "max",
          value: maxLength,
          ...errorUtil.errToObj(message)
        });
      }
      length(len, message) {
        return this._addCheck({
          kind: "length",
          value: len,
          ...errorUtil.errToObj(message)
        });
      }
      /**
       * Equivalent to `.min(1)`
       */
      nonempty(message) {
        return this.min(1, errorUtil.errToObj(message));
      }
      trim() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "trim" }]
        });
      }
      toLowerCase() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toLowerCase" }]
        });
      }
      toUpperCase() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toUpperCase" }]
        });
      }
      get isDatetime() {
        return !!this._def.checks.find((ch) => ch.kind === "datetime");
      }
      get isDate() {
        return !!this._def.checks.find((ch) => ch.kind === "date");
      }
      get isTime() {
        return !!this._def.checks.find((ch) => ch.kind === "time");
      }
      get isDuration() {
        return !!this._def.checks.find((ch) => ch.kind === "duration");
      }
      get isEmail() {
        return !!this._def.checks.find((ch) => ch.kind === "email");
      }
      get isURL() {
        return !!this._def.checks.find((ch) => ch.kind === "url");
      }
      get isEmoji() {
        return !!this._def.checks.find((ch) => ch.kind === "emoji");
      }
      get isUUID() {
        return !!this._def.checks.find((ch) => ch.kind === "uuid");
      }
      get isNANOID() {
        return !!this._def.checks.find((ch) => ch.kind === "nanoid");
      }
      get isCUID() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid");
      }
      get isCUID2() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid2");
      }
      get isULID() {
        return !!this._def.checks.find((ch) => ch.kind === "ulid");
      }
      get isIP() {
        return !!this._def.checks.find((ch) => ch.kind === "ip");
      }
      get isCIDR() {
        return !!this._def.checks.find((ch) => ch.kind === "cidr");
      }
      get isBase64() {
        return !!this._def.checks.find((ch) => ch.kind === "base64");
      }
      get isBase64url() {
        return !!this._def.checks.find((ch) => ch.kind === "base64url");
      }
      get minLength() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxLength() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
    };
    ZodString.create = (params) => {
      return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: params?.coerce ?? false,
        ...processCreateParams(params)
      });
    };
    ZodNumber = class _ZodNumber extends ZodType {
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
      }
      _parse(input) {
        if (this._def.coerce) {
          input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.number) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.number,
            received: ctx2.parsedType
          });
          return INVALID;
        }
        let ctx = void 0;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
          if (check.kind === "int") {
            if (!util.isInteger(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: "integer",
                received: "float",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "min") {
            const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: check.value,
                type: "number",
                inclusive: check.inclusive,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: check.value,
                type: "number",
                inclusive: check.inclusive,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "multipleOf") {
            if (floatSafeRemainder(input.data, check.value) !== 0) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.not_multiple_of,
                multipleOf: check.value,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "finite") {
            if (!Number.isFinite(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.not_finite,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      gte(value2, message) {
        return this.setLimit("min", value2, true, errorUtil.toString(message));
      }
      gt(value2, message) {
        return this.setLimit("min", value2, false, errorUtil.toString(message));
      }
      lte(value2, message) {
        return this.setLimit("max", value2, true, errorUtil.toString(message));
      }
      lt(value2, message) {
        return this.setLimit("max", value2, false, errorUtil.toString(message));
      }
      setLimit(kind, value2, inclusive, message) {
        return new _ZodNumber({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value: value2,
              inclusive,
              message: errorUtil.toString(message)
            }
          ]
        });
      }
      _addCheck(check) {
        return new _ZodNumber({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      int(message) {
        return this._addCheck({
          kind: "int",
          message: errorUtil.toString(message)
        });
      }
      positive(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
      negative(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
      nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
      nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
      multipleOf(value2, message) {
        return this._addCheck({
          kind: "multipleOf",
          value: value2,
          message: errorUtil.toString(message)
        });
      }
      finite(message) {
        return this._addCheck({
          kind: "finite",
          message: errorUtil.toString(message)
        });
      }
      safe(message) {
        return this._addCheck({
          kind: "min",
          inclusive: true,
          value: Number.MIN_SAFE_INTEGER,
          message: errorUtil.toString(message)
        })._addCheck({
          kind: "max",
          inclusive: true,
          value: Number.MAX_SAFE_INTEGER,
          message: errorUtil.toString(message)
        });
      }
      get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
      get isInt() {
        return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
      }
      get isFinite() {
        let max = null;
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
            return true;
          } else if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          } else if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return Number.isFinite(min) && Number.isFinite(max);
      }
    };
    ZodNumber.create = (params) => {
      return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: params?.coerce || false,
        ...processCreateParams(params)
      });
    };
    ZodBigInt = class _ZodBigInt extends ZodType {
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
      }
      _parse(input) {
        if (this._def.coerce) {
          try {
            input.data = BigInt(input.data);
          } catch {
            return this._getInvalidInput(input);
          }
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.bigint) {
          return this._getInvalidInput(input);
        }
        let ctx = void 0;
        const status = new ParseStatus();
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                type: "bigint",
                minimum: check.value,
                inclusive: check.inclusive,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                type: "bigint",
                maximum: check.value,
                inclusive: check.inclusive,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "multipleOf") {
            if (input.data % check.value !== BigInt(0)) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.not_multiple_of,
                multipleOf: check.value,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      _getInvalidInput(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.bigint,
          received: ctx.parsedType
        });
        return INVALID;
      }
      gte(value2, message) {
        return this.setLimit("min", value2, true, errorUtil.toString(message));
      }
      gt(value2, message) {
        return this.setLimit("min", value2, false, errorUtil.toString(message));
      }
      lte(value2, message) {
        return this.setLimit("max", value2, true, errorUtil.toString(message));
      }
      lt(value2, message) {
        return this.setLimit("max", value2, false, errorUtil.toString(message));
      }
      setLimit(kind, value2, inclusive, message) {
        return new _ZodBigInt({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value: value2,
              inclusive,
              message: errorUtil.toString(message)
            }
          ]
        });
      }
      _addCheck(check) {
        return new _ZodBigInt({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      positive(message) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
      negative(message) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil.toString(message)
        });
      }
      nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
      nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil.toString(message)
        });
      }
      multipleOf(value2, message) {
        return this._addCheck({
          kind: "multipleOf",
          value: value2,
          message: errorUtil.toString(message)
        });
      }
      get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
    };
    ZodBigInt.create = (params) => {
      return new ZodBigInt({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: params?.coerce ?? false,
        ...processCreateParams(params)
      });
    };
    ZodBoolean = class extends ZodType {
      _parse(input) {
        if (this._def.coerce) {
          input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.boolean) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.boolean,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodBoolean.create = (params) => {
      return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: params?.coerce || false,
        ...processCreateParams(params)
      });
    };
    ZodDate = class _ZodDate extends ZodType {
      _parse(input) {
        if (this._def.coerce) {
          input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.date) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.date,
            received: ctx2.parsedType
          });
          return INVALID;
        }
        if (Number.isNaN(input.data.getTime())) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_date
          });
          return INVALID;
        }
        const status = new ParseStatus();
        let ctx = void 0;
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            if (input.data.getTime() < check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                message: check.message,
                inclusive: true,
                exact: false,
                minimum: check.value,
                type: "date"
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            if (input.data.getTime() > check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                message: check.message,
                inclusive: true,
                exact: false,
                maximum: check.value,
                type: "date"
              });
              status.dirty();
            }
          } else {
            util.assertNever(check);
          }
        }
        return {
          status: status.value,
          value: new Date(input.data.getTime())
        };
      }
      _addCheck(check) {
        return new _ZodDate({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      min(minDate, message) {
        return this._addCheck({
          kind: "min",
          value: minDate.getTime(),
          message: errorUtil.toString(message)
        });
      }
      max(maxDate, message) {
        return this._addCheck({
          kind: "max",
          value: maxDate.getTime(),
          message: errorUtil.toString(message)
        });
      }
      get minDate() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min != null ? new Date(min) : null;
      }
      get maxDate() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max != null ? new Date(max) : null;
      }
    };
    ZodDate.create = (params) => {
      return new ZodDate({
        checks: [],
        coerce: params?.coerce || false,
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params)
      });
    };
    ZodSymbol = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.symbol) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.symbol,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodSymbol.create = (params) => {
      return new ZodSymbol({
        typeName: ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params)
      });
    };
    ZodUndefined = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.undefined,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodUndefined.create = (params) => {
      return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params)
      });
    };
    ZodNull = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.null) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.null,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodNull.create = (params) => {
      return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params)
      });
    };
    ZodAny = class extends ZodType {
      constructor() {
        super(...arguments);
        this._any = true;
      }
      _parse(input) {
        return OK(input.data);
      }
    };
    ZodAny.create = (params) => {
      return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params)
      });
    };
    ZodUnknown = class extends ZodType {
      constructor() {
        super(...arguments);
        this._unknown = true;
      }
      _parse(input) {
        return OK(input.data);
      }
    };
    ZodUnknown.create = (params) => {
      return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params)
      });
    };
    ZodNever = class extends ZodType {
      _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.never,
          received: ctx.parsedType
        });
        return INVALID;
      }
    };
    ZodNever.create = (params) => {
      return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params)
      });
    };
    ZodVoid = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.void,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return OK(input.data);
      }
    };
    ZodVoid.create = (params) => {
      return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params)
      });
    };
    ZodArray = class _ZodArray extends ZodType {
      _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== ZodParsedType.array) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.array,
            received: ctx.parsedType
          });
          return INVALID;
        }
        if (def.exactLength !== null) {
          const tooBig = ctx.data.length > def.exactLength.value;
          const tooSmall = ctx.data.length < def.exactLength.value;
          if (tooBig || tooSmall) {
            addIssueToContext(ctx, {
              code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
              minimum: tooSmall ? def.exactLength.value : void 0,
              maximum: tooBig ? def.exactLength.value : void 0,
              type: "array",
              inclusive: true,
              exact: true,
              message: def.exactLength.message
            });
            status.dirty();
          }
        }
        if (def.minLength !== null) {
          if (ctx.data.length < def.minLength.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: def.minLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.minLength.message
            });
            status.dirty();
          }
        }
        if (def.maxLength !== null) {
          if (ctx.data.length > def.maxLength.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: def.maxLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.maxLength.message
            });
            status.dirty();
          }
        }
        if (ctx.common.async) {
          return Promise.all([...ctx.data].map((item, i) => {
            return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
          })).then((result2) => {
            return ParseStatus.mergeArray(status, result2);
          });
        }
        const result = [...ctx.data].map((item, i) => {
          return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return ParseStatus.mergeArray(status, result);
      }
      get element() {
        return this._def.type;
      }
      min(minLength, message) {
        return new _ZodArray({
          ...this._def,
          minLength: { value: minLength, message: errorUtil.toString(message) }
        });
      }
      max(maxLength, message) {
        return new _ZodArray({
          ...this._def,
          maxLength: { value: maxLength, message: errorUtil.toString(message) }
        });
      }
      length(len, message) {
        return new _ZodArray({
          ...this._def,
          exactLength: { value: len, message: errorUtil.toString(message) }
        });
      }
      nonempty(message) {
        return this.min(1, message);
      }
    };
    ZodArray.create = (schema2, params) => {
      return new ZodArray({
        type: schema2,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params)
      });
    };
    ZodObject = class _ZodObject extends ZodType {
      constructor() {
        super(...arguments);
        this._cached = null;
        this.nonstrict = this.passthrough;
        this.augment = this.extend;
      }
      _getCached() {
        if (this._cached !== null)
          return this._cached;
        const shape = this._def.shape();
        const keys = util.objectKeys(shape);
        this._cached = { shape, keys };
        return this._cached;
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.object) {
          const ctx2 = this._getOrReturnCtx(input);
          addIssueToContext(ctx2, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.object,
            received: ctx2.parsedType
          });
          return INVALID;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
          for (const key in ctx.data) {
            if (!shapeKeys.includes(key)) {
              extraKeys.push(key);
            }
          }
        }
        const pairs2 = [];
        for (const key of shapeKeys) {
          const keyValidator = shape[key];
          const value2 = ctx.data[key];
          pairs2.push({
            key: { status: "valid", value: key },
            value: keyValidator._parse(new ParseInputLazyPath(ctx, value2, ctx.path, key)),
            alwaysSet: key in ctx.data
          });
        }
        if (this._def.catchall instanceof ZodNever) {
          const unknownKeys = this._def.unknownKeys;
          if (unknownKeys === "passthrough") {
            for (const key of extraKeys) {
              pairs2.push({
                key: { status: "valid", value: key },
                value: { status: "valid", value: ctx.data[key] }
              });
            }
          } else if (unknownKeys === "strict") {
            if (extraKeys.length > 0) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.unrecognized_keys,
                keys: extraKeys
              });
              status.dirty();
            }
          } else if (unknownKeys === "strip") {
          } else {
            throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
          }
        } else {
          const catchall = this._def.catchall;
          for (const key of extraKeys) {
            const value2 = ctx.data[key];
            pairs2.push({
              key: { status: "valid", value: key },
              value: catchall._parse(
                new ParseInputLazyPath(ctx, value2, ctx.path, key)
                //, ctx.child(key), value, getParsedType(value)
              ),
              alwaysSet: key in ctx.data
            });
          }
        }
        if (ctx.common.async) {
          return Promise.resolve().then(async () => {
            const syncPairs = [];
            for (const pair of pairs2) {
              const key = await pair.key;
              const value2 = await pair.value;
              syncPairs.push({
                key,
                value: value2,
                alwaysSet: pair.alwaysSet
              });
            }
            return syncPairs;
          }).then((syncPairs) => {
            return ParseStatus.mergeObjectSync(status, syncPairs);
          });
        } else {
          return ParseStatus.mergeObjectSync(status, pairs2);
        }
      }
      get shape() {
        return this._def.shape();
      }
      strict(message) {
        errorUtil.errToObj;
        return new _ZodObject({
          ...this._def,
          unknownKeys: "strict",
          ...message !== void 0 ? {
            errorMap: (issue, ctx) => {
              const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
              if (issue.code === "unrecognized_keys")
                return {
                  message: errorUtil.errToObj(message).message ?? defaultError
                };
              return {
                message: defaultError
              };
            }
          } : {}
        });
      }
      strip() {
        return new _ZodObject({
          ...this._def,
          unknownKeys: "strip"
        });
      }
      passthrough() {
        return new _ZodObject({
          ...this._def,
          unknownKeys: "passthrough"
        });
      }
      // const AugmentFactory =
      //   <Def extends ZodObjectDef>(def: Def) =>
      //   <Augmentation extends ZodRawShape>(
      //     augmentation: Augmentation
      //   ): ZodObject<
      //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
      //     Def["unknownKeys"],
      //     Def["catchall"]
      //   > => {
      //     return new ZodObject({
      //       ...def,
      //       shape: () => ({
      //         ...def.shape(),
      //         ...augmentation,
      //       }),
      //     }) as any;
      //   };
      extend(augmentation) {
        return new _ZodObject({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...augmentation
          })
        });
      }
      /**
       * Prior to zod@1.0.12 there was a bug in the
       * inferred type of merged objects. Please
       * upgrade if you are experiencing issues.
       */
      merge(merging) {
        const merged = new _ZodObject({
          unknownKeys: merging._def.unknownKeys,
          catchall: merging._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...merging._def.shape()
          }),
          typeName: ZodFirstPartyTypeKind.ZodObject
        });
        return merged;
      }
      // merge<
      //   Incoming extends AnyZodObject,
      //   Augmentation extends Incoming["shape"],
      //   NewOutput extends {
      //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
      //       ? Augmentation[k]["_output"]
      //       : k extends keyof Output
      //       ? Output[k]
      //       : never;
      //   },
      //   NewInput extends {
      //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
      //       ? Augmentation[k]["_input"]
      //       : k extends keyof Input
      //       ? Input[k]
      //       : never;
      //   }
      // >(
      //   merging: Incoming
      // ): ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"],
      //   NewOutput,
      //   NewInput
      // > {
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      setKey(key, schema2) {
        return this.augment({ [key]: schema2 });
      }
      // merge<Incoming extends AnyZodObject>(
      //   merging: Incoming
      // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
      // ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"]
      // > {
      //   // const mergedShape = objectUtil.mergeShapes(
      //   //   this._def.shape(),
      //   //   merging._def.shape()
      //   // );
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      catchall(index) {
        return new _ZodObject({
          ...this._def,
          catchall: index
        });
      }
      pick(mask) {
        const shape = {};
        for (const key of util.objectKeys(mask)) {
          if (mask[key] && this.shape[key]) {
            shape[key] = this.shape[key];
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => shape
        });
      }
      omit(mask) {
        const shape = {};
        for (const key of util.objectKeys(this.shape)) {
          if (!mask[key]) {
            shape[key] = this.shape[key];
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => shape
        });
      }
      /**
       * @deprecated
       */
      deepPartial() {
        return deepPartialify(this);
      }
      partial(mask) {
        const newShape = {};
        for (const key of util.objectKeys(this.shape)) {
          const fieldSchema = this.shape[key];
          if (mask && !mask[key]) {
            newShape[key] = fieldSchema;
          } else {
            newShape[key] = fieldSchema.optional();
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => newShape
        });
      }
      required(mask) {
        const newShape = {};
        for (const key of util.objectKeys(this.shape)) {
          if (mask && !mask[key]) {
            newShape[key] = this.shape[key];
          } else {
            const fieldSchema = this.shape[key];
            let newField = fieldSchema;
            while (newField instanceof ZodOptional) {
              newField = newField._def.innerType;
            }
            newShape[key] = newField;
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => newShape
        });
      }
      keyof() {
        return createZodEnum(util.objectKeys(this.shape));
      }
    };
    ZodObject.create = (shape, params) => {
      return new ZodObject({
        shape: () => shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    ZodObject.strictCreate = (shape, params) => {
      return new ZodObject({
        shape: () => shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    ZodObject.lazycreate = (shape, params) => {
      return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    ZodUnion = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
          for (const result of results) {
            if (result.result.status === "valid") {
              return result.result;
            }
          }
          for (const result of results) {
            if (result.result.status === "dirty") {
              ctx.common.issues.push(...result.ctx.common.issues);
              return result.result;
            }
          }
          const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_union,
            unionErrors
          });
          return INVALID;
        }
        if (ctx.common.async) {
          return Promise.all(options.map(async (option) => {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            return {
              result: await option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: childCtx
              }),
              ctx: childCtx
            };
          })).then(handleResults);
        } else {
          let dirty = void 0;
          const issues = [];
          for (const option of options) {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            const result = option._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx
            });
            if (result.status === "valid") {
              return result;
            } else if (result.status === "dirty" && !dirty) {
              dirty = { result, ctx: childCtx };
            }
            if (childCtx.common.issues.length) {
              issues.push(childCtx.common.issues);
            }
          }
          if (dirty) {
            ctx.common.issues.push(...dirty.ctx.common.issues);
            return dirty.result;
          }
          const unionErrors = issues.map((issues2) => new ZodError(issues2));
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_union,
            unionErrors
          });
          return INVALID;
        }
      }
      get options() {
        return this._def.options;
      }
    };
    ZodUnion.create = (types, params) => {
      return new ZodUnion({
        options: types,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params)
      });
    };
    getDiscriminator = (type2) => {
      if (type2 instanceof ZodLazy) {
        return getDiscriminator(type2.schema);
      } else if (type2 instanceof ZodEffects) {
        return getDiscriminator(type2.innerType());
      } else if (type2 instanceof ZodLiteral) {
        return [type2.value];
      } else if (type2 instanceof ZodEnum) {
        return type2.options;
      } else if (type2 instanceof ZodNativeEnum) {
        return util.objectValues(type2.enum);
      } else if (type2 instanceof ZodDefault) {
        return getDiscriminator(type2._def.innerType);
      } else if (type2 instanceof ZodUndefined) {
        return [void 0];
      } else if (type2 instanceof ZodNull) {
        return [null];
      } else if (type2 instanceof ZodOptional) {
        return [void 0, ...getDiscriminator(type2.unwrap())];
      } else if (type2 instanceof ZodNullable) {
        return [null, ...getDiscriminator(type2.unwrap())];
      } else if (type2 instanceof ZodBranded) {
        return getDiscriminator(type2.unwrap());
      } else if (type2 instanceof ZodReadonly) {
        return getDiscriminator(type2.unwrap());
      } else if (type2 instanceof ZodCatch) {
        return getDiscriminator(type2._def.innerType);
      } else {
        return [];
      }
    };
    ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.object,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [discriminator]
          });
          return INVALID;
        }
        if (ctx.common.async) {
          return option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        } else {
          return option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        }
      }
      get discriminator() {
        return this._def.discriminator;
      }
      get options() {
        return this._def.options;
      }
      get optionsMap() {
        return this._def.optionsMap;
      }
      /**
       * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
       * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
       * have a different value for each object in the union.
       * @param discriminator the name of the discriminator property
       * @param types an array of object schemas
       * @param params
       */
      static create(discriminator, options, params) {
        const optionsMap = /* @__PURE__ */ new Map();
        for (const type2 of options) {
          const discriminatorValues = getDiscriminator(type2.shape[discriminator]);
          if (!discriminatorValues.length) {
            throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
          }
          for (const value2 of discriminatorValues) {
            if (optionsMap.has(value2)) {
              throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value2)}`);
            }
            optionsMap.set(value2, type2);
          }
        }
        return new _ZodDiscriminatedUnion({
          typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
          discriminator,
          options,
          optionsMap,
          ...processCreateParams(params)
        });
      }
    };
    ZodIntersection = class extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight) => {
          if (isAborted(parsedLeft) || isAborted(parsedRight)) {
            return INVALID;
          }
          const merged = mergeValues(parsedLeft.value, parsedRight.value);
          if (!merged.valid) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_intersection_types
            });
            return INVALID;
          }
          if (isDirty(parsedLeft) || isDirty(parsedRight)) {
            status.dirty();
          }
          return { status: status.value, value: merged.data };
        };
        if (ctx.common.async) {
          return Promise.all([
            this._def.left._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            }),
            this._def.right._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            })
          ]).then(([left, right]) => handleParsed(left, right));
        } else {
          return handleParsed(this._def.left._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }), this._def.right._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }));
        }
      }
    };
    ZodIntersection.create = (left, right, params) => {
      return new ZodIntersection({
        left,
        right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params)
      });
    };
    ZodTuple = class _ZodTuple extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.array) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.array,
            received: ctx.parsedType
          });
          return INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          return INVALID;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          status.dirty();
        }
        const items = [...ctx.data].map((item, itemIndex) => {
          const schema2 = this._def.items[itemIndex] || this._def.rest;
          if (!schema2)
            return null;
          return schema2._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        }).filter((x) => !!x);
        if (ctx.common.async) {
          return Promise.all(items).then((results) => {
            return ParseStatus.mergeArray(status, results);
          });
        } else {
          return ParseStatus.mergeArray(status, items);
        }
      }
      get items() {
        return this._def.items;
      }
      rest(rest) {
        return new _ZodTuple({
          ...this._def,
          rest
        });
      }
    };
    ZodTuple.create = (schemas, params) => {
      if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      }
      return new ZodTuple({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params)
      });
    };
    ZodRecord = class _ZodRecord extends ZodType {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.object,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const pairs2 = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for (const key in ctx.data) {
          pairs2.push({
            key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
            value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
            alwaysSet: key in ctx.data
          });
        }
        if (ctx.common.async) {
          return ParseStatus.mergeObjectAsync(status, pairs2);
        } else {
          return ParseStatus.mergeObjectSync(status, pairs2);
        }
      }
      get element() {
        return this._def.valueType;
      }
      static create(first, second, third) {
        if (second instanceof ZodType) {
          return new _ZodRecord({
            keyType: first,
            valueType: second,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(third)
          });
        }
        return new _ZodRecord({
          keyType: ZodString.create(),
          valueType: first,
          typeName: ZodFirstPartyTypeKind.ZodRecord,
          ...processCreateParams(second)
        });
      }
    };
    ZodMap = class extends ZodType {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.map) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.map,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs2 = [...ctx.data.entries()].map(([key, value2], index) => {
          return {
            key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
            value: valueType._parse(new ParseInputLazyPath(ctx, value2, ctx.path, [index, "value"]))
          };
        });
        if (ctx.common.async) {
          const finalMap = /* @__PURE__ */ new Map();
          return Promise.resolve().then(async () => {
            for (const pair of pairs2) {
              const key = await pair.key;
              const value2 = await pair.value;
              if (key.status === "aborted" || value2.status === "aborted") {
                return INVALID;
              }
              if (key.status === "dirty" || value2.status === "dirty") {
                status.dirty();
              }
              finalMap.set(key.value, value2.value);
            }
            return { status: status.value, value: finalMap };
          });
        } else {
          const finalMap = /* @__PURE__ */ new Map();
          for (const pair of pairs2) {
            const key = pair.key;
            const value2 = pair.value;
            if (key.status === "aborted" || value2.status === "aborted") {
              return INVALID;
            }
            if (key.status === "dirty" || value2.status === "dirty") {
              status.dirty();
            }
            finalMap.set(key.value, value2.value);
          }
          return { status: status.value, value: finalMap };
        }
      }
    };
    ZodMap.create = (keyType, valueType, params) => {
      return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params)
      });
    };
    ZodSet = class _ZodSet extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.set) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.set,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const def = this._def;
        if (def.minSize !== null) {
          if (ctx.data.size < def.minSize.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: def.minSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.minSize.message
            });
            status.dirty();
          }
        }
        if (def.maxSize !== null) {
          if (ctx.data.size > def.maxSize.value) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: def.maxSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.maxSize.message
            });
            status.dirty();
          }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements2) {
          const parsedSet = /* @__PURE__ */ new Set();
          for (const element of elements2) {
            if (element.status === "aborted")
              return INVALID;
            if (element.status === "dirty")
              status.dirty();
            parsedSet.add(element.value);
          }
          return { status: status.value, value: parsedSet };
        }
        const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
          return Promise.all(elements).then((elements2) => finalizeSet(elements2));
        } else {
          return finalizeSet(elements);
        }
      }
      min(minSize, message) {
        return new _ZodSet({
          ...this._def,
          minSize: { value: minSize, message: errorUtil.toString(message) }
        });
      }
      max(maxSize, message) {
        return new _ZodSet({
          ...this._def,
          maxSize: { value: maxSize, message: errorUtil.toString(message) }
        });
      }
      size(size, message) {
        return this.min(size, message).max(size, message);
      }
      nonempty(message) {
        return this.min(1, message);
      }
    };
    ZodSet.create = (valueType, params) => {
      return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params)
      });
    };
    ZodFunction = class _ZodFunction extends ZodType {
      constructor() {
        super(...arguments);
        this.validate = this.implement;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.function) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.function,
            received: ctx.parsedType
          });
          return INVALID;
        }
        function makeArgsIssue(args, error) {
          return makeIssue({
            data: args,
            path: ctx.path,
            errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
            issueData: {
              code: ZodIssueCode.invalid_arguments,
              argumentsError: error
            }
          });
        }
        function makeReturnsIssue(returns, error) {
          return makeIssue({
            data: returns,
            path: ctx.path,
            errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
            issueData: {
              code: ZodIssueCode.invalid_return_type,
              returnTypeError: error
            }
          });
        }
        const params = { errorMap: ctx.common.contextualErrorMap };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
          const me = this;
          return OK(async function(...args) {
            const error = new ZodError([]);
            const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
              error.addIssue(makeArgsIssue(args, e));
              throw error;
            });
            const result = await Reflect.apply(fn, this, parsedArgs);
            const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
              error.addIssue(makeReturnsIssue(result, e));
              throw error;
            });
            return parsedReturns;
          });
        } else {
          const me = this;
          return OK(function(...args) {
            const parsedArgs = me._def.args.safeParse(args, params);
            if (!parsedArgs.success) {
              throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
            }
            const result = Reflect.apply(fn, this, parsedArgs.data);
            const parsedReturns = me._def.returns.safeParse(result, params);
            if (!parsedReturns.success) {
              throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
            }
            return parsedReturns.data;
          });
        }
      }
      parameters() {
        return this._def.args;
      }
      returnType() {
        return this._def.returns;
      }
      args(...items) {
        return new _ZodFunction({
          ...this._def,
          args: ZodTuple.create(items).rest(ZodUnknown.create())
        });
      }
      returns(returnType) {
        return new _ZodFunction({
          ...this._def,
          returns: returnType
        });
      }
      implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      static create(args, returns, params) {
        return new _ZodFunction({
          args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
          returns: returns || ZodUnknown.create(),
          typeName: ZodFirstPartyTypeKind.ZodFunction,
          ...processCreateParams(params)
        });
      }
    };
    ZodLazy = class extends ZodType {
      get schema() {
        return this._def.getter();
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
      }
    };
    ZodLazy.create = (getter, params) => {
      return new ZodLazy({
        getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params)
      });
    };
    ZodLiteral = class extends ZodType {
      _parse(input) {
        if (input.data !== this._def.value) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            received: ctx.data,
            code: ZodIssueCode.invalid_literal,
            expected: this._def.value
          });
          return INVALID;
        }
        return { status: "valid", value: input.data };
      }
      get value() {
        return this._def.value;
      }
    };
    ZodLiteral.create = (value2, params) => {
      return new ZodLiteral({
        value: value2,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params)
      });
    };
    ZodEnum = class _ZodEnum extends ZodType {
      _parse(input) {
        if (typeof input.data !== "string") {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          addIssueToContext(ctx, {
            expected: util.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodIssueCode.invalid_type
          });
          return INVALID;
        }
        if (!this._cache) {
          this._cache = new Set(this._def.values);
        }
        if (!this._cache.has(input.data)) {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          addIssueToContext(ctx, {
            received: ctx.data,
            code: ZodIssueCode.invalid_enum_value,
            options: expectedValues
          });
          return INVALID;
        }
        return OK(input.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Values() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      extract(values, newDef = this._def) {
        return _ZodEnum.create(values, {
          ...this._def,
          ...newDef
        });
      }
      exclude(values, newDef = this._def) {
        return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
          ...this._def,
          ...newDef
        });
      }
    };
    ZodEnum.create = createZodEnum;
    ZodNativeEnum = class extends ZodType {
      _parse(input) {
        const nativeEnumValues = util.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
          const expectedValues = util.objectValues(nativeEnumValues);
          addIssueToContext(ctx, {
            expected: util.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodIssueCode.invalid_type
          });
          return INVALID;
        }
        if (!this._cache) {
          this._cache = new Set(util.getValidEnumValues(this._def.values));
        }
        if (!this._cache.has(input.data)) {
          const expectedValues = util.objectValues(nativeEnumValues);
          addIssueToContext(ctx, {
            received: ctx.data,
            code: ZodIssueCode.invalid_enum_value,
            options: expectedValues
          });
          return INVALID;
        }
        return OK(input.data);
      }
      get enum() {
        return this._def.values;
      }
    };
    ZodNativeEnum.create = (values, params) => {
      return new ZodNativeEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params)
      });
    };
    ZodPromise = class extends ZodType {
      unwrap() {
        return this._def.type;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.promise,
            received: ctx.parsedType
          });
          return INVALID;
        }
        const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
        return OK(promisified.then((data) => {
          return this._def.type.parseAsync(data, {
            path: ctx.path,
            errorMap: ctx.common.contextualErrorMap
          });
        }));
      }
    };
    ZodPromise.create = (schema2, params) => {
      return new ZodPromise({
        type: schema2,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params)
      });
    };
    ZodEffects = class extends ZodType {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
          addIssue: (arg) => {
            addIssueToContext(ctx, arg);
            if (arg.fatal) {
              status.abort();
            } else {
              status.dirty();
            }
          },
          get path() {
            return ctx.path;
          }
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
          const processed = effect.transform(ctx.data, checkCtx);
          if (ctx.common.async) {
            return Promise.resolve(processed).then(async (processed2) => {
              if (status.value === "aborted")
                return INVALID;
              const result = await this._def.schema._parseAsync({
                data: processed2,
                path: ctx.path,
                parent: ctx
              });
              if (result.status === "aborted")
                return INVALID;
              if (result.status === "dirty")
                return DIRTY(result.value);
              if (status.value === "dirty")
                return DIRTY(result.value);
              return result;
            });
          } else {
            if (status.value === "aborted")
              return INVALID;
            const result = this._def.schema._parseSync({
              data: processed,
              path: ctx.path,
              parent: ctx
            });
            if (result.status === "aborted")
              return INVALID;
            if (result.status === "dirty")
              return DIRTY(result.value);
            if (status.value === "dirty")
              return DIRTY(result.value);
            return result;
          }
        }
        if (effect.type === "refinement") {
          const executeRefinement = (acc) => {
            const result = effect.refinement(acc, checkCtx);
            if (ctx.common.async) {
              return Promise.resolve(result);
            }
            if (result instanceof Promise) {
              throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            }
            return acc;
          };
          if (ctx.common.async === false) {
            const inner = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inner.status === "aborted")
              return INVALID;
            if (inner.status === "dirty")
              status.dirty();
            executeRefinement(inner.value);
            return { status: status.value, value: inner.value };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
              if (inner.status === "aborted")
                return INVALID;
              if (inner.status === "dirty")
                status.dirty();
              return executeRefinement(inner.value).then(() => {
                return { status: status.value, value: inner.value };
              });
            });
          }
        }
        if (effect.type === "transform") {
          if (ctx.common.async === false) {
            const base = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (!isValid(base))
              return INVALID;
            const result = effect.transform(base.value, checkCtx);
            if (result instanceof Promise) {
              throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
            }
            return { status: status.value, value: result };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
              if (!isValid(base))
                return INVALID;
              return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
                status: status.value,
                value: result
              }));
            });
          }
        }
        util.assertNever(effect);
      }
    };
    ZodEffects.create = (schema2, effect, params) => {
      return new ZodEffects({
        schema: schema2,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params)
      });
    };
    ZodEffects.createWithPreprocess = (preprocess, schema2, params) => {
      return new ZodEffects({
        schema: schema2,
        effect: { type: "preprocess", transform: preprocess },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params)
      });
    };
    ZodOptional = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.undefined) {
          return OK(void 0);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodOptional.create = (type2, params) => {
      return new ZodOptional({
        innerType: type2,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params)
      });
    };
    ZodNullable = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.null) {
          return OK(null);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodNullable.create = (type2, params) => {
      return new ZodNullable({
        innerType: type2,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params)
      });
    };
    ZodDefault = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === ZodParsedType.undefined) {
          data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      removeDefault() {
        return this._def.innerType;
      }
    };
    ZodDefault.create = (type2, params) => {
      return new ZodDefault({
        innerType: type2,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function" ? params.default : () => params.default,
        ...processCreateParams(params)
      });
    };
    ZodCatch = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const newCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          }
        };
        const result = this._def.innerType._parse({
          data: newCtx.data,
          path: newCtx.path,
          parent: {
            ...newCtx
          }
        });
        if (isAsync(result)) {
          return result.then((result2) => {
            return {
              status: "valid",
              value: result2.status === "valid" ? result2.value : this._def.catchValue({
                get error() {
                  return new ZodError(newCtx.common.issues);
                },
                input: newCtx.data
              })
            };
          });
        } else {
          return {
            status: "valid",
            value: result.status === "valid" ? result.value : this._def.catchValue({
              get error() {
                return new ZodError(newCtx.common.issues);
              },
              input: newCtx.data
            })
          };
        }
      }
      removeCatch() {
        return this._def.innerType;
      }
    };
    ZodCatch.create = (type2, params) => {
      return new ZodCatch({
        innerType: type2,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
        ...processCreateParams(params)
      });
    };
    ZodNaN = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.nan) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.nan,
            received: ctx.parsedType
          });
          return INVALID;
        }
        return { status: "valid", value: input.data };
      }
    };
    ZodNaN.create = (params) => {
      return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params)
      });
    };
    BRAND = Symbol("zod_brand");
    ZodBranded = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      unwrap() {
        return this._def.type;
      }
    };
    ZodPipeline = class _ZodPipeline extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
          const handleAsync = async () => {
            const inResult = await this._def.in._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inResult.status === "aborted")
              return INVALID;
            if (inResult.status === "dirty") {
              status.dirty();
              return DIRTY(inResult.value);
            } else {
              return this._def.out._parseAsync({
                data: inResult.value,
                path: ctx.path,
                parent: ctx
              });
            }
          };
          return handleAsync();
        } else {
          const inResult = this._def.in._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inResult.status === "aborted")
            return INVALID;
          if (inResult.status === "dirty") {
            status.dirty();
            return {
              status: "dirty",
              value: inResult.value
            };
          } else {
            return this._def.out._parseSync({
              data: inResult.value,
              path: ctx.path,
              parent: ctx
            });
          }
        }
      }
      static create(a, b) {
        return new _ZodPipeline({
          in: a,
          out: b,
          typeName: ZodFirstPartyTypeKind.ZodPipeline
        });
      }
    };
    ZodReadonly = class extends ZodType {
      _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = (data) => {
          if (isValid(data)) {
            data.value = Object.freeze(data.value);
          }
          return data;
        };
        return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodReadonly.create = (type2, params) => {
      return new ZodReadonly({
        innerType: type2,
        typeName: ZodFirstPartyTypeKind.ZodReadonly,
        ...processCreateParams(params)
      });
    };
    late = {
      object: ZodObject.lazycreate
    };
    (function(ZodFirstPartyTypeKind2) {
      ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
      ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
      ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
      ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
      ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
      ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
      ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
      ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
      ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
      ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
      ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
      ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
      ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
      ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
      ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
      ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
      ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
      ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
      ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
      ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
      ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
      ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
      ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
      ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
      ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
      ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
      ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
      ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
      ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
      ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
      ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
      ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
      ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
      ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
      ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
      ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
    })(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
    instanceOfType = (cls, params = {
      message: `Input not instance of ${cls.name}`
    }) => custom((data) => data instanceof cls, params);
    stringType = ZodString.create;
    numberType = ZodNumber.create;
    nanType = ZodNaN.create;
    bigIntType = ZodBigInt.create;
    booleanType = ZodBoolean.create;
    dateType = ZodDate.create;
    symbolType = ZodSymbol.create;
    undefinedType = ZodUndefined.create;
    nullType = ZodNull.create;
    anyType = ZodAny.create;
    unknownType = ZodUnknown.create;
    neverType = ZodNever.create;
    voidType = ZodVoid.create;
    arrayType = ZodArray.create;
    objectType = ZodObject.create;
    strictObjectType = ZodObject.strictCreate;
    unionType = ZodUnion.create;
    discriminatedUnionType = ZodDiscriminatedUnion.create;
    intersectionType = ZodIntersection.create;
    tupleType = ZodTuple.create;
    recordType = ZodRecord.create;
    mapType = ZodMap.create;
    setType = ZodSet.create;
    functionType = ZodFunction.create;
    lazyType = ZodLazy.create;
    literalType = ZodLiteral.create;
    enumType = ZodEnum.create;
    nativeEnumType = ZodNativeEnum.create;
    promiseType = ZodPromise.create;
    effectsType = ZodEffects.create;
    optionalType = ZodOptional.create;
    nullableType = ZodNullable.create;
    preprocessType = ZodEffects.createWithPreprocess;
    pipelineType = ZodPipeline.create;
    ostring = () => stringType().optional();
    onumber = () => numberType().optional();
    oboolean = () => booleanType().optional();
    coerce = {
      string: ((arg) => ZodString.create({ ...arg, coerce: true })),
      number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
      boolean: ((arg) => ZodBoolean.create({
        ...arg,
        coerce: true
      })),
      bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
      date: ((arg) => ZodDate.create({ ...arg, coerce: true }))
    };
    NEVER = INVALID;
  }
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});
var init_external = __esm({
  "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js"() {
    init_errors();
    init_parseUtil();
    init_typeAliases();
    init_util();
    init_types();
    init_ZodError();
  }
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js
var init_zod = __esm({
  "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js"() {
    init_external();
    init_external();
  }
});

// ../../packages/core/src/render/elements/schemas.ts
var EMPTY_ATTRIBUTES_SCHEMA, optionalId, AGENT_SLUG_REGEX, optionalAgentSlug, BvBugAttributesSchema, BvDecisionAttributesSchema, BvDiagramAttributesSchema, BvFactAttributesSchema, BvFixAttributesSchema, BvPatternAttributesSchema, BvRuleAttributesSchema, RESERVED_TOPIC_ATTRIBUTES, BvTopicAttributesSchema, ELEMENT_ATTRIBUTE_SCHEMAS;
var init_schemas = __esm({
  "../../packages/core/src/render/elements/schemas.ts"() {
    init_zod();
    EMPTY_ATTRIBUTES_SCHEMA = external_exports.object({}).passthrough();
    optionalId = external_exports.string().min(1, { message: "id must be non-empty if present" }).optional();
    AGENT_SLUG_REGEX = /^[a-z0-9-]+$/;
    optionalAgentSlug = external_exports.string().regex(AGENT_SLUG_REGEX, {
      message: "must be a lowercase slug (letters, digits, hyphens) matching the connector catalog's Agent.id"
    }).optional();
    BvBugAttributesSchema = external_exports.object({
      id: optionalId,
      severity: external_exports.enum(["low", "medium", "high", "critical"]).optional()
    }).passthrough();
    BvDecisionAttributesSchema = external_exports.object({ id: optionalId }).passthrough();
    BvDiagramAttributesSchema = external_exports.object({
      title: external_exports.string().optional(),
      type: external_exports.enum(["mermaid", "plantuml", "ascii", "dot", "graphviz", "other"]).optional()
    }).passthrough();
    BvFactAttributesSchema = external_exports.object({
      category: external_exports.enum([
        "personal",
        "project",
        "preference",
        "convention",
        "team",
        "environment",
        "other"
      ]).optional(),
      subject: external_exports.string().optional(),
      value: external_exports.string().optional()
    }).passthrough();
    BvFixAttributesSchema = external_exports.object({ id: optionalId }).passthrough();
    BvPatternAttributesSchema = external_exports.object({
      description: external_exports.string().optional(),
      flags: external_exports.string().optional()
    }).passthrough();
    BvRuleAttributesSchema = external_exports.object({
      id: optionalId,
      severity: external_exports.enum(["info", "must", "should"]).optional()
    }).passthrough();
    RESERVED_TOPIC_ATTRIBUTES = ["importance", "maturity", "recency"];
    BvTopicAttributesSchema = external_exports.object({
      createdby: optionalAgentSlug,
      id: optionalId,
      keywords: external_exports.string().optional(),
      path: external_exports.string().min(1, { message: "path is required and must be non-empty" }),
      related: external_exports.string().optional(),
      summary: external_exports.string().optional(),
      tags: external_exports.string().optional(),
      title: external_exports.string().min(1, { message: "title is required and must be non-empty" }),
      updatedby: optionalAgentSlug
    }).passthrough().superRefine((attrs, ctx) => {
      for (const key of RESERVED_TOPIC_ATTRIBUTES) {
        if (key in attrs) {
          ctx.addIssue({
            code: external_exports.ZodIssueCode.custom,
            message: `\`${key}\` is a sidecar ranking signal and must not be set on <bv-topic>`,
            path: [key]
          });
        }
      }
    });
    ELEMENT_ATTRIBUTE_SCHEMAS = {
      "bv-author": EMPTY_ATTRIBUTES_SCHEMA,
      "bv-bug": BvBugAttributesSchema,
      "bv-changes": EMPTY_ATTRIBUTES_SCHEMA,
      "bv-decision": BvDecisionAttributesSchema,
      "bv-dependencies": EMPTY_ATTRIBUTES_SCHEMA,
      "bv-diagram": BvDiagramAttributesSchema,
      "bv-examples": EMPTY_ATTRIBUTES_SCHEMA,
      "bv-fact": BvFactAttributesSchema,
      "bv-files": EMPTY_ATTRIBUTES_SCHEMA,
      "bv-fix": BvFixAttributesSchema,
      "bv-flow": EMPTY_ATTRIBUTES_SCHEMA,
      "bv-highlights": EMPTY_ATTRIBUTES_SCHEMA,
      "bv-pattern": BvPatternAttributesSchema,
      "bv-reason": EMPTY_ATTRIBUTES_SCHEMA,
      "bv-rule": BvRuleAttributesSchema,
      "bv-structure": EMPTY_ATTRIBUTES_SCHEMA,
      "bv-task": EMPTY_ATTRIBUTES_SCHEMA,
      "bv-timestamp": EMPTY_ATTRIBUTES_SCHEMA,
      "bv-topic": BvTopicAttributesSchema
    };
  }
});

// ../../packages/core/src/render/elements/registry.ts
function buildRegistry() {
  const registry = {};
  for (const name of Object.keys(ELEMENT_METADATA)) {
    registry[name] = {
      ...ELEMENT_METADATA[name],
      name,
      validator: makeAttributeValidator(name, ELEMENT_ATTRIBUTE_SCHEMAS[name])
    };
  }
  return registry;
}
var ELEMENT_METADATA, ELEMENT_REGISTRY;
var init_registry = __esm({
  "../../packages/core/src/render/elements/registry.ts"() {
    init_make_validator();
    init_schemas();
    ELEMENT_METADATA = {
      "bv-author": {
        allowedChildren: "inline",
        description: "The person or system identifier responsible for the concept (Raw Concept section).",
        optionalAttributes: [],
        requiredAttributes: []
      },
      "bv-bug": {
        allowedChildren: "block",
        description: "A bug runbook entry (symptom, root cause). Optional `id` and `severity` (low|medium|high|critical). Typically paired with a sibling `<bv-fix>`.",
        optionalAttributes: ["id", "severity"],
        requiredAttributes: []
      },
      "bv-changes": {
        allowedChildren: "block",
        description: "A list of changes (code, process, decision) in the Raw Concept section. Children should be `<li>` items.",
        optionalAttributes: [],
        requiredAttributes: []
      },
      "bv-decision": {
        allowedChildren: "block",
        description: "A decision record (with rationale and evidence). Optional `id` for cross-referencing.",
        optionalAttributes: ["id"],
        requiredAttributes: []
      },
      "bv-dependencies": {
        allowedChildren: "block",
        description: "Dependencies, prerequisites, blockers, or relationship information (Narrative section).",
        optionalAttributes: [],
        requiredAttributes: []
      },
      "bv-diagram": {
        allowedChildren: "block",
        description: "Preserves a diagram (mermaid / plantuml / ascii / dot) verbatim. Optional `type` declares the diagram language; optional `title` becomes the caption.",
        optionalAttributes: ["type", "title"],
        requiredAttributes: []
      },
      "bv-examples": {
        allowedChildren: "block",
        description: "Worked examples, sample code, or scenario walkthroughs (Narrative section).",
        optionalAttributes: [],
        requiredAttributes: []
      },
      "bv-fact": {
        allowedChildren: "inline",
        description: "A structured fact. Text content is the canonical statement; optional attributes carry the structured extraction (subject, category, value).",
        optionalAttributes: ["subject", "category", "value"],
        requiredAttributes: []
      },
      "bv-files": {
        allowedChildren: "block",
        description: "A list of related source files, documents, URLs, or references (Raw Concept section). Children should be `<li>` items.",
        optionalAttributes: [],
        requiredAttributes: []
      },
      "bv-fix": {
        allowedChildren: "block",
        description: "A fix runbook entry (steps to resolve a bug). Optional `id`. Typically the sibling of a `<bv-bug>`.",
        optionalAttributes: ["id"],
        requiredAttributes: []
      },
      "bv-flow": {
        allowedChildren: "inline",
        description: "A process flow, workflow, or sequence of steps (Raw Concept section).",
        optionalAttributes: [],
        requiredAttributes: []
      },
      "bv-highlights": {
        allowedChildren: "block",
        description: "Key highlights, capabilities, deliverables, or notable outcomes (Narrative section).",
        optionalAttributes: [],
        requiredAttributes: []
      },
      "bv-pattern": {
        allowedChildren: "inline",
        description: "A pattern (e.g. a regex) as the element's text content. Optional `flags` and `description` attributes carry the structured fields.",
        optionalAttributes: ["flags", "description"],
        requiredAttributes: []
      },
      "bv-reason": {
        allowedChildren: "block",
        description: `The curate operation's "why", stated for a human reviewer (Reason section).`,
        optionalAttributes: [],
        requiredAttributes: []
      },
      "bv-rule": {
        allowedChildren: "inline",
        description: "A rule the agent should follow. Optional `severity` (info|must|should) and `id` for cross-referencing.",
        optionalAttributes: ["severity", "id"],
        requiredAttributes: []
      },
      "bv-structure": {
        allowedChildren: "block",
        description: "Structural or organizational documentation (file layout, hierarchy) (Narrative section).",
        optionalAttributes: [],
        requiredAttributes: []
      },
      "bv-task": {
        allowedChildren: "inline",
        description: "The subject/task this concept relates to (Raw Concept section).",
        optionalAttributes: [],
        requiredAttributes: []
      },
      "bv-timestamp": {
        allowedChildren: "inline",
        description: "The date the concept's data represents (distinct from the system-set file timestamps) (Raw Concept section).",
        optionalAttributes: [],
        requiredAttributes: []
      },
      "bv-topic": {
        allowedChildren: "any",
        description: "Root container per topic file. Carries frontmatter as attributes. Required: `path`, `title`. Attribute names MUST be lowercase. Sidecar ranking signals (importance/maturity/recency) must NOT be set here; `createdat`/`updatedat` are system-stamped; `type` distinguishes topic/summary/context.",
        optionalAttributes: ["id", "summary", "tags", "keywords", "related", "type"],
        requiredAttributes: ["path", "title"]
      }
    };
    ELEMENT_REGISTRY = buildRegistry();
  }
});

// ../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/common/unicode.js
function isSurrogate(cp) {
  return cp >= 55296 && cp <= 57343;
}
function isSurrogatePair(cp) {
  return cp >= 56320 && cp <= 57343;
}
function getSurrogatePairCodePoint(cp1, cp2) {
  return (cp1 - 55296) * 1024 + 9216 + cp2;
}
function isControlCodePoint(cp) {
  return cp !== 32 && cp !== 10 && cp !== 13 && cp !== 9 && cp !== 12 && cp >= 1 && cp <= 31 || cp >= 127 && cp <= 159;
}
function isUndefinedCodePoint(cp) {
  return cp >= 64976 && cp <= 65007 || UNDEFINED_CODE_POINTS.has(cp);
}
var UNDEFINED_CODE_POINTS, REPLACEMENT_CHARACTER, CODE_POINTS, SEQUENCES;
var init_unicode = __esm({
  "../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/common/unicode.js"() {
    UNDEFINED_CODE_POINTS = /* @__PURE__ */ new Set([
      65534,
      65535,
      131070,
      131071,
      196606,
      196607,
      262142,
      262143,
      327678,
      327679,
      393214,
      393215,
      458750,
      458751,
      524286,
      524287,
      589822,
      589823,
      655358,
      655359,
      720894,
      720895,
      786430,
      786431,
      851966,
      851967,
      917502,
      917503,
      983038,
      983039,
      1048574,
      1048575,
      1114110,
      1114111
    ]);
    REPLACEMENT_CHARACTER = "\uFFFD";
    (function(CODE_POINTS2) {
      CODE_POINTS2[CODE_POINTS2["EOF"] = -1] = "EOF";
      CODE_POINTS2[CODE_POINTS2["NULL"] = 0] = "NULL";
      CODE_POINTS2[CODE_POINTS2["TABULATION"] = 9] = "TABULATION";
      CODE_POINTS2[CODE_POINTS2["CARRIAGE_RETURN"] = 13] = "CARRIAGE_RETURN";
      CODE_POINTS2[CODE_POINTS2["LINE_FEED"] = 10] = "LINE_FEED";
      CODE_POINTS2[CODE_POINTS2["FORM_FEED"] = 12] = "FORM_FEED";
      CODE_POINTS2[CODE_POINTS2["SPACE"] = 32] = "SPACE";
      CODE_POINTS2[CODE_POINTS2["EXCLAMATION_MARK"] = 33] = "EXCLAMATION_MARK";
      CODE_POINTS2[CODE_POINTS2["QUOTATION_MARK"] = 34] = "QUOTATION_MARK";
      CODE_POINTS2[CODE_POINTS2["AMPERSAND"] = 38] = "AMPERSAND";
      CODE_POINTS2[CODE_POINTS2["APOSTROPHE"] = 39] = "APOSTROPHE";
      CODE_POINTS2[CODE_POINTS2["HYPHEN_MINUS"] = 45] = "HYPHEN_MINUS";
      CODE_POINTS2[CODE_POINTS2["SOLIDUS"] = 47] = "SOLIDUS";
      CODE_POINTS2[CODE_POINTS2["DIGIT_0"] = 48] = "DIGIT_0";
      CODE_POINTS2[CODE_POINTS2["DIGIT_9"] = 57] = "DIGIT_9";
      CODE_POINTS2[CODE_POINTS2["SEMICOLON"] = 59] = "SEMICOLON";
      CODE_POINTS2[CODE_POINTS2["LESS_THAN_SIGN"] = 60] = "LESS_THAN_SIGN";
      CODE_POINTS2[CODE_POINTS2["EQUALS_SIGN"] = 61] = "EQUALS_SIGN";
      CODE_POINTS2[CODE_POINTS2["GREATER_THAN_SIGN"] = 62] = "GREATER_THAN_SIGN";
      CODE_POINTS2[CODE_POINTS2["QUESTION_MARK"] = 63] = "QUESTION_MARK";
      CODE_POINTS2[CODE_POINTS2["LATIN_CAPITAL_A"] = 65] = "LATIN_CAPITAL_A";
      CODE_POINTS2[CODE_POINTS2["LATIN_CAPITAL_Z"] = 90] = "LATIN_CAPITAL_Z";
      CODE_POINTS2[CODE_POINTS2["RIGHT_SQUARE_BRACKET"] = 93] = "RIGHT_SQUARE_BRACKET";
      CODE_POINTS2[CODE_POINTS2["GRAVE_ACCENT"] = 96] = "GRAVE_ACCENT";
      CODE_POINTS2[CODE_POINTS2["LATIN_SMALL_A"] = 97] = "LATIN_SMALL_A";
      CODE_POINTS2[CODE_POINTS2["LATIN_SMALL_Z"] = 122] = "LATIN_SMALL_Z";
    })(CODE_POINTS || (CODE_POINTS = {}));
    SEQUENCES = {
      DASH_DASH: "--",
      CDATA_START: "[CDATA[",
      DOCTYPE: "doctype",
      SCRIPT: "script",
      PUBLIC: "public",
      SYSTEM: "system"
    };
  }
});

// ../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/common/error-codes.js
var ERR;
var init_error_codes = __esm({
  "../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/common/error-codes.js"() {
    (function(ERR2) {
      ERR2["controlCharacterInInputStream"] = "control-character-in-input-stream";
      ERR2["noncharacterInInputStream"] = "noncharacter-in-input-stream";
      ERR2["surrogateInInputStream"] = "surrogate-in-input-stream";
      ERR2["nonVoidHtmlElementStartTagWithTrailingSolidus"] = "non-void-html-element-start-tag-with-trailing-solidus";
      ERR2["endTagWithAttributes"] = "end-tag-with-attributes";
      ERR2["endTagWithTrailingSolidus"] = "end-tag-with-trailing-solidus";
      ERR2["unexpectedSolidusInTag"] = "unexpected-solidus-in-tag";
      ERR2["unexpectedNullCharacter"] = "unexpected-null-character";
      ERR2["unexpectedQuestionMarkInsteadOfTagName"] = "unexpected-question-mark-instead-of-tag-name";
      ERR2["invalidFirstCharacterOfTagName"] = "invalid-first-character-of-tag-name";
      ERR2["unexpectedEqualsSignBeforeAttributeName"] = "unexpected-equals-sign-before-attribute-name";
      ERR2["missingEndTagName"] = "missing-end-tag-name";
      ERR2["unexpectedCharacterInAttributeName"] = "unexpected-character-in-attribute-name";
      ERR2["unknownNamedCharacterReference"] = "unknown-named-character-reference";
      ERR2["missingSemicolonAfterCharacterReference"] = "missing-semicolon-after-character-reference";
      ERR2["unexpectedCharacterAfterDoctypeSystemIdentifier"] = "unexpected-character-after-doctype-system-identifier";
      ERR2["unexpectedCharacterInUnquotedAttributeValue"] = "unexpected-character-in-unquoted-attribute-value";
      ERR2["eofBeforeTagName"] = "eof-before-tag-name";
      ERR2["eofInTag"] = "eof-in-tag";
      ERR2["missingAttributeValue"] = "missing-attribute-value";
      ERR2["missingWhitespaceBetweenAttributes"] = "missing-whitespace-between-attributes";
      ERR2["missingWhitespaceAfterDoctypePublicKeyword"] = "missing-whitespace-after-doctype-public-keyword";
      ERR2["missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers"] = "missing-whitespace-between-doctype-public-and-system-identifiers";
      ERR2["missingWhitespaceAfterDoctypeSystemKeyword"] = "missing-whitespace-after-doctype-system-keyword";
      ERR2["missingQuoteBeforeDoctypePublicIdentifier"] = "missing-quote-before-doctype-public-identifier";
      ERR2["missingQuoteBeforeDoctypeSystemIdentifier"] = "missing-quote-before-doctype-system-identifier";
      ERR2["missingDoctypePublicIdentifier"] = "missing-doctype-public-identifier";
      ERR2["missingDoctypeSystemIdentifier"] = "missing-doctype-system-identifier";
      ERR2["abruptDoctypePublicIdentifier"] = "abrupt-doctype-public-identifier";
      ERR2["abruptDoctypeSystemIdentifier"] = "abrupt-doctype-system-identifier";
      ERR2["cdataInHtmlContent"] = "cdata-in-html-content";
      ERR2["incorrectlyOpenedComment"] = "incorrectly-opened-comment";
      ERR2["eofInScriptHtmlCommentLikeText"] = "eof-in-script-html-comment-like-text";
      ERR2["eofInDoctype"] = "eof-in-doctype";
      ERR2["nestedComment"] = "nested-comment";
      ERR2["abruptClosingOfEmptyComment"] = "abrupt-closing-of-empty-comment";
      ERR2["eofInComment"] = "eof-in-comment";
      ERR2["incorrectlyClosedComment"] = "incorrectly-closed-comment";
      ERR2["eofInCdata"] = "eof-in-cdata";
      ERR2["absenceOfDigitsInNumericCharacterReference"] = "absence-of-digits-in-numeric-character-reference";
      ERR2["nullCharacterReference"] = "null-character-reference";
      ERR2["surrogateCharacterReference"] = "surrogate-character-reference";
      ERR2["characterReferenceOutsideUnicodeRange"] = "character-reference-outside-unicode-range";
      ERR2["controlCharacterReference"] = "control-character-reference";
      ERR2["noncharacterCharacterReference"] = "noncharacter-character-reference";
      ERR2["missingWhitespaceBeforeDoctypeName"] = "missing-whitespace-before-doctype-name";
      ERR2["missingDoctypeName"] = "missing-doctype-name";
      ERR2["invalidCharacterSequenceAfterDoctypeName"] = "invalid-character-sequence-after-doctype-name";
      ERR2["duplicateAttribute"] = "duplicate-attribute";
      ERR2["nonConformingDoctype"] = "non-conforming-doctype";
      ERR2["missingDoctype"] = "missing-doctype";
      ERR2["misplacedDoctype"] = "misplaced-doctype";
      ERR2["endTagWithoutMatchingOpenElement"] = "end-tag-without-matching-open-element";
      ERR2["closingOfElementWithOpenChildElements"] = "closing-of-element-with-open-child-elements";
      ERR2["disallowedContentInNoscriptInHead"] = "disallowed-content-in-noscript-in-head";
      ERR2["openElementsLeftAfterEof"] = "open-elements-left-after-eof";
      ERR2["abandonedHeadElementChild"] = "abandoned-head-element-child";
      ERR2["misplacedStartTagForHeadElement"] = "misplaced-start-tag-for-head-element";
      ERR2["nestedNoscriptInHead"] = "nested-noscript-in-head";
      ERR2["eofInElementThatCanContainOnlyText"] = "eof-in-element-that-can-contain-only-text";
    })(ERR || (ERR = {}));
  }
});

// ../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/tokenizer/preprocessor.js
var DEFAULT_BUFFER_WATERLINE, Preprocessor;
var init_preprocessor = __esm({
  "../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/tokenizer/preprocessor.js"() {
    init_unicode();
    init_error_codes();
    DEFAULT_BUFFER_WATERLINE = 1 << 16;
    Preprocessor = class {
      constructor(handler) {
        this.handler = handler;
        this.html = "";
        this.pos = -1;
        this.lastGapPos = -2;
        this.gapStack = [];
        this.skipNextNewLine = false;
        this.lastChunkWritten = false;
        this.endOfChunkHit = false;
        this.bufferWaterline = DEFAULT_BUFFER_WATERLINE;
        this.isEol = false;
        this.lineStartPos = 0;
        this.droppedBufferSize = 0;
        this.line = 1;
        this.lastErrOffset = -1;
      }
      /** The column on the current line. If we just saw a gap (eg. a surrogate pair), return the index before. */
      get col() {
        return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
      }
      get offset() {
        return this.droppedBufferSize + this.pos;
      }
      getError(code, cpOffset) {
        const { line, col, offset } = this;
        const startCol = col + cpOffset;
        const startOffset = offset + cpOffset;
        return {
          code,
          startLine: line,
          endLine: line,
          startCol,
          endCol: startCol,
          startOffset,
          endOffset: startOffset
        };
      }
      _err(code) {
        if (this.handler.onParseError && this.lastErrOffset !== this.offset) {
          this.lastErrOffset = this.offset;
          this.handler.onParseError(this.getError(code, 0));
        }
      }
      _addGap() {
        this.gapStack.push(this.lastGapPos);
        this.lastGapPos = this.pos;
      }
      _processSurrogate(cp) {
        if (this.pos !== this.html.length - 1) {
          const nextCp = this.html.charCodeAt(this.pos + 1);
          if (isSurrogatePair(nextCp)) {
            this.pos++;
            this._addGap();
            return getSurrogatePairCodePoint(cp, nextCp);
          }
        } else if (!this.lastChunkWritten) {
          this.endOfChunkHit = true;
          return CODE_POINTS.EOF;
        }
        this._err(ERR.surrogateInInputStream);
        return cp;
      }
      willDropParsedChunk() {
        return this.pos > this.bufferWaterline;
      }
      dropParsedChunk() {
        if (this.willDropParsedChunk()) {
          this.html = this.html.substring(this.pos);
          this.lineStartPos -= this.pos;
          this.droppedBufferSize += this.pos;
          this.pos = 0;
          this.lastGapPos = -2;
          this.gapStack.length = 0;
        }
      }
      write(chunk2, isLastChunk) {
        if (this.html.length > 0) {
          this.html += chunk2;
        } else {
          this.html = chunk2;
        }
        this.endOfChunkHit = false;
        this.lastChunkWritten = isLastChunk;
      }
      insertHtmlAtCurrentPos(chunk2) {
        this.html = this.html.substring(0, this.pos + 1) + chunk2 + this.html.substring(this.pos + 1);
        this.endOfChunkHit = false;
      }
      startsWith(pattern, caseSensitive) {
        if (this.pos + pattern.length > this.html.length) {
          this.endOfChunkHit = !this.lastChunkWritten;
          return false;
        }
        if (caseSensitive) {
          return this.html.startsWith(pattern, this.pos);
        }
        for (let i = 0; i < pattern.length; i++) {
          const cp = this.html.charCodeAt(this.pos + i) | 32;
          if (cp !== pattern.charCodeAt(i)) {
            return false;
          }
        }
        return true;
      }
      peek(offset) {
        const pos = this.pos + offset;
        if (pos >= this.html.length) {
          this.endOfChunkHit = !this.lastChunkWritten;
          return CODE_POINTS.EOF;
        }
        const code = this.html.charCodeAt(pos);
        return code === CODE_POINTS.CARRIAGE_RETURN ? CODE_POINTS.LINE_FEED : code;
      }
      advance() {
        this.pos++;
        if (this.isEol) {
          this.isEol = false;
          this.line++;
          this.lineStartPos = this.pos;
        }
        if (this.pos >= this.html.length) {
          this.endOfChunkHit = !this.lastChunkWritten;
          return CODE_POINTS.EOF;
        }
        let cp = this.html.charCodeAt(this.pos);
        if (cp === CODE_POINTS.CARRIAGE_RETURN) {
          this.isEol = true;
          this.skipNextNewLine = true;
          return CODE_POINTS.LINE_FEED;
        }
        if (cp === CODE_POINTS.LINE_FEED) {
          this.isEol = true;
          if (this.skipNextNewLine) {
            this.line--;
            this.skipNextNewLine = false;
            this._addGap();
            return this.advance();
          }
        }
        this.skipNextNewLine = false;
        if (isSurrogate(cp)) {
          cp = this._processSurrogate(cp);
        }
        const isCommonValidRange = this.handler.onParseError === null || cp > 31 && cp < 127 || cp === CODE_POINTS.LINE_FEED || cp === CODE_POINTS.CARRIAGE_RETURN || cp > 159 && cp < 64976;
        if (!isCommonValidRange) {
          this._checkForProblematicCharacters(cp);
        }
        return cp;
      }
      _checkForProblematicCharacters(cp) {
        if (isControlCodePoint(cp)) {
          this._err(ERR.controlCharacterInInputStream);
        } else if (isUndefinedCodePoint(cp)) {
          this._err(ERR.noncharacterInInputStream);
        }
      }
      retreat(count) {
        this.pos -= count;
        while (this.pos < this.lastGapPos) {
          this.lastGapPos = this.gapStack.pop();
          this.pos--;
        }
        this.isEol = false;
      }
    };
  }
});

// ../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/common/token.js
function getTokenAttr(token, attrName) {
  for (let i = token.attrs.length - 1; i >= 0; i--) {
    if (token.attrs[i].name === attrName) {
      return token.attrs[i].value;
    }
  }
  return null;
}
var TokenType;
var init_token = __esm({
  "../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/common/token.js"() {
    (function(TokenType2) {
      TokenType2[TokenType2["CHARACTER"] = 0] = "CHARACTER";
      TokenType2[TokenType2["NULL_CHARACTER"] = 1] = "NULL_CHARACTER";
      TokenType2[TokenType2["WHITESPACE_CHARACTER"] = 2] = "WHITESPACE_CHARACTER";
      TokenType2[TokenType2["START_TAG"] = 3] = "START_TAG";
      TokenType2[TokenType2["END_TAG"] = 4] = "END_TAG";
      TokenType2[TokenType2["COMMENT"] = 5] = "COMMENT";
      TokenType2[TokenType2["DOCTYPE"] = 6] = "DOCTYPE";
      TokenType2[TokenType2["EOF"] = 7] = "EOF";
      TokenType2[TokenType2["HIBERNATION"] = 8] = "HIBERNATION";
    })(TokenType || (TokenType = {}));
  }
});

// ../../node_modules/.pnpm/entities@8.0.0/node_modules/entities/dist/decode-codepoint.js
function replaceCodePoint(codePoint) {
  if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
    return 65533;
  }
  return decodeMap.get(codePoint) ?? codePoint;
}
var decodeMap;
var init_decode_codepoint = __esm({
  "../../node_modules/.pnpm/entities@8.0.0/node_modules/entities/dist/decode-codepoint.js"() {
    decodeMap = /* @__PURE__ */ new Map([
      [0, 65533],
      // C1 Unicode control character reference replacements
      [128, 8364],
      [130, 8218],
      [131, 402],
      [132, 8222],
      [133, 8230],
      [134, 8224],
      [135, 8225],
      [136, 710],
      [137, 8240],
      [138, 352],
      [139, 8249],
      [140, 338],
      [142, 381],
      [145, 8216],
      [146, 8217],
      [147, 8220],
      [148, 8221],
      [149, 8226],
      [150, 8211],
      [151, 8212],
      [152, 732],
      [153, 8482],
      [154, 353],
      [155, 8250],
      [156, 339],
      [158, 382],
      [159, 376]
    ]);
  }
});

// ../../node_modules/.pnpm/entities@8.0.0/node_modules/entities/dist/internal/decode-shared.js
function decodeBase64(input) {
  const binary2 = atob(input);
  const evenLength = binary2.length & ~1;
  const out = new Uint16Array(evenLength / 2);
  for (let index = 0, outIndex = 0; index < evenLength; index += 2) {
    const lo = binary2.charCodeAt(index);
    const hi = binary2.charCodeAt(index + 1);
    out[outIndex++] = lo | hi << 8;
  }
  return out;
}
var init_decode_shared = __esm({
  "../../node_modules/.pnpm/entities@8.0.0/node_modules/entities/dist/internal/decode-shared.js"() {
  }
});

// ../../node_modules/.pnpm/entities@8.0.0/node_modules/entities/dist/generated/decode-data-html.js
var htmlDecodeTree;
var init_decode_data_html = __esm({
  "../../node_modules/.pnpm/entities@8.0.0/node_modules/entities/dist/generated/decode-data-html.js"() {
    init_decode_shared();
    htmlDecodeTree = /* @__PURE__ */ decodeBase64("QR08ALkAAgH6AYsDNQR2BO0EPgXZBQEGLAbdBxMISQrvCmQLfQurDKQNLw4fD4YPpA+6D/IPAAAAAAAAAAAAAAAAKhBMEY8TmxUWF2EYLBkxGuAa3RsJHDscWR8YIC8jSCSIJcMl6ie3Ku8rEC0CLjoupS7kLgAIRU1hYmNmZ2xtbm9wcnN0dVQAWgBeAGUAaQBzAHcAfgCBAIQAhwCSAJoAoACsALMAbABpAGcAO4DGAMZAUAA7gCYAJkBjAHUAdABlADuAwQDBQHIiZXZlAAJhAAFpeW0AcgByAGMAO4DCAMJAEGRyAADgNdgE3XIAYQB2AGUAO4DAAMBA8CFoYZFj4SFjcgBhZAAAoFMqAAFncIsAjgBvAG4ABGFmAADgNdg43fAlbHlGdW5jdGlvbgCgYSBpAG4AZwA7gMUAxUAAAWNzpACoAHIAAOA12Jzc6SFnbgCgVCJpAGwAZABlADuAwwDDQG0AbAA7gMQAxEAABGFjZWZvcnN1xQDYANoA7QDxAPYA+QD8AAABY3LJAM8AayNzbGFzaAAAoBYidgHTANUAAKDnKmUAZAAAoAYjeQARZIABY3J0AOAA5QDrAGEidXNlAACgNSLuI291bGxpcwCgLCFhAJJjcgAA4DXYBd1wAGYAAOA12Dnd5SF2ZdhiYwDyAOoAbSJwZXEAAKBOIgAHSE9hY2RlZmhpbG9yc3UXARoBHwE6AVIBVQFiAWQBZgGCAakB6QHtAfIBYwB5ACdkUABZADuAqQCpQIABY3B5ACUBKAE1AfUhdGUGYWmg0iJ0KGFsRGlmZmVyZW50aWFsRAAAoEUhbCJleXMAAKAtIQACYWVpb0EBRAFKAU0B8iFvbgxhZABpAGwAO4DHAMdAcgBjAAhhbiJpbnQAAKAwIm8AdAAKYQABZG5ZAV0BaSJsbGEAuGB0I2VyRG90ALdg8gA5AWkAp2NyImNsZQAAAkRNUFRwAXQBeQF9AW8AdAAAoJkiaSJudXMAAKCWIuwhdXMAoJUiaSJtZXMAAKCXIm8AAAFjc4cBlAFrKndpc2VDb250b3VySW50ZWdyYWwAAKAyImUjQ3VybHkAAAFEUZwBpAFvJXVibGVRdW90ZQAAoB0gdSJvdGUAAKAZIAACbG5wdbABtgHNAdgBbwBuAGWgNyIAoHQqgAFnaXQAvAHBAcUB8iJ1ZW50AKBhIm4AdAAAoC8i7yV1ckludGVncmFsAKAuIgABZnLRAdMBAKACIe8iZHVjdACgECJuLnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbAAAoDMi7yFzcwCgLypjAHIAAOA12J7ccABDoNMiYQBwAACgTSKABURKU1phY2VmaW9zAAsCEgIVAhgCGwIsAjQCOQI9AnMCfwNvoEUh9CJyYWhkAKARKWMAeQACZGMAeQAFZGMAeQAPZIABZ3JzACECJQIoAuchZXIAoCEgcgAAoKEhaAB2AACg5CoAAWF5MAIzAvIhb24OYRRkbAB0oAciYQCUY3IAAOA12AfdAAFhZkECawIAAWNtRQJnAvIjaXRpY2FsAAJBREdUUAJUAl8CYwJjInV0ZQC0YG8AdAFZAloC2WJiJGxlQWN1dGUA3WJyImF2ZQBgYGkibGRlANxi7yFuZACgxCJmJWVyZW50aWFsRAAAoEYhcAR9AgAAAAAAAIECjgIAABoDZgAA4DXYO91EoagAhQKJAm8AdAAAoNwgcSJ1YWwAAKBQIuIhbGUAA0NETFJVVpkCqAK1Au8C/wIRA28AbgB0AG8AdQByAEkAbgB0AGUAZwByAGEA7ADEAW8AdAKvAgAAAACwAqhgbiNBcnJvdwAAoNMhAAFlb7kC0AJmAHQAgAFBUlQAwQLGAs0CciJyb3cAAKDQIekkZ2h0QXJyb3cAoNQhZQDlACsCbgBnAAABTFLWAugC5SFmdAABQVLcAuECciJyb3cAAKD4J+kkZ2h0QXJyb3cAoPon6SRnaHRBcnJvdwCg+SdpImdodAAAAUFU9gL7AnIicm93AACg0iFlAGUAAKCoInAAQQIGAwAAAAALA3Iicm93AACg0SFvJHduQXJyb3cAAKDVIWUlcnRpY2FsQmFyAACgJSJuAAADQUJMUlRhJAM2AzoDWgNxA3oDciJyb3cAAKGTIUJVLAMwA2EAcgAAoBMpcCNBcnJvdwAAoPUhciJldmUAEWPlIWZ00gJDAwAASwMAAFIDaSVnaHRWZWN0b3IAAKBQKWUkZVZlY3RvcgAAoF4p5SJjdG9yQqC9IWEAcgAAoFYpaSJnaHQA1AFiAwAAaQNlJGVWZWN0b3IAAKBfKeUiY3RvckKgwSFhAHIAAKBXKWUAZQBBoKQiciJyb3cAAKCnIXIAcgBvAPcAtAIAAWN0gwOHA3IAAOA12J/c8iFvaxBhAAhOVGFjZGZnbG1vcHFzdHV4owOlA6kDsAO/A8IDxgPNA9ID8gP9AwEEFAQeBCAEJQRHAEphSAA7gNAA0EBjAHUAdABlADuAyQDJQIABYWl5ALYDuQO+A/Ihb24aYXIAYwA7gMoAykAtZG8AdAAWYXIAAOA12AjdcgBhAHYAZQA7gMgAyEDlIm1lbnQAoAgiAAFhcNYD2QNjAHIAEmF0AHkAUwLhAwAAAADpA20lYWxsU3F1YXJlAACg+yVlJ3J5U21hbGxTcXVhcmUAAKCrJQABZ3D2A/kDbwBuABhhZgAA4DXYPN3zImlsb26VY3UAAAFhaQYEDgRsAFSgdSppImxkZQAAoEIi7CNpYnJpdW0AoMwhAAFjaRgEGwRyAACgMCFtAACgcyphAJdjbQBsADuAywDLQAABaXApBC0E8yF0cwCgAyLvJG5lbnRpYWxFAKBHIYACY2Zpb3MAPQQ/BEMEXQRyBHkAJGRyAADgNdgJ3WwibGVkAFMCTAQAAAAAVARtJWFsbFNxdWFyZQAAoPwlZSdyeVNtYWxsU3F1YXJlAACgqiVwA2UEAABpBAAAAABtBGYAAOA12D3dwSFsbACgACLyI2llcnRyZgCgMSFjAPIAcQQABkpUYWJjZGZnb3JzdIgEiwSOBJMElwSkBKcEqwStBLIE5QTqBGMAeQADZDuAPgA+QO0hbWFkoJMD3GNyImV2ZQAeYYABZWl5AJ0EoASjBOQhaWwiYXIAYwAcYRNkbwB0ACBhcgAA4DXYCt0AoNkicABmAADgNdg+3eUiYXRlcgADRUZHTFNUvwTIBM8E1QTZBOAEcSJ1YWwATKBlIuUhc3MAoNsidSRsbEVxdWFsAACgZyJyI2VhdGVyAACgoirlIXNzAKB3IuwkYW50RXF1YWwAoH4qaSJsZGUAAKBzImMAcgAA4DXYotwAoGsiAARBYWNmaW9zdfkE/QQFBQgFCwUTBSIFKwVSIkRjeQAqZAABY3QBBQQFZQBrAMdiXmDpIXJjJGFyAACgDCFsJWJlcnRTcGFjZQAAoAsh8AEYBQAAGwVmAACgDSHpJXpvbnRhbExpbmUAoAAlAAFjdCYFKAXyABIF8iFvayZhbQBwAEQBMQU5BW8AdwBuAEgAdQBtAPAAAAFxInVhbAAAoE8iAAdFSk9hY2RmZ21ub3N0dVMFVgVZBVwFYwVtBXAFcwV6BZAFtgXFBckFzQVjAHkAFWTsIWlnMmFjAHkAAWRjAHUAdABlADuAzQDNQAABaXlnBWwFcgBjADuAzgDOQBhkbwB0ADBhcgAAoBEhcgBhAHYAZQA7gMwAzEAAoREhYXB/BYsFAAFjZ4MFhQVyACphaSNuYXJ5SQAAoEghbABpAGUA8wD6AvQBlQUAAKUFZaAsIgABZ3KaBZ4F8iFhbACgKyLzI2VjdGlvbgCgwiJpI3NpYmxlAAABQ1SsBbEFbyJtbWEAAKBjIGkibWVzAACgYiCAAWdwdAC8Bb8FwwVvAG4ALmFmAADgNdhA3WEAmWNjAHIAAKAQIWkibGRlAChh6wHSBQAA1QVjAHkABmRsADuAzwDPQIACY2Zvc3UA4QXpBe0F8gX9BQABaXnlBegFcgBjADRhGWRyAADgNdgN3XAAZgAA4DXYQd3jAfcFAAD7BXIAAOA12KXc8iFjeQhk6yFjeQRkgANISmFjZm9zAAwGDwYSBhUGHQYhBiYGYwB5ACVkYwB5AAxk8CFwYZpjAAFleRkGHAbkIWlsNmEaZHIAAOA12A7dcABmAADgNdhC3WMAcgAA4DXYptyABUpUYWNlZmxtb3N0AD0GQAZDBl4GawZkB2gHcAd0B80H2gdjAHkACWQ7gDwAPECAAmNtbnByAEwGTwZSBlUGWwb1IXRlOWHiIWRhm2NnAACg6ifsI2FjZXRyZgCgEiFyAACgniGAAWFleQBkBmcGagbyIW9uPWHkIWlsO2EbZAABZnNvBjQHdAAABUFDREZSVFVWYXKABp4GpAbGBssG3AYDByEHwQIqBwABbnKEBowGZyVsZUJyYWNrZXQAAKDoJ/Ihb3cAoZAhQlKTBpcGYQByAACg5CHpJGdodEFycm93AKDGIWUjaWxpbmcAAKAII28A9QGqBgAAsgZiJWxlQnJhY2tldAAAoOYnbgDUAbcGAAC+BmUkZVZlY3RvcgAAoGEp5SJjdG9yQqDDIWEAcgAAoFkpbCJvb3IAAKAKI2kiZ2h0AAABQVbSBtcGciJyb3cAAKCUIeUiY3RvcgCgTikAAWVy4AbwBmUAAKGjIkFW5gbrBnIicm93AACgpCHlImN0b3IAoFopaSNhbmdsZQBCorIi+wYAAAAA/wZhAHIAAKDPKXEidWFsAACgtCJwAIABRFRWAAoHEQcYB+8kd25WZWN0b3IAoFEpZSRlVmVjdG9yAACgYCnlImN0b3JCoL8hYQByAACgWCnlImN0b3JCoLwhYQByAACgUilpAGcAaAB0AGEAcgByAG8A9wDMAnMAAANFRkdMU1Q/B0cHTgdUB1gHXwfxJXVhbEdyZWF0ZXIAoNoidSRsbEVxdWFsAACgZiJyI2VhdGVyAACgdiLlIXNzAKChKuwkYW50RXF1YWwAoH0qaSJsZGUAAKByInIAAOA12A/dZaDYIuYjdGFycm93AKDaIWkiZG90AD9hgAFucHcAege1B7kHZwAAAkxSbHKCB5QHmwerB+UhZnQAAUFSiAeNB3Iicm93AACg9SfpJGdodEFycm93AKD3J+kkZ2h0QXJyb3cAoPYn5SFmdAABYXLcAqEHaQBnAGgAdABhAHIAcgBvAPcA5wJpAGcAaAB0AGEAcgByAG8A9wDuAmYAAOA12EPdZQByAAABTFK/B8YHZSRmdEFycm93AACgmSHpJGdodEFycm93AKCYIYABY2h0ANMH1QfXB/IAWgYAoLAh8iFva0FhAKBqIgAEYWNlZmlvc3XpB+wH7gf/BwMICQgOCBEIcAAAoAUpeQAcZAABZGzyB/kHaSR1bVNwYWNlAACgXyBsI2ludHJmAACgMyFyAADgNdgQ3e4jdXNQbHVzAKATInAAZgAA4DXYRN1jAPIA/gecY4AESmFjZWZvc3R1ACEIJAgoCDUIgQiFCDsKQApHCmMAeQAKZGMidXRlAENhgAFhZXkALggxCDQI8iFvbkdh5CFpbEVhHWSAAWdzdwA7CGEIfQjhInRpdmWAAU1UVgBECEwIWQhlJWRpdW1TcGFjZQAAoAsgaABpAAABY25SCFMIawBTAHAAYQBjAOUASwhlAHIAeQBUAGgAaQDuAFQI9CFlZAABR0xnCHUIcgBlAGEAdABlAHIARwByAGUAYQB0AGUA8gDrBGUAcwBzAEwAZQBzAPMA2wdMImluZQAKYHIAAOA12BHdAAJCbnB0jAiRCJkInAhyImVhawAAoGAgwiZyZWFraW5nU3BhY2WgYGYAAKAVIUOq7CqzCMIIzQgAAOcIGwkAAAAAAAAtCQAAbwkAAIcJAACdCcAJGQoAADQKAAFvdbYIvAjuI2dydWVudACgYiJwIkNhcAAAoG0ibyh1YmxlVmVydGljYWxCYXIAAKAmIoABbHF4ANII1wjhCOUibWVudACgCSL1IWFsVKBgImkibGRlAADgQiI4A2kic3RzAACgBCJyI2VhdGVyAACjbyJFRkdMU1T1CPoIAgkJCQ0JFQlxInVhbAAAoHEidSRsbEVxdWFsAADgZyI4A3IjZWF0ZXIAAOBrIjgD5SFzcwCgeSLsJGFudEVxdWFsAOB+KjgDaSJsZGUAAKB1IvUhbXBEASAJJwnvI3duSHVtcADgTiI4A3EidWFsAADgTyI4A2UAAAFmczEJRgn0JFRyaWFuZ2xlQqLqIj0JAAAAAEIJYQByAADgzyk4A3EidWFsAACg7CJzAICibiJFR0xTVABRCVYJXAlhCWkJcSJ1YWwAAKBwInIjZWF0ZXIAAKB4IuUhc3MA4GoiOAPsJGFudEVxdWFsAOB9KjgDaSJsZGUAAKB0IuUic3RlZAABR0x1CX8J8iZlYXRlckdyZWF0ZXIA4KIqOAPlI3NzTGVzcwDgoSo4A/IjZWNlZGVzAKGAIkVTjwmVCXEidWFsAADgryo4A+wkYW50RXF1YWwAoOAiAAFlaaAJqQl2JmVyc2VFbGVtZW50AACgDCLnJWh0VHJpYW5nbGVCousitgkAAAAAuwlhAHIAAODQKTgDcSJ1YWwAAKDtIgABcXXDCeAJdSNhcmVTdQAAAWJwywnVCfMhZXRF4I8iOANxInVhbAAAoOIi5SJyc2V0ReCQIjgDcSJ1YWwAAKDjIoABYmNwAOYJ8AkNCvMhZXRF4IIi0iBxInVhbAAAoIgi4yJlZWRzgKGBIkVTVAD6CQAKBwpxInVhbAAA4LAqOAPsJGFudEVxdWFsAKDhImkibGRlAADgfyI4A+UicnNldEXggyLSIHEidWFsAACgiSJpImxkZQCAoUEiRUZUACIKJwouCnEidWFsAACgRCJ1JGxsRXF1YWwAAKBHImkibGRlAACgSSJlJXJ0aWNhbEJhcgAAoCQiYwByAADgNdip3GkAbABkAGUAO4DRANFAnWMAB0VhY2RmZ21vcHJzdHV2XgphCmgKcgp2CnoKgQqRCpYKqwqtCrsKyArNCuwhaWdSYWMAdQB0AGUAO4DTANNAAAFpeWwKcQpyAGMAO4DUANRAHmRiImxhYwBQYXIAAOA12BLdcgBhAHYAZQA7gNIA0kCAAWFlaQCHCooKjQpjAHIATGFnAGEAqWNjInJvbgCfY3AAZgAA4DXYRt3lI25DdXJseQABRFGeCqYKbyV1YmxlUXVvdGUAAKAcIHUib3RlAACgGCAAoFQqAAFjbLEKtQpyAADgNdiq3GEAcwBoADuA2ADYQGkAbAHACsUKZABlADuA1QDVQGUAcwAAoDcqbQBsADuA1gDWQGUAcgAAAUJQ0wrmCgABYXLXCtoKcgAAoD4gYQBjAAABZWvgCuIKAKDeI2UAdAAAoLQjYSVyZW50aGVzaXMAAKDcI4AEYWNmaGlsb3JzAP0KAwsFCwkLCwsMCxELIwtaC3IjdGlhbEQAAKACInkAH2RyAADgNdgT3WkApmOgY/Ujc01pbnVzsWAAAWlwFQsgC24AYwBhAHIAZQBwAGwAYQBuAOUACgVmAACgGSGAobsqZWlvACoLRQtJC+MiZWRlc4CheiJFU1QANAs5C0ALcSJ1YWwAAKCvKuwkYW50RXF1YWwAoHwiaSJsZGUAAKB+Im0AZQAAoDMgAAFkcE0LUQv1IWN0AKAPIm8jcnRpb24AYaA3ImwAAKAdIgABY2leC2ILcgAA4DXYq9yoYwACVWZvc2oLbwtzC3cLTwBUADuAIgAiQHIAAOA12BTdcABmAACgGiFjAHIAAOA12KzcAAZCRWFjZWZoaW9yc3WPC5MLlwupC7YL2AvbC90LhQyTDJoMowzhIXJyAKAQKUcAO4CuAK5AgAFjbnIAnQugC6ML9SF0ZVRhZwAAoOsncgB0oKAhbAAAoBYpgAFhZXkArwuyC7UL8iFvblhh5CFpbFZhIGR2oBwhZSJyc2UAAAFFVb8LzwsAAWxxwwvIC+UibWVudACgCyL1JGlsaWJyaXVtAKDLIXAmRXF1aWxpYnJpdW0AAKBvKXIAAKAcIW8AoWPnIWh0AARBQ0RGVFVWYewLCgwQDDIMNwxeDHwM9gIAAW5y8Av4C2clbGVCcmFja2V0AACg6SfyIW93AKGSIUJM/wsDDGEAcgAAoOUhZSRmdEFycm93AACgxCFlI2lsaW5nAACgCSNvAPUBFgwAAB4MYiVsZUJyYWNrZXQAAKDnJ24A1AEjDAAAKgxlJGVWZWN0b3IAAKBdKeUiY3RvckKgwiFhAHIAAKBVKWwib29yAACgCyMAAWVyOwxLDGUAAKGiIkFWQQxGDHIicm93AACgpiHlImN0b3IAoFspaSNhbmdsZQBCorMiVgwAAAAAWgxhAHIAAKDQKXEidWFsAACgtSJwAIABRFRWAGUMbAxzDO8kd25WZWN0b3IAoE8pZSRlVmVjdG9yAACgXCnlImN0b3JCoL4hYQByAACgVCnlImN0b3JCoMAhYQByAACgUykAAXB1iQyMDGYAAKAdIe4kZEltcGxpZXMAoHAp6SRnaHRhcnJvdwCg2yEAAWNongyhDHIAAKAbIQCgsSHsJGVEZWxheWVkAKD0KYAGSE9hY2ZoaW1vcXN0dQC/DMgMzAzQDOIM5gwKDQ0NFA0ZDU8NVA1YDQABQ2PDDMYMyCFjeSlkeQAoZEYiVGN5ACxkYyJ1dGUAWmEAorwqYWVpedgM2wzeDOEM8iFvbmBh5CFpbF5hcgBjAFxhIWRyAADgNdgW3e8hcnQAAkRMUlXvDPYM/QwEDW8kd25BcnJvdwAAoJMhZSRmdEFycm93AACgkCHpJGdodEFycm93AKCSIXAjQXJyb3cAAKCRIechbWGjY+EkbGxDaXJjbGUAoBgicABmAADgNdhK3XICHw0AAAAAIg10AACgGiLhIXJlgKGhJUlTVQAqDTINSg3uJXRlcnNlY3Rpb24AoJMidQAAAWJwNw1ADfMhZXRFoI8icSJ1YWwAAKCRIuUicnNldEWgkCJxInVhbAAAoJIibiJpb24AAKCUImMAcgAA4DXYrtxhAHIAAKDGIgACYmNtcF8Nag2ODZANc6DQImUAdABFoNAicSJ1YWwAAKCGIgABY2huDYkNZSJlZHMAgKF7IkVTVAB4DX0NhA1xInVhbAAAoLAq7CRhbnRFcXVhbACgfSJpImxkZQAAoH8iVABoAGEA9ADHCwCgESIAodEiZXOVDZ8NciJzZXQARaCDInEidWFsAACghyJlAHQAAKDRIoAFSFJTYWNmaGlvcnMAtQ27Db8NyA3ODdsN3w3+DRgOHQ4jDk8AUgBOADuA3gDeQMEhREUAoCIhAAFIY8MNxg1jAHkAC2R5ACZkAAFidcwNzQ0JYKRjgAFhZXkA1A3XDdoN8iFvbmRh5CFpbGJhImRyAADgNdgX3QABZWnjDe4N8gHoDQAA7Q3lImZvcmUAoDQiYQCYYwABY27yDfkNayNTcGFjZQAA4F8gCiDTInBhY2UAoAkg7CFkZYChPCJFRlQABw4MDhMOcSJ1YWwAAKBDInUkbGxFcXVhbAAAoEUiaSJsZGUAAKBIInAAZgAA4DXYS93pI3BsZURvdACg2yAAAWN0Jw4rDnIAAOA12K/c8iFva2Zh4QpFDlYOYA5qDgAAbg5yDgAAAAAAAAAAAAB5DnwOqA6zDgAADg8RDxYPGg8AAWNySA5ODnUAdABlADuA2gDaQHIAb6CfIeMhaXIAoEkpcgDjAVsOAABdDnkADmR2AGUAbGEAAWl5Yw5oDnIAYwA7gNsA20AjZGIibGFjAHBhcgAA4DXYGN1yAGEAdgBlADuA2QDZQOEhY3JqYQABZGl/Dp8OZQByAAABQlCFDpcOAAFhcokOiw5yAF9gYQBjAAABZWuRDpMOAKDfI2UAdAAAoLUjYSVyZW50aGVzaXMAAKDdI28AbgBQoMMi7CF1cwCgjiIAAWdwqw6uDm8AbgByYWYAAOA12EzdAARBREVUYWRwc78O0g7ZDuEOBQPqDvMOBw9yInJvdwDCoZEhyA4AAMwOYQByAACgEilvJHduQXJyb3cAAKDFIW8kd25BcnJvdwAAoJUhcSV1aWxpYnJpdW0AAKBuKWUAZQBBoKUiciJyb3cAAKClIW8AdwBuAGEAcgByAG8A9wAQA2UAcgAAAUxS+Q4AD2UkZnRBcnJvdwAAoJYh6SRnaHRBcnJvdwCglyFpAGyg0gNvAG4ApWPpIW5nbmFjAHIAAOA12LDcaSJsZGUAaGFtAGwAO4DcANxAgAREYmNkZWZvc3YALQ8xDzUPNw89D3IPdg97D4AP4SFzaACgqyJhAHIAAKDrKnkAEmThIXNobKCpIgCg5ioAAWVyQQ9DDwCgwSKAAWJ0eQBJD00Paw9hAHIAAKAWIGmgFiDjIWFsAAJCTFNUWA9cD18PZg9hAHIAAKAjIukhbmV8YGUkcGFyYXRvcgAAoFgnaSJsZGUAAKBAItQkaGluU3BhY2UAoAogcgAA4DXYGd1wAGYAAOA12E3dYwByAADgNdix3GQiYXNoAACgqiKAAmNlZm9zAI4PkQ+VD5kPng/pIXJjdGHkIWdlAKDAInIAAOA12BrdcABmAADgNdhO3WMAcgAA4DXYstwAAmZpb3OqD64Prw+0D3IAAOA12BvdnmNwAGYAAOA12E/dYwByAADgNdiz3IAEQUlVYWNmb3N1AMgPyw/OD9EP2A/gD+QP6Q/uD2MAeQAvZGMAeQAHZGMAeQAuZGMAdQB0AGUAO4DdAN1AAAFpedwP3w9yAGMAdmErZHIAAOA12BzdcABmAADgNdhQ3WMAcgAA4DXYtNxtAGwAeGEABEhhY2RlZm9z/g8BEAUQDRAQEB0QIBAkEGMAeQAWZGMidXRlAHlhAAFheQkQDBDyIW9ufWEXZG8AdAB7YfIBFRAAABwQbwBXAGkAZAB0AOgAVAhhAJZjcgAAoCghcABmAACgJCFjAHIAAOA12LXc4QtCEEkQTRAAAGcQbRByEAAAAAAAAAAAeRCKEJcQ8hD9EAAAGxEhETIROREAAD4RYwB1AHQAZQA7gOEA4UByImV2ZQADYYCiPiJFZGl1eQBWEFkQWxBgEGUQAOA+IjMDAKA/InIAYwA7gOIA4kB0AGUAO4C0ALRAMGRsAGkAZwA7gOYA5kByoGEgAOA12B7dcgBhAHYAZQA7gOAA4EAAAWVwfBCGEAABZnCAEIQQ8yF5bQCgNSHoAIMQaABhALFjAAFhcI0QWwAAAWNskRCTEHIAAWFnAACgPypkApwQAAAAALEQAKInImFkc3ajEKcQqRCuEG4AZAAAoFUqAKBcKmwib3BlAACgWCoAoFoqAKMgImVsbXJzersQvRDAEN0Q5RDtEACgpCllAACgICJzAGQAYaAhImEEzhDQENIQ1BDWENgQ2hDcEACgqCkAoKkpAKCqKQCgqykAoKwpAKCtKQCgrikAoK8pdAB2oB8iYgBkoL4iAKCdKQABcHTpEOwQaAAAoCIixWDhIXJyAKB8IwABZ3D1EPgQbwBuAAVhZgAA4DXYUt0Ao0giRWFlaW9wBxEJEQ0RDxESERQRAKBwKuMhaXIAoG8qAKBKImQAAKBLInMAJ2DyIW94ZaBIIvEADhFpAG4AZwA7gOUA5UCAAWN0eQAmESoRKxFyAADgNdi23CpgbQBwAGWgSCLxAPgBaQBsAGQAZQA7gOMA40BtAGwAO4DkAORAAAFjaUERRxFvAG4AaQBuAPQA6AFuAHQAAKARKgAITmFiY2RlZmlrbG5vcHJzdWQRaBGXEZ8RpxGrEdIR1hErEjASexKKEn0RThNbE3oTbwB0AACg7SoAAWNybBGJEWsAAAJjZXBzdBF4EX0RghHvIW5nAKBMInAjc2lsb24A9mNyImltZQAAoDUgaQBtAGWgPSJxAACgzSJ2AY0RkRFlAGUAAKC9ImUAZABnoAUjZQAAoAUjcgBrAHSgtSPiIXJrAKC2IwABb3mjEaYRbgDnAHcRMWTxIXVvAKAeIIACY21wcnQAtBG5Eb4RwRHFEeEhdXPloDUi5ABwInR5dgAAoLApcwDpAH0RbgBvAPUA6gCAAWFodwDLEcwRzhGyYwCgNiHlIWVuAKBsInIAAOA12B/dZwCAA2Nvc3R1dncA4xHyEQUSEhIhEiYSKRKAAWFpdQDpEesR7xHwAKMFcgBjAACg7yVwAACgwyKAAWRwdAD4EfwRABJvAHQAAKAAKuwhdXMAoAEqaSJtZXMAAKACKnECCxIAAAAADxLjIXVwAKAGKmEAcgAAoAUm8iNpYW5nbGUAAWR1GhIeEu8hd24AoL0lcAAAoLMlcCJsdXMAAKAEKmUA5QBCD+UAkg9hInJvdwAAoA0pgAFha28ANhJoEncSAAFjbjoSZRJrAIABbHN0AEESRxJNEm8jemVuZ2UAAKDrKXEAdQBhAHIA5QBcBPIjaWFuZ2xlgKG0JWRscgBYElwSYBLvIXduAKC+JeUhZnQAoMIlaSJnaHQAAKC4JWsAAKAjJLEBbRIAAHUSsgFxEgAAcxIAoJIlAKCRJTQAAKCTJWMAawAAoIglAAFlb38ShxJx4D0A5SD1IWl2AOBhIuUgdAAAoBAjAAJwdHd4kRKVEpsSnxJmAADgNdhT3XSgpSJvAG0AAKClIvQhaWUAoMgiAAZESFVWYmRobXB0dXayEsES0RLgEvcS+xIKExoTHxMjEygTNxMAAkxSbHK5ErsSvRK/EgCgVyUAoFQlAKBWJQCgUyUAolAlRFVkdckSyxLNEs8SAKBmJQCgaSUAoGQlAKBnJQACTFJsctgS2hLcEt4SAKBdJQCgWiUAoFwlAKBZJQCjUSVITFJobHLrEu0S7xLxEvMS9RIAoGwlAKBjJQCgYCUAoGslAKBiJQCgXyVvAHgAAKDJKQACTFJscgITBBMGEwgTAKBVJQCgUiUAoBAlAKAMJQCiACVEVWR1EhMUExYTGBMAoGUlAKBoJQCgLCUAoDQlaSJudXMAAKCfIuwhdXMAoJ4iaSJtZXMAAKCgIgACTFJsci8TMRMzEzUTAKBbJQCgWCUAoBglAKAUJQCjAiVITFJobHJCE0QTRhNIE0oTTBMAoGolAKBhJQCgXiUAoDwlAKAkJQCgHCUAAWV2UhNVE3YA5QD5AGIAYQByADuApgCmQAACY2Vpb2ITZhNqE24TcgAA4DXYt9xtAGkAAKBPIG0A5aA9IogRbAAAoVwAYmh0E3YTAKDFKfMhdWIAoMgnbAF+E4QTbABloCIgdAAAoCIgcAAAoU4iRWWJE4sTAKCuKvGgTyI8BeEMqRMAAN8TABQDFB8UAAAjFDQUAAAAAIUUAAAAAI0UAAAAANcU4xT3FPsUAACIFQAAlhWAAWNwcgCuE7ET1RP1IXRlB2GAoikiYWJjZHMAuxO/E8QTzhPSE24AZAAAoEQqciJjdXAAAKBJKgABYXXIE8sTcAAAoEsqcAAAoEcqbwB0AACgQCoA4CkiAP4AAWVv2RPcE3QAAKBBIO4ABAUAAmFlaXXlE+8T9RP4E/AB6hMAAO0TcwAAoE0qbwBuAA1hZABpAGwAO4DnAOdAcgBjAAlhcABzAHOgTCptAACgUCpvAHQAC2GAAWRtbgAIFA0UEhRpAGwAO4C4ALhAcCJ0eXYAAKCyKXQAAIGiADtlGBQZFKJAcgBkAG8A9ABiAXIAAOA12CDdgAFjZWkAKBQqFDIUeQBHZGMAawBtoBMn4SFyawCgEyfHY3IAAKPLJUVjZWZtcz8UQRRHFHcUfBSAFACgwykAocYCZWxGFEkUcQAAoFciZQBhAlAUAAAAAGAUciJyb3cAAAFsclYUWhTlIWZ0AKC6IWkiZ2h0AACguyGAAlJTYWNkAGgUaRRrFG8UcxSuYACgyCRzAHQAAKCbIukhcmMAoJoi4SFzaACgnSJuImludAAAoBAqaQBkAACg7yrjIWlyAKDCKfUhYnN1oGMmaQB0AACgYybsApMUmhS2FAAAwxRvAG4AZaA6APGgVCKrAG0CnxQAAAAAoxRhAHSgLABAYAChASJmbKcUqRTuABMNZQAAAW14rhSyFOUhbnQAoAEiZQDzANIB5wG6FAAAwBRkoEUibwB0AACgbSpuAPQAzAGAAWZyeQDIFMsUzhQA4DXYVN1vAOQA1wEAgakAO3MeAdMUcgAAoBchAAFhb9oU3hRyAHIAAKC1IXMAcwAAoBcnAAFjdeYU6hRyAADgNdi43AABYnDuFPIUZaDPKgCg0SploNAqAKDSKuQhb3QAoO8igANkZWxwcnZ3AAYVEBUbFSEVRBVlFYQV4SFycgABbHIMFQ4VAKA4KQCgNSlwAhYVAAAAABkVcgAAoN4iYwAAoN8i4SFycnCgtiEAoD0pgKIqImJjZG9zACsVMBU6FT4VQRVyImNhcAAAoEgqAAFhdTQVNxVwAACgRipwAACgSipvAHQAAKCNInIAAKBFKgDgKiIA/gACYWxydksVURVuFXMVcgByAG2gtyEAoDwpeQCAAWV2dwBYFWUVaRVxAHACXxUAAAAAYxVyAGUA4wAXFXUA4wAZFWUAZQAAoM4iZSJkZ2UAAKDPImUAbgA7gKQApEBlI2Fycm93AAABbHJ7FX8V5SFmdACgtiFpImdodAAAoLchZQDkAG0VAAFjaYsVkRVvAG4AaQBuAPQAkwFuAHQAAKAxImwiY3R5AACgLSOACUFIYWJjZGVmaGlqbG9yc3R1d3oAuBW7Fb8V1RXgFegV+RUKFhUWHxZUFlcWZRbFFtsW7xb7FgUXChdyAPIAtAJhAHIAAKBlKQACZ2xyc8YVyhXOFdAV5yFlcgCgICDlIXRoAKA4IfIA9QxoAHagECAAoKMiawHZFd4VYSJyb3cAAKAPKWEA4wBfAgABYXnkFecV8iFvbg9hNGQAoUYhYW/tFfQVAAFnciEC8RVyAACgyiF0InNlcQAAoHcqgAFnbG0A/xUCFgUWO4CwALBAdABhALRjcCJ0eXYAAKCxKQABaXIOFhIW8yFodACgfykA4DXYId1hAHIAAAFschsWHRYAoMMhAKDCIYACYWVnc3YAKBauAjYWOhY+Fm0AAKHEIm9zLhY0Fm4AZABzoMQi9SFpdACgZiZhIm1tYQDdY2kAbgAAoPIiAKH3AGlvQxZRFmQAZQAAgfcAO29KFksW90BuI3RpbWVzAACgxyJuAPgAUBZjAHkAUmRjAG8CXhYAAAAAYhZyAG4AAKAeI28AcAAAoA0jgAJscHR1dwBuFnEWdRaSFp4W7CFhciRgZgAA4DXYVd0AotkCZW1wc30WhBaJFo0WcQBkoFAibwB0AACgUSJpIm51cwAAoDgi7CF1cwCgFCLxInVhcmUAoKEiYgBsAGUAYgBhAHIAdwBlAGQAZwDlANcAbgCAAWFkaAClFqoWtBZyAHIAbwD3APUMbwB3AG4AYQByAHIAbwB3APMA8xVhI3Jwb29uAAABbHK8FsAWZQBmAPQAHBZpAGcAaAD0AB4WYgHJFs8WawBhAHIAbwD3AJILbwLUFgAAAADYFnIAbgAAoB8jbwBwAACgDCOAAWNvdADhFukW7BYAAXJ55RboFgDgNdi53FVkbAAAoPYp8iFvaxFhAAFkcvMW9xZvAHQAAKDxImkA5qC/JVsSAAFhaP8WAhdyAPIANQNhAPIA1wvhIm5nbGUAoKYpAAFjaQ4XEBd5AF9k5yJyYXJyAKD/JwAJRGFjZGVmZ2xtbm9wcXJzdHV4MRc4F0YXWxcyBF4XaRd5F40XrBe0F78X2RcVGCEYLRg1GEAYAAFEbzUXgRZvAPQA+BUAAWNzPBdCF3UAdABlADuA6QDpQPQhZXIAoG4qAAJhaW95TRdQF1YXWhfyIW9uG2FyAGOgViI7gOoA6kDsIW9uAKBVIk1kbwB0ABdhAAFEcmIXZhdvAHQAAKBSIgDgNdgi3XKhmipuF3QXYQB2AGUAO4DoAOhAZKCWKm8AdAAAoJgqgKGZKmlscwCAF4UXhxfuInRlcnMAoOcjAKATIWSglSpvAHQAAKCXKoABYXBzAJMXlheiF2MAcgATYXQAeQBzogUinxcAAAAAoRdlAHQAAKAFInAAMaADIDMBqRerFwCgBCAAoAUgAAFnc7AXsRdLYXAAAKACIAABZ3C4F7sXbwBuABlhZgAA4DXYVt2AAWFscwDFF8sXzxdyAHOg1SJsAACg4yl1AHMAAKBxKmkAAKG1A2x21RfYF28AbgC1Y/VjAAJjc3V24BfoF/0XEBgAAWlv5BdWF3IAYwAAoFYiaQLuFwAAAADwF+0ADQThIW50AAFnbPUX+Rd0AHIAAKCWKuUhc3MAoJUqgAFhZWkAAxgGGAoYbABzAD1gcwB0AACgXyJ2AESgYSJEAACgeCrwImFyc2wAoOUpAAFEYRkYHRhvAHQAAKBTInIAcgAAoHEpgAFjZGkAJxgqGO0XcgAAoC8hbwD0AIwCAAFhaDEYMhi3YzuA8ADwQAABbXI5GD0YbAA7gOsA60BvAACgrCCAAWNpcABGGEgYSxhsACFgcwD0ACwEAAFlb08YVxhjAHQAYQB0AGkAbwDuABoEbgBlAG4AdABpAGEAbADlADME4Ql1GAAAgRgAAIMYiBgAAAAAoRilGAAAqhgAALsYvhjRGAAA1xgnGWwAbABpAG4AZwBkAG8AdABzAGUA8QBlF3kARGRtImFsZQAAoEAmgAFpbHIAjRiRGJ0Y7CFpZwCgA/tpApcYAAAAAJoYZwAAoAD7aQBnAACgBPsA4DXYI93sIWlnAKAB++whaWcA4GYAagCAAWFsdACvGLIYthh0AACgbSZpAGcAAKAC+24AcwAAoLElbwBmAJJh8AHCGAAAxhhmAADgNdhX3QABYWvJGMwYbADsAGsEdqDUIgCg2SphI3J0aW50AACgDSoAAWFv2hgiGQABY3PeGB8ZsQPnGP0YBRkSGRUZAAAdGbID7xjyGPQY9xj5GAAA+xg7gL0AvUAAoFMhO4C8ALxAAKBVIQCgWSEAoFshswEBGQAAAxkAoFQhAKBWIbQCCxkOGQAAAAAQGTuAvgC+QACgVyEAoFwhNQAAoFghtgEZGQAAGxkAoFohAKBdITgAAKBeIWwAAKBEIHcAbgAAoCIjYwByAADgNdi73IAIRWFiY2RlZmdpamxub3JzdHYARhlKGVoZXhlmGWkZkhmWGZkZnRmgGa0ZxhnLGc8Z4BkjGmygZyIAoIwqgAFjbXAAUBlTGVgZ9SF0ZfVhbQBhAOSgswM6FgCghipyImV2ZQAfYQABaXliGWUZcgBjAB1hM2RvAHQAIWGAoWUibHFzAMYEcBl6GfGhZSLOBAAAdhlsAGEAbgD0AN8EgKF+KmNkbACBGYQZjBljAACgqSpvAHQAb6CAKmyggioAoIQqZeDbIgD+cwAAoJQqcgAA4DXYJN3noGsirATtIWVsAKA3IWMAeQBTZIChdyJFYWoApxmpGasZAKCSKgCgpSoAoKQqAAJFYWVztBm2Gb0ZwhkAoGkicABwoIoq8iFveACgiipxoIgq8aCIKrUZaQBtAACg5yJwAGYAAOA12FjdYQB2AOUAYwIAAWNp0xnWGXIAAKAKIW0AAKFzImVs3BneGQCgjioAoJAqAIM+ADtjZGxxco0E6xn0GfgZ/BkBGgABY2nvGfEZAKCnKnIAAKB6Km8AdAAAoNci0CFhcgCglSl1ImVzdAAAoHwqgAJhZGVscwAKGvQZFhrVBCAa8AEPGgAAFBpwAHIAbwD4AFkZcgAAoHgpcQAAAWxxxAQbGmwAZQBzAPMASRlpAO0A5AQAAWVuJxouGnIjdG5lcXEAAOBpIgD+xQAsGgAFQWFiY2Vma29zeUAaQxpmGmoabRqDGocalhrCGtMacgDyAMwCAAJpbG1yShpOGlAaVBpyAHMA8ABxD2YAvWBpAGwA9AASBQABZHJYGlsaYwB5AEpkAKGUIWN3YBpkGmkAcgAAoEgpAKCtIWEAcgAAoA8h6SFyYyVhgAFhbHIAcxp7Gn8a8iF0c3WgZSZpAHQAAKBlJuwhaXAAoCYg4yFvbgCguSJyAADgNdgl3XMAAAFld4wakRphInJvdwAAoCUpYSJyb3cAAKAmKYACYW1vcHIAnxqjGqcauhq+GnIAcgAAoP8h9CFodACgOyJrAAABbHKsGrMaZSRmdGFycm93AACgqSHpJGdodGFycm93AKCqIWYAAOA12Fnd4iFhcgCgFSCAAWNsdADIGswa0BpyAADgNdi93GEAcwDoAGka8iFvaydhAAFicNca2xr1IWxsAKBDIOghZW4AoBAg4Qr2GgAA/RoAAAgbExsaGwAAIRs7GwAAAAA+G2IbmRuVG6sbAACyG80b0htjAHUAdABlADuA7QDtQAChYyBpeQEbBhtyAGMAO4DuAO5AOGQAAWN4CxsNG3kANWRjAGwAO4ChAKFAAAFmcssCFhsA4DXYJt1yAGEAdgBlADuA7ADsQIChSCFpbm8AJxsyGzYbAAFpbisbLxtuAHQAAKAMKnQAAKAtIuYhaW4AoNwpdABhAACgKSHsIWlnM2GAAWFvcABDG1sbXhuAAWNndABJG0sbWRtyACthgAFlbHAAcQVRG1UbaQBuAOUAyAVhAHIA9AByBWgAMWFmAACgtyJlAGQAtWEAoggiY2ZvdGkbbRt1G3kb4SFyZQCgBSFpAG4AdKAeImkAZQAAoN0pZABvAPQAWxsAoisiY2VscIEbhRuPG5QbYQBsAACguiIAAWdyiRuNG2UAcgDzACMQ4wCCG2EicmhrAACgFyryIW9kAKA8KgACY2dwdJ8boRukG6gbeQBRZG8AbgAvYWYAAOA12FrdYQC5Y3UAZQBzAHQAO4C/AL9AAAFjabUbuRtyAADgNdi+3G4AAKIIIkVkc3bCG8QbyBvQAwCg+SJvAHQAAKD1Inag9CIAoPMiaaBiIOwhZGUpYesB1hsAANkbYwB5AFZkbAA7gO8A70AAA2NmbW9zdeYb7hvyG/Ub+hsFHAABaXnqG+0bcgBjADVhOWRyAADgNdgn3eEhdGg3YnAAZgAA4DXYW93jAf8bAAADHHIAAOA12L/c8iFjeVhk6yFjeVRkAARhY2ZnaGpvcxUcGhwiHCYcKhwtHDAcNRzwIXBhdqC6A/BjAAFleR4cIRzkIWlsN2E6ZHIAAOA12CjdciJlZW4AOGFjAHkARWRjAHkAXGRwAGYAAOA12FzdYwByAADgNdjA3IALQUJFSGFiY2RlZmdoamxtbm9wcnN0dXYAXhxtHHEcdRx5HN8cBx0dHTwd3B3tHfEdAR4EHh0eLB5FHrwewx7hHgkfPR9LH4ABYXJ0AGQcZxxpHHIA8gBvB/IAxQLhIWlsAKAbKeEhcnIAoA4pZ6BmIgCgiyphAHIAAKBiKWMJjRwAAJAcAACVHAAAAAAAAAAAAACZHJwcAACmHKgcrRwAANIc9SF0ZTph7SJwdHl2AKC0KXIAYQDuAFoG4iFkYbtjZwAAoegnZGyhHKMcAKCRKeUAiwYAoIUqdQBvADuAqwCrQHIAgKOQIWJmaGxwc3QAuhy/HMIcxBzHHMoczhxmoOQhcwAAoB8pcwAAoB0p6wCyGnAAAKCrIWwAAKA5KWkAbQAAoHMpbAAAoKIhAKGrKmFl1hzaHGkAbAAAoBkpc6CtKgDgrSoA/oABYWJyAOUc6RztHHIAcgAAoAwpcgBrAACgcicAAWFr8Rz4HGMAAAFla/Yc9xx7YFtgAAFlc/wc/hwAoIspbAAAAWR1Ax0FHQCgjykAoI0pAAJhZXV5Dh0RHRodHB3yIW9uPmEAAWRpFR0YHWkAbAA8YewAowbiAPccO2QAAmNxcnMkHScdLB05HWEAAKA2KXUAbwDyoBwgqhEAAWR1MB00HeghYXIAoGcpcyJoYXIAAKBLKWgAAKCyIQCiZCJmZ3FzRB1FB5Qdnh10AIACYWhscnQATh1WHWUdbB2NHXIicm93AHSgkCFhAOkAzxxhI3Jwb29uAAABZHVeHWId7yF3bgCgvSFwAACgvCHlJGZ0YXJyb3dzAKDHIWkiZ2h0AIABYWhzAHUdex2DHXIicm93APOglCGdBmEAcgBwAG8AbwBuAPMAzgtxAHUAaQBnAGEAcgByAG8A9wBlGugkcmVldGltZXMAoMsi8aFkIk0HAACaHWwAYQBuAPQAXgcAon0qY2Rnc6YdqR2xHbcdYwAAoKgqbwB0AG+gfypyoIEqAKCDKmXg2iIA/nMAAKCTKoACYWRlZ3MAwB3GHcod1h3ZHXAAcAByAG8A+ACmHG8AdAAAoNYicQAAAWdxzx3SHXQA8gBGB2cAdADyAHQcdADyAFMHaQDtAGMHgAFpbHIA4h3mHeod8yFodACgfClvAG8A8gDKBgDgNdgp3UWgdiIAoJEqYQH1Hf4dcgAAAWR1YB35HWygvCEAoGopbABrAACghCVjAHkAWWQAomoiYWNodAweDx4VHhkecgDyAGsdbwByAG4AZQDyAGAW4SFyZACgaylyAGkAAKD6JQABaW8hHiQe5CFvdEBh9SFzdGGgsCPjIWhlAKCwIwACRWFlczMeNR48HkEeAKBoInAAcKCJKvIhb3gAoIkqcaCHKvGghyo0HmkAbQAAoOYiAARhYm5vcHR3elIeXB5fHoUelh6mHqsetB4AAW5yVh5ZHmcAAKDsJ3IAAKD9IXIA6wCwBmcAgAFsbXIAZh52Hnse5SFmdAABYXKIB2weaQBnAGgAdABhAHIAcgBvAPcAkwfhInBzdG8AoPwnaQBnAGgAdABhAHIAcgBvAPcAmgdwI2Fycm93AAABbHKNHpEeZQBmAPQAxhxpImdodAAAoKwhgAFhZmwAnB6fHqIecgAAoIUpAOA12F3ddQBzAACgLSppIm1lcwAAoDQqYQGvHrMecwB0AACgFyLhAIoOZaHKJbkeRhLuIWdlAKDKJWEAcgBsoCgAdAAAoJMpgAJhY2htdADMHs8e1R7bHt0ecgDyAJ0GbwByAG4AZQDyANYWYQByAGSgyyEAoG0pAKAOIHIAaQAAoL8iAANhY2hpcXTrHu8e1QfzHv0eBh/xIXVvAKA5IHIAAOA12MHcbQDloXIi+h4AAPweAKCNKgCgjyoAAWJ19xwBH28AcqAYIACgGiDyIW9rQmEAhDwAO2NkaGlscXJCBhcfxh0gHyQfKB8sHzEfAAFjaRsfHR8AoKYqcgAAoHkqcgBlAOUAkx3tIWVzAKDJIuEhcnIAoHYpdSJlc3QAAKB7KgABUGk1HzkfYQByAACglillocMlAgdfEnIAAAFkdUIfRx9zImhhcgAAoEop6CFhcgCgZikAAWVuTx9WH3IjdG5lcXEAAOBoIgD+xQBUHwAHRGFjZGVmaGlsbm9wc3VuH3Ifoh+rH68ftx+7H74f5h/uH/MfBwj/HwsgxCFvdACgOiIAAmNscHJ5H30fiR+eH3IAO4CvAK9AAAFldIEfgx8AoEImZaAgJ3MAZQAAoCAnc6CmIXQAbwCAoaYhZGx1AJQfmB+cH28AdwDuAHkDZQBmAPQA6gbwAOkO6yFlcgCgriUAAW95ph+qH+0hbWEAoCkqPGThIXNoAKAUIOElc3VyZWRhbmdsZQCgISJyAADgNdgq3W8AAKAnIYABY2RuAMQfyR/bH3IAbwA7gLUAtUBhoiMi0B8AANMf1x9zAPQAKxFpAHIAAKDwKm8AdAA7gLcAt0B1AHMA4qESIh4TAADjH3WgOCIAoCoqYwHqH+0fcAAAoNsq8gB+GnAAbAB1APMACAgAAWRw9x/7H+UhbHMAoKciZgAA4DXYXt0AAWN0AyAHIHIAAOA12MLc8CFvcwCgPiJsobwDECAVIPQiaW1hcACguCJhAPAAEyAADEdMUlZhYmNkZWZnaGlqbG1vcHJzdHV2dzwgRyBmIG0geSCqILgg2iDeIBEhFSEyIUMhTSFQIZwhnyHSIQAiIyKLIrEivyIUIwABZ3RAIEMgAODZIjgD9uBrItIgBwmAAWVsdABNIF8gYiBmAHQAAAFhclMgWCByInJvdwAAoM0h6SRnaHRhcnJvdwCgziEA4NgiOAP24Goi0iBfCekkZ2h0YXJyb3cAoM8hAAFEZHEgdSDhIXNoAKCvIuEhc2gAoK4igAJiY25wdACCIIYgiSCNIKIgbABhAACgByL1IXRlRGFnAADgICLSIACiSSJFaW9wlSCYIJwgniAA4HAqOANkAADgSyI4A3MASWFyAG8A+AAyCnUAcgBhoG4mbADzoG4mmwjzAa8gAACzIHAAO4CgAKBAbQBwAOXgTiI4AyoJgAJhZW91eQDBIMogzSDWINkg8AHGIAAAyCAAoEMqbwBuAEhh5CFpbEZhbgBnAGSgRyJvAHQAAOBtKjgDcAAAoEIqPWThIXNoAKATIACjYCJBYWRxc3jpIO0g+SD+IAIhDCFyAHIAAKDXIXIAAAFocvIg9SBrAACgJClvoJch9wAGD28AdAAA4FAiOAN1AGkA9gC7CAABZWkGIQohYQByAACgKCntAN8I6SFzdPOgBCLlCHIAAOA12CvdAAJFZXN0/wgcISshLiHxoXEiIiEAABMJ8aFxIgAJAAAnIWwAYQBuAPQAEwlpAO0AGQlyoG8iAKBvIoABQWFwADghOyE/IXIA8gBeIHIAcgAAoK4hYQByAACg8ipzogsiSiEAAAAAxwtkoPwiAKD6ImMAeQBaZIADQUVhZGVzdABcIV8hYiFmIWkhkyGWIXIA8gBXIADgZiI4A3IAcgAAoJohcgAAoCUggKFwImZxcwBwIYQhjiF0AAABYXJ1IXohcgByAG8A9wBlIWkAZwBoAHQAYQByAHIAbwD3AD4h8aFwImAhAACKIWwAYQBuAPQAZwlz4H0qOAMAoG4iaQDtAG0JcqBuImkA5aDqIkUJaQDkADoKAAFwdKMhpyFmAADgNdhf3YCBrAA7aW4AriGvIcchrEBuAIChCSJFZHYAtyG6Ib8hAOD5IjgDbwB0AADg9SI4A+EB1gjEIcYhAKD3IgCg9iJpAHagDCLhAagJzyHRIQCg/iIAoP0igAFhb3IA2CHsIfEhcgCAoSYiYXN0AOAh5SHpIWwAbABlAOwAywhsAADg/SrlIADgAiI4A2wiaW50AACgFCrjoYAi9yEAAPohdQDlAJsJY+CvKjgDZaCAIvEAkwkAAkFhaXQHIgoiFyIeInIA8gBsIHIAcgAAoZshY3cRIhQiAOAzKTgDAOCdITgDZyRodGFycm93AACgmyFyAGkA5aDrIr4JgANjaGltcHF1AC8iPCJHIpwhTSJQIloigKGBImNlcgA2Iv0JOSJ1AOUABgoA4DXYw9zvIXJ0bQKdIQAAAABEImEAcgDhAOEhbQBloEEi8aBEIiYKYQDyAMsIcwB1AAABYnBWIlgi5QDUCeUA3wmAAWJjcABgInMieCKAoYQiRWVzAGci7glqIgDgxSo4A2UAdABl4IIi0iBxAPGgiCJoImMAZaCBIvEA/gmAoYUiRWVzAH8iFgqCIgDgxio4A2UAdABl4IMi0iBxAPGgiSKAIgACZ2lscpIilCKaIpwi7AAMCWwAZABlADuA8QDxQOcAWwlpI2FuZ2xlAAABbHKkIqoi5SFmdGWg6iLxAEUJaSJnaHQAZaDrIvEAvgltoL0DAKEjAGVzuCK8InIAbwAAoBYhcAAAoAcggARESGFkZ2lscnMAziLSItYi2iLeIugi7SICIw8j4SFzaACgrSLhIXJyAKAEKXAAAOBNItIg4SFzaACgrCIAAWV04iLlIgDgZSLSIADgPgDSIG4iZmluAACg3imAAUFldADzIvci+iJyAHIAAKACKQDgZCLSIHLgPADSIGkAZQAA4LQi0iAAAUF0BiMKI3IAcgAAoAMp8iFpZQDgtSLSIGkAbQAA4Dwi0iCAAUFhbgAaIx4jKiNyAHIAAKDWIXIAAAFociMjJiNrAACgIylvoJYh9wD/DuUhYXIAoCcpUxJqFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVCMAAF4jaSN/I4IjjSOeI8AUAAAAAKYjwCMAANoj3yMAAO8jHiQvJD8kRCQAAWNzVyNsFHUAdABlADuA8wDzQAABaXlhI2cjcgBjoJoiO4D0APRAPmSAAmFiaW9zAHEjdCN3I3EBeiNzAOgAdhTsIWFjUWF2AACgOCrvIWxkAKC8KewhaWdTYQABY3KFI4kjaQByAACgvykA4DXYLN1vA5QjAAAAAJYjAACcI24A22JhAHYAZQA7gPIA8kAAoMEpAAFibaEjjAphAHIAAKC1KQACYWNpdKwjryO6I70jcgDyAFkUAAFpcrMjtiNyAACgvinvIXNzAKC7KW4A5QDZCgCgwCmAAWFlaQDFI8gjyyNjAHIATWFnAGEAyWOAAWNkbgDRI9Qj1iPyIW9uv2MAoLYpdQDzAHgBcABmAADgNdhg3YABYWVsAOQj5yPrI3IAAKC3KXIAcAAAoLkpdQDzAHwBAKMoImFkaW9zdvkj/CMPJBMkFiQbJHIA8gBeFIChXSplZm0AAyQJJAwkcgBvoDQhZgAAoDQhO4CqAKpAO4C6ALpA5yFvZgCgtiJyAACgVipsIm9wZQAAoFcqAKBbKoABY2xvACMkJSQrJPIACCRhAHMAaAA7gPgA+EBsAACgmCJpAGwBMyQ4JGQAZQA7gPUA9UBlAHMAYaCXInMAAKA2Km0AbAA7gPYA9kDiIWFyAKA9I+EKXiQAAHokAAB8JJQkAACYJKkkAAAAALUkEQsAAPAkAAAAAAQleiUAAIMlcgCAoSUiYXN0AGUkbyQBCwCBtgA7bGokayS2QGwAZQDsABgDaQJ1JAAAAAB4JG0AAKDzKgCg/Sp5AD9kcgCAAmNpbXB0AIUkiCSLJJkSjyRuAHQAJWBvAGQALmBpAGwAAKAwIOUhbmsAoDEgcgAA4DXYLd2AAWltbwCdJKAkpCR2oMYD1WNtAGEA9AD+B24AZQAAoA4m9KHAA64kAAC0JGMjaGZvcmsAAKDUItZjAAFhdbgkxCRuAAABY2u9JMIkawBooA8hAKAOIfYAaRpzAACkKwBhYmNkZW1zdNMkIRPXJNsk4STjJOck6yTjIWlyAKAjKmkAcgAAoCIqAAFvdYsW3yQAoCUqAKByKm4AO4CxALFAaQBtAACgJip3AG8AAKAnKoABaXB1APUk+iT+JO4idGludACgFSpmAADgNdhh3W4AZAA7gKMAo0CApHoiRWFjZWlub3N1ABMlFSUYJRslTCVRJVklSSV1JQCgsypwAACgtyp1AOUAPwtjoK8qgKJ6ImFjZW5zACclLSU0JTYlSSVwAHAAcgBvAPgAFyV1AHIAbAB5AGUA8QA/C/EAOAuAAWFlcwA8JUElRSXwInByb3gAoLkqcQBxAACgtSppAG0AAKDoImkA7QBEC20AZQDzoDIgIguAAUVhcwBDJVclRSXwAEAlgAFkZnAATwtfJXElgAFhbHMAZSVpJW0l7CFhcgCgLiPpIW5lAKASI/UhcmYAoBMjdKAdIu8AWQvyIWVsAKCwIgABY2l9JYElcgAA4DXYxdzIY24iY3NwAACgCCAAA2Zpb3BzdZElKxuVJZolnyWkJXIAAOA12C7dcABmAADgNdhi3XIiaW1lAACgVyBjAHIAAOA12MbcgAFhZW8AqiW6JcAldAAAAWVpryW2JXIAbgBpAG8AbgDzABkFbgB0AACgFipzAHQAZaA/APEACRj0AG0LgApBQkhhYmNkZWZoaWxtbm9wcnN0dXgA4yXyJfYl+iVpJpAmpia9JtUm5ib4JlonaCdxJ3UnnietJ7EnyCfiJ+cngAFhcnQA6SXsJe4lcgDyAJkM8gD6AuEhaWwAoBwpYQByAPIA3BVhAHIAAKBkKYADY2RlbnFydAAGJhAmEyYYJiYmKyZaJgABZXUKJg0mAOA9IjEDdABlAFVhaQDjACAN7SJwdHl2AKCzKWcAgKHpJ2RlbAAgJiImJCYAoJIpAKClKeUA9wt1AG8AO4C7ALtAcgAApZIhYWJjZmhscHN0dz0mQCZFJkcmSiZMJk4mUSZVJlgmcAAAoHUpZqDlIXMAAKAgKQCgMylzAACgHinrALka8ACVHmwAAKBFKWkAbQAAoHQpbAAAoKMhAKCdIQABYWleJmImaQBsAACgGilvAG6gNiJhAGwA8wB2C4ABYWJyAG8mciZ2JnIA8gAvEnIAawAAoHMnAAFha3omgSZjAAABZWt/JoAmfWBdYAABZXOFJocmAKCMKWwAAAFkdYwmjiYAoI4pAKCQKQACYWV1eZcmmiajJqUm8iFvbllhAAFkaZ4moSZpAGwAV2HsAA8M4gCAJkBkAAJjbHFzrSawJrUmuiZhAACgNylkImhhcgAAoGkpdQBvAPKgHSCjAWgAAKCzIYABYWNnAMMm0iaUC2wAgKEcIWlwcwDLJs4migxuAOUAoAxhAHIA9ADaC3QAAKCtJYABaWxyANsm3ybjJvMhaHQAoH0pbwBvAPIANgwA4DXYL90AAWFv6ib1JnIAAAFkde8m8SYAoMEhbKDAIQCgbCl2oMED8WOAAWducwD+Jk4nUCdoAHQAAANhaGxyc3QKJxInISc1Jz0nRydyInJvdwB0oJIhYQDpAFYmYSNycG9vbgAAAWR1GiceJ28AdwDuAPAmcAAAoMAh5SFmdAABYWgnJy0ncgByAG8AdwDzAAkMYQByAHAAbwBvAG4A8wATBGklZ2h0YXJyb3dzAACgySFxAHUAaQBnAGEAcgByAG8A9wBZJugkcmVldGltZXMAoMwiZwDaYmkAbgBnAGQAbwB0AHMAZQDxABwYgAFhaG0AYCdjJ2YncgDyAAkMYQDyABMEAKAPIG8idXN0AGGgsSPjIWhlAKCxI+0haWQAoO4qAAJhYnB0fCeGJ4knmScAAW5ygCeDJ2cAAKDtJ3IAAKD+IXIA6wAcDIABYWZsAI8nkieVJ3IAAKCGKQDgNdhj3XUAcwAAoC4qaSJtZXMAAKA1KgABYXCiJ6gncgBnoCkAdAAAoJQp7yJsaW50AKASKmEAcgDyADwnAAJhY2hxuCe8J6EMwCfxIXVvAKA6IHIAAOA12MfcAAFidYAmxCdvAPKgGSCoAYABaGlyAM4n0ifWJ3IAZQDlAE0n7SFlcwCgyiJpAIChuSVlZmwAXAxjEt4n9CFyaQCgzinsInVoYXIAoGgpAKAeIWENBSgJKA0oSyhVKIYoAACLKLAoAAAAAOMo5ygAABApJCkxKW0pcSmHKaYpAACYKgAAAACxKmMidXRlAFthcQB1AO8ABR+ApHsiRWFjZWlucHN5ABwoHignKCooLygyKEEoRihJKACgtCrwASMoAAAlKACguCpvAG4AYWF1AOUAgw1koLAqaQBsAF9hcgBjAF1hgAFFYXMAOCg6KD0oAKC2KnAAAKC6KmkAbQAAoOki7yJsaW50AKATKmkA7QCIDUFkbwB0AGKixSKRFgAAAABTKACgZiqAA0FhY21zdHgAYChkKG8ocyh1KHkogihyAHIAAKDYIXIAAAFocmkoayjrAJAab6CYIfcAzAd0ADuApwCnQGkAO2D3IWFyAKApKW0AAAFpbn4ozQBuAHUA8wDOAHQAAKA2J3IA7+A12DDdIxkAAmFjb3mRKJUonSisKHIAcAAAoG8mAAFoeZkonChjAHkASWRIZHIAdABtAqUoAAAAAKgoaQDkAFsPYQByAGEA7ABsJDuArQCtQAABZ22zKLsobQBhAAChwwNmdroouijCY4CjPCJkZWdsbnByAMgozCjPKNMo1yjaKN4obwB0AACgairxoEMiCw5FoJ4qAKCgKkWgnSoAoJ8qZQAAoEYi7CF1cwCgJCrhIXJyAKByKWEAcgDyAPwMAAJhZWl07Sj8KAEpCCkAAWxz8Sj4KGwAcwBlAHQAbQDpAH8oaABwAACgMyrwImFyc2wAoOQpAAFkbFoPBSllAACgIyNloKoqc6CsKgDgrCoA/oABZmxwABUpGCkfKfQhY3lMZGKgLwBhoMQpcgAAoD8jZgAA4DXYZN1hAAABZHIoKRcDZQBzAHWgYCZpAHQAAKBgJoABY3N1ADYpRilhKQABYXU6KUApcABzoJMiAOCTIgD+cABzoJQiAOCUIgD+dQAAAWJwSylWKQChjyJlcz4NUCllAHQAZaCPIvEAPw0AoZAiZXNIDVspZQB0AGWgkCLxAEkNAKGhJWFmZilbBHIAZQFrKVwEAKChJWEAcgDyAAMNAAJjZW10dyl7KX8pgilyAADgNdjI3HQAbQDuAM4AaQDsAAYpYQByAOYAVw0AAWFyiimOKXIA5qAGJhESAAFhbpIpoylpImdodAAAAWVwmSmgKXAAcwBpAGwAbwDuANkXaADpAKAkcwCvYIACYmNtbnAArin8KY4NJSooKgCkgiJFZGVtbnByc7wpvinCKcgpzCnUKdgp3CkAoMUqbwB0AACgvSpkoIYibwB0AACgwyr1IWx0AKDBKgABRWXQKdIpAKDLKgCgiiLsIXVzAKC/KuEhcnIAoHkpgAFlaXUA4inxKfQpdAAAoYIiZW7oKewpcQDxoIYivSllAHEA8aCKItEpbQAAoMcqAAFicPgp+ikAoNUqAKDTKmMAgKJ7ImFjZW5zAAcqDSoUKhYqRihwAHAAcgBvAPgAIyh1AHIAbAB5AGUA8QCDDfEAfA2AAWFlcwAcKiIqPShwAHAAcgBvAPgAPChxAPEAOShnAACgaiYApoMiMTIzRWRlaGxtbnBzPCo/KkIqRSpHKlIqWCpjKmcqaypzKncqO4C5ALlAO4CyALJAO4CzALNAAKDGKgABb3NLKk4qdAAAoL4qdQBiAACg2CpkoIcibwB0AACgxCpzAAABb3VdKmAqbAAAoMknYgAAoNcq4SFycgCgeyn1IWx0AKDCKgABRWVvKnEqAKDMKgCgiyLsIXVzAKDAKoABZWl1AH0qjCqPKnQAAKGDImVugyqHKnEA8aCHIkYqZQBxAPGgiyJwKm0AAKDIKgABYnCTKpUqAKDUKgCg1iqAAUFhbgCdKqEqrCpyAHIAAKDZIXIAAAFocqYqqCrrAJUab6CZIfcAxQf3IWFyAKAqKWwAaQBnADuA3wDfQOELzyrZKtwq6SrsKvEqAAD1KjQrAAAAAAAAAAAAAEwrbCsAAHErvSsAAAAAAADRK3IC1CoAAAAA2CrnIWV0AKAWI8RjcgDrAOUKgAFhZXkA4SrkKucq8iFvbmVh5CFpbGNhQmRvAPQAIg5sInJlYwAAoBUjcgAA4DXYMd0AAmVpa2/7KhIrKCsuK/IBACsAAAkrZQAAATRm6g0EK28AcgDlAOsNYQBzorgDECsAAAAAEit5AG0A0WMAAWNuFislK2sAAAFhcxsrIStwAHAAcgBvAPgAFw5pAG0AAKA8InMA8AD9DQABYXMsKyEr8AAXDnIAbgA7gP4A/kDsATgrOyswG2QA5QBnAmUAcwCAgdcAO2JkAEMrRCtJK9dAYaCgInIAAKAxKgCgMCqAAWVwcwBRK1MraSvhAAkh4qKkIlsrXysAAAAAYytvAHQAAKA2I2kAcgAAoPEqb+A12GXdcgBrAACg2irhAHgociJpbWUAAKA0IIABYWlwAHYreSu3K2QA5QC+DYADYWRlbXBzdACFK6MrmiunK6wrsCuzK24iZ2xlAACitSVkbHFykCuUK5ornCvvIXduAKC/JeUhZnRloMMl8QACBwCgXCJpImdodABloLkl8QBdDG8AdAAAoOwlaSJudXMAAKA6KuwhdXMAoDkqYgAAoM0p6SFtZQCgOyrlInppdW0AoOIjgAFjaHQAwivKK80rAAFyecYrySsA4DXYydxGZGMAeQBbZPIhb2tnYQABaW/UK9creAD0ANERaCJlYWQAAAFsct4r5ytlAGYAdABhAHIAcgBvAPcAXQbpJGdodGFycm93AKCgIQAJQUhhYmNkZmdobG1vcHJzdHV3CiwNLBEsHSwnLDEsQCxLLFIsYix6LIQsjyzLLOgs7Sz/LAotcgDyAAkDYQByAACgYykAAWNyFSwbLHUAdABlADuA+gD6QPIACQ1yAOMBIywAACUseQBeZHYAZQBtYQABaXkrLDAscgBjADuA+wD7QENkgAFhYmgANyw6LD0scgDyANEO7CFhY3FhYQDyAOAOAAFpckQsSCzzIWh0AKB+KQDgNdgy3XIAYQB2AGUAO4D5APlAYQFWLF8scgAAAWxyWixcLACgvyEAoL4hbABrAACggCUAAWN0Zix2LG8CbCwAAAAAcyxyAG4AZaAcI3IAAKAcI28AcAAAoA8jcgBpAACg+CUAAWFsfiyBLGMAcgBrYTuAqACoQAABZ3CILIssbwBuAHNhZgAA4DXYZt0AA2FkaGxzdZksniynLLgsuyzFLHIAcgBvAPcACQ1vAHcAbgBhAHIAcgBvAPcA2A5hI3Jwb29uAAABbHKvLLMsZQBmAPQAWyxpAGcAaAD0AF0sdQDzAKYOaQAAocUDaGzBLMIs0mNvAG4AxWPwI2Fycm93cwCgyCGAAWNpdADRLOEs5CxvAtcsAAAAAN4scgBuAGWgHSNyAACgHSNvAHAAAKAOI24AZwBvYXIAaQAAoPklYwByAADgNdjK3IABZGlyAPMs9yz6LG8AdAAAoPAi7CFkZWlhaQBmoLUlAKC0JQABYW0DLQYtcgDyAMosbAA7gPwA/EDhIm5nbGUAoKcpgAdBQkRhY2RlZmxub3Byc3oAJy0qLTAtNC2bLZ0toS2/LcMtxy3TLdgt3C3gLfwtcgDyABADYQByAHag6CoAoOkqYQBzAOgA/gIAAW5yOC08LechcnQAoJwpgANla25wcnN0AJkpSC1NLVQtXi1iLYItYQBwAHAA4QAaHG8AdABoAGkAbgDnAKEXgAFoaXIAoSmzJFotbwBwAPQAdCVooJUh7wD4JgABaXVmLWotZwBtAOEAuygAAWJwbi14LXMjZXRuZXEAceCKIgD+AODLKgD+cyNldG5lcQBx4IsiAP4A4MwqAP4AAWhyhi2KLWUAdADhABIraSNhbmdsZQAAAWxyki2WLeUhZnQAoLIiaSJnaHQAAKCzInkAMmThIXNoAKCiIoABZWxyAKcttC24LWKiKCKuLQAAAACyLWEAcgAAoLsicQAAoFoi7CFpcACg7iIAAWJ0vC1eD2EA8gBfD3IAAOA12DPddAByAOkAlS1zAHUAAAFicM0t0C0A4IIi0iAA4IMi0iBwAGYAAOA12GfdcgBvAPAAWQt0AHIA6QCaLQABY3XkLegtcgAA4DXYy9wAAWJw7C30LW4AAAFFZXUt8S0A4IoiAP5uAAABRWV/LfktAOCLIgD+6SJnemFnAKCaKYADY2Vmb3BycwANLhAuJS4pLiMuLi40LukhcmN1YQABZGkULiEuAAFiZxguHC5hAHIAAKBfKmUAcaAnIgCgWSLlIXJwAKAYIXIAAOA12DTdcABmAADgNdho3WWgQCJhAHQA6ABqD2MAcgAA4DXYzNzjCuQRUC4AAFQuAABYLmIuAAAAAGMubS5wLnQuAAAAAIguki4AAJouJxIqEnQAcgDpAB0ScgAA4DXYNd0AAUFhWy5eLnIA8gDnAnIA8gCTB75jAAFBYWYuaS5yAPIA4AJyAPIAjAdhAPAAeh5pAHMAAKD7IoABZHB0APgReS6DLgABZmx9LoAuAOA12GnddQDzAP8RaQBtAOUABBIAAUFhiy6OLnIA8gDuAnIA8gCaBwABY3GVLgoScgAA4DXYzdwAAXB0nS6hLmwAdQDzACUScgDpACASAARhY2VmaW9zdbEuvC7ELsguzC7PLtQu2S5jAAABdXm2LrsudABlADuA/QD9QE9kAAFpecAuwy5yAGMAd2FLZG4AO4ClAKVAcgAA4DXYNt1jAHkAV2RwAGYAAOA12GrdYwByAADgNdjO3AABY23dLt8ueQBOZGwAO4D/AP9AAAVhY2RlZmhpb3N38y73Lv8uAi8MLxAvEy8YLx0vIi9jInV0ZQB6YQABYXn7Lv4u8iFvbn5hN2RvAHQAfGEAAWV0Bi8KL3QAcgDmAB8QYQC2Y3IAAOA12DfdYwB5ADZk5yJyYXJyAKDdIXAAZgAA4DXYa91jAHIAAOA12M/cAAFqbiYvKC8AoA0gagAAoAwg");
  }
});

// ../../node_modules/.pnpm/entities@8.0.0/node_modules/entities/dist/internal/bin-trie-flags.js
var BinTrieFlags;
var init_bin_trie_flags = __esm({
  "../../node_modules/.pnpm/entities@8.0.0/node_modules/entities/dist/internal/bin-trie-flags.js"() {
    (function(BinTrieFlags2) {
      BinTrieFlags2[BinTrieFlags2["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
      BinTrieFlags2[BinTrieFlags2["FLAG13"] = 8192] = "FLAG13";
      BinTrieFlags2[BinTrieFlags2["BRANCH_LENGTH"] = 8064] = "BRANCH_LENGTH";
      BinTrieFlags2[BinTrieFlags2["JUMP_TABLE"] = 127] = "JUMP_TABLE";
    })(BinTrieFlags || (BinTrieFlags = {}));
  }
});

// ../../node_modules/.pnpm/entities@8.0.0/node_modules/entities/dist/decode.js
function isNumber(code) {
  return code >= CharCodes.ZERO && code <= CharCodes.NINE;
}
function isHexadecimalCharacter(code) {
  return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F;
}
function isAsciiAlphaNumeric(code) {
  return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z || isNumber(code);
}
function isEntityInAttributeInvalidEnd(code) {
  return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
}
function determineBranch(decodeTree, current, nodeIndex, char) {
  const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
  const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
  if (branchCount === 0) {
    return jumpOffset !== 0 && char === jumpOffset ? nodeIndex : -1;
  }
  if (jumpOffset) {
    const value2 = char - jumpOffset;
    return value2 < 0 || value2 >= branchCount ? -1 : decodeTree[nodeIndex + value2] - 1;
  }
  const packedKeySlots = branchCount + 1 >> 1;
  let lo = 0;
  let hi = branchCount - 1;
  while (lo <= hi) {
    const mid = lo + hi >>> 1;
    const slot = mid >> 1;
    const packed = decodeTree[nodeIndex + slot];
    const midKey = packed >> (mid & 1) * 8 & 255;
    if (midKey < char) {
      lo = mid + 1;
    } else if (midKey > char) {
      hi = mid - 1;
    } else {
      return decodeTree[nodeIndex + packedKeySlots + mid];
    }
  }
  return -1;
}
var CharCodes, TO_LOWER_BIT, EntityDecoderState, DecodingMode, EntityDecoder;
var init_decode = __esm({
  "../../node_modules/.pnpm/entities@8.0.0/node_modules/entities/dist/decode.js"() {
    init_decode_codepoint();
    init_bin_trie_flags();
    init_decode_data_html();
    (function(CharCodes2) {
      CharCodes2[CharCodes2["NUM"] = 35] = "NUM";
      CharCodes2[CharCodes2["SEMI"] = 59] = "SEMI";
      CharCodes2[CharCodes2["EQUALS"] = 61] = "EQUALS";
      CharCodes2[CharCodes2["ZERO"] = 48] = "ZERO";
      CharCodes2[CharCodes2["NINE"] = 57] = "NINE";
      CharCodes2[CharCodes2["LOWER_A"] = 97] = "LOWER_A";
      CharCodes2[CharCodes2["LOWER_F"] = 102] = "LOWER_F";
      CharCodes2[CharCodes2["LOWER_X"] = 120] = "LOWER_X";
      CharCodes2[CharCodes2["LOWER_Z"] = 122] = "LOWER_Z";
      CharCodes2[CharCodes2["UPPER_A"] = 65] = "UPPER_A";
      CharCodes2[CharCodes2["UPPER_F"] = 70] = "UPPER_F";
      CharCodes2[CharCodes2["UPPER_Z"] = 90] = "UPPER_Z";
    })(CharCodes || (CharCodes = {}));
    TO_LOWER_BIT = 32;
    (function(EntityDecoderState2) {
      EntityDecoderState2[EntityDecoderState2["EntityStart"] = 0] = "EntityStart";
      EntityDecoderState2[EntityDecoderState2["NumericStart"] = 1] = "NumericStart";
      EntityDecoderState2[EntityDecoderState2["NumericDecimal"] = 2] = "NumericDecimal";
      EntityDecoderState2[EntityDecoderState2["NumericHex"] = 3] = "NumericHex";
      EntityDecoderState2[EntityDecoderState2["NamedEntity"] = 4] = "NamedEntity";
    })(EntityDecoderState || (EntityDecoderState = {}));
    (function(DecodingMode2) {
      DecodingMode2[DecodingMode2["Legacy"] = 0] = "Legacy";
      DecodingMode2[DecodingMode2["Strict"] = 1] = "Strict";
      DecodingMode2[DecodingMode2["Attribute"] = 2] = "Attribute";
    })(DecodingMode || (DecodingMode = {}));
    EntityDecoder = class {
      decodeTree;
      emitCodePoint;
      errors;
      constructor(decodeTree, emitCodePoint, errors) {
        this.decodeTree = decodeTree;
        this.emitCodePoint = emitCodePoint;
        this.errors = errors;
      }
      /** The current state of the decoder. */
      state = EntityDecoderState.EntityStart;
      /** Characters that were consumed while parsing an entity. */
      consumed = 1;
      /**
       * The result of the entity.
       *
       * Either the result index of a numeric entity, or the codepoint of a
       * numeric entity.
       */
      result = 0;
      /** The current index in the decode tree. */
      treeIndex = 0;
      /** The number of characters that were consumed in excess. */
      excess = 1;
      /** The mode in which the decoder is operating. */
      decodeMode = DecodingMode.Strict;
      /** The number of characters that have been consumed in the current run. */
      runConsumed = 0;
      /**
       * Resets the instance to make it reusable.
       * @param decodeMode Entity decoding mode to use.
       */
      startEntity(decodeMode) {
        this.decodeMode = decodeMode;
        this.state = EntityDecoderState.EntityStart;
        this.result = 0;
        this.treeIndex = 0;
        this.excess = 1;
        this.consumed = 1;
        this.runConsumed = 0;
      }
      /**
       * Write an entity to the decoder. This can be called multiple times with partial entities.
       * If the entity is incomplete, the decoder will return -1.
       *
       * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
       * entity is incomplete, and resume when the next string is written.
       * @param input The string containing the entity (or a continuation of the entity).
       * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
       * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
       */
      write(input, offset) {
        switch (this.state) {
          case EntityDecoderState.EntityStart: {
            if (input.charCodeAt(offset) === CharCodes.NUM) {
              this.state = EntityDecoderState.NumericStart;
              this.consumed += 1;
              return this.stateNumericStart(input, offset + 1);
            }
            this.state = EntityDecoderState.NamedEntity;
            return this.stateNamedEntity(input, offset);
          }
          case EntityDecoderState.NumericStart: {
            return this.stateNumericStart(input, offset);
          }
          case EntityDecoderState.NumericDecimal: {
            return this.stateNumericDecimal(input, offset);
          }
          case EntityDecoderState.NumericHex: {
            return this.stateNumericHex(input, offset);
          }
          case EntityDecoderState.NamedEntity: {
            return this.stateNamedEntity(input, offset);
          }
        }
      }
      /**
       * Switches between the numeric decimal and hexadecimal states.
       *
       * Equivalent to the `Numeric character reference state` in the HTML spec.
       * @param input The string containing the entity (or a continuation of the entity).
       * @param offset The current offset.
       * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
       */
      stateNumericStart(input, offset) {
        if (offset >= input.length) {
          return -1;
        }
        if ((input.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
          this.state = EntityDecoderState.NumericHex;
          this.consumed += 1;
          return this.stateNumericHex(input, offset + 1);
        }
        this.state = EntityDecoderState.NumericDecimal;
        return this.stateNumericDecimal(input, offset);
      }
      /**
       * Parses a hexadecimal numeric entity.
       *
       * Equivalent to the `Hexademical character reference state` in the HTML spec.
       * @param input The string containing the entity (or a continuation of the entity).
       * @param offset The current offset.
       * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
       */
      stateNumericHex(input, offset) {
        while (offset < input.length) {
          const char = input.charCodeAt(offset);
          if (isNumber(char) || isHexadecimalCharacter(char)) {
            const digit = char <= CharCodes.NINE ? char - CharCodes.ZERO : (char | TO_LOWER_BIT) - CharCodes.LOWER_A + 10;
            this.result = this.result * 16 + digit;
            this.consumed++;
            offset++;
          } else {
            return this.emitNumericEntity(char, 3);
          }
        }
        return -1;
      }
      /**
       * Parses a decimal numeric entity.
       *
       * Equivalent to the `Decimal character reference state` in the HTML spec.
       * @param input The string containing the entity (or a continuation of the entity).
       * @param offset The current offset.
       * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
       */
      stateNumericDecimal(input, offset) {
        while (offset < input.length) {
          const char = input.charCodeAt(offset);
          if (isNumber(char)) {
            this.result = this.result * 10 + (char - CharCodes.ZERO);
            this.consumed++;
            offset++;
          } else {
            return this.emitNumericEntity(char, 2);
          }
        }
        return -1;
      }
      /**
       * Validate and emit a numeric entity.
       *
       * Implements the logic from the `Hexademical character reference start
       * state` and `Numeric character reference end state` in the HTML spec.
       * @param lastCp The last code point of the entity. Used to see if the
       *               entity was terminated with a semicolon.
       * @param expectedLength The minimum number of characters that should be
       *                       consumed. Used to validate that at least one digit
       *                       was consumed.
       * @returns The number of characters that were consumed.
       */
      emitNumericEntity(lastCp, expectedLength) {
        if (this.consumed <= expectedLength) {
          this.errors?.absenceOfDigitsInNumericCharacterReference(this.consumed);
          return 0;
        }
        if (lastCp === CharCodes.SEMI) {
          this.consumed += 1;
        } else if (this.decodeMode === DecodingMode.Strict) {
          return 0;
        }
        this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
        if (this.errors) {
          if (lastCp !== CharCodes.SEMI) {
            this.errors.missingSemicolonAfterCharacterReference();
          }
          this.errors.validateNumericCharacterReference(this.result);
        }
        return this.consumed;
      }
      /**
       * Parses a named entity.
       *
       * Equivalent to the `Named character reference state` in the HTML spec.
       * @param input The string containing the entity (or a continuation of the entity).
       * @param offset The current offset.
       * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
       */
      stateNamedEntity(input, offset) {
        const { decodeTree } = this;
        let current = decodeTree[this.treeIndex];
        let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
        while (offset < input.length) {
          if (valueLength === 0 && (current & BinTrieFlags.FLAG13) !== 0) {
            const runLength = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
            if (this.runConsumed === 0) {
              const firstChar = current & BinTrieFlags.JUMP_TABLE;
              if (input.charCodeAt(offset) !== firstChar) {
                return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
              }
              offset++;
              this.excess++;
              this.runConsumed++;
            }
            while (this.runConsumed < runLength) {
              if (offset >= input.length) {
                return -1;
              }
              const charIndexInPacked = this.runConsumed - 1;
              const packedWord = decodeTree[this.treeIndex + 1 + (charIndexInPacked >> 1)];
              const expectedChar = charIndexInPacked % 2 === 0 ? packedWord & 255 : packedWord >> 8 & 255;
              if (input.charCodeAt(offset) !== expectedChar) {
                this.runConsumed = 0;
                return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
              }
              offset++;
              this.excess++;
              this.runConsumed++;
            }
            this.runConsumed = 0;
            this.treeIndex += 1 + (runLength >> 1);
            current = decodeTree[this.treeIndex];
            valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
          }
          if (offset >= input.length)
            break;
          const char = input.charCodeAt(offset);
          if (char === CharCodes.SEMI && valueLength !== 0 && (current & BinTrieFlags.FLAG13) !== 0) {
            return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
          }
          this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
          if (this.treeIndex < 0) {
            return this.result === 0 || // If we are parsing an attribute
            this.decodeMode === DecodingMode.Attribute && // We shouldn't have consumed any characters after the entity,
            (valueLength === 0 || // And there should be no invalid characters.
            isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
          }
          current = decodeTree[this.treeIndex];
          valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
          if (valueLength !== 0) {
            if (char === CharCodes.SEMI) {
              return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
            }
            if (this.decodeMode !== DecodingMode.Strict && (current & BinTrieFlags.FLAG13) === 0) {
              this.result = this.treeIndex;
              this.consumed += this.excess;
              this.excess = 0;
            }
          }
          offset++;
          this.excess++;
        }
        return -1;
      }
      /**
       * Emit a named entity that was not terminated with a semicolon.
       * @returns The number of characters consumed.
       */
      emitNotTerminatedNamedEntity() {
        const { result, decodeTree } = this;
        const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
        this.emitNamedEntityData(result, valueLength, this.consumed);
        this.errors?.missingSemicolonAfterCharacterReference();
        return this.consumed;
      }
      /**
       * Emit a named entity.
       * @param result The index of the entity in the decode tree.
       * @param valueLength The number of bytes in the entity.
       * @param consumed The number of characters consumed.
       * @returns The number of characters consumed.
       */
      emitNamedEntityData(result, valueLength, consumed) {
        const { decodeTree } = this;
        this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~(BinTrieFlags.VALUE_LENGTH | BinTrieFlags.FLAG13) : decodeTree[result + 1], consumed);
        if (valueLength === 3) {
          this.emitCodePoint(decodeTree[result + 2], consumed);
        }
        return consumed;
      }
      /**
       * Signal to the parser that the end of the input was reached.
       *
       * Remaining data will be emitted and relevant errors will be produced.
       * @returns The number of characters consumed.
       */
      end() {
        switch (this.state) {
          case EntityDecoderState.NamedEntity: {
            return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
          }
          // Otherwise, emit a numeric entity if we have one.
          case EntityDecoderState.NumericDecimal: {
            return this.emitNumericEntity(0, 2);
          }
          case EntityDecoderState.NumericHex: {
            return this.emitNumericEntity(0, 3);
          }
          case EntityDecoderState.NumericStart: {
            this.errors?.absenceOfDigitsInNumericCharacterReference(this.consumed);
            return 0;
          }
          case EntityDecoderState.EntityStart: {
            return 0;
          }
        }
      }
    };
  }
});

// ../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/common/html.js
function getTagID(tagName) {
  var _a;
  return (_a = TAG_NAME_TO_ID.get(tagName)) !== null && _a !== void 0 ? _a : TAG_ID.UNKNOWN;
}
var NS, ATTRS, DOCUMENT_MODE, TAG_NAMES, TAG_ID, TAG_NAME_TO_ID, $, SPECIAL_ELEMENTS, NUMBERED_HEADERS, UNESCAPED_TEXT;
var init_html = __esm({
  "../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/common/html.js"() {
    (function(NS2) {
      NS2["HTML"] = "http://www.w3.org/1999/xhtml";
      NS2["MATHML"] = "http://www.w3.org/1998/Math/MathML";
      NS2["SVG"] = "http://www.w3.org/2000/svg";
      NS2["XLINK"] = "http://www.w3.org/1999/xlink";
      NS2["XML"] = "http://www.w3.org/XML/1998/namespace";
      NS2["XMLNS"] = "http://www.w3.org/2000/xmlns/";
    })(NS || (NS = {}));
    (function(ATTRS2) {
      ATTRS2["TYPE"] = "type";
      ATTRS2["ACTION"] = "action";
      ATTRS2["ENCODING"] = "encoding";
      ATTRS2["PROMPT"] = "prompt";
      ATTRS2["NAME"] = "name";
      ATTRS2["COLOR"] = "color";
      ATTRS2["FACE"] = "face";
      ATTRS2["SIZE"] = "size";
    })(ATTRS || (ATTRS = {}));
    (function(DOCUMENT_MODE2) {
      DOCUMENT_MODE2["NO_QUIRKS"] = "no-quirks";
      DOCUMENT_MODE2["QUIRKS"] = "quirks";
      DOCUMENT_MODE2["LIMITED_QUIRKS"] = "limited-quirks";
    })(DOCUMENT_MODE || (DOCUMENT_MODE = {}));
    (function(TAG_NAMES2) {
      TAG_NAMES2["A"] = "a";
      TAG_NAMES2["ADDRESS"] = "address";
      TAG_NAMES2["ANNOTATION_XML"] = "annotation-xml";
      TAG_NAMES2["APPLET"] = "applet";
      TAG_NAMES2["AREA"] = "area";
      TAG_NAMES2["ARTICLE"] = "article";
      TAG_NAMES2["ASIDE"] = "aside";
      TAG_NAMES2["B"] = "b";
      TAG_NAMES2["BASE"] = "base";
      TAG_NAMES2["BASEFONT"] = "basefont";
      TAG_NAMES2["BGSOUND"] = "bgsound";
      TAG_NAMES2["BIG"] = "big";
      TAG_NAMES2["BLOCKQUOTE"] = "blockquote";
      TAG_NAMES2["BODY"] = "body";
      TAG_NAMES2["BR"] = "br";
      TAG_NAMES2["BUTTON"] = "button";
      TAG_NAMES2["CAPTION"] = "caption";
      TAG_NAMES2["CENTER"] = "center";
      TAG_NAMES2["CODE"] = "code";
      TAG_NAMES2["COL"] = "col";
      TAG_NAMES2["COLGROUP"] = "colgroup";
      TAG_NAMES2["DD"] = "dd";
      TAG_NAMES2["DESC"] = "desc";
      TAG_NAMES2["DETAILS"] = "details";
      TAG_NAMES2["DIALOG"] = "dialog";
      TAG_NAMES2["DIR"] = "dir";
      TAG_NAMES2["DIV"] = "div";
      TAG_NAMES2["DL"] = "dl";
      TAG_NAMES2["DT"] = "dt";
      TAG_NAMES2["EM"] = "em";
      TAG_NAMES2["EMBED"] = "embed";
      TAG_NAMES2["FIELDSET"] = "fieldset";
      TAG_NAMES2["FIGCAPTION"] = "figcaption";
      TAG_NAMES2["FIGURE"] = "figure";
      TAG_NAMES2["FONT"] = "font";
      TAG_NAMES2["FOOTER"] = "footer";
      TAG_NAMES2["FOREIGN_OBJECT"] = "foreignObject";
      TAG_NAMES2["FORM"] = "form";
      TAG_NAMES2["FRAME"] = "frame";
      TAG_NAMES2["FRAMESET"] = "frameset";
      TAG_NAMES2["H1"] = "h1";
      TAG_NAMES2["H2"] = "h2";
      TAG_NAMES2["H3"] = "h3";
      TAG_NAMES2["H4"] = "h4";
      TAG_NAMES2["H5"] = "h5";
      TAG_NAMES2["H6"] = "h6";
      TAG_NAMES2["HEAD"] = "head";
      TAG_NAMES2["HEADER"] = "header";
      TAG_NAMES2["HGROUP"] = "hgroup";
      TAG_NAMES2["HR"] = "hr";
      TAG_NAMES2["HTML"] = "html";
      TAG_NAMES2["I"] = "i";
      TAG_NAMES2["IMG"] = "img";
      TAG_NAMES2["IMAGE"] = "image";
      TAG_NAMES2["INPUT"] = "input";
      TAG_NAMES2["IFRAME"] = "iframe";
      TAG_NAMES2["KEYGEN"] = "keygen";
      TAG_NAMES2["LABEL"] = "label";
      TAG_NAMES2["LI"] = "li";
      TAG_NAMES2["LINK"] = "link";
      TAG_NAMES2["LISTING"] = "listing";
      TAG_NAMES2["MAIN"] = "main";
      TAG_NAMES2["MALIGNMARK"] = "malignmark";
      TAG_NAMES2["MARQUEE"] = "marquee";
      TAG_NAMES2["MATH"] = "math";
      TAG_NAMES2["MENU"] = "menu";
      TAG_NAMES2["META"] = "meta";
      TAG_NAMES2["MGLYPH"] = "mglyph";
      TAG_NAMES2["MI"] = "mi";
      TAG_NAMES2["MO"] = "mo";
      TAG_NAMES2["MN"] = "mn";
      TAG_NAMES2["MS"] = "ms";
      TAG_NAMES2["MTEXT"] = "mtext";
      TAG_NAMES2["NAV"] = "nav";
      TAG_NAMES2["NOBR"] = "nobr";
      TAG_NAMES2["NOFRAMES"] = "noframes";
      TAG_NAMES2["NOEMBED"] = "noembed";
      TAG_NAMES2["NOSCRIPT"] = "noscript";
      TAG_NAMES2["OBJECT"] = "object";
      TAG_NAMES2["OL"] = "ol";
      TAG_NAMES2["OPTGROUP"] = "optgroup";
      TAG_NAMES2["OPTION"] = "option";
      TAG_NAMES2["P"] = "p";
      TAG_NAMES2["PARAM"] = "param";
      TAG_NAMES2["PLAINTEXT"] = "plaintext";
      TAG_NAMES2["PRE"] = "pre";
      TAG_NAMES2["RB"] = "rb";
      TAG_NAMES2["RP"] = "rp";
      TAG_NAMES2["RT"] = "rt";
      TAG_NAMES2["RTC"] = "rtc";
      TAG_NAMES2["RUBY"] = "ruby";
      TAG_NAMES2["S"] = "s";
      TAG_NAMES2["SCRIPT"] = "script";
      TAG_NAMES2["SEARCH"] = "search";
      TAG_NAMES2["SECTION"] = "section";
      TAG_NAMES2["SELECT"] = "select";
      TAG_NAMES2["SOURCE"] = "source";
      TAG_NAMES2["SMALL"] = "small";
      TAG_NAMES2["SPAN"] = "span";
      TAG_NAMES2["STRIKE"] = "strike";
      TAG_NAMES2["STRONG"] = "strong";
      TAG_NAMES2["STYLE"] = "style";
      TAG_NAMES2["SUB"] = "sub";
      TAG_NAMES2["SUMMARY"] = "summary";
      TAG_NAMES2["SUP"] = "sup";
      TAG_NAMES2["TABLE"] = "table";
      TAG_NAMES2["TBODY"] = "tbody";
      TAG_NAMES2["TEMPLATE"] = "template";
      TAG_NAMES2["TEXTAREA"] = "textarea";
      TAG_NAMES2["TFOOT"] = "tfoot";
      TAG_NAMES2["TD"] = "td";
      TAG_NAMES2["TH"] = "th";
      TAG_NAMES2["THEAD"] = "thead";
      TAG_NAMES2["TITLE"] = "title";
      TAG_NAMES2["TR"] = "tr";
      TAG_NAMES2["TRACK"] = "track";
      TAG_NAMES2["TT"] = "tt";
      TAG_NAMES2["U"] = "u";
      TAG_NAMES2["UL"] = "ul";
      TAG_NAMES2["SVG"] = "svg";
      TAG_NAMES2["VAR"] = "var";
      TAG_NAMES2["WBR"] = "wbr";
      TAG_NAMES2["XMP"] = "xmp";
    })(TAG_NAMES || (TAG_NAMES = {}));
    (function(TAG_ID2) {
      TAG_ID2[TAG_ID2["UNKNOWN"] = 0] = "UNKNOWN";
      TAG_ID2[TAG_ID2["A"] = 1] = "A";
      TAG_ID2[TAG_ID2["ADDRESS"] = 2] = "ADDRESS";
      TAG_ID2[TAG_ID2["ANNOTATION_XML"] = 3] = "ANNOTATION_XML";
      TAG_ID2[TAG_ID2["APPLET"] = 4] = "APPLET";
      TAG_ID2[TAG_ID2["AREA"] = 5] = "AREA";
      TAG_ID2[TAG_ID2["ARTICLE"] = 6] = "ARTICLE";
      TAG_ID2[TAG_ID2["ASIDE"] = 7] = "ASIDE";
      TAG_ID2[TAG_ID2["B"] = 8] = "B";
      TAG_ID2[TAG_ID2["BASE"] = 9] = "BASE";
      TAG_ID2[TAG_ID2["BASEFONT"] = 10] = "BASEFONT";
      TAG_ID2[TAG_ID2["BGSOUND"] = 11] = "BGSOUND";
      TAG_ID2[TAG_ID2["BIG"] = 12] = "BIG";
      TAG_ID2[TAG_ID2["BLOCKQUOTE"] = 13] = "BLOCKQUOTE";
      TAG_ID2[TAG_ID2["BODY"] = 14] = "BODY";
      TAG_ID2[TAG_ID2["BR"] = 15] = "BR";
      TAG_ID2[TAG_ID2["BUTTON"] = 16] = "BUTTON";
      TAG_ID2[TAG_ID2["CAPTION"] = 17] = "CAPTION";
      TAG_ID2[TAG_ID2["CENTER"] = 18] = "CENTER";
      TAG_ID2[TAG_ID2["CODE"] = 19] = "CODE";
      TAG_ID2[TAG_ID2["COL"] = 20] = "COL";
      TAG_ID2[TAG_ID2["COLGROUP"] = 21] = "COLGROUP";
      TAG_ID2[TAG_ID2["DD"] = 22] = "DD";
      TAG_ID2[TAG_ID2["DESC"] = 23] = "DESC";
      TAG_ID2[TAG_ID2["DETAILS"] = 24] = "DETAILS";
      TAG_ID2[TAG_ID2["DIALOG"] = 25] = "DIALOG";
      TAG_ID2[TAG_ID2["DIR"] = 26] = "DIR";
      TAG_ID2[TAG_ID2["DIV"] = 27] = "DIV";
      TAG_ID2[TAG_ID2["DL"] = 28] = "DL";
      TAG_ID2[TAG_ID2["DT"] = 29] = "DT";
      TAG_ID2[TAG_ID2["EM"] = 30] = "EM";
      TAG_ID2[TAG_ID2["EMBED"] = 31] = "EMBED";
      TAG_ID2[TAG_ID2["FIELDSET"] = 32] = "FIELDSET";
      TAG_ID2[TAG_ID2["FIGCAPTION"] = 33] = "FIGCAPTION";
      TAG_ID2[TAG_ID2["FIGURE"] = 34] = "FIGURE";
      TAG_ID2[TAG_ID2["FONT"] = 35] = "FONT";
      TAG_ID2[TAG_ID2["FOOTER"] = 36] = "FOOTER";
      TAG_ID2[TAG_ID2["FOREIGN_OBJECT"] = 37] = "FOREIGN_OBJECT";
      TAG_ID2[TAG_ID2["FORM"] = 38] = "FORM";
      TAG_ID2[TAG_ID2["FRAME"] = 39] = "FRAME";
      TAG_ID2[TAG_ID2["FRAMESET"] = 40] = "FRAMESET";
      TAG_ID2[TAG_ID2["H1"] = 41] = "H1";
      TAG_ID2[TAG_ID2["H2"] = 42] = "H2";
      TAG_ID2[TAG_ID2["H3"] = 43] = "H3";
      TAG_ID2[TAG_ID2["H4"] = 44] = "H4";
      TAG_ID2[TAG_ID2["H5"] = 45] = "H5";
      TAG_ID2[TAG_ID2["H6"] = 46] = "H6";
      TAG_ID2[TAG_ID2["HEAD"] = 47] = "HEAD";
      TAG_ID2[TAG_ID2["HEADER"] = 48] = "HEADER";
      TAG_ID2[TAG_ID2["HGROUP"] = 49] = "HGROUP";
      TAG_ID2[TAG_ID2["HR"] = 50] = "HR";
      TAG_ID2[TAG_ID2["HTML"] = 51] = "HTML";
      TAG_ID2[TAG_ID2["I"] = 52] = "I";
      TAG_ID2[TAG_ID2["IMG"] = 53] = "IMG";
      TAG_ID2[TAG_ID2["IMAGE"] = 54] = "IMAGE";
      TAG_ID2[TAG_ID2["INPUT"] = 55] = "INPUT";
      TAG_ID2[TAG_ID2["IFRAME"] = 56] = "IFRAME";
      TAG_ID2[TAG_ID2["KEYGEN"] = 57] = "KEYGEN";
      TAG_ID2[TAG_ID2["LABEL"] = 58] = "LABEL";
      TAG_ID2[TAG_ID2["LI"] = 59] = "LI";
      TAG_ID2[TAG_ID2["LINK"] = 60] = "LINK";
      TAG_ID2[TAG_ID2["LISTING"] = 61] = "LISTING";
      TAG_ID2[TAG_ID2["MAIN"] = 62] = "MAIN";
      TAG_ID2[TAG_ID2["MALIGNMARK"] = 63] = "MALIGNMARK";
      TAG_ID2[TAG_ID2["MARQUEE"] = 64] = "MARQUEE";
      TAG_ID2[TAG_ID2["MATH"] = 65] = "MATH";
      TAG_ID2[TAG_ID2["MENU"] = 66] = "MENU";
      TAG_ID2[TAG_ID2["META"] = 67] = "META";
      TAG_ID2[TAG_ID2["MGLYPH"] = 68] = "MGLYPH";
      TAG_ID2[TAG_ID2["MI"] = 69] = "MI";
      TAG_ID2[TAG_ID2["MO"] = 70] = "MO";
      TAG_ID2[TAG_ID2["MN"] = 71] = "MN";
      TAG_ID2[TAG_ID2["MS"] = 72] = "MS";
      TAG_ID2[TAG_ID2["MTEXT"] = 73] = "MTEXT";
      TAG_ID2[TAG_ID2["NAV"] = 74] = "NAV";
      TAG_ID2[TAG_ID2["NOBR"] = 75] = "NOBR";
      TAG_ID2[TAG_ID2["NOFRAMES"] = 76] = "NOFRAMES";
      TAG_ID2[TAG_ID2["NOEMBED"] = 77] = "NOEMBED";
      TAG_ID2[TAG_ID2["NOSCRIPT"] = 78] = "NOSCRIPT";
      TAG_ID2[TAG_ID2["OBJECT"] = 79] = "OBJECT";
      TAG_ID2[TAG_ID2["OL"] = 80] = "OL";
      TAG_ID2[TAG_ID2["OPTGROUP"] = 81] = "OPTGROUP";
      TAG_ID2[TAG_ID2["OPTION"] = 82] = "OPTION";
      TAG_ID2[TAG_ID2["P"] = 83] = "P";
      TAG_ID2[TAG_ID2["PARAM"] = 84] = "PARAM";
      TAG_ID2[TAG_ID2["PLAINTEXT"] = 85] = "PLAINTEXT";
      TAG_ID2[TAG_ID2["PRE"] = 86] = "PRE";
      TAG_ID2[TAG_ID2["RB"] = 87] = "RB";
      TAG_ID2[TAG_ID2["RP"] = 88] = "RP";
      TAG_ID2[TAG_ID2["RT"] = 89] = "RT";
      TAG_ID2[TAG_ID2["RTC"] = 90] = "RTC";
      TAG_ID2[TAG_ID2["RUBY"] = 91] = "RUBY";
      TAG_ID2[TAG_ID2["S"] = 92] = "S";
      TAG_ID2[TAG_ID2["SCRIPT"] = 93] = "SCRIPT";
      TAG_ID2[TAG_ID2["SEARCH"] = 94] = "SEARCH";
      TAG_ID2[TAG_ID2["SECTION"] = 95] = "SECTION";
      TAG_ID2[TAG_ID2["SELECT"] = 96] = "SELECT";
      TAG_ID2[TAG_ID2["SOURCE"] = 97] = "SOURCE";
      TAG_ID2[TAG_ID2["SMALL"] = 98] = "SMALL";
      TAG_ID2[TAG_ID2["SPAN"] = 99] = "SPAN";
      TAG_ID2[TAG_ID2["STRIKE"] = 100] = "STRIKE";
      TAG_ID2[TAG_ID2["STRONG"] = 101] = "STRONG";
      TAG_ID2[TAG_ID2["STYLE"] = 102] = "STYLE";
      TAG_ID2[TAG_ID2["SUB"] = 103] = "SUB";
      TAG_ID2[TAG_ID2["SUMMARY"] = 104] = "SUMMARY";
      TAG_ID2[TAG_ID2["SUP"] = 105] = "SUP";
      TAG_ID2[TAG_ID2["TABLE"] = 106] = "TABLE";
      TAG_ID2[TAG_ID2["TBODY"] = 107] = "TBODY";
      TAG_ID2[TAG_ID2["TEMPLATE"] = 108] = "TEMPLATE";
      TAG_ID2[TAG_ID2["TEXTAREA"] = 109] = "TEXTAREA";
      TAG_ID2[TAG_ID2["TFOOT"] = 110] = "TFOOT";
      TAG_ID2[TAG_ID2["TD"] = 111] = "TD";
      TAG_ID2[TAG_ID2["TH"] = 112] = "TH";
      TAG_ID2[TAG_ID2["THEAD"] = 113] = "THEAD";
      TAG_ID2[TAG_ID2["TITLE"] = 114] = "TITLE";
      TAG_ID2[TAG_ID2["TR"] = 115] = "TR";
      TAG_ID2[TAG_ID2["TRACK"] = 116] = "TRACK";
      TAG_ID2[TAG_ID2["TT"] = 117] = "TT";
      TAG_ID2[TAG_ID2["U"] = 118] = "U";
      TAG_ID2[TAG_ID2["UL"] = 119] = "UL";
      TAG_ID2[TAG_ID2["SVG"] = 120] = "SVG";
      TAG_ID2[TAG_ID2["VAR"] = 121] = "VAR";
      TAG_ID2[TAG_ID2["WBR"] = 122] = "WBR";
      TAG_ID2[TAG_ID2["XMP"] = 123] = "XMP";
    })(TAG_ID || (TAG_ID = {}));
    TAG_NAME_TO_ID = /* @__PURE__ */ new Map([
      [TAG_NAMES.A, TAG_ID.A],
      [TAG_NAMES.ADDRESS, TAG_ID.ADDRESS],
      [TAG_NAMES.ANNOTATION_XML, TAG_ID.ANNOTATION_XML],
      [TAG_NAMES.APPLET, TAG_ID.APPLET],
      [TAG_NAMES.AREA, TAG_ID.AREA],
      [TAG_NAMES.ARTICLE, TAG_ID.ARTICLE],
      [TAG_NAMES.ASIDE, TAG_ID.ASIDE],
      [TAG_NAMES.B, TAG_ID.B],
      [TAG_NAMES.BASE, TAG_ID.BASE],
      [TAG_NAMES.BASEFONT, TAG_ID.BASEFONT],
      [TAG_NAMES.BGSOUND, TAG_ID.BGSOUND],
      [TAG_NAMES.BIG, TAG_ID.BIG],
      [TAG_NAMES.BLOCKQUOTE, TAG_ID.BLOCKQUOTE],
      [TAG_NAMES.BODY, TAG_ID.BODY],
      [TAG_NAMES.BR, TAG_ID.BR],
      [TAG_NAMES.BUTTON, TAG_ID.BUTTON],
      [TAG_NAMES.CAPTION, TAG_ID.CAPTION],
      [TAG_NAMES.CENTER, TAG_ID.CENTER],
      [TAG_NAMES.CODE, TAG_ID.CODE],
      [TAG_NAMES.COL, TAG_ID.COL],
      [TAG_NAMES.COLGROUP, TAG_ID.COLGROUP],
      [TAG_NAMES.DD, TAG_ID.DD],
      [TAG_NAMES.DESC, TAG_ID.DESC],
      [TAG_NAMES.DETAILS, TAG_ID.DETAILS],
      [TAG_NAMES.DIALOG, TAG_ID.DIALOG],
      [TAG_NAMES.DIR, TAG_ID.DIR],
      [TAG_NAMES.DIV, TAG_ID.DIV],
      [TAG_NAMES.DL, TAG_ID.DL],
      [TAG_NAMES.DT, TAG_ID.DT],
      [TAG_NAMES.EM, TAG_ID.EM],
      [TAG_NAMES.EMBED, TAG_ID.EMBED],
      [TAG_NAMES.FIELDSET, TAG_ID.FIELDSET],
      [TAG_NAMES.FIGCAPTION, TAG_ID.FIGCAPTION],
      [TAG_NAMES.FIGURE, TAG_ID.FIGURE],
      [TAG_NAMES.FONT, TAG_ID.FONT],
      [TAG_NAMES.FOOTER, TAG_ID.FOOTER],
      [TAG_NAMES.FOREIGN_OBJECT, TAG_ID.FOREIGN_OBJECT],
      [TAG_NAMES.FORM, TAG_ID.FORM],
      [TAG_NAMES.FRAME, TAG_ID.FRAME],
      [TAG_NAMES.FRAMESET, TAG_ID.FRAMESET],
      [TAG_NAMES.H1, TAG_ID.H1],
      [TAG_NAMES.H2, TAG_ID.H2],
      [TAG_NAMES.H3, TAG_ID.H3],
      [TAG_NAMES.H4, TAG_ID.H4],
      [TAG_NAMES.H5, TAG_ID.H5],
      [TAG_NAMES.H6, TAG_ID.H6],
      [TAG_NAMES.HEAD, TAG_ID.HEAD],
      [TAG_NAMES.HEADER, TAG_ID.HEADER],
      [TAG_NAMES.HGROUP, TAG_ID.HGROUP],
      [TAG_NAMES.HR, TAG_ID.HR],
      [TAG_NAMES.HTML, TAG_ID.HTML],
      [TAG_NAMES.I, TAG_ID.I],
      [TAG_NAMES.IMG, TAG_ID.IMG],
      [TAG_NAMES.IMAGE, TAG_ID.IMAGE],
      [TAG_NAMES.INPUT, TAG_ID.INPUT],
      [TAG_NAMES.IFRAME, TAG_ID.IFRAME],
      [TAG_NAMES.KEYGEN, TAG_ID.KEYGEN],
      [TAG_NAMES.LABEL, TAG_ID.LABEL],
      [TAG_NAMES.LI, TAG_ID.LI],
      [TAG_NAMES.LINK, TAG_ID.LINK],
      [TAG_NAMES.LISTING, TAG_ID.LISTING],
      [TAG_NAMES.MAIN, TAG_ID.MAIN],
      [TAG_NAMES.MALIGNMARK, TAG_ID.MALIGNMARK],
      [TAG_NAMES.MARQUEE, TAG_ID.MARQUEE],
      [TAG_NAMES.MATH, TAG_ID.MATH],
      [TAG_NAMES.MENU, TAG_ID.MENU],
      [TAG_NAMES.META, TAG_ID.META],
      [TAG_NAMES.MGLYPH, TAG_ID.MGLYPH],
      [TAG_NAMES.MI, TAG_ID.MI],
      [TAG_NAMES.MO, TAG_ID.MO],
      [TAG_NAMES.MN, TAG_ID.MN],
      [TAG_NAMES.MS, TAG_ID.MS],
      [TAG_NAMES.MTEXT, TAG_ID.MTEXT],
      [TAG_NAMES.NAV, TAG_ID.NAV],
      [TAG_NAMES.NOBR, TAG_ID.NOBR],
      [TAG_NAMES.NOFRAMES, TAG_ID.NOFRAMES],
      [TAG_NAMES.NOEMBED, TAG_ID.NOEMBED],
      [TAG_NAMES.NOSCRIPT, TAG_ID.NOSCRIPT],
      [TAG_NAMES.OBJECT, TAG_ID.OBJECT],
      [TAG_NAMES.OL, TAG_ID.OL],
      [TAG_NAMES.OPTGROUP, TAG_ID.OPTGROUP],
      [TAG_NAMES.OPTION, TAG_ID.OPTION],
      [TAG_NAMES.P, TAG_ID.P],
      [TAG_NAMES.PARAM, TAG_ID.PARAM],
      [TAG_NAMES.PLAINTEXT, TAG_ID.PLAINTEXT],
      [TAG_NAMES.PRE, TAG_ID.PRE],
      [TAG_NAMES.RB, TAG_ID.RB],
      [TAG_NAMES.RP, TAG_ID.RP],
      [TAG_NAMES.RT, TAG_ID.RT],
      [TAG_NAMES.RTC, TAG_ID.RTC],
      [TAG_NAMES.RUBY, TAG_ID.RUBY],
      [TAG_NAMES.S, TAG_ID.S],
      [TAG_NAMES.SCRIPT, TAG_ID.SCRIPT],
      [TAG_NAMES.SEARCH, TAG_ID.SEARCH],
      [TAG_NAMES.SECTION, TAG_ID.SECTION],
      [TAG_NAMES.SELECT, TAG_ID.SELECT],
      [TAG_NAMES.SOURCE, TAG_ID.SOURCE],
      [TAG_NAMES.SMALL, TAG_ID.SMALL],
      [TAG_NAMES.SPAN, TAG_ID.SPAN],
      [TAG_NAMES.STRIKE, TAG_ID.STRIKE],
      [TAG_NAMES.STRONG, TAG_ID.STRONG],
      [TAG_NAMES.STYLE, TAG_ID.STYLE],
      [TAG_NAMES.SUB, TAG_ID.SUB],
      [TAG_NAMES.SUMMARY, TAG_ID.SUMMARY],
      [TAG_NAMES.SUP, TAG_ID.SUP],
      [TAG_NAMES.TABLE, TAG_ID.TABLE],
      [TAG_NAMES.TBODY, TAG_ID.TBODY],
      [TAG_NAMES.TEMPLATE, TAG_ID.TEMPLATE],
      [TAG_NAMES.TEXTAREA, TAG_ID.TEXTAREA],
      [TAG_NAMES.TFOOT, TAG_ID.TFOOT],
      [TAG_NAMES.TD, TAG_ID.TD],
      [TAG_NAMES.TH, TAG_ID.TH],
      [TAG_NAMES.THEAD, TAG_ID.THEAD],
      [TAG_NAMES.TITLE, TAG_ID.TITLE],
      [TAG_NAMES.TR, TAG_ID.TR],
      [TAG_NAMES.TRACK, TAG_ID.TRACK],
      [TAG_NAMES.TT, TAG_ID.TT],
      [TAG_NAMES.U, TAG_ID.U],
      [TAG_NAMES.UL, TAG_ID.UL],
      [TAG_NAMES.SVG, TAG_ID.SVG],
      [TAG_NAMES.VAR, TAG_ID.VAR],
      [TAG_NAMES.WBR, TAG_ID.WBR],
      [TAG_NAMES.XMP, TAG_ID.XMP]
    ]);
    $ = TAG_ID;
    SPECIAL_ELEMENTS = {
      [NS.HTML]: /* @__PURE__ */ new Set([
        $.ADDRESS,
        $.APPLET,
        $.AREA,
        $.ARTICLE,
        $.ASIDE,
        $.BASE,
        $.BASEFONT,
        $.BGSOUND,
        $.BLOCKQUOTE,
        $.BODY,
        $.BR,
        $.BUTTON,
        $.CAPTION,
        $.CENTER,
        $.COL,
        $.COLGROUP,
        $.DD,
        $.DETAILS,
        $.DIR,
        $.DIV,
        $.DL,
        $.DT,
        $.EMBED,
        $.FIELDSET,
        $.FIGCAPTION,
        $.FIGURE,
        $.FOOTER,
        $.FORM,
        $.FRAME,
        $.FRAMESET,
        $.H1,
        $.H2,
        $.H3,
        $.H4,
        $.H5,
        $.H6,
        $.HEAD,
        $.HEADER,
        $.HGROUP,
        $.HR,
        $.HTML,
        $.IFRAME,
        $.IMG,
        $.INPUT,
        $.LI,
        $.LINK,
        $.LISTING,
        $.MAIN,
        $.MARQUEE,
        $.MENU,
        $.META,
        $.NAV,
        $.NOEMBED,
        $.NOFRAMES,
        $.NOSCRIPT,
        $.OBJECT,
        $.OL,
        $.P,
        $.PARAM,
        $.PLAINTEXT,
        $.PRE,
        $.SCRIPT,
        $.SECTION,
        $.SELECT,
        $.SOURCE,
        $.STYLE,
        $.SUMMARY,
        $.TABLE,
        $.TBODY,
        $.TD,
        $.TEMPLATE,
        $.TEXTAREA,
        $.TFOOT,
        $.TH,
        $.THEAD,
        $.TITLE,
        $.TR,
        $.TRACK,
        $.UL,
        $.WBR,
        $.XMP
      ]),
      [NS.MATHML]: /* @__PURE__ */ new Set([$.MI, $.MO, $.MN, $.MS, $.MTEXT, $.ANNOTATION_XML]),
      [NS.SVG]: /* @__PURE__ */ new Set([$.TITLE, $.FOREIGN_OBJECT, $.DESC]),
      [NS.XLINK]: /* @__PURE__ */ new Set(),
      [NS.XML]: /* @__PURE__ */ new Set(),
      [NS.XMLNS]: /* @__PURE__ */ new Set()
    };
    NUMBERED_HEADERS = /* @__PURE__ */ new Set([$.H1, $.H2, $.H3, $.H4, $.H5, $.H6]);
    UNESCAPED_TEXT = /* @__PURE__ */ new Set([
      TAG_NAMES.STYLE,
      TAG_NAMES.SCRIPT,
      TAG_NAMES.XMP,
      TAG_NAMES.IFRAME,
      TAG_NAMES.NOEMBED,
      TAG_NAMES.NOFRAMES,
      TAG_NAMES.PLAINTEXT
    ]);
  }
});

// ../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/tokenizer/index.js
function isAsciiDigit(cp) {
  return cp >= CODE_POINTS.DIGIT_0 && cp <= CODE_POINTS.DIGIT_9;
}
function isAsciiUpper(cp) {
  return cp >= CODE_POINTS.LATIN_CAPITAL_A && cp <= CODE_POINTS.LATIN_CAPITAL_Z;
}
function isAsciiLower(cp) {
  return cp >= CODE_POINTS.LATIN_SMALL_A && cp <= CODE_POINTS.LATIN_SMALL_Z;
}
function isAsciiLetter(cp) {
  return isAsciiLower(cp) || isAsciiUpper(cp);
}
function isAsciiAlphaNumeric2(cp) {
  return isAsciiLetter(cp) || isAsciiDigit(cp);
}
function toAsciiLower(cp) {
  return cp + 32;
}
function isWhitespace(cp) {
  return cp === CODE_POINTS.SPACE || cp === CODE_POINTS.LINE_FEED || cp === CODE_POINTS.TABULATION || cp === CODE_POINTS.FORM_FEED;
}
function isScriptDataDoubleEscapeSequenceEnd(cp) {
  return isWhitespace(cp) || cp === CODE_POINTS.SOLIDUS || cp === CODE_POINTS.GREATER_THAN_SIGN;
}
function getErrorForNumericCharacterReference(code) {
  if (code === CODE_POINTS.NULL) {
    return ERR.nullCharacterReference;
  } else if (code > 1114111) {
    return ERR.characterReferenceOutsideUnicodeRange;
  } else if (isSurrogate(code)) {
    return ERR.surrogateCharacterReference;
  } else if (isUndefinedCodePoint(code)) {
    return ERR.noncharacterCharacterReference;
  } else if (isControlCodePoint(code) || code === CODE_POINTS.CARRIAGE_RETURN) {
    return ERR.controlCharacterReference;
  }
  return null;
}
var State, TokenizerMode, Tokenizer;
var init_tokenizer = __esm({
  "../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/tokenizer/index.js"() {
    init_preprocessor();
    init_unicode();
    init_token();
    init_decode();
    init_error_codes();
    init_html();
    (function(State3) {
      State3[State3["DATA"] = 0] = "DATA";
      State3[State3["RCDATA"] = 1] = "RCDATA";
      State3[State3["RAWTEXT"] = 2] = "RAWTEXT";
      State3[State3["SCRIPT_DATA"] = 3] = "SCRIPT_DATA";
      State3[State3["PLAINTEXT"] = 4] = "PLAINTEXT";
      State3[State3["TAG_OPEN"] = 5] = "TAG_OPEN";
      State3[State3["END_TAG_OPEN"] = 6] = "END_TAG_OPEN";
      State3[State3["TAG_NAME"] = 7] = "TAG_NAME";
      State3[State3["RCDATA_LESS_THAN_SIGN"] = 8] = "RCDATA_LESS_THAN_SIGN";
      State3[State3["RCDATA_END_TAG_OPEN"] = 9] = "RCDATA_END_TAG_OPEN";
      State3[State3["RCDATA_END_TAG_NAME"] = 10] = "RCDATA_END_TAG_NAME";
      State3[State3["RAWTEXT_LESS_THAN_SIGN"] = 11] = "RAWTEXT_LESS_THAN_SIGN";
      State3[State3["RAWTEXT_END_TAG_OPEN"] = 12] = "RAWTEXT_END_TAG_OPEN";
      State3[State3["RAWTEXT_END_TAG_NAME"] = 13] = "RAWTEXT_END_TAG_NAME";
      State3[State3["SCRIPT_DATA_LESS_THAN_SIGN"] = 14] = "SCRIPT_DATA_LESS_THAN_SIGN";
      State3[State3["SCRIPT_DATA_END_TAG_OPEN"] = 15] = "SCRIPT_DATA_END_TAG_OPEN";
      State3[State3["SCRIPT_DATA_END_TAG_NAME"] = 16] = "SCRIPT_DATA_END_TAG_NAME";
      State3[State3["SCRIPT_DATA_ESCAPE_START"] = 17] = "SCRIPT_DATA_ESCAPE_START";
      State3[State3["SCRIPT_DATA_ESCAPE_START_DASH"] = 18] = "SCRIPT_DATA_ESCAPE_START_DASH";
      State3[State3["SCRIPT_DATA_ESCAPED"] = 19] = "SCRIPT_DATA_ESCAPED";
      State3[State3["SCRIPT_DATA_ESCAPED_DASH"] = 20] = "SCRIPT_DATA_ESCAPED_DASH";
      State3[State3["SCRIPT_DATA_ESCAPED_DASH_DASH"] = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH";
      State3[State3["SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN"] = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN";
      State3[State3["SCRIPT_DATA_ESCAPED_END_TAG_OPEN"] = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN";
      State3[State3["SCRIPT_DATA_ESCAPED_END_TAG_NAME"] = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME";
      State3[State3["SCRIPT_DATA_DOUBLE_ESCAPE_START"] = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START";
      State3[State3["SCRIPT_DATA_DOUBLE_ESCAPED"] = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED";
      State3[State3["SCRIPT_DATA_DOUBLE_ESCAPED_DASH"] = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH";
      State3[State3["SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH"] = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH";
      State3[State3["SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN"] = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN";
      State3[State3["SCRIPT_DATA_DOUBLE_ESCAPE_END"] = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END";
      State3[State3["BEFORE_ATTRIBUTE_NAME"] = 31] = "BEFORE_ATTRIBUTE_NAME";
      State3[State3["ATTRIBUTE_NAME"] = 32] = "ATTRIBUTE_NAME";
      State3[State3["AFTER_ATTRIBUTE_NAME"] = 33] = "AFTER_ATTRIBUTE_NAME";
      State3[State3["BEFORE_ATTRIBUTE_VALUE"] = 34] = "BEFORE_ATTRIBUTE_VALUE";
      State3[State3["ATTRIBUTE_VALUE_DOUBLE_QUOTED"] = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED";
      State3[State3["ATTRIBUTE_VALUE_SINGLE_QUOTED"] = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED";
      State3[State3["ATTRIBUTE_VALUE_UNQUOTED"] = 37] = "ATTRIBUTE_VALUE_UNQUOTED";
      State3[State3["AFTER_ATTRIBUTE_VALUE_QUOTED"] = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED";
      State3[State3["SELF_CLOSING_START_TAG"] = 39] = "SELF_CLOSING_START_TAG";
      State3[State3["BOGUS_COMMENT"] = 40] = "BOGUS_COMMENT";
      State3[State3["MARKUP_DECLARATION_OPEN"] = 41] = "MARKUP_DECLARATION_OPEN";
      State3[State3["COMMENT_START"] = 42] = "COMMENT_START";
      State3[State3["COMMENT_START_DASH"] = 43] = "COMMENT_START_DASH";
      State3[State3["COMMENT"] = 44] = "COMMENT";
      State3[State3["COMMENT_LESS_THAN_SIGN"] = 45] = "COMMENT_LESS_THAN_SIGN";
      State3[State3["COMMENT_LESS_THAN_SIGN_BANG"] = 46] = "COMMENT_LESS_THAN_SIGN_BANG";
      State3[State3["COMMENT_LESS_THAN_SIGN_BANG_DASH"] = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH";
      State3[State3["COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH"] = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH";
      State3[State3["COMMENT_END_DASH"] = 49] = "COMMENT_END_DASH";
      State3[State3["COMMENT_END"] = 50] = "COMMENT_END";
      State3[State3["COMMENT_END_BANG"] = 51] = "COMMENT_END_BANG";
      State3[State3["DOCTYPE"] = 52] = "DOCTYPE";
      State3[State3["BEFORE_DOCTYPE_NAME"] = 53] = "BEFORE_DOCTYPE_NAME";
      State3[State3["DOCTYPE_NAME"] = 54] = "DOCTYPE_NAME";
      State3[State3["AFTER_DOCTYPE_NAME"] = 55] = "AFTER_DOCTYPE_NAME";
      State3[State3["AFTER_DOCTYPE_PUBLIC_KEYWORD"] = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD";
      State3[State3["BEFORE_DOCTYPE_PUBLIC_IDENTIFIER"] = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER";
      State3[State3["DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED"] = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED";
      State3[State3["DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED"] = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED";
      State3[State3["AFTER_DOCTYPE_PUBLIC_IDENTIFIER"] = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER";
      State3[State3["BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS"] = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS";
      State3[State3["AFTER_DOCTYPE_SYSTEM_KEYWORD"] = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD";
      State3[State3["BEFORE_DOCTYPE_SYSTEM_IDENTIFIER"] = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER";
      State3[State3["DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED"] = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED";
      State3[State3["DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED"] = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED";
      State3[State3["AFTER_DOCTYPE_SYSTEM_IDENTIFIER"] = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER";
      State3[State3["BOGUS_DOCTYPE"] = 67] = "BOGUS_DOCTYPE";
      State3[State3["CDATA_SECTION"] = 68] = "CDATA_SECTION";
      State3[State3["CDATA_SECTION_BRACKET"] = 69] = "CDATA_SECTION_BRACKET";
      State3[State3["CDATA_SECTION_END"] = 70] = "CDATA_SECTION_END";
      State3[State3["CHARACTER_REFERENCE"] = 71] = "CHARACTER_REFERENCE";
      State3[State3["AMBIGUOUS_AMPERSAND"] = 72] = "AMBIGUOUS_AMPERSAND";
    })(State || (State = {}));
    TokenizerMode = {
      DATA: State.DATA,
      RCDATA: State.RCDATA,
      RAWTEXT: State.RAWTEXT,
      SCRIPT_DATA: State.SCRIPT_DATA,
      PLAINTEXT: State.PLAINTEXT,
      CDATA_SECTION: State.CDATA_SECTION
    };
    Tokenizer = class {
      constructor(options, handler) {
        this.options = options;
        this.handler = handler;
        this.paused = false;
        this.inLoop = false;
        this.inForeignNode = false;
        this.lastStartTagName = "";
        this.active = false;
        this.state = State.DATA;
        this.returnState = State.DATA;
        this.entityStartPos = 0;
        this.consumedAfterSnapshot = -1;
        this.currentCharacterToken = null;
        this.currentToken = null;
        this.currentAttr = { name: "", value: "" };
        this.preprocessor = new Preprocessor(handler);
        this.currentLocation = this.getCurrentLocation(-1);
        this.entityDecoder = new EntityDecoder(htmlDecodeTree, (cp, consumed) => {
          this.preprocessor.pos = this.entityStartPos + consumed - 1;
          this._flushCodePointConsumedAsCharacterReference(cp);
        }, handler.onParseError ? {
          missingSemicolonAfterCharacterReference: () => {
            this._err(ERR.missingSemicolonAfterCharacterReference, 1);
          },
          absenceOfDigitsInNumericCharacterReference: (consumed) => {
            this._err(ERR.absenceOfDigitsInNumericCharacterReference, this.entityStartPos - this.preprocessor.pos + consumed);
          },
          validateNumericCharacterReference: (code) => {
            const error = getErrorForNumericCharacterReference(code);
            if (error)
              this._err(error, 1);
          }
        } : void 0);
      }
      //Errors
      _err(code, cpOffset = 0) {
        var _a, _b;
        (_b = (_a = this.handler).onParseError) === null || _b === void 0 ? void 0 : _b.call(_a, this.preprocessor.getError(code, cpOffset));
      }
      // NOTE: `offset` may never run across line boundaries.
      getCurrentLocation(offset) {
        if (!this.options.sourceCodeLocationInfo) {
          return null;
        }
        return {
          startLine: this.preprocessor.line,
          startCol: this.preprocessor.col - offset,
          startOffset: this.preprocessor.offset - offset,
          endLine: -1,
          endCol: -1,
          endOffset: -1
        };
      }
      _runParsingLoop() {
        if (this.inLoop)
          return;
        this.inLoop = true;
        while (this.active && !this.paused) {
          this.consumedAfterSnapshot = 0;
          const cp = this._consume();
          if (!this._ensureHibernation()) {
            this._callState(cp);
          }
        }
        this.inLoop = false;
      }
      //API
      pause() {
        this.paused = true;
      }
      resume(writeCallback) {
        if (!this.paused) {
          throw new Error("Parser was already resumed");
        }
        this.paused = false;
        if (this.inLoop)
          return;
        this._runParsingLoop();
        if (!this.paused) {
          writeCallback === null || writeCallback === void 0 ? void 0 : writeCallback();
        }
      }
      write(chunk2, isLastChunk, writeCallback) {
        this.active = true;
        this.preprocessor.write(chunk2, isLastChunk);
        this._runParsingLoop();
        if (!this.paused) {
          writeCallback === null || writeCallback === void 0 ? void 0 : writeCallback();
        }
      }
      insertHtmlAtCurrentPos(chunk2) {
        this.active = true;
        this.preprocessor.insertHtmlAtCurrentPos(chunk2);
        this._runParsingLoop();
      }
      //Hibernation
      _ensureHibernation() {
        if (this.preprocessor.endOfChunkHit) {
          this.preprocessor.retreat(this.consumedAfterSnapshot);
          this.consumedAfterSnapshot = 0;
          this.active = false;
          return true;
        }
        return false;
      }
      //Consumption
      _consume() {
        this.consumedAfterSnapshot++;
        return this.preprocessor.advance();
      }
      _advanceBy(count) {
        this.consumedAfterSnapshot += count;
        for (let i = 0; i < count; i++) {
          this.preprocessor.advance();
        }
      }
      _consumeSequenceIfMatch(pattern, caseSensitive) {
        if (this.preprocessor.startsWith(pattern, caseSensitive)) {
          this._advanceBy(pattern.length - 1);
          return true;
        }
        return false;
      }
      //Token creation
      _createStartTagToken() {
        this.currentToken = {
          type: TokenType.START_TAG,
          tagName: "",
          tagID: TAG_ID.UNKNOWN,
          selfClosing: false,
          ackSelfClosing: false,
          attrs: [],
          location: this.getCurrentLocation(1)
        };
      }
      _createEndTagToken() {
        this.currentToken = {
          type: TokenType.END_TAG,
          tagName: "",
          tagID: TAG_ID.UNKNOWN,
          selfClosing: false,
          ackSelfClosing: false,
          attrs: [],
          location: this.getCurrentLocation(2)
        };
      }
      _createCommentToken(offset) {
        this.currentToken = {
          type: TokenType.COMMENT,
          data: "",
          location: this.getCurrentLocation(offset)
        };
      }
      _createDoctypeToken(initialName) {
        this.currentToken = {
          type: TokenType.DOCTYPE,
          name: initialName,
          forceQuirks: false,
          publicId: null,
          systemId: null,
          location: this.currentLocation
        };
      }
      _createCharacterToken(type2, chars) {
        this.currentCharacterToken = {
          type: type2,
          chars,
          location: this.currentLocation
        };
      }
      //Tag attributes
      _createAttr(attrNameFirstCh) {
        this.currentAttr = {
          name: attrNameFirstCh,
          value: ""
        };
        this.currentLocation = this.getCurrentLocation(0);
      }
      _leaveAttrName() {
        var _a;
        var _b;
        const token = this.currentToken;
        if (getTokenAttr(token, this.currentAttr.name) === null) {
          token.attrs.push(this.currentAttr);
          if (token.location && this.currentLocation) {
            const attrLocations = (_a = (_b = token.location).attrs) !== null && _a !== void 0 ? _a : _b.attrs = /* @__PURE__ */ Object.create(null);
            attrLocations[this.currentAttr.name] = this.currentLocation;
            this._leaveAttrValue();
          }
        } else {
          this._err(ERR.duplicateAttribute);
        }
      }
      _leaveAttrValue() {
        if (this.currentLocation) {
          this.currentLocation.endLine = this.preprocessor.line;
          this.currentLocation.endCol = this.preprocessor.col;
          this.currentLocation.endOffset = this.preprocessor.offset;
        }
      }
      //Token emission
      prepareToken(ct) {
        this._emitCurrentCharacterToken(ct.location);
        this.currentToken = null;
        if (ct.location) {
          ct.location.endLine = this.preprocessor.line;
          ct.location.endCol = this.preprocessor.col + 1;
          ct.location.endOffset = this.preprocessor.offset + 1;
        }
        this.currentLocation = this.getCurrentLocation(-1);
      }
      emitCurrentTagToken() {
        const ct = this.currentToken;
        this.prepareToken(ct);
        ct.tagID = getTagID(ct.tagName);
        if (ct.type === TokenType.START_TAG) {
          this.lastStartTagName = ct.tagName;
          this.handler.onStartTag(ct);
        } else {
          if (ct.attrs.length > 0) {
            this._err(ERR.endTagWithAttributes);
          }
          if (ct.selfClosing) {
            this._err(ERR.endTagWithTrailingSolidus);
          }
          this.handler.onEndTag(ct);
        }
        this.preprocessor.dropParsedChunk();
      }
      emitCurrentComment(ct) {
        this.prepareToken(ct);
        this.handler.onComment(ct);
        this.preprocessor.dropParsedChunk();
      }
      emitCurrentDoctype(ct) {
        this.prepareToken(ct);
        this.handler.onDoctype(ct);
        this.preprocessor.dropParsedChunk();
      }
      _emitCurrentCharacterToken(nextLocation) {
        if (this.currentCharacterToken) {
          if (nextLocation && this.currentCharacterToken.location) {
            this.currentCharacterToken.location.endLine = nextLocation.startLine;
            this.currentCharacterToken.location.endCol = nextLocation.startCol;
            this.currentCharacterToken.location.endOffset = nextLocation.startOffset;
          }
          switch (this.currentCharacterToken.type) {
            case TokenType.CHARACTER: {
              this.handler.onCharacter(this.currentCharacterToken);
              break;
            }
            case TokenType.NULL_CHARACTER: {
              this.handler.onNullCharacter(this.currentCharacterToken);
              break;
            }
            case TokenType.WHITESPACE_CHARACTER: {
              this.handler.onWhitespaceCharacter(this.currentCharacterToken);
              break;
            }
          }
          this.currentCharacterToken = null;
        }
      }
      _emitEOFToken() {
        const location2 = this.getCurrentLocation(0);
        if (location2) {
          location2.endLine = location2.startLine;
          location2.endCol = location2.startCol;
          location2.endOffset = location2.startOffset;
        }
        this._emitCurrentCharacterToken(location2);
        this.handler.onEof({ type: TokenType.EOF, location: location2 });
        this.active = false;
      }
      //Characters emission
      //OPTIMIZATION: The specification uses only one type of character token (one token per character).
      //This causes a huge memory overhead and a lot of unnecessary parser loops. parse5 uses 3 groups of characters.
      //If we have a sequence of characters that belong to the same group, the parser can process it
      //as a single solid character token.
      //So, there are 3 types of character tokens in parse5:
      //1)TokenType.NULL_CHARACTER - \u0000-character sequences (e.g. '\u0000\u0000\u0000')
      //2)TokenType.WHITESPACE_CHARACTER - any whitespace/new-line character sequences (e.g. '\n  \r\t   \f')
      //3)TokenType.CHARACTER - any character sequence which don't belong to groups 1 and 2 (e.g. 'abcdef1234@@#$%^')
      _appendCharToCurrentCharacterToken(type2, ch) {
        if (this.currentCharacterToken) {
          if (this.currentCharacterToken.type === type2) {
            this.currentCharacterToken.chars += ch;
            return;
          } else {
            this.currentLocation = this.getCurrentLocation(0);
            this._emitCurrentCharacterToken(this.currentLocation);
            this.preprocessor.dropParsedChunk();
          }
        }
        this._createCharacterToken(type2, ch);
      }
      _emitCodePoint(cp) {
        const type2 = isWhitespace(cp) ? TokenType.WHITESPACE_CHARACTER : cp === CODE_POINTS.NULL ? TokenType.NULL_CHARACTER : TokenType.CHARACTER;
        this._appendCharToCurrentCharacterToken(type2, cp < 65536 ? String.fromCharCode(cp) : String.fromCodePoint(cp));
      }
      //NOTE: used when we emit characters explicitly.
      //This is always for non-whitespace and non-null characters, which allows us to avoid additional checks.
      _emitChars(ch) {
        this._appendCharToCurrentCharacterToken(TokenType.CHARACTER, ch);
      }
      // Character reference helpers
      _startCharacterReference() {
        this.returnState = this.state;
        this.state = State.CHARACTER_REFERENCE;
        this.entityStartPos = this.preprocessor.pos;
        this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute() ? DecodingMode.Attribute : DecodingMode.Legacy);
      }
      _isCharacterReferenceInAttribute() {
        return this.returnState === State.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === State.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === State.ATTRIBUTE_VALUE_UNQUOTED;
      }
      _flushCodePointConsumedAsCharacterReference(cp) {
        if (this._isCharacterReferenceInAttribute()) {
          this.currentAttr.value += String.fromCodePoint(cp);
        } else {
          this._emitCodePoint(cp);
        }
      }
      // Calling states this way turns out to be much faster than any other approach.
      _callState(cp) {
        switch (this.state) {
          case State.DATA: {
            this._stateData(cp);
            break;
          }
          case State.RCDATA: {
            this._stateRcdata(cp);
            break;
          }
          case State.RAWTEXT: {
            this._stateRawtext(cp);
            break;
          }
          case State.SCRIPT_DATA: {
            this._stateScriptData(cp);
            break;
          }
          case State.PLAINTEXT: {
            this._statePlaintext(cp);
            break;
          }
          case State.TAG_OPEN: {
            this._stateTagOpen(cp);
            break;
          }
          case State.END_TAG_OPEN: {
            this._stateEndTagOpen(cp);
            break;
          }
          case State.TAG_NAME: {
            this._stateTagName(cp);
            break;
          }
          case State.RCDATA_LESS_THAN_SIGN: {
            this._stateRcdataLessThanSign(cp);
            break;
          }
          case State.RCDATA_END_TAG_OPEN: {
            this._stateRcdataEndTagOpen(cp);
            break;
          }
          case State.RCDATA_END_TAG_NAME: {
            this._stateRcdataEndTagName(cp);
            break;
          }
          case State.RAWTEXT_LESS_THAN_SIGN: {
            this._stateRawtextLessThanSign(cp);
            break;
          }
          case State.RAWTEXT_END_TAG_OPEN: {
            this._stateRawtextEndTagOpen(cp);
            break;
          }
          case State.RAWTEXT_END_TAG_NAME: {
            this._stateRawtextEndTagName(cp);
            break;
          }
          case State.SCRIPT_DATA_LESS_THAN_SIGN: {
            this._stateScriptDataLessThanSign(cp);
            break;
          }
          case State.SCRIPT_DATA_END_TAG_OPEN: {
            this._stateScriptDataEndTagOpen(cp);
            break;
          }
          case State.SCRIPT_DATA_END_TAG_NAME: {
            this._stateScriptDataEndTagName(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPE_START: {
            this._stateScriptDataEscapeStart(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPE_START_DASH: {
            this._stateScriptDataEscapeStartDash(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPED: {
            this._stateScriptDataEscaped(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPED_DASH: {
            this._stateScriptDataEscapedDash(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPED_DASH_DASH: {
            this._stateScriptDataEscapedDashDash(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: {
            this._stateScriptDataEscapedLessThanSign(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN: {
            this._stateScriptDataEscapedEndTagOpen(cp);
            break;
          }
          case State.SCRIPT_DATA_ESCAPED_END_TAG_NAME: {
            this._stateScriptDataEscapedEndTagName(cp);
            break;
          }
          case State.SCRIPT_DATA_DOUBLE_ESCAPE_START: {
            this._stateScriptDataDoubleEscapeStart(cp);
            break;
          }
          case State.SCRIPT_DATA_DOUBLE_ESCAPED: {
            this._stateScriptDataDoubleEscaped(cp);
            break;
          }
          case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH: {
            this._stateScriptDataDoubleEscapedDash(cp);
            break;
          }
          case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: {
            this._stateScriptDataDoubleEscapedDashDash(cp);
            break;
          }
          case State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: {
            this._stateScriptDataDoubleEscapedLessThanSign(cp);
            break;
          }
          case State.SCRIPT_DATA_DOUBLE_ESCAPE_END: {
            this._stateScriptDataDoubleEscapeEnd(cp);
            break;
          }
          case State.BEFORE_ATTRIBUTE_NAME: {
            this._stateBeforeAttributeName(cp);
            break;
          }
          case State.ATTRIBUTE_NAME: {
            this._stateAttributeName(cp);
            break;
          }
          case State.AFTER_ATTRIBUTE_NAME: {
            this._stateAfterAttributeName(cp);
            break;
          }
          case State.BEFORE_ATTRIBUTE_VALUE: {
            this._stateBeforeAttributeValue(cp);
            break;
          }
          case State.ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
            this._stateAttributeValueDoubleQuoted(cp);
            break;
          }
          case State.ATTRIBUTE_VALUE_SINGLE_QUOTED: {
            this._stateAttributeValueSingleQuoted(cp);
            break;
          }
          case State.ATTRIBUTE_VALUE_UNQUOTED: {
            this._stateAttributeValueUnquoted(cp);
            break;
          }
          case State.AFTER_ATTRIBUTE_VALUE_QUOTED: {
            this._stateAfterAttributeValueQuoted(cp);
            break;
          }
          case State.SELF_CLOSING_START_TAG: {
            this._stateSelfClosingStartTag(cp);
            break;
          }
          case State.BOGUS_COMMENT: {
            this._stateBogusComment(cp);
            break;
          }
          case State.MARKUP_DECLARATION_OPEN: {
            this._stateMarkupDeclarationOpen(cp);
            break;
          }
          case State.COMMENT_START: {
            this._stateCommentStart(cp);
            break;
          }
          case State.COMMENT_START_DASH: {
            this._stateCommentStartDash(cp);
            break;
          }
          case State.COMMENT: {
            this._stateComment(cp);
            break;
          }
          case State.COMMENT_LESS_THAN_SIGN: {
            this._stateCommentLessThanSign(cp);
            break;
          }
          case State.COMMENT_LESS_THAN_SIGN_BANG: {
            this._stateCommentLessThanSignBang(cp);
            break;
          }
          case State.COMMENT_LESS_THAN_SIGN_BANG_DASH: {
            this._stateCommentLessThanSignBangDash(cp);
            break;
          }
          case State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
            this._stateCommentLessThanSignBangDashDash(cp);
            break;
          }
          case State.COMMENT_END_DASH: {
            this._stateCommentEndDash(cp);
            break;
          }
          case State.COMMENT_END: {
            this._stateCommentEnd(cp);
            break;
          }
          case State.COMMENT_END_BANG: {
            this._stateCommentEndBang(cp);
            break;
          }
          case State.DOCTYPE: {
            this._stateDoctype(cp);
            break;
          }
          case State.BEFORE_DOCTYPE_NAME: {
            this._stateBeforeDoctypeName(cp);
            break;
          }
          case State.DOCTYPE_NAME: {
            this._stateDoctypeName(cp);
            break;
          }
          case State.AFTER_DOCTYPE_NAME: {
            this._stateAfterDoctypeName(cp);
            break;
          }
          case State.AFTER_DOCTYPE_PUBLIC_KEYWORD: {
            this._stateAfterDoctypePublicKeyword(cp);
            break;
          }
          case State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: {
            this._stateBeforeDoctypePublicIdentifier(cp);
            break;
          }
          case State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: {
            this._stateDoctypePublicIdentifierDoubleQuoted(cp);
            break;
          }
          case State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: {
            this._stateDoctypePublicIdentifierSingleQuoted(cp);
            break;
          }
          case State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER: {
            this._stateAfterDoctypePublicIdentifier(cp);
            break;
          }
          case State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: {
            this._stateBetweenDoctypePublicAndSystemIdentifiers(cp);
            break;
          }
          case State.AFTER_DOCTYPE_SYSTEM_KEYWORD: {
            this._stateAfterDoctypeSystemKeyword(cp);
            break;
          }
          case State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: {
            this._stateBeforeDoctypeSystemIdentifier(cp);
            break;
          }
          case State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: {
            this._stateDoctypeSystemIdentifierDoubleQuoted(cp);
            break;
          }
          case State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: {
            this._stateDoctypeSystemIdentifierSingleQuoted(cp);
            break;
          }
          case State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER: {
            this._stateAfterDoctypeSystemIdentifier(cp);
            break;
          }
          case State.BOGUS_DOCTYPE: {
            this._stateBogusDoctype(cp);
            break;
          }
          case State.CDATA_SECTION: {
            this._stateCdataSection(cp);
            break;
          }
          case State.CDATA_SECTION_BRACKET: {
            this._stateCdataSectionBracket(cp);
            break;
          }
          case State.CDATA_SECTION_END: {
            this._stateCdataSectionEnd(cp);
            break;
          }
          case State.CHARACTER_REFERENCE: {
            this._stateCharacterReference();
            break;
          }
          case State.AMBIGUOUS_AMPERSAND: {
            this._stateAmbiguousAmpersand(cp);
            break;
          }
          default: {
            throw new Error("Unknown state");
          }
        }
      }
      // State machine
      // Data state
      //------------------------------------------------------------------
      _stateData(cp) {
        switch (cp) {
          case CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.TAG_OPEN;
            break;
          }
          case CODE_POINTS.AMPERSAND: {
            this._startCharacterReference();
            break;
          }
          case CODE_POINTS.NULL: {
            this._err(ERR.unexpectedNullCharacter);
            this._emitCodePoint(cp);
            break;
          }
          case CODE_POINTS.EOF: {
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      //  RCDATA state
      //------------------------------------------------------------------
      _stateRcdata(cp) {
        switch (cp) {
          case CODE_POINTS.AMPERSAND: {
            this._startCharacterReference();
            break;
          }
          case CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.RCDATA_LESS_THAN_SIGN;
            break;
          }
          case CODE_POINTS.NULL: {
            this._err(ERR.unexpectedNullCharacter);
            this._emitChars(REPLACEMENT_CHARACTER);
            break;
          }
          case CODE_POINTS.EOF: {
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      // RAWTEXT state
      //------------------------------------------------------------------
      _stateRawtext(cp) {
        switch (cp) {
          case CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.RAWTEXT_LESS_THAN_SIGN;
            break;
          }
          case CODE_POINTS.NULL: {
            this._err(ERR.unexpectedNullCharacter);
            this._emitChars(REPLACEMENT_CHARACTER);
            break;
          }
          case CODE_POINTS.EOF: {
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      // Script data state
      //------------------------------------------------------------------
      _stateScriptData(cp) {
        switch (cp) {
          case CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_LESS_THAN_SIGN;
            break;
          }
          case CODE_POINTS.NULL: {
            this._err(ERR.unexpectedNullCharacter);
            this._emitChars(REPLACEMENT_CHARACTER);
            break;
          }
          case CODE_POINTS.EOF: {
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      // PLAINTEXT state
      //------------------------------------------------------------------
      _statePlaintext(cp) {
        switch (cp) {
          case CODE_POINTS.NULL: {
            this._err(ERR.unexpectedNullCharacter);
            this._emitChars(REPLACEMENT_CHARACTER);
            break;
          }
          case CODE_POINTS.EOF: {
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      // Tag open state
      //------------------------------------------------------------------
      _stateTagOpen(cp) {
        if (isAsciiLetter(cp)) {
          this._createStartTagToken();
          this.state = State.TAG_NAME;
          this._stateTagName(cp);
        } else
          switch (cp) {
            case CODE_POINTS.EXCLAMATION_MARK: {
              this.state = State.MARKUP_DECLARATION_OPEN;
              break;
            }
            case CODE_POINTS.SOLIDUS: {
              this.state = State.END_TAG_OPEN;
              break;
            }
            case CODE_POINTS.QUESTION_MARK: {
              this._err(ERR.unexpectedQuestionMarkInsteadOfTagName);
              this._createCommentToken(1);
              this.state = State.BOGUS_COMMENT;
              this._stateBogusComment(cp);
              break;
            }
            case CODE_POINTS.EOF: {
              this._err(ERR.eofBeforeTagName);
              this._emitChars("<");
              this._emitEOFToken();
              break;
            }
            default: {
              this._err(ERR.invalidFirstCharacterOfTagName);
              this._emitChars("<");
              this.state = State.DATA;
              this._stateData(cp);
            }
          }
      }
      // End tag open state
      //------------------------------------------------------------------
      _stateEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
          this._createEndTagToken();
          this.state = State.TAG_NAME;
          this._stateTagName(cp);
        } else
          switch (cp) {
            case CODE_POINTS.GREATER_THAN_SIGN: {
              this._err(ERR.missingEndTagName);
              this.state = State.DATA;
              break;
            }
            case CODE_POINTS.EOF: {
              this._err(ERR.eofBeforeTagName);
              this._emitChars("</");
              this._emitEOFToken();
              break;
            }
            default: {
              this._err(ERR.invalidFirstCharacterOfTagName);
              this._createCommentToken(2);
              this.state = State.BOGUS_COMMENT;
              this._stateBogusComment(cp);
            }
          }
      }
      // Tag name state
      //------------------------------------------------------------------
      _stateTagName(cp) {
        const token = this.currentToken;
        switch (cp) {
          case CODE_POINTS.SPACE:
          case CODE_POINTS.LINE_FEED:
          case CODE_POINTS.TABULATION:
          case CODE_POINTS.FORM_FEED: {
            this.state = State.BEFORE_ATTRIBUTE_NAME;
            break;
          }
          case CODE_POINTS.SOLIDUS: {
            this.state = State.SELF_CLOSING_START_TAG;
            break;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentTagToken();
            break;
          }
          case CODE_POINTS.NULL: {
            this._err(ERR.unexpectedNullCharacter);
            token.tagName += REPLACEMENT_CHARACTER;
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            token.tagName += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
          }
        }
      }
      // RCDATA less-than sign state
      //------------------------------------------------------------------
      _stateRcdataLessThanSign(cp) {
        if (cp === CODE_POINTS.SOLIDUS) {
          this.state = State.RCDATA_END_TAG_OPEN;
        } else {
          this._emitChars("<");
          this.state = State.RCDATA;
          this._stateRcdata(cp);
        }
      }
      // RCDATA end tag open state
      //------------------------------------------------------------------
      _stateRcdataEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
          this.state = State.RCDATA_END_TAG_NAME;
          this._stateRcdataEndTagName(cp);
        } else {
          this._emitChars("</");
          this.state = State.RCDATA;
          this._stateRcdata(cp);
        }
      }
      handleSpecialEndTag(_cp) {
        if (!this.preprocessor.startsWith(this.lastStartTagName, false)) {
          return !this._ensureHibernation();
        }
        this._createEndTagToken();
        const token = this.currentToken;
        token.tagName = this.lastStartTagName;
        const cp = this.preprocessor.peek(this.lastStartTagName.length);
        switch (cp) {
          case CODE_POINTS.SPACE:
          case CODE_POINTS.LINE_FEED:
          case CODE_POINTS.TABULATION:
          case CODE_POINTS.FORM_FEED: {
            this._advanceBy(this.lastStartTagName.length);
            this.state = State.BEFORE_ATTRIBUTE_NAME;
            return false;
          }
          case CODE_POINTS.SOLIDUS: {
            this._advanceBy(this.lastStartTagName.length);
            this.state = State.SELF_CLOSING_START_TAG;
            return false;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this._advanceBy(this.lastStartTagName.length);
            this.emitCurrentTagToken();
            this.state = State.DATA;
            return false;
          }
          default: {
            return !this._ensureHibernation();
          }
        }
      }
      // RCDATA end tag name state
      //------------------------------------------------------------------
      _stateRcdataEndTagName(cp) {
        if (this.handleSpecialEndTag(cp)) {
          this._emitChars("</");
          this.state = State.RCDATA;
          this._stateRcdata(cp);
        }
      }
      // RAWTEXT less-than sign state
      //------------------------------------------------------------------
      _stateRawtextLessThanSign(cp) {
        if (cp === CODE_POINTS.SOLIDUS) {
          this.state = State.RAWTEXT_END_TAG_OPEN;
        } else {
          this._emitChars("<");
          this.state = State.RAWTEXT;
          this._stateRawtext(cp);
        }
      }
      // RAWTEXT end tag open state
      //------------------------------------------------------------------
      _stateRawtextEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
          this.state = State.RAWTEXT_END_TAG_NAME;
          this._stateRawtextEndTagName(cp);
        } else {
          this._emitChars("</");
          this.state = State.RAWTEXT;
          this._stateRawtext(cp);
        }
      }
      // RAWTEXT end tag name state
      //------------------------------------------------------------------
      _stateRawtextEndTagName(cp) {
        if (this.handleSpecialEndTag(cp)) {
          this._emitChars("</");
          this.state = State.RAWTEXT;
          this._stateRawtext(cp);
        }
      }
      // Script data less-than sign state
      //------------------------------------------------------------------
      _stateScriptDataLessThanSign(cp) {
        switch (cp) {
          case CODE_POINTS.SOLIDUS: {
            this.state = State.SCRIPT_DATA_END_TAG_OPEN;
            break;
          }
          case CODE_POINTS.EXCLAMATION_MARK: {
            this.state = State.SCRIPT_DATA_ESCAPE_START;
            this._emitChars("<!");
            break;
          }
          default: {
            this._emitChars("<");
            this.state = State.SCRIPT_DATA;
            this._stateScriptData(cp);
          }
        }
      }
      // Script data end tag open state
      //------------------------------------------------------------------
      _stateScriptDataEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
          this.state = State.SCRIPT_DATA_END_TAG_NAME;
          this._stateScriptDataEndTagName(cp);
        } else {
          this._emitChars("</");
          this.state = State.SCRIPT_DATA;
          this._stateScriptData(cp);
        }
      }
      // Script data end tag name state
      //------------------------------------------------------------------
      _stateScriptDataEndTagName(cp) {
        if (this.handleSpecialEndTag(cp)) {
          this._emitChars("</");
          this.state = State.SCRIPT_DATA;
          this._stateScriptData(cp);
        }
      }
      // Script data escape start state
      //------------------------------------------------------------------
      _stateScriptDataEscapeStart(cp) {
        if (cp === CODE_POINTS.HYPHEN_MINUS) {
          this.state = State.SCRIPT_DATA_ESCAPE_START_DASH;
          this._emitChars("-");
        } else {
          this.state = State.SCRIPT_DATA;
          this._stateScriptData(cp);
        }
      }
      // Script data escape start dash state
      //------------------------------------------------------------------
      _stateScriptDataEscapeStartDash(cp) {
        if (cp === CODE_POINTS.HYPHEN_MINUS) {
          this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH;
          this._emitChars("-");
        } else {
          this.state = State.SCRIPT_DATA;
          this._stateScriptData(cp);
        }
      }
      // Script data escaped state
      //------------------------------------------------------------------
      _stateScriptDataEscaped(cp) {
        switch (cp) {
          case CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.SCRIPT_DATA_ESCAPED_DASH;
            this._emitChars("-");
            break;
          }
          case CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
            break;
          }
          case CODE_POINTS.NULL: {
            this._err(ERR.unexpectedNullCharacter);
            this._emitChars(REPLACEMENT_CHARACTER);
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      // Script data escaped dash state
      //------------------------------------------------------------------
      _stateScriptDataEscapedDash(cp) {
        switch (cp) {
          case CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH;
            this._emitChars("-");
            break;
          }
          case CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
            break;
          }
          case CODE_POINTS.NULL: {
            this._err(ERR.unexpectedNullCharacter);
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._emitChars(REPLACEMENT_CHARACTER);
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
            break;
          }
          default: {
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._emitCodePoint(cp);
          }
        }
      }
      // Script data escaped dash dash state
      //------------------------------------------------------------------
      _stateScriptDataEscapedDashDash(cp) {
        switch (cp) {
          case CODE_POINTS.HYPHEN_MINUS: {
            this._emitChars("-");
            break;
          }
          case CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
            break;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.SCRIPT_DATA;
            this._emitChars(">");
            break;
          }
          case CODE_POINTS.NULL: {
            this._err(ERR.unexpectedNullCharacter);
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._emitChars(REPLACEMENT_CHARACTER);
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
            break;
          }
          default: {
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._emitCodePoint(cp);
          }
        }
      }
      // Script data escaped less-than sign state
      //------------------------------------------------------------------
      _stateScriptDataEscapedLessThanSign(cp) {
        if (cp === CODE_POINTS.SOLIDUS) {
          this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN;
        } else if (isAsciiLetter(cp)) {
          this._emitChars("<");
          this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_START;
          this._stateScriptDataDoubleEscapeStart(cp);
        } else {
          this._emitChars("<");
          this.state = State.SCRIPT_DATA_ESCAPED;
          this._stateScriptDataEscaped(cp);
        }
      }
      // Script data escaped end tag open state
      //------------------------------------------------------------------
      _stateScriptDataEscapedEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
          this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_NAME;
          this._stateScriptDataEscapedEndTagName(cp);
        } else {
          this._emitChars("</");
          this.state = State.SCRIPT_DATA_ESCAPED;
          this._stateScriptDataEscaped(cp);
        }
      }
      // Script data escaped end tag name state
      //------------------------------------------------------------------
      _stateScriptDataEscapedEndTagName(cp) {
        if (this.handleSpecialEndTag(cp)) {
          this._emitChars("</");
          this.state = State.SCRIPT_DATA_ESCAPED;
          this._stateScriptDataEscaped(cp);
        }
      }
      // Script data double escape start state
      //------------------------------------------------------------------
      _stateScriptDataDoubleEscapeStart(cp) {
        if (this.preprocessor.startsWith(SEQUENCES.SCRIPT, false) && isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(SEQUENCES.SCRIPT.length))) {
          this._emitCodePoint(cp);
          for (let i = 0; i < SEQUENCES.SCRIPT.length; i++) {
            this._emitCodePoint(this._consume());
          }
          this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
        } else if (!this._ensureHibernation()) {
          this.state = State.SCRIPT_DATA_ESCAPED;
          this._stateScriptDataEscaped(cp);
        }
      }
      // Script data double escaped state
      //------------------------------------------------------------------
      _stateScriptDataDoubleEscaped(cp) {
        switch (cp) {
          case CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH;
            this._emitChars("-");
            break;
          }
          case CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
            this._emitChars("<");
            break;
          }
          case CODE_POINTS.NULL: {
            this._err(ERR.unexpectedNullCharacter);
            this._emitChars(REPLACEMENT_CHARACTER);
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      // Script data double escaped dash state
      //------------------------------------------------------------------
      _stateScriptDataDoubleEscapedDash(cp) {
        switch (cp) {
          case CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH;
            this._emitChars("-");
            break;
          }
          case CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
            this._emitChars("<");
            break;
          }
          case CODE_POINTS.NULL: {
            this._err(ERR.unexpectedNullCharacter);
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
            this._emitChars(REPLACEMENT_CHARACTER);
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
            break;
          }
          default: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
            this._emitCodePoint(cp);
          }
        }
      }
      // Script data double escaped dash dash state
      //------------------------------------------------------------------
      _stateScriptDataDoubleEscapedDashDash(cp) {
        switch (cp) {
          case CODE_POINTS.HYPHEN_MINUS: {
            this._emitChars("-");
            break;
          }
          case CODE_POINTS.LESS_THAN_SIGN: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
            this._emitChars("<");
            break;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.SCRIPT_DATA;
            this._emitChars(">");
            break;
          }
          case CODE_POINTS.NULL: {
            this._err(ERR.unexpectedNullCharacter);
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
            this._emitChars(REPLACEMENT_CHARACTER);
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
            break;
          }
          default: {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
            this._emitCodePoint(cp);
          }
        }
      }
      // Script data double escaped less-than sign state
      //------------------------------------------------------------------
      _stateScriptDataDoubleEscapedLessThanSign(cp) {
        if (cp === CODE_POINTS.SOLIDUS) {
          this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_END;
          this._emitChars("/");
        } else {
          this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
          this._stateScriptDataDoubleEscaped(cp);
        }
      }
      // Script data double escape end state
      //------------------------------------------------------------------
      _stateScriptDataDoubleEscapeEnd(cp) {
        if (this.preprocessor.startsWith(SEQUENCES.SCRIPT, false) && isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(SEQUENCES.SCRIPT.length))) {
          this._emitCodePoint(cp);
          for (let i = 0; i < SEQUENCES.SCRIPT.length; i++) {
            this._emitCodePoint(this._consume());
          }
          this.state = State.SCRIPT_DATA_ESCAPED;
        } else if (!this._ensureHibernation()) {
          this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
          this._stateScriptDataDoubleEscaped(cp);
        }
      }
      // Before attribute name state
      //------------------------------------------------------------------
      _stateBeforeAttributeName(cp) {
        switch (cp) {
          case CODE_POINTS.SPACE:
          case CODE_POINTS.LINE_FEED:
          case CODE_POINTS.TABULATION:
          case CODE_POINTS.FORM_FEED: {
            break;
          }
          case CODE_POINTS.SOLIDUS:
          case CODE_POINTS.GREATER_THAN_SIGN:
          case CODE_POINTS.EOF: {
            this.state = State.AFTER_ATTRIBUTE_NAME;
            this._stateAfterAttributeName(cp);
            break;
          }
          case CODE_POINTS.EQUALS_SIGN: {
            this._err(ERR.unexpectedEqualsSignBeforeAttributeName);
            this._createAttr("=");
            this.state = State.ATTRIBUTE_NAME;
            break;
          }
          default: {
            this._createAttr("");
            this.state = State.ATTRIBUTE_NAME;
            this._stateAttributeName(cp);
          }
        }
      }
      // Attribute name state
      //------------------------------------------------------------------
      _stateAttributeName(cp) {
        switch (cp) {
          case CODE_POINTS.SPACE:
          case CODE_POINTS.LINE_FEED:
          case CODE_POINTS.TABULATION:
          case CODE_POINTS.FORM_FEED:
          case CODE_POINTS.SOLIDUS:
          case CODE_POINTS.GREATER_THAN_SIGN:
          case CODE_POINTS.EOF: {
            this._leaveAttrName();
            this.state = State.AFTER_ATTRIBUTE_NAME;
            this._stateAfterAttributeName(cp);
            break;
          }
          case CODE_POINTS.EQUALS_SIGN: {
            this._leaveAttrName();
            this.state = State.BEFORE_ATTRIBUTE_VALUE;
            break;
          }
          case CODE_POINTS.QUOTATION_MARK:
          case CODE_POINTS.APOSTROPHE:
          case CODE_POINTS.LESS_THAN_SIGN: {
            this._err(ERR.unexpectedCharacterInAttributeName);
            this.currentAttr.name += String.fromCodePoint(cp);
            break;
          }
          case CODE_POINTS.NULL: {
            this._err(ERR.unexpectedNullCharacter);
            this.currentAttr.name += REPLACEMENT_CHARACTER;
            break;
          }
          default: {
            this.currentAttr.name += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
          }
        }
      }
      // After attribute name state
      //------------------------------------------------------------------
      _stateAfterAttributeName(cp) {
        switch (cp) {
          case CODE_POINTS.SPACE:
          case CODE_POINTS.LINE_FEED:
          case CODE_POINTS.TABULATION:
          case CODE_POINTS.FORM_FEED: {
            break;
          }
          case CODE_POINTS.SOLIDUS: {
            this.state = State.SELF_CLOSING_START_TAG;
            break;
          }
          case CODE_POINTS.EQUALS_SIGN: {
            this.state = State.BEFORE_ATTRIBUTE_VALUE;
            break;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentTagToken();
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            this._createAttr("");
            this.state = State.ATTRIBUTE_NAME;
            this._stateAttributeName(cp);
          }
        }
      }
      // Before attribute value state
      //------------------------------------------------------------------
      _stateBeforeAttributeValue(cp) {
        switch (cp) {
          case CODE_POINTS.SPACE:
          case CODE_POINTS.LINE_FEED:
          case CODE_POINTS.TABULATION:
          case CODE_POINTS.FORM_FEED: {
            break;
          }
          case CODE_POINTS.QUOTATION_MARK: {
            this.state = State.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
            break;
          }
          case CODE_POINTS.APOSTROPHE: {
            this.state = State.ATTRIBUTE_VALUE_SINGLE_QUOTED;
            break;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(ERR.missingAttributeValue);
            this.state = State.DATA;
            this.emitCurrentTagToken();
            break;
          }
          default: {
            this.state = State.ATTRIBUTE_VALUE_UNQUOTED;
            this._stateAttributeValueUnquoted(cp);
          }
        }
      }
      // Attribute value (double-quoted) state
      //------------------------------------------------------------------
      _stateAttributeValueDoubleQuoted(cp) {
        switch (cp) {
          case CODE_POINTS.QUOTATION_MARK: {
            this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
            break;
          }
          case CODE_POINTS.AMPERSAND: {
            this._startCharacterReference();
            break;
          }
          case CODE_POINTS.NULL: {
            this._err(ERR.unexpectedNullCharacter);
            this.currentAttr.value += REPLACEMENT_CHARACTER;
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            this.currentAttr.value += String.fromCodePoint(cp);
          }
        }
      }
      // Attribute value (single-quoted) state
      //------------------------------------------------------------------
      _stateAttributeValueSingleQuoted(cp) {
        switch (cp) {
          case CODE_POINTS.APOSTROPHE: {
            this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
            break;
          }
          case CODE_POINTS.AMPERSAND: {
            this._startCharacterReference();
            break;
          }
          case CODE_POINTS.NULL: {
            this._err(ERR.unexpectedNullCharacter);
            this.currentAttr.value += REPLACEMENT_CHARACTER;
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            this.currentAttr.value += String.fromCodePoint(cp);
          }
        }
      }
      // Attribute value (unquoted) state
      //------------------------------------------------------------------
      _stateAttributeValueUnquoted(cp) {
        switch (cp) {
          case CODE_POINTS.SPACE:
          case CODE_POINTS.LINE_FEED:
          case CODE_POINTS.TABULATION:
          case CODE_POINTS.FORM_FEED: {
            this._leaveAttrValue();
            this.state = State.BEFORE_ATTRIBUTE_NAME;
            break;
          }
          case CODE_POINTS.AMPERSAND: {
            this._startCharacterReference();
            break;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this._leaveAttrValue();
            this.state = State.DATA;
            this.emitCurrentTagToken();
            break;
          }
          case CODE_POINTS.NULL: {
            this._err(ERR.unexpectedNullCharacter);
            this.currentAttr.value += REPLACEMENT_CHARACTER;
            break;
          }
          case CODE_POINTS.QUOTATION_MARK:
          case CODE_POINTS.APOSTROPHE:
          case CODE_POINTS.LESS_THAN_SIGN:
          case CODE_POINTS.EQUALS_SIGN:
          case CODE_POINTS.GRAVE_ACCENT: {
            this._err(ERR.unexpectedCharacterInUnquotedAttributeValue);
            this.currentAttr.value += String.fromCodePoint(cp);
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            this.currentAttr.value += String.fromCodePoint(cp);
          }
        }
      }
      // After attribute value (quoted) state
      //------------------------------------------------------------------
      _stateAfterAttributeValueQuoted(cp) {
        switch (cp) {
          case CODE_POINTS.SPACE:
          case CODE_POINTS.LINE_FEED:
          case CODE_POINTS.TABULATION:
          case CODE_POINTS.FORM_FEED: {
            this._leaveAttrValue();
            this.state = State.BEFORE_ATTRIBUTE_NAME;
            break;
          }
          case CODE_POINTS.SOLIDUS: {
            this._leaveAttrValue();
            this.state = State.SELF_CLOSING_START_TAG;
            break;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this._leaveAttrValue();
            this.state = State.DATA;
            this.emitCurrentTagToken();
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(ERR.missingWhitespaceBetweenAttributes);
            this.state = State.BEFORE_ATTRIBUTE_NAME;
            this._stateBeforeAttributeName(cp);
          }
        }
      }
      // Self-closing start tag state
      //------------------------------------------------------------------
      _stateSelfClosingStartTag(cp) {
        switch (cp) {
          case CODE_POINTS.GREATER_THAN_SIGN: {
            const token = this.currentToken;
            token.selfClosing = true;
            this.state = State.DATA;
            this.emitCurrentTagToken();
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInTag);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(ERR.unexpectedSolidusInTag);
            this.state = State.BEFORE_ATTRIBUTE_NAME;
            this._stateBeforeAttributeName(cp);
          }
        }
      }
      // Bogus comment state
      //------------------------------------------------------------------
      _stateBogusComment(cp) {
        const token = this.currentToken;
        switch (cp) {
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentComment(token);
            break;
          }
          case CODE_POINTS.EOF: {
            this.emitCurrentComment(token);
            this._emitEOFToken();
            break;
          }
          case CODE_POINTS.NULL: {
            this._err(ERR.unexpectedNullCharacter);
            token.data += REPLACEMENT_CHARACTER;
            break;
          }
          default: {
            token.data += String.fromCodePoint(cp);
          }
        }
      }
      // Markup declaration open state
      //------------------------------------------------------------------
      _stateMarkupDeclarationOpen(cp) {
        if (this._consumeSequenceIfMatch(SEQUENCES.DASH_DASH, true)) {
          this._createCommentToken(SEQUENCES.DASH_DASH.length + 1);
          this.state = State.COMMENT_START;
        } else if (this._consumeSequenceIfMatch(SEQUENCES.DOCTYPE, false)) {
          this.currentLocation = this.getCurrentLocation(SEQUENCES.DOCTYPE.length + 1);
          this.state = State.DOCTYPE;
        } else if (this._consumeSequenceIfMatch(SEQUENCES.CDATA_START, true)) {
          if (this.inForeignNode) {
            this.state = State.CDATA_SECTION;
          } else {
            this._err(ERR.cdataInHtmlContent);
            this._createCommentToken(SEQUENCES.CDATA_START.length + 1);
            this.currentToken.data = "[CDATA[";
            this.state = State.BOGUS_COMMENT;
          }
        } else if (!this._ensureHibernation()) {
          this._err(ERR.incorrectlyOpenedComment);
          this._createCommentToken(2);
          this.state = State.BOGUS_COMMENT;
          this._stateBogusComment(cp);
        }
      }
      // Comment start state
      //------------------------------------------------------------------
      _stateCommentStart(cp) {
        switch (cp) {
          case CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.COMMENT_START_DASH;
            break;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(ERR.abruptClosingOfEmptyComment);
            this.state = State.DATA;
            const token = this.currentToken;
            this.emitCurrentComment(token);
            break;
          }
          default: {
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
      }
      // Comment start dash state
      //------------------------------------------------------------------
      _stateCommentStartDash(cp) {
        const token = this.currentToken;
        switch (cp) {
          case CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.COMMENT_END;
            break;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(ERR.abruptClosingOfEmptyComment);
            this.state = State.DATA;
            this.emitCurrentComment(token);
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInComment);
            this.emitCurrentComment(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.data += "-";
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
      }
      // Comment state
      //------------------------------------------------------------------
      _stateComment(cp) {
        const token = this.currentToken;
        switch (cp) {
          case CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.COMMENT_END_DASH;
            break;
          }
          case CODE_POINTS.LESS_THAN_SIGN: {
            token.data += "<";
            this.state = State.COMMENT_LESS_THAN_SIGN;
            break;
          }
          case CODE_POINTS.NULL: {
            this._err(ERR.unexpectedNullCharacter);
            token.data += REPLACEMENT_CHARACTER;
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInComment);
            this.emitCurrentComment(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.data += String.fromCodePoint(cp);
          }
        }
      }
      // Comment less-than sign state
      //------------------------------------------------------------------
      _stateCommentLessThanSign(cp) {
        const token = this.currentToken;
        switch (cp) {
          case CODE_POINTS.EXCLAMATION_MARK: {
            token.data += "!";
            this.state = State.COMMENT_LESS_THAN_SIGN_BANG;
            break;
          }
          case CODE_POINTS.LESS_THAN_SIGN: {
            token.data += "<";
            break;
          }
          default: {
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
      }
      // Comment less-than sign bang state
      //------------------------------------------------------------------
      _stateCommentLessThanSignBang(cp) {
        if (cp === CODE_POINTS.HYPHEN_MINUS) {
          this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH;
        } else {
          this.state = State.COMMENT;
          this._stateComment(cp);
        }
      }
      // Comment less-than sign bang dash state
      //------------------------------------------------------------------
      _stateCommentLessThanSignBangDash(cp) {
        if (cp === CODE_POINTS.HYPHEN_MINUS) {
          this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH;
        } else {
          this.state = State.COMMENT_END_DASH;
          this._stateCommentEndDash(cp);
        }
      }
      // Comment less-than sign bang dash dash state
      //------------------------------------------------------------------
      _stateCommentLessThanSignBangDashDash(cp) {
        if (cp !== CODE_POINTS.GREATER_THAN_SIGN && cp !== CODE_POINTS.EOF) {
          this._err(ERR.nestedComment);
        }
        this.state = State.COMMENT_END;
        this._stateCommentEnd(cp);
      }
      // Comment end dash state
      //------------------------------------------------------------------
      _stateCommentEndDash(cp) {
        const token = this.currentToken;
        switch (cp) {
          case CODE_POINTS.HYPHEN_MINUS: {
            this.state = State.COMMENT_END;
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInComment);
            this.emitCurrentComment(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.data += "-";
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
      }
      // Comment end state
      //------------------------------------------------------------------
      _stateCommentEnd(cp) {
        const token = this.currentToken;
        switch (cp) {
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentComment(token);
            break;
          }
          case CODE_POINTS.EXCLAMATION_MARK: {
            this.state = State.COMMENT_END_BANG;
            break;
          }
          case CODE_POINTS.HYPHEN_MINUS: {
            token.data += "-";
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInComment);
            this.emitCurrentComment(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.data += "--";
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
      }
      // Comment end bang state
      //------------------------------------------------------------------
      _stateCommentEndBang(cp) {
        const token = this.currentToken;
        switch (cp) {
          case CODE_POINTS.HYPHEN_MINUS: {
            token.data += "--!";
            this.state = State.COMMENT_END_DASH;
            break;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(ERR.incorrectlyClosedComment);
            this.state = State.DATA;
            this.emitCurrentComment(token);
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInComment);
            this.emitCurrentComment(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.data += "--!";
            this.state = State.COMMENT;
            this._stateComment(cp);
          }
        }
      }
      // DOCTYPE state
      //------------------------------------------------------------------
      _stateDoctype(cp) {
        switch (cp) {
          case CODE_POINTS.SPACE:
          case CODE_POINTS.LINE_FEED:
          case CODE_POINTS.TABULATION:
          case CODE_POINTS.FORM_FEED: {
            this.state = State.BEFORE_DOCTYPE_NAME;
            break;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.BEFORE_DOCTYPE_NAME;
            this._stateBeforeDoctypeName(cp);
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInDoctype);
            this._createDoctypeToken(null);
            const token = this.currentToken;
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(ERR.missingWhitespaceBeforeDoctypeName);
            this.state = State.BEFORE_DOCTYPE_NAME;
            this._stateBeforeDoctypeName(cp);
          }
        }
      }
      // Before DOCTYPE name state
      //------------------------------------------------------------------
      _stateBeforeDoctypeName(cp) {
        if (isAsciiUpper(cp)) {
          this._createDoctypeToken(String.fromCharCode(toAsciiLower(cp)));
          this.state = State.DOCTYPE_NAME;
        } else
          switch (cp) {
            case CODE_POINTS.SPACE:
            case CODE_POINTS.LINE_FEED:
            case CODE_POINTS.TABULATION:
            case CODE_POINTS.FORM_FEED: {
              break;
            }
            case CODE_POINTS.NULL: {
              this._err(ERR.unexpectedNullCharacter);
              this._createDoctypeToken(REPLACEMENT_CHARACTER);
              this.state = State.DOCTYPE_NAME;
              break;
            }
            case CODE_POINTS.GREATER_THAN_SIGN: {
              this._err(ERR.missingDoctypeName);
              this._createDoctypeToken(null);
              const token = this.currentToken;
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this.state = State.DATA;
              break;
            }
            case CODE_POINTS.EOF: {
              this._err(ERR.eofInDoctype);
              this._createDoctypeToken(null);
              const token = this.currentToken;
              token.forceQuirks = true;
              this.emitCurrentDoctype(token);
              this._emitEOFToken();
              break;
            }
            default: {
              this._createDoctypeToken(String.fromCodePoint(cp));
              this.state = State.DOCTYPE_NAME;
            }
          }
      }
      // DOCTYPE name state
      //------------------------------------------------------------------
      _stateDoctypeName(cp) {
        const token = this.currentToken;
        switch (cp) {
          case CODE_POINTS.SPACE:
          case CODE_POINTS.LINE_FEED:
          case CODE_POINTS.TABULATION:
          case CODE_POINTS.FORM_FEED: {
            this.state = State.AFTER_DOCTYPE_NAME;
            break;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case CODE_POINTS.NULL: {
            this._err(ERR.unexpectedNullCharacter);
            token.name += REPLACEMENT_CHARACTER;
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.name += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
          }
        }
      }
      // After DOCTYPE name state
      //------------------------------------------------------------------
      _stateAfterDoctypeName(cp) {
        const token = this.currentToken;
        switch (cp) {
          case CODE_POINTS.SPACE:
          case CODE_POINTS.LINE_FEED:
          case CODE_POINTS.TABULATION:
          case CODE_POINTS.FORM_FEED: {
            break;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            if (this._consumeSequenceIfMatch(SEQUENCES.PUBLIC, false)) {
              this.state = State.AFTER_DOCTYPE_PUBLIC_KEYWORD;
            } else if (this._consumeSequenceIfMatch(SEQUENCES.SYSTEM, false)) {
              this.state = State.AFTER_DOCTYPE_SYSTEM_KEYWORD;
            } else if (!this._ensureHibernation()) {
              this._err(ERR.invalidCharacterSequenceAfterDoctypeName);
              token.forceQuirks = true;
              this.state = State.BOGUS_DOCTYPE;
              this._stateBogusDoctype(cp);
            }
          }
        }
      }
      // After DOCTYPE public keyword state
      //------------------------------------------------------------------
      _stateAfterDoctypePublicKeyword(cp) {
        const token = this.currentToken;
        switch (cp) {
          case CODE_POINTS.SPACE:
          case CODE_POINTS.LINE_FEED:
          case CODE_POINTS.TABULATION:
          case CODE_POINTS.FORM_FEED: {
            this.state = State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
            break;
          }
          case CODE_POINTS.QUOTATION_MARK: {
            this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword);
            token.publicId = "";
            this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
          case CODE_POINTS.APOSTROPHE: {
            this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword);
            token.publicId = "";
            this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(ERR.missingDoctypePublicIdentifier);
            token.forceQuirks = true;
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier);
            token.forceQuirks = true;
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      // Before DOCTYPE public identifier state
      //------------------------------------------------------------------
      _stateBeforeDoctypePublicIdentifier(cp) {
        const token = this.currentToken;
        switch (cp) {
          case CODE_POINTS.SPACE:
          case CODE_POINTS.LINE_FEED:
          case CODE_POINTS.TABULATION:
          case CODE_POINTS.FORM_FEED: {
            break;
          }
          case CODE_POINTS.QUOTATION_MARK: {
            token.publicId = "";
            this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
          case CODE_POINTS.APOSTROPHE: {
            token.publicId = "";
            this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(ERR.missingDoctypePublicIdentifier);
            token.forceQuirks = true;
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier);
            token.forceQuirks = true;
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      // DOCTYPE public identifier (double-quoted) state
      //------------------------------------------------------------------
      _stateDoctypePublicIdentifierDoubleQuoted(cp) {
        const token = this.currentToken;
        switch (cp) {
          case CODE_POINTS.QUOTATION_MARK: {
            this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
            break;
          }
          case CODE_POINTS.NULL: {
            this._err(ERR.unexpectedNullCharacter);
            token.publicId += REPLACEMENT_CHARACTER;
            break;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(ERR.abruptDoctypePublicIdentifier);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.publicId += String.fromCodePoint(cp);
          }
        }
      }
      // DOCTYPE public identifier (single-quoted) state
      //------------------------------------------------------------------
      _stateDoctypePublicIdentifierSingleQuoted(cp) {
        const token = this.currentToken;
        switch (cp) {
          case CODE_POINTS.APOSTROPHE: {
            this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
            break;
          }
          case CODE_POINTS.NULL: {
            this._err(ERR.unexpectedNullCharacter);
            token.publicId += REPLACEMENT_CHARACTER;
            break;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(ERR.abruptDoctypePublicIdentifier);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.publicId += String.fromCodePoint(cp);
          }
        }
      }
      // After DOCTYPE public identifier state
      //------------------------------------------------------------------
      _stateAfterDoctypePublicIdentifier(cp) {
        const token = this.currentToken;
        switch (cp) {
          case CODE_POINTS.SPACE:
          case CODE_POINTS.LINE_FEED:
          case CODE_POINTS.TABULATION:
          case CODE_POINTS.FORM_FEED: {
            this.state = State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
            break;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case CODE_POINTS.QUOTATION_MARK: {
            this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
          case CODE_POINTS.APOSTROPHE: {
            this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      // Between DOCTYPE public and system identifiers state
      //------------------------------------------------------------------
      _stateBetweenDoctypePublicAndSystemIdentifiers(cp) {
        const token = this.currentToken;
        switch (cp) {
          case CODE_POINTS.SPACE:
          case CODE_POINTS.LINE_FEED:
          case CODE_POINTS.TABULATION:
          case CODE_POINTS.FORM_FEED: {
            break;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case CODE_POINTS.QUOTATION_MARK: {
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
          case CODE_POINTS.APOSTROPHE: {
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      // After DOCTYPE system keyword state
      //------------------------------------------------------------------
      _stateAfterDoctypeSystemKeyword(cp) {
        const token = this.currentToken;
        switch (cp) {
          case CODE_POINTS.SPACE:
          case CODE_POINTS.LINE_FEED:
          case CODE_POINTS.TABULATION:
          case CODE_POINTS.FORM_FEED: {
            this.state = State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
            break;
          }
          case CODE_POINTS.QUOTATION_MARK: {
            this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword);
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
          case CODE_POINTS.APOSTROPHE: {
            this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword);
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(ERR.missingDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      // Before DOCTYPE system identifier state
      //------------------------------------------------------------------
      _stateBeforeDoctypeSystemIdentifier(cp) {
        const token = this.currentToken;
        switch (cp) {
          case CODE_POINTS.SPACE:
          case CODE_POINTS.LINE_FEED:
          case CODE_POINTS.TABULATION:
          case CODE_POINTS.FORM_FEED: {
            break;
          }
          case CODE_POINTS.QUOTATION_MARK: {
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
            break;
          }
          case CODE_POINTS.APOSTROPHE: {
            token.systemId = "";
            this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
            break;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(ERR.missingDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.state = State.DATA;
            this.emitCurrentDoctype(token);
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      // DOCTYPE system identifier (double-quoted) state
      //------------------------------------------------------------------
      _stateDoctypeSystemIdentifierDoubleQuoted(cp) {
        const token = this.currentToken;
        switch (cp) {
          case CODE_POINTS.QUOTATION_MARK: {
            this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
            break;
          }
          case CODE_POINTS.NULL: {
            this._err(ERR.unexpectedNullCharacter);
            token.systemId += REPLACEMENT_CHARACTER;
            break;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(ERR.abruptDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.systemId += String.fromCodePoint(cp);
          }
        }
      }
      // DOCTYPE system identifier (single-quoted) state
      //------------------------------------------------------------------
      _stateDoctypeSystemIdentifierSingleQuoted(cp) {
        const token = this.currentToken;
        switch (cp) {
          case CODE_POINTS.APOSTROPHE: {
            this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
            break;
          }
          case CODE_POINTS.NULL: {
            this._err(ERR.unexpectedNullCharacter);
            token.systemId += REPLACEMENT_CHARACTER;
            break;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this._err(ERR.abruptDoctypeSystemIdentifier);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            token.systemId += String.fromCodePoint(cp);
          }
        }
      }
      // After DOCTYPE system identifier state
      //------------------------------------------------------------------
      _stateAfterDoctypeSystemIdentifier(cp) {
        const token = this.currentToken;
        switch (cp) {
          case CODE_POINTS.SPACE:
          case CODE_POINTS.LINE_FEED:
          case CODE_POINTS.TABULATION:
          case CODE_POINTS.FORM_FEED: {
            break;
          }
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInDoctype);
            token.forceQuirks = true;
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default: {
            this._err(ERR.unexpectedCharacterAfterDoctypeSystemIdentifier);
            this.state = State.BOGUS_DOCTYPE;
            this._stateBogusDoctype(cp);
          }
        }
      }
      // Bogus DOCTYPE state
      //------------------------------------------------------------------
      _stateBogusDoctype(cp) {
        const token = this.currentToken;
        switch (cp) {
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this.emitCurrentDoctype(token);
            this.state = State.DATA;
            break;
          }
          case CODE_POINTS.NULL: {
            this._err(ERR.unexpectedNullCharacter);
            break;
          }
          case CODE_POINTS.EOF: {
            this.emitCurrentDoctype(token);
            this._emitEOFToken();
            break;
          }
          default:
        }
      }
      // CDATA section state
      //------------------------------------------------------------------
      _stateCdataSection(cp) {
        switch (cp) {
          case CODE_POINTS.RIGHT_SQUARE_BRACKET: {
            this.state = State.CDATA_SECTION_BRACKET;
            break;
          }
          case CODE_POINTS.EOF: {
            this._err(ERR.eofInCdata);
            this._emitEOFToken();
            break;
          }
          default: {
            this._emitCodePoint(cp);
          }
        }
      }
      // CDATA section bracket state
      //------------------------------------------------------------------
      _stateCdataSectionBracket(cp) {
        if (cp === CODE_POINTS.RIGHT_SQUARE_BRACKET) {
          this.state = State.CDATA_SECTION_END;
        } else {
          this._emitChars("]");
          this.state = State.CDATA_SECTION;
          this._stateCdataSection(cp);
        }
      }
      // CDATA section end state
      //------------------------------------------------------------------
      _stateCdataSectionEnd(cp) {
        switch (cp) {
          case CODE_POINTS.GREATER_THAN_SIGN: {
            this.state = State.DATA;
            break;
          }
          case CODE_POINTS.RIGHT_SQUARE_BRACKET: {
            this._emitChars("]");
            break;
          }
          default: {
            this._emitChars("]]");
            this.state = State.CDATA_SECTION;
            this._stateCdataSection(cp);
          }
        }
      }
      // Character reference state
      //------------------------------------------------------------------
      _stateCharacterReference() {
        let length = this.entityDecoder.write(this.preprocessor.html, this.preprocessor.pos);
        if (length < 0) {
          if (this.preprocessor.lastChunkWritten) {
            length = this.entityDecoder.end();
          } else {
            this.active = false;
            this.preprocessor.pos = this.preprocessor.html.length - 1;
            this.consumedAfterSnapshot = 0;
            this.preprocessor.endOfChunkHit = true;
            return;
          }
        }
        if (length === 0) {
          this.preprocessor.pos = this.entityStartPos;
          this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.AMPERSAND);
          this.state = !this._isCharacterReferenceInAttribute() && isAsciiAlphaNumeric2(this.preprocessor.peek(1)) ? State.AMBIGUOUS_AMPERSAND : this.returnState;
        } else {
          this.state = this.returnState;
        }
      }
      // Ambiguos ampersand state
      //------------------------------------------------------------------
      _stateAmbiguousAmpersand(cp) {
        if (isAsciiAlphaNumeric2(cp)) {
          this._flushCodePointConsumedAsCharacterReference(cp);
        } else {
          if (cp === CODE_POINTS.SEMICOLON) {
            this._err(ERR.unknownNamedCharacterReference);
          }
          this.state = this.returnState;
          this._callState(cp);
        }
      }
    };
  }
});

// ../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/parser/open-element-stack.js
var IMPLICIT_END_TAG_REQUIRED, IMPLICIT_END_TAG_REQUIRED_THOROUGHLY, SCOPING_ELEMENTS_HTML, SCOPING_ELEMENTS_HTML_LIST, SCOPING_ELEMENTS_HTML_BUTTON, SCOPING_ELEMENTS_MATHML, SCOPING_ELEMENTS_SVG, TABLE_ROW_CONTEXT, TABLE_BODY_CONTEXT, TABLE_CONTEXT, TABLE_CELLS, OpenElementStack;
var init_open_element_stack = __esm({
  "../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/parser/open-element-stack.js"() {
    init_html();
    IMPLICIT_END_TAG_REQUIRED = /* @__PURE__ */ new Set([TAG_ID.DD, TAG_ID.DT, TAG_ID.LI, TAG_ID.OPTGROUP, TAG_ID.OPTION, TAG_ID.P, TAG_ID.RB, TAG_ID.RP, TAG_ID.RT, TAG_ID.RTC]);
    IMPLICIT_END_TAG_REQUIRED_THOROUGHLY = /* @__PURE__ */ new Set([
      ...IMPLICIT_END_TAG_REQUIRED,
      TAG_ID.CAPTION,
      TAG_ID.COLGROUP,
      TAG_ID.TBODY,
      TAG_ID.TD,
      TAG_ID.TFOOT,
      TAG_ID.TH,
      TAG_ID.THEAD,
      TAG_ID.TR
    ]);
    SCOPING_ELEMENTS_HTML = /* @__PURE__ */ new Set([
      TAG_ID.APPLET,
      TAG_ID.CAPTION,
      TAG_ID.HTML,
      TAG_ID.MARQUEE,
      TAG_ID.OBJECT,
      TAG_ID.TABLE,
      TAG_ID.TD,
      TAG_ID.TEMPLATE,
      TAG_ID.TH
    ]);
    SCOPING_ELEMENTS_HTML_LIST = /* @__PURE__ */ new Set([...SCOPING_ELEMENTS_HTML, TAG_ID.OL, TAG_ID.UL]);
    SCOPING_ELEMENTS_HTML_BUTTON = /* @__PURE__ */ new Set([...SCOPING_ELEMENTS_HTML, TAG_ID.BUTTON]);
    SCOPING_ELEMENTS_MATHML = /* @__PURE__ */ new Set([TAG_ID.ANNOTATION_XML, TAG_ID.MI, TAG_ID.MN, TAG_ID.MO, TAG_ID.MS, TAG_ID.MTEXT]);
    SCOPING_ELEMENTS_SVG = /* @__PURE__ */ new Set([TAG_ID.DESC, TAG_ID.FOREIGN_OBJECT, TAG_ID.TITLE]);
    TABLE_ROW_CONTEXT = /* @__PURE__ */ new Set([TAG_ID.TR, TAG_ID.TEMPLATE, TAG_ID.HTML]);
    TABLE_BODY_CONTEXT = /* @__PURE__ */ new Set([TAG_ID.TBODY, TAG_ID.TFOOT, TAG_ID.THEAD, TAG_ID.TEMPLATE, TAG_ID.HTML]);
    TABLE_CONTEXT = /* @__PURE__ */ new Set([TAG_ID.TABLE, TAG_ID.TEMPLATE, TAG_ID.HTML]);
    TABLE_CELLS = /* @__PURE__ */ new Set([TAG_ID.TD, TAG_ID.TH]);
    OpenElementStack = class {
      get currentTmplContentOrNode() {
        return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
      }
      constructor(document2, treeAdapter, handler) {
        this.treeAdapter = treeAdapter;
        this.handler = handler;
        this.items = [];
        this.tagIDs = [];
        this.stackTop = -1;
        this.tmplCount = 0;
        this.currentTagId = TAG_ID.UNKNOWN;
        this.current = document2;
      }
      //Index of element
      _indexOf(element) {
        return this.items.lastIndexOf(element, this.stackTop);
      }
      //Update current element
      _isInTemplate() {
        return this.currentTagId === TAG_ID.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === NS.HTML;
      }
      _updateCurrentElement() {
        this.current = this.items[this.stackTop];
        this.currentTagId = this.tagIDs[this.stackTop];
      }
      //Mutations
      push(element, tagID) {
        this.stackTop++;
        this.items[this.stackTop] = element;
        this.current = element;
        this.tagIDs[this.stackTop] = tagID;
        this.currentTagId = tagID;
        if (this._isInTemplate()) {
          this.tmplCount++;
        }
        this.handler.onItemPush(element, tagID, true);
      }
      pop() {
        const popped = this.current;
        if (this.tmplCount > 0 && this._isInTemplate()) {
          this.tmplCount--;
        }
        this.stackTop--;
        this._updateCurrentElement();
        this.handler.onItemPop(popped, true);
      }
      replace(oldElement, newElement) {
        const idx = this._indexOf(oldElement);
        this.items[idx] = newElement;
        if (idx === this.stackTop) {
          this.current = newElement;
        }
      }
      insertAfter(referenceElement, newElement, newElementID) {
        const insertionIdx = this._indexOf(referenceElement) + 1;
        this.items.splice(insertionIdx, 0, newElement);
        this.tagIDs.splice(insertionIdx, 0, newElementID);
        this.stackTop++;
        if (insertionIdx === this.stackTop) {
          this._updateCurrentElement();
        }
        if (this.current && this.currentTagId !== void 0) {
          this.handler.onItemPush(this.current, this.currentTagId, insertionIdx === this.stackTop);
        }
      }
      popUntilTagNamePopped(tagName) {
        let targetIdx = this.stackTop + 1;
        do {
          targetIdx = this.tagIDs.lastIndexOf(tagName, targetIdx - 1);
        } while (targetIdx > 0 && this.treeAdapter.getNamespaceURI(this.items[targetIdx]) !== NS.HTML);
        this.shortenToLength(Math.max(targetIdx, 0));
      }
      shortenToLength(idx) {
        while (this.stackTop >= idx) {
          const popped = this.current;
          if (this.tmplCount > 0 && this._isInTemplate()) {
            this.tmplCount -= 1;
          }
          this.stackTop--;
          this._updateCurrentElement();
          this.handler.onItemPop(popped, this.stackTop < idx);
        }
      }
      popUntilElementPopped(element) {
        const idx = this._indexOf(element);
        this.shortenToLength(Math.max(idx, 0));
      }
      popUntilPopped(tagNames, targetNS) {
        const idx = this._indexOfTagNames(tagNames, targetNS);
        this.shortenToLength(Math.max(idx, 0));
      }
      popUntilNumberedHeaderPopped() {
        this.popUntilPopped(NUMBERED_HEADERS, NS.HTML);
      }
      popUntilTableCellPopped() {
        this.popUntilPopped(TABLE_CELLS, NS.HTML);
      }
      popAllUpToHtmlElement() {
        this.tmplCount = 0;
        this.shortenToLength(1);
      }
      _indexOfTagNames(tagNames, namespace) {
        for (let i = this.stackTop; i >= 0; i--) {
          if (tagNames.has(this.tagIDs[i]) && this.treeAdapter.getNamespaceURI(this.items[i]) === namespace) {
            return i;
          }
        }
        return -1;
      }
      clearBackTo(tagNames, targetNS) {
        const idx = this._indexOfTagNames(tagNames, targetNS);
        this.shortenToLength(idx + 1);
      }
      clearBackToTableContext() {
        this.clearBackTo(TABLE_CONTEXT, NS.HTML);
      }
      clearBackToTableBodyContext() {
        this.clearBackTo(TABLE_BODY_CONTEXT, NS.HTML);
      }
      clearBackToTableRowContext() {
        this.clearBackTo(TABLE_ROW_CONTEXT, NS.HTML);
      }
      remove(element) {
        const idx = this._indexOf(element);
        if (idx >= 0) {
          if (idx === this.stackTop) {
            this.pop();
          } else {
            this.items.splice(idx, 1);
            this.tagIDs.splice(idx, 1);
            this.stackTop--;
            this._updateCurrentElement();
            this.handler.onItemPop(element, false);
          }
        }
      }
      //Search
      tryPeekProperlyNestedBodyElement() {
        return this.stackTop >= 1 && this.tagIDs[1] === TAG_ID.BODY ? this.items[1] : null;
      }
      contains(element) {
        return this._indexOf(element) > -1;
      }
      getCommonAncestor(element) {
        const elementIdx = this._indexOf(element) - 1;
        return elementIdx >= 0 ? this.items[elementIdx] : null;
      }
      isRootHtmlElementCurrent() {
        return this.stackTop === 0 && this.tagIDs[0] === TAG_ID.HTML;
      }
      //Element in scope
      hasInDynamicScope(tagName, htmlScope) {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.tagIDs[i];
          switch (this.treeAdapter.getNamespaceURI(this.items[i])) {
            case NS.HTML: {
              if (tn === tagName)
                return true;
              if (htmlScope.has(tn))
                return false;
              break;
            }
            case NS.SVG: {
              if (SCOPING_ELEMENTS_SVG.has(tn))
                return false;
              break;
            }
            case NS.MATHML: {
              if (SCOPING_ELEMENTS_MATHML.has(tn))
                return false;
              break;
            }
          }
        }
        return true;
      }
      hasInScope(tagName) {
        return this.hasInDynamicScope(tagName, SCOPING_ELEMENTS_HTML);
      }
      hasInListItemScope(tagName) {
        return this.hasInDynamicScope(tagName, SCOPING_ELEMENTS_HTML_LIST);
      }
      hasInButtonScope(tagName) {
        return this.hasInDynamicScope(tagName, SCOPING_ELEMENTS_HTML_BUTTON);
      }
      hasNumberedHeaderInScope() {
        for (let i = this.stackTop; i >= 0; i--) {
          const tn = this.tagIDs[i];
          switch (this.treeAdapter.getNamespaceURI(this.items[i])) {
            case NS.HTML: {
              if (NUMBERED_HEADERS.has(tn))
                return true;
              if (SCOPING_ELEMENTS_HTML.has(tn))
                return false;
              break;
            }
            case NS.SVG: {
              if (SCOPING_ELEMENTS_SVG.has(tn))
                return false;
              break;
            }
            case NS.MATHML: {
              if (SCOPING_ELEMENTS_MATHML.has(tn))
                return false;
              break;
            }
          }
        }
        return true;
      }
      hasInTableScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          if (this.treeAdapter.getNamespaceURI(this.items[i]) !== NS.HTML) {
            continue;
          }
          switch (this.tagIDs[i]) {
            case tagName: {
              return true;
            }
            case TAG_ID.TABLE:
            case TAG_ID.HTML: {
              return false;
            }
          }
        }
        return true;
      }
      hasTableBodyContextInTableScope() {
        for (let i = this.stackTop; i >= 0; i--) {
          if (this.treeAdapter.getNamespaceURI(this.items[i]) !== NS.HTML) {
            continue;
          }
          switch (this.tagIDs[i]) {
            case TAG_ID.TBODY:
            case TAG_ID.THEAD:
            case TAG_ID.TFOOT: {
              return true;
            }
            case TAG_ID.TABLE:
            case TAG_ID.HTML: {
              return false;
            }
          }
        }
        return true;
      }
      hasInSelectScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
          if (this.treeAdapter.getNamespaceURI(this.items[i]) !== NS.HTML) {
            continue;
          }
          switch (this.tagIDs[i]) {
            case tagName: {
              return true;
            }
            case TAG_ID.OPTION:
            case TAG_ID.OPTGROUP: {
              break;
            }
            default: {
              return false;
            }
          }
        }
        return true;
      }
      //Implied end tags
      generateImpliedEndTags() {
        while (this.currentTagId !== void 0 && IMPLICIT_END_TAG_REQUIRED.has(this.currentTagId)) {
          this.pop();
        }
      }
      generateImpliedEndTagsThoroughly() {
        while (this.currentTagId !== void 0 && IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) {
          this.pop();
        }
      }
      generateImpliedEndTagsWithExclusion(exclusionId) {
        while (this.currentTagId !== void 0 && this.currentTagId !== exclusionId && IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) {
          this.pop();
        }
      }
    };
  }
});

// ../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/parser/formatting-element-list.js
var NOAH_ARK_CAPACITY, EntryType, MARKER, FormattingElementList;
var init_formatting_element_list = __esm({
  "../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/parser/formatting-element-list.js"() {
    NOAH_ARK_CAPACITY = 3;
    (function(EntryType2) {
      EntryType2[EntryType2["Marker"] = 0] = "Marker";
      EntryType2[EntryType2["Element"] = 1] = "Element";
    })(EntryType || (EntryType = {}));
    MARKER = { type: EntryType.Marker };
    FormattingElementList = class {
      constructor(treeAdapter) {
        this.treeAdapter = treeAdapter;
        this.entries = [];
        this.bookmark = null;
      }
      //Noah Ark's condition
      //OPTIMIZATION: at first we try to find possible candidates for exclusion using
      //lightweight heuristics without thorough attributes check.
      _getNoahArkConditionCandidates(newElement, neAttrs) {
        const candidates = [];
        const neAttrsLength = neAttrs.length;
        const neTagName = this.treeAdapter.getTagName(newElement);
        const neNamespaceURI = this.treeAdapter.getNamespaceURI(newElement);
        for (let i = 0; i < this.entries.length; i++) {
          const entry = this.entries[i];
          if (entry.type === EntryType.Marker) {
            break;
          }
          const { element } = entry;
          if (this.treeAdapter.getTagName(element) === neTagName && this.treeAdapter.getNamespaceURI(element) === neNamespaceURI) {
            const elementAttrs = this.treeAdapter.getAttrList(element);
            if (elementAttrs.length === neAttrsLength) {
              candidates.push({ idx: i, attrs: elementAttrs });
            }
          }
        }
        return candidates;
      }
      _ensureNoahArkCondition(newElement) {
        if (this.entries.length < NOAH_ARK_CAPACITY)
          return;
        const neAttrs = this.treeAdapter.getAttrList(newElement);
        const candidates = this._getNoahArkConditionCandidates(newElement, neAttrs);
        if (candidates.length < NOAH_ARK_CAPACITY)
          return;
        const neAttrsMap = new Map(neAttrs.map((neAttr) => [neAttr.name, neAttr.value]));
        let validCandidates = 0;
        for (let i = 0; i < candidates.length; i++) {
          const candidate = candidates[i];
          if (candidate.attrs.every((cAttr) => neAttrsMap.get(cAttr.name) === cAttr.value)) {
            validCandidates += 1;
            if (validCandidates >= NOAH_ARK_CAPACITY) {
              this.entries.splice(candidate.idx, 1);
            }
          }
        }
      }
      //Mutations
      insertMarker() {
        this.entries.unshift(MARKER);
      }
      pushElement(element, token) {
        this._ensureNoahArkCondition(element);
        this.entries.unshift({
          type: EntryType.Element,
          element,
          token
        });
      }
      insertElementAfterBookmark(element, token) {
        const bookmarkIdx = this.entries.indexOf(this.bookmark);
        this.entries.splice(bookmarkIdx, 0, {
          type: EntryType.Element,
          element,
          token
        });
      }
      removeEntry(entry) {
        const entryIndex = this.entries.indexOf(entry);
        if (entryIndex !== -1) {
          this.entries.splice(entryIndex, 1);
        }
      }
      /**
       * Clears the list of formatting elements up to the last marker.
       *
       * @see https://html.spec.whatwg.org/multipage/parsing.html#clear-the-list-of-active-formatting-elements-up-to-the-last-marker
       */
      clearToLastMarker() {
        const markerIdx = this.entries.indexOf(MARKER);
        if (markerIdx === -1) {
          this.entries.length = 0;
        } else {
          this.entries.splice(0, markerIdx + 1);
        }
      }
      //Search
      getElementEntryInScopeWithTagName(tagName) {
        const entry = this.entries.find((entry2) => entry2.type === EntryType.Marker || this.treeAdapter.getTagName(entry2.element) === tagName);
        return entry && entry.type === EntryType.Element ? entry : null;
      }
      getElementEntry(element) {
        return this.entries.find((entry) => entry.type === EntryType.Element && entry.element === element);
      }
    };
  }
});

// ../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/tree-adapters/default.js
var defaultTreeAdapter;
var init_default = __esm({
  "../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/tree-adapters/default.js"() {
    init_html();
    defaultTreeAdapter = {
      //Node construction
      createDocument() {
        return {
          nodeName: "#document",
          mode: DOCUMENT_MODE.NO_QUIRKS,
          childNodes: []
        };
      },
      createDocumentFragment() {
        return {
          nodeName: "#document-fragment",
          childNodes: []
        };
      },
      createElement(tagName, namespaceURI, attrs) {
        return {
          nodeName: tagName,
          tagName,
          attrs,
          namespaceURI,
          childNodes: [],
          parentNode: null
        };
      },
      createCommentNode(data) {
        return {
          nodeName: "#comment",
          data,
          parentNode: null
        };
      },
      createTextNode(value2) {
        return {
          nodeName: "#text",
          value: value2,
          parentNode: null
        };
      },
      //Tree mutation
      appendChild(parentNode, newNode) {
        parentNode.childNodes.push(newNode);
        newNode.parentNode = parentNode;
      },
      insertBefore(parentNode, newNode, referenceNode) {
        const insertionIdx = parentNode.childNodes.indexOf(referenceNode);
        parentNode.childNodes.splice(insertionIdx, 0, newNode);
        newNode.parentNode = parentNode;
      },
      setTemplateContent(templateElement, contentElement) {
        templateElement.content = contentElement;
      },
      getTemplateContent(templateElement) {
        return templateElement.content;
      },
      setDocumentType(document2, name, publicId, systemId) {
        const doctypeNode = document2.childNodes.find((node) => node.nodeName === "#documentType");
        if (doctypeNode) {
          doctypeNode.name = name;
          doctypeNode.publicId = publicId;
          doctypeNode.systemId = systemId;
        } else {
          const node = {
            nodeName: "#documentType",
            name,
            publicId,
            systemId,
            parentNode: null
          };
          defaultTreeAdapter.appendChild(document2, node);
        }
      },
      setDocumentMode(document2, mode) {
        document2.mode = mode;
      },
      getDocumentMode(document2) {
        return document2.mode;
      },
      detachNode(node) {
        if (node.parentNode) {
          const idx = node.parentNode.childNodes.indexOf(node);
          node.parentNode.childNodes.splice(idx, 1);
          node.parentNode = null;
        }
      },
      insertText(parentNode, text) {
        if (parentNode.childNodes.length > 0) {
          const prevNode = parentNode.childNodes[parentNode.childNodes.length - 1];
          if (defaultTreeAdapter.isTextNode(prevNode)) {
            prevNode.value += text;
            return;
          }
        }
        defaultTreeAdapter.appendChild(parentNode, defaultTreeAdapter.createTextNode(text));
      },
      insertTextBefore(parentNode, text, referenceNode) {
        const prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];
        if (prevNode && defaultTreeAdapter.isTextNode(prevNode)) {
          prevNode.value += text;
        } else {
          defaultTreeAdapter.insertBefore(parentNode, defaultTreeAdapter.createTextNode(text), referenceNode);
        }
      },
      adoptAttributes(recipient, attrs) {
        const recipientAttrsMap = new Set(recipient.attrs.map((attr) => attr.name));
        for (let j = 0; j < attrs.length; j++) {
          if (!recipientAttrsMap.has(attrs[j].name)) {
            recipient.attrs.push(attrs[j]);
          }
        }
      },
      //Tree traversing
      getFirstChild(node) {
        return node.childNodes[0];
      },
      getChildNodes(node) {
        return node.childNodes;
      },
      getParentNode(node) {
        return node.parentNode;
      },
      getAttrList(element) {
        return element.attrs;
      },
      //Node data
      getTagName(element) {
        return element.tagName;
      },
      getNamespaceURI(element) {
        return element.namespaceURI;
      },
      getTextNodeContent(textNode) {
        return textNode.value;
      },
      getCommentNodeContent(commentNode) {
        return commentNode.data;
      },
      getDocumentTypeNodeName(doctypeNode) {
        return doctypeNode.name;
      },
      getDocumentTypeNodePublicId(doctypeNode) {
        return doctypeNode.publicId;
      },
      getDocumentTypeNodeSystemId(doctypeNode) {
        return doctypeNode.systemId;
      },
      //Node types
      isTextNode(node) {
        return node.nodeName === "#text";
      },
      isCommentNode(node) {
        return node.nodeName === "#comment";
      },
      isDocumentTypeNode(node) {
        return node.nodeName === "#documentType";
      },
      isElementNode(node) {
        return Object.prototype.hasOwnProperty.call(node, "tagName");
      },
      // Source code location
      setNodeSourceCodeLocation(node, location2) {
        node.sourceCodeLocation = location2;
      },
      getNodeSourceCodeLocation(node) {
        return node.sourceCodeLocation;
      },
      updateNodeSourceCodeLocation(node, endLocation) {
        node.sourceCodeLocation = { ...node.sourceCodeLocation, ...endLocation };
      }
    };
  }
});

// ../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/common/doctype.js
function hasPrefix(publicId, prefixes) {
  return prefixes.some((prefix) => publicId.startsWith(prefix));
}
function isConforming(token) {
  return token.name === VALID_DOCTYPE_NAME && token.publicId === null && (token.systemId === null || token.systemId === VALID_SYSTEM_ID);
}
function getDocumentMode(token) {
  if (token.name !== VALID_DOCTYPE_NAME) {
    return DOCUMENT_MODE.QUIRKS;
  }
  const { systemId } = token;
  if (systemId && systemId.toLowerCase() === QUIRKS_MODE_SYSTEM_ID) {
    return DOCUMENT_MODE.QUIRKS;
  }
  let { publicId } = token;
  if (publicId !== null) {
    publicId = publicId.toLowerCase();
    if (QUIRKS_MODE_PUBLIC_IDS.has(publicId)) {
      return DOCUMENT_MODE.QUIRKS;
    }
    let prefixes = systemId === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;
    if (hasPrefix(publicId, prefixes)) {
      return DOCUMENT_MODE.QUIRKS;
    }
    prefixes = systemId === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES;
    if (hasPrefix(publicId, prefixes)) {
      return DOCUMENT_MODE.LIMITED_QUIRKS;
    }
  }
  return DOCUMENT_MODE.NO_QUIRKS;
}
var VALID_DOCTYPE_NAME, VALID_SYSTEM_ID, QUIRKS_MODE_SYSTEM_ID, QUIRKS_MODE_PUBLIC_ID_PREFIXES, QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES, QUIRKS_MODE_PUBLIC_IDS, LIMITED_QUIRKS_PUBLIC_ID_PREFIXES, LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES;
var init_doctype = __esm({
  "../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/common/doctype.js"() {
    init_html();
    VALID_DOCTYPE_NAME = "html";
    VALID_SYSTEM_ID = "about:legacy-compat";
    QUIRKS_MODE_SYSTEM_ID = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd";
    QUIRKS_MODE_PUBLIC_ID_PREFIXES = [
      "+//silmaril//dtd html pro v0r11 19970101//",
      "-//as//dtd html 3.0 aswedit + extensions//",
      "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
      "-//ietf//dtd html 2.0 level 1//",
      "-//ietf//dtd html 2.0 level 2//",
      "-//ietf//dtd html 2.0 strict level 1//",
      "-//ietf//dtd html 2.0 strict level 2//",
      "-//ietf//dtd html 2.0 strict//",
      "-//ietf//dtd html 2.0//",
      "-//ietf//dtd html 2.1e//",
      "-//ietf//dtd html 3.0//",
      "-//ietf//dtd html 3.2 final//",
      "-//ietf//dtd html 3.2//",
      "-//ietf//dtd html 3//",
      "-//ietf//dtd html level 0//",
      "-//ietf//dtd html level 1//",
      "-//ietf//dtd html level 2//",
      "-//ietf//dtd html level 3//",
      "-//ietf//dtd html strict level 0//",
      "-//ietf//dtd html strict level 1//",
      "-//ietf//dtd html strict level 2//",
      "-//ietf//dtd html strict level 3//",
      "-//ietf//dtd html strict//",
      "-//ietf//dtd html//",
      "-//metrius//dtd metrius presentational//",
      "-//microsoft//dtd internet explorer 2.0 html strict//",
      "-//microsoft//dtd internet explorer 2.0 html//",
      "-//microsoft//dtd internet explorer 2.0 tables//",
      "-//microsoft//dtd internet explorer 3.0 html strict//",
      "-//microsoft//dtd internet explorer 3.0 html//",
      "-//microsoft//dtd internet explorer 3.0 tables//",
      "-//netscape comm. corp.//dtd html//",
      "-//netscape comm. corp.//dtd strict html//",
      "-//o'reilly and associates//dtd html 2.0//",
      "-//o'reilly and associates//dtd html extended 1.0//",
      "-//o'reilly and associates//dtd html extended relaxed 1.0//",
      "-//sq//dtd html 2.0 hotmetal + extensions//",
      "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
      "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
      "-//spyglass//dtd html 2.0 extended//",
      "-//sun microsystems corp.//dtd hotjava html//",
      "-//sun microsystems corp.//dtd hotjava strict html//",
      "-//w3c//dtd html 3 1995-03-24//",
      "-//w3c//dtd html 3.2 draft//",
      "-//w3c//dtd html 3.2 final//",
      "-//w3c//dtd html 3.2//",
      "-//w3c//dtd html 3.2s draft//",
      "-//w3c//dtd html 4.0 frameset//",
      "-//w3c//dtd html 4.0 transitional//",
      "-//w3c//dtd html experimental 19960712//",
      "-//w3c//dtd html experimental 970421//",
      "-//w3c//dtd w3 html//",
      "-//w3o//dtd w3 html 3.0//",
      "-//webtechs//dtd mozilla html 2.0//",
      "-//webtechs//dtd mozilla html//"
    ];
    QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
      ...QUIRKS_MODE_PUBLIC_ID_PREFIXES,
      "-//w3c//dtd html 4.01 frameset//",
      "-//w3c//dtd html 4.01 transitional//"
    ];
    QUIRKS_MODE_PUBLIC_IDS = /* @__PURE__ */ new Set([
      "-//w3o//dtd w3 html strict 3.0//en//",
      "-/w3c/dtd html 4.0 transitional/en",
      "html"
    ]);
    LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"];
    LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
      ...LIMITED_QUIRKS_PUBLIC_ID_PREFIXES,
      "-//w3c//dtd html 4.01 frameset//",
      "-//w3c//dtd html 4.01 transitional//"
    ];
  }
});

// ../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/common/foreign-content.js
function causesExit(startTagToken) {
  const tn = startTagToken.tagID;
  const isFontWithAttrs = tn === TAG_ID.FONT && startTagToken.attrs.some(({ name }) => name === ATTRS.COLOR || name === ATTRS.SIZE || name === ATTRS.FACE);
  return isFontWithAttrs || EXITS_FOREIGN_CONTENT.has(tn);
}
function adjustTokenMathMLAttrs(token) {
  for (let i = 0; i < token.attrs.length; i++) {
    if (token.attrs[i].name === DEFINITION_URL_ATTR) {
      token.attrs[i].name = ADJUSTED_DEFINITION_URL_ATTR;
      break;
    }
  }
}
function adjustTokenSVGAttrs(token) {
  for (let i = 0; i < token.attrs.length; i++) {
    const adjustedAttrName = SVG_ATTRS_ADJUSTMENT_MAP.get(token.attrs[i].name);
    if (adjustedAttrName != null) {
      token.attrs[i].name = adjustedAttrName;
    }
  }
}
function adjustTokenXMLAttrs(token) {
  for (let i = 0; i < token.attrs.length; i++) {
    const adjustedAttrEntry = XML_ATTRS_ADJUSTMENT_MAP.get(token.attrs[i].name);
    if (adjustedAttrEntry) {
      token.attrs[i].prefix = adjustedAttrEntry.prefix;
      token.attrs[i].name = adjustedAttrEntry.name;
      token.attrs[i].namespace = adjustedAttrEntry.namespace;
    }
  }
}
function adjustTokenSVGTagName(token) {
  const adjustedTagName = SVG_TAG_NAMES_ADJUSTMENT_MAP.get(token.tagName);
  if (adjustedTagName != null) {
    token.tagName = adjustedTagName;
    token.tagID = getTagID(token.tagName);
  }
}
function isMathMLTextIntegrationPoint(tn, ns) {
  return ns === NS.MATHML && (tn === TAG_ID.MI || tn === TAG_ID.MO || tn === TAG_ID.MN || tn === TAG_ID.MS || tn === TAG_ID.MTEXT);
}
function isHtmlIntegrationPoint(tn, ns, attrs) {
  if (ns === NS.MATHML && tn === TAG_ID.ANNOTATION_XML) {
    for (let i = 0; i < attrs.length; i++) {
      if (attrs[i].name === ATTRS.ENCODING) {
        const value2 = attrs[i].value.toLowerCase();
        return value2 === MIME_TYPES.TEXT_HTML || value2 === MIME_TYPES.APPLICATION_XML;
      }
    }
  }
  return ns === NS.SVG && (tn === TAG_ID.FOREIGN_OBJECT || tn === TAG_ID.DESC || tn === TAG_ID.TITLE);
}
function isIntegrationPoint(tn, ns, attrs, foreignNS) {
  return (!foreignNS || foreignNS === NS.HTML) && isHtmlIntegrationPoint(tn, ns, attrs) || (!foreignNS || foreignNS === NS.MATHML) && isMathMLTextIntegrationPoint(tn, ns);
}
var MIME_TYPES, DEFINITION_URL_ATTR, ADJUSTED_DEFINITION_URL_ATTR, SVG_ATTRS_ADJUSTMENT_MAP, XML_ATTRS_ADJUSTMENT_MAP, SVG_TAG_NAMES_ADJUSTMENT_MAP, EXITS_FOREIGN_CONTENT;
var init_foreign_content = __esm({
  "../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/common/foreign-content.js"() {
    init_html();
    MIME_TYPES = {
      TEXT_HTML: "text/html",
      APPLICATION_XML: "application/xhtml+xml"
    };
    DEFINITION_URL_ATTR = "definitionurl";
    ADJUSTED_DEFINITION_URL_ATTR = "definitionURL";
    SVG_ATTRS_ADJUSTMENT_MAP = new Map([
      "attributeName",
      "attributeType",
      "baseFrequency",
      "baseProfile",
      "calcMode",
      "clipPathUnits",
      "diffuseConstant",
      "edgeMode",
      "filterUnits",
      "glyphRef",
      "gradientTransform",
      "gradientUnits",
      "kernelMatrix",
      "kernelUnitLength",
      "keyPoints",
      "keySplines",
      "keyTimes",
      "lengthAdjust",
      "limitingConeAngle",
      "markerHeight",
      "markerUnits",
      "markerWidth",
      "maskContentUnits",
      "maskUnits",
      "numOctaves",
      "pathLength",
      "patternContentUnits",
      "patternTransform",
      "patternUnits",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "preserveAlpha",
      "preserveAspectRatio",
      "primitiveUnits",
      "refX",
      "refY",
      "repeatCount",
      "repeatDur",
      "requiredExtensions",
      "requiredFeatures",
      "specularConstant",
      "specularExponent",
      "spreadMethod",
      "startOffset",
      "stdDeviation",
      "stitchTiles",
      "surfaceScale",
      "systemLanguage",
      "tableValues",
      "targetX",
      "targetY",
      "textLength",
      "viewBox",
      "viewTarget",
      "xChannelSelector",
      "yChannelSelector",
      "zoomAndPan"
    ].map((attr) => [attr.toLowerCase(), attr]));
    XML_ATTRS_ADJUSTMENT_MAP = /* @__PURE__ */ new Map([
      ["xlink:actuate", { prefix: "xlink", name: "actuate", namespace: NS.XLINK }],
      ["xlink:arcrole", { prefix: "xlink", name: "arcrole", namespace: NS.XLINK }],
      ["xlink:href", { prefix: "xlink", name: "href", namespace: NS.XLINK }],
      ["xlink:role", { prefix: "xlink", name: "role", namespace: NS.XLINK }],
      ["xlink:show", { prefix: "xlink", name: "show", namespace: NS.XLINK }],
      ["xlink:title", { prefix: "xlink", name: "title", namespace: NS.XLINK }],
      ["xlink:type", { prefix: "xlink", name: "type", namespace: NS.XLINK }],
      ["xml:lang", { prefix: "xml", name: "lang", namespace: NS.XML }],
      ["xml:space", { prefix: "xml", name: "space", namespace: NS.XML }],
      ["xmlns", { prefix: "", name: "xmlns", namespace: NS.XMLNS }],
      ["xmlns:xlink", { prefix: "xmlns", name: "xlink", namespace: NS.XMLNS }]
    ]);
    SVG_TAG_NAMES_ADJUSTMENT_MAP = new Map([
      "altGlyph",
      "altGlyphDef",
      "altGlyphItem",
      "animateColor",
      "animateMotion",
      "animateTransform",
      "clipPath",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "foreignObject",
      "glyphRef",
      "linearGradient",
      "radialGradient",
      "textPath"
    ].map((tn) => [tn.toLowerCase(), tn]));
    EXITS_FOREIGN_CONTENT = /* @__PURE__ */ new Set([
      TAG_ID.B,
      TAG_ID.BIG,
      TAG_ID.BLOCKQUOTE,
      TAG_ID.BODY,
      TAG_ID.BR,
      TAG_ID.CENTER,
      TAG_ID.CODE,
      TAG_ID.DD,
      TAG_ID.DIV,
      TAG_ID.DL,
      TAG_ID.DT,
      TAG_ID.EM,
      TAG_ID.EMBED,
      TAG_ID.H1,
      TAG_ID.H2,
      TAG_ID.H3,
      TAG_ID.H4,
      TAG_ID.H5,
      TAG_ID.H6,
      TAG_ID.HEAD,
      TAG_ID.HR,
      TAG_ID.I,
      TAG_ID.IMG,
      TAG_ID.LI,
      TAG_ID.LISTING,
      TAG_ID.MENU,
      TAG_ID.META,
      TAG_ID.NOBR,
      TAG_ID.OL,
      TAG_ID.P,
      TAG_ID.PRE,
      TAG_ID.RUBY,
      TAG_ID.S,
      TAG_ID.SMALL,
      TAG_ID.SPAN,
      TAG_ID.STRONG,
      TAG_ID.STRIKE,
      TAG_ID.SUB,
      TAG_ID.SUP,
      TAG_ID.TABLE,
      TAG_ID.TT,
      TAG_ID.U,
      TAG_ID.UL,
      TAG_ID.VAR
    ]);
  }
});

// ../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/parser/index.js
function aaObtainFormattingElementEntry(p, token) {
  let formattingElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(token.tagName);
  if (formattingElementEntry) {
    if (!p.openElements.contains(formattingElementEntry.element)) {
      p.activeFormattingElements.removeEntry(formattingElementEntry);
      formattingElementEntry = null;
    } else if (!p.openElements.hasInScope(token.tagID)) {
      formattingElementEntry = null;
    }
  } else {
    genericEndTagInBody(p, token);
  }
  return formattingElementEntry;
}
function aaObtainFurthestBlock(p, formattingElementEntry) {
  let furthestBlock = null;
  let idx = p.openElements.stackTop;
  for (; idx >= 0; idx--) {
    const element = p.openElements.items[idx];
    if (element === formattingElementEntry.element) {
      break;
    }
    if (p._isSpecialElement(element, p.openElements.tagIDs[idx])) {
      furthestBlock = element;
    }
  }
  if (!furthestBlock) {
    p.openElements.shortenToLength(Math.max(idx, 0));
    p.activeFormattingElements.removeEntry(formattingElementEntry);
  }
  return furthestBlock;
}
function aaInnerLoop(p, furthestBlock, formattingElement) {
  let lastElement = furthestBlock;
  let nextElement = p.openElements.getCommonAncestor(furthestBlock);
  for (let i = 0, element = nextElement; element !== formattingElement; i++, element = nextElement) {
    nextElement = p.openElements.getCommonAncestor(element);
    const elementEntry = p.activeFormattingElements.getElementEntry(element);
    const counterOverflow = elementEntry && i >= AA_INNER_LOOP_ITER;
    const shouldRemoveFromOpenElements = !elementEntry || counterOverflow;
    if (shouldRemoveFromOpenElements) {
      if (counterOverflow) {
        p.activeFormattingElements.removeEntry(elementEntry);
      }
      p.openElements.remove(element);
    } else {
      element = aaRecreateElementFromEntry(p, elementEntry);
      if (lastElement === furthestBlock) {
        p.activeFormattingElements.bookmark = elementEntry;
      }
      p.treeAdapter.detachNode(lastElement);
      p.treeAdapter.appendChild(element, lastElement);
      lastElement = element;
    }
  }
  return lastElement;
}
function aaRecreateElementFromEntry(p, elementEntry) {
  const ns = p.treeAdapter.getNamespaceURI(elementEntry.element);
  const newElement = p.treeAdapter.createElement(elementEntry.token.tagName, ns, elementEntry.token.attrs);
  p.openElements.replace(elementEntry.element, newElement);
  elementEntry.element = newElement;
  return newElement;
}
function aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement) {
  const tn = p.treeAdapter.getTagName(commonAncestor);
  const tid = getTagID(tn);
  if (p._isElementCausesFosterParenting(tid)) {
    p._fosterParentElement(lastElement);
  } else {
    const ns = p.treeAdapter.getNamespaceURI(commonAncestor);
    if (tid === TAG_ID.TEMPLATE && ns === NS.HTML) {
      commonAncestor = p.treeAdapter.getTemplateContent(commonAncestor);
    }
    p.treeAdapter.appendChild(commonAncestor, lastElement);
  }
}
function aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry) {
  const ns = p.treeAdapter.getNamespaceURI(formattingElementEntry.element);
  const { token } = formattingElementEntry;
  const newElement = p.treeAdapter.createElement(token.tagName, ns, token.attrs);
  p._adoptNodes(furthestBlock, newElement);
  p.treeAdapter.appendChild(furthestBlock, newElement);
  p.activeFormattingElements.insertElementAfterBookmark(newElement, token);
  p.activeFormattingElements.removeEntry(formattingElementEntry);
  p.openElements.remove(formattingElementEntry.element);
  p.openElements.insertAfter(furthestBlock, newElement, token.tagID);
}
function callAdoptionAgency(p, token) {
  for (let i = 0; i < AA_OUTER_LOOP_ITER; i++) {
    const formattingElementEntry = aaObtainFormattingElementEntry(p, token);
    if (!formattingElementEntry) {
      break;
    }
    const furthestBlock = aaObtainFurthestBlock(p, formattingElementEntry);
    if (!furthestBlock) {
      break;
    }
    p.activeFormattingElements.bookmark = formattingElementEntry;
    const lastElement = aaInnerLoop(p, furthestBlock, formattingElementEntry.element);
    const commonAncestor = p.openElements.getCommonAncestor(formattingElementEntry.element);
    p.treeAdapter.detachNode(lastElement);
    if (commonAncestor)
      aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement);
    aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry);
  }
}
function appendComment(p, token) {
  p._appendCommentNode(token, p.openElements.currentTmplContentOrNode);
}
function appendCommentToRootHtmlElement(p, token) {
  p._appendCommentNode(token, p.openElements.items[0]);
}
function appendCommentToDocument(p, token) {
  p._appendCommentNode(token, p.document);
}
function stopParsing(p, token) {
  p.stopped = true;
  if (token.location) {
    const target = p.fragmentContext ? 0 : 2;
    for (let i = p.openElements.stackTop; i >= target; i--) {
      p._setEndLocation(p.openElements.items[i], token);
    }
    if (!p.fragmentContext && p.openElements.stackTop >= 0) {
      const htmlElement = p.openElements.items[0];
      const htmlLocation = p.treeAdapter.getNodeSourceCodeLocation(htmlElement);
      if (htmlLocation && !htmlLocation.endTag) {
        p._setEndLocation(htmlElement, token);
        if (p.openElements.stackTop >= 1) {
          const bodyElement = p.openElements.items[1];
          const bodyLocation = p.treeAdapter.getNodeSourceCodeLocation(bodyElement);
          if (bodyLocation && !bodyLocation.endTag) {
            p._setEndLocation(bodyElement, token);
          }
        }
      }
    }
  }
}
function doctypeInInitialMode(p, token) {
  p._setDocumentType(token);
  const mode = token.forceQuirks ? DOCUMENT_MODE.QUIRKS : getDocumentMode(token);
  if (!isConforming(token)) {
    p._err(token, ERR.nonConformingDoctype);
  }
  p.treeAdapter.setDocumentMode(p.document, mode);
  p.insertionMode = InsertionMode.BEFORE_HTML;
}
function tokenInInitialMode(p, token) {
  p._err(token, ERR.missingDoctype, true);
  p.treeAdapter.setDocumentMode(p.document, DOCUMENT_MODE.QUIRKS);
  p.insertionMode = InsertionMode.BEFORE_HTML;
  p._processToken(token);
}
function startTagBeforeHtml(p, token) {
  if (token.tagID === TAG_ID.HTML) {
    p._insertElement(token, NS.HTML);
    p.insertionMode = InsertionMode.BEFORE_HEAD;
  } else {
    tokenBeforeHtml(p, token);
  }
}
function endTagBeforeHtml(p, token) {
  const tn = token.tagID;
  if (tn === TAG_ID.HTML || tn === TAG_ID.HEAD || tn === TAG_ID.BODY || tn === TAG_ID.BR) {
    tokenBeforeHtml(p, token);
  }
}
function tokenBeforeHtml(p, token) {
  p._insertFakeRootElement();
  p.insertionMode = InsertionMode.BEFORE_HEAD;
  p._processToken(token);
}
function startTagBeforeHead(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.HEAD: {
      p._insertElement(token, NS.HTML);
      p.headElement = p.openElements.current;
      p.insertionMode = InsertionMode.IN_HEAD;
      break;
    }
    default: {
      tokenBeforeHead(p, token);
    }
  }
}
function endTagBeforeHead(p, token) {
  const tn = token.tagID;
  if (tn === TAG_ID.HEAD || tn === TAG_ID.BODY || tn === TAG_ID.HTML || tn === TAG_ID.BR) {
    tokenBeforeHead(p, token);
  } else {
    p._err(token, ERR.endTagWithoutMatchingOpenElement);
  }
}
function tokenBeforeHead(p, token) {
  p._insertFakeElement(TAG_NAMES.HEAD, TAG_ID.HEAD);
  p.headElement = p.openElements.current;
  p.insertionMode = InsertionMode.IN_HEAD;
  p._processToken(token);
}
function startTagInHead(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.BASE:
    case TAG_ID.BASEFONT:
    case TAG_ID.BGSOUND:
    case TAG_ID.LINK:
    case TAG_ID.META: {
      p._appendElement(token, NS.HTML);
      token.ackSelfClosing = true;
      break;
    }
    case TAG_ID.TITLE: {
      p._switchToTextParsing(token, TokenizerMode.RCDATA);
      break;
    }
    case TAG_ID.NOSCRIPT: {
      if (p.options.scriptingEnabled) {
        p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
      } else {
        p._insertElement(token, NS.HTML);
        p.insertionMode = InsertionMode.IN_HEAD_NO_SCRIPT;
      }
      break;
    }
    case TAG_ID.NOFRAMES:
    case TAG_ID.STYLE: {
      p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
      break;
    }
    case TAG_ID.SCRIPT: {
      p._switchToTextParsing(token, TokenizerMode.SCRIPT_DATA);
      break;
    }
    case TAG_ID.TEMPLATE: {
      p._insertTemplate(token);
      p.activeFormattingElements.insertMarker();
      p.framesetOk = false;
      p.insertionMode = InsertionMode.IN_TEMPLATE;
      p.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
      break;
    }
    case TAG_ID.HEAD: {
      p._err(token, ERR.misplacedStartTagForHeadElement);
      break;
    }
    default: {
      tokenInHead(p, token);
    }
  }
}
function endTagInHead(p, token) {
  switch (token.tagID) {
    case TAG_ID.HEAD: {
      p.openElements.pop();
      p.insertionMode = InsertionMode.AFTER_HEAD;
      break;
    }
    case TAG_ID.BODY:
    case TAG_ID.BR:
    case TAG_ID.HTML: {
      tokenInHead(p, token);
      break;
    }
    case TAG_ID.TEMPLATE: {
      templateEndTagInHead(p, token);
      break;
    }
    default: {
      p._err(token, ERR.endTagWithoutMatchingOpenElement);
    }
  }
}
function templateEndTagInHead(p, token) {
  if (p.openElements.tmplCount > 0) {
    p.openElements.generateImpliedEndTagsThoroughly();
    if (p.openElements.currentTagId !== TAG_ID.TEMPLATE) {
      p._err(token, ERR.closingOfElementWithOpenChildElements);
    }
    p.openElements.popUntilTagNamePopped(TAG_ID.TEMPLATE);
    p.activeFormattingElements.clearToLastMarker();
    p.tmplInsertionModeStack.shift();
    p._resetInsertionMode();
  } else {
    p._err(token, ERR.endTagWithoutMatchingOpenElement);
  }
}
function tokenInHead(p, token) {
  p.openElements.pop();
  p.insertionMode = InsertionMode.AFTER_HEAD;
  p._processToken(token);
}
function startTagInHeadNoScript(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.BASEFONT:
    case TAG_ID.BGSOUND:
    case TAG_ID.HEAD:
    case TAG_ID.LINK:
    case TAG_ID.META:
    case TAG_ID.NOFRAMES:
    case TAG_ID.STYLE: {
      startTagInHead(p, token);
      break;
    }
    case TAG_ID.NOSCRIPT: {
      p._err(token, ERR.nestedNoscriptInHead);
      break;
    }
    default: {
      tokenInHeadNoScript(p, token);
    }
  }
}
function endTagInHeadNoScript(p, token) {
  switch (token.tagID) {
    case TAG_ID.NOSCRIPT: {
      p.openElements.pop();
      p.insertionMode = InsertionMode.IN_HEAD;
      break;
    }
    case TAG_ID.BR: {
      tokenInHeadNoScript(p, token);
      break;
    }
    default: {
      p._err(token, ERR.endTagWithoutMatchingOpenElement);
    }
  }
}
function tokenInHeadNoScript(p, token) {
  const errCode = token.type === TokenType.EOF ? ERR.openElementsLeftAfterEof : ERR.disallowedContentInNoscriptInHead;
  p._err(token, errCode);
  p.openElements.pop();
  p.insertionMode = InsertionMode.IN_HEAD;
  p._processToken(token);
}
function startTagAfterHead(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.BODY: {
      p._insertElement(token, NS.HTML);
      p.framesetOk = false;
      p.insertionMode = InsertionMode.IN_BODY;
      break;
    }
    case TAG_ID.FRAMESET: {
      p._insertElement(token, NS.HTML);
      p.insertionMode = InsertionMode.IN_FRAMESET;
      break;
    }
    case TAG_ID.BASE:
    case TAG_ID.BASEFONT:
    case TAG_ID.BGSOUND:
    case TAG_ID.LINK:
    case TAG_ID.META:
    case TAG_ID.NOFRAMES:
    case TAG_ID.SCRIPT:
    case TAG_ID.STYLE:
    case TAG_ID.TEMPLATE:
    case TAG_ID.TITLE: {
      p._err(token, ERR.abandonedHeadElementChild);
      p.openElements.push(p.headElement, TAG_ID.HEAD);
      startTagInHead(p, token);
      p.openElements.remove(p.headElement);
      break;
    }
    case TAG_ID.HEAD: {
      p._err(token, ERR.misplacedStartTagForHeadElement);
      break;
    }
    default: {
      tokenAfterHead(p, token);
    }
  }
}
function endTagAfterHead(p, token) {
  switch (token.tagID) {
    case TAG_ID.BODY:
    case TAG_ID.HTML:
    case TAG_ID.BR: {
      tokenAfterHead(p, token);
      break;
    }
    case TAG_ID.TEMPLATE: {
      templateEndTagInHead(p, token);
      break;
    }
    default: {
      p._err(token, ERR.endTagWithoutMatchingOpenElement);
    }
  }
}
function tokenAfterHead(p, token) {
  p._insertFakeElement(TAG_NAMES.BODY, TAG_ID.BODY);
  p.insertionMode = InsertionMode.IN_BODY;
  modeInBody(p, token);
}
function modeInBody(p, token) {
  switch (token.type) {
    case TokenType.CHARACTER: {
      characterInBody(p, token);
      break;
    }
    case TokenType.WHITESPACE_CHARACTER: {
      whitespaceCharacterInBody(p, token);
      break;
    }
    case TokenType.COMMENT: {
      appendComment(p, token);
      break;
    }
    case TokenType.START_TAG: {
      startTagInBody(p, token);
      break;
    }
    case TokenType.END_TAG: {
      endTagInBody(p, token);
      break;
    }
    case TokenType.EOF: {
      eofInBody(p, token);
      break;
    }
    default:
  }
}
function whitespaceCharacterInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._insertCharacters(token);
}
function characterInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._insertCharacters(token);
  p.framesetOk = false;
}
function htmlStartTagInBody(p, token) {
  if (p.openElements.tmplCount === 0) {
    p.treeAdapter.adoptAttributes(p.openElements.items[0], token.attrs);
  }
}
function bodyStartTagInBody(p, token) {
  const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
  if (bodyElement && p.openElements.tmplCount === 0) {
    p.framesetOk = false;
    p.treeAdapter.adoptAttributes(bodyElement, token.attrs);
  }
}
function framesetStartTagInBody(p, token) {
  const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
  if (p.framesetOk && bodyElement) {
    p.treeAdapter.detachNode(bodyElement);
    p.openElements.popAllUpToHtmlElement();
    p._insertElement(token, NS.HTML);
    p.insertionMode = InsertionMode.IN_FRAMESET;
  }
}
function addressStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._closePElement();
  }
  p._insertElement(token, NS.HTML);
}
function numberedHeaderStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._closePElement();
  }
  if (p.openElements.currentTagId !== void 0 && NUMBERED_HEADERS.has(p.openElements.currentTagId)) {
    p.openElements.pop();
  }
  p._insertElement(token, NS.HTML);
}
function preStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._closePElement();
  }
  p._insertElement(token, NS.HTML);
  p.skipNextNewLine = true;
  p.framesetOk = false;
}
function formStartTagInBody(p, token) {
  const inTemplate = p.openElements.tmplCount > 0;
  if (!p.formElement || inTemplate) {
    if (p.openElements.hasInButtonScope(TAG_ID.P)) {
      p._closePElement();
    }
    p._insertElement(token, NS.HTML);
    if (!inTemplate) {
      p.formElement = p.openElements.current;
    }
  }
}
function listItemStartTagInBody(p, token) {
  p.framesetOk = false;
  const tn = token.tagID;
  for (let i = p.openElements.stackTop; i >= 0; i--) {
    const elementId = p.openElements.tagIDs[i];
    if (tn === TAG_ID.LI && elementId === TAG_ID.LI || (tn === TAG_ID.DD || tn === TAG_ID.DT) && (elementId === TAG_ID.DD || elementId === TAG_ID.DT)) {
      p.openElements.generateImpliedEndTagsWithExclusion(elementId);
      p.openElements.popUntilTagNamePopped(elementId);
      break;
    }
    if (elementId !== TAG_ID.ADDRESS && elementId !== TAG_ID.DIV && elementId !== TAG_ID.P && p._isSpecialElement(p.openElements.items[i], elementId)) {
      break;
    }
  }
  if (p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._closePElement();
  }
  p._insertElement(token, NS.HTML);
}
function plaintextStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._closePElement();
  }
  p._insertElement(token, NS.HTML);
  p.tokenizer.state = TokenizerMode.PLAINTEXT;
}
function buttonStartTagInBody(p, token) {
  if (p.openElements.hasInScope(TAG_ID.BUTTON)) {
    p.openElements.generateImpliedEndTags();
    p.openElements.popUntilTagNamePopped(TAG_ID.BUTTON);
  }
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS.HTML);
  p.framesetOk = false;
}
function aStartTagInBody(p, token) {
  const activeElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(TAG_NAMES.A);
  if (activeElementEntry) {
    callAdoptionAgency(p, token);
    p.openElements.remove(activeElementEntry.element);
    p.activeFormattingElements.removeEntry(activeElementEntry);
  }
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS.HTML);
  p.activeFormattingElements.pushElement(p.openElements.current, token);
}
function bStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS.HTML);
  p.activeFormattingElements.pushElement(p.openElements.current, token);
}
function nobrStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  if (p.openElements.hasInScope(TAG_ID.NOBR)) {
    callAdoptionAgency(p, token);
    p._reconstructActiveFormattingElements();
  }
  p._insertElement(token, NS.HTML);
  p.activeFormattingElements.pushElement(p.openElements.current, token);
}
function appletStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS.HTML);
  p.activeFormattingElements.insertMarker();
  p.framesetOk = false;
}
function tableStartTagInBody(p, token) {
  if (p.treeAdapter.getDocumentMode(p.document) !== DOCUMENT_MODE.QUIRKS && p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._closePElement();
  }
  p._insertElement(token, NS.HTML);
  p.framesetOk = false;
  p.insertionMode = InsertionMode.IN_TABLE;
}
function areaStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._appendElement(token, NS.HTML);
  p.framesetOk = false;
  token.ackSelfClosing = true;
}
function isHiddenInput(token) {
  const inputType = getTokenAttr(token, ATTRS.TYPE);
  return inputType != null && inputType.toLowerCase() === HIDDEN_INPUT_TYPE;
}
function inputStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._appendElement(token, NS.HTML);
  if (!isHiddenInput(token)) {
    p.framesetOk = false;
  }
  token.ackSelfClosing = true;
}
function paramStartTagInBody(p, token) {
  p._appendElement(token, NS.HTML);
  token.ackSelfClosing = true;
}
function hrStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._closePElement();
  }
  p._appendElement(token, NS.HTML);
  p.framesetOk = false;
  token.ackSelfClosing = true;
}
function imageStartTagInBody(p, token) {
  token.tagName = TAG_NAMES.IMG;
  token.tagID = TAG_ID.IMG;
  areaStartTagInBody(p, token);
}
function textareaStartTagInBody(p, token) {
  p._insertElement(token, NS.HTML);
  p.skipNextNewLine = true;
  p.tokenizer.state = TokenizerMode.RCDATA;
  p.originalInsertionMode = p.insertionMode;
  p.framesetOk = false;
  p.insertionMode = InsertionMode.TEXT;
}
function xmpStartTagInBody(p, token) {
  if (p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._closePElement();
  }
  p._reconstructActiveFormattingElements();
  p.framesetOk = false;
  p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
}
function iframeStartTagInBody(p, token) {
  p.framesetOk = false;
  p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
}
function rawTextStartTagInBody(p, token) {
  p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
}
function selectStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS.HTML);
  p.framesetOk = false;
  p.insertionMode = p.insertionMode === InsertionMode.IN_TABLE || p.insertionMode === InsertionMode.IN_CAPTION || p.insertionMode === InsertionMode.IN_TABLE_BODY || p.insertionMode === InsertionMode.IN_ROW || p.insertionMode === InsertionMode.IN_CELL ? InsertionMode.IN_SELECT_IN_TABLE : InsertionMode.IN_SELECT;
}
function optgroupStartTagInBody(p, token) {
  if (p.openElements.currentTagId === TAG_ID.OPTION) {
    p.openElements.pop();
  }
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS.HTML);
}
function rbStartTagInBody(p, token) {
  if (p.openElements.hasInScope(TAG_ID.RUBY)) {
    p.openElements.generateImpliedEndTags();
  }
  p._insertElement(token, NS.HTML);
}
function rtStartTagInBody(p, token) {
  if (p.openElements.hasInScope(TAG_ID.RUBY)) {
    p.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.RTC);
  }
  p._insertElement(token, NS.HTML);
}
function mathStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  adjustTokenMathMLAttrs(token);
  adjustTokenXMLAttrs(token);
  if (token.selfClosing) {
    p._appendElement(token, NS.MATHML);
  } else {
    p._insertElement(token, NS.MATHML);
  }
  token.ackSelfClosing = true;
}
function svgStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  adjustTokenSVGAttrs(token);
  adjustTokenXMLAttrs(token);
  if (token.selfClosing) {
    p._appendElement(token, NS.SVG);
  } else {
    p._insertElement(token, NS.SVG);
  }
  token.ackSelfClosing = true;
}
function genericStartTagInBody(p, token) {
  p._reconstructActiveFormattingElements();
  p._insertElement(token, NS.HTML);
}
function startTagInBody(p, token) {
  switch (token.tagID) {
    case TAG_ID.I:
    case TAG_ID.S:
    case TAG_ID.B:
    case TAG_ID.U:
    case TAG_ID.EM:
    case TAG_ID.TT:
    case TAG_ID.BIG:
    case TAG_ID.CODE:
    case TAG_ID.FONT:
    case TAG_ID.SMALL:
    case TAG_ID.STRIKE:
    case TAG_ID.STRONG: {
      bStartTagInBody(p, token);
      break;
    }
    case TAG_ID.A: {
      aStartTagInBody(p, token);
      break;
    }
    case TAG_ID.H1:
    case TAG_ID.H2:
    case TAG_ID.H3:
    case TAG_ID.H4:
    case TAG_ID.H5:
    case TAG_ID.H6: {
      numberedHeaderStartTagInBody(p, token);
      break;
    }
    case TAG_ID.P:
    case TAG_ID.DL:
    case TAG_ID.OL:
    case TAG_ID.UL:
    case TAG_ID.DIV:
    case TAG_ID.DIR:
    case TAG_ID.NAV:
    case TAG_ID.MAIN:
    case TAG_ID.MENU:
    case TAG_ID.ASIDE:
    case TAG_ID.CENTER:
    case TAG_ID.FIGURE:
    case TAG_ID.FOOTER:
    case TAG_ID.HEADER:
    case TAG_ID.HGROUP:
    case TAG_ID.DIALOG:
    case TAG_ID.DETAILS:
    case TAG_ID.ADDRESS:
    case TAG_ID.ARTICLE:
    case TAG_ID.SEARCH:
    case TAG_ID.SECTION:
    case TAG_ID.SUMMARY:
    case TAG_ID.FIELDSET:
    case TAG_ID.BLOCKQUOTE:
    case TAG_ID.FIGCAPTION: {
      addressStartTagInBody(p, token);
      break;
    }
    case TAG_ID.LI:
    case TAG_ID.DD:
    case TAG_ID.DT: {
      listItemStartTagInBody(p, token);
      break;
    }
    case TAG_ID.BR:
    case TAG_ID.IMG:
    case TAG_ID.WBR:
    case TAG_ID.AREA:
    case TAG_ID.EMBED:
    case TAG_ID.KEYGEN: {
      areaStartTagInBody(p, token);
      break;
    }
    case TAG_ID.HR: {
      hrStartTagInBody(p, token);
      break;
    }
    case TAG_ID.RB:
    case TAG_ID.RTC: {
      rbStartTagInBody(p, token);
      break;
    }
    case TAG_ID.RT:
    case TAG_ID.RP: {
      rtStartTagInBody(p, token);
      break;
    }
    case TAG_ID.PRE:
    case TAG_ID.LISTING: {
      preStartTagInBody(p, token);
      break;
    }
    case TAG_ID.XMP: {
      xmpStartTagInBody(p, token);
      break;
    }
    case TAG_ID.SVG: {
      svgStartTagInBody(p, token);
      break;
    }
    case TAG_ID.HTML: {
      htmlStartTagInBody(p, token);
      break;
    }
    case TAG_ID.BASE:
    case TAG_ID.LINK:
    case TAG_ID.META:
    case TAG_ID.STYLE:
    case TAG_ID.TITLE:
    case TAG_ID.SCRIPT:
    case TAG_ID.BGSOUND:
    case TAG_ID.BASEFONT:
    case TAG_ID.TEMPLATE: {
      startTagInHead(p, token);
      break;
    }
    case TAG_ID.BODY: {
      bodyStartTagInBody(p, token);
      break;
    }
    case TAG_ID.FORM: {
      formStartTagInBody(p, token);
      break;
    }
    case TAG_ID.NOBR: {
      nobrStartTagInBody(p, token);
      break;
    }
    case TAG_ID.MATH: {
      mathStartTagInBody(p, token);
      break;
    }
    case TAG_ID.TABLE: {
      tableStartTagInBody(p, token);
      break;
    }
    case TAG_ID.INPUT: {
      inputStartTagInBody(p, token);
      break;
    }
    case TAG_ID.PARAM:
    case TAG_ID.TRACK:
    case TAG_ID.SOURCE: {
      paramStartTagInBody(p, token);
      break;
    }
    case TAG_ID.IMAGE: {
      imageStartTagInBody(p, token);
      break;
    }
    case TAG_ID.BUTTON: {
      buttonStartTagInBody(p, token);
      break;
    }
    case TAG_ID.APPLET:
    case TAG_ID.OBJECT:
    case TAG_ID.MARQUEE: {
      appletStartTagInBody(p, token);
      break;
    }
    case TAG_ID.IFRAME: {
      iframeStartTagInBody(p, token);
      break;
    }
    case TAG_ID.SELECT: {
      selectStartTagInBody(p, token);
      break;
    }
    case TAG_ID.OPTION:
    case TAG_ID.OPTGROUP: {
      optgroupStartTagInBody(p, token);
      break;
    }
    case TAG_ID.NOEMBED:
    case TAG_ID.NOFRAMES: {
      rawTextStartTagInBody(p, token);
      break;
    }
    case TAG_ID.FRAMESET: {
      framesetStartTagInBody(p, token);
      break;
    }
    case TAG_ID.TEXTAREA: {
      textareaStartTagInBody(p, token);
      break;
    }
    case TAG_ID.NOSCRIPT: {
      if (p.options.scriptingEnabled) {
        rawTextStartTagInBody(p, token);
      } else {
        genericStartTagInBody(p, token);
      }
      break;
    }
    case TAG_ID.PLAINTEXT: {
      plaintextStartTagInBody(p, token);
      break;
    }
    case TAG_ID.COL:
    case TAG_ID.TH:
    case TAG_ID.TD:
    case TAG_ID.TR:
    case TAG_ID.HEAD:
    case TAG_ID.FRAME:
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD:
    case TAG_ID.CAPTION:
    case TAG_ID.COLGROUP: {
      break;
    }
    default: {
      genericStartTagInBody(p, token);
    }
  }
}
function bodyEndTagInBody(p, token) {
  if (p.openElements.hasInScope(TAG_ID.BODY)) {
    p.insertionMode = InsertionMode.AFTER_BODY;
    if (p.options.sourceCodeLocationInfo) {
      const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
      if (bodyElement) {
        p._setEndLocation(bodyElement, token);
      }
    }
  }
}
function htmlEndTagInBody(p, token) {
  if (p.openElements.hasInScope(TAG_ID.BODY)) {
    p.insertionMode = InsertionMode.AFTER_BODY;
    endTagAfterBody(p, token);
  }
}
function addressEndTagInBody(p, token) {
  const tn = token.tagID;
  if (p.openElements.hasInScope(tn)) {
    p.openElements.generateImpliedEndTags();
    p.openElements.popUntilTagNamePopped(tn);
  }
}
function formEndTagInBody(p) {
  const inTemplate = p.openElements.tmplCount > 0;
  const { formElement } = p;
  if (!inTemplate) {
    p.formElement = null;
  }
  if ((formElement || inTemplate) && p.openElements.hasInScope(TAG_ID.FORM)) {
    p.openElements.generateImpliedEndTags();
    if (inTemplate) {
      p.openElements.popUntilTagNamePopped(TAG_ID.FORM);
    } else if (formElement) {
      p.openElements.remove(formElement);
    }
  }
}
function pEndTagInBody(p) {
  if (!p.openElements.hasInButtonScope(TAG_ID.P)) {
    p._insertFakeElement(TAG_NAMES.P, TAG_ID.P);
  }
  p._closePElement();
}
function liEndTagInBody(p) {
  if (p.openElements.hasInListItemScope(TAG_ID.LI)) {
    p.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.LI);
    p.openElements.popUntilTagNamePopped(TAG_ID.LI);
  }
}
function ddEndTagInBody(p, token) {
  const tn = token.tagID;
  if (p.openElements.hasInScope(tn)) {
    p.openElements.generateImpliedEndTagsWithExclusion(tn);
    p.openElements.popUntilTagNamePopped(tn);
  }
}
function numberedHeaderEndTagInBody(p) {
  if (p.openElements.hasNumberedHeaderInScope()) {
    p.openElements.generateImpliedEndTags();
    p.openElements.popUntilNumberedHeaderPopped();
  }
}
function appletEndTagInBody(p, token) {
  const tn = token.tagID;
  if (p.openElements.hasInScope(tn)) {
    p.openElements.generateImpliedEndTags();
    p.openElements.popUntilTagNamePopped(tn);
    p.activeFormattingElements.clearToLastMarker();
  }
}
function brEndTagInBody(p) {
  p._reconstructActiveFormattingElements();
  p._insertFakeElement(TAG_NAMES.BR, TAG_ID.BR);
  p.openElements.pop();
  p.framesetOk = false;
}
function genericEndTagInBody(p, token) {
  const tn = token.tagName;
  const tid = token.tagID;
  for (let i = p.openElements.stackTop; i > 0; i--) {
    const element = p.openElements.items[i];
    const elementId = p.openElements.tagIDs[i];
    if (tid === elementId && (tid !== TAG_ID.UNKNOWN || p.treeAdapter.getTagName(element) === tn)) {
      p.openElements.generateImpliedEndTagsWithExclusion(tid);
      if (p.openElements.stackTop >= i)
        p.openElements.shortenToLength(i);
      break;
    }
    if (p._isSpecialElement(element, elementId)) {
      break;
    }
  }
}
function endTagInBody(p, token) {
  switch (token.tagID) {
    case TAG_ID.A:
    case TAG_ID.B:
    case TAG_ID.I:
    case TAG_ID.S:
    case TAG_ID.U:
    case TAG_ID.EM:
    case TAG_ID.TT:
    case TAG_ID.BIG:
    case TAG_ID.CODE:
    case TAG_ID.FONT:
    case TAG_ID.NOBR:
    case TAG_ID.SMALL:
    case TAG_ID.STRIKE:
    case TAG_ID.STRONG: {
      callAdoptionAgency(p, token);
      break;
    }
    case TAG_ID.P: {
      pEndTagInBody(p);
      break;
    }
    case TAG_ID.DL:
    case TAG_ID.UL:
    case TAG_ID.OL:
    case TAG_ID.DIR:
    case TAG_ID.DIV:
    case TAG_ID.NAV:
    case TAG_ID.PRE:
    case TAG_ID.MAIN:
    case TAG_ID.MENU:
    case TAG_ID.ASIDE:
    case TAG_ID.BUTTON:
    case TAG_ID.CENTER:
    case TAG_ID.FIGURE:
    case TAG_ID.FOOTER:
    case TAG_ID.HEADER:
    case TAG_ID.HGROUP:
    case TAG_ID.DIALOG:
    case TAG_ID.ADDRESS:
    case TAG_ID.ARTICLE:
    case TAG_ID.DETAILS:
    case TAG_ID.SEARCH:
    case TAG_ID.SECTION:
    case TAG_ID.SUMMARY:
    case TAG_ID.LISTING:
    case TAG_ID.FIELDSET:
    case TAG_ID.BLOCKQUOTE:
    case TAG_ID.FIGCAPTION: {
      addressEndTagInBody(p, token);
      break;
    }
    case TAG_ID.LI: {
      liEndTagInBody(p);
      break;
    }
    case TAG_ID.DD:
    case TAG_ID.DT: {
      ddEndTagInBody(p, token);
      break;
    }
    case TAG_ID.H1:
    case TAG_ID.H2:
    case TAG_ID.H3:
    case TAG_ID.H4:
    case TAG_ID.H5:
    case TAG_ID.H6: {
      numberedHeaderEndTagInBody(p);
      break;
    }
    case TAG_ID.BR: {
      brEndTagInBody(p);
      break;
    }
    case TAG_ID.BODY: {
      bodyEndTagInBody(p, token);
      break;
    }
    case TAG_ID.HTML: {
      htmlEndTagInBody(p, token);
      break;
    }
    case TAG_ID.FORM: {
      formEndTagInBody(p);
      break;
    }
    case TAG_ID.APPLET:
    case TAG_ID.OBJECT:
    case TAG_ID.MARQUEE: {
      appletEndTagInBody(p, token);
      break;
    }
    case TAG_ID.TEMPLATE: {
      templateEndTagInHead(p, token);
      break;
    }
    default: {
      genericEndTagInBody(p, token);
    }
  }
}
function eofInBody(p, token) {
  if (p.tmplInsertionModeStack.length > 0) {
    eofInTemplate(p, token);
  } else {
    stopParsing(p, token);
  }
}
function endTagInText(p, token) {
  var _a;
  if (token.tagID === TAG_ID.SCRIPT) {
    (_a = p.scriptHandler) === null || _a === void 0 ? void 0 : _a.call(p, p.openElements.current);
  }
  p.openElements.pop();
  p.insertionMode = p.originalInsertionMode;
}
function eofInText(p, token) {
  p._err(token, ERR.eofInElementThatCanContainOnlyText);
  p.openElements.pop();
  p.insertionMode = p.originalInsertionMode;
  p.onEof(token);
}
function characterInTable(p, token) {
  if (p.openElements.currentTagId !== void 0 && TABLE_STRUCTURE_TAGS.has(p.openElements.currentTagId)) {
    p.pendingCharacterTokens.length = 0;
    p.hasNonWhitespacePendingCharacterToken = false;
    p.originalInsertionMode = p.insertionMode;
    p.insertionMode = InsertionMode.IN_TABLE_TEXT;
    switch (token.type) {
      case TokenType.CHARACTER: {
        characterInTableText(p, token);
        break;
      }
      case TokenType.WHITESPACE_CHARACTER: {
        whitespaceCharacterInTableText(p, token);
        break;
      }
    }
  } else {
    tokenInTable(p, token);
  }
}
function captionStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();
  p.activeFormattingElements.insertMarker();
  p._insertElement(token, NS.HTML);
  p.insertionMode = InsertionMode.IN_CAPTION;
}
function colgroupStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();
  p._insertElement(token, NS.HTML);
  p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
}
function colStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();
  p._insertFakeElement(TAG_NAMES.COLGROUP, TAG_ID.COLGROUP);
  p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
  startTagInColumnGroup(p, token);
}
function tbodyStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();
  p._insertElement(token, NS.HTML);
  p.insertionMode = InsertionMode.IN_TABLE_BODY;
}
function tdStartTagInTable(p, token) {
  p.openElements.clearBackToTableContext();
  p._insertFakeElement(TAG_NAMES.TBODY, TAG_ID.TBODY);
  p.insertionMode = InsertionMode.IN_TABLE_BODY;
  startTagInTableBody(p, token);
}
function tableStartTagInTable(p, token) {
  if (p.openElements.hasInTableScope(TAG_ID.TABLE)) {
    p.openElements.popUntilTagNamePopped(TAG_ID.TABLE);
    p._resetInsertionMode();
    p._processStartTag(token);
  }
}
function inputStartTagInTable(p, token) {
  if (isHiddenInput(token)) {
    p._appendElement(token, NS.HTML);
  } else {
    tokenInTable(p, token);
  }
  token.ackSelfClosing = true;
}
function formStartTagInTable(p, token) {
  if (!p.formElement && p.openElements.tmplCount === 0) {
    p._insertElement(token, NS.HTML);
    p.formElement = p.openElements.current;
    p.openElements.pop();
  }
}
function startTagInTable(p, token) {
  switch (token.tagID) {
    case TAG_ID.TD:
    case TAG_ID.TH:
    case TAG_ID.TR: {
      tdStartTagInTable(p, token);
      break;
    }
    case TAG_ID.STYLE:
    case TAG_ID.SCRIPT:
    case TAG_ID.TEMPLATE: {
      startTagInHead(p, token);
      break;
    }
    case TAG_ID.COL: {
      colStartTagInTable(p, token);
      break;
    }
    case TAG_ID.FORM: {
      formStartTagInTable(p, token);
      break;
    }
    case TAG_ID.TABLE: {
      tableStartTagInTable(p, token);
      break;
    }
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD: {
      tbodyStartTagInTable(p, token);
      break;
    }
    case TAG_ID.INPUT: {
      inputStartTagInTable(p, token);
      break;
    }
    case TAG_ID.CAPTION: {
      captionStartTagInTable(p, token);
      break;
    }
    case TAG_ID.COLGROUP: {
      colgroupStartTagInTable(p, token);
      break;
    }
    default: {
      tokenInTable(p, token);
    }
  }
}
function endTagInTable(p, token) {
  switch (token.tagID) {
    case TAG_ID.TABLE: {
      if (p.openElements.hasInTableScope(TAG_ID.TABLE)) {
        p.openElements.popUntilTagNamePopped(TAG_ID.TABLE);
        p._resetInsertionMode();
      }
      break;
    }
    case TAG_ID.TEMPLATE: {
      templateEndTagInHead(p, token);
      break;
    }
    case TAG_ID.BODY:
    case TAG_ID.CAPTION:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.HTML:
    case TAG_ID.TBODY:
    case TAG_ID.TD:
    case TAG_ID.TFOOT:
    case TAG_ID.TH:
    case TAG_ID.THEAD:
    case TAG_ID.TR: {
      break;
    }
    default: {
      tokenInTable(p, token);
    }
  }
}
function tokenInTable(p, token) {
  const savedFosterParentingState = p.fosterParentingEnabled;
  p.fosterParentingEnabled = true;
  modeInBody(p, token);
  p.fosterParentingEnabled = savedFosterParentingState;
}
function whitespaceCharacterInTableText(p, token) {
  p.pendingCharacterTokens.push(token);
}
function characterInTableText(p, token) {
  p.pendingCharacterTokens.push(token);
  p.hasNonWhitespacePendingCharacterToken = true;
}
function tokenInTableText(p, token) {
  let i = 0;
  if (p.hasNonWhitespacePendingCharacterToken) {
    for (; i < p.pendingCharacterTokens.length; i++) {
      tokenInTable(p, p.pendingCharacterTokens[i]);
    }
  } else {
    for (; i < p.pendingCharacterTokens.length; i++) {
      p._insertCharacters(p.pendingCharacterTokens[i]);
    }
  }
  p.insertionMode = p.originalInsertionMode;
  p._processToken(token);
}
function startTagInCaption(p, token) {
  const tn = token.tagID;
  if (TABLE_VOID_ELEMENTS.has(tn)) {
    if (p.openElements.hasInTableScope(TAG_ID.CAPTION)) {
      p.openElements.generateImpliedEndTags();
      p.openElements.popUntilTagNamePopped(TAG_ID.CAPTION);
      p.activeFormattingElements.clearToLastMarker();
      p.insertionMode = InsertionMode.IN_TABLE;
      startTagInTable(p, token);
    }
  } else {
    startTagInBody(p, token);
  }
}
function endTagInCaption(p, token) {
  const tn = token.tagID;
  switch (tn) {
    case TAG_ID.CAPTION:
    case TAG_ID.TABLE: {
      if (p.openElements.hasInTableScope(TAG_ID.CAPTION)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(TAG_ID.CAPTION);
        p.activeFormattingElements.clearToLastMarker();
        p.insertionMode = InsertionMode.IN_TABLE;
        if (tn === TAG_ID.TABLE) {
          endTagInTable(p, token);
        }
      }
      break;
    }
    case TAG_ID.BODY:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.HTML:
    case TAG_ID.TBODY:
    case TAG_ID.TD:
    case TAG_ID.TFOOT:
    case TAG_ID.TH:
    case TAG_ID.THEAD:
    case TAG_ID.TR: {
      break;
    }
    default: {
      endTagInBody(p, token);
    }
  }
}
function startTagInColumnGroup(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.COL: {
      p._appendElement(token, NS.HTML);
      token.ackSelfClosing = true;
      break;
    }
    case TAG_ID.TEMPLATE: {
      startTagInHead(p, token);
      break;
    }
    default: {
      tokenInColumnGroup(p, token);
    }
  }
}
function endTagInColumnGroup(p, token) {
  switch (token.tagID) {
    case TAG_ID.COLGROUP: {
      if (p.openElements.currentTagId === TAG_ID.COLGROUP) {
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE;
      }
      break;
    }
    case TAG_ID.TEMPLATE: {
      templateEndTagInHead(p, token);
      break;
    }
    case TAG_ID.COL: {
      break;
    }
    default: {
      tokenInColumnGroup(p, token);
    }
  }
}
function tokenInColumnGroup(p, token) {
  if (p.openElements.currentTagId === TAG_ID.COLGROUP) {
    p.openElements.pop();
    p.insertionMode = InsertionMode.IN_TABLE;
    p._processToken(token);
  }
}
function startTagInTableBody(p, token) {
  switch (token.tagID) {
    case TAG_ID.TR: {
      p.openElements.clearBackToTableBodyContext();
      p._insertElement(token, NS.HTML);
      p.insertionMode = InsertionMode.IN_ROW;
      break;
    }
    case TAG_ID.TH:
    case TAG_ID.TD: {
      p.openElements.clearBackToTableBodyContext();
      p._insertFakeElement(TAG_NAMES.TR, TAG_ID.TR);
      p.insertionMode = InsertionMode.IN_ROW;
      startTagInRow(p, token);
      break;
    }
    case TAG_ID.CAPTION:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD: {
      if (p.openElements.hasTableBodyContextInTableScope()) {
        p.openElements.clearBackToTableBodyContext();
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE;
        startTagInTable(p, token);
      }
      break;
    }
    default: {
      startTagInTable(p, token);
    }
  }
}
function endTagInTableBody(p, token) {
  const tn = token.tagID;
  switch (token.tagID) {
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD: {
      if (p.openElements.hasInTableScope(tn)) {
        p.openElements.clearBackToTableBodyContext();
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE;
      }
      break;
    }
    case TAG_ID.TABLE: {
      if (p.openElements.hasTableBodyContextInTableScope()) {
        p.openElements.clearBackToTableBodyContext();
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE;
        endTagInTable(p, token);
      }
      break;
    }
    case TAG_ID.BODY:
    case TAG_ID.CAPTION:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.HTML:
    case TAG_ID.TD:
    case TAG_ID.TH:
    case TAG_ID.TR: {
      break;
    }
    default: {
      endTagInTable(p, token);
    }
  }
}
function startTagInRow(p, token) {
  switch (token.tagID) {
    case TAG_ID.TH:
    case TAG_ID.TD: {
      p.openElements.clearBackToTableRowContext();
      p._insertElement(token, NS.HTML);
      p.insertionMode = InsertionMode.IN_CELL;
      p.activeFormattingElements.insertMarker();
      break;
    }
    case TAG_ID.CAPTION:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD:
    case TAG_ID.TR: {
      if (p.openElements.hasInTableScope(TAG_ID.TR)) {
        p.openElements.clearBackToTableRowContext();
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE_BODY;
        startTagInTableBody(p, token);
      }
      break;
    }
    default: {
      startTagInTable(p, token);
    }
  }
}
function endTagInRow(p, token) {
  switch (token.tagID) {
    case TAG_ID.TR: {
      if (p.openElements.hasInTableScope(TAG_ID.TR)) {
        p.openElements.clearBackToTableRowContext();
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE_BODY;
      }
      break;
    }
    case TAG_ID.TABLE: {
      if (p.openElements.hasInTableScope(TAG_ID.TR)) {
        p.openElements.clearBackToTableRowContext();
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE_BODY;
        endTagInTableBody(p, token);
      }
      break;
    }
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD: {
      if (p.openElements.hasInTableScope(token.tagID) || p.openElements.hasInTableScope(TAG_ID.TR)) {
        p.openElements.clearBackToTableRowContext();
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE_BODY;
        endTagInTableBody(p, token);
      }
      break;
    }
    case TAG_ID.BODY:
    case TAG_ID.CAPTION:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.HTML:
    case TAG_ID.TD:
    case TAG_ID.TH: {
      break;
    }
    default: {
      endTagInTable(p, token);
    }
  }
}
function startTagInCell(p, token) {
  const tn = token.tagID;
  if (TABLE_VOID_ELEMENTS.has(tn)) {
    if (p.openElements.hasInTableScope(TAG_ID.TD) || p.openElements.hasInTableScope(TAG_ID.TH)) {
      p._closeTableCell();
      startTagInRow(p, token);
    }
  } else {
    startTagInBody(p, token);
  }
}
function endTagInCell(p, token) {
  const tn = token.tagID;
  switch (tn) {
    case TAG_ID.TD:
    case TAG_ID.TH: {
      if (p.openElements.hasInTableScope(tn)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(tn);
        p.activeFormattingElements.clearToLastMarker();
        p.insertionMode = InsertionMode.IN_ROW;
      }
      break;
    }
    case TAG_ID.TABLE:
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD:
    case TAG_ID.TR: {
      if (p.openElements.hasInTableScope(tn)) {
        p._closeTableCell();
        endTagInRow(p, token);
      }
      break;
    }
    case TAG_ID.BODY:
    case TAG_ID.CAPTION:
    case TAG_ID.COL:
    case TAG_ID.COLGROUP:
    case TAG_ID.HTML: {
      break;
    }
    default: {
      endTagInBody(p, token);
    }
  }
}
function startTagInSelect(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.OPTION: {
      if (p.openElements.currentTagId === TAG_ID.OPTION) {
        p.openElements.pop();
      }
      p._insertElement(token, NS.HTML);
      break;
    }
    case TAG_ID.OPTGROUP: {
      if (p.openElements.currentTagId === TAG_ID.OPTION) {
        p.openElements.pop();
      }
      if (p.openElements.currentTagId === TAG_ID.OPTGROUP) {
        p.openElements.pop();
      }
      p._insertElement(token, NS.HTML);
      break;
    }
    case TAG_ID.HR: {
      if (p.openElements.currentTagId === TAG_ID.OPTION) {
        p.openElements.pop();
      }
      if (p.openElements.currentTagId === TAG_ID.OPTGROUP) {
        p.openElements.pop();
      }
      p._appendElement(token, NS.HTML);
      token.ackSelfClosing = true;
      break;
    }
    case TAG_ID.INPUT:
    case TAG_ID.KEYGEN:
    case TAG_ID.TEXTAREA:
    case TAG_ID.SELECT: {
      if (p.openElements.hasInSelectScope(TAG_ID.SELECT)) {
        p.openElements.popUntilTagNamePopped(TAG_ID.SELECT);
        p._resetInsertionMode();
        if (token.tagID !== TAG_ID.SELECT) {
          p._processStartTag(token);
        }
      }
      break;
    }
    case TAG_ID.SCRIPT:
    case TAG_ID.TEMPLATE: {
      startTagInHead(p, token);
      break;
    }
    default:
  }
}
function endTagInSelect(p, token) {
  switch (token.tagID) {
    case TAG_ID.OPTGROUP: {
      if (p.openElements.stackTop > 0 && p.openElements.currentTagId === TAG_ID.OPTION && p.openElements.tagIDs[p.openElements.stackTop - 1] === TAG_ID.OPTGROUP) {
        p.openElements.pop();
      }
      if (p.openElements.currentTagId === TAG_ID.OPTGROUP) {
        p.openElements.pop();
      }
      break;
    }
    case TAG_ID.OPTION: {
      if (p.openElements.currentTagId === TAG_ID.OPTION) {
        p.openElements.pop();
      }
      break;
    }
    case TAG_ID.SELECT: {
      if (p.openElements.hasInSelectScope(TAG_ID.SELECT)) {
        p.openElements.popUntilTagNamePopped(TAG_ID.SELECT);
        p._resetInsertionMode();
      }
      break;
    }
    case TAG_ID.TEMPLATE: {
      templateEndTagInHead(p, token);
      break;
    }
    default:
  }
}
function startTagInSelectInTable(p, token) {
  const tn = token.tagID;
  if (tn === TAG_ID.CAPTION || tn === TAG_ID.TABLE || tn === TAG_ID.TBODY || tn === TAG_ID.TFOOT || tn === TAG_ID.THEAD || tn === TAG_ID.TR || tn === TAG_ID.TD || tn === TAG_ID.TH) {
    p.openElements.popUntilTagNamePopped(TAG_ID.SELECT);
    p._resetInsertionMode();
    p._processStartTag(token);
  } else {
    startTagInSelect(p, token);
  }
}
function endTagInSelectInTable(p, token) {
  const tn = token.tagID;
  if (tn === TAG_ID.CAPTION || tn === TAG_ID.TABLE || tn === TAG_ID.TBODY || tn === TAG_ID.TFOOT || tn === TAG_ID.THEAD || tn === TAG_ID.TR || tn === TAG_ID.TD || tn === TAG_ID.TH) {
    if (p.openElements.hasInTableScope(tn)) {
      p.openElements.popUntilTagNamePopped(TAG_ID.SELECT);
      p._resetInsertionMode();
      p.onEndTag(token);
    }
  } else {
    endTagInSelect(p, token);
  }
}
function startTagInTemplate(p, token) {
  switch (token.tagID) {
    // First, handle tags that can start without a mode change
    case TAG_ID.BASE:
    case TAG_ID.BASEFONT:
    case TAG_ID.BGSOUND:
    case TAG_ID.LINK:
    case TAG_ID.META:
    case TAG_ID.NOFRAMES:
    case TAG_ID.SCRIPT:
    case TAG_ID.STYLE:
    case TAG_ID.TEMPLATE:
    case TAG_ID.TITLE: {
      startTagInHead(p, token);
      break;
    }
    // Re-process the token in the appropriate mode
    case TAG_ID.CAPTION:
    case TAG_ID.COLGROUP:
    case TAG_ID.TBODY:
    case TAG_ID.TFOOT:
    case TAG_ID.THEAD: {
      p.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE;
      p.insertionMode = InsertionMode.IN_TABLE;
      startTagInTable(p, token);
      break;
    }
    case TAG_ID.COL: {
      p.tmplInsertionModeStack[0] = InsertionMode.IN_COLUMN_GROUP;
      p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
      startTagInColumnGroup(p, token);
      break;
    }
    case TAG_ID.TR: {
      p.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE_BODY;
      p.insertionMode = InsertionMode.IN_TABLE_BODY;
      startTagInTableBody(p, token);
      break;
    }
    case TAG_ID.TD:
    case TAG_ID.TH: {
      p.tmplInsertionModeStack[0] = InsertionMode.IN_ROW;
      p.insertionMode = InsertionMode.IN_ROW;
      startTagInRow(p, token);
      break;
    }
    default: {
      p.tmplInsertionModeStack[0] = InsertionMode.IN_BODY;
      p.insertionMode = InsertionMode.IN_BODY;
      startTagInBody(p, token);
    }
  }
}
function endTagInTemplate(p, token) {
  if (token.tagID === TAG_ID.TEMPLATE) {
    templateEndTagInHead(p, token);
  }
}
function eofInTemplate(p, token) {
  if (p.openElements.tmplCount > 0) {
    p.openElements.popUntilTagNamePopped(TAG_ID.TEMPLATE);
    p.activeFormattingElements.clearToLastMarker();
    p.tmplInsertionModeStack.shift();
    p._resetInsertionMode();
    p.onEof(token);
  } else {
    stopParsing(p, token);
  }
}
function startTagAfterBody(p, token) {
  if (token.tagID === TAG_ID.HTML) {
    startTagInBody(p, token);
  } else {
    tokenAfterBody(p, token);
  }
}
function endTagAfterBody(p, token) {
  var _a;
  if (token.tagID === TAG_ID.HTML) {
    if (!p.fragmentContext) {
      p.insertionMode = InsertionMode.AFTER_AFTER_BODY;
    }
    if (p.options.sourceCodeLocationInfo && p.openElements.tagIDs[0] === TAG_ID.HTML) {
      p._setEndLocation(p.openElements.items[0], token);
      const bodyElement = p.openElements.items[1];
      if (bodyElement && !((_a = p.treeAdapter.getNodeSourceCodeLocation(bodyElement)) === null || _a === void 0 ? void 0 : _a.endTag)) {
        p._setEndLocation(bodyElement, token);
      }
    }
  } else {
    tokenAfterBody(p, token);
  }
}
function tokenAfterBody(p, token) {
  p.insertionMode = InsertionMode.IN_BODY;
  modeInBody(p, token);
}
function startTagInFrameset(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.FRAMESET: {
      p._insertElement(token, NS.HTML);
      break;
    }
    case TAG_ID.FRAME: {
      p._appendElement(token, NS.HTML);
      token.ackSelfClosing = true;
      break;
    }
    case TAG_ID.NOFRAMES: {
      startTagInHead(p, token);
      break;
    }
    default:
  }
}
function endTagInFrameset(p, token) {
  if (token.tagID === TAG_ID.FRAMESET && !p.openElements.isRootHtmlElementCurrent()) {
    p.openElements.pop();
    if (!p.fragmentContext && p.openElements.currentTagId !== TAG_ID.FRAMESET) {
      p.insertionMode = InsertionMode.AFTER_FRAMESET;
    }
  }
}
function startTagAfterFrameset(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.NOFRAMES: {
      startTagInHead(p, token);
      break;
    }
    default:
  }
}
function endTagAfterFrameset(p, token) {
  if (token.tagID === TAG_ID.HTML) {
    p.insertionMode = InsertionMode.AFTER_AFTER_FRAMESET;
  }
}
function startTagAfterAfterBody(p, token) {
  if (token.tagID === TAG_ID.HTML) {
    startTagInBody(p, token);
  } else {
    tokenAfterAfterBody(p, token);
  }
}
function tokenAfterAfterBody(p, token) {
  p.insertionMode = InsertionMode.IN_BODY;
  modeInBody(p, token);
}
function startTagAfterAfterFrameset(p, token) {
  switch (token.tagID) {
    case TAG_ID.HTML: {
      startTagInBody(p, token);
      break;
    }
    case TAG_ID.NOFRAMES: {
      startTagInHead(p, token);
      break;
    }
    default:
  }
}
function nullCharacterInForeignContent(p, token) {
  token.chars = REPLACEMENT_CHARACTER;
  p._insertCharacters(token);
}
function characterInForeignContent(p, token) {
  p._insertCharacters(token);
  p.framesetOk = false;
}
function popUntilHtmlOrIntegrationPoint(p) {
  while (p.treeAdapter.getNamespaceURI(p.openElements.current) !== NS.HTML && p.openElements.currentTagId !== void 0 && !p._isIntegrationPoint(p.openElements.currentTagId, p.openElements.current)) {
    p.openElements.pop();
  }
}
function startTagInForeignContent(p, token) {
  if (causesExit(token)) {
    popUntilHtmlOrIntegrationPoint(p);
    p._startTagOutsideForeignContent(token);
  } else {
    const current = p._getAdjustedCurrentElement();
    const currentNs = p.treeAdapter.getNamespaceURI(current);
    if (currentNs === NS.MATHML) {
      adjustTokenMathMLAttrs(token);
    } else if (currentNs === NS.SVG) {
      adjustTokenSVGTagName(token);
      adjustTokenSVGAttrs(token);
    }
    adjustTokenXMLAttrs(token);
    if (token.selfClosing) {
      p._appendElement(token, currentNs);
    } else {
      p._insertElement(token, currentNs);
    }
    token.ackSelfClosing = true;
  }
}
function endTagInForeignContent(p, token) {
  if (token.tagID === TAG_ID.P || token.tagID === TAG_ID.BR) {
    popUntilHtmlOrIntegrationPoint(p);
    p._endTagOutsideForeignContent(token);
    return;
  }
  for (let i = p.openElements.stackTop; i > 0; i--) {
    const element = p.openElements.items[i];
    if (p.treeAdapter.getNamespaceURI(element) === NS.HTML) {
      p._endTagOutsideForeignContent(token);
      break;
    }
    const tagName = p.treeAdapter.getTagName(element);
    if (tagName.toLowerCase() === token.tagName) {
      token.tagName = tagName;
      p.openElements.shortenToLength(i);
      break;
    }
  }
}
var HIDDEN_INPUT_TYPE, AA_OUTER_LOOP_ITER, AA_INNER_LOOP_ITER, InsertionMode, BASE_LOC, TABLE_STRUCTURE_TAGS, defaultParserOptions, Parser, TABLE_VOID_ELEMENTS;
var init_parser = __esm({
  "../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/parser/index.js"() {
    init_tokenizer();
    init_open_element_stack();
    init_formatting_element_list();
    init_default();
    init_doctype();
    init_foreign_content();
    init_error_codes();
    init_unicode();
    init_html();
    init_token();
    HIDDEN_INPUT_TYPE = "hidden";
    AA_OUTER_LOOP_ITER = 8;
    AA_INNER_LOOP_ITER = 3;
    (function(InsertionMode2) {
      InsertionMode2[InsertionMode2["INITIAL"] = 0] = "INITIAL";
      InsertionMode2[InsertionMode2["BEFORE_HTML"] = 1] = "BEFORE_HTML";
      InsertionMode2[InsertionMode2["BEFORE_HEAD"] = 2] = "BEFORE_HEAD";
      InsertionMode2[InsertionMode2["IN_HEAD"] = 3] = "IN_HEAD";
      InsertionMode2[InsertionMode2["IN_HEAD_NO_SCRIPT"] = 4] = "IN_HEAD_NO_SCRIPT";
      InsertionMode2[InsertionMode2["AFTER_HEAD"] = 5] = "AFTER_HEAD";
      InsertionMode2[InsertionMode2["IN_BODY"] = 6] = "IN_BODY";
      InsertionMode2[InsertionMode2["TEXT"] = 7] = "TEXT";
      InsertionMode2[InsertionMode2["IN_TABLE"] = 8] = "IN_TABLE";
      InsertionMode2[InsertionMode2["IN_TABLE_TEXT"] = 9] = "IN_TABLE_TEXT";
      InsertionMode2[InsertionMode2["IN_CAPTION"] = 10] = "IN_CAPTION";
      InsertionMode2[InsertionMode2["IN_COLUMN_GROUP"] = 11] = "IN_COLUMN_GROUP";
      InsertionMode2[InsertionMode2["IN_TABLE_BODY"] = 12] = "IN_TABLE_BODY";
      InsertionMode2[InsertionMode2["IN_ROW"] = 13] = "IN_ROW";
      InsertionMode2[InsertionMode2["IN_CELL"] = 14] = "IN_CELL";
      InsertionMode2[InsertionMode2["IN_SELECT"] = 15] = "IN_SELECT";
      InsertionMode2[InsertionMode2["IN_SELECT_IN_TABLE"] = 16] = "IN_SELECT_IN_TABLE";
      InsertionMode2[InsertionMode2["IN_TEMPLATE"] = 17] = "IN_TEMPLATE";
      InsertionMode2[InsertionMode2["AFTER_BODY"] = 18] = "AFTER_BODY";
      InsertionMode2[InsertionMode2["IN_FRAMESET"] = 19] = "IN_FRAMESET";
      InsertionMode2[InsertionMode2["AFTER_FRAMESET"] = 20] = "AFTER_FRAMESET";
      InsertionMode2[InsertionMode2["AFTER_AFTER_BODY"] = 21] = "AFTER_AFTER_BODY";
      InsertionMode2[InsertionMode2["AFTER_AFTER_FRAMESET"] = 22] = "AFTER_AFTER_FRAMESET";
    })(InsertionMode || (InsertionMode = {}));
    BASE_LOC = {
      startLine: -1,
      startCol: -1,
      startOffset: -1,
      endLine: -1,
      endCol: -1,
      endOffset: -1
    };
    TABLE_STRUCTURE_TAGS = /* @__PURE__ */ new Set([TAG_ID.TABLE, TAG_ID.TBODY, TAG_ID.TFOOT, TAG_ID.THEAD, TAG_ID.TR]);
    defaultParserOptions = {
      scriptingEnabled: true,
      sourceCodeLocationInfo: false,
      treeAdapter: defaultTreeAdapter,
      onParseError: null
    };
    Parser = class {
      constructor(options, document2, fragmentContext = null, scriptHandler = null) {
        this.fragmentContext = fragmentContext;
        this.scriptHandler = scriptHandler;
        this.currentToken = null;
        this.stopped = false;
        this.insertionMode = InsertionMode.INITIAL;
        this.originalInsertionMode = InsertionMode.INITIAL;
        this.headElement = null;
        this.formElement = null;
        this.currentNotInHTML = false;
        this.tmplInsertionModeStack = [];
        this.pendingCharacterTokens = [];
        this.hasNonWhitespacePendingCharacterToken = false;
        this.framesetOk = true;
        this.skipNextNewLine = false;
        this.fosterParentingEnabled = false;
        this.options = {
          ...defaultParserOptions,
          ...options
        };
        this.treeAdapter = this.options.treeAdapter;
        this.onParseError = this.options.onParseError;
        if (this.onParseError) {
          this.options.sourceCodeLocationInfo = true;
        }
        this.document = document2 !== null && document2 !== void 0 ? document2 : this.treeAdapter.createDocument();
        this.tokenizer = new Tokenizer(this.options, this);
        this.activeFormattingElements = new FormattingElementList(this.treeAdapter);
        this.fragmentContextID = fragmentContext ? getTagID(this.treeAdapter.getTagName(fragmentContext)) : TAG_ID.UNKNOWN;
        this._setContextModes(fragmentContext !== null && fragmentContext !== void 0 ? fragmentContext : this.document, this.fragmentContextID);
        this.openElements = new OpenElementStack(this.document, this.treeAdapter, this);
      }
      // API
      static parse(html, options) {
        const parser = new this(options);
        parser.tokenizer.write(html, true);
        return parser.document;
      }
      static getFragmentParser(fragmentContext, options) {
        const opts = {
          ...defaultParserOptions,
          ...options
        };
        fragmentContext !== null && fragmentContext !== void 0 ? fragmentContext : fragmentContext = opts.treeAdapter.createElement(TAG_NAMES.TEMPLATE, NS.HTML, []);
        const documentMock = opts.treeAdapter.createElement("documentmock", NS.HTML, []);
        const parser = new this(opts, documentMock, fragmentContext);
        if (parser.fragmentContextID === TAG_ID.TEMPLATE) {
          parser.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
        }
        parser._initTokenizerForFragmentParsing();
        parser._insertFakeRootElement();
        parser._resetInsertionMode();
        parser._findFormInFragmentContext();
        return parser;
      }
      getFragment() {
        const rootElement = this.treeAdapter.getFirstChild(this.document);
        const fragment = this.treeAdapter.createDocumentFragment();
        this._adoptNodes(rootElement, fragment);
        return fragment;
      }
      //Errors
      /** @internal */
      _err(token, code, beforeToken) {
        var _a;
        if (!this.onParseError)
          return;
        const loc = (_a = token.location) !== null && _a !== void 0 ? _a : BASE_LOC;
        const err = {
          code,
          startLine: loc.startLine,
          startCol: loc.startCol,
          startOffset: loc.startOffset,
          endLine: beforeToken ? loc.startLine : loc.endLine,
          endCol: beforeToken ? loc.startCol : loc.endCol,
          endOffset: beforeToken ? loc.startOffset : loc.endOffset
        };
        this.onParseError(err);
      }
      //Stack events
      /** @internal */
      onItemPush(node, tid, isTop) {
        var _a, _b;
        (_b = (_a = this.treeAdapter).onItemPush) === null || _b === void 0 ? void 0 : _b.call(_a, node);
        if (isTop && this.openElements.stackTop > 0)
          this._setContextModes(node, tid);
      }
      /** @internal */
      onItemPop(node, isTop) {
        var _a, _b;
        if (this.options.sourceCodeLocationInfo) {
          this._setEndLocation(node, this.currentToken);
        }
        (_b = (_a = this.treeAdapter).onItemPop) === null || _b === void 0 ? void 0 : _b.call(_a, node, this.openElements.current);
        if (isTop) {
          let current;
          let currentTagId;
          if (this.openElements.stackTop === 0 && this.fragmentContext) {
            current = this.fragmentContext;
            currentTagId = this.fragmentContextID;
          } else {
            ({ current, currentTagId } = this.openElements);
          }
          this._setContextModes(current, currentTagId);
        }
      }
      _setContextModes(current, tid) {
        const isHTML = current === this.document || current && this.treeAdapter.getNamespaceURI(current) === NS.HTML;
        this.currentNotInHTML = !isHTML;
        this.tokenizer.inForeignNode = !isHTML && current !== void 0 && tid !== void 0 && !this._isIntegrationPoint(tid, current);
      }
      /** @protected */
      _switchToTextParsing(currentToken, nextTokenizerState) {
        this._insertElement(currentToken, NS.HTML);
        this.tokenizer.state = nextTokenizerState;
        this.originalInsertionMode = this.insertionMode;
        this.insertionMode = InsertionMode.TEXT;
      }
      switchToPlaintextParsing() {
        this.insertionMode = InsertionMode.TEXT;
        this.originalInsertionMode = InsertionMode.IN_BODY;
        this.tokenizer.state = TokenizerMode.PLAINTEXT;
      }
      //Fragment parsing
      /** @protected */
      _getAdjustedCurrentElement() {
        return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
      }
      /** @protected */
      _findFormInFragmentContext() {
        let node = this.fragmentContext;
        while (node) {
          if (this.treeAdapter.getTagName(node) === TAG_NAMES.FORM) {
            this.formElement = node;
            break;
          }
          node = this.treeAdapter.getParentNode(node);
        }
      }
      _initTokenizerForFragmentParsing() {
        if (!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== NS.HTML) {
          return;
        }
        switch (this.fragmentContextID) {
          case TAG_ID.TITLE:
          case TAG_ID.TEXTAREA: {
            this.tokenizer.state = TokenizerMode.RCDATA;
            break;
          }
          case TAG_ID.STYLE:
          case TAG_ID.XMP:
          case TAG_ID.IFRAME:
          case TAG_ID.NOEMBED:
          case TAG_ID.NOFRAMES:
          case TAG_ID.NOSCRIPT: {
            this.tokenizer.state = TokenizerMode.RAWTEXT;
            break;
          }
          case TAG_ID.SCRIPT: {
            this.tokenizer.state = TokenizerMode.SCRIPT_DATA;
            break;
          }
          case TAG_ID.PLAINTEXT: {
            this.tokenizer.state = TokenizerMode.PLAINTEXT;
            break;
          }
          default:
        }
      }
      //Tree mutation
      /** @protected */
      _setDocumentType(token) {
        const name = token.name || "";
        const publicId = token.publicId || "";
        const systemId = token.systemId || "";
        this.treeAdapter.setDocumentType(this.document, name, publicId, systemId);
        if (token.location) {
          const documentChildren = this.treeAdapter.getChildNodes(this.document);
          const docTypeNode = documentChildren.find((node) => this.treeAdapter.isDocumentTypeNode(node));
          if (docTypeNode) {
            this.treeAdapter.setNodeSourceCodeLocation(docTypeNode, token.location);
          }
        }
      }
      /** @protected */
      _attachElementToTree(element, location2) {
        if (this.options.sourceCodeLocationInfo) {
          const loc = location2 && {
            ...location2,
            startTag: location2
          };
          this.treeAdapter.setNodeSourceCodeLocation(element, loc);
        }
        if (this._shouldFosterParentOnInsertion()) {
          this._fosterParentElement(element);
        } else {
          const parent = this.openElements.currentTmplContentOrNode;
          this.treeAdapter.appendChild(parent !== null && parent !== void 0 ? parent : this.document, element);
        }
      }
      /**
       * For self-closing tags. Add an element to the tree, but skip adding it
       * to the stack.
       */
      /** @protected */
      _appendElement(token, namespaceURI) {
        const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
        this._attachElementToTree(element, token.location);
      }
      /** @protected */
      _insertElement(token, namespaceURI) {
        const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
        this._attachElementToTree(element, token.location);
        this.openElements.push(element, token.tagID);
      }
      /** @protected */
      _insertFakeElement(tagName, tagID) {
        const element = this.treeAdapter.createElement(tagName, NS.HTML, []);
        this._attachElementToTree(element, null);
        this.openElements.push(element, tagID);
      }
      /** @protected */
      _insertTemplate(token) {
        const tmpl = this.treeAdapter.createElement(token.tagName, NS.HTML, token.attrs);
        const content = this.treeAdapter.createDocumentFragment();
        this.treeAdapter.setTemplateContent(tmpl, content);
        this._attachElementToTree(tmpl, token.location);
        this.openElements.push(tmpl, token.tagID);
        if (this.options.sourceCodeLocationInfo)
          this.treeAdapter.setNodeSourceCodeLocation(content, null);
      }
      /** @protected */
      _insertFakeRootElement() {
        const element = this.treeAdapter.createElement(TAG_NAMES.HTML, NS.HTML, []);
        if (this.options.sourceCodeLocationInfo)
          this.treeAdapter.setNodeSourceCodeLocation(element, null);
        this.treeAdapter.appendChild(this.openElements.current, element);
        this.openElements.push(element, TAG_ID.HTML);
      }
      /** @protected */
      _appendCommentNode(token, parent) {
        const commentNode = this.treeAdapter.createCommentNode(token.data);
        this.treeAdapter.appendChild(parent, commentNode);
        if (this.options.sourceCodeLocationInfo) {
          this.treeAdapter.setNodeSourceCodeLocation(commentNode, token.location);
        }
      }
      /** @protected */
      _insertCharacters(token) {
        let parent;
        let beforeElement;
        if (this._shouldFosterParentOnInsertion()) {
          ({ parent, beforeElement } = this._findFosterParentingLocation());
          if (beforeElement) {
            this.treeAdapter.insertTextBefore(parent, token.chars, beforeElement);
          } else {
            this.treeAdapter.insertText(parent, token.chars);
          }
        } else {
          parent = this.openElements.currentTmplContentOrNode;
          this.treeAdapter.insertText(parent, token.chars);
        }
        if (!token.location)
          return;
        const siblings = this.treeAdapter.getChildNodes(parent);
        const textNodeIdx = beforeElement ? siblings.lastIndexOf(beforeElement) : siblings.length;
        const textNode = siblings[textNodeIdx - 1];
        const tnLoc = this.treeAdapter.getNodeSourceCodeLocation(textNode);
        if (tnLoc) {
          const { endLine, endCol, endOffset } = token.location;
          this.treeAdapter.updateNodeSourceCodeLocation(textNode, { endLine, endCol, endOffset });
        } else if (this.options.sourceCodeLocationInfo) {
          this.treeAdapter.setNodeSourceCodeLocation(textNode, token.location);
        }
      }
      /** @protected */
      _adoptNodes(donor, recipient) {
        for (let child = this.treeAdapter.getFirstChild(donor); child; child = this.treeAdapter.getFirstChild(donor)) {
          this.treeAdapter.detachNode(child);
          this.treeAdapter.appendChild(recipient, child);
        }
      }
      /** @protected */
      _setEndLocation(element, closingToken) {
        if (this.treeAdapter.getNodeSourceCodeLocation(element) && closingToken.location) {
          const ctLoc = closingToken.location;
          const tn = this.treeAdapter.getTagName(element);
          const endLoc = (
            // NOTE: For cases like <p> <p> </p> - First 'p' closes without a closing
            // tag and for cases like <td> <p> </td> - 'p' closes without a closing tag.
            closingToken.type === TokenType.END_TAG && tn === closingToken.tagName ? {
              endTag: { ...ctLoc },
              endLine: ctLoc.endLine,
              endCol: ctLoc.endCol,
              endOffset: ctLoc.endOffset
            } : {
              endLine: ctLoc.startLine,
              endCol: ctLoc.startCol,
              endOffset: ctLoc.startOffset
            }
          );
          this.treeAdapter.updateNodeSourceCodeLocation(element, endLoc);
        }
      }
      //Token processing
      shouldProcessStartTagTokenInForeignContent(token) {
        if (!this.currentNotInHTML)
          return false;
        let current;
        let currentTagId;
        if (this.openElements.stackTop === 0 && this.fragmentContext) {
          current = this.fragmentContext;
          currentTagId = this.fragmentContextID;
        } else {
          ({ current, currentTagId } = this.openElements);
        }
        if (token.tagID === TAG_ID.SVG && this.treeAdapter.getTagName(current) === TAG_NAMES.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(current) === NS.MATHML) {
          return false;
        }
        return (
          // Check that `current` is not an integration point for HTML or MathML elements.
          this.tokenizer.inForeignNode || // If it _is_ an integration point, then we might have to check that it is not an HTML
          // integration point.
          (token.tagID === TAG_ID.MGLYPH || token.tagID === TAG_ID.MALIGNMARK) && currentTagId !== void 0 && !this._isIntegrationPoint(currentTagId, current, NS.HTML)
        );
      }
      /** @protected */
      _processToken(token) {
        switch (token.type) {
          case TokenType.CHARACTER: {
            this.onCharacter(token);
            break;
          }
          case TokenType.NULL_CHARACTER: {
            this.onNullCharacter(token);
            break;
          }
          case TokenType.COMMENT: {
            this.onComment(token);
            break;
          }
          case TokenType.DOCTYPE: {
            this.onDoctype(token);
            break;
          }
          case TokenType.START_TAG: {
            this._processStartTag(token);
            break;
          }
          case TokenType.END_TAG: {
            this.onEndTag(token);
            break;
          }
          case TokenType.EOF: {
            this.onEof(token);
            break;
          }
          case TokenType.WHITESPACE_CHARACTER: {
            this.onWhitespaceCharacter(token);
            break;
          }
        }
      }
      //Integration points
      /** @protected */
      _isIntegrationPoint(tid, element, foreignNS) {
        const ns = this.treeAdapter.getNamespaceURI(element);
        const attrs = this.treeAdapter.getAttrList(element);
        return isIntegrationPoint(tid, ns, attrs, foreignNS);
      }
      //Active formatting elements reconstruction
      /** @protected */
      _reconstructActiveFormattingElements() {
        const listLength = this.activeFormattingElements.entries.length;
        if (listLength) {
          const endIndex = this.activeFormattingElements.entries.findIndex((entry) => entry.type === EntryType.Marker || this.openElements.contains(entry.element));
          const unopenIdx = endIndex === -1 ? listLength - 1 : endIndex - 1;
          for (let i = unopenIdx; i >= 0; i--) {
            const entry = this.activeFormattingElements.entries[i];
            this._insertElement(entry.token, this.treeAdapter.getNamespaceURI(entry.element));
            entry.element = this.openElements.current;
          }
        }
      }
      //Close elements
      /** @protected */
      _closeTableCell() {
        this.openElements.generateImpliedEndTags();
        this.openElements.popUntilTableCellPopped();
        this.activeFormattingElements.clearToLastMarker();
        this.insertionMode = InsertionMode.IN_ROW;
      }
      /** @protected */
      _closePElement() {
        this.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.P);
        this.openElements.popUntilTagNamePopped(TAG_ID.P);
      }
      //Insertion modes
      /** @protected */
      _resetInsertionMode() {
        for (let i = this.openElements.stackTop; i >= 0; i--) {
          switch (i === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[i]) {
            case TAG_ID.TR: {
              this.insertionMode = InsertionMode.IN_ROW;
              return;
            }
            case TAG_ID.TBODY:
            case TAG_ID.THEAD:
            case TAG_ID.TFOOT: {
              this.insertionMode = InsertionMode.IN_TABLE_BODY;
              return;
            }
            case TAG_ID.CAPTION: {
              this.insertionMode = InsertionMode.IN_CAPTION;
              return;
            }
            case TAG_ID.COLGROUP: {
              this.insertionMode = InsertionMode.IN_COLUMN_GROUP;
              return;
            }
            case TAG_ID.TABLE: {
              this.insertionMode = InsertionMode.IN_TABLE;
              return;
            }
            case TAG_ID.BODY: {
              this.insertionMode = InsertionMode.IN_BODY;
              return;
            }
            case TAG_ID.FRAMESET: {
              this.insertionMode = InsertionMode.IN_FRAMESET;
              return;
            }
            case TAG_ID.SELECT: {
              this._resetInsertionModeForSelect(i);
              return;
            }
            case TAG_ID.TEMPLATE: {
              this.insertionMode = this.tmplInsertionModeStack[0];
              return;
            }
            case TAG_ID.HTML: {
              this.insertionMode = this.headElement ? InsertionMode.AFTER_HEAD : InsertionMode.BEFORE_HEAD;
              return;
            }
            case TAG_ID.TD:
            case TAG_ID.TH: {
              if (i > 0) {
                this.insertionMode = InsertionMode.IN_CELL;
                return;
              }
              break;
            }
            case TAG_ID.HEAD: {
              if (i > 0) {
                this.insertionMode = InsertionMode.IN_HEAD;
                return;
              }
              break;
            }
          }
        }
        this.insertionMode = InsertionMode.IN_BODY;
      }
      /** @protected */
      _resetInsertionModeForSelect(selectIdx) {
        if (selectIdx > 0) {
          for (let i = selectIdx - 1; i > 0; i--) {
            const tn = this.openElements.tagIDs[i];
            if (tn === TAG_ID.TEMPLATE) {
              break;
            } else if (tn === TAG_ID.TABLE) {
              this.insertionMode = InsertionMode.IN_SELECT_IN_TABLE;
              return;
            }
          }
        }
        this.insertionMode = InsertionMode.IN_SELECT;
      }
      //Foster parenting
      /** @protected */
      _isElementCausesFosterParenting(tn) {
        return TABLE_STRUCTURE_TAGS.has(tn);
      }
      /** @protected */
      _shouldFosterParentOnInsertion() {
        return this.fosterParentingEnabled && this.openElements.currentTagId !== void 0 && this._isElementCausesFosterParenting(this.openElements.currentTagId);
      }
      /** @protected */
      _findFosterParentingLocation() {
        for (let i = this.openElements.stackTop; i >= 0; i--) {
          const openElement = this.openElements.items[i];
          switch (this.openElements.tagIDs[i]) {
            case TAG_ID.TEMPLATE: {
              if (this.treeAdapter.getNamespaceURI(openElement) === NS.HTML) {
                return { parent: this.treeAdapter.getTemplateContent(openElement), beforeElement: null };
              }
              break;
            }
            case TAG_ID.TABLE: {
              const parent = this.treeAdapter.getParentNode(openElement);
              if (parent) {
                return { parent, beforeElement: openElement };
              }
              return { parent: this.openElements.items[i - 1], beforeElement: null };
            }
            default:
          }
        }
        return { parent: this.openElements.items[0], beforeElement: null };
      }
      /** @protected */
      _fosterParentElement(element) {
        const location2 = this._findFosterParentingLocation();
        if (location2.beforeElement) {
          this.treeAdapter.insertBefore(location2.parent, element, location2.beforeElement);
        } else {
          this.treeAdapter.appendChild(location2.parent, element);
        }
      }
      //Special elements
      /** @protected */
      _isSpecialElement(element, id) {
        const ns = this.treeAdapter.getNamespaceURI(element);
        return SPECIAL_ELEMENTS[ns].has(id);
      }
      /** @internal */
      onCharacter(token) {
        this.skipNextNewLine = false;
        if (this.tokenizer.inForeignNode) {
          characterInForeignContent(this, token);
          return;
        }
        switch (this.insertionMode) {
          case InsertionMode.INITIAL: {
            tokenInInitialMode(this, token);
            break;
          }
          case InsertionMode.BEFORE_HTML: {
            tokenBeforeHtml(this, token);
            break;
          }
          case InsertionMode.BEFORE_HEAD: {
            tokenBeforeHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD: {
            tokenInHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD_NO_SCRIPT: {
            tokenInHeadNoScript(this, token);
            break;
          }
          case InsertionMode.AFTER_HEAD: {
            tokenAfterHead(this, token);
            break;
          }
          case InsertionMode.IN_BODY:
          case InsertionMode.IN_CAPTION:
          case InsertionMode.IN_CELL:
          case InsertionMode.IN_TEMPLATE: {
            characterInBody(this, token);
            break;
          }
          case InsertionMode.TEXT:
          case InsertionMode.IN_SELECT:
          case InsertionMode.IN_SELECT_IN_TABLE: {
            this._insertCharacters(token);
            break;
          }
          case InsertionMode.IN_TABLE:
          case InsertionMode.IN_TABLE_BODY:
          case InsertionMode.IN_ROW: {
            characterInTable(this, token);
            break;
          }
          case InsertionMode.IN_TABLE_TEXT: {
            characterInTableText(this, token);
            break;
          }
          case InsertionMode.IN_COLUMN_GROUP: {
            tokenInColumnGroup(this, token);
            break;
          }
          case InsertionMode.AFTER_BODY: {
            tokenAfterBody(this, token);
            break;
          }
          case InsertionMode.AFTER_AFTER_BODY: {
            tokenAfterAfterBody(this, token);
            break;
          }
          default:
        }
      }
      /** @internal */
      onNullCharacter(token) {
        this.skipNextNewLine = false;
        if (this.tokenizer.inForeignNode) {
          nullCharacterInForeignContent(this, token);
          return;
        }
        switch (this.insertionMode) {
          case InsertionMode.INITIAL: {
            tokenInInitialMode(this, token);
            break;
          }
          case InsertionMode.BEFORE_HTML: {
            tokenBeforeHtml(this, token);
            break;
          }
          case InsertionMode.BEFORE_HEAD: {
            tokenBeforeHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD: {
            tokenInHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD_NO_SCRIPT: {
            tokenInHeadNoScript(this, token);
            break;
          }
          case InsertionMode.AFTER_HEAD: {
            tokenAfterHead(this, token);
            break;
          }
          case InsertionMode.TEXT: {
            this._insertCharacters(token);
            break;
          }
          case InsertionMode.IN_TABLE:
          case InsertionMode.IN_TABLE_BODY:
          case InsertionMode.IN_ROW: {
            characterInTable(this, token);
            break;
          }
          case InsertionMode.IN_COLUMN_GROUP: {
            tokenInColumnGroup(this, token);
            break;
          }
          case InsertionMode.AFTER_BODY: {
            tokenAfterBody(this, token);
            break;
          }
          case InsertionMode.AFTER_AFTER_BODY: {
            tokenAfterAfterBody(this, token);
            break;
          }
          default:
        }
      }
      /** @internal */
      onComment(token) {
        this.skipNextNewLine = false;
        if (this.currentNotInHTML) {
          appendComment(this, token);
          return;
        }
        switch (this.insertionMode) {
          case InsertionMode.INITIAL:
          case InsertionMode.BEFORE_HTML:
          case InsertionMode.BEFORE_HEAD:
          case InsertionMode.IN_HEAD:
          case InsertionMode.IN_HEAD_NO_SCRIPT:
          case InsertionMode.AFTER_HEAD:
          case InsertionMode.IN_BODY:
          case InsertionMode.IN_TABLE:
          case InsertionMode.IN_CAPTION:
          case InsertionMode.IN_COLUMN_GROUP:
          case InsertionMode.IN_TABLE_BODY:
          case InsertionMode.IN_ROW:
          case InsertionMode.IN_CELL:
          case InsertionMode.IN_SELECT:
          case InsertionMode.IN_SELECT_IN_TABLE:
          case InsertionMode.IN_TEMPLATE:
          case InsertionMode.IN_FRAMESET:
          case InsertionMode.AFTER_FRAMESET: {
            appendComment(this, token);
            break;
          }
          case InsertionMode.IN_TABLE_TEXT: {
            tokenInTableText(this, token);
            break;
          }
          case InsertionMode.AFTER_BODY: {
            appendCommentToRootHtmlElement(this, token);
            break;
          }
          case InsertionMode.AFTER_AFTER_BODY:
          case InsertionMode.AFTER_AFTER_FRAMESET: {
            appendCommentToDocument(this, token);
            break;
          }
          default:
        }
      }
      /** @internal */
      onDoctype(token) {
        this.skipNextNewLine = false;
        switch (this.insertionMode) {
          case InsertionMode.INITIAL: {
            doctypeInInitialMode(this, token);
            break;
          }
          case InsertionMode.BEFORE_HEAD:
          case InsertionMode.IN_HEAD:
          case InsertionMode.IN_HEAD_NO_SCRIPT:
          case InsertionMode.AFTER_HEAD: {
            this._err(token, ERR.misplacedDoctype);
            break;
          }
          case InsertionMode.IN_TABLE_TEXT: {
            tokenInTableText(this, token);
            break;
          }
          default:
        }
      }
      /** @internal */
      onStartTag(token) {
        this.skipNextNewLine = false;
        this.currentToken = token;
        this._processStartTag(token);
        if (token.selfClosing && !token.ackSelfClosing) {
          this._err(token, ERR.nonVoidHtmlElementStartTagWithTrailingSolidus);
        }
      }
      /**
       * Processes a given start tag.
       *
       * `onStartTag` checks if a self-closing tag was recognized. When a token
       * is moved inbetween multiple insertion modes, this check for self-closing
       * could lead to false positives. To avoid this, `_processStartTag` is used
       * for nested calls.
       *
       * @param token The token to process.
       * @protected
       */
      _processStartTag(token) {
        if (this.shouldProcessStartTagTokenInForeignContent(token)) {
          startTagInForeignContent(this, token);
        } else {
          this._startTagOutsideForeignContent(token);
        }
      }
      /** @protected */
      _startTagOutsideForeignContent(token) {
        switch (this.insertionMode) {
          case InsertionMode.INITIAL: {
            tokenInInitialMode(this, token);
            break;
          }
          case InsertionMode.BEFORE_HTML: {
            startTagBeforeHtml(this, token);
            break;
          }
          case InsertionMode.BEFORE_HEAD: {
            startTagBeforeHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD: {
            startTagInHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD_NO_SCRIPT: {
            startTagInHeadNoScript(this, token);
            break;
          }
          case InsertionMode.AFTER_HEAD: {
            startTagAfterHead(this, token);
            break;
          }
          case InsertionMode.IN_BODY: {
            startTagInBody(this, token);
            break;
          }
          case InsertionMode.IN_TABLE: {
            startTagInTable(this, token);
            break;
          }
          case InsertionMode.IN_TABLE_TEXT: {
            tokenInTableText(this, token);
            break;
          }
          case InsertionMode.IN_CAPTION: {
            startTagInCaption(this, token);
            break;
          }
          case InsertionMode.IN_COLUMN_GROUP: {
            startTagInColumnGroup(this, token);
            break;
          }
          case InsertionMode.IN_TABLE_BODY: {
            startTagInTableBody(this, token);
            break;
          }
          case InsertionMode.IN_ROW: {
            startTagInRow(this, token);
            break;
          }
          case InsertionMode.IN_CELL: {
            startTagInCell(this, token);
            break;
          }
          case InsertionMode.IN_SELECT: {
            startTagInSelect(this, token);
            break;
          }
          case InsertionMode.IN_SELECT_IN_TABLE: {
            startTagInSelectInTable(this, token);
            break;
          }
          case InsertionMode.IN_TEMPLATE: {
            startTagInTemplate(this, token);
            break;
          }
          case InsertionMode.AFTER_BODY: {
            startTagAfterBody(this, token);
            break;
          }
          case InsertionMode.IN_FRAMESET: {
            startTagInFrameset(this, token);
            break;
          }
          case InsertionMode.AFTER_FRAMESET: {
            startTagAfterFrameset(this, token);
            break;
          }
          case InsertionMode.AFTER_AFTER_BODY: {
            startTagAfterAfterBody(this, token);
            break;
          }
          case InsertionMode.AFTER_AFTER_FRAMESET: {
            startTagAfterAfterFrameset(this, token);
            break;
          }
          default:
        }
      }
      /** @internal */
      onEndTag(token) {
        this.skipNextNewLine = false;
        this.currentToken = token;
        if (this.currentNotInHTML) {
          endTagInForeignContent(this, token);
        } else {
          this._endTagOutsideForeignContent(token);
        }
      }
      /** @protected */
      _endTagOutsideForeignContent(token) {
        switch (this.insertionMode) {
          case InsertionMode.INITIAL: {
            tokenInInitialMode(this, token);
            break;
          }
          case InsertionMode.BEFORE_HTML: {
            endTagBeforeHtml(this, token);
            break;
          }
          case InsertionMode.BEFORE_HEAD: {
            endTagBeforeHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD: {
            endTagInHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD_NO_SCRIPT: {
            endTagInHeadNoScript(this, token);
            break;
          }
          case InsertionMode.AFTER_HEAD: {
            endTagAfterHead(this, token);
            break;
          }
          case InsertionMode.IN_BODY: {
            endTagInBody(this, token);
            break;
          }
          case InsertionMode.TEXT: {
            endTagInText(this, token);
            break;
          }
          case InsertionMode.IN_TABLE: {
            endTagInTable(this, token);
            break;
          }
          case InsertionMode.IN_TABLE_TEXT: {
            tokenInTableText(this, token);
            break;
          }
          case InsertionMode.IN_CAPTION: {
            endTagInCaption(this, token);
            break;
          }
          case InsertionMode.IN_COLUMN_GROUP: {
            endTagInColumnGroup(this, token);
            break;
          }
          case InsertionMode.IN_TABLE_BODY: {
            endTagInTableBody(this, token);
            break;
          }
          case InsertionMode.IN_ROW: {
            endTagInRow(this, token);
            break;
          }
          case InsertionMode.IN_CELL: {
            endTagInCell(this, token);
            break;
          }
          case InsertionMode.IN_SELECT: {
            endTagInSelect(this, token);
            break;
          }
          case InsertionMode.IN_SELECT_IN_TABLE: {
            endTagInSelectInTable(this, token);
            break;
          }
          case InsertionMode.IN_TEMPLATE: {
            endTagInTemplate(this, token);
            break;
          }
          case InsertionMode.AFTER_BODY: {
            endTagAfterBody(this, token);
            break;
          }
          case InsertionMode.IN_FRAMESET: {
            endTagInFrameset(this, token);
            break;
          }
          case InsertionMode.AFTER_FRAMESET: {
            endTagAfterFrameset(this, token);
            break;
          }
          case InsertionMode.AFTER_AFTER_BODY: {
            tokenAfterAfterBody(this, token);
            break;
          }
          default:
        }
      }
      /** @internal */
      onEof(token) {
        switch (this.insertionMode) {
          case InsertionMode.INITIAL: {
            tokenInInitialMode(this, token);
            break;
          }
          case InsertionMode.BEFORE_HTML: {
            tokenBeforeHtml(this, token);
            break;
          }
          case InsertionMode.BEFORE_HEAD: {
            tokenBeforeHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD: {
            tokenInHead(this, token);
            break;
          }
          case InsertionMode.IN_HEAD_NO_SCRIPT: {
            tokenInHeadNoScript(this, token);
            break;
          }
          case InsertionMode.AFTER_HEAD: {
            tokenAfterHead(this, token);
            break;
          }
          case InsertionMode.IN_BODY:
          case InsertionMode.IN_TABLE:
          case InsertionMode.IN_CAPTION:
          case InsertionMode.IN_COLUMN_GROUP:
          case InsertionMode.IN_TABLE_BODY:
          case InsertionMode.IN_ROW:
          case InsertionMode.IN_CELL:
          case InsertionMode.IN_SELECT:
          case InsertionMode.IN_SELECT_IN_TABLE: {
            eofInBody(this, token);
            break;
          }
          case InsertionMode.TEXT: {
            eofInText(this, token);
            break;
          }
          case InsertionMode.IN_TABLE_TEXT: {
            tokenInTableText(this, token);
            break;
          }
          case InsertionMode.IN_TEMPLATE: {
            eofInTemplate(this, token);
            break;
          }
          case InsertionMode.AFTER_BODY:
          case InsertionMode.IN_FRAMESET:
          case InsertionMode.AFTER_FRAMESET:
          case InsertionMode.AFTER_AFTER_BODY:
          case InsertionMode.AFTER_AFTER_FRAMESET: {
            stopParsing(this, token);
            break;
          }
          default:
        }
      }
      /** @internal */
      onWhitespaceCharacter(token) {
        if (this.skipNextNewLine) {
          this.skipNextNewLine = false;
          if (token.chars.charCodeAt(0) === CODE_POINTS.LINE_FEED) {
            if (token.chars.length === 1) {
              return;
            }
            token.chars = token.chars.substr(1);
          }
        }
        if (this.tokenizer.inForeignNode) {
          this._insertCharacters(token);
          return;
        }
        switch (this.insertionMode) {
          case InsertionMode.IN_HEAD:
          case InsertionMode.IN_HEAD_NO_SCRIPT:
          case InsertionMode.AFTER_HEAD:
          case InsertionMode.TEXT:
          case InsertionMode.IN_COLUMN_GROUP:
          case InsertionMode.IN_SELECT:
          case InsertionMode.IN_SELECT_IN_TABLE:
          case InsertionMode.IN_FRAMESET:
          case InsertionMode.AFTER_FRAMESET: {
            this._insertCharacters(token);
            break;
          }
          case InsertionMode.IN_BODY:
          case InsertionMode.IN_CAPTION:
          case InsertionMode.IN_CELL:
          case InsertionMode.IN_TEMPLATE:
          case InsertionMode.AFTER_BODY:
          case InsertionMode.AFTER_AFTER_BODY:
          case InsertionMode.AFTER_AFTER_FRAMESET: {
            whitespaceCharacterInBody(this, token);
            break;
          }
          case InsertionMode.IN_TABLE:
          case InsertionMode.IN_TABLE_BODY:
          case InsertionMode.IN_ROW: {
            characterInTable(this, token);
            break;
          }
          case InsertionMode.IN_TABLE_TEXT: {
            whitespaceCharacterInTableText(this, token);
            break;
          }
          default:
        }
      }
    };
    TABLE_VOID_ELEMENTS = /* @__PURE__ */ new Set([TAG_ID.CAPTION, TAG_ID.COL, TAG_ID.COLGROUP, TAG_ID.TBODY, TAG_ID.TD, TAG_ID.TFOOT, TAG_ID.TH, TAG_ID.THEAD, TAG_ID.TR]);
  }
});

// ../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/serializer/index.js
var VOID_ELEMENTS;
var init_serializer = __esm({
  "../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/serializer/index.js"() {
    init_html();
    init_default();
    VOID_ELEMENTS = /* @__PURE__ */ new Set([
      TAG_NAMES.AREA,
      TAG_NAMES.BASE,
      TAG_NAMES.BASEFONT,
      TAG_NAMES.BGSOUND,
      TAG_NAMES.BR,
      TAG_NAMES.COL,
      TAG_NAMES.EMBED,
      TAG_NAMES.FRAME,
      TAG_NAMES.HR,
      TAG_NAMES.IMG,
      TAG_NAMES.INPUT,
      TAG_NAMES.KEYGEN,
      TAG_NAMES.LINK,
      TAG_NAMES.META,
      TAG_NAMES.PARAM,
      TAG_NAMES.SOURCE,
      TAG_NAMES.TRACK,
      TAG_NAMES.WBR
    ]);
  }
});

// ../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/index.js
function parseFragment(fragmentContext, html, options) {
  if (typeof fragmentContext === "string") {
    options = html;
    html = fragmentContext;
    fragmentContext = null;
  }
  const parser = Parser.getFragmentParser(fragmentContext, options);
  parser.tokenizer.write(html, true);
  return parser.getFragment();
}
var init_dist = __esm({
  "../../node_modules/.pnpm/parse5@8.0.1/node_modules/parse5/dist/index.js"() {
    init_parser();
    init_default();
    init_parser();
    init_serializer();
    init_error_codes();
    init_foreign_content();
    init_html();
    init_token();
    init_tokenizer();
  }
});

// ../../packages/core/src/render/reader/html-parser.ts
function parseHtml(html) {
  const fragment = parseFragment(html);
  const children = fragment.childNodes.map((c) => convertNode(c)).filter((n) => n !== void 0);
  return { children, type: "document" };
}
function walkElements(root) {
  const out = [];
  walk(root, out);
  return out;
}
function walk(node, out) {
  if (node.type === "element") out.push(node);
  if (node.type === "element" || node.type === "document") {
    for (const child of node.children) walk(child, out);
  }
}
function getInnerText(node) {
  return collapseWhitespace(getInnerTextRaw(node));
}
function getInnerTextRaw(node) {
  if (node.type === "text") return node.text;
  if (node.type === "element" || node.type === "document") {
    return node.children.map((c) => getInnerTextRaw(c)).join(" ");
  }
  return "";
}
function collapseWhitespace(text) {
  return text.replaceAll(/\s+/g, " ").trim();
}
function convertNode(node) {
  if (isTextNode(node)) {
    return { text: node.value, type: "text" };
  }
  if (isElementNode(node)) {
    const attributes = {};
    for (const attr of node.attrs) {
      attributes[attr.name] = attr.value;
    }
    const children = node.childNodes.map((c) => convertNode(c)).filter((c) => c !== void 0);
    return {
      attributes,
      children,
      tagName: node.tagName.toLowerCase(),
      type: "element"
    };
  }
  return void 0;
}
function isTextNode(node) {
  return node.nodeName === "#text";
}
function isElementNode(node) {
  return "tagName" in node && "attrs" in node && "childNodes" in node;
}
var init_html_parser = __esm({
  "../../packages/core/src/render/reader/html-parser.ts"() {
    init_dist();
  }
});

// ../../packages/core/src/render/reader/html-reader.ts
import { readFile } from "node:fs/promises";
function readHtmlTopicSync(html) {
  const document2 = parseHtml(html);
  const allElements = walkElements(document2);
  const bodyText = getInnerText(document2);
  const imageContent = extractImageContent(allElements);
  const elements = [];
  let topicAttributes = {};
  let topicSeen = false;
  for (const el of allElements) {
    if (el.tagName === "bv-topic" && !topicSeen) {
      topicAttributes = el.attributes;
      topicSeen = true;
    }
    if (!isRegisteredElementName(el.tagName)) continue;
    elements.push({ attributes: el.attributes, tag: el.tagName });
  }
  return { bodyText, elements, imageContent, topicAttributes };
}
function extractImageContent(elements) {
  const parts2 = [];
  for (const el of elements) {
    if (el.tagName !== "img") continue;
    const alt = (el.attributes.alt ?? "").trim();
    const src = (el.attributes.src ?? "").trim();
    if (alt.length > 0) parts2.push(alt);
    if (src.length > 0) parts2.push(src);
  }
  return parts2.join(" ");
}
async function readHtmlTopic(filePath) {
  const html = await readFile(filePath, "utf8");
  return readHtmlTopicSync(html);
}
function isRegisteredElementName(tag) {
  return ELEMENT_NAMES.includes(tag);
}
var init_html_reader = __esm({
  "../../packages/core/src/render/reader/html-reader.ts"() {
    init_element_types();
    init_html_parser();
  }
});

// ../../packages/core/src/render/writer/atomic-write.ts
import { mkdir, rename, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
async function writeFileAtomic(filePath, data) {
  await mkdir(dirname(filePath), { recursive: true });
  const tmp = `${filePath}.tmp-${process.pid}-${Date.now()}`;
  await writeFile(tmp, data);
  await rename(tmp, filePath);
}
var init_atomic_write = __esm({
  "../../packages/core/src/render/writer/atomic-write.ts"() {
  }
});

// ../../packages/core/src/render/writer/topic-attributes.ts
function escapeHtmlAttributeValue(value2) {
  return value2.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}
var init_topic_attributes = __esm({
  "../../packages/core/src/render/writer/topic-attributes.ts"() {
  }
});

// ../../packages/core/src/identity/topic-id.ts
var init_topic_id = __esm({
  "../../packages/core/src/identity/topic-id.ts"() {
    init_topic_attributes();
  }
});

// ../../packages/core/src/render/writer/html-writer.ts
var init_html_writer = __esm({
  "../../packages/core/src/render/writer/html-writer.ts"() {
    init_topic_id();
    init_element_types();
    init_registry();
    init_html_parser();
    init_atomic_write();
    init_schemas();
    init_topic_attributes();
    init_topic_attributes();
  }
});

// ../../packages/core/src/identity/uuid-v4.ts
function isUuidV4(value2) {
  return typeof value2 === "string" && UUID_V4_REGEX.test(value2);
}
var UUID_V4_REGEX;
var init_uuid_v4 = __esm({
  "../../packages/core/src/identity/uuid-v4.ts"() {
    UUID_V4_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
  }
});

// ../../packages/core/src/tree/paths.ts
import { homedir, platform } from "node:os";
import { basename, dirname as dirname5, isAbsolute, join as join4, resolve as resolve2, sep as sep2 } from "node:path";
function getGlobalDataDir() {
  const override = process.env.BRV_DATA_DIR;
  if (override) return override;
  const currentPlatform = platform();
  if (currentPlatform === "win32") {
    const localAppData = process.env.LOCALAPPDATA;
    return localAppData !== void 0 ? join4(localAppData, GLOBAL_DATA_DIRNAME) : join4(homedir(), "AppData", "Local", GLOBAL_DATA_DIRNAME);
  }
  if (currentPlatform === "darwin") {
    return join4(
      homedir(),
      "Library",
      "Application Support",
      GLOBAL_DATA_DIRNAME
    );
  }
  if (currentPlatform === "linux") {
    const xdgDataHome = process.env.XDG_DATA_HOME;
    if (xdgDataHome && isAbsolute(xdgDataHome)) {
      return join4(xdgDataHome, GLOBAL_DATA_DIRNAME);
    }
  }
  return join4(homedir(), ".local", "share", GLOBAL_DATA_DIRNAME);
}
function getProjectsDir() {
  return join4(getGlobalDataDir(), PROJECTS_DIRNAME);
}
function spaceContextTreePath(space_id) {
  return join4(
    getGlobalDataDir(),
    PROJECTS_DIRNAME,
    space_id,
    CONTEXT_TREE_DIRNAME
  );
}
function assertAbsolutePath(label, path) {
  if (!isAbsolute(path)) {
    throw new Error(`${label} must be absolute`);
  }
}
function assertValidSpaceId(spaceId) {
  if (!isUuidV4(spaceId) || isAbsolute(spaceId) || spaceId.includes("/") || spaceId.includes("\\") || spaceId === "." || spaceId === "..") {
    throw new Error(`invalid spaceId for sync state path: ${spaceId}`);
  }
}
function daemonSpaceStateDirForSpace(projectsRoot, spaceId) {
  assertAbsolutePath("projectsRoot", projectsRoot);
  assertValidSpaceId(spaceId);
  return join4(projectsRoot, DAEMON_DIRNAME, DAEMON_SPACES_DIRNAME, spaceId);
}
function syncStateDirForSpace(projectsRoot, spaceId) {
  return join4(
    daemonSpaceStateDirForSpace(projectsRoot, spaceId),
    SYNC_STATE_DIRNAME
  );
}
function syncStateDirForSpaceDir(spaceDir) {
  assertAbsolutePath("spaceDir", spaceDir);
  return syncStateDirForSpace(dirname5(spaceDir), basename(spaceDir));
}
function syncStateDirForContextTreeRoot(contextTreeRoot) {
  assertAbsolutePath("contextTreeRoot", contextTreeRoot);
  if (basename(contextTreeRoot) !== CONTEXT_TREE_DIRNAME) {
    throw new Error(
      `sync state can only be derived from a ${CONTEXT_TREE_DIRNAME} root`
    );
  }
  return syncStateDirForSpaceDir(dirname5(contextTreeRoot));
}
function resolveWithinTree(root, relPath) {
  const base = resolve2(root);
  const resolved = resolve2(base, relPath);
  if (resolved !== base && !resolved.startsWith(base + sep2)) {
    throw new Error(`Path escapes context-tree root: ${relPath}`);
  }
  return resolved;
}
var CONTEXT_TREE_DIRNAME, DAEMON_DIRNAME, DAEMON_SPACES_DIRNAME, SYNC_STATE_DIRNAME, PROJECTS_DIRNAME, GLOBAL_DATA_DIRNAME;
var init_paths = __esm({
  "../../packages/core/src/tree/paths.ts"() {
    init_uuid_v4();
    CONTEXT_TREE_DIRNAME = "context-tree";
    DAEMON_DIRNAME = ".daemon";
    DAEMON_SPACES_DIRNAME = "spaces";
    SYNC_STATE_DIRNAME = "sync";
    PROJECTS_DIRNAME = "projects";
    GLOBAL_DATA_DIRNAME = "brv";
  }
});

// ../../packages/core/src/tree/topics.ts
import { readdir as readdir3, rm as rm4 } from "node:fs/promises";
import { join as join5, relative, sep as sep3 } from "node:path";
function isDerivedArtifact(path) {
  return DERIVED_ARTIFACT_RE.test(path);
}
function estimateTokens(text) {
  return Math.ceil(text.trim().length / 4);
}
function normalizeRel(p) {
  return p.split(sep3).join("/");
}
async function walkHtml(root, dir, out) {
  const entries = await readdir3(dir, { withFileTypes: true }).catch(
    (err) => {
      if (err.code === "ENOENT") return [];
      throw err;
    }
  );
  for (const entry of entries) {
    const abs = join5(dir, entry.name);
    if (entry.isDirectory()) {
      await walkHtml(root, abs, out);
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      const rel = normalizeRel(relative(root, abs));
      if (rel !== INDEX_FILE && !isDerivedArtifact(rel)) out.push(rel);
    }
  }
}
async function listTopics(root) {
  const out = [];
  await walkHtml(root, root, out);
  return out.sort();
}
async function readTopic(root, relPath) {
  const abs = resolveWithinTree(root, relPath);
  const read = await readHtmlTopic(abs);
  return {
    attributes: read.topicAttributes,
    bodyText: read.bodyText,
    elements: read.elements,
    imageContent: read.imageContent,
    path: normalizeRel(relPath)
  };
}
var INDEX_FILE, DERIVED_ARTIFACT_RE;
var init_topics = __esm({
  "../../packages/core/src/tree/topics.ts"() {
    init_html_reader();
    init_html_writer();
    init_paths();
    INDEX_FILE = "index.html";
    DERIVED_ARTIFACT_RE = /\.(abstract|full|overview)\.html$/i;
  }
});

// ../../node_modules/.pnpm/xmlhttprequest-ssl@2.1.2/node_modules/xmlhttprequest-ssl/lib/XMLHttpRequest.js
var require_XMLHttpRequest = __commonJS({
  "../../node_modules/.pnpm/xmlhttprequest-ssl@2.1.2/node_modules/xmlhttprequest-ssl/lib/XMLHttpRequest.js"(exports, module) {
    var fs = __require("fs");
    var Url = __require("url");
    var spawn2 = __require("child_process").spawn;
    module.exports = XMLHttpRequest3;
    XMLHttpRequest3.XMLHttpRequest = XMLHttpRequest3;
    function XMLHttpRequest3(opts) {
      "use strict";
      opts = opts || {};
      var self = this;
      var http = __require("http");
      var https = __require("https");
      var request;
      var response;
      var settings = {};
      var disableHeaderCheck = false;
      var defaultHeaders = {
        "User-Agent": "node-XMLHttpRequest",
        "Accept": "*/*"
      };
      var headers = Object.assign({}, defaultHeaders);
      var forbiddenRequestHeaders = [
        "accept-charset",
        "accept-encoding",
        "access-control-request-headers",
        "access-control-request-method",
        "connection",
        "content-length",
        "content-transfer-encoding",
        "cookie",
        "cookie2",
        "date",
        "expect",
        "host",
        "keep-alive",
        "origin",
        "referer",
        "te",
        "trailer",
        "transfer-encoding",
        "upgrade",
        "via"
      ];
      var forbiddenRequestMethods = [
        "TRACE",
        "TRACK",
        "CONNECT"
      ];
      var sendFlag = false;
      var errorFlag = false;
      var abortedFlag = false;
      var listeners = {};
      this.UNSENT = 0;
      this.OPENED = 1;
      this.HEADERS_RECEIVED = 2;
      this.LOADING = 3;
      this.DONE = 4;
      this.readyState = this.UNSENT;
      this.onreadystatechange = null;
      this.responseText = "";
      this.responseXML = "";
      this.response = Buffer.alloc(0);
      this.status = null;
      this.statusText = null;
      var isAllowedHttpHeader = function(header) {
        return disableHeaderCheck || header && forbiddenRequestHeaders.indexOf(header.toLowerCase()) === -1;
      };
      var isAllowedHttpMethod = function(method) {
        return method && forbiddenRequestMethods.indexOf(method) === -1;
      };
      this.open = function(method, url2, async, user, password) {
        this.abort();
        errorFlag = false;
        abortedFlag = false;
        if (!isAllowedHttpMethod(method)) {
          throw new Error("SecurityError: Request method not allowed");
        }
        settings = {
          "method": method,
          "url": url2.toString(),
          "async": typeof async !== "boolean" ? true : async,
          "user": user || null,
          "password": password || null
        };
        setState(this.OPENED);
      };
      this.setDisableHeaderCheck = function(state) {
        disableHeaderCheck = state;
      };
      this.setRequestHeader = function(header, value2) {
        if (this.readyState != this.OPENED) {
          throw new Error("INVALID_STATE_ERR: setRequestHeader can only be called when state is OPEN");
        }
        if (!isAllowedHttpHeader(header)) {
          console.warn('Refused to set unsafe header "' + header + '"');
          return false;
        }
        if (sendFlag) {
          throw new Error("INVALID_STATE_ERR: send flag is true");
        }
        headers[header] = value2;
        return true;
      };
      this.getResponseHeader = function(header) {
        if (typeof header === "string" && this.readyState > this.OPENED && response.headers[header.toLowerCase()] && !errorFlag) {
          return response.headers[header.toLowerCase()];
        }
        return null;
      };
      this.getAllResponseHeaders = function() {
        if (this.readyState < this.HEADERS_RECEIVED || errorFlag) {
          return "";
        }
        var result = "";
        for (var i in response.headers) {
          if (i !== "set-cookie" && i !== "set-cookie2") {
            result += i + ": " + response.headers[i] + "\r\n";
          }
        }
        return result.substr(0, result.length - 2);
      };
      this.getRequestHeader = function(name) {
        if (typeof name === "string" && headers[name]) {
          return headers[name];
        }
        return "";
      };
      this.send = function(data) {
        if (this.readyState != this.OPENED) {
          throw new Error("INVALID_STATE_ERR: connection must be opened before send() is called");
        }
        if (sendFlag) {
          throw new Error("INVALID_STATE_ERR: send has already been called");
        }
        var ssl = false, local = false;
        var url2 = Url.parse(settings.url);
        var host;
        switch (url2.protocol) {
          case "https:":
            ssl = true;
          // SSL & non-SSL both need host, no break here.
          case "http:":
            host = url2.hostname;
            break;
          case "file:":
            local = true;
            break;
          case void 0:
          case "":
            host = "localhost";
            break;
          default:
            throw new Error("Protocol not supported.");
        }
        if (local) {
          if (settings.method !== "GET") {
            throw new Error("XMLHttpRequest: Only GET method is supported");
          }
          if (settings.async) {
            fs.readFile(unescape(url2.pathname), function(error, data2) {
              if (error) {
                self.handleError(error, error.errno || -1);
              } else {
                self.status = 200;
                self.responseText = data2.toString("utf8");
                self.response = data2;
                setState(self.DONE);
              }
            });
          } else {
            try {
              this.response = fs.readFileSync(unescape(url2.pathname));
              this.responseText = this.response.toString("utf8");
              this.status = 200;
              setState(self.DONE);
            } catch (e) {
              this.handleError(e, e.errno || -1);
            }
          }
          return;
        }
        var port = url2.port || (ssl ? 443 : 80);
        var uri = url2.pathname + (url2.search ? url2.search : "");
        headers["Host"] = host;
        if (!(ssl && port === 443 || port === 80)) {
          headers["Host"] += ":" + url2.port;
        }
        if (settings.user) {
          if (typeof settings.password == "undefined") {
            settings.password = "";
          }
          var authBuf = new Buffer(settings.user + ":" + settings.password);
          headers["Authorization"] = "Basic " + authBuf.toString("base64");
        }
        if (settings.method === "GET" || settings.method === "HEAD") {
          data = null;
        } else if (data) {
          headers["Content-Length"] = Buffer.isBuffer(data) ? data.length : Buffer.byteLength(data);
          var headersKeys = Object.keys(headers);
          if (!headersKeys.some(function(h) {
            return h.toLowerCase() === "content-type";
          })) {
            headers["Content-Type"] = "text/plain;charset=UTF-8";
          }
        } else if (settings.method === "POST") {
          headers["Content-Length"] = 0;
        }
        var agent = opts.agent || false;
        var options = {
          host,
          port,
          path: uri,
          method: settings.method,
          headers,
          agent
        };
        if (ssl) {
          options.pfx = opts.pfx;
          options.key = opts.key;
          options.passphrase = opts.passphrase;
          options.cert = opts.cert;
          options.ca = opts.ca;
          options.ciphers = opts.ciphers;
          options.rejectUnauthorized = opts.rejectUnauthorized === false ? false : true;
        }
        errorFlag = false;
        if (settings.async) {
          var doRequest = ssl ? https.request : http.request;
          sendFlag = true;
          self.dispatchEvent("readystatechange");
          var responseHandler = function(resp2) {
            response = resp2;
            if (response.statusCode === 302 || response.statusCode === 303 || response.statusCode === 307) {
              settings.url = response.headers.location;
              var url3 = Url.parse(settings.url);
              host = url3.hostname;
              var newOptions = {
                hostname: url3.hostname,
                port: url3.port,
                path: url3.path,
                method: response.statusCode === 303 ? "GET" : settings.method,
                headers
              };
              if (ssl) {
                newOptions.pfx = opts.pfx;
                newOptions.key = opts.key;
                newOptions.passphrase = opts.passphrase;
                newOptions.cert = opts.cert;
                newOptions.ca = opts.ca;
                newOptions.ciphers = opts.ciphers;
                newOptions.rejectUnauthorized = opts.rejectUnauthorized === false ? false : true;
              }
              request = doRequest(newOptions, responseHandler).on("error", errorHandler);
              request.end();
              return;
            }
            setState(self.HEADERS_RECEIVED);
            self.status = response.statusCode;
            response.on("data", function(chunk2) {
              if (chunk2) {
                var data2 = Buffer.from(chunk2);
                self.response = Buffer.concat([self.response, data2]);
              }
              if (sendFlag) {
                setState(self.LOADING);
              }
            });
            response.on("end", function() {
              if (sendFlag) {
                sendFlag = false;
                setState(self.DONE);
                self.responseText = self.response.toString("utf8");
              }
            });
            response.on("error", function(error) {
              self.handleError(error);
            });
          };
          var errorHandler = function(error) {
            if (request.reusedSocket && error.code === "ECONNRESET")
              return doRequest(options, responseHandler).on("error", errorHandler);
            self.handleError(error);
          };
          request = doRequest(options, responseHandler).on("error", errorHandler);
          if (opts.autoUnref) {
            request.on("socket", (socket) => {
              socket.unref();
            });
          }
          if (data) {
            request.write(data);
          }
          request.end();
          self.dispatchEvent("loadstart");
        } else {
          var contentFile = ".node-xmlhttprequest-content-" + process.pid;
          var syncFile = ".node-xmlhttprequest-sync-" + process.pid;
          fs.writeFileSync(syncFile, "", "utf8");
          var execString = "var http = require('http'), https = require('https'), fs = require('fs');var doRequest = http" + (ssl ? "s" : "") + ".request;var options = " + JSON.stringify(options) + ";var responseText = '';var responseData = Buffer.alloc(0);var req = doRequest(options, function(response) {response.on('data', function(chunk) {  var data = Buffer.from(chunk);  responseText += data.toString('utf8');  responseData = Buffer.concat([responseData, data]);});response.on('end', function() {fs.writeFileSync('" + contentFile + "', JSON.stringify({err: null, data: {statusCode: response.statusCode, headers: response.headers, text: responseText, data: responseData.toString('base64')}}), 'utf8');fs.unlinkSync('" + syncFile + "');});response.on('error', function(error) {fs.writeFileSync('" + contentFile + "', 'NODE-XMLHTTPREQUEST-ERROR:' + JSON.stringify(error), 'utf8');fs.unlinkSync('" + syncFile + "');});}).on('error', function(error) {fs.writeFileSync('" + contentFile + "', 'NODE-XMLHTTPREQUEST-ERROR:' + JSON.stringify(error), 'utf8');fs.unlinkSync('" + syncFile + "');});" + (data ? "req.write('" + JSON.stringify(data).slice(1, -1).replace(/'/g, "\\'") + "');" : "") + "req.end();";
          var syncProc = spawn2(process.argv[0], ["-e", execString]);
          var statusText;
          while (fs.existsSync(syncFile)) {
          }
          self.responseText = fs.readFileSync(contentFile, "utf8");
          syncProc.stdin.end();
          fs.unlinkSync(contentFile);
          if (self.responseText.match(/^NODE-XMLHTTPREQUEST-ERROR:/)) {
            var errorObj = JSON.parse(self.responseText.replace(/^NODE-XMLHTTPREQUEST-ERROR:/, ""));
            self.handleError(errorObj, 503);
          } else {
            self.status = self.responseText.replace(/^NODE-XMLHTTPREQUEST-STATUS:([0-9]*),.*/, "$1");
            var resp = JSON.parse(self.responseText.replace(/^NODE-XMLHTTPREQUEST-STATUS:[0-9]*,(.*)/, "$1"));
            response = {
              statusCode: self.status,
              headers: resp.data.headers
            };
            self.responseText = resp.data.text;
            self.response = Buffer.from(resp.data.data, "base64");
            setState(self.DONE, true);
          }
        }
      };
      this.handleError = function(error, status) {
        this.status = status || 0;
        this.statusText = error;
        this.responseText = error.stack;
        errorFlag = true;
        setState(this.DONE);
      };
      this.abort = function() {
        if (request) {
          request.abort();
          request = null;
        }
        headers = Object.assign({}, defaultHeaders);
        this.responseText = "";
        this.responseXML = "";
        this.response = Buffer.alloc(0);
        errorFlag = abortedFlag = true;
        if (this.readyState !== this.UNSENT && (this.readyState !== this.OPENED || sendFlag) && this.readyState !== this.DONE) {
          sendFlag = false;
          setState(this.DONE);
        }
        this.readyState = this.UNSENT;
      };
      this.addEventListener = function(event, callback) {
        if (!(event in listeners)) {
          listeners[event] = [];
        }
        listeners[event].push(callback);
      };
      this.removeEventListener = function(event, callback) {
        if (event in listeners) {
          listeners[event] = listeners[event].filter(function(ev) {
            return ev !== callback;
          });
        }
      };
      this.dispatchEvent = function(event) {
        if (typeof self["on" + event] === "function") {
          if (this.readyState === this.DONE && settings.async)
            setTimeout(function() {
              self["on" + event]();
            }, 0);
          else
            self["on" + event]();
        }
        if (event in listeners) {
          for (let i = 0, len = listeners[event].length; i < len; i++) {
            if (this.readyState === this.DONE)
              setTimeout(function() {
                listeners[event][i].call(self);
              }, 0);
            else
              listeners[event][i].call(self);
          }
        }
      };
      var setState = function(state) {
        if (self.readyState === state || self.readyState === self.UNSENT && abortedFlag)
          return;
        self.readyState = state;
        if (settings.async || self.readyState < self.OPENED || self.readyState === self.DONE) {
          self.dispatchEvent("readystatechange");
        }
        if (self.readyState === self.DONE) {
          let fire;
          if (abortedFlag)
            fire = "abort";
          else if (errorFlag)
            fire = "error";
          else
            fire = "load";
          self.dispatchEvent(fire);
          self.dispatchEvent("loadend");
        }
      };
    }
  }
});

// ../../node_modules/.pnpm/@socket.io+component-emitter@3.1.2/node_modules/@socket.io/component-emitter/lib/cjs/index.js
var require_cjs = __commonJS({
  "../../node_modules/.pnpm/@socket.io+component-emitter@3.1.2/node_modules/@socket.io/component-emitter/lib/cjs/index.js"(exports) {
    exports.Emitter = Emitter7;
    function Emitter7(obj) {
      if (obj) return mixin(obj);
    }
    function mixin(obj) {
      for (var key in Emitter7.prototype) {
        obj[key] = Emitter7.prototype[key];
      }
      return obj;
    }
    Emitter7.prototype.on = Emitter7.prototype.addEventListener = function(event, fn) {
      this._callbacks = this._callbacks || {};
      (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
      return this;
    };
    Emitter7.prototype.once = function(event, fn) {
      function on2() {
        this.off(event, on2);
        fn.apply(this, arguments);
      }
      on2.fn = fn;
      this.on(event, on2);
      return this;
    };
    Emitter7.prototype.off = Emitter7.prototype.removeListener = Emitter7.prototype.removeAllListeners = Emitter7.prototype.removeEventListener = function(event, fn) {
      this._callbacks = this._callbacks || {};
      if (0 == arguments.length) {
        this._callbacks = {};
        return this;
      }
      var callbacks = this._callbacks["$" + event];
      if (!callbacks) return this;
      if (1 == arguments.length) {
        delete this._callbacks["$" + event];
        return this;
      }
      var cb;
      for (var i = 0; i < callbacks.length; i++) {
        cb = callbacks[i];
        if (cb === fn || cb.fn === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }
      if (callbacks.length === 0) {
        delete this._callbacks["$" + event];
      }
      return this;
    };
    Emitter7.prototype.emit = function(event) {
      this._callbacks = this._callbacks || {};
      var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
      if (callbacks) {
        callbacks = callbacks.slice(0);
        for (var i = 0, len = callbacks.length; i < len; ++i) {
          callbacks[i].apply(this, args);
        }
      }
      return this;
    };
    Emitter7.prototype.emitReserved = Emitter7.prototype.emit;
    Emitter7.prototype.listeners = function(event) {
      this._callbacks = this._callbacks || {};
      return this._callbacks["$" + event] || [];
    };
    Emitter7.prototype.hasListeners = function(event) {
      return !!this.listeners(event).length;
    };
  }
});

// ../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js
var require_ms = __commonJS({
  "../../node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js"(exports, module) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type2 = typeof val;
      if (type2 === "string" && val.length > 0) {
        return parse3(val);
      } else if (type2 === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse3(str2) {
      str2 = String(str2);
      if (str2.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str2
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type2 = (match[2] || "ms").toLowerCase();
      switch (type2) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// ../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/common.js
var require_common = __commonJS({
  "../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/common.js"(exports, module) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce2;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug12(...args) {
          if (!debug12.enabled) {
            return;
          }
          const self = debug12;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self, args);
          const logFn = self.log || createDebug.log;
          logFn.apply(self, args);
        }
        debug12.namespace = namespace;
        debug12.useColors = createDebug.useColors();
        debug12.color = createDebug.selectColor(namespace);
        debug12.extend = extend3;
        debug12.destroy = createDebug.destroy;
        Object.defineProperty(debug12, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug12);
        }
        return debug12;
      }
      function extend3(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
        for (const ns of split) {
          if (ns[0] === "-") {
            createDebug.skips.push(ns.slice(1));
          } else {
            createDebug.names.push(ns);
          }
        }
      }
      function matchesTemplate(search2, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while (searchIndex < search2.length) {
          if (templateIndex < template.length && (template[templateIndex] === search2[searchIndex] || template[templateIndex] === "*")) {
            if (template[templateIndex] === "*") {
              starIndex = templateIndex;
              matchIndex = searchIndex;
              templateIndex++;
            } else {
              searchIndex++;
              templateIndex++;
            }
          } else if (starIndex !== -1) {
            templateIndex = starIndex + 1;
            matchIndex++;
            searchIndex = matchIndex;
          } else {
            return false;
          }
        }
        while (templateIndex < template.length && template[templateIndex] === "*") {
          templateIndex++;
        }
        return templateIndex === template.length;
      }
      function disable() {
        const namespaces = [
          ...createDebug.names,
          ...createDebug.skips.map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        for (const skip of createDebug.skips) {
          if (matchesTemplate(name, skip)) {
            return false;
          }
        }
        for (const ns of createDebug.names) {
          if (matchesTemplate(name, ns)) {
            return true;
          }
        }
        return false;
      }
      function coerce2(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module.exports = setup;
  }
});

// ../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/browser.js"(exports, module) {
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load2;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      let m;
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load2() {
      let r;
      try {
        r = exports.storage.getItem("debug") || exports.storage.getItem("DEBUG");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module.exports = require_common()(exports);
    var { formatters } = module.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// ../../node_modules/.pnpm/has-flag@4.0.0/node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "../../node_modules/.pnpm/has-flag@4.0.0/node_modules/has-flag/index.js"(exports, module) {
    "use strict";
    module.exports = (flag, argv = process.argv) => {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv.indexOf(prefix + flag);
      const terminatorPosition = argv.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    };
  }
});

// ../../node_modules/.pnpm/supports-color@7.2.0/node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "../../node_modules/.pnpm/supports-color@7.2.0/node_modules/supports-color/index.js"(exports, module) {
    "use strict";
    var os = __require("os");
    var tty = __require("tty");
    var hasFlag = require_has_flag();
    var { env } = process;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      forceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = 1;
    }
    if ("FORCE_COLOR" in env) {
      if (env.FORCE_COLOR === "true") {
        forceColor = 1;
      } else if (env.FORCE_COLOR === "false") {
        forceColor = 0;
      } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(haveStream, streamIsTTY) {
      if (forceColor === 0) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env.TERM === "dumb") {
        return min;
      }
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      return min;
    }
    function getSupportLevel(stream) {
      const level = supportsColor(stream, stream && stream.isTTY);
      return translateLevel(level);
    }
    module.exports = {
      supportsColor: getSupportLevel,
      stdout: translateLevel(supportsColor(true, tty.isatty(1))),
      stderr: translateLevel(supportsColor(true, tty.isatty(2)))
    };
  }
});

// ../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/node.js
var require_node = __commonJS({
  "../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/node.js"(exports, module) {
    var tty = __require("tty");
    var util2 = __require("util");
    exports.init = init;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load2;
    exports.useColors = useColors;
    exports.destroy = util2.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
    exports.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = require_supports_color();
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error) {
    }
    exports.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} \x1B[0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module.exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    function getDate() {
      if (exports.inspectOpts.hideDate) {
        return "";
      }
      return (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function log(...args) {
      return process.stderr.write(util2.formatWithOptions(exports.inspectOpts, ...args) + "\n");
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load2() {
      return process.env.DEBUG;
    }
    function init(debug12) {
      debug12.inspectOpts = {};
      const keys = Object.keys(exports.inspectOpts);
      for (let i = 0; i < keys.length; i++) {
        debug12.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    module.exports = require_common()(exports);
    var { formatters } = module.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util2.inspect(v, this.inspectOpts).split("\n").map((str2) => str2.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util2.inspect(v, this.inspectOpts);
    };
  }
});

// ../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/index.js
var require_src = __commonJS({
  "../../node_modules/.pnpm/debug@4.4.3/node_modules/debug/src/index.js"(exports, module) {
    if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
      module.exports = require_browser();
    } else {
      module.exports = require_node();
    }
  }
});

// ../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/constants.js
var require_constants = __commonJS({
  "../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/constants.js"(exports, module) {
    "use strict";
    var BINARY_TYPES = ["nodebuffer", "arraybuffer", "fragments"];
    var hasBlob = typeof Blob !== "undefined";
    if (hasBlob) BINARY_TYPES.push("blob");
    module.exports = {
      BINARY_TYPES,
      CLOSE_TIMEOUT: 3e4,
      EMPTY_BUFFER: Buffer.alloc(0),
      GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
      hasBlob,
      kForOnEventAttribute: Symbol("kIsForOnEventAttribute"),
      kListener: Symbol("kListener"),
      kStatusCode: Symbol("status-code"),
      kWebSocket: Symbol("websocket"),
      NOOP: () => {
      }
    };
  }
});

// ../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/buffer-util.js
var require_buffer_util = __commonJS({
  "../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/buffer-util.js"(exports, module) {
    "use strict";
    var { EMPTY_BUFFER } = require_constants();
    var FastBuffer = Buffer[Symbol.species];
    function concat(list, totalLength2) {
      if (list.length === 0) return EMPTY_BUFFER;
      if (list.length === 1) return list[0];
      const target = Buffer.allocUnsafe(totalLength2);
      let offset = 0;
      for (let i = 0; i < list.length; i++) {
        const buf = list[i];
        target.set(buf, offset);
        offset += buf.length;
      }
      if (offset < totalLength2) {
        return new FastBuffer(target.buffer, target.byteOffset, offset);
      }
      return target;
    }
    function _mask(source, mask, output, offset, length) {
      for (let i = 0; i < length; i++) {
        output[offset + i] = source[i] ^ mask[i & 3];
      }
    }
    function _unmask(buffer, mask) {
      for (let i = 0; i < buffer.length; i++) {
        buffer[i] ^= mask[i & 3];
      }
    }
    function toArrayBuffer(buf) {
      if (buf.length === buf.buffer.byteLength) {
        return buf.buffer;
      }
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
    }
    function toBuffer2(data) {
      toBuffer2.readOnly = true;
      if (Buffer.isBuffer(data)) return data;
      let buf;
      if (data instanceof ArrayBuffer) {
        buf = new FastBuffer(data);
      } else if (ArrayBuffer.isView(data)) {
        buf = new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
      } else {
        buf = Buffer.from(data);
        toBuffer2.readOnly = false;
      }
      return buf;
    }
    module.exports = {
      concat,
      mask: _mask,
      toArrayBuffer,
      toBuffer: toBuffer2,
      unmask: _unmask
    };
    if (!process.env.WS_NO_BUFFER_UTIL) {
      try {
        const bufferUtil = __require("bufferutil");
        module.exports.mask = function(source, mask, output, offset, length) {
          if (length < 48) _mask(source, mask, output, offset, length);
          else bufferUtil.mask(source, mask, output, offset, length);
        };
        module.exports.unmask = function(buffer, mask) {
          if (buffer.length < 32) _unmask(buffer, mask);
          else bufferUtil.unmask(buffer, mask);
        };
      } catch (e) {
      }
    }
  }
});

// ../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/limiter.js
var require_limiter = __commonJS({
  "../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/limiter.js"(exports, module) {
    "use strict";
    var kDone = Symbol("kDone");
    var kRun = Symbol("kRun");
    var Limiter = class {
      /**
       * Creates a new `Limiter`.
       *
       * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
       *     to run concurrently
       */
      constructor(concurrency) {
        this[kDone] = () => {
          this.pending--;
          this[kRun]();
        };
        this.concurrency = concurrency || Infinity;
        this.jobs = [];
        this.pending = 0;
      }
      /**
       * Adds a job to the queue.
       *
       * @param {Function} job The job to run
       * @public
       */
      add(job) {
        this.jobs.push(job);
        this[kRun]();
      }
      /**
       * Removes a job from the queue and runs it if possible.
       *
       * @private
       */
      [kRun]() {
        if (this.pending === this.concurrency) return;
        if (this.jobs.length) {
          const job = this.jobs.shift();
          this.pending++;
          job(this[kDone]);
        }
      }
    };
    module.exports = Limiter;
  }
});

// ../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/permessage-deflate.js
var require_permessage_deflate = __commonJS({
  "../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/permessage-deflate.js"(exports, module) {
    "use strict";
    var zlib = __require("zlib");
    var bufferUtil = require_buffer_util();
    var Limiter = require_limiter();
    var { kStatusCode } = require_constants();
    var FastBuffer = Buffer[Symbol.species];
    var TRAILER = Buffer.from([0, 0, 255, 255]);
    var kPerMessageDeflate = Symbol("permessage-deflate");
    var kTotalLength = Symbol("total-length");
    var kCallback = Symbol("callback");
    var kBuffers = Symbol("buffers");
    var kError = Symbol("error");
    var zlibLimiter;
    var PerMessageDeflate2 = class {
      /**
       * Creates a PerMessageDeflate instance.
       *
       * @param {Object} [options] Configuration options
       * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
       *     for, or request, a custom client window size
       * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
       *     acknowledge disabling of client context takeover
       * @param {Number} [options.concurrencyLimit=10] The number of concurrent
       *     calls to zlib
       * @param {Boolean} [options.isServer=false] Create the instance in either
       *     server or client mode
       * @param {Number} [options.maxPayload=0] The maximum allowed message length
       * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
       *     use of a custom server window size
       * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
       *     disabling of server context takeover
       * @param {Number} [options.threshold=1024] Size (in bytes) below which
       *     messages should not be compressed if context takeover is disabled
       * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
       *     deflate
       * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
       *     inflate
       */
      constructor(options) {
        this._options = options || {};
        this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024;
        this._maxPayload = this._options.maxPayload | 0;
        this._isServer = !!this._options.isServer;
        this._deflate = null;
        this._inflate = null;
        this.params = null;
        if (!zlibLimiter) {
          const concurrency = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
          zlibLimiter = new Limiter(concurrency);
        }
      }
      /**
       * @type {String}
       */
      static get extensionName() {
        return "permessage-deflate";
      }
      /**
       * Create an extension negotiation offer.
       *
       * @return {Object} Extension parameters
       * @public
       */
      offer() {
        const params = {};
        if (this._options.serverNoContextTakeover) {
          params.server_no_context_takeover = true;
        }
        if (this._options.clientNoContextTakeover) {
          params.client_no_context_takeover = true;
        }
        if (this._options.serverMaxWindowBits) {
          params.server_max_window_bits = this._options.serverMaxWindowBits;
        }
        if (this._options.clientMaxWindowBits) {
          params.client_max_window_bits = this._options.clientMaxWindowBits;
        } else if (this._options.clientMaxWindowBits == null) {
          params.client_max_window_bits = true;
        }
        return params;
      }
      /**
       * Accept an extension negotiation offer/response.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Object} Accepted configuration
       * @public
       */
      accept(configurations) {
        configurations = this.normalizeParams(configurations);
        this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
        return this.params;
      }
      /**
       * Releases all resources used by the extension.
       *
       * @public
       */
      cleanup() {
        if (this._inflate) {
          this._inflate.close();
          this._inflate = null;
        }
        if (this._deflate) {
          const callback = this._deflate[kCallback];
          this._deflate.close();
          this._deflate = null;
          if (callback) {
            callback(
              new Error(
                "The deflate stream was closed while data was being processed"
              )
            );
          }
        }
      }
      /**
       *  Accept an extension negotiation offer.
       *
       * @param {Array} offers The extension negotiation offers
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsServer(offers) {
        const opts = this._options;
        const accepted = offers.find((params) => {
          if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === "number" && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === "number" && !params.client_max_window_bits) {
            return false;
          }
          return true;
        });
        if (!accepted) {
          throw new Error("None of the extension offers can be accepted");
        }
        if (opts.serverNoContextTakeover) {
          accepted.server_no_context_takeover = true;
        }
        if (opts.clientNoContextTakeover) {
          accepted.client_no_context_takeover = true;
        }
        if (typeof opts.serverMaxWindowBits === "number") {
          accepted.server_max_window_bits = opts.serverMaxWindowBits;
        }
        if (typeof opts.clientMaxWindowBits === "number") {
          accepted.client_max_window_bits = opts.clientMaxWindowBits;
        } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
          delete accepted.client_max_window_bits;
        }
        return accepted;
      }
      /**
       * Accept the extension negotiation response.
       *
       * @param {Array} response The extension negotiation response
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsClient(response) {
        const params = response[0];
        if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
          throw new Error('Unexpected parameter "client_no_context_takeover"');
        }
        if (!params.client_max_window_bits) {
          if (typeof this._options.clientMaxWindowBits === "number") {
            params.client_max_window_bits = this._options.clientMaxWindowBits;
          }
        } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === "number" && params.client_max_window_bits > this._options.clientMaxWindowBits) {
          throw new Error(
            'Unexpected or invalid parameter "client_max_window_bits"'
          );
        }
        return params;
      }
      /**
       * Normalize parameters.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Array} The offers/response with normalized parameters
       * @private
       */
      normalizeParams(configurations) {
        configurations.forEach((params) => {
          Object.keys(params).forEach((key) => {
            let value2 = params[key];
            if (value2.length > 1) {
              throw new Error(`Parameter "${key}" must have only a single value`);
            }
            value2 = value2[0];
            if (key === "client_max_window_bits") {
              if (value2 !== true) {
                const num = +value2;
                if (!Number.isInteger(num) || num < 8 || num > 15) {
                  throw new TypeError(
                    `Invalid value for parameter "${key}": ${value2}`
                  );
                }
                value2 = num;
              } else if (!this._isServer) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value2}`
                );
              }
            } else if (key === "server_max_window_bits") {
              const num = +value2;
              if (!Number.isInteger(num) || num < 8 || num > 15) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value2}`
                );
              }
              value2 = num;
            } else if (key === "client_no_context_takeover" || key === "server_no_context_takeover") {
              if (value2 !== true) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value2}`
                );
              }
            } else {
              throw new Error(`Unknown parameter "${key}"`);
            }
            params[key] = value2;
          });
        });
        return configurations;
      }
      /**
       * Decompress data. Concurrency limited.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      decompress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._decompress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      /**
       * Compress data. Concurrency limited.
       *
       * @param {(Buffer|String)} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      compress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._compress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      /**
       * Decompress data.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _decompress(data, fin, callback) {
        const endpoint = this._isServer ? "client" : "server";
        if (!this._inflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._inflate = zlib.createInflateRaw({
            ...this._options.zlibInflateOptions,
            windowBits
          });
          this._inflate[kPerMessageDeflate] = this;
          this._inflate[kTotalLength] = 0;
          this._inflate[kBuffers] = [];
          this._inflate.on("error", inflateOnError);
          this._inflate.on("data", inflateOnData);
        }
        this._inflate[kCallback] = callback;
        this._inflate.write(data);
        if (fin) this._inflate.write(TRAILER);
        this._inflate.flush(() => {
          const err = this._inflate[kError];
          if (err) {
            this._inflate.close();
            this._inflate = null;
            callback(err);
            return;
          }
          const data2 = bufferUtil.concat(
            this._inflate[kBuffers],
            this._inflate[kTotalLength]
          );
          if (this._inflate._readableState.endEmitted) {
            this._inflate.close();
            this._inflate = null;
          } else {
            this._inflate[kTotalLength] = 0;
            this._inflate[kBuffers] = [];
            if (fin && this.params[`${endpoint}_no_context_takeover`]) {
              this._inflate.reset();
            }
          }
          callback(null, data2);
        });
      }
      /**
       * Compress data.
       *
       * @param {(Buffer|String)} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _compress(data, fin, callback) {
        const endpoint = this._isServer ? "server" : "client";
        if (!this._deflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._deflate = zlib.createDeflateRaw({
            ...this._options.zlibDeflateOptions,
            windowBits
          });
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          this._deflate.on("data", deflateOnData);
        }
        this._deflate[kCallback] = callback;
        this._deflate.write(data);
        this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
          if (!this._deflate) {
            return;
          }
          let data2 = bufferUtil.concat(
            this._deflate[kBuffers],
            this._deflate[kTotalLength]
          );
          if (fin) {
            data2 = new FastBuffer(data2.buffer, data2.byteOffset, data2.length - 4);
          }
          this._deflate[kCallback] = null;
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          if (fin && this.params[`${endpoint}_no_context_takeover`]) {
            this._deflate.reset();
          }
          callback(null, data2);
        });
      }
    };
    module.exports = PerMessageDeflate2;
    function deflateOnData(chunk2) {
      this[kBuffers].push(chunk2);
      this[kTotalLength] += chunk2.length;
    }
    function inflateOnData(chunk2) {
      this[kTotalLength] += chunk2.length;
      if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
        this[kBuffers].push(chunk2);
        return;
      }
      this[kError] = new RangeError("Max payload size exceeded");
      this[kError].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH";
      this[kError][kStatusCode] = 1009;
      this.removeListener("data", inflateOnData);
      this.reset();
    }
    function inflateOnError(err) {
      this[kPerMessageDeflate]._inflate = null;
      if (this[kError]) {
        this[kCallback](this[kError]);
        return;
      }
      err[kStatusCode] = 1007;
      this[kCallback](err);
    }
  }
});

// ../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/validation.js
var require_validation = __commonJS({
  "../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/validation.js"(exports, module) {
    "use strict";
    var { isUtf8 } = __require("buffer");
    var { hasBlob } = require_constants();
    var tokenChars = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 0 - 15
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 16 - 31
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      // 32 - 47
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      // 48 - 63
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 64 - 79
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      // 80 - 95
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 96 - 111
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0
      // 112 - 127
    ];
    function isValidStatusCode(code) {
      return code >= 1e3 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3e3 && code <= 4999;
    }
    function _isValidUTF8(buf) {
      const len = buf.length;
      let i = 0;
      while (i < len) {
        if ((buf[i] & 128) === 0) {
          i++;
        } else if ((buf[i] & 224) === 192) {
          if (i + 1 === len || (buf[i + 1] & 192) !== 128 || (buf[i] & 254) === 192) {
            return false;
          }
          i += 2;
        } else if ((buf[i] & 240) === 224) {
          if (i + 2 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || buf[i] === 224 && (buf[i + 1] & 224) === 128 || // Overlong
          buf[i] === 237 && (buf[i + 1] & 224) === 160) {
            return false;
          }
          i += 3;
        } else if ((buf[i] & 248) === 240) {
          if (i + 3 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || (buf[i + 3] & 192) !== 128 || buf[i] === 240 && (buf[i + 1] & 240) === 128 || // Overlong
          buf[i] === 244 && buf[i + 1] > 143 || buf[i] > 244) {
            return false;
          }
          i += 4;
        } else {
          return false;
        }
      }
      return true;
    }
    function isBlob(value2) {
      return hasBlob && typeof value2 === "object" && typeof value2.arrayBuffer === "function" && typeof value2.type === "string" && typeof value2.stream === "function" && (value2[Symbol.toStringTag] === "Blob" || value2[Symbol.toStringTag] === "File");
    }
    module.exports = {
      isBlob,
      isValidStatusCode,
      isValidUTF8: _isValidUTF8,
      tokenChars
    };
    if (isUtf8) {
      module.exports.isValidUTF8 = function(buf) {
        return buf.length < 24 ? _isValidUTF8(buf) : isUtf8(buf);
      };
    } else if (!process.env.WS_NO_UTF_8_VALIDATE) {
      try {
        const isValidUTF8 = __require("utf-8-validate");
        module.exports.isValidUTF8 = function(buf) {
          return buf.length < 32 ? _isValidUTF8(buf) : isValidUTF8(buf);
        };
      } catch (e) {
      }
    }
  }
});

// ../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/receiver.js
var require_receiver = __commonJS({
  "../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/receiver.js"(exports, module) {
    "use strict";
    var { Writable } = __require("stream");
    var PerMessageDeflate2 = require_permessage_deflate();
    var {
      BINARY_TYPES,
      EMPTY_BUFFER,
      kStatusCode,
      kWebSocket
    } = require_constants();
    var { concat, toArrayBuffer, unmask } = require_buffer_util();
    var { isValidStatusCode, isValidUTF8 } = require_validation();
    var FastBuffer = Buffer[Symbol.species];
    var GET_INFO = 0;
    var GET_PAYLOAD_LENGTH_16 = 1;
    var GET_PAYLOAD_LENGTH_64 = 2;
    var GET_MASK = 3;
    var GET_DATA = 4;
    var INFLATING = 5;
    var DEFER_EVENT = 6;
    var Receiver2 = class extends Writable {
      /**
       * Creates a Receiver instance.
       *
       * @param {Object} [options] Options object
       * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {String} [options.binaryType=nodebuffer] The type for binary data
       * @param {Object} [options.extensions] An object containing the negotiated
       *     extensions
       * @param {Boolean} [options.isServer=false] Specifies whether to operate in
       *     client or server mode
       * @param {Number} [options.maxPayload=0] The maximum allowed message length
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       */
      constructor(options = {}) {
        super();
        this._allowSynchronousEvents = options.allowSynchronousEvents !== void 0 ? options.allowSynchronousEvents : true;
        this._binaryType = options.binaryType || BINARY_TYPES[0];
        this._extensions = options.extensions || {};
        this._isServer = !!options.isServer;
        this._maxPayload = options.maxPayload | 0;
        this._skipUTF8Validation = !!options.skipUTF8Validation;
        this[kWebSocket] = void 0;
        this._bufferedBytes = 0;
        this._buffers = [];
        this._compressed = false;
        this._payloadLength = 0;
        this._mask = void 0;
        this._fragmented = 0;
        this._masked = false;
        this._fin = false;
        this._opcode = 0;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragments = [];
        this._errored = false;
        this._loop = false;
        this._state = GET_INFO;
      }
      /**
       * Implements `Writable.prototype._write()`.
       *
       * @param {Buffer} chunk The chunk of data to write
       * @param {String} encoding The character encoding of `chunk`
       * @param {Function} cb Callback
       * @private
       */
      _write(chunk2, encoding, cb) {
        if (this._opcode === 8 && this._state == GET_INFO) return cb();
        this._bufferedBytes += chunk2.length;
        this._buffers.push(chunk2);
        this.startLoop(cb);
      }
      /**
       * Consumes `n` bytes from the buffered data.
       *
       * @param {Number} n The number of bytes to consume
       * @return {Buffer} The consumed bytes
       * @private
       */
      consume(n) {
        this._bufferedBytes -= n;
        if (n === this._buffers[0].length) return this._buffers.shift();
        if (n < this._buffers[0].length) {
          const buf = this._buffers[0];
          this._buffers[0] = new FastBuffer(
            buf.buffer,
            buf.byteOffset + n,
            buf.length - n
          );
          return new FastBuffer(buf.buffer, buf.byteOffset, n);
        }
        const dst = Buffer.allocUnsafe(n);
        do {
          const buf = this._buffers[0];
          const offset = dst.length - n;
          if (n >= buf.length) {
            dst.set(this._buffers.shift(), offset);
          } else {
            dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
            this._buffers[0] = new FastBuffer(
              buf.buffer,
              buf.byteOffset + n,
              buf.length - n
            );
          }
          n -= buf.length;
        } while (n > 0);
        return dst;
      }
      /**
       * Starts the parsing loop.
       *
       * @param {Function} cb Callback
       * @private
       */
      startLoop(cb) {
        this._loop = true;
        do {
          switch (this._state) {
            case GET_INFO:
              this.getInfo(cb);
              break;
            case GET_PAYLOAD_LENGTH_16:
              this.getPayloadLength16(cb);
              break;
            case GET_PAYLOAD_LENGTH_64:
              this.getPayloadLength64(cb);
              break;
            case GET_MASK:
              this.getMask();
              break;
            case GET_DATA:
              this.getData(cb);
              break;
            case INFLATING:
            case DEFER_EVENT:
              this._loop = false;
              return;
          }
        } while (this._loop);
        if (!this._errored) cb();
      }
      /**
       * Reads the first two bytes of a frame.
       *
       * @param {Function} cb Callback
       * @private
       */
      getInfo(cb) {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        const buf = this.consume(2);
        if ((buf[0] & 48) !== 0) {
          const error = this.createError(
            RangeError,
            "RSV2 and RSV3 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_2_3"
          );
          cb(error);
          return;
        }
        const compressed = (buf[0] & 64) === 64;
        if (compressed && !this._extensions[PerMessageDeflate2.extensionName]) {
          const error = this.createError(
            RangeError,
            "RSV1 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_1"
          );
          cb(error);
          return;
        }
        this._fin = (buf[0] & 128) === 128;
        this._opcode = buf[0] & 15;
        this._payloadLength = buf[1] & 127;
        if (this._opcode === 0) {
          if (compressed) {
            const error = this.createError(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
            cb(error);
            return;
          }
          if (!this._fragmented) {
            const error = this.createError(
              RangeError,
              "invalid opcode 0",
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
            cb(error);
            return;
          }
          this._opcode = this._fragmented;
        } else if (this._opcode === 1 || this._opcode === 2) {
          if (this._fragmented) {
            const error = this.createError(
              RangeError,
              `invalid opcode ${this._opcode}`,
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
            cb(error);
            return;
          }
          this._compressed = compressed;
        } else if (this._opcode > 7 && this._opcode < 11) {
          if (!this._fin) {
            const error = this.createError(
              RangeError,
              "FIN must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_FIN"
            );
            cb(error);
            return;
          }
          if (compressed) {
            const error = this.createError(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
            cb(error);
            return;
          }
          if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
            const error = this.createError(
              RangeError,
              `invalid payload length ${this._payloadLength}`,
              true,
              1002,
              "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"
            );
            cb(error);
            return;
          }
        } else {
          const error = this.createError(
            RangeError,
            `invalid opcode ${this._opcode}`,
            true,
            1002,
            "WS_ERR_INVALID_OPCODE"
          );
          cb(error);
          return;
        }
        if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
        this._masked = (buf[1] & 128) === 128;
        if (this._isServer) {
          if (!this._masked) {
            const error = this.createError(
              RangeError,
              "MASK must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_MASK"
            );
            cb(error);
            return;
          }
        } else if (this._masked) {
          const error = this.createError(
            RangeError,
            "MASK must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_MASK"
          );
          cb(error);
          return;
        }
        if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
        else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
        else this.haveLength(cb);
      }
      /**
       * Gets extended payload length (7+16).
       *
       * @param {Function} cb Callback
       * @private
       */
      getPayloadLength16(cb) {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        this._payloadLength = this.consume(2).readUInt16BE(0);
        this.haveLength(cb);
      }
      /**
       * Gets extended payload length (7+64).
       *
       * @param {Function} cb Callback
       * @private
       */
      getPayloadLength64(cb) {
        if (this._bufferedBytes < 8) {
          this._loop = false;
          return;
        }
        const buf = this.consume(8);
        const num = buf.readUInt32BE(0);
        if (num > Math.pow(2, 53 - 32) - 1) {
          const error = this.createError(
            RangeError,
            "Unsupported WebSocket frame: payload length > 2^53 - 1",
            false,
            1009,
            "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH"
          );
          cb(error);
          return;
        }
        this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
        this.haveLength(cb);
      }
      /**
       * Payload length has been read.
       *
       * @param {Function} cb Callback
       * @private
       */
      haveLength(cb) {
        if (this._payloadLength && this._opcode < 8) {
          this._totalPayloadLength += this._payloadLength;
          if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
            const error = this.createError(
              RangeError,
              "Max payload size exceeded",
              false,
              1009,
              "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
            );
            cb(error);
            return;
          }
        }
        if (this._masked) this._state = GET_MASK;
        else this._state = GET_DATA;
      }
      /**
       * Reads mask bytes.
       *
       * @private
       */
      getMask() {
        if (this._bufferedBytes < 4) {
          this._loop = false;
          return;
        }
        this._mask = this.consume(4);
        this._state = GET_DATA;
      }
      /**
       * Reads data bytes.
       *
       * @param {Function} cb Callback
       * @private
       */
      getData(cb) {
        let data = EMPTY_BUFFER;
        if (this._payloadLength) {
          if (this._bufferedBytes < this._payloadLength) {
            this._loop = false;
            return;
          }
          data = this.consume(this._payloadLength);
          if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) {
            unmask(data, this._mask);
          }
        }
        if (this._opcode > 7) {
          this.controlMessage(data, cb);
          return;
        }
        if (this._compressed) {
          this._state = INFLATING;
          this.decompress(data, cb);
          return;
        }
        if (data.length) {
          this._messageLength = this._totalPayloadLength;
          this._fragments.push(data);
        }
        this.dataMessage(cb);
      }
      /**
       * Decompresses data.
       *
       * @param {Buffer} data Compressed data
       * @param {Function} cb Callback
       * @private
       */
      decompress(data, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate2.extensionName];
        perMessageDeflate.decompress(data, this._fin, (err, buf) => {
          if (err) return cb(err);
          if (buf.length) {
            this._messageLength += buf.length;
            if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
              const error = this.createError(
                RangeError,
                "Max payload size exceeded",
                false,
                1009,
                "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
              );
              cb(error);
              return;
            }
            this._fragments.push(buf);
          }
          this.dataMessage(cb);
          if (this._state === GET_INFO) this.startLoop(cb);
        });
      }
      /**
       * Handles a data message.
       *
       * @param {Function} cb Callback
       * @private
       */
      dataMessage(cb) {
        if (!this._fin) {
          this._state = GET_INFO;
          return;
        }
        const messageLength = this._messageLength;
        const fragments = this._fragments;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragmented = 0;
        this._fragments = [];
        if (this._opcode === 2) {
          let data;
          if (this._binaryType === "nodebuffer") {
            data = concat(fragments, messageLength);
          } else if (this._binaryType === "arraybuffer") {
            data = toArrayBuffer(concat(fragments, messageLength));
          } else if (this._binaryType === "blob") {
            data = new Blob(fragments);
          } else {
            data = fragments;
          }
          if (this._allowSynchronousEvents) {
            this.emit("message", data, true);
            this._state = GET_INFO;
          } else {
            this._state = DEFER_EVENT;
            setImmediate(() => {
              this.emit("message", data, true);
              this._state = GET_INFO;
              this.startLoop(cb);
            });
          }
        } else {
          const buf = concat(fragments, messageLength);
          if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
            const error = this.createError(
              Error,
              "invalid UTF-8 sequence",
              true,
              1007,
              "WS_ERR_INVALID_UTF8"
            );
            cb(error);
            return;
          }
          if (this._state === INFLATING || this._allowSynchronousEvents) {
            this.emit("message", buf, false);
            this._state = GET_INFO;
          } else {
            this._state = DEFER_EVENT;
            setImmediate(() => {
              this.emit("message", buf, false);
              this._state = GET_INFO;
              this.startLoop(cb);
            });
          }
        }
      }
      /**
       * Handles a control message.
       *
       * @param {Buffer} data Data to handle
       * @return {(Error|RangeError|undefined)} A possible error
       * @private
       */
      controlMessage(data, cb) {
        if (this._opcode === 8) {
          if (data.length === 0) {
            this._loop = false;
            this.emit("conclude", 1005, EMPTY_BUFFER);
            this.end();
          } else {
            const code = data.readUInt16BE(0);
            if (!isValidStatusCode(code)) {
              const error = this.createError(
                RangeError,
                `invalid status code ${code}`,
                true,
                1002,
                "WS_ERR_INVALID_CLOSE_CODE"
              );
              cb(error);
              return;
            }
            const buf = new FastBuffer(
              data.buffer,
              data.byteOffset + 2,
              data.length - 2
            );
            if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
              const error = this.createError(
                Error,
                "invalid UTF-8 sequence",
                true,
                1007,
                "WS_ERR_INVALID_UTF8"
              );
              cb(error);
              return;
            }
            this._loop = false;
            this.emit("conclude", code, buf);
            this.end();
          }
          this._state = GET_INFO;
          return;
        }
        if (this._allowSynchronousEvents) {
          this.emit(this._opcode === 9 ? "ping" : "pong", data);
          this._state = GET_INFO;
        } else {
          this._state = DEFER_EVENT;
          setImmediate(() => {
            this.emit(this._opcode === 9 ? "ping" : "pong", data);
            this._state = GET_INFO;
            this.startLoop(cb);
          });
        }
      }
      /**
       * Builds an error object.
       *
       * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
       * @param {String} message The error message
       * @param {Boolean} prefix Specifies whether or not to add a default prefix to
       *     `message`
       * @param {Number} statusCode The status code
       * @param {String} errorCode The exposed error code
       * @return {(Error|RangeError)} The error
       * @private
       */
      createError(ErrorCtor, message, prefix, statusCode, errorCode) {
        this._loop = false;
        this._errored = true;
        const err = new ErrorCtor(
          prefix ? `Invalid WebSocket frame: ${message}` : message
        );
        Error.captureStackTrace(err, this.createError);
        err.code = errorCode;
        err[kStatusCode] = statusCode;
        return err;
      }
    };
    module.exports = Receiver2;
  }
});

// ../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/sender.js
var require_sender = __commonJS({
  "../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/sender.js"(exports, module) {
    "use strict";
    var { Duplex } = __require("stream");
    var { randomFillSync } = __require("crypto");
    var {
      types: { isUint8Array }
    } = __require("util");
    var PerMessageDeflate2 = require_permessage_deflate();
    var { EMPTY_BUFFER, kWebSocket, NOOP } = require_constants();
    var { isBlob, isValidStatusCode } = require_validation();
    var { mask: applyMask, toBuffer: toBuffer2 } = require_buffer_util();
    var kByteLength = Symbol("kByteLength");
    var maskBuffer = Buffer.alloc(4);
    var RANDOM_POOL_SIZE = 8 * 1024;
    var randomPool;
    var randomPoolPointer = RANDOM_POOL_SIZE;
    var DEFAULT = 0;
    var DEFLATING = 1;
    var GET_BLOB_DATA = 2;
    var Sender2 = class _Sender {
      /**
       * Creates a Sender instance.
       *
       * @param {Duplex} socket The connection socket
       * @param {Object} [extensions] An object containing the negotiated extensions
       * @param {Function} [generateMask] The function used to generate the masking
       *     key
       */
      constructor(socket, extensions, generateMask) {
        this._extensions = extensions || {};
        if (generateMask) {
          this._generateMask = generateMask;
          this._maskBuffer = Buffer.alloc(4);
        }
        this._socket = socket;
        this._firstFragment = true;
        this._compress = false;
        this._bufferedBytes = 0;
        this._queue = [];
        this._state = DEFAULT;
        this.onerror = NOOP;
        this[kWebSocket] = void 0;
      }
      /**
       * Frames a piece of data according to the HyBi WebSocket protocol.
       *
       * @param {(Buffer|String)} data The data to frame
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @return {(Buffer|String)[]} The framed data
       * @public
       */
      static frame(data, options) {
        let mask;
        let merge2 = false;
        let offset = 2;
        let skipMasking = false;
        if (options.mask) {
          mask = options.maskBuffer || maskBuffer;
          if (options.generateMask) {
            options.generateMask(mask);
          } else {
            if (randomPoolPointer === RANDOM_POOL_SIZE) {
              if (randomPool === void 0) {
                randomPool = Buffer.alloc(RANDOM_POOL_SIZE);
              }
              randomFillSync(randomPool, 0, RANDOM_POOL_SIZE);
              randomPoolPointer = 0;
            }
            mask[0] = randomPool[randomPoolPointer++];
            mask[1] = randomPool[randomPoolPointer++];
            mask[2] = randomPool[randomPoolPointer++];
            mask[3] = randomPool[randomPoolPointer++];
          }
          skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
          offset = 6;
        }
        let dataLength;
        if (typeof data === "string") {
          if ((!options.mask || skipMasking) && options[kByteLength] !== void 0) {
            dataLength = options[kByteLength];
          } else {
            data = Buffer.from(data);
            dataLength = data.length;
          }
        } else {
          dataLength = data.length;
          merge2 = options.mask && options.readOnly && !skipMasking;
        }
        let payloadLength = dataLength;
        if (dataLength >= 65536) {
          offset += 8;
          payloadLength = 127;
        } else if (dataLength > 125) {
          offset += 2;
          payloadLength = 126;
        }
        const target = Buffer.allocUnsafe(merge2 ? dataLength + offset : offset);
        target[0] = options.fin ? options.opcode | 128 : options.opcode;
        if (options.rsv1) target[0] |= 64;
        target[1] = payloadLength;
        if (payloadLength === 126) {
          target.writeUInt16BE(dataLength, 2);
        } else if (payloadLength === 127) {
          target[2] = target[3] = 0;
          target.writeUIntBE(dataLength, 4, 6);
        }
        if (!options.mask) return [target, data];
        target[1] |= 128;
        target[offset - 4] = mask[0];
        target[offset - 3] = mask[1];
        target[offset - 2] = mask[2];
        target[offset - 1] = mask[3];
        if (skipMasking) return [target, data];
        if (merge2) {
          applyMask(data, mask, target, offset, dataLength);
          return [target];
        }
        applyMask(data, mask, data, 0, dataLength);
        return [target, data];
      }
      /**
       * Sends a close message to the other peer.
       *
       * @param {Number} [code] The status code component of the body
       * @param {(String|Buffer)} [data] The message component of the body
       * @param {Boolean} [mask=false] Specifies whether or not to mask the message
       * @param {Function} [cb] Callback
       * @public
       */
      close(code, data, mask, cb) {
        let buf;
        if (code === void 0) {
          buf = EMPTY_BUFFER;
        } else if (typeof code !== "number" || !isValidStatusCode(code)) {
          throw new TypeError("First argument must be a valid error code number");
        } else if (data === void 0 || !data.length) {
          buf = Buffer.allocUnsafe(2);
          buf.writeUInt16BE(code, 0);
        } else {
          const length = Buffer.byteLength(data);
          if (length > 123) {
            throw new RangeError("The message must not be greater than 123 bytes");
          }
          buf = Buffer.allocUnsafe(2 + length);
          buf.writeUInt16BE(code, 0);
          if (typeof data === "string") {
            buf.write(data, 2);
          } else if (isUint8Array(data)) {
            buf.set(data, 2);
          } else {
            throw new TypeError("Second argument must be a string or a Uint8Array");
          }
        }
        const options = {
          [kByteLength]: buf.length,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 8,
          readOnly: false,
          rsv1: false
        };
        if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, buf, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(buf, options), cb);
        }
      }
      /**
       * Sends a ping message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      ping(data, mask, cb) {
        let byteLength2;
        let readOnly;
        if (typeof data === "string") {
          byteLength2 = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength2 = data.size;
          readOnly = false;
        } else {
          data = toBuffer2(data);
          byteLength2 = data.length;
          readOnly = toBuffer2.readOnly;
        }
        if (byteLength2 > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength2,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 9,
          readOnly,
          rsv1: false
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, false, options, cb]);
          } else {
            this.getBlobData(data, false, options, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(data, options), cb);
        }
      }
      /**
       * Sends a pong message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      pong(data, mask, cb) {
        let byteLength2;
        let readOnly;
        if (typeof data === "string") {
          byteLength2 = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength2 = data.size;
          readOnly = false;
        } else {
          data = toBuffer2(data);
          byteLength2 = data.length;
          readOnly = toBuffer2.readOnly;
        }
        if (byteLength2 > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength2,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 10,
          readOnly,
          rsv1: false
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, false, options, cb]);
          } else {
            this.getBlobData(data, false, options, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(data, options), cb);
        }
      }
      /**
       * Sends a data message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Object} options Options object
       * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
       *     or text
       * @param {Boolean} [options.compress=false] Specifies whether or not to
       *     compress `data`
       * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Function} [cb] Callback
       * @public
       */
      send(data, options, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate2.extensionName];
        let opcode = options.binary ? 2 : 1;
        let rsv1 = options.compress;
        let byteLength2;
        let readOnly;
        if (typeof data === "string") {
          byteLength2 = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength2 = data.size;
          readOnly = false;
        } else {
          data = toBuffer2(data);
          byteLength2 = data.length;
          readOnly = toBuffer2.readOnly;
        }
        if (this._firstFragment) {
          this._firstFragment = false;
          if (rsv1 && perMessageDeflate && perMessageDeflate.params[perMessageDeflate._isServer ? "server_no_context_takeover" : "client_no_context_takeover"]) {
            rsv1 = byteLength2 >= perMessageDeflate._threshold;
          }
          this._compress = rsv1;
        } else {
          rsv1 = false;
          opcode = 0;
        }
        if (options.fin) this._firstFragment = true;
        const opts = {
          [kByteLength]: byteLength2,
          fin: options.fin,
          generateMask: this._generateMask,
          mask: options.mask,
          maskBuffer: this._maskBuffer,
          opcode,
          readOnly,
          rsv1
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, this._compress, opts, cb]);
          } else {
            this.getBlobData(data, this._compress, opts, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, this._compress, opts, cb]);
        } else {
          this.dispatch(data, this._compress, opts, cb);
        }
      }
      /**
       * Gets the contents of a blob as binary data.
       *
       * @param {Blob} blob The blob
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     the data
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      getBlobData(blob, compress, options, cb) {
        this._bufferedBytes += options[kByteLength];
        this._state = GET_BLOB_DATA;
        blob.arrayBuffer().then((arrayBuffer) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while the blob was being read"
            );
            process.nextTick(callCallbacks, this, err, cb);
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          const data = toBuffer2(arrayBuffer);
          if (!compress) {
            this._state = DEFAULT;
            this.sendFrame(_Sender.frame(data, options), cb);
            this.dequeue();
          } else {
            this.dispatch(data, compress, options, cb);
          }
        }).catch((err) => {
          process.nextTick(onError, this, err, cb);
        });
      }
      /**
       * Dispatches a message.
       *
       * @param {(Buffer|String)} data The message to send
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     `data`
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      dispatch(data, compress, options, cb) {
        if (!compress) {
          this.sendFrame(_Sender.frame(data, options), cb);
          return;
        }
        const perMessageDeflate = this._extensions[PerMessageDeflate2.extensionName];
        this._bufferedBytes += options[kByteLength];
        this._state = DEFLATING;
        perMessageDeflate.compress(data, options.fin, (_, buf) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while data was being compressed"
            );
            callCallbacks(this, err, cb);
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          this._state = DEFAULT;
          options.readOnly = false;
          this.sendFrame(_Sender.frame(buf, options), cb);
          this.dequeue();
        });
      }
      /**
       * Executes queued send operations.
       *
       * @private
       */
      dequeue() {
        while (this._state === DEFAULT && this._queue.length) {
          const params = this._queue.shift();
          this._bufferedBytes -= params[3][kByteLength];
          Reflect.apply(params[0], this, params.slice(1));
        }
      }
      /**
       * Enqueues a send operation.
       *
       * @param {Array} params Send operation parameters.
       * @private
       */
      enqueue(params) {
        this._bufferedBytes += params[3][kByteLength];
        this._queue.push(params);
      }
      /**
       * Sends a frame.
       *
       * @param {(Buffer | String)[]} list The frame to send
       * @param {Function} [cb] Callback
       * @private
       */
      sendFrame(list, cb) {
        if (list.length === 2) {
          this._socket.cork();
          this._socket.write(list[0]);
          this._socket.write(list[1], cb);
          this._socket.uncork();
        } else {
          this._socket.write(list[0], cb);
        }
      }
    };
    module.exports = Sender2;
    function callCallbacks(sender, err, cb) {
      if (typeof cb === "function") cb(err);
      for (let i = 0; i < sender._queue.length; i++) {
        const params = sender._queue[i];
        const callback = params[params.length - 1];
        if (typeof callback === "function") callback(err);
      }
    }
    function onError(sender, err, cb) {
      callCallbacks(sender, err, cb);
      sender.onerror(err);
    }
  }
});

// ../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/event-target.js
var require_event_target = __commonJS({
  "../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/event-target.js"(exports, module) {
    "use strict";
    var { kForOnEventAttribute, kListener } = require_constants();
    var kCode = Symbol("kCode");
    var kData = Symbol("kData");
    var kError = Symbol("kError");
    var kMessage = Symbol("kMessage");
    var kReason = Symbol("kReason");
    var kTarget = Symbol("kTarget");
    var kType = Symbol("kType");
    var kWasClean = Symbol("kWasClean");
    var Event = class {
      /**
       * Create a new `Event`.
       *
       * @param {String} type The name of the event
       * @throws {TypeError} If the `type` argument is not specified
       */
      constructor(type2) {
        this[kTarget] = null;
        this[kType] = type2;
      }
      /**
       * @type {*}
       */
      get target() {
        return this[kTarget];
      }
      /**
       * @type {String}
       */
      get type() {
        return this[kType];
      }
    };
    Object.defineProperty(Event.prototype, "target", { enumerable: true });
    Object.defineProperty(Event.prototype, "type", { enumerable: true });
    var CloseEvent = class extends Event {
      /**
       * Create a new `CloseEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {Number} [options.code=0] The status code explaining why the
       *     connection was closed
       * @param {String} [options.reason=''] A human-readable string explaining why
       *     the connection was closed
       * @param {Boolean} [options.wasClean=false] Indicates whether or not the
       *     connection was cleanly closed
       */
      constructor(type2, options = {}) {
        super(type2);
        this[kCode] = options.code === void 0 ? 0 : options.code;
        this[kReason] = options.reason === void 0 ? "" : options.reason;
        this[kWasClean] = options.wasClean === void 0 ? false : options.wasClean;
      }
      /**
       * @type {Number}
       */
      get code() {
        return this[kCode];
      }
      /**
       * @type {String}
       */
      get reason() {
        return this[kReason];
      }
      /**
       * @type {Boolean}
       */
      get wasClean() {
        return this[kWasClean];
      }
    };
    Object.defineProperty(CloseEvent.prototype, "code", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "reason", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "wasClean", { enumerable: true });
    var ErrorEvent = class extends Event {
      /**
       * Create a new `ErrorEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.error=null] The error that generated this event
       * @param {String} [options.message=''] The error message
       */
      constructor(type2, options = {}) {
        super(type2);
        this[kError] = options.error === void 0 ? null : options.error;
        this[kMessage] = options.message === void 0 ? "" : options.message;
      }
      /**
       * @type {*}
       */
      get error() {
        return this[kError];
      }
      /**
       * @type {String}
       */
      get message() {
        return this[kMessage];
      }
    };
    Object.defineProperty(ErrorEvent.prototype, "error", { enumerable: true });
    Object.defineProperty(ErrorEvent.prototype, "message", { enumerable: true });
    var MessageEvent = class extends Event {
      /**
       * Create a new `MessageEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.data=null] The message content
       */
      constructor(type2, options = {}) {
        super(type2);
        this[kData] = options.data === void 0 ? null : options.data;
      }
      /**
       * @type {*}
       */
      get data() {
        return this[kData];
      }
    };
    Object.defineProperty(MessageEvent.prototype, "data", { enumerable: true });
    var EventTarget = {
      /**
       * Register an event listener.
       *
       * @param {String} type A string representing the event type to listen for
       * @param {(Function|Object)} handler The listener to add
       * @param {Object} [options] An options object specifies characteristics about
       *     the event listener
       * @param {Boolean} [options.once=false] A `Boolean` indicating that the
       *     listener should be invoked at most once after being added. If `true`,
       *     the listener would be automatically removed when invoked.
       * @public
       */
      addEventListener(type2, handler, options = {}) {
        for (const listener of this.listeners(type2)) {
          if (!options[kForOnEventAttribute] && listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            return;
          }
        }
        let wrapper;
        if (type2 === "message") {
          wrapper = function onMessage(data, isBinary3) {
            const event = new MessageEvent("message", {
              data: isBinary3 ? data : data.toString()
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type2 === "close") {
          wrapper = function onClose(code, message) {
            const event = new CloseEvent("close", {
              code,
              reason: message.toString(),
              wasClean: this._closeFrameReceived && this._closeFrameSent
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type2 === "error") {
          wrapper = function onError(error) {
            const event = new ErrorEvent("error", {
              error,
              message: error.message
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type2 === "open") {
          wrapper = function onOpen() {
            const event = new Event("open");
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else {
          return;
        }
        wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
        wrapper[kListener] = handler;
        if (options.once) {
          this.once(type2, wrapper);
        } else {
          this.on(type2, wrapper);
        }
      },
      /**
       * Remove an event listener.
       *
       * @param {String} type A string representing the event type to remove
       * @param {(Function|Object)} handler The listener to remove
       * @public
       */
      removeEventListener(type2, handler) {
        for (const listener of this.listeners(type2)) {
          if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            this.removeListener(type2, listener);
            break;
          }
        }
      }
    };
    module.exports = {
      CloseEvent,
      ErrorEvent,
      Event,
      EventTarget,
      MessageEvent
    };
    function callListener(listener, thisArg, event) {
      if (typeof listener === "object" && listener.handleEvent) {
        listener.handleEvent.call(listener, event);
      } else {
        listener.call(thisArg, event);
      }
    }
  }
});

// ../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/extension.js
var require_extension = __commonJS({
  "../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/extension.js"(exports, module) {
    "use strict";
    var { tokenChars } = require_validation();
    function push(dest, name, elem) {
      if (dest[name] === void 0) dest[name] = [elem];
      else dest[name].push(elem);
    }
    function parse3(header) {
      const offers = /* @__PURE__ */ Object.create(null);
      let params = /* @__PURE__ */ Object.create(null);
      let mustUnescape = false;
      let isEscaping = false;
      let inQuotes = false;
      let extensionName;
      let paramName;
      let start = -1;
      let code = -1;
      let end = -1;
      let i = 0;
      for (; i < header.length; i++) {
        code = header.charCodeAt(i);
        if (extensionName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (i !== 0 && (code === 32 || code === 9)) {
            if (end === -1 && start !== -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            const name = header.slice(start, end);
            if (code === 44) {
              push(offers, name, params);
              params = /* @__PURE__ */ Object.create(null);
            } else {
              extensionName = name;
            }
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else if (paramName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (code === 32 || code === 9) {
            if (end === -1 && start !== -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            push(params, header.slice(start, end), true);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            start = end = -1;
          } else if (code === 61 && start !== -1 && end === -1) {
            paramName = header.slice(start, i);
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else {
          if (isEscaping) {
            if (tokenChars[code] !== 1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (start === -1) start = i;
            else if (!mustUnescape) mustUnescape = true;
            isEscaping = false;
          } else if (inQuotes) {
            if (tokenChars[code] === 1) {
              if (start === -1) start = i;
            } else if (code === 34 && start !== -1) {
              inQuotes = false;
              end = i;
            } else if (code === 92) {
              isEscaping = true;
            } else {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
          } else if (code === 34 && header.charCodeAt(i - 1) === 61) {
            inQuotes = true;
          } else if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (start !== -1 && (code === 32 || code === 9)) {
            if (end === -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            let value2 = header.slice(start, end);
            if (mustUnescape) {
              value2 = value2.replace(/\\/g, "");
              mustUnescape = false;
            }
            push(params, paramName, value2);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            paramName = void 0;
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        }
      }
      if (start === -1 || inQuotes || code === 32 || code === 9) {
        throw new SyntaxError("Unexpected end of input");
      }
      if (end === -1) end = i;
      const token = header.slice(start, end);
      if (extensionName === void 0) {
        push(offers, token, params);
      } else {
        if (paramName === void 0) {
          push(params, token, true);
        } else if (mustUnescape) {
          push(params, paramName, token.replace(/\\/g, ""));
        } else {
          push(params, paramName, token);
        }
        push(offers, extensionName, params);
      }
      return offers;
    }
    function format(extensions) {
      return Object.keys(extensions).map((extension2) => {
        let configurations = extensions[extension2];
        if (!Array.isArray(configurations)) configurations = [configurations];
        return configurations.map((params) => {
          return [extension2].concat(
            Object.keys(params).map((k) => {
              let values = params[k];
              if (!Array.isArray(values)) values = [values];
              return values.map((v) => v === true ? k : `${k}=${v}`).join("; ");
            })
          ).join("; ");
        }).join(", ");
      }).join(", ");
    }
    module.exports = { format, parse: parse3 };
  }
});

// ../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/websocket.js
var require_websocket = __commonJS({
  "../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/websocket.js"(exports, module) {
    "use strict";
    var EventEmitter = __require("events");
    var https = __require("https");
    var http = __require("http");
    var net = __require("net");
    var tls = __require("tls");
    var { randomBytes: randomBytes3, createHash: createHash4 } = __require("crypto");
    var { Duplex, Readable } = __require("stream");
    var { URL: URL2 } = __require("url");
    var PerMessageDeflate2 = require_permessage_deflate();
    var Receiver2 = require_receiver();
    var Sender2 = require_sender();
    var { isBlob } = require_validation();
    var {
      BINARY_TYPES,
      CLOSE_TIMEOUT,
      EMPTY_BUFFER,
      GUID,
      kForOnEventAttribute,
      kListener,
      kStatusCode,
      kWebSocket,
      NOOP
    } = require_constants();
    var {
      EventTarget: { addEventListener: addEventListener2, removeEventListener: removeEventListener2 }
    } = require_event_target();
    var { format, parse: parse3 } = require_extension();
    var { toBuffer: toBuffer2 } = require_buffer_util();
    var kAborted = Symbol("kAborted");
    var protocolVersions = [8, 13];
    var readyStates = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];
    var subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
    var WebSocket2 = class _WebSocket extends EventEmitter {
      /**
       * Create a new `WebSocket`.
       *
       * @param {(String|URL)} address The URL to which to connect
       * @param {(String|String[])} [protocols] The subprotocols
       * @param {Object} [options] Connection options
       */
      constructor(address, protocols, options) {
        super();
        this._binaryType = BINARY_TYPES[0];
        this._closeCode = 1006;
        this._closeFrameReceived = false;
        this._closeFrameSent = false;
        this._closeMessage = EMPTY_BUFFER;
        this._closeTimer = null;
        this._errorEmitted = false;
        this._extensions = {};
        this._paused = false;
        this._protocol = "";
        this._readyState = _WebSocket.CONNECTING;
        this._receiver = null;
        this._sender = null;
        this._socket = null;
        if (address !== null) {
          this._bufferedAmount = 0;
          this._isServer = false;
          this._redirects = 0;
          if (protocols === void 0) {
            protocols = [];
          } else if (!Array.isArray(protocols)) {
            if (typeof protocols === "object" && protocols !== null) {
              options = protocols;
              protocols = [];
            } else {
              protocols = [protocols];
            }
          }
          initAsClient(this, address, protocols, options);
        } else {
          this._autoPong = options.autoPong;
          this._closeTimeout = options.closeTimeout;
          this._isServer = true;
        }
      }
      /**
       * For historical reasons, the custom "nodebuffer" type is used by the default
       * instead of "blob".
       *
       * @type {String}
       */
      get binaryType() {
        return this._binaryType;
      }
      set binaryType(type2) {
        if (!BINARY_TYPES.includes(type2)) return;
        this._binaryType = type2;
        if (this._receiver) this._receiver._binaryType = type2;
      }
      /**
       * @type {Number}
       */
      get bufferedAmount() {
        if (!this._socket) return this._bufferedAmount;
        return this._socket._writableState.length + this._sender._bufferedBytes;
      }
      /**
       * @type {String}
       */
      get extensions() {
        return Object.keys(this._extensions).join();
      }
      /**
       * @type {Boolean}
       */
      get isPaused() {
        return this._paused;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onclose() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onerror() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onopen() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onmessage() {
        return null;
      }
      /**
       * @type {String}
       */
      get protocol() {
        return this._protocol;
      }
      /**
       * @type {Number}
       */
      get readyState() {
        return this._readyState;
      }
      /**
       * @type {String}
       */
      get url() {
        return this._url;
      }
      /**
       * Set up the socket and the internal resources.
       *
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Object} options Options object
       * @param {Boolean} [options.allowSynchronousEvents=false] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Number} [options.maxPayload=0] The maximum allowed message size
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @private
       */
      setSocket(socket, head, options) {
        const receiver = new Receiver2({
          allowSynchronousEvents: options.allowSynchronousEvents,
          binaryType: this.binaryType,
          extensions: this._extensions,
          isServer: this._isServer,
          maxPayload: options.maxPayload,
          skipUTF8Validation: options.skipUTF8Validation
        });
        const sender = new Sender2(socket, this._extensions, options.generateMask);
        this._receiver = receiver;
        this._sender = sender;
        this._socket = socket;
        receiver[kWebSocket] = this;
        sender[kWebSocket] = this;
        socket[kWebSocket] = this;
        receiver.on("conclude", receiverOnConclude);
        receiver.on("drain", receiverOnDrain);
        receiver.on("error", receiverOnError);
        receiver.on("message", receiverOnMessage);
        receiver.on("ping", receiverOnPing);
        receiver.on("pong", receiverOnPong);
        sender.onerror = senderOnError;
        if (socket.setTimeout) socket.setTimeout(0);
        if (socket.setNoDelay) socket.setNoDelay();
        if (head.length > 0) socket.unshift(head);
        socket.on("close", socketOnClose);
        socket.on("data", socketOnData);
        socket.on("end", socketOnEnd);
        socket.on("error", socketOnError);
        this._readyState = _WebSocket.OPEN;
        this.emit("open");
      }
      /**
       * Emit the `'close'` event.
       *
       * @private
       */
      emitClose() {
        if (!this._socket) {
          this._readyState = _WebSocket.CLOSED;
          this.emit("close", this._closeCode, this._closeMessage);
          return;
        }
        if (this._extensions[PerMessageDeflate2.extensionName]) {
          this._extensions[PerMessageDeflate2.extensionName].cleanup();
        }
        this._receiver.removeAllListeners();
        this._readyState = _WebSocket.CLOSED;
        this.emit("close", this._closeCode, this._closeMessage);
      }
      /**
       * Start a closing handshake.
       *
       *          +----------+   +-----------+   +----------+
       *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
       *    |     +----------+   +-----------+   +----------+     |
       *          +----------+   +-----------+         |
       * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
       *          +----------+   +-----------+   |
       *    |           |                        |   +---+        |
       *                +------------------------+-->|fin| - - - -
       *    |         +---+                      |   +---+
       *     - - - - -|fin|<---------------------+
       *              +---+
       *
       * @param {Number} [code] Status code explaining why the connection is closing
       * @param {(String|Buffer)} [data] The reason why the connection is
       *     closing
       * @public
       */
      close(code, data) {
        if (this.readyState === _WebSocket.CLOSED) return;
        if (this.readyState === _WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this.readyState === _WebSocket.CLOSING) {
          if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
            this._socket.end();
          }
          return;
        }
        this._readyState = _WebSocket.CLOSING;
        this._sender.close(code, data, !this._isServer, (err) => {
          if (err) return;
          this._closeFrameSent = true;
          if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) {
            this._socket.end();
          }
        });
        setCloseTimer(this);
      }
      /**
       * Pause the socket.
       *
       * @public
       */
      pause() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
          return;
        }
        this._paused = true;
        this._socket.pause();
      }
      /**
       * Send a ping.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the ping is sent
       * @public
       */
      ping(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0) mask = !this._isServer;
        this._sender.ping(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Send a pong.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the pong is sent
       * @public
       */
      pong(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0) mask = !this._isServer;
        this._sender.pong(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Resume the socket.
       *
       * @public
       */
      resume() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
          return;
        }
        this._paused = false;
        if (!this._receiver._writableState.needDrain) this._socket.resume();
      }
      /**
       * Send a data message.
       *
       * @param {*} data The message to send
       * @param {Object} [options] Options object
       * @param {Boolean} [options.binary] Specifies whether `data` is binary or
       *     text
       * @param {Boolean} [options.compress] Specifies whether or not to compress
       *     `data`
       * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when data is written out
       * @public
       */
      send(data, options, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof options === "function") {
          cb = options;
          options = {};
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        const opts = {
          binary: typeof data !== "string",
          mask: !this._isServer,
          compress: true,
          fin: true,
          ...options
        };
        if (!this._extensions[PerMessageDeflate2.extensionName]) {
          opts.compress = false;
        }
        this._sender.send(data || EMPTY_BUFFER, opts, cb);
      }
      /**
       * Forcibly close the connection.
       *
       * @public
       */
      terminate() {
        if (this.readyState === _WebSocket.CLOSED) return;
        if (this.readyState === _WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this._socket) {
          this._readyState = _WebSocket.CLOSING;
          this._socket.destroy();
        }
      }
    };
    Object.defineProperty(WebSocket2, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket2.prototype, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket2, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket2.prototype, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket2, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket2.prototype, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket2, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    Object.defineProperty(WebSocket2.prototype, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    [
      "binaryType",
      "bufferedAmount",
      "extensions",
      "isPaused",
      "protocol",
      "readyState",
      "url"
    ].forEach((property) => {
      Object.defineProperty(WebSocket2.prototype, property, { enumerable: true });
    });
    ["open", "error", "close", "message"].forEach((method) => {
      Object.defineProperty(WebSocket2.prototype, `on${method}`, {
        enumerable: true,
        get() {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) return listener[kListener];
          }
          return null;
        },
        set(handler) {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) {
              this.removeListener(method, listener);
              break;
            }
          }
          if (typeof handler !== "function") return;
          this.addEventListener(method, handler, {
            [kForOnEventAttribute]: true
          });
        }
      });
    });
    WebSocket2.prototype.addEventListener = addEventListener2;
    WebSocket2.prototype.removeEventListener = removeEventListener2;
    module.exports = WebSocket2;
    function initAsClient(websocket, address, protocols, options) {
      const opts = {
        allowSynchronousEvents: true,
        autoPong: true,
        closeTimeout: CLOSE_TIMEOUT,
        protocolVersion: protocolVersions[1],
        maxPayload: 100 * 1024 * 1024,
        skipUTF8Validation: false,
        perMessageDeflate: true,
        followRedirects: false,
        maxRedirects: 10,
        ...options,
        socketPath: void 0,
        hostname: void 0,
        protocol: void 0,
        timeout: void 0,
        method: "GET",
        host: void 0,
        path: void 0,
        port: void 0
      };
      websocket._autoPong = opts.autoPong;
      websocket._closeTimeout = opts.closeTimeout;
      if (!protocolVersions.includes(opts.protocolVersion)) {
        throw new RangeError(
          `Unsupported protocol version: ${opts.protocolVersion} (supported versions: ${protocolVersions.join(", ")})`
        );
      }
      let parsedUrl;
      if (address instanceof URL2) {
        parsedUrl = address;
      } else {
        try {
          parsedUrl = new URL2(address);
        } catch {
          throw new SyntaxError(`Invalid URL: ${address}`);
        }
      }
      if (parsedUrl.protocol === "http:") {
        parsedUrl.protocol = "ws:";
      } else if (parsedUrl.protocol === "https:") {
        parsedUrl.protocol = "wss:";
      }
      websocket._url = parsedUrl.href;
      const isSecure = parsedUrl.protocol === "wss:";
      const isIpcUrl = parsedUrl.protocol === "ws+unix:";
      let invalidUrlMessage;
      if (parsedUrl.protocol !== "ws:" && !isSecure && !isIpcUrl) {
        invalidUrlMessage = `The URL's protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"`;
      } else if (isIpcUrl && !parsedUrl.pathname) {
        invalidUrlMessage = "The URL's pathname is empty";
      } else if (parsedUrl.hash) {
        invalidUrlMessage = "The URL contains a fragment identifier";
      }
      if (invalidUrlMessage) {
        const err = new SyntaxError(invalidUrlMessage);
        if (websocket._redirects === 0) {
          throw err;
        } else {
          emitErrorAndClose(websocket, err);
          return;
        }
      }
      const defaultPort = isSecure ? 443 : 80;
      const key = randomBytes3(16).toString("base64");
      const request = isSecure ? https.request : http.request;
      const protocolSet = /* @__PURE__ */ new Set();
      let perMessageDeflate;
      opts.createConnection = opts.createConnection || (isSecure ? tlsConnect : netConnect);
      opts.defaultPort = opts.defaultPort || defaultPort;
      opts.port = parsedUrl.port || defaultPort;
      opts.host = parsedUrl.hostname.startsWith("[") ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
      opts.headers = {
        ...opts.headers,
        "Sec-WebSocket-Version": opts.protocolVersion,
        "Sec-WebSocket-Key": key,
        Connection: "Upgrade",
        Upgrade: "websocket"
      };
      opts.path = parsedUrl.pathname + parsedUrl.search;
      opts.timeout = opts.handshakeTimeout;
      if (opts.perMessageDeflate) {
        perMessageDeflate = new PerMessageDeflate2({
          ...opts.perMessageDeflate,
          isServer: false,
          maxPayload: opts.maxPayload
        });
        opts.headers["Sec-WebSocket-Extensions"] = format({
          [PerMessageDeflate2.extensionName]: perMessageDeflate.offer()
        });
      }
      if (protocols.length) {
        for (const protocol4 of protocols) {
          if (typeof protocol4 !== "string" || !subprotocolRegex.test(protocol4) || protocolSet.has(protocol4)) {
            throw new SyntaxError(
              "An invalid or duplicated subprotocol was specified"
            );
          }
          protocolSet.add(protocol4);
        }
        opts.headers["Sec-WebSocket-Protocol"] = protocols.join(",");
      }
      if (opts.origin) {
        if (opts.protocolVersion < 13) {
          opts.headers["Sec-WebSocket-Origin"] = opts.origin;
        } else {
          opts.headers.Origin = opts.origin;
        }
      }
      if (parsedUrl.username || parsedUrl.password) {
        opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
      }
      if (isIpcUrl) {
        const parts2 = opts.path.split(":");
        opts.socketPath = parts2[0];
        opts.path = parts2[1];
      }
      let req;
      if (opts.followRedirects) {
        if (websocket._redirects === 0) {
          websocket._originalIpc = isIpcUrl;
          websocket._originalSecure = isSecure;
          websocket._originalHostOrSocketPath = isIpcUrl ? opts.socketPath : parsedUrl.host;
          const headers = options && options.headers;
          options = { ...options, headers: {} };
          if (headers) {
            for (const [key2, value2] of Object.entries(headers)) {
              options.headers[key2.toLowerCase()] = value2;
            }
          }
        } else if (websocket.listenerCount("redirect") === 0) {
          const isSameHost = isIpcUrl ? websocket._originalIpc ? opts.socketPath === websocket._originalHostOrSocketPath : false : websocket._originalIpc ? false : parsedUrl.host === websocket._originalHostOrSocketPath;
          if (!isSameHost || websocket._originalSecure && !isSecure) {
            delete opts.headers.authorization;
            delete opts.headers.cookie;
            if (!isSameHost) delete opts.headers.host;
            opts.auth = void 0;
          }
        }
        if (opts.auth && !options.headers.authorization) {
          options.headers.authorization = "Basic " + Buffer.from(opts.auth).toString("base64");
        }
        req = websocket._req = request(opts);
        if (websocket._redirects) {
          websocket.emit("redirect", websocket.url, req);
        }
      } else {
        req = websocket._req = request(opts);
      }
      if (opts.timeout) {
        req.on("timeout", () => {
          abortHandshake(websocket, req, "Opening handshake has timed out");
        });
      }
      req.on("error", (err) => {
        if (req === null || req[kAborted]) return;
        req = websocket._req = null;
        emitErrorAndClose(websocket, err);
      });
      req.on("response", (res) => {
        const location2 = res.headers.location;
        const statusCode = res.statusCode;
        if (location2 && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
          if (++websocket._redirects > opts.maxRedirects) {
            abortHandshake(websocket, req, "Maximum redirects exceeded");
            return;
          }
          req.abort();
          let addr;
          try {
            addr = new URL2(location2, address);
          } catch (e) {
            const err = new SyntaxError(`Invalid URL: ${location2}`);
            emitErrorAndClose(websocket, err);
            return;
          }
          initAsClient(websocket, addr, protocols, options);
        } else if (!websocket.emit("unexpected-response", req, res)) {
          abortHandshake(
            websocket,
            req,
            `Unexpected server response: ${res.statusCode}`
          );
        }
      });
      req.on("upgrade", (res, socket, head) => {
        websocket.emit("upgrade", res);
        if (websocket.readyState !== WebSocket2.CONNECTING) return;
        req = websocket._req = null;
        const upgrade = res.headers.upgrade;
        if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
          abortHandshake(websocket, socket, "Invalid Upgrade header");
          return;
        }
        const digest = createHash4("sha1").update(key + GUID).digest("base64");
        if (res.headers["sec-websocket-accept"] !== digest) {
          abortHandshake(websocket, socket, "Invalid Sec-WebSocket-Accept header");
          return;
        }
        const serverProt = res.headers["sec-websocket-protocol"];
        let protError;
        if (serverProt !== void 0) {
          if (!protocolSet.size) {
            protError = "Server sent a subprotocol but none was requested";
          } else if (!protocolSet.has(serverProt)) {
            protError = "Server sent an invalid subprotocol";
          }
        } else if (protocolSet.size) {
          protError = "Server sent no subprotocol";
        }
        if (protError) {
          abortHandshake(websocket, socket, protError);
          return;
        }
        if (serverProt) websocket._protocol = serverProt;
        const secWebSocketExtensions = res.headers["sec-websocket-extensions"];
        if (secWebSocketExtensions !== void 0) {
          if (!perMessageDeflate) {
            const message = "Server sent a Sec-WebSocket-Extensions header but no extension was requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          let extensions;
          try {
            extensions = parse3(secWebSocketExtensions);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          const extensionNames = Object.keys(extensions);
          if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate2.extensionName) {
            const message = "Server indicated an extension that was not requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          try {
            perMessageDeflate.accept(extensions[PerMessageDeflate2.extensionName]);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          websocket._extensions[PerMessageDeflate2.extensionName] = perMessageDeflate;
        }
        websocket.setSocket(socket, head, {
          allowSynchronousEvents: opts.allowSynchronousEvents,
          generateMask: opts.generateMask,
          maxPayload: opts.maxPayload,
          skipUTF8Validation: opts.skipUTF8Validation
        });
      });
      if (opts.finishRequest) {
        opts.finishRequest(req, websocket);
      } else {
        req.end();
      }
    }
    function emitErrorAndClose(websocket, err) {
      websocket._readyState = WebSocket2.CLOSING;
      websocket._errorEmitted = true;
      websocket.emit("error", err);
      websocket.emitClose();
    }
    function netConnect(options) {
      options.path = options.socketPath;
      return net.connect(options);
    }
    function tlsConnect(options) {
      options.path = void 0;
      if (!options.servername && options.servername !== "") {
        options.servername = net.isIP(options.host) ? "" : options.host;
      }
      return tls.connect(options);
    }
    function abortHandshake(websocket, stream, message) {
      websocket._readyState = WebSocket2.CLOSING;
      const err = new Error(message);
      Error.captureStackTrace(err, abortHandshake);
      if (stream.setHeader) {
        stream[kAborted] = true;
        stream.abort();
        if (stream.socket && !stream.socket.destroyed) {
          stream.socket.destroy();
        }
        process.nextTick(emitErrorAndClose, websocket, err);
      } else {
        stream.destroy(err);
        stream.once("error", websocket.emit.bind(websocket, "error"));
        stream.once("close", websocket.emitClose.bind(websocket));
      }
    }
    function sendAfterClose(websocket, data, cb) {
      if (data) {
        const length = isBlob(data) ? data.size : toBuffer2(data).length;
        if (websocket._socket) websocket._sender._bufferedBytes += length;
        else websocket._bufferedAmount += length;
      }
      if (cb) {
        const err = new Error(
          `WebSocket is not open: readyState ${websocket.readyState} (${readyStates[websocket.readyState]})`
        );
        process.nextTick(cb, err);
      }
    }
    function receiverOnConclude(code, reason) {
      const websocket = this[kWebSocket];
      websocket._closeFrameReceived = true;
      websocket._closeMessage = reason;
      websocket._closeCode = code;
      if (websocket._socket[kWebSocket] === void 0) return;
      websocket._socket.removeListener("data", socketOnData);
      process.nextTick(resume, websocket._socket);
      if (code === 1005) websocket.close();
      else websocket.close(code, reason);
    }
    function receiverOnDrain() {
      const websocket = this[kWebSocket];
      if (!websocket.isPaused) websocket._socket.resume();
    }
    function receiverOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket._socket[kWebSocket] !== void 0) {
        websocket._socket.removeListener("data", socketOnData);
        process.nextTick(resume, websocket._socket);
        websocket.close(err[kStatusCode]);
      }
      if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit("error", err);
      }
    }
    function receiverOnFinish() {
      this[kWebSocket].emitClose();
    }
    function receiverOnMessage(data, isBinary3) {
      this[kWebSocket].emit("message", data, isBinary3);
    }
    function receiverOnPing(data) {
      const websocket = this[kWebSocket];
      if (websocket._autoPong) websocket.pong(data, !this._isServer, NOOP);
      websocket.emit("ping", data);
    }
    function receiverOnPong(data) {
      this[kWebSocket].emit("pong", data);
    }
    function resume(stream) {
      stream.resume();
    }
    function senderOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket.readyState === WebSocket2.CLOSED) return;
      if (websocket.readyState === WebSocket2.OPEN) {
        websocket._readyState = WebSocket2.CLOSING;
        setCloseTimer(websocket);
      }
      this._socket.end();
      if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit("error", err);
      }
    }
    function setCloseTimer(websocket) {
      websocket._closeTimer = setTimeout(
        websocket._socket.destroy.bind(websocket._socket),
        websocket._closeTimeout
      );
    }
    function socketOnClose() {
      const websocket = this[kWebSocket];
      this.removeListener("close", socketOnClose);
      this.removeListener("data", socketOnData);
      this.removeListener("end", socketOnEnd);
      websocket._readyState = WebSocket2.CLOSING;
      if (!this._readableState.endEmitted && !websocket._closeFrameReceived && !websocket._receiver._writableState.errorEmitted && this._readableState.length !== 0) {
        const chunk2 = this.read(this._readableState.length);
        websocket._receiver.write(chunk2);
      }
      websocket._receiver.end();
      this[kWebSocket] = void 0;
      clearTimeout(websocket._closeTimer);
      if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
        websocket.emitClose();
      } else {
        websocket._receiver.on("error", receiverOnFinish);
        websocket._receiver.on("finish", receiverOnFinish);
      }
    }
    function socketOnData(chunk2) {
      if (!this[kWebSocket]._receiver.write(chunk2)) {
        this.pause();
      }
    }
    function socketOnEnd() {
      const websocket = this[kWebSocket];
      websocket._readyState = WebSocket2.CLOSING;
      websocket._receiver.end();
      this.end();
    }
    function socketOnError() {
      const websocket = this[kWebSocket];
      this.removeListener("error", socketOnError);
      this.on("error", NOOP);
      if (websocket) {
        websocket._readyState = WebSocket2.CLOSING;
        this.destroy();
      }
    }
  }
});

// ../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/stream.js
var require_stream = __commonJS({
  "../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/stream.js"(exports, module) {
    "use strict";
    var WebSocket2 = require_websocket();
    var { Duplex } = __require("stream");
    function emitClose(stream) {
      stream.emit("close");
    }
    function duplexOnEnd() {
      if (!this.destroyed && this._writableState.finished) {
        this.destroy();
      }
    }
    function duplexOnError(err) {
      this.removeListener("error", duplexOnError);
      this.destroy();
      if (this.listenerCount("error") === 0) {
        this.emit("error", err);
      }
    }
    function createWebSocketStream2(ws, options) {
      let terminateOnDestroy = true;
      const duplex = new Duplex({
        ...options,
        autoDestroy: false,
        emitClose: false,
        objectMode: false,
        writableObjectMode: false
      });
      ws.on("message", function message(msg, isBinary3) {
        const data = !isBinary3 && duplex._readableState.objectMode ? msg.toString() : msg;
        if (!duplex.push(data)) ws.pause();
      });
      ws.once("error", function error(err) {
        if (duplex.destroyed) return;
        terminateOnDestroy = false;
        duplex.destroy(err);
      });
      ws.once("close", function close() {
        if (duplex.destroyed) return;
        duplex.push(null);
      });
      duplex._destroy = function(err, callback) {
        if (ws.readyState === ws.CLOSED) {
          callback(err);
          process.nextTick(emitClose, duplex);
          return;
        }
        let called = false;
        ws.once("error", function error(err2) {
          called = true;
          callback(err2);
        });
        ws.once("close", function close() {
          if (!called) callback(err);
          process.nextTick(emitClose, duplex);
        });
        if (terminateOnDestroy) ws.terminate();
      };
      duplex._final = function(callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open2() {
            duplex._final(callback);
          });
          return;
        }
        if (ws._socket === null) return;
        if (ws._socket._writableState.finished) {
          callback();
          if (duplex._readableState.endEmitted) duplex.destroy();
        } else {
          ws._socket.once("finish", function finish() {
            callback();
          });
          ws.close();
        }
      };
      duplex._read = function() {
        if (ws.isPaused) ws.resume();
      };
      duplex._write = function(chunk2, encoding, callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open2() {
            duplex._write(chunk2, encoding, callback);
          });
          return;
        }
        ws.send(chunk2, callback);
      };
      duplex.on("end", duplexOnEnd);
      duplex.on("error", duplexOnError);
      return duplex;
    }
    module.exports = createWebSocketStream2;
  }
});

// ../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/subprotocol.js
var require_subprotocol = __commonJS({
  "../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/subprotocol.js"(exports, module) {
    "use strict";
    var { tokenChars } = require_validation();
    function parse3(header) {
      const protocols = /* @__PURE__ */ new Set();
      let start = -1;
      let end = -1;
      let i = 0;
      for (i; i < header.length; i++) {
        const code = header.charCodeAt(i);
        if (end === -1 && tokenChars[code] === 1) {
          if (start === -1) start = i;
        } else if (i !== 0 && (code === 32 || code === 9)) {
          if (end === -1 && start !== -1) end = i;
        } else if (code === 44) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1) end = i;
          const protocol5 = header.slice(start, end);
          if (protocols.has(protocol5)) {
            throw new SyntaxError(`The "${protocol5}" subprotocol is duplicated`);
          }
          protocols.add(protocol5);
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      }
      if (start === -1 || end !== -1) {
        throw new SyntaxError("Unexpected end of input");
      }
      const protocol4 = header.slice(start, i);
      if (protocols.has(protocol4)) {
        throw new SyntaxError(`The "${protocol4}" subprotocol is duplicated`);
      }
      protocols.add(protocol4);
      return protocols;
    }
    module.exports = { parse: parse3 };
  }
});

// ../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/websocket-server.js
var require_websocket_server = __commonJS({
  "../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/lib/websocket-server.js"(exports, module) {
    "use strict";
    var EventEmitter = __require("events");
    var http = __require("http");
    var { Duplex } = __require("stream");
    var { createHash: createHash4 } = __require("crypto");
    var extension2 = require_extension();
    var PerMessageDeflate2 = require_permessage_deflate();
    var subprotocol2 = require_subprotocol();
    var WebSocket2 = require_websocket();
    var { CLOSE_TIMEOUT, GUID, kWebSocket } = require_constants();
    var keyRegex = /^[+/0-9A-Za-z]{22}==$/;
    var RUNNING = 0;
    var CLOSING = 1;
    var CLOSED = 2;
    var WebSocketServer2 = class extends EventEmitter {
      /**
       * Create a `WebSocketServer` instance.
       *
       * @param {Object} options Configuration options
       * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {Boolean} [options.autoPong=true] Specifies whether or not to
       *     automatically send a pong in response to a ping
       * @param {Number} [options.backlog=511] The maximum length of the queue of
       *     pending connections
       * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
       *     track clients
       * @param {Number} [options.closeTimeout=30000] Duration in milliseconds to
       *     wait for the closing handshake to finish after `websocket.close()` is
       *     called
       * @param {Function} [options.handleProtocols] A hook to handle protocols
       * @param {String} [options.host] The hostname where to bind the server
       * @param {Number} [options.maxPayload=104857600] The maximum allowed message
       *     size
       * @param {Boolean} [options.noServer=false] Enable no server mode
       * @param {String} [options.path] Accept only connections matching this path
       * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
       *     permessage-deflate
       * @param {Number} [options.port] The port where to bind the server
       * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
       *     server to use
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @param {Function} [options.verifyClient] A hook to reject connections
       * @param {Function} [options.WebSocket=WebSocket] Specifies the `WebSocket`
       *     class to use. It must be the `WebSocket` class or class that extends it
       * @param {Function} [callback] A listener for the `listening` event
       */
      constructor(options, callback) {
        super();
        options = {
          allowSynchronousEvents: true,
          autoPong: true,
          maxPayload: 100 * 1024 * 1024,
          skipUTF8Validation: false,
          perMessageDeflate: false,
          handleProtocols: null,
          clientTracking: true,
          closeTimeout: CLOSE_TIMEOUT,
          verifyClient: null,
          noServer: false,
          backlog: null,
          // use default (511 as implemented in net.js)
          server: null,
          host: null,
          path: null,
          port: null,
          WebSocket: WebSocket2,
          ...options
        };
        if (options.port == null && !options.server && !options.noServer || options.port != null && (options.server || options.noServer) || options.server && options.noServer) {
          throw new TypeError(
            'One and only one of the "port", "server", or "noServer" options must be specified'
          );
        }
        if (options.port != null) {
          this._server = http.createServer((req, res) => {
            const body = http.STATUS_CODES[426];
            res.writeHead(426, {
              "Content-Length": body.length,
              "Content-Type": "text/plain"
            });
            res.end(body);
          });
          this._server.listen(
            options.port,
            options.host,
            options.backlog,
            callback
          );
        } else if (options.server) {
          this._server = options.server;
        }
        if (this._server) {
          const emitConnection = this.emit.bind(this, "connection");
          this._removeListeners = addListeners(this._server, {
            listening: this.emit.bind(this, "listening"),
            error: this.emit.bind(this, "error"),
            upgrade: (req, socket, head) => {
              this.handleUpgrade(req, socket, head, emitConnection);
            }
          });
        }
        if (options.perMessageDeflate === true) options.perMessageDeflate = {};
        if (options.clientTracking) {
          this.clients = /* @__PURE__ */ new Set();
          this._shouldEmitClose = false;
        }
        this.options = options;
        this._state = RUNNING;
      }
      /**
       * Returns the bound address, the address family name, and port of the server
       * as reported by the operating system if listening on an IP socket.
       * If the server is listening on a pipe or UNIX domain socket, the name is
       * returned as a string.
       *
       * @return {(Object|String|null)} The address of the server
       * @public
       */
      address() {
        if (this.options.noServer) {
          throw new Error('The server is operating in "noServer" mode');
        }
        if (!this._server) return null;
        return this._server.address();
      }
      /**
       * Stop the server from accepting new connections and emit the `'close'` event
       * when all existing connections are closed.
       *
       * @param {Function} [cb] A one-time listener for the `'close'` event
       * @public
       */
      close(cb) {
        if (this._state === CLOSED) {
          if (cb) {
            this.once("close", () => {
              cb(new Error("The server is not running"));
            });
          }
          process.nextTick(emitClose, this);
          return;
        }
        if (cb) this.once("close", cb);
        if (this._state === CLOSING) return;
        this._state = CLOSING;
        if (this.options.noServer || this.options.server) {
          if (this._server) {
            this._removeListeners();
            this._removeListeners = this._server = null;
          }
          if (this.clients) {
            if (!this.clients.size) {
              process.nextTick(emitClose, this);
            } else {
              this._shouldEmitClose = true;
            }
          } else {
            process.nextTick(emitClose, this);
          }
        } else {
          const server = this._server;
          this._removeListeners();
          this._removeListeners = this._server = null;
          server.close(() => {
            emitClose(this);
          });
        }
      }
      /**
       * See if a given request should be handled by this server instance.
       *
       * @param {http.IncomingMessage} req Request object to inspect
       * @return {Boolean} `true` if the request is valid, else `false`
       * @public
       */
      shouldHandle(req) {
        if (this.options.path) {
          const index = req.url.indexOf("?");
          const pathname = index !== -1 ? req.url.slice(0, index) : req.url;
          if (pathname !== this.options.path) return false;
        }
        return true;
      }
      /**
       * Handle a HTTP Upgrade request.
       *
       * @param {http.IncomingMessage} req The request object
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @public
       */
      handleUpgrade(req, socket, head, cb) {
        socket.on("error", socketOnError);
        const key = req.headers["sec-websocket-key"];
        const upgrade = req.headers.upgrade;
        const version = +req.headers["sec-websocket-version"];
        if (req.method !== "GET") {
          const message = "Invalid HTTP method";
          abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
          return;
        }
        if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
          const message = "Invalid Upgrade header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (key === void 0 || !keyRegex.test(key)) {
          const message = "Missing or invalid Sec-WebSocket-Key header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (version !== 13 && version !== 8) {
          const message = "Missing or invalid Sec-WebSocket-Version header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message, {
            "Sec-WebSocket-Version": "13, 8"
          });
          return;
        }
        if (!this.shouldHandle(req)) {
          abortHandshake(socket, 400);
          return;
        }
        const secWebSocketProtocol = req.headers["sec-websocket-protocol"];
        let protocols = /* @__PURE__ */ new Set();
        if (secWebSocketProtocol !== void 0) {
          try {
            protocols = subprotocol2.parse(secWebSocketProtocol);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Protocol header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        const secWebSocketExtensions = req.headers["sec-websocket-extensions"];
        const extensions = {};
        if (this.options.perMessageDeflate && secWebSocketExtensions !== void 0) {
          const perMessageDeflate = new PerMessageDeflate2({
            ...this.options.perMessageDeflate,
            isServer: true,
            maxPayload: this.options.maxPayload
          });
          try {
            const offers = extension2.parse(secWebSocketExtensions);
            if (offers[PerMessageDeflate2.extensionName]) {
              perMessageDeflate.accept(offers[PerMessageDeflate2.extensionName]);
              extensions[PerMessageDeflate2.extensionName] = perMessageDeflate;
            }
          } catch (err) {
            const message = "Invalid or unacceptable Sec-WebSocket-Extensions header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        if (this.options.verifyClient) {
          const info = {
            origin: req.headers[`${version === 8 ? "sec-websocket-origin" : "origin"}`],
            secure: !!(req.socket.authorized || req.socket.encrypted),
            req
          };
          if (this.options.verifyClient.length === 2) {
            this.options.verifyClient(info, (verified, code, message, headers) => {
              if (!verified) {
                return abortHandshake(socket, code || 401, message, headers);
              }
              this.completeUpgrade(
                extensions,
                key,
                protocols,
                req,
                socket,
                head,
                cb
              );
            });
            return;
          }
          if (!this.options.verifyClient(info)) return abortHandshake(socket, 401);
        }
        this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
      }
      /**
       * Upgrade the connection to WebSocket.
       *
       * @param {Object} extensions The accepted extensions
       * @param {String} key The value of the `Sec-WebSocket-Key` header
       * @param {Set} protocols The subprotocols
       * @param {http.IncomingMessage} req The request object
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @throws {Error} If called more than once with the same socket
       * @private
       */
      completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
        if (!socket.readable || !socket.writable) return socket.destroy();
        if (socket[kWebSocket]) {
          throw new Error(
            "server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration"
          );
        }
        if (this._state > RUNNING) return abortHandshake(socket, 503);
        const digest = createHash4("sha1").update(key + GUID).digest("base64");
        const headers = [
          "HTTP/1.1 101 Switching Protocols",
          "Upgrade: websocket",
          "Connection: Upgrade",
          `Sec-WebSocket-Accept: ${digest}`
        ];
        const ws = new this.options.WebSocket(null, void 0, this.options);
        if (protocols.size) {
          const protocol4 = this.options.handleProtocols ? this.options.handleProtocols(protocols, req) : protocols.values().next().value;
          if (protocol4) {
            headers.push(`Sec-WebSocket-Protocol: ${protocol4}`);
            ws._protocol = protocol4;
          }
        }
        if (extensions[PerMessageDeflate2.extensionName]) {
          const params = extensions[PerMessageDeflate2.extensionName].params;
          const value2 = extension2.format({
            [PerMessageDeflate2.extensionName]: [params]
          });
          headers.push(`Sec-WebSocket-Extensions: ${value2}`);
          ws._extensions = extensions;
        }
        this.emit("headers", headers, req);
        socket.write(headers.concat("\r\n").join("\r\n"));
        socket.removeListener("error", socketOnError);
        ws.setSocket(socket, head, {
          allowSynchronousEvents: this.options.allowSynchronousEvents,
          maxPayload: this.options.maxPayload,
          skipUTF8Validation: this.options.skipUTF8Validation
        });
        if (this.clients) {
          this.clients.add(ws);
          ws.on("close", () => {
            this.clients.delete(ws);
            if (this._shouldEmitClose && !this.clients.size) {
              process.nextTick(emitClose, this);
            }
          });
        }
        cb(ws, req);
      }
    };
    module.exports = WebSocketServer2;
    function addListeners(server, map2) {
      for (const event of Object.keys(map2)) server.on(event, map2[event]);
      return function removeListeners() {
        for (const event of Object.keys(map2)) {
          server.removeListener(event, map2[event]);
        }
      };
    }
    function emitClose(server) {
      server._state = CLOSED;
      server.emit("close");
    }
    function socketOnError() {
      this.destroy();
    }
    function abortHandshake(socket, code, message, headers) {
      message = message || http.STATUS_CODES[code];
      headers = {
        Connection: "close",
        "Content-Type": "text/html",
        "Content-Length": Buffer.byteLength(message),
        ...headers
      };
      socket.once("finish", socket.destroy);
      socket.end(
        `HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r
` + Object.keys(headers).map((h) => `${h}: ${headers[h]}`).join("\r\n") + "\r\n\r\n" + message
      );
    }
    function abortHandshakeOrEmitwsClientError(server, req, socket, code, message, headers) {
      if (server.listenerCount("wsClientError")) {
        const err = new Error(message);
        Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);
        server.emit("wsClientError", err, socket, req);
      } else {
        abortHandshake(socket, code, message, headers);
      }
    }
  }
});

// src/sync/cli.ts
import { spawn } from "node:child_process";
import { closeSync as closeSync2 } from "node:fs";
import { dirname as dirname10, join as join15 } from "node:path";
import { fileURLToPath } from "node:url";

// ../../packages/core/src/index.ts
init_element_types();
init_make_validator();
init_registry();
init_schemas();
init_html_parser();
init_html_reader();
init_atomic_write();
init_html_writer();
init_topic_attributes();

// ../../packages/core/src/tree/signals.ts
import { dirname as dirname4, join as join3 } from "node:path";

// ../../packages/storage/src/file-blob-storage.ts
import { mkdir as mkdir2, readdir, readFile as readFile2, rm, writeFile as writeFile2 } from "node:fs/promises";
import { dirname as dirname2, join } from "node:path";

// ../../packages/storage/src/paths.ts
import { resolve, sep } from "node:path";
function resolveWithin(root, key) {
  const base = resolve(root);
  const resolved = resolve(base, key);
  if (resolved !== base && !resolved.startsWith(base + sep)) {
    throw new Error(`Key escapes storage root: ${key}`);
  }
  return resolved;
}
function toKey(root, absolutePath, suffix) {
  const base = resolve(root);
  let rel = resolve(absolutePath).slice(base.length + 1);
  if (suffix && rel.endsWith(suffix)) {
    rel = rel.slice(0, -suffix.length);
  }
  return rel.split(sep).join("/");
}

// ../../packages/storage/src/file-blob-storage.ts
var FileBlobStorage = class {
  constructor(root) {
    this.root = root;
  }
  pathFor(key) {
    return resolveWithin(this.root, key);
  }
  async put(key, data) {
    const path = this.pathFor(key);
    await mkdir2(dirname2(path), { recursive: true });
    await writeFile2(path, data);
  }
  async get(key) {
    try {
      return await readFile2(this.pathFor(key));
    } catch (err) {
      if (err.code === "ENOENT") return void 0;
      throw err;
    }
  }
  async getText(key) {
    const buf = await this.get(key);
    return buf?.toString("utf8");
  }
  async has(key) {
    return await this.get(key) !== void 0;
  }
  async delete(key) {
    await rm(this.pathFor(key), { force: true });
  }
  async list(prefix = "") {
    const out = [];
    await this.walk(this.root, out);
    return out.filter((k) => k.startsWith(prefix)).sort();
  }
  async walk(dir, out) {
    const entries = await readdir(dir, { withFileTypes: true }).catch(
      (err) => {
        if (err.code === "ENOENT") return [];
        throw err;
      }
    );
    for (const entry of entries) {
      const abs = join(dir, entry.name);
      if (entry.isDirectory()) {
        await this.walk(abs, out);
      } else if (entry.isFile()) {
        out.push(toKey(this.root, abs, ""));
      }
    }
  }
};

// ../../packages/storage/src/cas-atomic-write.ts
import { mkdir as mkdir3, rename as rename2, rm as rm2, writeFile as writeFile3 } from "node:fs/promises";
import { dirname as dirname3 } from "node:path";
var tmpCounter = 0;
async function writeFileAtomic2(filePath, data) {
  await mkdir3(dirname3(filePath), { recursive: true });
  const tmp = `${filePath}.tmp-${process.pid}-${tmpCounter++}`;
  await writeFile3(tmp, data);
  try {
    await rename2(tmp, filePath);
  } catch (err) {
    await rm2(tmp, { force: true });
    throw err;
  }
}

// ../../packages/storage/src/file-key-storage.ts
import { readdir as readdir2, readFile as readFile3, rm as rm3 } from "node:fs/promises";
import { join as join2 } from "node:path";
var EXT = ".json";
var FileKeyStorage = class {
  constructor(root) {
    this.root = root;
  }
  pathFor(key) {
    return resolveWithin(this.root, `${key}${EXT}`);
  }
  async get(key) {
    try {
      const raw = await readFile3(this.pathFor(key), "utf8");
      return JSON.parse(raw);
    } catch (err) {
      if (err.code === "ENOENT") return void 0;
      throw err;
    }
  }
  async set(key, value2) {
    await writeFileAtomic2(this.pathFor(key), `${JSON.stringify(value2, null, "	")}
`);
  }
  async has(key) {
    return await this.get(key) !== void 0;
  }
  async delete(key) {
    await rm3(this.pathFor(key), { force: true });
  }
  async keys(prefix = "") {
    const out = [];
    await this.walk(this.root, out);
    return out.filter((k) => k.startsWith(prefix)).sort();
  }
  async walk(dir, out) {
    const entries = await readdir2(dir, { withFileTypes: true }).catch(
      (err) => {
        if (err.code === "ENOENT") return [];
        throw err;
      }
    );
    for (const entry of entries) {
      const abs = join2(dir, entry.name);
      if (entry.isDirectory()) {
        await this.walk(abs, out);
      } else if (entry.isFile() && entry.name.endsWith(EXT)) {
        out.push(toKey(this.root, abs, EXT));
      }
    }
  }
};

// ../../packages/core/src/scoring/runtime-signals.ts
init_zod();
var DEFAULT_IMPORTANCE = 50;
var DEFAULT_RECENCY = 1;
var DEFAULT_MATURITY = "draft";
var DEFAULT_ACCESS_COUNT = 0;
var DEFAULT_UPDATE_COUNT = 0;
var MaturityTierSchema = external_exports.enum(["core", "draft", "validated"]);
var RuntimeSignalsSchema = external_exports.object({
  accessCount: external_exports.number().int().nonnegative().default(DEFAULT_ACCESS_COUNT),
  importance: external_exports.number().min(0).max(100).default(DEFAULT_IMPORTANCE),
  maturity: MaturityTierSchema.default(DEFAULT_MATURITY),
  recency: external_exports.number().min(0).max(1).default(DEFAULT_RECENCY),
  updateCount: external_exports.number().int().nonnegative().default(DEFAULT_UPDATE_COUNT)
});
function createDefaultRuntimeSignals() {
  return {
    accessCount: DEFAULT_ACCESS_COUNT,
    importance: DEFAULT_IMPORTANCE,
    maturity: DEFAULT_MATURITY,
    recency: DEFAULT_RECENCY,
    updateCount: DEFAULT_UPDATE_COUNT
  };
}

// ../../packages/core/src/tree/signals.ts
function signalStore(root) {
  return new FileKeyStorage(join3(dirname4(root), "state", "signals"));
}
async function getManySignals(root, topicPaths) {
  const store = signalStore(root);
  const out = /* @__PURE__ */ new Map();
  for (const path of topicPaths) {
    const signals = await store.get(path) ?? createDefaultRuntimeSignals();
    out.set(path, signals);
  }
  return out;
}

// ../../packages/core/src/tree/index-generator.ts
import { join as join6 } from "node:path";

// ../../packages/core/src/render/index-elements/validate-index.ts
init_zod();
init_html_parser();
var BvIndexAttributesSchema = external_exports.object({
  domaincount: external_exports.string().optional(),
  generatedat: external_exports.string().optional(),
  project: external_exports.string().optional(),
  topiccount: external_exports.string().optional()
}).passthrough();
var BvIndexDomainAttributesSchema = external_exports.object({
  count: external_exports.string().optional(),
  name: external_exports.string().min(1, { message: "bv-index-domain requires a name" })
}).passthrough();
var BvIndexEntryAttributesSchema = external_exports.object({
  format: external_exports.string().optional(),
  path: external_exports.string().min(1, { message: "bv-index-entry requires a path" }),
  title: external_exports.string().optional()
}).passthrough();
function validateHtmlIndex(html) {
  const errors = [];
  const doc = parseHtml(html);
  const top = doc.children.filter(
    (n) => !(n.type === "text" && n.text.trim() === "")
  );
  const root = top[0];
  if (top.length !== 1 || root === void 0 || root.type !== "element" || root.tagName !== "bv-index") {
    return {
      errors: [{ field: "root", message: "index must have a single <bv-index> root" }],
      valid: false
    };
  }
  collectZod(errors, "bv-index", BvIndexAttributesSchema.safeParse(root.attributes));
  for (const domain of elementChildren(root)) {
    if (domain.tagName !== "bv-index-domain") {
      errors.push({
        field: domain.tagName,
        message: `<bv-index> children must be <bv-index-domain>, got <${domain.tagName}>`
      });
      continue;
    }
    collectZod(
      errors,
      "bv-index-domain",
      BvIndexDomainAttributesSchema.safeParse(domain.attributes)
    );
    for (const entry of elementChildren(domain)) {
      if (entry.tagName !== "bv-index-entry") {
        errors.push({
          field: entry.tagName,
          message: `<bv-index-domain> children must be <bv-index-entry>, got <${entry.tagName}>`
        });
        continue;
      }
      collectZod(
        errors,
        "bv-index-entry",
        BvIndexEntryAttributesSchema.safeParse(entry.attributes)
      );
    }
  }
  return errors.length > 0 ? { errors, valid: false } : { valid: true };
}
function elementChildren(el) {
  const out = [];
  for (const child of el.children) {
    if (child.type === "element") out.push(child);
  }
  return out;
}
function collectZod(errors, tag, parsed) {
  if (parsed.success) return;
  for (const issue of parsed.error.issues) {
    errors.push({
      field: `${tag}.${issue.path.join(".") || "attributes"}`,
      message: issue.message
    });
  }
}

// ../../packages/core/src/tree/index-generator.ts
init_atomic_write();
init_html_writer();
init_topics();
function escapeText(text) {
  return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
async function rebuildIndex(root, options = {}) {
  const paths = await listTopics(root);
  const byDomain = /* @__PURE__ */ new Map();
  for (const path of paths) {
    const topic = await readTopic(root, path);
    const domain = path.includes("/") ? path.split("/")[0] : "(root)";
    const list = byDomain.get(domain) ?? [];
    list.push({
      path,
      summary: topic.attributes.summary ?? "",
      title: topic.attributes.title ?? path
    });
    byDomain.set(domain, list);
  }
  const now = options.now ?? "";
  const project = options.project ?? "context-tree";
  const domains = [...byDomain.entries()].sort(
    (a, b) => a[0].localeCompare(b[0])
  );
  const domainXml = domains.map(([name, entries]) => {
    const entryXml = [...entries].sort((a, b) => a.path.localeCompare(b.path)).map(
      (e) => `<bv-index-entry path="${escapeHtmlAttributeValue(e.path)}" title="${escapeHtmlAttributeValue(e.title)}" format="html">${escapeText(e.summary)}</bv-index-entry>`
    ).join("");
    return `<bv-index-domain name="${escapeHtmlAttributeValue(name)}" count="${entries.length}">${entryXml}</bv-index-domain>`;
  }).join("");
  const html = `<bv-index project="${escapeHtmlAttributeValue(project)}" generatedat="${escapeHtmlAttributeValue(now)}" topiccount="${paths.length}" domaincount="${domains.length}">${domainXml}</bv-index>`;
  const validation = validateHtmlIndex(html);
  if (!validation.valid) {
    throw new Error(
      `generated <bv-index> failed validation: ${validation.errors.map((e) => `${e.field}: ${e.message}`).join("; ")}`
    );
  }
  await writeFileAtomic(join6(root, INDEX_FILE), html);
  return html;
}

// ../../packages/core/src/tree/manifest.ts
import { createHash as createHash2 } from "node:crypto";
import { readFile as readFile4, stat, writeFile as writeFile4 } from "node:fs/promises";

// ../../packages/core/src/identity/canonical.ts
init_html_parser();
init_topic_attributes();
import { createHash } from "node:crypto";
var CANON_VERSION = "1";
var EXCLUDED_ROOT_ATTRS = /* @__PURE__ */ new Set([
  "id",
  "path",
  "createdat",
  "updatedat",
  // Agent attribution is system-managed provenance, not semantic content — a
  // rewrite by a different agent must not change the topic's hash, or
  // snapshots/diff would treat attribution as content changes.
  "createdby",
  "updatedby",
  "by",
  "host"
]);
function canonicalTopicHash(html) {
  return createHash("sha256").update(`bvtopic
${CANON_VERSION}
${canonicalizeTopic(html)}`).digest("hex");
}
function canonicalizeTopic(html) {
  return serializeElement(findRootTopic(parseHtml(html)), true);
}
function findRootTopic(doc) {
  const topLevel = doc.children.filter(
    (node) => !(node.type === "text" && node.text.trim() === "")
  );
  const root = topLevel[0];
  if (topLevel.length !== 1 || root === void 0 || root.type !== "element" || root.tagName !== "bv-topic") {
    throw new Error(
      "canonicalizeTopic: input must be exactly one top-level <bv-topic> root"
    );
  }
  return root;
}
function serializeElement(element, isRoot) {
  const attributes = Object.entries(element.attributes).filter(([name]) => !(isRoot && EXCLUDED_ROOT_ATTRS.has(name))).sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0).map(([name, value2]) => ` ${name}="${escapeHtmlAttributeValue(value2)}"`).join("");
  return `<${element.tagName}${attributes}>${serializeChildren(element.children)}</${element.tagName}>`;
}
function serializeChildren(children) {
  let out = "";
  for (const child of children) {
    if (child.type === "text") {
      out += escapeText2(child.text.replaceAll(/\s+/g, " "));
    } else if (child.type === "element") {
      out += serializeElement(child, false);
    }
  }
  return out;
}
function escapeText2(text) {
  return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

// ../../packages/core/src/tree/manifest.ts
init_paths();
init_topics();
var MANIFEST_FILE = "_manifest.json";
var DEFAULT_LANE_BUDGETS = {
  contexts: 4e3,
  summaries: 4e3,
  topics: 16e3
};
function laneFor(type2) {
  if (type2 === "summary") return "summaries";
  if (type2 === "context") return "contexts";
  return "topics";
}
async function rebuildManifest(root, options = {}) {
  const budgets = options.budgets ?? DEFAULT_LANE_BUDGETS;
  const fingerprintMode = options.fingerprint ?? "stat";
  const paths = await listTopics(root);
  const signals = await getManySignals(root, paths);
  const byLane = {
    contexts: [],
    summaries: [],
    topics: []
  };
  const fingerprintParts = [];
  for (const path of paths) {
    const topic = await readTopic(root, path);
    const tokens = estimateTokens(topic.bodyText) + estimateTokens(topic.attributes.summary ?? "");
    const type2 = topic.attributes.type ?? "topic";
    const lane = laneFor(type2);
    const importance = signals.get(path)?.importance ?? 50;
    byLane[lane].push({
      importance,
      lane,
      path,
      title: topic.attributes.title ?? path,
      tokens,
      type: type2
    });
    fingerprintParts.push(
      await fingerprintLine(root, path, signals.get(path), fingerprintMode)
    );
  }
  const active = [];
  const laneTokens = {
    contexts: 0,
    summaries: 0,
    topics: 0
  };
  for (const lane of ["contexts", "summaries", "topics"]) {
    const budget = budgets[lane];
    const ordered = byLane[lane].sort(
      (a, b) => b.importance - a.importance || a.path.localeCompare(b.path)
    );
    for (const entry of ordered) {
      if (laneTokens[lane] + entry.tokens > budget && laneTokens[lane] > 0) {
        continue;
      }
      laneTokens[lane] += entry.tokens;
      active.push(entry);
    }
  }
  active.sort((a, b) => a.path.localeCompare(b.path));
  const manifest = {
    active_context: active,
    lane_tokens: laneTokens,
    source_fingerprint: createHash2("sha1").update(fingerprintParts.sort().join("\n")).digest("hex"),
    source_fingerprint_mode: fingerprintMode,
    total_tokens: laneTokens.contexts + laneTokens.summaries + laneTokens.topics,
    version: 1
  };
  await writeFile4(
    resolveWithinTree(root, MANIFEST_FILE),
    `${JSON.stringify(manifest, null, "	")}
`,
    "utf8"
  );
  return manifest;
}
async function fingerprintLine(root, path, signal, mode) {
  const sig = `${signal?.importance ?? 50} ${signal?.maturity ?? "draft"}`;
  if (mode === "content") {
    try {
      const content = await readFile4(resolveWithinTree(root, path), "utf8");
      return `${path} ${canonicalTopicHash(content)} ${sig}`;
    } catch {
      return `${path} ? ${sig}`;
    }
  }
  try {
    const s = await stat(resolveWithinTree(root, path));
    return `${path} ${s.mtimeMs} ${s.size} ${sig}`;
  } catch {
    return `${path} ? ? ${sig}`;
  }
}

// ../../packages/core/src/reconcile/reconciler.ts
init_topics();

// ../../packages/core/src/reconcile/apply-related-changes.ts
init_html_reader();
init_atomic_write();
init_topic_attributes();
init_topics();

// ../../packages/core/src/reconcile/watch-handler.ts
init_topic_attributes();

// ../../packages/core/src/identity/backfill.ts
init_atomic_write();
init_topic_attributes();
init_paths();
init_topics();
init_topic_id();

// ../../packages/core/src/index.ts
init_topic_id();
init_uuid_v4();

// ../../packages/core/src/snapshots/descriptor.ts
init_topics();

// ../../packages/core/src/snapshots/diff.ts
init_topic_attributes();
init_paths();
init_topics();

// ../../packages/core/src/snapshots/open.ts
init_atomic_write();
init_paths();

// ../../packages/core/src/snapshots/pack.ts
init_topic_attributes();
init_paths();
init_topics();

// ../../packages/core/src/snapshots/refs.ts
init_atomic_write();

// ../../node_modules/.pnpm/js-yaml@4.1.1/node_modules/js-yaml/dist/js-yaml.mjs
function isNothing(subject) {
  return typeof subject === "undefined" || subject === null;
}
function isObject(subject) {
  return typeof subject === "object" && subject !== null;
}
function toArray(sequence) {
  if (Array.isArray(sequence)) return sequence;
  else if (isNothing(sequence)) return [];
  return [sequence];
}
function extend(target, source) {
  var index, length, key, sourceKeys;
  if (source) {
    sourceKeys = Object.keys(source);
    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }
  return target;
}
function repeat(string, count) {
  var result = "", cycle;
  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }
  return result;
}
function isNegativeZero(number) {
  return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
}
var isNothing_1 = isNothing;
var isObject_1 = isObject;
var toArray_1 = toArray;
var repeat_1 = repeat;
var isNegativeZero_1 = isNegativeZero;
var extend_1 = extend;
var common = {
  isNothing: isNothing_1,
  isObject: isObject_1,
  toArray: toArray_1,
  repeat: repeat_1,
  isNegativeZero: isNegativeZero_1,
  extend: extend_1
};
function formatError(exception2, compact) {
  var where = "", message = exception2.reason || "(unknown reason)";
  if (!exception2.mark) return message;
  if (exception2.mark.name) {
    where += 'in "' + exception2.mark.name + '" ';
  }
  where += "(" + (exception2.mark.line + 1) + ":" + (exception2.mark.column + 1) + ")";
  if (!compact && exception2.mark.snippet) {
    where += "\n\n" + exception2.mark.snippet;
  }
  return message + " " + where;
}
function YAMLException$1(reason, mark) {
  Error.call(this);
  this.name = "YAMLException";
  this.reason = reason;
  this.mark = mark;
  this.message = formatError(this, false);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack || "";
  }
}
YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;
YAMLException$1.prototype.toString = function toString(compact) {
  return this.name + ": " + formatError(this, compact);
};
var exception = YAMLException$1;
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
  var head = "";
  var tail = "";
  var maxHalfLength = Math.floor(maxLineLength / 2) - 1;
  if (position - lineStart > maxHalfLength) {
    head = " ... ";
    lineStart = position - maxHalfLength + head.length;
  }
  if (lineEnd - position > maxHalfLength) {
    tail = " ...";
    lineEnd = position + maxHalfLength - tail.length;
  }
  return {
    str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, "\u2192") + tail,
    pos: position - lineStart + head.length
    // relative position
  };
}
function padStart(string, max) {
  return common.repeat(" ", max - string.length) + string;
}
function makeSnippet(mark, options) {
  options = Object.create(options || null);
  if (!mark.buffer) return null;
  if (!options.maxLength) options.maxLength = 79;
  if (typeof options.indent !== "number") options.indent = 1;
  if (typeof options.linesBefore !== "number") options.linesBefore = 3;
  if (typeof options.linesAfter !== "number") options.linesAfter = 2;
  var re2 = /\r?\n|\r|\0/g;
  var lineStarts = [0];
  var lineEnds = [];
  var match;
  var foundLineNo = -1;
  while (match = re2.exec(mark.buffer)) {
    lineEnds.push(match.index);
    lineStarts.push(match.index + match[0].length);
    if (mark.position <= match.index && foundLineNo < 0) {
      foundLineNo = lineStarts.length - 2;
    }
  }
  if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;
  var result = "", i, line;
  var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
  var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);
  for (i = 1; i <= options.linesBefore; i++) {
    if (foundLineNo - i < 0) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo - i],
      lineEnds[foundLineNo - i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]),
      maxLineLength
    );
    result = common.repeat(" ", options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) + " | " + line.str + "\n" + result;
  }
  line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
  result += common.repeat(" ", options.indent) + padStart((mark.line + 1).toString(), lineNoLength) + " | " + line.str + "\n";
  result += common.repeat("-", options.indent + lineNoLength + 3 + line.pos) + "^\n";
  for (i = 1; i <= options.linesAfter; i++) {
    if (foundLineNo + i >= lineEnds.length) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo + i],
      lineEnds[foundLineNo + i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]),
      maxLineLength
    );
    result += common.repeat(" ", options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) + " | " + line.str + "\n";
  }
  return result.replace(/\n$/, "");
}
var snippet = makeSnippet;
var TYPE_CONSTRUCTOR_OPTIONS = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
];
var YAML_NODE_KINDS = [
  "scalar",
  "sequence",
  "mapping"
];
function compileStyleAliases(map2) {
  var result = {};
  if (map2 !== null) {
    Object.keys(map2).forEach(function(style) {
      map2[style].forEach(function(alias) {
        result[String(alias)] = style;
      });
    });
  }
  return result;
}
function Type$1(tag, options) {
  options = options || {};
  Object.keys(options).forEach(function(name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });
  this.options = options;
  this.tag = tag;
  this.kind = options["kind"] || null;
  this.resolve = options["resolve"] || function() {
    return true;
  };
  this.construct = options["construct"] || function(data) {
    return data;
  };
  this.instanceOf = options["instanceOf"] || null;
  this.predicate = options["predicate"] || null;
  this.represent = options["represent"] || null;
  this.representName = options["representName"] || null;
  this.defaultStyle = options["defaultStyle"] || null;
  this.multi = options["multi"] || false;
  this.styleAliases = compileStyleAliases(options["styleAliases"] || null);
  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}
var type = Type$1;
function compileList(schema2, name) {
  var result = [];
  schema2[name].forEach(function(currentType) {
    var newIndex = result.length;
    result.forEach(function(previousType, previousIndex) {
      if (previousType.tag === currentType.tag && previousType.kind === currentType.kind && previousType.multi === currentType.multi) {
        newIndex = previousIndex;
      }
    });
    result[newIndex] = currentType;
  });
  return result;
}
function compileMap() {
  var result = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, index, length;
  function collectType(type2) {
    if (type2.multi) {
      result.multi[type2.kind].push(type2);
      result.multi["fallback"].push(type2);
    } else {
      result[type2.kind][type2.tag] = result["fallback"][type2.tag] = type2;
    }
  }
  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}
function Schema$1(definition) {
  return this.extend(definition);
}
Schema$1.prototype.extend = function extend2(definition) {
  var implicit = [];
  var explicit = [];
  if (definition instanceof type) {
    explicit.push(definition);
  } else if (Array.isArray(definition)) {
    explicit = explicit.concat(definition);
  } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
    if (definition.implicit) implicit = implicit.concat(definition.implicit);
    if (definition.explicit) explicit = explicit.concat(definition.explicit);
  } else {
    throw new exception("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  }
  implicit.forEach(function(type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    }
    if (type$1.loadKind && type$1.loadKind !== "scalar") {
      throw new exception("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    }
    if (type$1.multi) {
      throw new exception("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
    }
  });
  explicit.forEach(function(type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    }
  });
  var result = Object.create(Schema$1.prototype);
  result.implicit = (this.implicit || []).concat(implicit);
  result.explicit = (this.explicit || []).concat(explicit);
  result.compiledImplicit = compileList(result, "implicit");
  result.compiledExplicit = compileList(result, "explicit");
  result.compiledTypeMap = compileMap(result.compiledImplicit, result.compiledExplicit);
  return result;
};
var schema = Schema$1;
var str = new type("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(data) {
    return data !== null ? data : "";
  }
});
var seq = new type("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(data) {
    return data !== null ? data : [];
  }
});
var map = new type("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(data) {
    return data !== null ? data : {};
  }
});
var failsafe = new schema({
  explicit: [
    str,
    seq,
    map
  ]
});
function resolveYamlNull(data) {
  if (data === null) return true;
  var max = data.length;
  return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
}
function constructYamlNull() {
  return null;
}
function isNull(object) {
  return object === null;
}
var _null = new type("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
});
function resolveYamlBoolean(data) {
  if (data === null) return false;
  var max = data.length;
  return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
}
function constructYamlBoolean(data) {
  return data === "true" || data === "True" || data === "TRUE";
}
function isBoolean(object) {
  return Object.prototype.toString.call(object) === "[object Boolean]";
}
var bool = new type("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function(object) {
      return object ? "true" : "false";
    },
    uppercase: function(object) {
      return object ? "TRUE" : "FALSE";
    },
    camelcase: function(object) {
      return object ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function isHexCode(c) {
  return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
}
function isOctCode(c) {
  return 48 <= c && c <= 55;
}
function isDecCode(c) {
  return 48 <= c && c <= 57;
}
function resolveYamlInteger(data) {
  if (data === null) return false;
  var max = data.length, index = 0, hasDigits = false, ch;
  if (!max) return false;
  ch = data[index];
  if (ch === "-" || ch === "+") {
    ch = data[++index];
  }
  if (ch === "0") {
    if (index + 1 === max) return true;
    ch = data[++index];
    if (ch === "b") {
      index++;
      for (; index < max; index++) {
        ch = data[index];
        if (ch === "_") continue;
        if (ch !== "0" && ch !== "1") return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
    if (ch === "x") {
      index++;
      for (; index < max; index++) {
        ch = data[index];
        if (ch === "_") continue;
        if (!isHexCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
    if (ch === "o") {
      index++;
      for (; index < max; index++) {
        ch = data[index];
        if (ch === "_") continue;
        if (!isOctCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
  }
  if (ch === "_") return false;
  for (; index < max; index++) {
    ch = data[index];
    if (ch === "_") continue;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }
  if (!hasDigits || ch === "_") return false;
  return true;
}
function constructYamlInteger(data) {
  var value2 = data, sign = 1, ch;
  if (value2.indexOf("_") !== -1) {
    value2 = value2.replace(/_/g, "");
  }
  ch = value2[0];
  if (ch === "-" || ch === "+") {
    if (ch === "-") sign = -1;
    value2 = value2.slice(1);
    ch = value2[0];
  }
  if (value2 === "0") return 0;
  if (ch === "0") {
    if (value2[1] === "b") return sign * parseInt(value2.slice(2), 2);
    if (value2[1] === "x") return sign * parseInt(value2.slice(2), 16);
    if (value2[1] === "o") return sign * parseInt(value2.slice(2), 8);
  }
  return sign * parseInt(value2, 10);
}
function isInteger(object) {
  return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 === 0 && !common.isNegativeZero(object));
}
var int = new type("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary: function(obj) {
      return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
    },
    octal: function(obj) {
      return obj >= 0 ? "0o" + obj.toString(8) : "-0o" + obj.toString(8).slice(1);
    },
    decimal: function(obj) {
      return obj.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(obj) {
      return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
});
var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function resolveYamlFloat(data) {
  if (data === null) return false;
  if (!YAML_FLOAT_PATTERN.test(data) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  data[data.length - 1] === "_") {
    return false;
  }
  return true;
}
function constructYamlFloat(data) {
  var value2, sign;
  value2 = data.replace(/_/g, "").toLowerCase();
  sign = value2[0] === "-" ? -1 : 1;
  if ("+-".indexOf(value2[0]) >= 0) {
    value2 = value2.slice(1);
  }
  if (value2 === ".inf") {
    return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  } else if (value2 === ".nan") {
    return NaN;
  }
  return sign * parseFloat(value2, 10);
}
var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
function representYamlFloat(object, style) {
  var res;
  if (isNaN(object)) {
    switch (style) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  } else if (common.isNegativeZero(object)) {
    return "-0.0";
  }
  res = object.toString(10);
  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
}
function isFloat(object) {
  return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || common.isNegativeZero(object));
}
var float = new type("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: "lowercase"
});
var json = failsafe.extend({
  implicit: [
    _null,
    bool,
    int,
    float
  ]
});
var core = json;
var YAML_DATE_REGEXP = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
);
var YAML_TIMESTAMP_REGEXP = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function resolveYamlTimestamp(data) {
  if (data === null) return false;
  if (YAML_DATE_REGEXP.exec(data) !== null) return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
  return false;
}
function constructYamlTimestamp(data) {
  var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
  match = YAML_DATE_REGEXP.exec(data);
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);
  if (match === null) throw new Error("Date resolve error");
  year = +match[1];
  month = +match[2] - 1;
  day = +match[3];
  if (!match[4]) {
    return new Date(Date.UTC(year, month, day));
  }
  hour = +match[4];
  minute = +match[5];
  second = +match[6];
  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) {
      fraction += "0";
    }
    fraction = +fraction;
  }
  if (match[9]) {
    tz_hour = +match[10];
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 6e4;
    if (match[9] === "-") delta = -delta;
  }
  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
  if (delta) date.setTime(date.getTime() - delta);
  return date;
}
function representYamlTimestamp(object) {
  return object.toISOString();
}
var timestamp = new type("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});
function resolveYamlMerge(data) {
  return data === "<<" || data === null;
}
var merge = new type("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: resolveYamlMerge
});
var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
function resolveYamlBinary(data) {
  if (data === null) return false;
  var code, idx, bitlen = 0, max = data.length, map2 = BASE64_MAP;
  for (idx = 0; idx < max; idx++) {
    code = map2.indexOf(data.charAt(idx));
    if (code > 64) continue;
    if (code < 0) return false;
    bitlen += 6;
  }
  return bitlen % 8 === 0;
}
function constructYamlBinary(data) {
  var idx, tailbits, input = data.replace(/[\r\n=]/g, ""), max = input.length, map2 = BASE64_MAP, bits = 0, result = [];
  for (idx = 0; idx < max; idx++) {
    if (idx % 4 === 0 && idx) {
      result.push(bits >> 16 & 255);
      result.push(bits >> 8 & 255);
      result.push(bits & 255);
    }
    bits = bits << 6 | map2.indexOf(input.charAt(idx));
  }
  tailbits = max % 4 * 6;
  if (tailbits === 0) {
    result.push(bits >> 16 & 255);
    result.push(bits >> 8 & 255);
    result.push(bits & 255);
  } else if (tailbits === 18) {
    result.push(bits >> 10 & 255);
    result.push(bits >> 2 & 255);
  } else if (tailbits === 12) {
    result.push(bits >> 4 & 255);
  }
  return new Uint8Array(result);
}
function representYamlBinary(object) {
  var result = "", bits = 0, idx, tail, max = object.length, map2 = BASE64_MAP;
  for (idx = 0; idx < max; idx++) {
    if (idx % 3 === 0 && idx) {
      result += map2[bits >> 18 & 63];
      result += map2[bits >> 12 & 63];
      result += map2[bits >> 6 & 63];
      result += map2[bits & 63];
    }
    bits = (bits << 8) + object[idx];
  }
  tail = max % 3;
  if (tail === 0) {
    result += map2[bits >> 18 & 63];
    result += map2[bits >> 12 & 63];
    result += map2[bits >> 6 & 63];
    result += map2[bits & 63];
  } else if (tail === 2) {
    result += map2[bits >> 10 & 63];
    result += map2[bits >> 4 & 63];
    result += map2[bits << 2 & 63];
    result += map2[64];
  } else if (tail === 1) {
    result += map2[bits >> 2 & 63];
    result += map2[bits << 4 & 63];
    result += map2[64];
    result += map2[64];
  }
  return result;
}
function isBinary(obj) {
  return Object.prototype.toString.call(obj) === "[object Uint8Array]";
}
var binary = new type("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});
var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2 = Object.prototype.toString;
function resolveYamlOmap(data) {
  if (data === null) return true;
  var objectKeys = [], index, length, pair, pairKey, pairHasKey, object = data;
  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;
    if (_toString$2.call(pair) !== "[object Object]") return false;
    for (pairKey in pair) {
      if (_hasOwnProperty$3.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true;
        else return false;
      }
    }
    if (!pairHasKey) return false;
    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
    else return false;
  }
  return true;
}
function constructYamlOmap(data) {
  return data !== null ? data : [];
}
var omap = new type("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});
var _toString$1 = Object.prototype.toString;
function resolveYamlPairs(data) {
  if (data === null) return true;
  var index, length, pair, keys, result, object = data;
  result = new Array(object.length);
  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    if (_toString$1.call(pair) !== "[object Object]") return false;
    keys = Object.keys(pair);
    if (keys.length !== 1) return false;
    result[index] = [keys[0], pair[keys[0]]];
  }
  return true;
}
function constructYamlPairs(data) {
  if (data === null) return [];
  var index, length, pair, keys, result, object = data;
  result = new Array(object.length);
  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    keys = Object.keys(pair);
    result[index] = [keys[0], pair[keys[0]]];
  }
  return result;
}
var pairs = new type("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});
var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function resolveYamlSet(data) {
  if (data === null) return true;
  var key, object = data;
  for (key in object) {
    if (_hasOwnProperty$2.call(object, key)) {
      if (object[key] !== null) return false;
    }
  }
  return true;
}
function constructYamlSet(data) {
  return data !== null ? data : {};
}
var set = new type("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: resolveYamlSet,
  construct: constructYamlSet
});
var _default = core.extend({
  implicit: [
    timestamp,
    merge
  ],
  explicit: [
    binary,
    omap,
    pairs,
    set
  ]
});
var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var CONTEXT_FLOW_IN = 1;
var CONTEXT_FLOW_OUT = 2;
var CONTEXT_BLOCK_IN = 3;
var CONTEXT_BLOCK_OUT = 4;
var CHOMPING_CLIP = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP = 3;
var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function _class(obj) {
  return Object.prototype.toString.call(obj);
}
function is_EOL(c) {
  return c === 10 || c === 13;
}
function is_WHITE_SPACE(c) {
  return c === 9 || c === 32;
}
function is_WS_OR_EOL(c) {
  return c === 9 || c === 32 || c === 10 || c === 13;
}
function is_FLOW_INDICATOR(c) {
  return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
}
function fromHexCode(c) {
  var lc;
  if (48 <= c && c <= 57) {
    return c - 48;
  }
  lc = c | 32;
  if (97 <= lc && lc <= 102) {
    return lc - 97 + 10;
  }
  return -1;
}
function escapedHexLen(c) {
  if (c === 120) {
    return 2;
  }
  if (c === 117) {
    return 4;
  }
  if (c === 85) {
    return 8;
  }
  return 0;
}
function fromDecimalCode(c) {
  if (48 <= c && c <= 57) {
    return c - 48;
  }
  return -1;
}
function simpleEscapeSequence(c) {
  return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1B" : c === 32 ? " " : c === 34 ? '"' : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "\x85" : c === 95 ? "\xA0" : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
}
function charFromCodepoint(c) {
  if (c <= 65535) {
    return String.fromCharCode(c);
  }
  return String.fromCharCode(
    (c - 65536 >> 10) + 55296,
    (c - 65536 & 1023) + 56320
  );
}
function setProperty(object, key, value2) {
  if (key === "__proto__") {
    Object.defineProperty(object, key, {
      configurable: true,
      enumerable: true,
      writable: true,
      value: value2
    });
  } else {
    object[key] = value2;
  }
}
var simpleEscapeCheck = new Array(256);
var simpleEscapeMap = new Array(256);
for (i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}
var i;
function State$1(input, options) {
  this.input = input;
  this.filename = options["filename"] || null;
  this.schema = options["schema"] || _default;
  this.onWarning = options["onWarning"] || null;
  this.legacy = options["legacy"] || false;
  this.json = options["json"] || false;
  this.listener = options["listener"] || null;
  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap = this.schema.compiledTypeMap;
  this.length = input.length;
  this.position = 0;
  this.line = 0;
  this.lineStart = 0;
  this.lineIndent = 0;
  this.firstTabInLine = -1;
  this.documents = [];
}
function generateError(state, message) {
  var mark = {
    name: state.filename,
    buffer: state.input.slice(0, -1),
    // omit trailing \0
    position: state.position,
    line: state.line,
    column: state.position - state.lineStart
  };
  mark.snippet = snippet(mark);
  return new exception(message, mark);
}
function throwError(state, message) {
  throw generateError(state, message);
}
function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}
var directiveHandlers = {
  YAML: function handleYamlDirective(state, name, args) {
    var match, major, minor;
    if (state.version !== null) {
      throwError(state, "duplication of %YAML directive");
    }
    if (args.length !== 1) {
      throwError(state, "YAML directive accepts exactly one argument");
    }
    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
    if (match === null) {
      throwError(state, "ill-formed argument of the YAML directive");
    }
    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);
    if (major !== 1) {
      throwError(state, "unacceptable YAML version of the document");
    }
    state.version = args[0];
    state.checkLineBreaks = minor < 2;
    if (minor !== 1 && minor !== 2) {
      throwWarning(state, "unsupported YAML version of the document");
    }
  },
  TAG: function handleTagDirective(state, name, args) {
    var handle, prefix;
    if (args.length !== 2) {
      throwError(state, "TAG directive accepts exactly two arguments");
    }
    handle = args[0];
    prefix = args[1];
    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, "ill-formed tag handle (first argument) of the TAG directive");
    }
    if (_hasOwnProperty$1.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }
    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, "ill-formed tag prefix (second argument) of the TAG directive");
    }
    try {
      prefix = decodeURIComponent(prefix);
    } catch (err) {
      throwError(state, "tag prefix is malformed: " + prefix);
    }
    state.tagMap[handle] = prefix;
  }
};
function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;
  if (start < end) {
    _result = state.input.slice(start, end);
    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 9 || 32 <= _character && _character <= 1114111)) {
          throwError(state, "expected valid JSON character");
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, "the stream contains non-printable characters");
    }
    state.result += _result;
  }
}
function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;
  if (!common.isObject(source)) {
    throwError(state, "cannot merge mappings; the provided source object is unacceptable");
  }
  sourceKeys = Object.keys(source);
  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];
    if (!_hasOwnProperty$1.call(destination, key)) {
      setProperty(destination, key, source[key]);
      overridableKeys[key] = true;
    }
  }
}
function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startLineStart, startPos) {
  var index, quantity;
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);
    for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
      if (Array.isArray(keyNode[index])) {
        throwError(state, "nested arrays are not supported inside keys");
      }
      if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") {
        keyNode[index] = "[object Object]";
      }
    }
  }
  if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
    keyNode = "[object Object]";
  }
  keyNode = String(keyNode);
  if (_result === null) {
    _result = {};
  }
  if (keyTag === "tag:yaml.org,2002:merge") {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json && !_hasOwnProperty$1.call(overridableKeys, keyNode) && _hasOwnProperty$1.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.lineStart = startLineStart || state.lineStart;
      state.position = startPos || state.position;
      throwError(state, "duplicated mapping key");
    }
    setProperty(_result, keyNode, valueNode);
    delete overridableKeys[keyNode];
  }
  return _result;
}
function readLineBreak(state) {
  var ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 10) {
    state.position++;
  } else if (ch === 13) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 10) {
      state.position++;
    }
  } else {
    throwError(state, "a line break is expected");
  }
  state.line += 1;
  state.lineStart = state.position;
  state.firstTabInLine = -1;
}
function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      if (ch === 9 && state.firstTabInLine === -1) {
        state.firstTabInLine = state.position;
      }
      ch = state.input.charCodeAt(++state.position);
    }
    if (allowComments && ch === 35) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 10 && ch !== 13 && ch !== 0);
    }
    if (is_EOL(ch)) {
      readLineBreak(state);
      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;
      while (ch === 32) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }
  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, "deficient indentation");
  }
  return lineBreaks;
}
function testDocumentSeparator(state) {
  var _position = state.position, ch;
  ch = state.input.charCodeAt(_position);
  if ((ch === 45 || ch === 46) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
    _position += 3;
    ch = state.input.charCodeAt(_position);
    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }
  return false;
}
function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += " ";
  } else if (count > 1) {
    state.result += common.repeat("\n", count - 1);
  }
}
function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch;
  ch = state.input.charCodeAt(state.position);
  if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) {
    return false;
  }
  if (ch === 63 || ch === 45) {
    following = state.input.charCodeAt(state.position + 1);
    if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }
  state.kind = "scalar";
  state.result = "";
  captureStart = captureEnd = state.position;
  hasPendingContent = false;
  while (ch !== 0) {
    if (ch === 58) {
      following = state.input.charCodeAt(state.position + 1);
      if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }
    } else if (ch === 35) {
      preceding = state.input.charCodeAt(state.position - 1);
      if (is_WS_OR_EOL(preceding)) {
        break;
      }
    } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;
    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);
      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }
    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }
    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }
    ch = state.input.charCodeAt(++state.position);
  }
  captureSegment(state, captureStart, captureEnd, false);
  if (state.result) {
    return true;
  }
  state.kind = _kind;
  state.result = _result;
  return false;
}
function readSingleQuotedScalar(state, nodeIndent) {
  var ch, captureStart, captureEnd;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 39) {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  state.position++;
  captureStart = captureEnd = state.position;
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 39) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);
      if (ch === 39) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }
    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, "unexpected end of the document within a single quoted scalar");
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }
  throwError(state, "unexpected end of the stream within a single quoted scalar");
}
function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 34) {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  state.position++;
  captureStart = captureEnd = state.position;
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 34) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;
    } else if (ch === 92) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);
      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;
      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;
        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);
          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;
          } else {
            throwError(state, "expected hexadecimal character");
          }
        }
        state.result += charFromCodepoint(hexResult);
        state.position++;
      } else {
        throwError(state, "unknown escape sequence");
      }
      captureStart = captureEnd = state.position;
    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, "unexpected end of the document within a double quoted scalar");
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }
  throwError(state, "unexpected end of the stream within a double quoted scalar");
}
function readFlowCollection(state, nodeIndent) {
  var readNext = true, _line, _lineStart, _pos, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = /* @__PURE__ */ Object.create(null), keyNode, keyTag, valueNode, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 91) {
    terminator = 93;
    isMapping = false;
    _result = [];
  } else if (ch === 123) {
    terminator = 125;
    isMapping = true;
    _result = {};
  } else {
    return false;
  }
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(++state.position);
  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? "mapping" : "sequence";
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, "missed comma between flow collection entries");
    } else if (ch === 44) {
      throwError(state, "expected the node content, but found ','");
    }
    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;
    if (ch === 63) {
      following = state.input.charCodeAt(state.position + 1);
      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }
    _line = state.line;
    _lineStart = state.lineStart;
    _pos = state.position;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if ((isExplicitPair || state.line === _line) && ch === 58) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }
    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
    } else {
      _result.push(keyNode);
    }
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if (ch === 44) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }
  throwError(state, "unexpected end of the stream within a flow collection");
}
function readBlockScalar(state, nodeIndent) {
  var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 124) {
    folding = false;
  } else if (ch === 62) {
    folding = true;
  } else {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);
    if (ch === 43 || ch === 45) {
      if (CHOMPING_CLIP === chomping) {
        chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, "repeat of a chomping mode identifier");
      }
    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one");
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, "repeat of an indentation width identifier");
      }
    } else {
      break;
    }
  }
  if (is_WHITE_SPACE(ch)) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (is_WHITE_SPACE(ch));
    if (ch === 35) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (!is_EOL(ch) && ch !== 0);
    }
  }
  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;
    ch = state.input.charCodeAt(state.position);
    while ((!detectedIndent || state.lineIndent < textIndent) && ch === 32) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }
    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }
    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }
    if (state.lineIndent < textIndent) {
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) {
          state.result += "\n";
        }
      }
      break;
    }
    if (folding) {
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat("\n", emptyLines + 1);
      } else if (emptyLines === 0) {
        if (didReadContent) {
          state.result += " ";
        }
      } else {
        state.result += common.repeat("\n", emptyLines);
      }
    } else {
      state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
    }
    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;
    while (!is_EOL(ch) && ch !== 0) {
      ch = state.input.charCodeAt(++state.position);
    }
    captureSegment(state, captureStart, state.position, false);
  }
  return true;
}
function readBlockSequence(state, nodeIndent) {
  var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
  if (state.firstTabInLine !== -1) return false;
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    if (state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, "tab characters must not be used in indentation");
    }
    if (ch !== 45) {
      break;
    }
    following = state.input.charCodeAt(state.position + 1);
    if (!is_WS_OR_EOL(following)) {
      break;
    }
    detected = true;
    state.position++;
    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }
    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);
    ch = state.input.charCodeAt(state.position);
    if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
      throwError(state, "bad indentation of a sequence entry");
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = "sequence";
    state.result = _result;
    return true;
  }
  return false;
}
function readBlockMapping(state, nodeIndent, flowIndent) {
  var following, allowCompact, _line, _keyLine, _keyLineStart, _keyPos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = /* @__PURE__ */ Object.create(null), keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
  if (state.firstTabInLine !== -1) return false;
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    if (!atExplicitKey && state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, "tab characters must not be used in indentation");
    }
    following = state.input.charCodeAt(state.position + 1);
    _line = state.line;
    if ((ch === 63 || ch === 58) && is_WS_OR_EOL(following)) {
      if (ch === 63) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
          keyTag = keyNode = valueNode = null;
        }
        detected = true;
        atExplicitKey = true;
        allowCompact = true;
      } else if (atExplicitKey) {
        atExplicitKey = false;
        allowCompact = true;
      } else {
        throwError(state, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
      }
      state.position += 1;
      ch = following;
    } else {
      _keyLine = state.line;
      _keyLineStart = state.lineStart;
      _keyPos = state.position;
      if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
        break;
      }
      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);
        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        if (ch === 58) {
          ch = state.input.charCodeAt(++state.position);
          if (!is_WS_OR_EOL(ch)) {
            throwError(state, "a whitespace character is expected after the key-value separator within a block mapping");
          }
          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }
          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;
        } else if (detected) {
          throwError(state, "can not read an implicit mapping pair; a colon is missed");
        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true;
        }
      } else if (detected) {
        throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key");
      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true;
      }
    }
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (atExplicitKey) {
        _keyLine = state.line;
        _keyLineStart = state.lineStart;
        _keyPos = state.position;
      }
      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }
      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
        keyTag = keyNode = valueNode = null;
      }
      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }
    if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
      throwError(state, "bad indentation of a mapping entry");
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
  }
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = "mapping";
    state.result = _result;
  }
  return detected;
}
function readTagProperty(state) {
  var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 33) return false;
  if (state.tag !== null) {
    throwError(state, "duplication of a tag property");
  }
  ch = state.input.charCodeAt(++state.position);
  if (ch === 60) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);
  } else if (ch === 33) {
    isNamed = true;
    tagHandle = "!!";
    ch = state.input.charCodeAt(++state.position);
  } else {
    tagHandle = "!";
  }
  _position = state.position;
  if (isVerbatim) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (ch !== 0 && ch !== 62);
    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, "unexpected end of the stream within a verbatim tag");
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      if (ch === 33) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);
          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, "named tag handle cannot contain such characters");
          }
          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, "tag suffix cannot contain exclamation marks");
        }
      }
      ch = state.input.charCodeAt(++state.position);
    }
    tagName = state.input.slice(_position, state.position);
    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, "tag suffix cannot contain flow indicator characters");
    }
  }
  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, "tag name cannot contain such characters: " + tagName);
  }
  try {
    tagName = decodeURIComponent(tagName);
  } catch (err) {
    throwError(state, "tag name is malformed: " + tagName);
  }
  if (isVerbatim) {
    state.tag = tagName;
  } else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;
  } else if (tagHandle === "!") {
    state.tag = "!" + tagName;
  } else if (tagHandle === "!!") {
    state.tag = "tag:yaml.org,2002:" + tagName;
  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }
  return true;
}
function readAnchorProperty(state) {
  var _position, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 38) return false;
  if (state.anchor !== null) {
    throwError(state, "duplication of an anchor property");
  }
  ch = state.input.charCodeAt(++state.position);
  _position = state.position;
  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }
  if (state.position === _position) {
    throwError(state, "name of an anchor node must contain at least one character");
  }
  state.anchor = state.input.slice(_position, state.position);
  return true;
}
function readAlias(state) {
  var _position, alias, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 42) return false;
  ch = state.input.charCodeAt(++state.position);
  _position = state.position;
  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }
  if (state.position === _position) {
    throwError(state, "name of an alias node must contain at least one character");
  }
  alias = state.input.slice(_position, state.position);
  if (!_hasOwnProperty$1.call(state.anchorMap, alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }
  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}
function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, typeList, type2, flowIndent, blockIndent;
  if (state.listener !== null) {
    state.listener("open", state);
  }
  state.tag = null;
  state.anchor = null;
  state.kind = null;
  state.result = null;
  allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;
      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }
  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;
        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }
  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }
  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }
    blockIndent = state.position - state.lineStart;
    if (indentStatus === 1) {
      if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;
        } else if (readAlias(state)) {
          hasContent = true;
          if (state.tag !== null || state.anchor !== null) {
            throwError(state, "alias node should not have any properties");
          }
        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;
          if (state.tag === null) {
            state.tag = "?";
          }
        }
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }
  if (state.tag === null) {
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = state.result;
    }
  } else if (state.tag === "?") {
    if (state.result !== null && state.kind !== "scalar") {
      throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
    }
    for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
      type2 = state.implicitTypes[typeIndex];
      if (type2.resolve(state.result)) {
        state.result = type2.construct(state.result);
        state.tag = type2.tag;
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
        break;
      }
    }
  } else if (state.tag !== "!") {
    if (_hasOwnProperty$1.call(state.typeMap[state.kind || "fallback"], state.tag)) {
      type2 = state.typeMap[state.kind || "fallback"][state.tag];
    } else {
      type2 = null;
      typeList = state.typeMap.multi[state.kind || "fallback"];
      for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
        if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
          type2 = typeList[typeIndex];
          break;
        }
      }
    }
    if (!type2) {
      throwError(state, "unknown tag !<" + state.tag + ">");
    }
    if (state.result !== null && type2.kind !== state.kind) {
      throwError(state, "unacceptable node kind for !<" + state.tag + '> tag; it should be "' + type2.kind + '", not "' + state.kind + '"');
    }
    if (!type2.resolve(state.result, state.tag)) {
      throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");
    } else {
      state.result = type2.construct(state.result, state.tag);
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = state.result;
      }
    }
  }
  if (state.listener !== null) {
    state.listener("close", state);
  }
  return state.tag !== null || state.anchor !== null || hasContent;
}
function readDocument(state) {
  var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = /* @__PURE__ */ Object.create(null);
  state.anchorMap = /* @__PURE__ */ Object.create(null);
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);
    ch = state.input.charCodeAt(state.position);
    if (state.lineIndent > 0 || ch !== 37) {
      break;
    }
    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }
    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];
    if (directiveName.length < 1) {
      throwError(state, "directive name must not be less than one character in length");
    }
    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (ch === 35) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (ch !== 0 && !is_EOL(ch));
        break;
      }
      if (is_EOL(ch)) break;
      _position = state.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      directiveArgs.push(state.input.slice(_position, state.position));
    }
    if (ch !== 0) readLineBreak(state);
    if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }
  skipSeparationSpace(state, true, -1);
  if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);
  } else if (hasDirectives) {
    throwError(state, "directives end mark is expected");
  }
  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);
  if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, "non-ASCII line breaks are interpreted as content");
  }
  state.documents.push(state.result);
  if (state.position === state.lineStart && testDocumentSeparator(state)) {
    if (state.input.charCodeAt(state.position) === 46) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }
  if (state.position < state.length - 1) {
    throwError(state, "end of the stream or a document separator is expected");
  } else {
    return;
  }
}
function loadDocuments(input, options) {
  input = String(input);
  options = options || {};
  if (input.length !== 0) {
    if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) {
      input += "\n";
    }
    if (input.charCodeAt(0) === 65279) {
      input = input.slice(1);
    }
  }
  var state = new State$1(input, options);
  var nullpos = input.indexOf("\0");
  if (nullpos !== -1) {
    state.position = nullpos;
    throwError(state, "null byte is not allowed in input");
  }
  state.input += "\0";
  while (state.input.charCodeAt(state.position) === 32) {
    state.lineIndent += 1;
    state.position += 1;
  }
  while (state.position < state.length - 1) {
    readDocument(state);
  }
  return state.documents;
}
function loadAll$1(input, iterator, options) {
  if (iterator !== null && typeof iterator === "object" && typeof options === "undefined") {
    options = iterator;
    iterator = null;
  }
  var documents = loadDocuments(input, options);
  if (typeof iterator !== "function") {
    return documents;
  }
  for (var index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}
function load$1(input, options) {
  var documents = loadDocuments(input, options);
  if (documents.length === 0) {
    return void 0;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new exception("expected a single document in the stream, but found more");
}
var loadAll_1 = loadAll$1;
var load_1 = load$1;
var loader = {
  loadAll: loadAll_1,
  load: load_1
};
var _toString = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var CHAR_BOM = 65279;
var CHAR_TAB = 9;
var CHAR_LINE_FEED = 10;
var CHAR_CARRIAGE_RETURN = 13;
var CHAR_SPACE = 32;
var CHAR_EXCLAMATION = 33;
var CHAR_DOUBLE_QUOTE = 34;
var CHAR_SHARP = 35;
var CHAR_PERCENT = 37;
var CHAR_AMPERSAND = 38;
var CHAR_SINGLE_QUOTE = 39;
var CHAR_ASTERISK = 42;
var CHAR_COMMA = 44;
var CHAR_MINUS = 45;
var CHAR_COLON = 58;
var CHAR_EQUALS = 61;
var CHAR_GREATER_THAN = 62;
var CHAR_QUESTION = 63;
var CHAR_COMMERCIAL_AT = 64;
var CHAR_LEFT_SQUARE_BRACKET = 91;
var CHAR_RIGHT_SQUARE_BRACKET = 93;
var CHAR_GRAVE_ACCENT = 96;
var CHAR_LEFT_CURLY_BRACKET = 123;
var CHAR_VERTICAL_LINE = 124;
var CHAR_RIGHT_CURLY_BRACKET = 125;
var ESCAPE_SEQUENCES = {};
ESCAPE_SEQUENCES[0] = "\\0";
ESCAPE_SEQUENCES[7] = "\\a";
ESCAPE_SEQUENCES[8] = "\\b";
ESCAPE_SEQUENCES[9] = "\\t";
ESCAPE_SEQUENCES[10] = "\\n";
ESCAPE_SEQUENCES[11] = "\\v";
ESCAPE_SEQUENCES[12] = "\\f";
ESCAPE_SEQUENCES[13] = "\\r";
ESCAPE_SEQUENCES[27] = "\\e";
ESCAPE_SEQUENCES[34] = '\\"';
ESCAPE_SEQUENCES[92] = "\\\\";
ESCAPE_SEQUENCES[133] = "\\N";
ESCAPE_SEQUENCES[160] = "\\_";
ESCAPE_SEQUENCES[8232] = "\\L";
ESCAPE_SEQUENCES[8233] = "\\P";
var DEPRECATED_BOOLEANS_SYNTAX = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
];
var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function compileStyleMap(schema2, map2) {
  var result, keys, index, length, tag, style, type2;
  if (map2 === null) return {};
  result = {};
  keys = Object.keys(map2);
  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map2[tag]);
    if (tag.slice(0, 2) === "!!") {
      tag = "tag:yaml.org,2002:" + tag.slice(2);
    }
    type2 = schema2.compiledTypeMap["fallback"][tag];
    if (type2 && _hasOwnProperty.call(type2.styleAliases, style)) {
      style = type2.styleAliases[style];
    }
    result[tag] = style;
  }
  return result;
}
function encodeHex(character) {
  var string, handle, length;
  string = character.toString(16).toUpperCase();
  if (character <= 255) {
    handle = "x";
    length = 2;
  } else if (character <= 65535) {
    handle = "u";
    length = 4;
  } else if (character <= 4294967295) {
    handle = "U";
    length = 8;
  } else {
    throw new exception("code point within a string may not be greater than 0xFFFFFFFF");
  }
  return "\\" + handle + common.repeat("0", length - string.length) + string;
}
var QUOTING_TYPE_SINGLE = 1;
var QUOTING_TYPE_DOUBLE = 2;
function State2(options) {
  this.schema = options["schema"] || _default;
  this.indent = Math.max(1, options["indent"] || 2);
  this.noArrayIndent = options["noArrayIndent"] || false;
  this.skipInvalid = options["skipInvalid"] || false;
  this.flowLevel = common.isNothing(options["flowLevel"]) ? -1 : options["flowLevel"];
  this.styleMap = compileStyleMap(this.schema, options["styles"] || null);
  this.sortKeys = options["sortKeys"] || false;
  this.lineWidth = options["lineWidth"] || 80;
  this.noRefs = options["noRefs"] || false;
  this.noCompatMode = options["noCompatMode"] || false;
  this.condenseFlow = options["condenseFlow"] || false;
  this.quotingType = options["quotingType"] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
  this.forceQuotes = options["forceQuotes"] || false;
  this.replacer = typeof options["replacer"] === "function" ? options["replacer"] : null;
  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;
  this.tag = null;
  this.result = "";
  this.duplicates = [];
  this.usedDuplicates = null;
}
function indentString(string, spaces) {
  var ind = common.repeat(" ", spaces), position = 0, next = -1, result = "", line, length = string.length;
  while (position < length) {
    next = string.indexOf("\n", position);
    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }
    if (line.length && line !== "\n") result += ind;
    result += line;
  }
  return result;
}
function generateNextLine(state, level) {
  return "\n" + common.repeat(" ", state.indent * level);
}
function testImplicitResolving(state, str2) {
  var index, length, type2;
  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type2 = state.implicitTypes[index];
    if (type2.resolve(str2)) {
      return true;
    }
  }
  return false;
}
function isWhitespace2(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}
function isPrintable(c) {
  return 32 <= c && c <= 126 || 161 <= c && c <= 55295 && c !== 8232 && c !== 8233 || 57344 <= c && c <= 65533 && c !== CHAR_BOM || 65536 <= c && c <= 1114111;
}
function isNsCharOrWhitespace(c) {
  return isPrintable(c) && c !== CHAR_BOM && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
}
function isPlainSafe(c, prev, inblock) {
  var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
  var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace2(c);
  return (
    // ns-plain-safe
    (inblock ? (
      // c = flow-in
      cIsNsCharOrWhitespace
    ) : cIsNsCharOrWhitespace && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET) && c !== CHAR_SHARP && !(prev === CHAR_COLON && !cIsNsChar) || isNsCharOrWhitespace(prev) && !isWhitespace2(prev) && c === CHAR_SHARP || prev === CHAR_COLON && cIsNsChar
  );
}
function isPlainSafeFirst(c) {
  return isPrintable(c) && c !== CHAR_BOM && !isWhitespace2(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
}
function isPlainSafeLast(c) {
  return !isWhitespace2(c) && c !== CHAR_COLON;
}
function codePointAt(string, pos) {
  var first = string.charCodeAt(pos), second;
  if (first >= 55296 && first <= 56319 && pos + 1 < string.length) {
    second = string.charCodeAt(pos + 1);
    if (second >= 56320 && second <= 57343) {
      return (first - 55296) * 1024 + second - 56320 + 65536;
    }
  }
  return first;
}
function needIndentIndicator(string) {
  var leadingSpaceRe = /^\n* /;
  return leadingSpaceRe.test(string);
}
var STYLE_PLAIN = 1;
var STYLE_SINGLE = 2;
var STYLE_LITERAL = 3;
var STYLE_FOLDED = 4;
var STYLE_DOUBLE = 5;
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType, quotingType, forceQuotes, inblock) {
  var i;
  var char = 0;
  var prevChar = null;
  var hasLineBreak = false;
  var hasFoldableLine = false;
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1;
  var plain = isPlainSafeFirst(codePointAt(string, 0)) && isPlainSafeLast(codePointAt(string, string.length - 1));
  if (singleLineOnly || forceQuotes) {
    for (i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
  } else {
    for (i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine || // Foldable line = too long, and not more-indented.
          i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
          previousLineBreak = i;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
    hasFoldableLine = hasFoldableLine || shouldTrackWidth && (i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ");
  }
  if (!hasLineBreak && !hasFoldableLine) {
    if (plain && !forceQuotes && !testAmbiguousType(string)) {
      return STYLE_PLAIN;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
  }
  if (indentPerLevel > 9 && needIndentIndicator(string)) {
    return STYLE_DOUBLE;
  }
  if (!forceQuotes) {
    return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
  }
  return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
}
function writeScalar(state, string, level, iskey, inblock) {
  state.dump = (function() {
    if (string.length === 0) {
      return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
    }
    if (!state.noCompatMode) {
      if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
        return state.quotingType === QUOTING_TYPE_DOUBLE ? '"' + string + '"' : "'" + string + "'";
      }
    }
    var indent = state.indent * Math.max(1, level);
    var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
    var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
    function testAmbiguity(string2) {
      return testImplicitResolving(state, string2);
    }
    switch (chooseScalarStyle(
      string,
      singleLineOnly,
      state.indent,
      lineWidth,
      testAmbiguity,
      state.quotingType,
      state.forceQuotes && !iskey,
      inblock
    )) {
      case STYLE_PLAIN:
        return string;
      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return "|" + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent));
      case STYLE_FOLDED:
        return ">" + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string) + '"';
      default:
        throw new exception("impossible error: invalid scalar style");
    }
  })();
}
function blockHeader(string, indentPerLevel) {
  var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : "";
  var clip = string[string.length - 1] === "\n";
  var keep = clip && (string[string.length - 2] === "\n" || string === "\n");
  var chomp = keep ? "+" : clip ? "" : "-";
  return indentIndicator + chomp + "\n";
}
function dropEndingNewline(string) {
  return string[string.length - 1] === "\n" ? string.slice(0, -1) : string;
}
function foldString(string, width) {
  var lineRe = /(\n+)([^\n]*)/g;
  var result = (function() {
    var nextLF = string.indexOf("\n");
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  })();
  var prevMoreIndented = string[0] === "\n" || string[0] === " ";
  var moreIndented;
  var match;
  while (match = lineRe.exec(string)) {
    var prefix = match[1], line = match[2];
    moreIndented = line[0] === " ";
    result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }
  return result;
}
function foldLine(line, width) {
  if (line === "" || line[0] === " ") return line;
  var breakRe = / [^ ]/g;
  var match;
  var start = 0, end, curr = 0, next = 0;
  var result = "";
  while (match = breakRe.exec(line)) {
    next = match.index;
    if (next - start > width) {
      end = curr > start ? curr : next;
      result += "\n" + line.slice(start, end);
      start = end + 1;
    }
    curr = next;
  }
  result += "\n";
  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + "\n" + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }
  return result.slice(1);
}
function escapeString(string) {
  var result = "";
  var char = 0;
  var escapeSeq;
  for (var i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
    char = codePointAt(string, i);
    escapeSeq = ESCAPE_SEQUENCES[char];
    if (!escapeSeq && isPrintable(char)) {
      result += string[i];
      if (char >= 65536) result += string[i + 1];
    } else {
      result += escapeSeq || encodeHex(char);
    }
  }
  return result;
}
function writeFlowSequence(state, level, object) {
  var _result = "", _tag = state.tag, index, length, value2;
  for (index = 0, length = object.length; index < length; index += 1) {
    value2 = object[index];
    if (state.replacer) {
      value2 = state.replacer.call(object, String(index), value2);
    }
    if (writeNode(state, level, value2, false, false) || typeof value2 === "undefined" && writeNode(state, level, null, false, false)) {
      if (_result !== "") _result += "," + (!state.condenseFlow ? " " : "");
      _result += state.dump;
    }
  }
  state.tag = _tag;
  state.dump = "[" + _result + "]";
}
function writeBlockSequence(state, level, object, compact) {
  var _result = "", _tag = state.tag, index, length, value2;
  for (index = 0, length = object.length; index < length; index += 1) {
    value2 = object[index];
    if (state.replacer) {
      value2 = state.replacer.call(object, String(index), value2);
    }
    if (writeNode(state, level + 1, value2, true, true, false, true) || typeof value2 === "undefined" && writeNode(state, level + 1, null, true, true, false, true)) {
      if (!compact || _result !== "") {
        _result += generateNextLine(state, level);
      }
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += "-";
      } else {
        _result += "- ";
      }
      _result += state.dump;
    }
  }
  state.tag = _tag;
  state.dump = _result || "[]";
}
function writeFlowMapping(state, level, object) {
  var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, pairBuffer;
  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = "";
    if (_result !== "") pairBuffer += ", ";
    if (state.condenseFlow) pairBuffer += '"';
    objectKey = objectKeyList[index];
    objectValue = object[objectKey];
    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }
    if (!writeNode(state, level, objectKey, false, false)) {
      continue;
    }
    if (state.dump.length > 1024) pairBuffer += "? ";
    pairBuffer += state.dump + (state.condenseFlow ? '"' : "") + ":" + (state.condenseFlow ? "" : " ");
    if (!writeNode(state, level, objectValue, false, false)) {
      continue;
    }
    pairBuffer += state.dump;
    _result += pairBuffer;
  }
  state.tag = _tag;
  state.dump = "{" + _result + "}";
}
function writeBlockMapping(state, level, object, compact) {
  var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, explicitPair, pairBuffer;
  if (state.sortKeys === true) {
    objectKeyList.sort();
  } else if (typeof state.sortKeys === "function") {
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    throw new exception("sortKeys must be a boolean or a function");
  }
  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = "";
    if (!compact || _result !== "") {
      pairBuffer += generateNextLine(state, level);
    }
    objectKey = objectKeyList[index];
    objectValue = object[objectKey];
    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }
    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue;
    }
    explicitPair = state.tag !== null && state.tag !== "?" || state.dump && state.dump.length > 1024;
    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += "?";
      } else {
        pairBuffer += "? ";
      }
    }
    pairBuffer += state.dump;
    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }
    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue;
    }
    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ":";
    } else {
      pairBuffer += ": ";
    }
    pairBuffer += state.dump;
    _result += pairBuffer;
  }
  state.tag = _tag;
  state.dump = _result || "{}";
}
function detectType(state, object, explicit) {
  var _result, typeList, index, length, type2, style;
  typeList = explicit ? state.explicitTypes : state.implicitTypes;
  for (index = 0, length = typeList.length; index < length; index += 1) {
    type2 = typeList[index];
    if ((type2.instanceOf || type2.predicate) && (!type2.instanceOf || typeof object === "object" && object instanceof type2.instanceOf) && (!type2.predicate || type2.predicate(object))) {
      if (explicit) {
        if (type2.multi && type2.representName) {
          state.tag = type2.representName(object);
        } else {
          state.tag = type2.tag;
        }
      } else {
        state.tag = "?";
      }
      if (type2.represent) {
        style = state.styleMap[type2.tag] || type2.defaultStyle;
        if (_toString.call(type2.represent) === "[object Function]") {
          _result = type2.represent(object, style);
        } else if (_hasOwnProperty.call(type2.represent, style)) {
          _result = type2.represent[style](object, style);
        } else {
          throw new exception("!<" + type2.tag + '> tag resolver accepts not "' + style + '" style');
        }
        state.dump = _result;
      }
      return true;
    }
  }
  return false;
}
function writeNode(state, level, object, block, compact, iskey, isblockseq) {
  state.tag = null;
  state.dump = object;
  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }
  var type2 = _toString.call(state.dump);
  var inblock = block;
  var tagStr;
  if (block) {
    block = state.flowLevel < 0 || state.flowLevel > level;
  }
  var objectOrArray = type2 === "[object Object]" || type2 === "[object Array]", duplicateIndex, duplicate;
  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }
  if (state.tag !== null && state.tag !== "?" || duplicate || state.indent !== 2 && level > 0) {
    compact = false;
  }
  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = "*ref_" + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type2 === "[object Object]") {
      if (block && Object.keys(state.dump).length !== 0) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + " " + state.dump;
        }
      }
    } else if (type2 === "[object Array]") {
      if (block && state.dump.length !== 0) {
        if (state.noArrayIndent && !isblockseq && level > 0) {
          writeBlockSequence(state, level - 1, state.dump, compact);
        } else {
          writeBlockSequence(state, level, state.dump, compact);
        }
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, level, state.dump);
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + " " + state.dump;
        }
      }
    } else if (type2 === "[object String]") {
      if (state.tag !== "?") {
        writeScalar(state, state.dump, level, iskey, inblock);
      }
    } else if (type2 === "[object Undefined]") {
      return false;
    } else {
      if (state.skipInvalid) return false;
      throw new exception("unacceptable kind of an object to dump " + type2);
    }
    if (state.tag !== null && state.tag !== "?") {
      tagStr = encodeURI(
        state.tag[0] === "!" ? state.tag.slice(1) : state.tag
      ).replace(/!/g, "%21");
      if (state.tag[0] === "!") {
        tagStr = "!" + tagStr;
      } else if (tagStr.slice(0, 18) === "tag:yaml.org,2002:") {
        tagStr = "!!" + tagStr.slice(18);
      } else {
        tagStr = "!<" + tagStr + ">";
      }
      state.dump = tagStr + " " + state.dump;
    }
  }
  return true;
}
function getDuplicateReferences(object, state) {
  var objects = [], duplicatesIndexes = [], index, length;
  inspectNode(object, objects, duplicatesIndexes);
  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}
function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList, index, length;
  if (object !== null && typeof object === "object") {
    index = objects.indexOf(object);
    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);
      if (Array.isArray(object)) {
        for (index = 0, length = object.length; index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);
        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}
function dump$1(input, options) {
  options = options || {};
  var state = new State2(options);
  if (!state.noRefs) getDuplicateReferences(input, state);
  var value2 = input;
  if (state.replacer) {
    value2 = state.replacer.call({ "": value2 }, "", value2);
  }
  if (writeNode(state, 0, value2, true, true)) return state.dump + "\n";
  return "";
}
var dump_1 = dump$1;
var dumper = {
  dump: dump_1
};
function renamed(from, to) {
  return function() {
    throw new Error("Function yaml." + from + " is removed in js-yaml 4. Use yaml." + to + " instead, which is now safe by default.");
  };
}
var load = loader.load;
var loadAll = loader.loadAll;
var dump = dumper.dump;
var safeLoad = renamed("safeLoad", "load");
var safeLoadAll = renamed("safeLoadAll", "loadAll");
var safeDump = renamed("safeDump", "dump");

// ../../packages/core/src/migrate/convert.ts
init_html_writer();

// ../../packages/core/src/migrate/orchestrator.ts
init_atomic_write();
init_html_writer();
init_paths();

// ../../packages/core/src/migrate/manifest-schema.ts
init_zod();
var MigrationMoveEntrySchema = external_exports.object({
  archived: external_exports.string(),
  from: external_exports.string(),
  generatedHtml: external_exports.string(),
  to: external_exports.string()
});
var MigrationManifestSchema = external_exports.object({
  batchId: external_exports.string(),
  completedAt: external_exports.string(),
  moves: external_exports.array(MigrationMoveEntrySchema),
  startedAt: external_exports.string(),
  version: external_exports.number()
});

// ../../packages/core/src/curate/write.ts
init_html_parser();
init_paths();
init_topics();

// ../../packages/core/src/dream/candidates.ts
init_paths();
init_topics();
var STALE_DAYS = {
  core: Number.POSITIVE_INFINITY,
  // core topics are never pruned
  draft: 60,
  validated: 120
};

// ../../packages/core/src/search/search.ts
init_paths();
init_topics();

// ../../packages/core/src/index.ts
init_paths();

// ../../packages/core/src/tree/history.ts
init_paths();

// ../../packages/core/src/tree/marker.ts
init_uuid_v4();

// ../../packages/core/src/tree/display-name.ts
var DISPLAY_NAME_MAX_LENGTH = 100;
var InvalidDisplayNameError = class extends Error {
  constructor(reason) {
    super(`Invalid display name: ${reason}`);
    this.reason = reason;
    this.name = "InvalidDisplayNameError";
  }
};
function validateSpaceDisplayName(name) {
  if (typeof name !== "string") {
    throw new InvalidDisplayNameError(
      `must be a string (got ${typeof name})`
    );
  }
  if (name.length === 0) {
    throw new InvalidDisplayNameError("must not be empty");
  }
  if (name.length > DISPLAY_NAME_MAX_LENGTH) {
    throw new InvalidDisplayNameError(
      `must be at most ${DISPLAY_NAME_MAX_LENGTH} characters (got ${name.length})`
    );
  }
  if (name !== name.trim()) {
    throw new InvalidDisplayNameError(
      "must not begin or end with whitespace"
    );
  }
  if (/[\x00-\x1f\x7f]/.test(name)) {
    throw new InvalidDisplayNameError(
      "must not contain control characters"
    );
  }
  if (name.includes("/") || name.includes("\\")) {
    throw new InvalidDisplayNameError(
      "must not contain path separators ('/' or '\\\\')"
    );
  }
}

// ../../packages/core/src/tree/marker.ts
var MARKER_FILENAME = ".brvspace";
var InvalidMarkerError = class extends Error {
  constructor(reason) {
    super(`Invalid .brvspace marker: ${reason}`);
    this.reason = reason;
    this.name = "InvalidMarkerError";
  }
};
function parseMarker(content) {
  let raw;
  try {
    raw = JSON.parse(content);
  } catch (err) {
    throw new InvalidMarkerError(
      `not valid JSON (${err.message})`
    );
  }
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    throw new InvalidMarkerError(
      "root must be a JSON object (got " + (raw === null ? "null" : Array.isArray(raw) ? "array" : typeof raw) + ")"
    );
  }
  const obj = raw;
  const space_id = obj.space_id;
  if (space_id === void 0) {
    throw new InvalidMarkerError("missing 'space_id' field");
  }
  if (!isUuidV4(space_id)) {
    throw new InvalidMarkerError(
      "'space_id' must be a UUID v4 string"
    );
  }
  const space_name = obj.space_name;
  if (space_name === void 0) {
    throw new InvalidMarkerError("missing 'space_name' field");
  }
  try {
    validateSpaceDisplayName(space_name);
  } catch (err) {
    throw new InvalidMarkerError(
      `'space_name' ${err.message.replace(/^Invalid display name: /, "")}`
    );
  }
  return { space_id, space_name };
}

// ../../packages/core/src/tree/space-metadata.ts
init_uuid_v4();
import { randomBytes } from "node:crypto";
import { readFile as readFile5, rename as rename3, rm as rm5, writeFile as writeFile5 } from "node:fs/promises";
import { join as join7 } from "node:path";
var SPACE_METADATA_FILENAME = "metadata.json";
var InvalidSpaceMetadataError = class extends Error {
  constructor(reason) {
    super(`Invalid metadata.json: ${reason}`);
    this.reason = reason;
    this.name = "InvalidSpaceMetadataError";
  }
};
function validateFields(space_id, space_name, team_id, created_at) {
  if (!isUuidV4(space_id)) {
    throw new InvalidSpaceMetadataError(
      "'space_id' must be a UUID v4 string"
    );
  }
  if (typeof space_name !== "string" || space_name.length === 0) {
    throw new InvalidSpaceMetadataError(
      "'space_name' must be a non-empty string"
    );
  }
  if (team_id !== null && !isUuidV4(team_id)) {
    throw new InvalidSpaceMetadataError(
      "'team_id' must be a UUID v4 string or null"
    );
  }
  if (typeof created_at !== "string" || created_at.length === 0) {
    throw new InvalidSpaceMetadataError(
      "'created_at' must be an ISO 8601 string"
    );
  }
  return { created_at, space_id, space_name, team_id };
}
async function writeSpaceMetadata(spaceDir, metadata) {
  validateFields(
    metadata.space_id,
    metadata.space_name,
    metadata.team_id,
    metadata.created_at
  );
  const target = join7(spaceDir, SPACE_METADATA_FILENAME);
  const tmp = `${target}.tmp.${randomBytes(6).toString("hex")}`;
  const serialized = `${JSON.stringify(metadata, null, 2)}
`;
  try {
    await writeFile5(tmp, serialized, "utf8");
    await rename3(tmp, target);
  } catch (err) {
    await rm5(tmp, { force: true }).catch(() => {
    });
    throw err;
  }
}

// ../../packages/core/src/tree/marker-io.ts
init_uuid_v4();

// ../../packages/core/src/tree/space-resolver.ts
import { randomUUID } from "node:crypto";
import { access, mkdir as mkdir5, readFile as readFile7 } from "node:fs/promises";
import { dirname as dirname6, join as join9, resolve as resolve4 } from "node:path";

// ../../packages/core/src/tree/bindings-registry.ts
init_uuid_v4();
init_paths();
import { randomBytes as randomBytes2 } from "node:crypto";
import { mkdir as mkdir4, readFile as readFile6, rename as rename4, rm as rm6, writeFile as writeFile6 } from "node:fs/promises";
import { join as join8, resolve as resolve3, sep as sep4 } from "node:path";
var BINDINGS_FILENAME = "bindings.json";
function bindingsDir() {
  return getGlobalDataDir();
}
function bindingsPath() {
  return join8(bindingsDir(), BINDINGS_FILENAME);
}
function emptyRegistry() {
  return { bindings: [], deletedSpaces: [] };
}
function isBinding(value2) {
  if (typeof value2 !== "object" || value2 === null) return false;
  const v = value2;
  return typeof v.folder === "string" && isUuidV4(v.space_id) && typeof v.addedAt === "string" && (v.removedAt === void 0 || typeof v.removedAt === "string");
}
function isDeletedSpace(value2) {
  if (typeof value2 !== "object" || value2 === null) return false;
  const v = value2;
  return isUuidV4(v.space_id) && typeof v.deletedAt === "string" && typeof v.hard === "boolean";
}
async function readRegistry() {
  let raw;
  try {
    raw = await readFile6(bindingsPath(), "utf8");
  } catch (err) {
    if (isErrnoCode(err, "ENOENT")) return emptyRegistry();
    console.warn(
      `[byterover] Could not read ${bindingsPath()}: ${describeErr(err)}`
    );
    return emptyRegistry();
  }
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    console.warn(
      `[byterover] Could not parse ${bindingsPath()}: ${err.message}`
    );
    return emptyRegistry();
  }
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    console.warn(
      `[byterover] Expected object root in ${bindingsPath()}, got ${parsed === null ? "null" : Array.isArray(parsed) ? "array" : typeof parsed}`
    );
    return emptyRegistry();
  }
  const obj = parsed;
  const bindings = Array.isArray(obj.bindings) ? obj.bindings.filter((v) => isBinding(v)) : [];
  const deletedSpaces = Array.isArray(obj.deletedSpaces) ? obj.deletedSpaces.filter((v) => isDeletedSpace(v)) : [];
  const reg = { bindings, deletedSpaces };
  if (isUuidV4(obj.defaultSpaceId)) {
    reg.defaultSpaceId = obj.defaultSpaceId;
  }
  return reg;
}
async function writeRegistry(reg) {
  await mkdir4(bindingsDir(), { recursive: true });
  const target = bindingsPath();
  const tmp = `${target}.tmp.${randomBytes2(6).toString("hex")}`;
  const serialized = JSON.stringify(reg, null, 2) + "\n";
  try {
    await writeFile6(tmp, serialized, "utf8");
    await rename4(tmp, target);
  } catch (err) {
    await rm6(tmp, { force: true }).catch(() => {
    });
    throw err;
  }
}
async function findBindingForCwd(cwd) {
  const canonicalCwd = resolve3(cwd);
  const reg = await readRegistry();
  let best = null;
  for (const b of reg.bindings) {
    if (b.removedAt !== void 0) continue;
    if (!isAncestorOrEqual(b.folder, canonicalCwd)) continue;
    if (best === null || b.folder.length > best.folder.length) {
      best = b;
    }
  }
  return best;
}
async function isSpaceDeleted(space_id) {
  const reg = await readRegistry();
  const found = reg.deletedSpaces.find((d) => d.space_id === space_id);
  return found ? { deleted: true, hard: found.hard } : { deleted: false, hard: false };
}
async function getDefaultSpaceId() {
  const reg = await readRegistry();
  return reg.defaultSpaceId ?? null;
}
async function setDefaultSpaceId(space_id) {
  if (!isUuidV4(space_id)) {
    throw new Error(`setDefaultSpaceId: space_id must be a UUID v4 string`);
  }
  const reg = await readRegistry();
  reg.defaultSpaceId = space_id;
  await writeRegistry(reg);
}
function isAncestorOrEqual(ancestor, cwd) {
  if (cwd === ancestor) return true;
  return cwd.startsWith(ancestor.endsWith(sep4) ? ancestor : ancestor + sep4);
}
function isErrnoCode(err, code) {
  return typeof err === "object" && err !== null && "code" in err && err.code === code;
}
function describeErr(err) {
  if (err instanceof Error) return err.message;
  return String(err);
}

// ../../packages/core/src/tree/space-resolver.ts
init_paths();
var DEFAULT_SPACE_DISPLAY_NAME = "My Space";
var NoDefaultSpaceError = class extends Error {
  constructor() {
    super(
      "No default space configured. Run `init` to bootstrap one, or pass a space_id explicitly."
    );
    this.name = "NoDefaultSpaceError";
  }
};
async function resolveSpace(cwd = process.cwd()) {
  const canonicalCwd = resolve4(cwd);
  const marker = await findMarker(canonicalCwd);
  if (marker !== null) {
    const extras2 = await checkDeleted(marker.marker.space_id);
    return {
      ...extras2,
      markerPath: marker.path,
      source: "marker",
      space_id: marker.marker.space_id,
      space_name: marker.marker.space_name
    };
  }
  const binding = await findBindingForCwd(canonicalCwd);
  if (binding !== null) {
    const extras2 = await checkDeleted(binding.space_id);
    return {
      ...extras2,
      bindingFolder: binding.folder,
      source: "registry",
      space_id: binding.space_id
    };
  }
  const defaultId = await getDefaultSpaceId();
  if (defaultId === null) throw new NoDefaultSpaceError();
  const extras = await checkDeleted(defaultId);
  return { ...extras, source: "default", space_id: defaultId };
}
async function checkDeleted(space_id) {
  const deletion = await isSpaceDeleted(space_id);
  return deletion.deleted ? { deleted: { hard: deletion.hard } } : {};
}
async function findMarker(startDir) {
  let dir = startDir;
  for (; ; ) {
    const markerPath = join9(dir, MARKER_FILENAME);
    const content = await readMarkerFile(markerPath);
    if (content !== null) {
      try {
        const parsed = parseMarker(content);
        return { marker: parsed, path: markerPath };
      } catch (err) {
        if (err instanceof InvalidMarkerError) {
          throw new InvalidMarkerError(`${err.reason} (at ${markerPath})`);
        }
        throw err;
      }
    }
    const parent = dirname6(dir);
    if (parent === dir) return null;
    dir = parent;
  }
}
async function readMarkerFile(path) {
  try {
    return await readFile7(path, "utf8");
  } catch (err) {
    if (isErrnoCode2(err, "ENOENT") || isErrnoCode2(err, "EACCES")) {
      return null;
    }
    throw err;
  }
}
function isErrnoCode2(err, code) {
  return typeof err === "object" && err !== null && "code" in err && err.code === code;
}
async function ensureContextRoot(baseDir = process.cwd(), opts) {
  if (opts?.space_id !== void 0) {
    return ensureSpaceDir(opts.space_id, opts.displayName);
  }
  try {
    const resolution = await resolveSpace(baseDir);
    const root = spaceContextTreePath(resolution.space_id);
    await mkdir5(root, { recursive: true });
    return root;
  } catch (err) {
    if (err instanceof NoDefaultSpaceError) {
      const space_id = randomUUID();
      const root = await ensureSpaceDir(space_id, DEFAULT_SPACE_DISPLAY_NAME);
      await setDefaultSpaceId(space_id);
      return root;
    }
    throw err;
  }
}
async function ensureSpaceDir(space_id, displayName) {
  const spaceDir = join9(getProjectsDir(), space_id);
  await mkdir5(spaceDir, { recursive: true });
  const metaPath = join9(spaceDir, "metadata.json");
  try {
    await access(metaPath);
  } catch {
    await writeSpaceMetadata(spaceDir, {
      created_at: (/* @__PURE__ */ new Date()).toISOString(),
      space_id,
      space_name: displayName ?? "Untitled Space",
      team_id: null
    });
  }
  const root = join9(spaceDir, CONTEXT_TREE_DIRNAME);
  await mkdir5(root, { recursive: true });
  return root;
}

// ../../packages/core/src/tree/tip-shown.ts
init_paths();

// ../../packages/core/src/index.ts
init_topics();

// ../../packages/core/src/analytics/event-names.ts
var AnalyticsEventNames = {
  BRV_INIT: "brv_init",
  RECORD_RUN_COMPLETED: "record_run_completed",
  DREAM_COMPLETED: "dream_completed",
  QUERY_COMPLETED: "query_completed"
};
var TASK_TYPE_VALUES = ["record", "dream", "query"];
var DREAM_MODES = ["merge", "link", "prune", "synthesize"];

// ../../packages/core/src/analytics/events/brv-init.ts
init_zod();
init_schemas();
var BrvInitSchema = external_exports.object({
  failure_kind: external_exports.string().min(1).max(64).optional(),
  had_existing_brv_dir: external_exports.boolean(),
  outcome: external_exports.enum(["success", "failure"]),
  project_path_hash: external_exports.string().regex(/^[0-9a-f]{64}$/),
  /**
   * Attribution slug of the host agent that ran init (e.g. `claude`,
   * `codex`), resolved from the CLI env fingerprint. Omitted when undetected.
   */
  agent: external_exports.string().regex(AGENT_SLUG_REGEX).max(64).optional()
}).strict();

// ../../packages/core/src/analytics/events/record-run-completed.ts
init_zod();
init_schemas();
var RecordRunCompletedSchema = external_exports.object({
  duration_ms: external_exports.number().int().nonnegative(),
  /** Per-topic keyword list as parsed from `<bv-topic keywords>` CSV. */
  keywords: external_exports.array(external_exports.string().max(256)).max(50).optional(),
  /**
   * Relative topic path within the context tree (e.g. `pokemon/pikachu`).
   * Lets the shipper aggregate by topic without re-reading the row's
   * body. Omitted for failure rows where no topic was touched.
   */
  knowledge_path: external_exports.string().min(1).max(512).optional(),
  operations_added: external_exports.number().int().nonnegative(),
  operations_deleted: external_exports.number().int().nonnegative(),
  operations_failed: external_exports.number().int().nonnegative(),
  operations_merged: external_exports.number().int().nonnegative(),
  operations_updated: external_exports.number().int().nonnegative(),
  outcome: external_exports.enum(["completed", "partial", "cancelled", "error"]),
  /** Mono has no review queue — always 0 today. */
  pending_review_count: external_exports.number().int().nonnegative(),
  project_path_hash: external_exports.string().regex(/^[0-9a-f]{64}$/).optional(),
  /** Hub space, omitted in mono. */
  space_id: external_exports.string().min(1).max(64).optional(),
  /** Per-topic tag list as parsed from `<bv-topic tags>` CSV. */
  tags: external_exports.array(external_exports.string().max(256)).max(50).optional(),
  task_id: external_exports.string().min(1),
  task_type: external_exports.enum(TASK_TYPE_VALUES),
  /** Hub team, omitted in mono. */
  team_id: external_exports.string().min(1).max(64).optional(),
  /**
   * Attribution slug of the host agent that performed this run (e.g.
   * `claude`, `codex`, `cursor`, `gemini`), resolved from the CLI env
   * fingerprint (skill-runtime `resolveAgent`). Omitted when undetected.
   */
  agent: external_exports.string().regex(AGENT_SLUG_REGEX).max(64).optional()
}).strict();

// ../../packages/core/src/analytics/events/dream-completed.ts
init_zod();
init_schemas();
var DreamCompletedSchema = external_exports.object({
  /** How many candidate pairs / paths / clusters the engine returned. */
  candidate_count: external_exports.number().int().nonnegative(),
  duration_ms: external_exports.number().int().nonnegative(),
  mode: external_exports.enum(DREAM_MODES),
  outcome: external_exports.enum(["completed", "cancelled", "error"]),
  project_path_hash: external_exports.string().regex(/^[0-9a-f]{64}$/).optional(),
  space_id: external_exports.string().min(1).max(64).optional(),
  task_id: external_exports.string().min(1),
  task_type: external_exports.enum(TASK_TYPE_VALUES),
  team_id: external_exports.string().min(1).max(64).optional(),
  /**
   * Attribution slug of the host agent that ran this dream (e.g. `claude`,
   * `codex`), resolved from the CLI env fingerprint. Omitted when undetected.
   */
  agent: external_exports.string().regex(AGENT_SLUG_REGEX).max(64).optional()
}).strict();

// ../../packages/core/src/analytics/events/query-completed.ts
init_zod();
init_schemas();
var RelatedPathWithMetadataSchema = external_exports.object({
  keywords: external_exports.array(external_exports.string().max(256)).max(50),
  relative_path: external_exports.string().min(1),
  tags: external_exports.array(external_exports.string().max(256)).max(50)
}).strict();
var ReadPathWithMetadataSchema = external_exports.object({
  keywords: external_exports.array(external_exports.string().max(256)).max(50),
  related_paths: external_exports.array(RelatedPathWithMetadataSchema).max(50),
  relative_path: external_exports.string().min(1),
  tags: external_exports.array(external_exports.string().max(256)).max(50)
}).strict();
var QueryCompletedSchema = external_exports.object({
  /** Mono has no query-result cache today; always false. */
  cache_hit: external_exports.boolean(),
  duration_ms: external_exports.number().int().nonnegative(),
  matched_doc_count: external_exports.number().int().nonnegative(),
  outcome: external_exports.enum(["completed", "cancelled", "error"]),
  project_path_hash: external_exports.string().regex(/^[0-9a-f]{64}$/).optional(),
  /** Mono can't track downstream tool calls — always 0. */
  read_doc_count: external_exports.number().int().nonnegative(),
  /**
   * One entry per returned query hit, capped at 10. Carries the hit's
   * relative path + the hit's own tags / keywords / related-paths.
   */
  read_paths_with_metadata: external_exports.array(ReadPathWithMetadataSchema).max(10).optional(),
  /** Mono can't track downstream tool calls — always 0. */
  read_tool_call_count: external_exports.number().int().nonnegative(),
  /** Mono can't track downstream tool calls — always 0. */
  search_call_count: external_exports.number().int().nonnegative(),
  space_id: external_exports.string().min(1).max(64).optional(),
  task_id: external_exports.string().min(1),
  task_type: external_exports.enum(TASK_TYPE_VALUES),
  team_id: external_exports.string().min(1).max(64).optional(),
  /** Retrieval-tier label; omitted in mono until we have tiers. */
  tier: external_exports.union([
    external_exports.literal(0),
    external_exports.literal(1),
    external_exports.literal(2),
    external_exports.literal(3),
    external_exports.literal(4)
  ]).optional(),
  /**
   * Attribution slug of the host agent that ran this query (e.g. `claude`,
   * `codex`, `cursor`, `gemini`), resolved from the CLI env fingerprint
   * (skill-runtime `resolveAgent`). Omitted when undetected.
   */
  agent: external_exports.string().regex(AGENT_SLUG_REGEX).max(64).optional()
}).strict();

// ../../packages/core/src/analytics/events/index.ts
var ALL_EVENT_SCHEMAS = {
  [AnalyticsEventNames.BRV_INIT]: BrvInitSchema,
  [AnalyticsEventNames.RECORD_RUN_COMPLETED]: RecordRunCompletedSchema,
  [AnalyticsEventNames.DREAM_COMPLETED]: DreamCompletedSchema,
  [AnalyticsEventNames.QUERY_COMPLETED]: QueryCompletedSchema
};

// ../../packages/core/src/analytics/pending-producer.ts
init_paths();

// ../../packages/core/src/analytics/identity.ts
init_paths();

// ../../packages/core/src/analytics/bounded-append.ts
var MAX_ANALYTICS_BYTES = 50 * 1024 * 1024;

// ../../packages/core/src/analytics/shared-state.ts
init_paths();

// ../../packages/core/src/analytics/two-stage-schema.ts
init_zod();
var nonEmpty = (msg) => external_exports.string().refine((s) => s.trim().length > 0, { message: msg });
var DeviceIdSourceSchema = external_exports.enum([
  "desktop_web_sdk",
  "daemon_runtime"
]);
var AuthContextTypeSchema = external_exports.enum(["jwt", "api_key"]);
var AuthContextSchema = external_exports.object({
  type: AuthContextTypeSchema,
  source: external_exports.string().optional(),
  auth_state_updated_at: external_exports.string().optional()
}).strict();
var ObservedIdentitySchema = external_exports.object({
  device_id: external_exports.string().optional(),
  device_id_source: DeviceIdSourceSchema.optional(),
  user_id: external_exports.string().optional(),
  auth_context: AuthContextSchema.optional()
}).strict();
var ObservedAuthStateSchema = external_exports.object({
  status: external_exports.enum(["authenticated", "unauthenticated"]),
  updated_at: external_exports.string().optional(),
  source: external_exports.string().optional()
}).strict();
var PendingPropertiesSchema = external_exports.object({
  machine_id: nonEmpty("machine_id must be non-empty"),
  source: nonEmpty("source must be non-empty")
}).passthrough();
var PendingRowSchema = external_exports.object({
  id: external_exports.string().min(1),
  name: external_exports.string().min(1),
  occurred_at: external_exports.string().datetime({ offset: true }),
  observed_identity: ObservedIdentitySchema.optional(),
  observed_auth_state: ObservedAuthStateSchema.optional(),
  properties: PendingPropertiesSchema
}).strict();
var QueueIdentitySchema = external_exports.object({
  device_id: nonEmpty("identity.device_id must be non-empty"),
  device_id_source: DeviceIdSourceSchema,
  user_id: external_exports.string().optional(),
  auth_context: AuthContextSchema.optional()
}).strict();
var QueuePropertiesSchema = external_exports.object({
  machine_id: nonEmpty("properties.machine_id must be non-empty"),
  source: nonEmpty("properties.source must be non-empty"),
  identity_fallback: external_exports.boolean(),
  identity_fallback_reason: external_exports.string().optional(),
  runtime_identity_source: DeviceIdSourceSchema,
  auth_source: external_exports.string().optional()
}).passthrough();
var QueueRowSchema = external_exports.object({
  id: external_exports.string().min(1),
  name: external_exports.string().min(1),
  created_at: external_exports.string().datetime({ offset: true }),
  timestamp: external_exports.string().datetime({ offset: true }),
  status: external_exports.literal("pending"),
  attempts: external_exports.number().int().min(0),
  identity: QueueIdentitySchema,
  properties: QueuePropertiesSchema
}).strict().superRefine((row, ctx) => {
  if (row.identity.user_id !== void 0 && row.identity.auth_context === void 0) {
    ctx.addIssue({
      code: external_exports.ZodIssueCode.custom,
      message: "identity.auth_context is required when identity.user_id is present",
      path: ["identity", "auth_context"]
    });
  }
  if (row.properties.identity_fallback === true && row.properties.identity_fallback_reason === void 0) {
    ctx.addIssue({
      code: external_exports.ZodIssueCode.custom,
      message: "properties.identity_fallback_reason is required when identity_fallback=true",
      path: ["properties", "identity_fallback_reason"]
    });
  }
});

// ../../packages/sync/src/engine.ts
import { mkdir as mkdir6 } from "node:fs/promises";

// ../../packages/sync/src/http-client.ts
var RejectedError = class extends Error {
  constructor(reason, status) {
    super(`rejected:${reason} (${status})`);
    this.reason = reason;
    this.status = status;
  }
};
var AuthError = class extends Error {
  constructor(status) {
    super(`auth:${status}`);
    this.status = status;
  }
};
var CONTENT_TYPE = {
  html: "text/html",
  md: "text/markdown"
};
function contentTypeFor(key) {
  const ext = key.slice(key.lastIndexOf(".") + 1).toLowerCase();
  return CONTENT_TYPE[ext] ?? "application/octet-stream";
}
function classify(status) {
  if (status === 401) return "auth";
  if (status === 415) return "content-type";
  if (status === 413) return "too-large";
  if (status === 400) return "invalid-key";
  if (status === 403) return "forbidden";
  return null;
}
var MemoryHttpClient = class {
  constructor(cfg, getToken = () => cfg.token) {
    this.cfg = cfg;
    this.getToken = getToken;
  }
  getToken;
  base() {
    return `${this.cfg.baseUrl}/v1/memory/${this.cfg.teamId}/${this.cfg.spaceId}`;
  }
  headers(extra) {
    return { authorization: `Bearer ${this.getToken()}`, ...extra };
  }
  /** Keep `/` separators in keys; encode each segment. */
  fileUrl(key) {
    const safe = key.split("/").map(encodeURIComponent).join("/");
    return `${this.base()}/files/${safe}`;
  }
  async guard(res) {
    if (res.ok) return res;
    const c = classify(res.status);
    if (c === "auth") throw new AuthError(res.status);
    if (c) throw new RejectedError(c, res.status);
    throw new Error(`http ${res.status} ${res.statusText}`);
  }
  async getManifest() {
    const res = await this.guard(
      await fetch(`${this.base()}/manifest`, { headers: this.headers() })
    );
    const data = await res.json();
    return Array.isArray(data) ? data : data.files ?? [];
  }
  async getFile(key) {
    const res = await this.guard(
      await fetch(this.fileUrl(key), { headers: this.headers() })
    );
    return res.text();
  }
  async putFile(key, body) {
    const res = await this.guard(
      await fetch(this.fileUrl(key), {
        method: "PUT",
        headers: this.headers({ "content-type": contentTypeFor(key) }),
        body
      })
    );
    return await res.json();
  }
  async deleteFile(key) {
    await this.guard(
      await fetch(this.fileUrl(key), { method: "DELETE", headers: this.headers() })
    );
  }
};

// ../../node_modules/.pnpm/engine.io-client@6.6.5/node_modules/engine.io-client/build/esm-debug/transports/polling-xhr.node.js
var XMLHttpRequestModule = __toESM(require_XMLHttpRequest(), 1);

// ../../node_modules/.pnpm/engine.io-parser@5.2.3/node_modules/engine.io-parser/build/esm/commons.js
var PACKET_TYPES = /* @__PURE__ */ Object.create(null);
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
var PACKET_TYPES_REVERSE = /* @__PURE__ */ Object.create(null);
Object.keys(PACKET_TYPES).forEach((key) => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
var ERROR_PACKET = { type: "error", data: "parser error" };

// ../../node_modules/.pnpm/engine.io-parser@5.2.3/node_modules/engine.io-parser/build/esm/encodePacket.js
var encodePacket = ({ type: type2, data }, supportsBinary, callback) => {
  if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
    return callback(supportsBinary ? data : "b" + toBuffer(data, true).toString("base64"));
  }
  return callback(PACKET_TYPES[type2] + (data || ""));
};
var toBuffer = (data, forceBufferConversion) => {
  if (Buffer.isBuffer(data) || data instanceof Uint8Array && !forceBufferConversion) {
    return data;
  } else if (data instanceof ArrayBuffer) {
    return Buffer.from(data);
  } else {
    return Buffer.from(data.buffer, data.byteOffset, data.byteLength);
  }
};
var TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
  if (packet.data instanceof ArrayBuffer || ArrayBuffer.isView(packet.data)) {
    return callback(toBuffer(packet.data, false));
  }
  encodePacket(packet, true, (encoded) => {
    if (!TEXT_ENCODER) {
      TEXT_ENCODER = new TextEncoder();
    }
    callback(TEXT_ENCODER.encode(encoded));
  });
}

// ../../node_modules/.pnpm/engine.io-parser@5.2.3/node_modules/engine.io-parser/build/esm/decodePacket.js
var decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }
  const type2 = encodedPacket.charAt(0);
  if (type2 === "b") {
    const buffer = Buffer.from(encodedPacket.substring(1), "base64");
    return {
      type: "message",
      data: mapBinary(buffer, binaryType)
    };
  }
  if (!PACKET_TYPES_REVERSE[type2]) {
    return ERROR_PACKET;
  }
  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type2],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type2]
  };
};
var mapBinary = (data, binaryType) => {
  switch (binaryType) {
    case "arraybuffer":
      if (data instanceof ArrayBuffer) {
        return data;
      } else if (Buffer.isBuffer(data)) {
        return data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);
      } else {
        return data.buffer;
      }
    case "nodebuffer":
    default:
      if (Buffer.isBuffer(data)) {
        return data;
      } else {
        return Buffer.from(data);
      }
  }
};

// ../../node_modules/.pnpm/engine.io-parser@5.2.3/node_modules/engine.io-parser/build/esm/index.js
var SEPARATOR = String.fromCharCode(30);
var encodePayload = (packets, callback) => {
  const length = packets.length;
  const encodedPackets = new Array(length);
  let count = 0;
  packets.forEach((packet, i) => {
    encodePacket(packet, false, (encodedPacket) => {
      encodedPackets[i] = encodedPacket;
      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};
var decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];
  for (let i = 0; i < encodedPackets.length; i++) {
    const decodedPacket = decodePacket(encodedPackets[i], binaryType);
    packets.push(decodedPacket);
    if (decodedPacket.type === "error") {
      break;
    }
  }
  return packets;
};
function createPacketEncoderStream() {
  return new TransformStream({
    transform(packet, controller) {
      encodePacketToBinary(packet, (encodedPacket) => {
        const payloadLength = encodedPacket.length;
        let header;
        if (payloadLength < 126) {
          header = new Uint8Array(1);
          new DataView(header.buffer).setUint8(0, payloadLength);
        } else if (payloadLength < 65536) {
          header = new Uint8Array(3);
          const view = new DataView(header.buffer);
          view.setUint8(0, 126);
          view.setUint16(1, payloadLength);
        } else {
          header = new Uint8Array(9);
          const view = new DataView(header.buffer);
          view.setUint8(0, 127);
          view.setBigUint64(1, BigInt(payloadLength));
        }
        if (packet.data && typeof packet.data !== "string") {
          header[0] |= 128;
        }
        controller.enqueue(header);
        controller.enqueue(encodedPacket);
      });
    }
  });
}
var TEXT_DECODER;
function totalLength(chunks) {
  return chunks.reduce((acc, chunk2) => acc + chunk2.length, 0);
}
function concatChunks(chunks, size) {
  if (chunks[0].length === size) {
    return chunks.shift();
  }
  const buffer = new Uint8Array(size);
  let j = 0;
  for (let i = 0; i < size; i++) {
    buffer[i] = chunks[0][j++];
    if (j === chunks[0].length) {
      chunks.shift();
      j = 0;
    }
  }
  if (chunks.length && j < chunks[0].length) {
    chunks[0] = chunks[0].slice(j);
  }
  return buffer;
}
function createPacketDecoderStream(maxPayload, binaryType) {
  if (!TEXT_DECODER) {
    TEXT_DECODER = new TextDecoder();
  }
  const chunks = [];
  let state = 0;
  let expectedLength = -1;
  let isBinary3 = false;
  return new TransformStream({
    transform(chunk2, controller) {
      chunks.push(chunk2);
      while (true) {
        if (state === 0) {
          if (totalLength(chunks) < 1) {
            break;
          }
          const header = concatChunks(chunks, 1);
          isBinary3 = (header[0] & 128) === 128;
          expectedLength = header[0] & 127;
          if (expectedLength < 126) {
            state = 3;
          } else if (expectedLength === 126) {
            state = 1;
          } else {
            state = 2;
          }
        } else if (state === 1) {
          if (totalLength(chunks) < 2) {
            break;
          }
          const headerArray = concatChunks(chunks, 2);
          expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
          state = 3;
        } else if (state === 2) {
          if (totalLength(chunks) < 8) {
            break;
          }
          const headerArray = concatChunks(chunks, 8);
          const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
          const n = view.getUint32(0);
          if (n > Math.pow(2, 53 - 32) - 1) {
            controller.enqueue(ERROR_PACKET);
            break;
          }
          expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
          state = 3;
        } else {
          if (totalLength(chunks) < expectedLength) {
            break;
          }
          const data = concatChunks(chunks, expectedLength);
          controller.enqueue(decodePacket(isBinary3 ? data : TEXT_DECODER.decode(data), binaryType));
          state = 0;
        }
        if (expectedLength === 0 || expectedLength > maxPayload) {
          controller.enqueue(ERROR_PACKET);
          break;
        }
      }
    }
  });
}
var protocol = 4;

// ../../node_modules/.pnpm/engine.io-client@6.6.5/node_modules/engine.io-client/build/esm-debug/transport.js
var import_component_emitter = __toESM(require_cjs(), 1);

// ../../node_modules/.pnpm/engine.io-client@6.6.5/node_modules/engine.io-client/build/esm-debug/globals.node.js
var nextTick = process.nextTick;
var globalThisShim = global;
var defaultBinaryType = "nodebuffer";
function createCookieJar() {
  return new CookieJar();
}
function parse(setCookieString) {
  const parts2 = setCookieString.split("; ");
  const i = parts2[0].indexOf("=");
  if (i === -1) {
    return;
  }
  const name = parts2[0].substring(0, i).trim();
  if (!name.length) {
    return;
  }
  let value2 = parts2[0].substring(i + 1).trim();
  if (value2.charCodeAt(0) === 34) {
    value2 = value2.slice(1, -1);
  }
  const cookie = {
    name,
    value: value2
  };
  for (let j = 1; j < parts2.length; j++) {
    const subParts = parts2[j].split("=");
    if (subParts.length !== 2) {
      continue;
    }
    const key = subParts[0].trim();
    const value3 = subParts[1].trim();
    switch (key) {
      case "Expires":
        cookie.expires = new Date(value3);
        break;
      case "Max-Age":
        const expiration = /* @__PURE__ */ new Date();
        expiration.setUTCSeconds(expiration.getUTCSeconds() + parseInt(value3, 10));
        cookie.expires = expiration;
        break;
      default:
    }
  }
  return cookie;
}
var CookieJar = class {
  constructor() {
    this._cookies = /* @__PURE__ */ new Map();
  }
  parseCookies(values) {
    if (!values) {
      return;
    }
    values.forEach((value2) => {
      const parsed = parse(value2);
      if (parsed) {
        this._cookies.set(parsed.name, parsed);
      }
    });
  }
  get cookies() {
    const now = Date.now();
    this._cookies.forEach((cookie, name) => {
      var _a;
      if (((_a = cookie.expires) === null || _a === void 0 ? void 0 : _a.getTime()) < now) {
        this._cookies.delete(name);
      }
    });
    return this._cookies.entries();
  }
  addCookies(xhr) {
    const cookies = [];
    for (const [name, cookie] of this.cookies) {
      cookies.push(`${name}=${cookie.value}`);
    }
    if (cookies.length) {
      xhr.setDisableHeaderCheck(true);
      xhr.setRequestHeader("cookie", cookies.join("; "));
    }
  }
  appendCookies(headers) {
    for (const [name, cookie] of this.cookies) {
      headers.append("cookie", `${name}=${cookie.value}`);
    }
  }
};

// ../../node_modules/.pnpm/engine.io-client@6.6.5/node_modules/engine.io-client/build/esm-debug/util.js
function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
}
var NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
var NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
  } else {
    obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
    obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
  }
}
var BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str2) {
  let c = 0, length = 0;
  for (let i = 0, l = str2.length; i < l; i++) {
    c = str2.charCodeAt(i);
    if (c < 128) {
      length += 1;
    } else if (c < 2048) {
      length += 2;
    } else if (c < 55296 || c >= 57344) {
      length += 3;
    } else {
      i++;
      length += 4;
    }
  }
  return length;
}
function randomString() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}

// ../../node_modules/.pnpm/engine.io-client@6.6.5/node_modules/engine.io-client/build/esm-debug/contrib/parseqs.js
function encode(obj) {
  let str2 = "";
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str2.length)
        str2 += "&";
      str2 += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]);
    }
  }
  return str2;
}
function decode(qs) {
  let qry = {};
  let pairs2 = qs.split("&");
  for (let i = 0, l = pairs2.length; i < l; i++) {
    let pair = pairs2[i].split("=");
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
}

// ../../node_modules/.pnpm/engine.io-client@6.6.5/node_modules/engine.io-client/build/esm-debug/transport.js
var import_debug = __toESM(require_src(), 1);
var debug = (0, import_debug.default)("engine.io-client:transport");
var TransportError = class extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }
};
var Transport = class extends import_component_emitter.Emitter {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.socket = opts.socket;
    this.supportsBinary = !opts.forceBase64;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  /**
   * Opens the transport.
   */
  open() {
    this.readyState = "opening";
    this.doOpen();
    return this;
  }
  /**
   * Closes the transport.
   */
  close() {
    if (this.readyState === "opening" || this.readyState === "open") {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(packets) {
    if (this.readyState === "open") {
      this.write(packets);
    } else {
      debug("transport is not open, discarding packets");
    }
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(data) {
    const packet = decodePacket(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(onPause) {
  }
  createUri(schema2, query = {}) {
    return schema2 + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
  }
  _hostname() {
    const hostname = this.opts.hostname;
    return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
  }
  _port() {
    if (this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80)) {
      return ":" + this.opts.port;
    } else {
      return "";
    }
  }
  _query(query) {
    const encodedQuery = encode(query);
    return encodedQuery.length ? "?" + encodedQuery : "";
  }
};

// ../../node_modules/.pnpm/engine.io-client@6.6.5/node_modules/engine.io-client/build/esm-debug/transports/polling.js
var import_debug2 = __toESM(require_src(), 1);
var debug2 = (0, import_debug2.default)("engine.io-client:polling");
var Polling = class extends Transport {
  constructor() {
    super(...arguments);
    this._polling = false;
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this._poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(onPause) {
    this.readyState = "pausing";
    const pause = () => {
      debug2("paused");
      this.readyState = "paused";
      onPause();
    };
    if (this._polling || !this.writable) {
      let total = 0;
      if (this._polling) {
        debug2("we are currently polling - waiting to pause");
        total++;
        this.once("pollComplete", function() {
          debug2("pre-pause polling complete");
          --total || pause();
        });
      }
      if (!this.writable) {
        debug2("we are currently writing - waiting to pause");
        total++;
        this.once("drain", function() {
          debug2("pre-pause writing complete");
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  _poll() {
    debug2("polling");
    this._polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(data) {
    debug2("polling got data %s", data);
    const callback = (packet) => {
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      }
      if ("close" === packet.type) {
        this.onClose({ description: "transport closed by the server" });
        return false;
      }
      this.onPacket(packet);
    };
    decodePayload(data, this.socket.binaryType).forEach(callback);
    if ("closed" !== this.readyState) {
      this._polling = false;
      this.emitReserved("pollComplete");
      if ("open" === this.readyState) {
        this._poll();
      } else {
        debug2('ignoring poll - transport state "%s"', this.readyState);
      }
    }
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const close = () => {
      debug2("writing close packet");
      this.write([{ type: "close" }]);
    };
    if ("open" === this.readyState) {
      debug2("transport open - closing");
      close();
    } else {
      debug2("transport not open - deferring close");
      this.once("open", close);
    }
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(packets) {
    this.writable = false;
    encodePayload(packets, (data) => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const schema2 = this.opts.secure ? "https" : "http";
    const query = this.query || {};
    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = randomString();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    return this.createUri(schema2, query);
  }
};

// ../../node_modules/.pnpm/engine.io-client@6.6.5/node_modules/engine.io-client/build/esm-debug/transports/polling-xhr.js
var import_component_emitter2 = __toESM(require_cjs(), 1);

// ../../node_modules/.pnpm/engine.io-client@6.6.5/node_modules/engine.io-client/build/esm-debug/contrib/has-cors.js
var value = false;
try {
  value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
} catch (err) {
}
var hasCORS = value;

// ../../node_modules/.pnpm/engine.io-client@6.6.5/node_modules/engine.io-client/build/esm-debug/transports/polling-xhr.js
var import_debug3 = __toESM(require_src(), 1);
var debug3 = (0, import_debug3.default)("engine.io-client:polling");
function empty() {
}
var BaseXHR = class extends Polling {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(opts) {
    super(opts);
    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port;
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data - data to send.
   * @param {Function} fn - called upon flush.
   * @private
   */
  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data
    });
    req.on("success", fn);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    debug3("xhr poll");
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
};
var Request = class _Request extends import_component_emitter2.Emitter {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(createRequest, uri, opts) {
    super();
    this.createRequest = createRequest;
    installTimerFunctions(this, opts);
    this._opts = opts;
    this._method = opts.method || "GET";
    this._uri = uri;
    this._data = void 0 !== opts.data ? opts.data : null;
    this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var _a;
    const opts = pick(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this._opts.xd;
    const xhr = this._xhr = this.createRequest(opts);
    try {
      debug3("xhr open %s: %s", this._method, this._uri);
      xhr.open(this._method, this._uri, true);
      try {
        if (this._opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i in this._opts.extraHeaders) {
            if (this._opts.extraHeaders.hasOwnProperty(i)) {
              xhr.setRequestHeader(i, this._opts.extraHeaders[i]);
            }
          }
        }
      } catch (e) {
      }
      if ("POST" === this._method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {
        }
      }
      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {
      }
      (_a = this._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this._opts.withCredentials;
      }
      if (this._opts.requestTimeout) {
        xhr.timeout = this._opts.requestTimeout;
      }
      xhr.onreadystatechange = () => {
        var _a2;
        if (xhr.readyState === 3) {
          (_a2 = this._opts.cookieJar) === null || _a2 === void 0 ? void 0 : _a2.parseCookies(
            // @ts-ignore
            xhr.getResponseHeader("set-cookie")
          );
        }
        if (4 !== xhr.readyState)
          return;
        if (200 === xhr.status || 1223 === xhr.status) {
          this._onLoad();
        } else {
          this.setTimeoutFn(() => {
            this._onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };
      debug3("xhr data %s", this._data);
      xhr.send(this._data);
    } catch (e) {
      this.setTimeoutFn(() => {
        this._onError(e);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this._index = _Request.requestsCount++;
      _Request.requests[this._index] = this;
    }
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(err) {
    this.emitReserved("error", err, this._xhr);
    this._cleanup(true);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(fromError) {
    if ("undefined" === typeof this._xhr || null === this._xhr) {
      return;
    }
    this._xhr.onreadystatechange = empty;
    if (fromError) {
      try {
        this._xhr.abort();
      } catch (e) {
      }
    }
    if (typeof document !== "undefined") {
      delete _Request.requests[this._index];
    }
    this._xhr = null;
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const data = this._xhr.responseText;
    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this._cleanup();
    }
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this._cleanup();
  }
};
Request.requestsCount = 0;
Request.requests = {};
if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}
var hasXHR2 = (function() {
  const xhr = newRequest({
    xdomain: false
  });
  return xhr && xhr.responseType !== null;
})();
function newRequest(opts) {
  const xdomain = opts.xdomain;
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {
  }
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {
    }
  }
}

// ../../node_modules/.pnpm/engine.io-client@6.6.5/node_modules/engine.io-client/build/esm-debug/transports/polling-xhr.node.js
var XMLHttpRequest2 = XMLHttpRequestModule.default || XMLHttpRequestModule;
var XHR = class extends BaseXHR {
  request(opts = {}) {
    var _a;
    Object.assign(opts, { xd: this.xd, cookieJar: (_a = this.socket) === null || _a === void 0 ? void 0 : _a._cookieJar }, this.opts);
    return new Request((opts2) => new XMLHttpRequest2(opts2), this.uri(), opts);
  }
};

// ../../node_modules/.pnpm/ws@8.20.1/node_modules/ws/wrapper.mjs
var import_stream = __toESM(require_stream(), 1);
var import_extension = __toESM(require_extension(), 1);
var import_permessage_deflate = __toESM(require_permessage_deflate(), 1);
var import_receiver = __toESM(require_receiver(), 1);
var import_sender = __toESM(require_sender(), 1);
var import_subprotocol = __toESM(require_subprotocol(), 1);
var import_websocket = __toESM(require_websocket(), 1);
var import_websocket_server = __toESM(require_websocket_server(), 1);

// ../../node_modules/.pnpm/engine.io-client@6.6.5/node_modules/engine.io-client/build/esm-debug/transports/websocket.js
var import_debug4 = __toESM(require_src(), 1);
var debug4 = (0, import_debug4.default)("engine.io-client:websocket");
var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
var BaseWS = class extends Transport {
  get name() {
    return "websocket";
  }
  doOpen() {
    const uri = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = this.createSocket(uri, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this.ws.binaryType = this.socket.binaryType;
    this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = (closeEvent) => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });
    this.ws.onmessage = (ev) => this.onData(ev.data);
    this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(packets) {
    this.writable = false;
    for (let i = 0; i < packets.length; i++) {
      const packet = packets[i];
      const lastPacket = i === packets.length - 1;
      encodePacket(packet, this.supportsBinary, (data) => {
        try {
          this.doWrite(packet, data);
        } catch (e) {
          debug4("websocket closed before onclose event");
        }
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.onerror = () => {
      };
      this.ws.close();
      this.ws = null;
    }
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const schema2 = this.opts.secure ? "wss" : "ws";
    const query = this.query || {};
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = randomString();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    return this.createUri(schema2, query);
  }
};
var WebSocketCtor = globalThisShim.WebSocket || globalThisShim.MozWebSocket;

// ../../node_modules/.pnpm/engine.io-client@6.6.5/node_modules/engine.io-client/build/esm-debug/transports/websocket.node.js
var WS = class extends BaseWS {
  createSocket(uri, protocols, opts) {
    var _a;
    if ((_a = this.socket) === null || _a === void 0 ? void 0 : _a._cookieJar) {
      opts.headers = opts.headers || {};
      opts.headers.cookie = typeof opts.headers.cookie === "string" ? [opts.headers.cookie] : opts.headers.cookie || [];
      for (const [name, cookie] of this.socket._cookieJar.cookies) {
        opts.headers.cookie.push(`${name}=${cookie.value}`);
      }
    }
    return new import_websocket.default(uri, protocols, opts);
  }
  doWrite(packet, data) {
    const opts = {};
    if (packet.options) {
      opts.compress = packet.options.compress;
    }
    if (this.opts.perMessageDeflate) {
      const len = (
        // @ts-ignore
        "string" === typeof data ? Buffer.byteLength(data) : data.length
      );
      if (len < this.opts.perMessageDeflate.threshold) {
        opts.compress = false;
      }
    }
    this.ws.send(data, opts);
  }
};

// ../../node_modules/.pnpm/engine.io-client@6.6.5/node_modules/engine.io-client/build/esm-debug/transports/webtransport.js
var import_debug5 = __toESM(require_src(), 1);
var debug5 = (0, import_debug5.default)("engine.io-client:webtransport");
var WT = class extends Transport {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this._transport.closed.then(() => {
      debug5("transport closed gracefully");
      this.onClose();
    }).catch((err) => {
      debug5("transport closed due to %s", err);
      this.onError("webtransport error", err);
    });
    this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((stream) => {
        const decoderStream = createPacketDecoderStream(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
        const reader = stream.readable.pipeThrough(decoderStream).getReader();
        const encoderStream = createPacketEncoderStream();
        encoderStream.readable.pipeTo(stream.writable);
        this._writer = encoderStream.writable.getWriter();
        const read = () => {
          reader.read().then(({ done, value: value2 }) => {
            if (done) {
              debug5("session is closed");
              return;
            }
            debug5("received chunk: %o", value2);
            this.onPacket(value2);
            read();
          }).catch((err) => {
            debug5("an error occurred while reading: %s", err);
          });
        };
        read();
        const packet = { type: "open" };
        if (this.query.sid) {
          packet.data = `{"sid":"${this.query.sid}"}`;
        }
        this._writer.write(packet).then(() => this.onOpen());
      });
    });
  }
  write(packets) {
    this.writable = false;
    for (let i = 0; i < packets.length; i++) {
      const packet = packets[i];
      const lastPacket = i === packets.length - 1;
      this._writer.write(packet).then(() => {
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    var _a;
    (_a = this._transport) === null || _a === void 0 ? void 0 : _a.close();
  }
};

// ../../node_modules/.pnpm/engine.io-client@6.6.5/node_modules/engine.io-client/build/esm-debug/transports/index.js
var transports = {
  websocket: WS,
  webtransport: WT,
  polling: XHR
};

// ../../node_modules/.pnpm/engine.io-client@6.6.5/node_modules/engine.io-client/build/esm-debug/contrib/parseuri.js
var re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function parse2(str2) {
  if (str2.length > 8e3) {
    throw "URI too long";
  }
  const src = str2, b = str2.indexOf("["), e = str2.indexOf("]");
  if (b != -1 && e != -1) {
    str2 = str2.substring(0, b) + str2.substring(b, e).replace(/:/g, ";") + str2.substring(e, str2.length);
  }
  let m = re.exec(str2 || ""), uri = {}, i = 14;
  while (i--) {
    uri[parts[i]] = m[i] || "";
  }
  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
    uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
    uri.ipv6uri = true;
  }
  uri.pathNames = pathNames(uri, uri["path"]);
  uri.queryKey = queryKey(uri, uri["query"]);
  return uri;
}
function pathNames(obj, path) {
  const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
  if (path.slice(0, 1) == "/" || path.length === 0) {
    names.splice(0, 1);
  }
  if (path.slice(-1) == "/") {
    names.splice(names.length - 1, 1);
  }
  return names;
}
function queryKey(uri, query) {
  const data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}

// ../../node_modules/.pnpm/engine.io-client@6.6.5/node_modules/engine.io-client/build/esm-debug/socket.js
var import_component_emitter3 = __toESM(require_cjs(), 1);
var import_debug6 = __toESM(require_src(), 1);
var debug6 = (0, import_debug6.default)("engine.io-client:socket");
var withEventListeners = typeof addEventListener === "function" && typeof removeEventListener === "function";
var OFFLINE_EVENT_LISTENERS = [];
if (withEventListeners) {
  addEventListener("offline", () => {
    debug6("closing %d connection(s) because the network was lost", OFFLINE_EVENT_LISTENERS.length);
    OFFLINE_EVENT_LISTENERS.forEach((listener) => listener());
  }, false);
}
var SocketWithoutUpgrade = class _SocketWithoutUpgrade extends import_component_emitter3.Emitter {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(uri, opts) {
    super();
    this.binaryType = defaultBinaryType;
    this.writeBuffer = [];
    this._prevBufferLen = 0;
    this._pingInterval = -1;
    this._pingTimeout = -1;
    this._maxPayload = -1;
    this._pingTimeoutTime = Infinity;
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }
    if (uri) {
      const parsedUri = parse2(uri);
      opts.hostname = parsedUri.host;
      opts.secure = parsedUri.protocol === "https" || parsedUri.protocol === "wss";
      opts.port = parsedUri.port;
      if (parsedUri.query)
        opts.query = parsedUri.query;
    } else if (opts.host) {
      opts.hostname = parse2(opts.host).host;
    }
    installTimerFunctions(this, opts);
    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = [];
    this._transportsByName = {};
    opts.transports.forEach((t) => {
      const transportName = t.prototype.name;
      this.transports.push(transportName);
      this._transportsByName[transportName] = t;
    });
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      addTrailingSlash: true,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: false
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
    if (typeof this.opts.query === "string") {
      this.opts.query = decode(this.opts.query);
    }
    if (withEventListeners) {
      if (this.opts.closeOnBeforeunload) {
        this._beforeunloadEventListener = () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };
        addEventListener("beforeunload", this._beforeunloadEventListener, false);
      }
      if (this.hostname !== "localhost") {
        debug6("adding listener for the 'offline' event");
        this._offlineEventListener = () => {
          this._onClose("transport close", {
            description: "network connection lost"
          });
        };
        OFFLINE_EVENT_LISTENERS.push(this._offlineEventListener);
      }
    }
    if (this.opts.withCredentials) {
      this._cookieJar = createCookieJar();
    }
    this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(name) {
    debug6('creating transport "%s"', name);
    const query = Object.assign({}, this.opts.query);
    query.EIO = protocol;
    query.transport = name;
    if (this.id)
      query.sid = this.id;
    const opts = Object.assign({}, this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[name]);
    debug6("options: %j", opts);
    return new this._transportsByName[name](opts);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const transportName = this.opts.rememberUpgrade && _SocketWithoutUpgrade.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const transport = this.createTransport(transportName);
    transport.open();
    this.setTransport(transport);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(transport) {
    debug6("setting transport %s", transport.name);
    if (this.transport) {
      debug6("clearing existing transport %s", this.transport.name);
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (reason) => this._onClose("transport close", reason));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    debug6("socket open");
    this.readyState = "open";
    _SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      debug6('socket receive: type "%s", data "%s"', packet.type, packet.data);
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this._sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          this._resetPingTimeout();
          break;
        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this._onError(err);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    } else {
      debug6('packet received with socket readyState "%s"', this.readyState);
    }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this._pingInterval = data.pingInterval;
    this._pingTimeout = data.pingTimeout;
    this._maxPayload = data.maxPayload;
    this.onOpen();
    if ("closed" === this.readyState)
      return;
    this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const delay = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + delay;
    this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, delay);
    if (this.opts.autoUnref) {
      this._pingTimeoutTimer.unref();
    }
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen);
    this._prevBufferLen = 0;
    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this._getWritablePackets();
      debug6("flushing %d packets in socket", packets.length);
      this.transport.send(packets);
      this._prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  _getWritablePackets() {
    const shouldCheckPayloadSize = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }
    let payloadSize = 1;
    for (let i = 0; i < this.writeBuffer.length; i++) {
      const data = this.writeBuffer[i].data;
      if (data) {
        payloadSize += byteLength(data);
      }
      if (i > 0 && payloadSize > this._maxPayload) {
        debug6("only send %d out of %d packets", i, this.writeBuffer.length);
        return this.writeBuffer.slice(0, i);
      }
      payloadSize += 2;
    }
    debug6("payload size is %d (max: %d)", payloadSize, this._maxPayload);
    return this.writeBuffer;
  }
  /**
   * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
   *
   * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
   * `write()` method then the message would not be buffered by the Socket.IO client.
   *
   * @return {boolean}
   * @private
   */
  /* private */
  _hasPingExpired() {
    if (!this._pingTimeoutTime)
      return true;
    const hasExpired = Date.now() > this._pingTimeoutTime;
    if (hasExpired) {
      debug6("throttled timer detected, scheduling connection close");
      this._pingTimeoutTime = 0;
      nextTick(() => {
        this._onClose("ping timeout");
      }, this.setTimeoutFn);
    }
    return hasExpired;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(msg, options, fn) {
    this._sendPacket("message", msg, options, fn);
    return this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(msg, options, fn) {
    this._sendPacket("message", msg, options, fn);
    return this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type - packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  _sendPacket(type2, data, options, fn) {
    if ("function" === typeof data) {
      fn = data;
      data = void 0;
    }
    if ("function" === typeof options) {
      fn = options;
      options = null;
    }
    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }
    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type: type2,
      data,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn)
      this.once("flush", fn);
    this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const close = () => {
      this._onClose("forced close");
      debug6("socket closing - telling transport to close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };
    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    return this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(err) {
    debug6("socket error %j", err);
    _SocketWithoutUpgrade.priorWebsocketSuccess = false;
    if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
      debug6("trying next transport");
      this.transports.shift();
      return this._open();
    }
    this.emitReserved("error", err);
    this._onClose("transport error", err);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(reason, description) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      debug6('socket close with reason: "%s"', reason);
      this.clearTimeoutFn(this._pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (withEventListeners) {
        if (this._beforeunloadEventListener) {
          removeEventListener("beforeunload", this._beforeunloadEventListener, false);
        }
        if (this._offlineEventListener) {
          const i = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
          if (i !== -1) {
            debug6("removing listener for the 'offline' event");
            OFFLINE_EVENT_LISTENERS.splice(i, 1);
          }
        }
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, description);
      this.writeBuffer = [];
      this._prevBufferLen = 0;
    }
  }
};
SocketWithoutUpgrade.protocol = protocol;
var SocketWithUpgrade = class extends SocketWithoutUpgrade {
  constructor() {
    super(...arguments);
    this._upgrades = [];
  }
  onOpen() {
    super.onOpen();
    if ("open" === this.readyState && this.opts.upgrade) {
      debug6("starting upgrade probes");
      for (let i = 0; i < this._upgrades.length; i++) {
        this._probe(this._upgrades[i]);
      }
    }
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(name) {
    debug6('probing transport "%s"', name);
    let transport = this.createTransport(name);
    let failed = false;
    SocketWithoutUpgrade.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed)
        return;
      debug6('probe transport "%s" opened', name);
      transport.send([{ type: "ping", data: "probe" }]);
      transport.once("packet", (msg) => {
        if (failed)
          return;
        if ("pong" === msg.type && "probe" === msg.data) {
          debug6('probe transport "%s" pong', name);
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport)
            return;
          SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === transport.name;
          debug6('pausing current transport "%s"', this.transport.name);
          this.transport.pause(() => {
            if (failed)
              return;
            if ("closed" === this.readyState)
              return;
            debug6("changing transport and sending upgrade packet");
            cleanup();
            this.setTransport(transport);
            transport.send([{ type: "upgrade" }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          debug6('probe transport "%s" failed', name);
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };
    function freezeTransport() {
      if (failed)
        return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    const onerror = (err) => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;
      freezeTransport();
      debug6('probe transport "%s" failed because of error: %s', name, err);
      this.emitReserved("upgradeError", error);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        debug6('"%s" works - aborting "%s"', to.name, transport.name);
        freezeTransport();
      }
    }
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    if (this._upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
      this.setTimeoutFn(() => {
        if (!failed) {
          transport.open();
        }
      }, 200);
    } else {
      transport.open();
    }
  }
  onHandshake(data) {
    this._upgrades = this._filterUpgrades(data.upgrades);
    super.onHandshake(data);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    for (let i = 0; i < upgrades.length; i++) {
      if (~this.transports.indexOf(upgrades[i]))
        filteredUpgrades.push(upgrades[i]);
    }
    return filteredUpgrades;
  }
};
var Socket = class extends SocketWithUpgrade {
  constructor(uri, opts = {}) {
    const o = typeof uri === "object" ? uri : opts;
    if (!o.transports || o.transports && typeof o.transports[0] === "string") {
      o.transports = (o.transports || ["polling", "websocket", "webtransport"]).map((transportName) => transports[transportName]).filter((t) => !!t);
    }
    super(uri, o);
  }
};

// ../../node_modules/.pnpm/engine.io-client@6.6.5/node_modules/engine.io-client/build/esm-debug/index.js
var protocol2 = Socket.protocol;

// ../../node_modules/.pnpm/socket.io-client@4.8.3/node_modules/socket.io-client/build/esm-debug/url.js
var import_debug7 = __toESM(require_src(), 1);
var debug7 = (0, import_debug7.default)("socket.io-client:url");
function url(uri, path = "", loc) {
  let obj = uri;
  loc = loc || typeof location !== "undefined" && location;
  if (null == uri)
    uri = loc.protocol + "//" + loc.host;
  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }
    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug7("protocol-less url %s", uri);
      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }
    debug7("parse %s", uri);
    obj = parse2(uri);
  }
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }
  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}

// ../../node_modules/.pnpm/socket.io-parser@4.2.6/node_modules/socket.io-parser/build/esm-debug/index.js
var esm_debug_exports = {};
__export(esm_debug_exports, {
  Decoder: () => Decoder,
  Encoder: () => Encoder,
  PacketType: () => PacketType,
  isPacketValid: () => isPacketValid,
  protocol: () => protocol3
});
var import_component_emitter4 = __toESM(require_cjs(), 1);

// ../../node_modules/.pnpm/socket.io-parser@4.2.6/node_modules/socket.io-parser/build/esm-debug/is-binary.js
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
var toString2 = Object.prototype.toString;
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString2.call(Blob) === "[object BlobConstructor]";
var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString2.call(File) === "[object FileConstructor]";
function isBinary2(obj) {
  return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (let i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary2(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}

// ../../node_modules/.pnpm/socket.io-parser@4.2.6/node_modules/socket.io-parser/build/esm-debug/binary.js
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length;
  return { packet: pack, buffers };
}
function _deconstructPacket(data, buffers) {
  if (!data)
    return data;
  if (isBinary2(data)) {
    const placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    const newData = new Array(data.length);
    for (let i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === "object" && !(data instanceof Date)) {
    const newData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        newData[key] = _deconstructPacket(data[key], buffers);
      }
    }
    return newData;
  }
  return data;
}
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  delete packet.attachments;
  return packet;
}
function _reconstructPacket(data, buffers) {
  if (!data)
    return data;
  if (data && data._placeholder === true) {
    const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
    if (isIndexValid) {
      return buffers[data.num];
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === "object") {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }
  return data;
}

// ../../node_modules/.pnpm/socket.io-parser@4.2.6/node_modules/socket.io-parser/build/esm-debug/index.js
var import_debug8 = __toESM(require_src(), 1);
var debug8 = (0, import_debug8.default)("socket.io-parser");
var RESERVED_EVENTS = [
  "connect",
  // used on the client side
  "connect_error",
  // used on the client side
  "disconnect",
  // used on both sides
  "disconnecting",
  // used on the server side
  "newListener",
  // used by the Node.js EventEmitter
  "removeListener"
  // used by the Node.js EventEmitter
];
var protocol3 = 5;
var PacketType;
(function(PacketType2) {
  PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
  PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
  PacketType2[PacketType2["ACK"] = 3] = "ACK";
  PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
var Encoder = class {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(replacer) {
    this.replacer = replacer;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(obj) {
    debug8("encoding packet %j", obj);
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if (hasBinary(obj)) {
        return this.encodeAsBinary({
          type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
          nsp: obj.nsp,
          data: obj.data,
          id: obj.id
        });
      }
    }
    return [this.encodeAsString(obj)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(obj) {
    let str2 = "" + obj.type;
    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str2 += obj.attachments + "-";
    }
    if (obj.nsp && "/" !== obj.nsp) {
      str2 += obj.nsp + ",";
    }
    if (null != obj.id) {
      str2 += obj.id;
    }
    if (null != obj.data) {
      str2 += JSON.stringify(obj.data, this.replacer);
    }
    debug8("encoded %j as %s", obj, str2);
    return str2;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(obj) {
    const deconstruction = deconstructPacket(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack);
    return buffers;
  }
};
var Decoder = class _Decoder extends import_component_emitter4.Emitter {
  /**
   * Decoder constructor
   */
  constructor(opts) {
    super();
    this.opts = Object.assign({
      reviver: void 0,
      maxAttachments: 10
    }, typeof opts === "function" ? { reviver: opts } : opts);
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(obj) {
    let packet;
    if (typeof obj === "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }
      packet = this.decodeString(obj);
      const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
      if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
        packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
        this.reconstructor = new BinaryReconstructor(packet);
        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        super.emitReserved("decoded", packet);
      }
    } else if (isBinary2(obj) || obj.base64) {
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) {
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(str2) {
    let i = 0;
    const p = {
      type: Number(str2.charAt(0))
    };
    if (PacketType[p.type] === void 0) {
      throw new Error("unknown packet type " + p.type);
    }
    if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
      const start = i + 1;
      while (str2.charAt(++i) !== "-" && i != str2.length) {
      }
      const buf = str2.substring(start, i);
      if (buf != Number(buf) || str2.charAt(i) !== "-") {
        throw new Error("Illegal attachments");
      }
      const n = Number(buf);
      if (!isInteger2(n) || n < 0) {
        throw new Error("Illegal attachments");
      } else if (n > this.opts.maxAttachments) {
        throw new Error("too many attachments");
      }
      p.attachments = n;
    }
    if ("/" === str2.charAt(i + 1)) {
      const start = i + 1;
      while (++i) {
        const c = str2.charAt(i);
        if ("," === c)
          break;
        if (i === str2.length)
          break;
      }
      p.nsp = str2.substring(start, i);
    } else {
      p.nsp = "/";
    }
    const next = str2.charAt(i + 1);
    if ("" !== next && Number(next) == next) {
      const start = i + 1;
      while (++i) {
        const c = str2.charAt(i);
        if (null == c || Number(c) != c) {
          --i;
          break;
        }
        if (i === str2.length)
          break;
      }
      p.id = Number(str2.substring(start, i + 1));
    }
    if (str2.charAt(++i)) {
      const payload = this.tryParse(str2.substr(i));
      if (_Decoder.isPayloadValid(p.type, payload)) {
        p.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    debug8("decoded %s as %j", str2, p);
    return p;
  }
  tryParse(str2) {
    try {
      return JSON.parse(str2, this.opts.reviver);
    } catch (e) {
      return false;
    }
  }
  static isPayloadValid(type2, payload) {
    switch (type2) {
      case PacketType.CONNECT:
        return isObject2(payload);
      case PacketType.DISCONNECT:
        return payload === void 0;
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || isObject2(payload);
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
      this.reconstructor = null;
    }
  }
};
var BinaryReconstructor = class {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(binData) {
    this.buffers.push(binData);
    if (this.buffers.length === this.reconPack.attachments) {
      const packet = reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }
};
function isNamespaceValid(nsp) {
  return typeof nsp === "string";
}
var isInteger2 = Number.isInteger || function(value2) {
  return typeof value2 === "number" && isFinite(value2) && Math.floor(value2) === value2;
};
function isAckIdValid(id) {
  return id === void 0 || isInteger2(id);
}
function isObject2(value2) {
  return Object.prototype.toString.call(value2) === "[object Object]";
}
function isDataValid(type2, payload) {
  switch (type2) {
    case PacketType.CONNECT:
      return payload === void 0 || isObject2(payload);
    case PacketType.DISCONNECT:
      return payload === void 0;
    case PacketType.EVENT:
      return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
    case PacketType.ACK:
      return Array.isArray(payload);
    case PacketType.CONNECT_ERROR:
      return typeof payload === "string" || isObject2(payload);
    default:
      return false;
  }
}
function isPacketValid(packet) {
  return isNamespaceValid(packet.nsp) && isAckIdValid(packet.id) && isDataValid(packet.type, packet.data);
}

// ../../node_modules/.pnpm/socket.io-client@4.8.3/node_modules/socket.io-client/build/esm-debug/on.js
function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}

// ../../node_modules/.pnpm/socket.io-client@4.8.3/node_modules/socket.io-client/build/esm-debug/socket.js
var import_component_emitter5 = __toESM(require_cjs(), 1);
var import_debug9 = __toESM(require_src(), 1);
var debug9 = (0, import_debug9.default)("socket.io-client:socket");
var RESERVED_EVENTS2 = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
var Socket2 = class extends import_component_emitter5.Emitter {
  /**
   * `Socket` constructor.
   */
  constructor(io, nsp, opts) {
    super();
    this.connected = false;
    this.recovered = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this._queue = [];
    this._queueSeq = 0;
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;
    if (opts && opts.auth) {
      this.auth = opts.auth;
    }
    this._opts = Object.assign({}, opts);
    if (this.io._autoConnect)
      this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const io = this.io;
    this.subs = [
      on(io, "open", this.onopen.bind(this)),
      on(io, "packet", this.onpacket.bind(this)),
      on(io, "error", this.onerror.bind(this)),
      on(io, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    if (this.connected)
      return this;
    this.subEvents();
    if (!this.io["_reconnecting"])
      this.io.open();
    if ("open" === this.io._readyState)
      this.onopen();
    return this;
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(ev, ...args) {
    var _a, _b, _c;
    if (RESERVED_EVENTS2.hasOwnProperty(ev)) {
      throw new Error('"' + ev.toString() + '" is a reserved event name');
    }
    args.unshift(ev);
    if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
      this._addToQueue(args);
      return this;
    }
    const packet = {
      type: PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;
    if ("function" === typeof args[args.length - 1]) {
      const id = this.ids++;
      debug9("emitting packet with ack id %d", id);
      const ack = args.pop();
      this._registerAckCallback(id, ack);
      packet.id = id;
    }
    const isTransportWritable = (_b = (_a = this.io.engine) === null || _a === void 0 ? void 0 : _a.transport) === null || _b === void 0 ? void 0 : _b.writable;
    const isConnected = this.connected && !((_c = this.io.engine) === null || _c === void 0 ? void 0 : _c._hasPingExpired());
    const discardPacket = this.flags.volatile && !isTransportWritable;
    if (discardPacket) {
      debug9("discard packet as the transport is not currently writable");
    } else if (isConnected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
    this.flags = {};
    return this;
  }
  /**
   * @private
   */
  _registerAckCallback(id, ack) {
    var _a;
    const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
    if (timeout === void 0) {
      this.acks[id] = ack;
      return;
    }
    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];
      for (let i = 0; i < this.sendBuffer.length; i++) {
        if (this.sendBuffer[i].id === id) {
          debug9("removing packet with ack id %d from the buffer", id);
          this.sendBuffer.splice(i, 1);
        }
      }
      debug9("event with ack id %d has timed out after %d ms", id, timeout);
      ack.call(this, new Error("operation has timed out"));
    }, timeout);
    const fn = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, args);
    };
    fn.withError = true;
    this.acks[id] = fn;
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(ev, ...args) {
    return new Promise((resolve5, reject) => {
      const fn = (arg1, arg2) => {
        return arg1 ? reject(arg1) : resolve5(arg2);
      };
      fn.withError = true;
      args.push(fn);
      this.emit(ev, ...args);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(args) {
    let ack;
    if (typeof args[args.length - 1] === "function") {
      ack = args.pop();
    }
    const packet = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: false,
      args,
      flags: Object.assign({ fromQueue: true }, this.flags)
    };
    args.push((err, ...responseArgs) => {
      if (packet !== this._queue[0]) {
        return debug9("packet [%d] already acknowledged", packet.id);
      }
      const hasError = err !== null;
      if (hasError) {
        if (packet.tryCount > this._opts.retries) {
          debug9("packet [%d] is discarded after %d tries", packet.id, packet.tryCount);
          this._queue.shift();
          if (ack) {
            ack(err);
          }
        }
      } else {
        debug9("packet [%d] was successfully sent", packet.id);
        this._queue.shift();
        if (ack) {
          ack(null, ...responseArgs);
        }
      }
      packet.pending = false;
      return this._drainQueue();
    });
    this._queue.push(packet);
    this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(force = false) {
    debug9("draining queue");
    if (!this.connected || this._queue.length === 0) {
      return;
    }
    const packet = this._queue[0];
    if (packet.pending && !force) {
      debug9("packet [%d] has already been sent and is waiting for an ack", packet.id);
      return;
    }
    packet.pending = true;
    packet.tryCount++;
    debug9("sending packet [%d] (try n\xB0%d)", packet.id, packet.tryCount);
    this.flags = packet.flags;
    this.emit.apply(this, packet.args);
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(packet) {
    packet.nsp = this.nsp;
    this.io._packet(packet);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    debug9("transport is open - connecting");
    if (typeof this.auth == "function") {
      this.auth((data) => {
        this._sendConnectPacket(data);
      });
    } else {
      this._sendConnectPacket(this.auth);
    }
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(data) {
    this.packet({
      type: PacketType.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, data) : data
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(reason, description) {
    debug9("close (%s)", reason);
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
    this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((id) => {
      const isBuffered = this.sendBuffer.some((packet) => String(packet.id) === id);
      if (!isBuffered) {
        const ack = this.acks[id];
        delete this.acks[id];
        if (ack.withError) {
          ack.call(this, new Error("socket has been disconnected"));
        }
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace)
      return;
    switch (packet.type) {
      case PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          this.onconnect(packet.data.sid, packet.data.pid);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }
        break;
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        this.onack(packet);
        break;
      case PacketType.DISCONNECT:
        this.ondisconnect();
        break;
      case PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message);
        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(packet) {
    const args = packet.data || [];
    debug9("emitting event %j", args);
    if (null != packet.id) {
      debug9("attaching ack callback to event");
      args.push(this.ack(packet.id));
    }
    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }
  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }
    super.emit.apply(this, args);
    if (this._pid && args.length && typeof args[args.length - 1] === "string") {
      this._lastOffset = args[args.length - 1];
    }
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(id) {
    const self = this;
    let sent = false;
    return function(...args) {
      if (sent)
        return;
      sent = true;
      debug9("sending ack %j", args);
      self.packet({
        type: PacketType.ACK,
        id,
        data: args
      });
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(packet) {
    const ack = this.acks[packet.id];
    if (typeof ack !== "function") {
      debug9("bad ack %s", packet.id);
      return;
    }
    delete this.acks[packet.id];
    debug9("calling ack %s with %j", packet.id, packet.data);
    if (ack.withError) {
      packet.data.unshift(null);
    }
    ack.apply(this, packet.data);
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(id, pid) {
    debug9("socket connected with id %s", id);
    this.id = id;
    this.recovered = pid && this._pid === pid;
    this._pid = pid;
    this.connected = true;
    this.emitBuffered();
    this._drainQueue(true);
    this.emitReserved("connect");
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((args) => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach((packet) => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    debug9("server disconnect (%s)", this.nsp);
    this.destroy();
    this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    if (this.subs) {
      this.subs.forEach((subDestroy) => subDestroy());
      this.subs = void 0;
    }
    this.io["_destroy"](this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    if (this.connected) {
      debug9("performing disconnect (%s)", this.nsp);
      this.packet({ type: PacketType.DISCONNECT });
    }
    this.destroy();
    if (this.connected) {
      this.onclose("io client disconnect");
    }
    return this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(listener);
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(listener);
    return this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.push(listener);
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.unshift(listener);
    return this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(listener) {
    if (!this._anyOutgoingListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyOutgoingListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, packet.data);
      }
    }
  }
};

// ../../node_modules/.pnpm/socket.io-client@4.8.3/node_modules/socket.io-client/build/esm-debug/contrib/backo2.js
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 1e4;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
Backoff.prototype.duration = function() {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};
Backoff.prototype.reset = function() {
  this.attempts = 0;
};
Backoff.prototype.setMin = function(min) {
  this.ms = min;
};
Backoff.prototype.setMax = function(max) {
  this.max = max;
};
Backoff.prototype.setJitter = function(jitter) {
  this.jitter = jitter;
};

// ../../node_modules/.pnpm/socket.io-client@4.8.3/node_modules/socket.io-client/build/esm-debug/manager.js
var import_component_emitter6 = __toESM(require_cjs(), 1);
var import_debug10 = __toESM(require_src(), 1);
var debug10 = (0, import_debug10.default)("socket.io-client:manager");
var Manager = class extends import_component_emitter6.Emitter {
  constructor(uri, opts) {
    var _a;
    super();
    this.nsps = {};
    this.subs = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    installTimerFunctions(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1e3);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
    this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;
    const _parser = opts.parser || esm_debug_exports;
    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect)
      this.open();
  }
  reconnection(v) {
    if (!arguments.length)
      return this._reconnection;
    this._reconnection = !!v;
    if (!v) {
      this.skipReconnect = true;
    }
    return this;
  }
  reconnectionAttempts(v) {
    if (v === void 0)
      return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  }
  reconnectionDelay(v) {
    var _a;
    if (v === void 0)
      return this._reconnectionDelay;
    this._reconnectionDelay = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
    return this;
  }
  randomizationFactor(v) {
    var _a;
    if (v === void 0)
      return this._randomizationFactor;
    this._randomizationFactor = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
    return this;
  }
  reconnectionDelayMax(v) {
    var _a;
    if (v === void 0)
      return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
    return this;
  }
  timeout(v) {
    if (!arguments.length)
      return this._timeout;
    this._timeout = v;
    return this;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(fn) {
    debug10("readyState %s", this._readyState);
    if (~this._readyState.indexOf("open"))
      return this;
    debug10("opening %s", this.uri);
    this.engine = new Socket(this.uri, this.opts);
    const socket = this.engine;
    const self = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on(socket, "open", function() {
      self.onopen();
      fn && fn();
    });
    const onError = (err) => {
      debug10("error");
      this.cleanup();
      this._readyState = "closed";
      this.emitReserved("error", err);
      if (fn) {
        fn(err);
      } else {
        this.maybeReconnectOnOpen();
      }
    };
    const errorSub = on(socket, "error", onError);
    if (false !== this._timeout) {
      const timeout = this._timeout;
      debug10("connect attempt will timeout after %d", timeout);
      const timer = this.setTimeoutFn(() => {
        debug10("connect attempt timed out after %d", timeout);
        openSubDestroy();
        onError(new Error("timeout"));
        socket.close();
      }, timeout);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
      });
    }
    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(fn) {
    return this.open(fn);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    debug10("open");
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket = this.engine;
    this.subs.push(
      on(socket, "ping", this.onping.bind(this)),
      on(socket, "data", this.ondata.bind(this)),
      on(socket, "error", this.onerror.bind(this)),
      on(socket, "close", this.onclose.bind(this)),
      // @ts-ignore
      on(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(data) {
    try {
      this.decoder.add(data);
    } catch (e) {
      this.onclose("parse error", e);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(packet) {
    nextTick(() => {
      this.emitReserved("packet", packet);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(err) {
    debug10("error", err);
    this.emitReserved("error", err);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(nsp, opts) {
    let socket = this.nsps[nsp];
    if (!socket) {
      socket = new Socket2(this, nsp, opts);
      this.nsps[nsp] = socket;
    } else if (this._autoConnect && !socket.active) {
      socket.connect();
    }
    return socket;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(socket) {
    const nsps = Object.keys(this.nsps);
    for (const nsp of nsps) {
      const socket2 = this.nsps[nsp];
      if (socket2.active) {
        debug10("socket %s is still active, skipping close", nsp);
        return;
      }
    }
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(packet) {
    debug10("writing packet %j", packet);
    const encodedPackets = this.encoder.encode(packet);
    for (let i = 0; i < encodedPackets.length; i++) {
      this.engine.write(encodedPackets[i], packet.options);
    }
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    debug10("cleanup");
    this.subs.forEach((subDestroy) => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    debug10("disconnect");
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called when:
   *
   * - the low-level engine is closed
   * - the parser encountered a badly formatted packet
   * - all sockets are disconnected
   *
   * @private
   */
  onclose(reason, description) {
    var _a;
    debug10("closed due to %s", reason);
    this.cleanup();
    (_a = this.engine) === null || _a === void 0 ? void 0 : _a.close();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const self = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      debug10("reconnect failed");
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      debug10("will wait %dms before reconnect attempt", delay);
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self.skipReconnect)
          return;
        debug10("attempting reconnect");
        this.emitReserved("reconnect_attempt", self.backoff.attempts);
        if (self.skipReconnect)
          return;
        self.open((err) => {
          if (err) {
            debug10("reconnect attempt error");
            self._reconnecting = false;
            self.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            debug10("reconnect success");
            self.onreconnect();
          }
        });
      }, delay);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }
};

// ../../node_modules/.pnpm/socket.io-client@4.8.3/node_modules/socket.io-client/build/esm-debug/index.js
var import_debug11 = __toESM(require_src(), 1);
var debug11 = (0, import_debug11.default)("socket.io-client");
var cache = {};
function lookup(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = void 0;
  }
  opts = opts || {};
  const parsed = url(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id] && path in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  let io;
  if (newConnection) {
    debug11("ignoring socket cache for %s", source);
    io = new Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug11("new io instance for %s", source);
      cache[id] = new Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io.socket(parsed.path, opts);
}
Object.assign(lookup, {
  Manager,
  Socket: Socket2,
  io: lookup,
  connect: lookup
});

// ../../packages/sync/src/ws-client.ts
function isAuthLikeConnectError(err) {
  const message = err.message ?? "";
  return /\b(?:401|403)\b|not.?authorized|authentication|(?:account|billing|subscription|team|space)\s+inactive|inactive\s+(?:account|billing|subscription|team|space)/i.test(
    message
  );
}
var WsClient = class {
  constructor(baseUrl, token, handlers) {
    this.baseUrl = baseUrl;
    this.handlers = handlers;
    this.getToken = typeof token === "function" ? token : () => token;
  }
  socket;
  closing = false;
  getToken;
  connect() {
    this.closing = false;
    let connectSettled = false;
    let hasConnected = false;
    let connectErrorNotified = false;
    let shouldReconcileOnConnect = false;
    return new Promise((resolve5, reject) => {
      const socket = lookup(this.baseUrl, {
        auth: (cb) => cb({ token: this.getToken() }),
        transports: ["websocket"],
        reconnection: true
      });
      this.socket = socket;
      socket.on("memory.changed", (event) => {
        this.handlers.onEvent(event);
      });
      socket.on("connect", () => {
        const shouldNotifyReconnect = shouldReconcileOnConnect;
        hasConnected = true;
        connectErrorNotified = false;
        shouldReconcileOnConnect = false;
        this.handlers.onState?.("connected");
        if (!connectSettled) {
          connectSettled = true;
          resolve5();
          return;
        }
        if (shouldNotifyReconnect) this.handlers.onReconnect?.();
      });
      socket.on("disconnect", (reason) => {
        if (this.closing) return;
        if (socket.active) {
          shouldReconcileOnConnect = true;
          this.handlers.onState?.("reconnecting");
        } else {
          shouldReconcileOnConnect = false;
          this.handlers.onState?.("degraded");
          this.handlers.onTerminalDisconnect?.(reason);
        }
      });
      socket.io.on("reconnect_attempt", () => {
        if (this.closing) return;
        shouldReconcileOnConnect = true;
        this.handlers.onState?.(hasConnected ? "reconnecting" : "degraded");
      });
      socket.on("connect_error", (err) => {
        const authLike = isAuthLikeConnectError(err);
        if (authLike || !connectErrorNotified) {
          connectErrorNotified = true;
          this.handlers.onConnectError?.(err);
        }
        if (socket.active) {
          shouldReconcileOnConnect = true;
          this.handlers.onState?.(hasConnected ? "reconnecting" : "degraded");
        } else {
          shouldReconcileOnConnect = false;
          this.handlers.onState?.("degraded");
        }
        if (!connectSettled) {
          connectSettled = true;
          reject(err);
        }
      });
    });
  }
  close() {
    this.closing = true;
    this.socket?.close();
    this.socket = void 0;
  }
};

// ../../packages/sync/src/watch.ts
import { watch } from "node:fs";

// ../../packages/sync/src/syncable.ts
var INDEX_FILE2 = "index.html";
var DERIVED_ARTIFACT_RE2 = /\.(abstract|full|overview)\.html$/i;
function isSyncable(treeRelPath) {
  const p = treeRelPath.replace(/\\/g, "/");
  if (p.startsWith("../") || p.includes("/../") || p === "..") return false;
  if (p.startsWith(".brv/") || p.includes("/.brv/")) return false;
  if (!p.toLowerCase().endsWith(".html")) return false;
  if (p === INDEX_FILE2) return false;
  if (DERIVED_ARTIFACT_RE2.test(p)) return false;
  return true;
}

// ../../packages/sync/src/watch.ts
function watchTree(root, debounceMs, onBatch) {
  const pending = /* @__PURE__ */ new Set();
  let timer;
  const flush = () => {
    timer = void 0;
    const keys = [...pending].filter(isSyncable);
    pending.clear();
    if (keys.length) onBatch(keys);
  };
  let watcher;
  try {
    watcher = watch(root, { recursive: true }, (_event, filename) => {
      if (!filename) return;
      pending.add(filename.toString().split("\\").join("/"));
      if (timer) clearTimeout(timer);
      timer = setTimeout(flush, debounceMs);
    });
  } catch {
  }
  return () => {
    if (timer) clearTimeout(timer);
    watcher?.close();
  };
}

// ../../packages/sync/src/reconcile.ts
function planReconcile(inputs, _nowIso, options = {}) {
  const mode = options.mode ?? "bidirectional";
  if (mode === "bidirectional") return planBidirectional(inputs);
  if (mode === "bootstrap") return planBootstrap(inputs);
  return planPullOnly(inputs);
}
function planBidirectional(inputs) {
  const { local, remote, baseline } = inputs;
  const keys = /* @__PURE__ */ new Set([
    ...local.keys(),
    ...remote.keys(),
    ...Object.keys(baseline)
  ]);
  const actions = [];
  for (const key of [...keys].sort()) {
    const L = local.get(key);
    const R = remote.get(key);
    const B = baseline[key];
    if (L && R) {
      if (L.md5 === R.md5) continue;
      const localChanged = !B || L.md5 !== B.md5;
      const remoteChanged = !B || R.md5 !== B.md5;
      if (!B) {
        actions.push({ kind: "conflict", key, winner: "remote", reason: "first-sync" });
      } else if (localChanged && remoteChanged) {
        actions.push(resolveLww(key, L, R));
      } else if (remoteChanged) {
        actions.push({ kind: "pull", key });
      } else {
        actions.push({ kind: "push", key });
      }
    } else if (L && !R) {
      if (B && L.md5 !== B.md5) {
        actions.push({ kind: "conflict", key, winner: "local", reason: "edit-vs-delete" });
      } else {
        actions.push(B ? { kind: "delete-local", key } : { kind: "push", key });
      }
    } else if (!L && R) {
      if (B && R.md5 !== B.md5) {
        actions.push({ kind: "conflict", key, winner: "remote", reason: "edit-vs-delete" });
      } else {
        actions.push(B ? { kind: "delete-remote", key } : { kind: "pull", key });
      }
    }
  }
  return actions;
}
function planBootstrap(inputs) {
  const { local, remote, baseline } = inputs;
  const keys = /* @__PURE__ */ new Set([
    ...local.keys(),
    ...remote.keys(),
    ...Object.keys(baseline)
  ]);
  const actions = [];
  for (const key of [...keys].sort()) {
    const L = local.get(key);
    const R = remote.get(key);
    const B = baseline[key];
    if (R) {
      if (!B || R.md5 !== B.md5) {
        if (L && !B && L.md5 !== R.md5) {
          actions.push({ kind: "conflict", key, winner: "remote", reason: "first-sync" });
        } else {
          actions.push({ kind: "pull", key });
        }
      }
    }
  }
  return actions;
}
function planPullOnly(inputs) {
  const { local, remote, baseline } = inputs;
  const keys = /* @__PURE__ */ new Set([
    ...local.keys(),
    ...remote.keys(),
    ...Object.keys(baseline)
  ]);
  const actions = [];
  for (const key of [...keys].sort()) {
    const L = local.get(key);
    const R = remote.get(key);
    const B = baseline[key];
    if (L && R) {
      if (L.md5 === R.md5) continue;
      const localChanged = !B || L.md5 !== B.md5;
      const remoteChanged = !B || R.md5 !== B.md5;
      if (localChanged) {
        actions.push({ kind: "local-change-not-uploaded", key });
      } else if (remoteChanged) {
        actions.push({ kind: "pull", key });
      }
    } else if (L && !R) {
      if (B) {
        if (L.md5 !== B.md5) {
          actions.push({ kind: "local-change-not-uploaded", key });
        } else {
          actions.push({ kind: "delete-local", key });
        }
      } else {
        actions.push({ kind: "local-change-not-uploaded", key });
      }
    } else if (!L && R) {
      if (!B || R.md5 !== B.md5) {
        actions.push({ kind: "pull", key });
      }
    }
  }
  return actions;
}
function resolveLww(key, L, R) {
  const rTime = Date.parse(R.updatedAt);
  const lTime = L.mtimeMs;
  if (rTime > lTime) return { kind: "conflict", key, winner: "remote", reason: "newer" };
  if (rTime < lTime) return { kind: "conflict", key, winner: "local", reason: "newer" };
  const winner = L.md5 > R.md5 ? "local" : "remote";
  return { kind: "conflict", key, winner, reason: "tie-md5" };
}

// ../../packages/sync/src/state.ts
var BASELINE_KEY = "baseline";
var STATUS_KEY = "status";
var DEFAULT_STATUS = {
  running: false,
  state: "idle",
  wsState: "degraded",
  conflicts: [],
  rejected: [],
  pendingError: null
};
var SyncState = class {
  kv;
  constructor(syncDir) {
    this.kv = new FileKeyStorage(syncDir);
  }
  async getBaseline() {
    return await this.kv.get(BASELINE_KEY) ?? {};
  }
  async setBaseline(b) {
    await this.kv.set(BASELINE_KEY, b);
  }
  async getStatus() {
    const stored = await this.kv.get(STATUS_KEY);
    return { ...DEFAULT_STATUS, ...stored };
  }
  async setStatus(s) {
    await this.kv.set(STATUS_KEY, s);
  }
};

// ../../packages/sync/src/tree-fs.ts
import { stat as stat2 } from "node:fs/promises";

// ../../packages/sync/src/hash.ts
import { createHash as createHash3 } from "node:crypto";
function md5Hex(data) {
  return createHash3("md5").update(data).digest("hex");
}

// ../../packages/sync/src/tree-fs.ts
var TreeFs = class {
  constructor(root) {
    this.root = root;
    this.blobs = new FileBlobStorage(root);
  }
  blobs;
  /** Map of syncable key -> {md5, mtimeMs} for every local topic file. */
  async listSyncable() {
    const out = /* @__PURE__ */ new Map();
    for (const key of await this.blobs.list()) {
      if (!isSyncable(key)) continue;
      const buf = await this.blobs.get(key);
      if (!buf) continue;
      const { mtimeMs } = await stat2(resolveWithin(this.root, key));
      out.set(key, { md5: md5Hex(buf), mtimeMs });
    }
    return out;
  }
  async readText(key) {
    return this.blobs.getText(key);
  }
  async readBytes(key) {
    return this.blobs.get(key);
  }
  /** Atomic write (temp + rename) so readers never see torn files. */
  async writeAtomic(key, data) {
    await writeFileAtomic2(resolveWithin(this.root, key), data);
  }
  async delete(key) {
    await this.blobs.delete(key);
  }
};

// ../../packages/sync/src/engine.ts
function createSyncEngine(config, deps = {}) {
  let currentToken = config.token;
  const http = new MemoryHttpClient(config, () => currentToken);
  const tree = new TreeFs(config.contextTreeRoot);
  const state = new SyncState(config.syncDir);
  const mode = config.mode ?? "bidirectional";
  let bootstrapped = !config.bootstrap;
  const activeOps = /* @__PURE__ */ new Set();
  function track(promise) {
    activeOps.add(promise);
    return promise.finally(() => activeOps.delete(promise));
  }
  const inFlight = /* @__PURE__ */ new Set();
  let reconcileInFlight;
  let reconcileAgainRequested = false;
  let ws;
  let stopWatch;
  let poll;
  let running = false;
  let authExpiredEmitted = false;
  function handleError(err, key) {
    if (err instanceof AuthError || err instanceof RejectedError && err.reason === "forbidden") {
      expireAuth();
    } else if (err instanceof RejectedError && key) {
      setStatus({
        rejected: [...current.rejected, { key, reason: err.reason }]
      });
    } else {
      setStatus({
        pendingError: err instanceof Error ? err.message : String(err)
      });
    }
  }
  function displayNameForKey(key) {
    const name = key.split(/[\\/]/).filter(Boolean).at(-1);
    if (!name) return void 0;
    const trimmed = name.trim();
    if (trimmed.length === 0 || trimmed.length > 80) return void 0;
    if (/[\u0000-\u001f\u007f]/.test(trimmed)) return void 0;
    return trimmed;
  }
  function setProgress(key, completed, total) {
    if (total <= 0) return;
    const currentFileName = displayNameForKey(key);
    if (!currentFileName) return;
    const progressPercent = Math.min(100, Math.max(0, Math.round(completed / total * 100)));
    setStatus({
      state: current.state === "auth-expired" ? "auth-expired" : "syncing",
      currentFileName,
      progressPercent
    });
  }
  function clearProgress() {
    setStatus({
      currentFileName: void 0,
      progressPercent: void 0
    });
  }
  const listeners = {
    pulled: /* @__PURE__ */ new Set(),
    conflict: /* @__PURE__ */ new Set(),
    status: /* @__PURE__ */ new Set(),
    "auth-expired": /* @__PURE__ */ new Set()
  };
  function on2(event, cb) {
    listeners[event].add(cb);
  }
  function emit2(event, payload) {
    for (const cb of listeners[event]) cb(payload);
  }
  let current = {
    running: false,
    state: "idle",
    wsState: "degraded",
    conflicts: [],
    rejected: [],
    pendingError: null
  };
  function setStatus(patch) {
    current = { ...current, ...patch };
    void state.setStatus(current);
    emit2("status", current);
  }
  function expireAuth() {
    running = false;
    stopWatch?.();
    stopWatch = void 0;
    if (poll) clearInterval(poll);
    poll = void 0;
    ws?.close();
    ws = void 0;
    setStatus({ running: false, state: "auth-expired", wsState: "degraded", currentFileName: void 0, progressPercent: void 0 });
    if (!authExpiredEmitted) {
      authExpiredEmitted = true;
      emit2("auth-expired");
    }
  }
  async function pushLocal(keys) {
    const baseline = await state.getBaseline();
    let pushed = false;
    for (const key of keys) {
      if (!isSyncable(key)) continue;
      const text = await tree.readText(key);
      if (text === void 0) {
        if (baseline[key]) {
          try {
            await http.deleteFile(key);
            delete baseline[key];
          } catch (err) {
            handleError(err, key);
          }
        }
        continue;
      }
      const local = md5Hex(text);
      if (baseline[key]?.md5 === local) continue;
      const prev = baseline[key];
      baseline[key] = { md5: local, updatedAt: (/* @__PURE__ */ new Date()).toISOString() };
      inFlight.add(key);
      try {
        const put = await http.putFile(key, text);
        baseline[key] = { md5: put.md5, updatedAt: put.updatedAt };
        pushed = true;
      } catch (err) {
        if (prev) baseline[key] = prev;
        else delete baseline[key];
        handleError(err, key);
      } finally {
        inFlight.delete(key);
      }
    }
    await state.setBaseline(baseline);
    if (pushed)
      setStatus({ lastPushAt: (/* @__PURE__ */ new Date()).toISOString(), pendingError: null });
  }
  async function onRemoteEvent(e) {
    if (e.teamId !== config.teamId || e.spaceId !== config.spaceId) return;
    if (!isSyncable(e.key)) return;
    try {
      const baseline = await state.getBaseline();
      if (e.op === "delete") {
        const localText = await tree.readText(e.key);
        if (localText !== void 0) {
          if (!baseline[e.key] || baseline[e.key].md5 !== md5Hex(localText)) {
            return;
          }
        }
        await tree.delete(e.key);
        delete baseline[e.key];
        await state.setBaseline(baseline);
        emit2("pulled", [e.key]);
        setStatus({ lastPullAt: (/* @__PURE__ */ new Date()).toISOString(), pendingError: null });
        return;
      }
      if (baseline[e.key]?.md5 === e.md5) return;
      if (inFlight.has(e.key)) return;
      const localBefore = await tree.readText(e.key);
      const localClean = localBefore === void 0 || !!baseline[e.key] && md5Hex(localBefore) === baseline[e.key].md5;
      if (!localClean) {
        void reconcileOnce().catch((err) => handleError(err, e.key));
        return;
      }
      const body = await http.getFile(e.key);
      await tree.writeAtomic(e.key, body);
      baseline[e.key] = { md5: e.md5 ?? md5Hex(body), updatedAt: e.at };
      await state.setBaseline(baseline);
      if (config.afterPull) await config.afterPull([e.key]);
      emit2("pulled", [e.key]);
      setStatus({ lastPullAt: (/* @__PURE__ */ new Date()).toISOString(), pendingError: null });
    } catch (err) {
      handleError(err, e.key);
    }
  }
  function reconcileOnce() {
    if (reconcileInFlight) {
      reconcileAgainRequested = true;
      return reconcileInFlight;
    }
    reconcileInFlight = runReconcileQueue().finally(() => {
      reconcileInFlight = void 0;
      reconcileAgainRequested = false;
    });
    return reconcileInFlight;
  }
  async function runReconcileQueue() {
    let result = await doReconcileOnce();
    while (reconcileAgainRequested) {
      reconcileAgainRequested = false;
      result = await doReconcileOnce();
    }
    return result;
  }
  async function doReconcileOnce() {
    const baseline = await state.getBaseline();
    const local = await tree.listSyncable();
    const remote = /* @__PURE__ */ new Map();
    for (const e of await http.getManifest()) {
      if (isSyncable(e.key)) remote.set(e.key, e);
    }
    const reconcileMode = !bootstrapped ? "bootstrap" : mode;
    const actions = planReconcile(
      { local, remote, baseline },
      (/* @__PURE__ */ new Date()).toISOString(),
      {
        mode: reconcileMode
      }
    );
    const result = {
      pulled: [],
      pushed: [],
      deleted: [],
      conflicts: []
    };
    const nextBaseline = { ...baseline };
    const pulledKeys = [];
    const localChangesNotUploaded = [];
    let bootstrapFailed = false;
    const totalActions = actions.length;
    let completedActions = 0;
    try {
      for (const act of actions) {
        setProgress(act.key, completedActions, totalActions);
        try {
          await applyAction(act, {
            local,
            remote,
            nextBaseline,
            result,
            pulledKeys,
            localChangesNotUploaded
          });
        } catch (err) {
          if (!bootstrapped) bootstrapFailed = true;
          handleError(err, act.key);
        } finally {
          completedActions += 1;
        }
      }
      for (const key of Object.keys(nextBaseline)) {
        if (!local.has(key) && !remote.has(key)) delete nextBaseline[key];
      }
      await state.setBaseline(nextBaseline);
      if (pulledKeys.length) {
        if (config.afterPull) await config.afterPull(pulledKeys);
        emit2("pulled", pulledKeys);
      }
      for (const c of result.conflicts) emit2("conflict", c);
      const now = (/* @__PURE__ */ new Date()).toISOString();
      if (!bootstrapped && !bootstrapFailed) {
        bootstrapped = true;
        setStatus({ bootstrapReady: true, baselineEstablishedAt: now });
        ensureWatchStarted();
      } else if (!bootstrapped && bootstrapFailed) {
        setStatus({ bootstrapReady: false });
      }
      setStatus({
        state: current.state === "auth-expired" ? "auth-expired" : "idle",
        lastSyncAt: now,
        ...result.pushed.length ? { lastPushAt: now } : {},
        ...result.pulled.length ? { lastPullAt: now } : {},
        conflicts: result.conflicts,
        localChangesNotUploaded,
        currentFileName: void 0,
        progressPercent: void 0
      });
    } finally {
      if (current.state === "syncing") {
        setStatus({
          state: "idle",
          currentFileName: void 0,
          progressPercent: void 0
        });
      }
    }
    return result;
  }
  async function applyAction(act, ctx) {
    const { nextBaseline, result, localChangesNotUploaded } = ctx;
    switch (act.kind) {
      case "push": {
        const text = await tree.readText(act.key);
        if (text === void 0) break;
        const put = await http.putFile(act.key, text);
        nextBaseline[act.key] = { md5: put.md5, updatedAt: put.updatedAt };
        result.pushed.push(act.key);
        break;
      }
      case "pull": {
        await pull(act.key, ctx);
        break;
      }
      case "delete-remote": {
        await http.deleteFile(act.key);
        delete nextBaseline[act.key];
        result.deleted.push(act.key);
        break;
      }
      case "delete-local": {
        const cur = await tree.readText(act.key);
        const base = nextBaseline[act.key];
        if (cur !== void 0 && base && md5Hex(cur) !== base.md5) {
          localChangesNotUploaded.push(act.key);
          break;
        }
        await tree.delete(act.key);
        delete nextBaseline[act.key];
        result.deleted.push(act.key);
        break;
      }
      case "local-change-not-uploaded": {
        localChangesNotUploaded.push(act.key);
        break;
      }
      case "conflict": {
        result.conflicts.push({ ...act, at: (/* @__PURE__ */ new Date()).toISOString() });
        if (act.winner === "remote") await pull(act.key, ctx);
        else {
          const text = await tree.readText(act.key);
          if (text === void 0) break;
          const put = await http.putFile(act.key, text);
          nextBaseline[act.key] = { md5: put.md5, updatedAt: put.updatedAt };
          result.pushed.push(act.key);
        }
        break;
      }
    }
  }
  async function pull(key, ctx) {
    const entry = ctx.remote.get(key);
    const body = await http.getFile(key);
    await tree.writeAtomic(key, body);
    ctx.nextBaseline[key] = { md5: entry.md5, updatedAt: entry.updatedAt };
    ctx.result.pulled.push(key);
    ctx.pulledKeys.push(key);
  }
  function status() {
    return current;
  }
  function setToken(token) {
    currentToken = token;
  }
  function ensureWatchStarted() {
    if (!running || mode !== "bidirectional" || !bootstrapped || stopWatch)
      return;
    stopWatch = watchTree(
      config.contextTreeRoot,
      400,
      (keys) => void track(pushLocal(keys).catch(handleError))
    );
    setStatus({ watchEnabledAt: (/* @__PURE__ */ new Date()).toISOString() });
  }
  function reconcileAfterReconnect() {
    if (!running) return;
    void track(reconcileOnce().catch(handleError));
  }
  async function start() {
    if (running) return;
    running = true;
    authExpiredEmitted = false;
    setStatus({ running: true, state: "syncing", wsState: "degraded" });
    await mkdir6(config.contextTreeRoot, { recursive: true });
    await track(reconcileOnce().catch(handleError));
    if (!running) return;
    const makeWs = deps.createWsClient ?? ((args) => new WsClient(args.baseUrl, args.token, {
      onEvent: args.onEvent,
      onConnectError: args.onConnectError,
      onTerminalDisconnect: args.onTerminalDisconnect,
      onState: args.onState,
      onReconnect: args.onReconnect
    }));
    ws = makeWs({
      baseUrl: config.baseUrl,
      token: () => currentToken,
      onEvent: (e) => void track(onRemoteEvent(e).catch(() => {
      })),
      onState: (wsState) => setStatus({ wsState }),
      onReconnect: reconcileAfterReconnect,
      onConnectError: (err) => {
        if (isAuthLikeConnectError(err)) expireAuth();
      },
      onTerminalDisconnect: () => {
        expireAuth();
      }
    });
    await ws.connect().catch(() => {
    });
    if (!running) return;
    ensureWatchStarted();
    const interval = config.pollIntervalMs ?? 15e3;
    poll = setInterval(
      () => void track(reconcileOnce().catch(handleError)),
      interval
    );
  }
  async function stop() {
    running = false;
    stopWatch?.();
    stopWatch = void 0;
    if (poll) clearInterval(poll);
    poll = void 0;
    ws?.close();
    ws = void 0;
    await Promise.allSettled([...activeOps]);
    setStatus({ running: false, wsState: "degraded", currentFileName: void 0, progressPercent: void 0 });
  }
  return { reconcileOnce, start, stop, status, setToken, on: on2 };
}

// ../../packages/core/src/analytics/identity-promoter.ts
init_paths();

// ../../packages/core/src/analytics/queue-reader.ts
init_paths();

// ../../packages/sync/src/analytics/forwarder-host.ts
var DEFAULT_INTERVAL_MS = 60 * 1e3;
var DEFAULT_HELD_TTL_MS = 24 * 60 * 60 * 1e3;

// ../../packages/sync/src/daemon-auth-store.ts
import { chmod, mkdir as mkdir7, readFile as readFile8, rename as rename5, writeFile as writeFile7, rm as rm7 } from "node:fs/promises";
import { dirname as dirname7, join as join10 } from "node:path";
function daemonAuthPath(projectsRoot) {
  return join10(projectsRoot, ".daemon", "auth.json");
}
async function readDaemonAuth(path) {
  try {
    const raw = await readFile8(path, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

// ../../packages/sync/src/daemon-status.ts
import { chmod as chmod2, mkdir as mkdir8, readFile as readFile9, rename as rename6, writeFile as writeFile8 } from "node:fs/promises";
import { dirname as dirname8, join as join11 } from "node:path";
function daemonStatusPath(projectsRoot) {
  return join11(projectsRoot, ".daemon", "status.json");
}
function normalizeAuthState(value2) {
  if (value2 === "auth-expired" || value2 === "auth_expired") {
    return "auth_expired";
  }
  if (value2 === "not_configured" || value2 === "signed_out" || value2 === "provisioning" || value2 === "starting" || value2 === "transient_error" || value2 === "credential_persistence_error" || value2 === "running") {
    return value2;
  }
  return null;
}
function normalizeProviderKind(value2) {
  if (value2 === "api-key" || value2 === "daemon-device-session" || value2 === "none") {
    return value2;
  }
  return null;
}
function normalizeSyncWorkState(value2) {
  return value2 === "idle" || value2 === "syncing" ? value2 : void 0;
}
function normalizeProgressPercent(value2) {
  return typeof value2 === "number" && Number.isFinite(value2) && value2 >= 0 && value2 <= 100 ? value2 : void 0;
}
function normalizeDisplayFileName(value2) {
  if (typeof value2 !== "string") return void 0;
  const trimmed = value2.trim();
  if (trimmed.length === 0 || trimmed.length > 80) return void 0;
  if (trimmed.startsWith("/") || trimmed.startsWith("\\") || /^[a-zA-Z]:[\\/]/.test(trimmed))
    return void 0;
  if (/[\\/]/.test(trimmed)) return void 0;
  if (/[\u0000-\u001f\u007f]/.test(trimmed)) return void 0;
  return trimmed;
}
function normalizeStatus(raw) {
  if (!raw || typeof raw !== "object") return null;
  const value2 = raw;
  const authState = normalizeAuthState(value2.authState ?? value2.state);
  if (!authState) return null;
  return {
    schemaVersion: 1,
    providerKind: normalizeProviderKind(value2.providerKind) ?? "none",
    authState,
    daemonInstanceId: typeof value2.daemonInstanceId === "string" && value2.daemonInstanceId.length > 0 ? value2.daemonInstanceId : void 0,
    heartbeatAt: typeof value2.heartbeatAt === "string" && value2.heartbeatAt.length > 0 ? value2.heartbeatAt : void 0,
    lastExchangeAt: typeof value2.lastExchangeAt === "string" ? value2.lastExchangeAt : null,
    nextRetryAt: typeof value2.nextRetryAt === "string" ? value2.nextRetryAt : null,
    error: typeof value2.error === "string" ? value2.error : null,
    spaces: Array.isArray(value2.spaces) ? value2.spaces.map((rawSpace) => {
      const space = rawSpace;
      const syncWorkState = normalizeSyncWorkState(space.syncWorkState);
      const currentFileName = normalizeDisplayFileName(
        space.currentFileName
      );
      const progressPercent = normalizeProgressPercent(
        space.progressPercent
      );
      return {
        spaceId: String(space.spaceId ?? space.space_id ?? ""),
        spaceName: String(space.spaceName ?? space.space_name ?? ""),
        syncState: space.syncState === "active" || space.state === "active" ? "active" : "paused",
        ...syncWorkState ? { syncWorkState } : {},
        ...currentFileName ? { currentFileName } : {},
        ...progressPercent !== void 0 ? { progressPercent } : {}
      };
    }).filter((space) => space.spaceId.length > 0) : []
  };
}
async function readDaemonStatus(path) {
  try {
    const raw = await readFile9(path, "utf8");
    return normalizeStatus(JSON.parse(raw));
  } catch {
    return null;
  }
}

// src/sync/token-manager.ts
var TokenMintError = class extends Error {
  constructor(status, retryable, code) {
    super(code ? `mint:${status}:${code}` : `mint:${status}`);
    this.status = status;
    this.retryable = retryable;
    this.code = code;
  }
};
var UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function isValidSpace(space) {
  if (typeof space !== "object" || space === null) return false;
  const s = space;
  if (typeof s.space_id !== "string" || !UUID_RE.test(s.space_id)) return false;
  if (typeof s.space_name !== "string" || s.space_name.length === 0)
    return false;
  if (typeof s.team_id !== "string" || !UUID_RE.test(s.team_id)) return false;
  if (typeof s.team_name !== "string") return false;
  if (s.team_slug !== null && typeof s.team_slug !== "string") return false;
  if (s.space_slug !== null && typeof s.space_slug !== "string") return false;
  if (!["OWNER", "ADMIN", "MEMBER"].includes(s.role)) return false;
  if (!Array.isArray(s.scopes)) return false;
  const validScopes = s.scopes.every(
    (sc) => sc === "space:read" || sc === "space:write"
  );
  if (!validScopes) return false;
  if (s.scopes.includes("space:write") && !s.scopes.includes("space:read"))
    return false;
  if (s.sync_state !== "active" && s.sync_state !== "paused") return false;
  if (s.sync_state === "paused" && s.sync_disabled_reason === null) return false;
  if (s.sync_state === "active" && s.sync_disabled_reason !== null) return false;
  return true;
}
async function mintToken(input) {
  const f = input.fetchImpl ?? fetch;
  let res;
  try {
    res = await f(`${input.authUrl}/api/tokens/file-sync`, {
      method: "POST",
      headers: { authorization: `Bearer ${input.apiKey}` }
    });
  } catch {
    throw new TokenMintError(0, true);
  }
  if (res.status === 200) {
    const data = await res.json();
    if (!Array.isArray(data.spaces)) {
      throw new TokenMintError(200, true);
    }
    if (!data.spaces.every(isValidSpace)) {
      throw new TokenMintError(200, true);
    }
    const spaces = data.spaces;
    if (data.totalSpaces !== spaces.length) {
      throw new TokenMintError(200, true);
    }
    if (data.complete !== true) {
      throw new TokenMintError(200, true);
    }
    if (!Number.isInteger(data.expiresIn) || data.expiresIn < 1 || data.expiresIn > 900) {
      throw new TokenMintError(200, true);
    }
    const hasActiveReadable = spaces.some(
      (s) => s.sync_state === "active" && s.scopes.includes("space:read")
    );
    if (hasActiveReadable) {
      if (typeof data.token !== "string" || data.token.length === 0 || data.tokenType !== "Bearer") {
        throw new TokenMintError(200, true, "active inventory requires token");
      }
    } else {
      if (data.token !== null || data.tokenType !== null) {
        throw new TokenMintError(
          200,
          true,
          "paused inventory must not include token"
        );
      }
    }
    return {
      token: data.token ?? null,
      tokenType: data.tokenType ?? null,
      expiresIn: data.expiresIn,
      complete: true,
      totalSpaces: spaces.length,
      spaces
    };
  }
  if (res.status === 422) {
    try {
      const body = await res.json();
      if (body.error === "too_many_syncable_spaces") {
        throw new TokenMintError(422, false, "too_many_syncable_spaces");
      }
    } catch (err) {
      if (err instanceof TokenMintError) throw err;
    }
    throw new TokenMintError(422, false);
  }
  const retryable = res.status === 429 || res.status >= 500;
  throw new TokenMintError(res.status, retryable);
}

// src/sync/auth-provider.ts
async function hasDaemonAuthProvider(input) {
  if (input.apiKey) return true;
  const authPath = daemonAuthPath(input.projectsRoot);
  const stored = await readDaemonAuth(authPath);
  return stored !== null;
}

// src/sync/config.ts
import {
  access as access2,
  chmod as chmod3,
  mkdir as mkdir9,
  readFile as readFile10,
  rename as rename7,
  writeFile as writeFile9
} from "node:fs/promises";
import { randomUUID as randomUUID2 } from "node:crypto";
import { dirname as dirname9, join as join12 } from "node:path";
var FILE = "sync.json";
async function pathExists(path) {
  try {
    await access2(path);
    return true;
  } catch {
    return false;
  }
}
function legacySyncConfigPathForContextTreeRoot(contextTreeRoot) {
  return join12(dirname9(contextTreeRoot), "sync", FILE);
}
async function hasConfigFile(syncDir) {
  return pathExists(join12(syncDir, FILE));
}
async function hasLegacyConfigWithoutCurrent(input) {
  return !await hasConfigFile(input.syncDir) && await pathExists(
    legacySyncConfigPathForContextTreeRoot(input.contextTreeRoot)
  );
}
async function readConfig(syncDir) {
  try {
    const raw = await readFile10(join12(syncDir, FILE), "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
async function writeConfig(syncDir, cfg) {
  await mkdir9(syncDir, { recursive: true });
  const path = join12(syncDir, FILE);
  const tmp = join12(syncDir, `.${FILE}.${randomUUID2()}.tmp`);
  await writeFile9(tmp, JSON.stringify(cfg, null, 2) + "\n", { mode: 384 });
  await chmod3(tmp, 384);
  await rename7(tmp, path);
}
function resolveApiKey(cfg) {
  return process.env.BRV_API_KEY || cfg.apiKey;
}

// src/sync/daemon-log.ts
import {
  chmodSync,
  closeSync,
  existsSync,
  mkdirSync,
  openSync,
  readdirSync,
  renameSync,
  rmSync,
  statSync
} from "node:fs";
import { join as join13 } from "node:path";
var DAEMON_LOG_FILE = "daemon.log";
var ROTATED_DAEMON_LOG_PREFIX = "daemon-";
var MAX_ACTIVE_DAEMON_LOG_BYTES = 150 * 1024 * 1024;
var ROTATED_DAEMON_LOG_RETENTION_MS = 7 * 24 * 60 * 60 * 1e3;
function daemonDir(projectsRoot) {
  return join13(projectsRoot, ".daemon");
}
function daemonLogPath(projectsRoot) {
  return join13(daemonDir(projectsRoot), DAEMON_LOG_FILE);
}
function localDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function timestampKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day}-${hour}${minute}${second}`;
}
function rotatedLogPath(dir, now, suffix) {
  const base = `${ROTATED_DAEMON_LOG_PREFIX}${timestampKey(now)}`;
  const suffixPart = suffix === 0 ? "" : `-${suffix}`;
  return join13(dir, `${base}${suffixPart}.log`);
}
function isCollisionError(err) {
  return isNodeError(err) && (err.code === "EEXIST" || err.code === "ENOTEMPTY");
}
function rotateActiveLog(logPath, dir, now, fs) {
  for (let suffix = 0; ; suffix++) {
    const candidate = rotatedLogPath(dir, now, suffix);
    if (fs.existsSync(candidate)) continue;
    try {
      fs.renameSync(logPath, candidate);
      try {
        fs.chmodSync(candidate, 384);
      } catch {
      }
      return candidate;
    } catch (err) {
      if (isCollisionError(err)) continue;
      throw err;
    }
  }
}
function isRotatedDaemonLog(name) {
  return name.startsWith(ROTATED_DAEMON_LOG_PREFIX) && name.endsWith(".log") && name !== DAEMON_LOG_FILE;
}
function withFs(overrides = {}) {
  return {
    chmodSync,
    closeSync,
    existsSync,
    mkdirSync,
    openSync,
    readdirSync,
    renameSync,
    rmSync,
    statSync,
    ...overrides
  };
}
function ensureActiveLog(path, fs) {
  const fd = fs.openSync(path, "a", 384);
  fs.closeSync(fd);
  try {
    fs.chmodSync(path, 384);
  } catch {
  }
}
function pruneRotatedLogs(dir, now, retentionMs, fs) {
  let names;
  try {
    names = fs.readdirSync(dir);
  } catch {
    return;
  }
  const cutoff = now.getTime() - retentionMs;
  for (const name of names) {
    if (!isRotatedDaemonLog(name)) continue;
    const path = join13(dir, name);
    try {
      if (fs.statSync(path).mtimeMs < cutoff) {
        fs.rmSync(path, { force: true });
      }
    } catch {
    }
  }
}
function maintainDaemonLog(projectsRoot, options = {}) {
  const fs = withFs(options.fs);
  const now = options.now ?? /* @__PURE__ */ new Date();
  const maxActiveBytes = options.maxActiveBytes ?? MAX_ACTIVE_DAEMON_LOG_BYTES;
  const retentionMs = options.retentionMs ?? ROTATED_DAEMON_LOG_RETENTION_MS;
  const dir = daemonDir(projectsRoot);
  const logPath = daemonLogPath(projectsRoot);
  fs.mkdirSync(dir, { recursive: true });
  let rotatedPath = null;
  try {
    const active = fs.statSync(logPath);
    const rotateForSize = active.size >= maxActiveBytes;
    const rotateForDay = localDateKey(active.mtime) < localDateKey(now);
    if (rotateForSize || rotateForDay) {
      rotatedPath = rotateActiveLog(logPath, dir, now, fs);
    }
  } catch (err) {
    if (!isNodeError(err) || err.code !== "ENOENT") {
      throw err;
    }
  }
  pruneRotatedLogs(dir, now, retentionMs, fs);
  ensureActiveLog(logPath, fs);
  return { logPath, rotatedPath };
}
function prepareDaemonLog(projectsRoot, options = {}) {
  const logPath = daemonLogPath(projectsRoot);
  try {
    maintainDaemonLog(projectsRoot, options);
  } catch {
  }
  return logPath;
}
function openDaemonLogForSpawn(projectsRoot, options = {}) {
  const fs = withFs(options.fs);
  try {
    const logPath = prepareDaemonLog(projectsRoot, options);
    const fd = fs.openSync(logPath, "a", 384);
    try {
      fs.chmodSync(logPath, 384);
    } catch {
    }
    return fd;
  } catch {
    return "ignore";
  }
}
function isNodeError(error) {
  return typeof error === "object" && error !== null && "code" in error;
}

// src/sync/pidfile.ts
import { mkdir as mkdir10, open, readFile as readFile11, rm as rm8 } from "node:fs/promises";
import { join as join14 } from "node:path";
var FILE2 = "daemon.pid";
async function readPid(daemonDir2) {
  try {
    const data = JSON.parse(await readFile11(join14(daemonDir2, FILE2), "utf8"));
    return typeof data.pid === "number" && data.script === "sync-daemon" && typeof data.projectsRoot === "string" ? data : null;
  } catch {
    return null;
  }
}
async function removePid(daemonDir2) {
  await rm8(join14(daemonDir2, FILE2), { force: true });
}
function isAlive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch (err) {
    return err.code === "EPERM";
  }
}
function isOwnedDaemon(record, projectsRoot) {
  return Boolean(record && record.script === "sync-daemon" && record.projectsRoot === projectsRoot);
}

// src/sync/paths.ts
function syncDirFor(contextTreeRoot) {
  return syncStateDirForContextTreeRoot(contextTreeRoot);
}
async function resolveSyncDirs(cwd = process.cwd()) {
  const contextTreeRoot = await ensureContextRoot(cwd);
  return { contextTreeRoot, syncDir: syncDirFor(contextTreeRoot) };
}

// src/sync/ensure-daemon.ts
function resolveProjectsRoot() {
  return process.env.BRV_PROJECTS_ROOT ?? getProjectsDir();
}

// src/sync/cli.ts
function emit(obj) {
  console.log(JSON.stringify(obj));
}
function parseFlags(argv) {
  const flags = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a?.startsWith("--")) {
      flags[a.slice(2)] = argv[i + 1] ?? "";
      i++;
    }
  }
  return flags;
}
var UUID_RE2 = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function isUrl(value2) {
  try {
    const u = new URL(value2);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}
function spawnDaemon(projectsRoot) {
  const daemon = join15(
    dirname10(fileURLToPath(import.meta.url)),
    "sync-daemon.mjs"
  );
  const logTarget = openDaemonLogForSpawn(projectsRoot);
  const child = spawn(process.execPath, [daemon, projectsRoot], {
    detached: true,
    stdio: ["ignore", logTarget, logTarget],
    cwd: process.cwd(),
    env: process.env
  });
  child.unref();
  if (typeof logTarget === "number") closeSync2(logTarget);
}
async function runSyncCli(argv, deps = {}) {
  const resolveDirs = deps.resolveSyncDirs ?? resolveSyncDirs;
  const [command, ...rest] = argv;
  switch (command) {
    case "config": {
      const { contextTreeRoot, syncDir } = await resolveDirs(process.cwd());
      const f = parseFlags(rest);
      const legacyConfigIgnored = await hasLegacyConfigWithoutCurrent({
        contextTreeRoot,
        syncDir
      });
      const prev = await readConfig(syncDir) ?? {};
      const next = {
        authUrl: f["auth-url"] ?? prev.authUrl ?? "",
        baseUrl: f["base-url"] ?? prev.baseUrl ?? "",
        apiKey: f["api-key"] ?? prev.apiKey,
        teamId: f["team"] ?? prev.teamId ?? "",
        spaceId: f["space"] ?? prev.spaceId ?? "",
        pollIntervalMs: f["poll"] ? Number(f["poll"]) : prev.pollIntervalMs
      };
      if (!isUrl(next.authUrl) || !isUrl(next.baseUrl)) {
        emit({
          ok: false,
          error: "invalid_url",
          ...legacyConfigIgnored ? { warning: "legacy_sync_config_ignored" } : {}
        });
        return;
      }
      if (!UUID_RE2.test(next.teamId) || !UUID_RE2.test(next.spaceId)) {
        emit({
          ok: false,
          error: "invalid_team_or_space",
          ...legacyConfigIgnored ? { warning: "legacy_sync_config_ignored" } : {}
        });
        return;
      }
      if (next.pollIntervalMs !== void 0 && (!Number.isInteger(next.pollIntervalMs) || next.pollIntervalMs <= 0)) {
        emit({
          ok: false,
          error: "invalid_poll",
          ...legacyConfigIgnored ? { warning: "legacy_sync_config_ignored" } : {}
        });
        return;
      }
      await writeConfig(syncDir, next);
      emit({
        ok: true,
        configured: true,
        ...legacyConfigIgnored ? { warning: "legacy_sync_config_ignored" } : {}
      });
      return;
    }
    case "status": {
      const projectsRoot = resolveProjectsRoot();
      const daemonDir2 = join15(projectsRoot, ".daemon");
      const record = await readPid(daemonDir2);
      const running = isOwnedDaemon(record, projectsRoot) && isAlive(record.pid);
      const statusFile = await readDaemonStatus(daemonStatusPath(projectsRoot));
      emit({
        ok: true,
        running,
        ...statusFile ? {
          providerKind: statusFile.providerKind,
          authState: statusFile.authState,
          lastExchangeAt: statusFile.lastExchangeAt,
          error: statusFile.error
        } : {}
      });
      return;
    }
    case "start": {
      const projectsRoot = resolveProjectsRoot();
      const authUrl = process.env.BRV_AUTH_URL ?? "https://prod4-app.byterover.dev";
      const providerAvailable = await hasDaemonAuthProvider({
        projectsRoot,
        authUrl,
        apiKey: process.env.BRV_API_KEY
      });
      if (!providerAvailable) {
        emit({ ok: false, error: "not_configured" });
        return;
      }
      const daemonDir2 = join15(projectsRoot, ".daemon");
      const record = await readPid(daemonDir2);
      if (isOwnedDaemon(record, projectsRoot) && isAlive(record.pid)) {
        emit({ ok: true, running: true, spawned: false });
        return;
      }
      (deps.spawnDaemon ?? spawnDaemon)(projectsRoot);
      emit({ ok: true, running: true, spawned: true });
      return;
    }
    case "stop": {
      const projectsRoot = resolveProjectsRoot();
      const daemonDir2 = join15(projectsRoot, ".daemon");
      const record = await readPid(daemonDir2);
      if (isOwnedDaemon(record, projectsRoot) && isAlive(record.pid)) {
        try {
          (deps.kill ?? process.kill)(record.pid, "SIGTERM");
        } catch {
        }
      }
      await removePid(daemonDir2);
      emit({ ok: true, running: false });
      return;
    }
    case "once": {
      const { contextTreeRoot, syncDir } = await resolveDirs(process.cwd());
      const cfg = await readConfig(syncDir);
      const legacyConfigIgnored = await hasLegacyConfigWithoutCurrent({
        contextTreeRoot,
        syncDir
      });
      const apiKey = cfg ? resolveApiKey(cfg) : void 0;
      if (!cfg || !apiKey) {
        emit({
          ok: false,
          error: "not_configured",
          ...legacyConfigIgnored ? { warning: "legacy_sync_config_ignored" } : {}
        });
        return;
      }
      const { token } = await mintToken({
        authUrl: cfg.authUrl,
        apiKey
      });
      if (token === null) {
        emit({ ok: false, error: "paused_inventory" });
        return;
      }
      const engine = createSyncEngine({
        baseUrl: cfg.baseUrl,
        teamId: cfg.teamId,
        spaceId: cfg.spaceId,
        token,
        contextTreeRoot,
        syncDir,
        afterPull: async () => {
          try {
            await rebuildManifest(contextTreeRoot);
            await rebuildIndex(contextTreeRoot);
          } catch {
          }
        }
      });
      const r = await engine.reconcileOnce();
      emit({
        ok: true,
        pulled: r.pulled,
        pushed: r.pushed,
        deleted: r.deleted,
        conflicts: r.conflicts
      });
      return;
    }
    default:
      emit({ ok: false, error: `unknown command: ${command ?? "(none)"}` });
  }
}

// src/entries/sync.ts
void runSyncCli(process.argv.slice(2)).catch((err) => {
  console.log(JSON.stringify({ ok: false, error: String(err) }));
  process.exit(1);
});
/*! Bundled license information:

xmlhttprequest-ssl/lib/XMLHttpRequest.js:
  (**
   * Wrapper for built-in http.js to emulate the browser XMLHttpRequest object.
   *
   * This can be used with JS designed for browsers to improve reuse of code and
   * allow the use of existing libraries.
   *
   * Usage: include("XMLHttpRequest.js") and use XMLHttpRequest per W3C specs.
   *
   * @author Dan DeFelippi <dan@driverdan.com>
   * @contributor David Ellis <d.f.ellis@ieee.org>
   * @license MIT
   *)

js-yaml/dist/js-yaml.mjs:
  (*! js-yaml 4.1.1 https://github.com/nodeca/js-yaml @license MIT *)
*/
