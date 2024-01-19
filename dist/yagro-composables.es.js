function n(r) {
  return r ? new Intl.NumberFormat("en-GB", r) : void 0;
}
function e(r) {
  return r ? n({
    notation: "compact",
    style: "unit",
    unit: "byte",
    unitDisplay: "narrow"
  }).format(r) : void 0;
}
function o(r) {
  if (!r)
    return;
  const t = n({
    style: "currency",
    currency: "GBP"
  });
  return t == null ? void 0 : t.format(r);
}
export {
  n as useBaseFormatter,
  o as useFormatCurrency,
  e as useFormatFileSize
};
