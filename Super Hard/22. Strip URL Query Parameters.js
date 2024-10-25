/*

Create a function that takes a URL (string), removes duplicate query parameters and parameters specified within the 2nd argument (which will be an optional array).

Examples
stripUrlParams("https://edabit.com?a=1&b=2&a=2") ➞ "https://edabit.com?a=2&b=2"
stripUrlParams("https://edabit.com?a=1&b=2&a=2", ["b"]) ➞ "https://edabit.com?a=2"
stripUrlParams("https://edabit.com", ["b"]) ➞ "https://edabit.com"

Notes
The 2nd argument paramsToStrip is optional.
paramsToStrip can contain multiple params.
If there are duplicate query parameters with different values, use the value of the last occurring parameter (see examples #1 and #2 above).

*/

function stripUrlParams(url, paramsToStrip) {
  const [urlPart, paramsPart] = url.split("?");
  if (!paramsPart) {
    return urlPart;
  }

  const params = paramsPart.split("&");
  const paramsMap = {};

  params.forEach((param) => {
    const [key, value] = param.split("=");
    if (paramsToStrip && paramsToStrip.includes(key)) {
      return;
    }
    paramsMap[key] = value;
  });

  const finalParams = Object.entries(paramsMap).reduce(
    (output, [k, v], i) => (i > 0 ? `${output}&${k}=${v}` : `${k}=${v}`),
    ""
  );

  return `${urlPart}?${finalParams}`;
}
