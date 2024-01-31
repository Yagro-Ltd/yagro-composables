function n(t) {
  return t ? new Intl.NumberFormat("en-GB", t) : void 0;
}
function e(t) {
  if (!t)
    return;
  const r = n({
    style: "currency",
    currency: "GBP"
  });
  return r == null ? void 0 : r.format(t);
}
function o(t) {
  if (!t)
    return "";
  const r = t.lastIndexOf(".");
  return r === -1 ? t : t.substring(0, r);
}
function i(t) {
  return t ? n({
    notation: "compact",
    style: "unit",
    unit: "byte",
    unitDisplay: "narrow"
  }).format(t) : void 0;
}
function u(t) {
  if (!t)
    return "";
  const r = t.lastIndexOf(".");
  return r === -1 ? t : t.substring(r + 1);
}
export {
  n as useBaseFormatter,
  u as useExtractFileExtension,
  o as useExtractFileName,
  e as useFormatCurrency,
  i as useFormatFileSize
};
