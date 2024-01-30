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
function u(t) {
  return t ? n({
    notation: "compact",
    style: "unit",
    unit: "byte",
    unitDisplay: "narrow"
  }).format(t) : void 0;
}
export {
  n as useBaseFormatter,
  o as useExtractFileName,
  e as useFormatCurrency,
  u as useFormatFileSize
};
